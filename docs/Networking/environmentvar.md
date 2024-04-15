---
title: "Environment variables"
sidebar_position: 3
---
The code necessarily includes constant values that are specific to a certain build of the product: e.g. for testing the product and production builds This build specific __configuration data__ can include e.g. host names, IP addresses, API end points or tokens. Some of the data may be sensitive and should not be disclosed, e.g. database credentials or API keysCode is stored and and shared in Git repositories, public or private, to enable development and reuse of the code.

### Using environment variables in Expo
The environment variables are stored in the **`.env`** file. Create a file named `.env` in the root folder of your project. Environment variable name should start with the prefix `EXPO_PUBLIC_`. Environment variable values can be assigned in the file, for example:
```js
EXPO_PUBLIC_API_URL=https://staging.example.com
EXPO_PUBLIC_API_KEY=abc123
```
Expo environment loads automatically environment variables with prefix `EXPO_PUBLIC_`. The loaded values can be read from `process.env`, for example:
```js
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
 ```
The values are loaded at build time. If you change values, you will need to reload the application.
:::note
The values of `EXPO_PUBLIC_` variables will be visible in plain text in the compiled application. Do not store anything sensible in them in real world applications.
:::
