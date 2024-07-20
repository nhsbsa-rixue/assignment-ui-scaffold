import express from "express";
import { getContextPath } from "../utils";
import * as pages from "../pages";
import { validator } from "../validator";

const router = express.Router();
const HOME_TEMPLATE_NAME = "home";

/**
 * redirect with the contextPath
 */
const redirectPageTo = (req, res, next) => {
  res.redirectPageTo = (page) => {
    res.redirect(getContextPath(page));
  };
  next();
};

/**
 * Sample home page
 * Lists all the pages in the application
 */
const homePage = (req, res) => {
  const pageList = Object.values(pages).map(page => ({
    Path: page.Path,
    Heading: page.Heading,
  }));
  return res.render(HOME_TEMPLATE_NAME, { pageList });
};

const setupPages = (app: App) => {
  // Register the home page
  router.get(getContextPath(), homePage);

  // Register all the pages
  Object.values(pages).forEach(page => {
    const { Path, Get, Post, Schema = [] } = page;

    if (Get) {
      router.get(getContextPath(Path), Get);
    }

    if (Post) {
      router.post(getContextPath(Path), Schema, validator, Post);
    }
  });
  // Add the redirectPageTo function to the response
  app.use(redirectPageTo);
  app.use(router);
};

export default setupPages;
