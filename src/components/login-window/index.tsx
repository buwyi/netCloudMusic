import { memo, useEffect, useRef, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { LoginWindowWrapper } from './style';
import { useAppDispatch } from '@/store';
import { changeIsLoginAction, fetchCookieAction, fetchShowWindowAction } from './store';
import { checkLoginQrStatus, createLoginQr, getLoginQrKey } from './service';
import { useNavigate } from 'react-router-dom';
import { fetchChangeUserAccount, fetchChangeUserLevel } from '@/store/modules/user';

interface IProps {
  children?: ReactNode;
}

const LoginWindow: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    generateQrCode();
    return stopPolling();
  }, []);

  const [qrKey, setQrKey] = useState('');
  const [qrImage, setQrImage] = useState('');
  const [statusText, setStatusText] = useState('请使用手机扫码登录');
  const timeRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  //请求key,用key请求二维码，并且进入轮询二维码状态
  const generateQrCode = async () => {
    try {
      //获取key
      const keyRes = await getLoginQrKey();
      const key = keyRes.data.unikey;
      setQrKey(key);
      //获取二维码
      const qrRes = await createLoginQr(key);
      setQrImage(qrRes.data.qrimg || '');
      //轮训检测状态
      startPolling(key);
    } catch (err) {
      console.log('二维码生成失败', err);
      setStatusText('生成二维码失败');
    }
  };

  //轮询二维码状态函数，在generateQrCode中被调用
  const startPolling = (key: string) => {
    if (timeRef.current) clearInterval(timeRef.current);

    timeRef.current = setInterval(async () => {
      try {
        const statusRes = await checkLoginQrStatus(key, true);
        switch (statusRes.code) {
          case 800:
            setStatusText('二维码已过期，点击刷新');
            stopPolling();
            break;
          case 801:
            setStatusText('等待扫码...');
            break;
          case 802:
            setStatusText('扫码成功，等待确认...');
            break;
          case 803:
            console.log(statusRes);
            setStatusText('登录成功！跳转中...');
            stopPolling();
            //变更已登录状态
            dispatch(changeIsLoginAction(true));
            //更新cookie
            dispatch(fetchCookieAction(statusRes.cookie));
            //隐藏登录窗口
            dispatch(fetchShowWindowAction(false));
            //登录完成请求一次用户账号信息，包括profile等内容以显示头像
            dispatch(fetchChangeUserAccount());
            dispatch(fetchChangeUserLevel());
            setTimeout(() => {
              navigate('/'); // 登录成功后跳转
            }, 1000);
            break;
          default:
            console.log(statusRes);
            console.warn('未知状态码', statusRes.code);
            break;
        }
      } catch (err) {
        console.log('二维码状态监测失败', err);
      }
    }, 3000);
  };

  const stopPolling = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
  };

  const handleCrossAction = () => {
    dispatch(fetchShowWindowAction(false));
  };
  return (
    <LoginWindowWrapper>
      <div className="window">
        <div className="header">
          登录
          <i className="cross" onClick={handleCrossAction}></i>
        </div>
        <div className="content">
          <h2>二维码登陆</h2>
          {qrImage ? <img src={qrImage} alt="扫码登录"></img> : <div>二维码加载中</div>}
        </div>
      </div>
    </LoginWindowWrapper>
  );
};

export default memo(LoginWindow);
