import path from "path";
import config from "../config";

/**
 * Resolve the requestPath to an absolute path
 * 
 * @param requestPath 
 * @returns absolute path
 */
export const resolvePath = (requestPath: string) => {
  return path.resolve(__dirname, requestPath);
};

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