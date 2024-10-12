export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const AVATAR_URL="https://avatars.githubusercontent.com/u/88174111?v=4";
export const API_Options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:`Bearer  ${process.env.REACT_TMDB_KEY}`
    }
  };
export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";
export const SUPPORTEDLANGUAGES = [
  {
    identifier: "en",
    name: "english"
  },
  {
    identifier: "hindi",
    name: "hindi"
  },
  {
    identifier: "kannada",
    name: "kannada"
  },
  {
    identifier: "telugu",
    name: "telugu"
  },
  {
    identifier: "tamil",
    name: "tamil"
  },
  {
    identifier: "bengali",
    name: "bengali"
  },
  {
    identifier: "malayalam",
    name: "malayalam"
  },
  {
    identifier: "marathi",
    name: "marathi"
  },
  {
    identifier: "gujarati",
    name: "gujarati"
  },
  {
    identifier: "punjabi",
    name: "punjabi"
  },
  {
    identifier: "urdu",
    name: "urdu"
  }
];
export const GPT_KEY="AIzaSyB1nfn7T0aauJ91-uZsAhDeGn1kRAljnt0";
// export const GPT_KEY=process.env.REACT_GPT_KEY;