import path from "path";
import config from "../config";

/**
 * Retrieve the path with base contextPath prepended.
 * The contextPath is defined in the config file
 * 
 * @param path 
 * @returns path segment with contextPath prepended
 */
export const getContextPath = (path = "") => {
  return `${config.CONTEXT_PATH}${path}`;
};