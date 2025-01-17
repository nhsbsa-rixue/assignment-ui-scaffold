import dotEnv from "dotenv";
import { CONSTANTS } from "../constants";
dotEnv.config();

export default {
  APP_NAME: process.env.APP_NAME || CONSTANTS.DEFAULT_APP_NAME,
  CONTEXT_PATH: process.env.CONTEXT_PATH || CONSTANTS.DEFAULT_CONTEXT_PATH,
  NODE_ENV: process.env.NODE_ENV || CONSTANTS.DEFAULT_NODE_ENV,
  SESSION_SECRET: process.env.SESSION_SECRET || CONSTANTS.DEFAULT_SESSION,
  REDIS_URL: process.env.REDIS_URL,
  LANGUAGES: process.env.LANGUAGES?.split(",") || CONSTANTS.DEFAULT_LANGUAGES,
  PORT: process.env.PORT || CONSTANTS.DEFAULT_PORT,
  API_ENDPOINT: process.env.API_ENDPOINT || CONSTANTS.DEFAULT_API_ENDPOINT,
};