import axios from "axios";
import { wrapAxios, getGithubOpts } from "../lambda-helpers";

const personalAccessToken = process.env.GITHUB_TOKEN || "";

export const handler = async () => {
  const opts = getGithubOpts(personalAccessToken);
  return wrapAxios(axios(`https://api.github.com/issues`, opts));
};

handler().then(e => console.log(e.body)).catch(e => console.log(e.message));