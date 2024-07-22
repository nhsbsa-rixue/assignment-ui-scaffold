import setupSecurity from "./security";
import setupTemplat from "./template";
import setupParser from "./parser";
import setupSession from "./session";
import setupLanguage from "./language";
import setupPages from "./pages";
import setupErrorHandlers from "./error-handler";

/**
 * 1. Configure to load heavy sync tasks once
 * 2. Register router here so handler can reuse those task
 *
 * @param {ExpressApp} app
 *
 */
export default (app: App) => {
  setupSecurity(app);
  setupTemplat(app);
  setupParser(app);
  setupSession(app);
  setupLanguage(app);
  setupPages(app);
  setupErrorHandlers(app); // Error handler should be the last middleware
};
