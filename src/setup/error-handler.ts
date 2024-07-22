import logger from "../logger";
import { getContextPath } from "../utils";
import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes"
import { CONSTANTS } from "../constants";

// Handle all errors
const errorHandler:ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err, err.message);
  switch (err.statusCode) {
    case StatusCodes.BAD_REQUEST:
      res.redirect(getContextPath(CONSTANTS.PAGE_NOT_FOUND));
    default:
      res.redirect(getContextPath(CONSTANTS.PROBLEM_WITH_SERVICE));
  }
  next();
};

const setupErrorHandlers = (app: App) => {
  
  // Register common error pages
  const commonErrorPages = [CONSTANTS.PAGE_NOT_FOUND , CONSTANTS.PROBLEM_WITH_SERVICE, CONSTANTS.NO_ACCESS];
  commonErrorPages.forEach((page) => {
    app.get(getContextPath(page), (req, res) => {
      return res.render(`error-pages/${page}`);
    });
  });

  // Register error handler
  app.use(errorHandler);

  // All other routes will be redirected to a not-found page
  app.all("*", (_, res) => {
    return res.status(StatusCodes.NOT_FOUND)
    .redirect(getContextPath(CONSTANTS.PAGE_NOT_FOUND));
  });
};

export default setupErrorHandlers;
