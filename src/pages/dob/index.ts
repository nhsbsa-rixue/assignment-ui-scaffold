import Schema from "./schema";

const DOB_PAGE = "dob";
const DOB_PAGE_HEADING = "DOB form validation";

export const Get = async (req, res) => {
  return res.render(DOB_PAGE);
};

export const Post = async (req, res) => {
  return res.redirectPageTo(DOB_PAGE);
};

const dob: Page = {
  Path: DOB_PAGE,
  Heading: DOB_PAGE_HEADING,
  Get,
  Post,
  Schema,
};

export default dob;
