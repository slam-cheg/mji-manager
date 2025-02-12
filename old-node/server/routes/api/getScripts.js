import { __dirname } from "../../../server.js";

export const GetScripts = async (req, res) => {
  res.sendFile(`${__dirname}/server/appdata/appBuild.js`);
};
