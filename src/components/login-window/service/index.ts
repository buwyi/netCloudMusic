import hyRequest from '@/service';

export const getLoginQrKey = () => {
  return hyRequest.get<{ data: { unikey: string }; code: number }>({
    url: '/login/qr/key',
    params: {
      timestamp: Date.now(),
    },
  });
};

export const createLoginQr = (key: string, withQrImg = true) => {
  return hyRequest.get<{
    data: {
      qrurl: string;
      qrimg?: string;
    };
    code: number;
  }>({
    url: '/login/qr/create',
    params: {
      key,
      qrimg: withQrImg,
      timestamp: Date.now(),
    },
  });
};

export const checkLoginQrStatus = (key: string, noCookie = false) => {
  return hyRequest.get<{
    code: number;
    cookie: string;
    message?: string;
  }>({
    url: '/login/qr/check',
    params: {
      key,
      //noCookie,
      timestamp: Date.now(),
    },
  });
};

// export const
