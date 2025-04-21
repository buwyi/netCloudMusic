export function getPlayerUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

function padLeft(time: number) {
  const timeStr = time + '';
  return ('00' + timeStr).slice(timeStr.length);
}

export function formatTime(time: number) {
  time = time / 1000;
  const minute = Math.floor(time / 60);
  const seconds = Math.floor(time) % 60;
  return padLeft(minute) + ':' + padLeft(seconds);
}
