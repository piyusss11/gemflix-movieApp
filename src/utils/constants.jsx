export const LOGO_URL =
  "./images/Gemflex.png";

export const PHOTO_AVATAR_URL = "https://picsum.photos/200";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const POSTER_PATH = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const LANGUAGES = [
  { identifier: "En", name: "English" },
  { identifier: "Hindi", name: "Hindi" },
  { identifier: "Spanish", name: "Spanish" },
  { identifier: "French", name: "French" },
];



export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY;