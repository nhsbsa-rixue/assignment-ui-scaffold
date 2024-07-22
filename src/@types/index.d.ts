import * as express from "express";
import { ValidationChain } from "express-validator";

declare global {
  interface App extends express.Express {}

  interface Req extends express.Request {
    CONTEXT_PATH: string;
    session: any;
    t: any;
    }

  interface Controller extends express.RequestHandler {
    (req: Req, res: any): any;
    (req: Req, res: any, next: any): any;
  }

  interface Page {
    Path: string;
    Heading?: string;
    Schema?: ValidationChain[];
    Get: Controller;
    Post?: Controller;
  }
} 