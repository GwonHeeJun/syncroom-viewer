// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import SearchData from "../../../../public/search-data.json";
import KEY_MAP from "../../../../public/mapping-key.json";
import { chosungIncludes, hangulIncludes } from "@toss/hangul";
import { readFileSync } from "fs";
import path from "path";

type MusicInfo = {
  beat: string;
  original_key: string;
  sec: string;
  singer: string;
  tempo: string;
  label: string;
};

type MusicChord = {
  chord: Array<string>;
  lyrics: Array<string>;
};

type Response = {
  info: MusicInfo;
  chrods: MusicChord[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const { id } = req.query;

  const data = Object.keys(KEY_MAP).find((key) => (KEY_MAP as any)[key] === id);

  const fileBasePath = path.join(__dirname, `../../../../../data/${data}.json`);

  console.log(fileBasePath);

  const { info, musics } = JSON.parse(readFileSync(fileBasePath, "utf8"));

  const Info = {
    beat: info.beat,
    original_key: info.original_key,
    sec: info.sec,
    singer: info.singer,
    tempo: info.tempo,
    label: info.title,
  };

  res.status(200).json({
    info: Info,
    chrods: musics.map((i) => ({
      chord: Array(16)
        .fill(NaN)
        .map((_, ix) => i[`chord_${ix + 1}`]),
      lyrics: Array(4)
        .fill(NaN)
        .map((_, ix) => i[`lyrics_${ix + 1}`]),
    })),
  });
}
