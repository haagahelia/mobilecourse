---
title: "Environment variables"
sidebar_position: 3
---
- The code necessarily includes constant values that are specific to a certain build of the product: e.g. for testing the product and production builds
- This build specific __configuration data__ can include e.g. host names, IP addresses, API end points or tokens
- Some of the data may be sensitive and should not be disclosed, e.g. database credentials or API keys
- Code is stored and and shared in Git repositories, public or private, to enable development and reuse of the code. 
- __How can we include the necessary configuration data in our programs without hard coding it__?
---
### Using environment variables in Expo
- Expo environment loads automatically environment variables with prefix `EXPO_PUBLIC_`
- The loaded values can be read from `process.env`, for example:
  ```
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  ```
- The values are loaded at build time. If you change values, you will need to reload the application.
- __Note__: The values of `EXPO_PUBLIC_` variables will be visible in plain text in the compiled application. Do not store anything sensible in them in real world applications.
---
- The environment variable functionality is implemented using the widely used `dotenv` library.
-  `dotenv` can read environment variables from the execution context. 
- Additionally, the environment variable values can be set in `.env` file too. 
- Values read from file never override the ones in the environment. If a variable is defined in both, the value defined in runtime environment will hold.
- For example, we can set the production environment variable values in the runtime environment and development environment values in a `.env` file.
### `.env` file
- Define a file named `.env` in project root
- Environment variable values can be assigned in the file, for example:
  ```
  EXPO_PUBLIC_API_URL=https://staging.example.com
  EXPO_PUBLIC_API_KEY=abc123
  ```
- Refer to Expo and `dotenv` library documentation for details, e.g.
  - full `dotenv` file syntax
  - using many `.env` files
- __Note:__ Remember to ignore the `.env` file from git.
