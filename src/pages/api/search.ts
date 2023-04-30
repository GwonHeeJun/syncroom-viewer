// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import SearchData from "../../../public/search-data.json";
import { chosungIncludes, hangulIncludes } from "@toss/hangul";

type Error = {
  message: string;
};

type SearchData = {
  id: string;
  label: string;
  category: string;
};

const filteringBySearch = (search: string) => (voice: SearchData) => {
  const { label } = voice;

  return (
    chosungIncludes(label, search) ||
    hangulIncludes(label, search) ||
    hangulIncludes(label || "", search) ||
    label?.includes(search)
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchData[] | Error>
) {
  const { q } = req.query;

  if (q == null) {
    return res.status(401).json({
      message: "올바르지 않은 접근입니다.",
    });
  }

  const Result = (SearchData as SearchData[])?.filter(
    filteringBySearch(q as string)
  );

  res.status(200).json(Result);
}
