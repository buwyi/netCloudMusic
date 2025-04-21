export interface ILyric {
  time: number;
  content: string;
}

const parseRegExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/;

export function parseLyrics(lyricString: string) {
  const lineString = lyricString.split('\n');
  const lyrics: ILyric[] = [];

  for (const line of lineString) {
    if (line) {
      const result = parseRegExp.exec(line);
      if (!result) continue;
      const time1 = Number(result[1]) * 60 * 1000;
      const time2 = Number(result[2]) * 1000;
      const time3 = result[3].length == 3 ? Number(result[3]) : Number(result[3]) * 10;

      const time = time1 + time2 + time3;
      const content = line.replace(parseRegExp, '').trim();
      const lineObj = { time, content };
      lyrics.push(lineObj);
    }
  }
  return lyrics;
}
