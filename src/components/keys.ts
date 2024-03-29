export const Keys = [
  "A",
  "A<sup>#</sup>",
  "B",
  "C",
  "C<sup>#</sup>",
  "D",
  "D<sup>#</sup>",
  "E",
  "F",
  "F<sup>#</sup>",
  "G",
  "G<sup>#</sup>",
];

export const Flat = [
  "A",
  "Bᵇ",
  "B",
  "C",
  "Dᵇ",
  "D",
  "Eᵇ",
  "E",
  "F",
  "Gᵇ",
  "G",
  "Aᵇ",
];

export const Minor = [
  "Am",
  "A<sup>#</sup>m",
  "Bm",
  "Cm",
  "C<sup>#</sup>m",
  "Dm",
  "D<sup>#</sup>m",
  "Em",
  "Fm",
  "F<sup>#</sup>m",
  "Gm",
  "G<sup>#</sup>m",
];

export const FUTURE = {
  "A<sup>#</sup>": [
    "A",
    "A<sup>#</sup>",
    "B",
    "C",
    "C<sup>#</sup>",
    "D",
    "D<sup>#</sup>",
    "E",
    "F",
    "F<sup>#</sup>",
    "G",
    "G<sup>#</sup>",
  ],
  "C<sup>#</sup>": [
    "A",
    "A<sup>#</sup>",
    "B",
    "C",
    "C<sup>#</sup>",
    "D",
    "D<sup>#</sup>",
    "E",
    "F",
    "F<sup>#</sup>",
    "G",
    "G<sup>#</sup>",
  ],
  "D<sup>#</sup>": [
    "A",
    "A<sup>#</sup>",
    "B",
    "C",
    "C<sup>#</sup>",
    "D",
    "D<sup>#</sup>",
    "E",
    "F",
    "F<sup>#</sup>",
    "G",
    "G<sup>#</sup>",
  ],
  "F<sup>#</sup>": [
    "A",
    "A<sup>#</sup>",
    "B",
    "C",
    "C<sup>#</sup>",
    "D",
    "D<sup>#</sup>",
    "E",
    "F",
    "F<sup>#</sup>",
    "G",
    "G<sup>#</sup>",
  ],
  "G<sup>#</sup>": [
    "A",
    "A<sup>#</sup>",
    "B",
    "C",
    "C<sup>#</sup>",
    "D",
    "D<sup>#</sup>",
    "E",
    "F",
    "F<sup>#</sup>",
    "G",
    "G<sup>#</sup>",
  ],
  Bᵇ: [
    "A",
    "Bᵇ",
    "B",
    "C",
    "C<sup>#</sup>",
    "D",
    "D<sup>#</sup>",
    "E",
    "F",
    "F<sup>#</sup>",
    "G",
    "G<sup>#</sup>",
  ],
  Dᵇ: [
    "A",
    "Bᵇ",
    "B",
    "C",
    "Dᵇ",
    "D",
    "D<sup>#</sup>",
    "E",
    "F",
    "F<sup>#</sup>",
    "G",
    "G<sup>#</sup>",
  ],
  Eᵇ: [
    "A",
    "Bᵇ",
    "B",
    "C",
    "C<sup>#</sup>",
    "D",
    "Eᵇ",
    "E",
    "F",
    "F<sup>#</sup>",
    "G",
    "G<sup>#</sup>",
  ],
  Gᵇ: [
    "A",
    "Bᵇ",
    "B",
    "C",
    "C<sup>#</sup>",
    "D",
    "D<sup>#</sup>",
    "E",
    "F",
    "Gᵇ",
    "G",
    "G<sup>#</sup>",
  ],
  Aᵇ: [
    "A",
    "Bᵇ",
    "B",
    "C",
    "C<sup>#</sup>",
    "D",
    "D<sup>#</sup>",
    "E",
    "F",
    "Gᵇ",
    "G",
    "Aᵇ",
  ],
};

// eslint-disable-next-line no-useless-escape
// export const regex = /(\/|\s{1,}|.<sup>#<\/sup>(?:[ABCDEFG])*\)?(?![ABCDEFG])|.ᵇ(?:\[ABCDEFG])*\)?(?![ABCDEFG])|.{4}<sup>#<\/sup>(?!add9)|[^\(]ᵇ(?![ABCDEFG])|.{4}(?=add9)|(\([ᵇb][59]\))|[ABCDEFGbmM]|add9|2|6|7|add9|11|dim|aug|sus4|9|13|5|add2|\s|\)|\(|( \/)?)/g;

const sub0 =
  "Aᵇ|Bᵇ|Cᵇ|Dᵇ|Eᵇ|Fᵇ|Gᵇ|A<sup>#</sup>|C<sup>#</sup>|D<sup>#</sup>|F<sup>#</sup>|G<sup>#</sup>|<sup>#</sup>9|<sup>#</sup>11|<sup>#</sup>13|[ABCDEFGN.]";
const sub1 =
  "[1-9]\\+[1-9]|[1-9]-[1-9]|[ABCDEFGbmMabcdefgiu]|ᵇ+[1-9]|ma|add9|11|dim|aug|sus4|13|add2|sus|<sup>#</sup>+[1-9]| |[1-9]";
export const regex = new RegExp(
  "(" + sub0 + ")|" + sub1 + "|/(?!sup)|\\(|\\)",
  "g"
);
