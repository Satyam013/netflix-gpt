import OpenAI from "openai";
import { OPEN_API_KEY } from "./constant";

const openai = new OpenAI({
  apiKey: OPEN_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

export default openai;
