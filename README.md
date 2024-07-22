# UI Scaffold

## About the UI Scaffold
A personal assignment to create a scaffold frontend project structure using Node.js, Express and Nunjucks.

## Getting Started

To get started with this project, follow these steps:


1. Install the dependencies:
    ```
    npm install
    ```

2. Start the development server:
    ```
    npm run dev
    ```

## Scripts

- `npm run build:sass`: Compiles Sass files into CSS.
- `npm test`: Runs the Jest test suite.
- `npm run test:coverage`: Runs the Jest test suite and generates a coverage report.
- `npm run eslint`: Lints the project using ESLint.
- `npm run dev`: Starts the development server with Nodemon.

## Project Structure

The `setup` folder contains configuration for various parts of the application:

1. error-handler.ts: Define and use middlewares for handling errors within the application. 

2. language: Sets up internationalization (i18n) for the application using i18next, i18next-http-middleware, and i18next-fs-backend.

3. pages: Configures routes for the application's pages. It dynamically registers routes based on the exported properties from the pages module. 

4. parser: Sets up body parsing middleware for the application to parse incoming request bodies and cookies.

5. security: Enhances application security by using helmet for setting various HTTP headers and compression for response compression. 

6. session: Configures session management for the application using express-session and optionally connect-redis. 

7. template: Configures Nunjucks as the templating engine for the application.

## Contributions

We operate a [code of conduct](CODE_OF_CONDUCT.md) for all contributors.

See our [contributing guide](CONTRIBUTING.md) for guidance on how to contribute.

## License

Released under the [Apache 2 license](LICENCE.txt).
