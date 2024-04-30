---
title: "Environment variables"
sidebar_position: 3
---

The code necessarily includes constant values that are specific to a certain build of the product: e.g. for testing the product and production builds. 

This build specific __configuration data__ can include e.g. host names, IP addresses, API end points or tokens. Some of the data may be sensitive and should not be disclosed, e.g. database credentials or API keys. 

These values should not stored in Git repositories, even if the repository is private. 

### Environment variables
An environment variable is a variable whose value is set in the execution environment of a program, externally to the program. 

We can use environment variables to avoid hardcoding values in the program code and the git repository:
1. Set configuration values in environment variables in the runtime environemnt of the build process.
2. The build tools read the values from environment variables and inject them into the build.

This makes the deployment of the app easier: the code can be always the same but we can build different configurations of the program. However, we need to manage setting the configuration data somehow outside the version control.


### Using environment variables in command shell

The environment variables are set in the execution context of the program in the operating system. Setting own environment variables is  done in the shell where the program is started.

#### Setting environment variables

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="operating-systems">
  <TabItem label="Windows Powershell" value="windows">
    ```powershell
    $Env:API_HOST="localhost:3000";
    ``` 
  </TabItem>
  <TabItem label="Linux/OS X bash" value="linux_osx">
    ```bash
    export API_HOST="localhost:3000"
    ```
  </TabItem>
</Tabs>


:::info
    Environment variable names are in UPPERCASE and words are separated with underscore by convention.
:::

#### Listing and undefining environment variables

<Tabs groupId="operating-systems">
  <TabItem label="Windows Powershell" value="windows">
    ```powershell
    dir Env:          # list all environment variables
    dir Env:API_HOST  # list one environment variable
    del Env:API_HOST  # undefine an environment variable
  ``` 
  </TabItem>
  <TabItem label="Linux/OS X bash" value="linux_osx">
    ```bash
    Linux/OS X bash:

    $ printenv            # list all environment variables
    $ printenv API_HOST   # list one environment variable
    $ unset API_host      # undefine an environment variable

    ```
  </TabItem>
</Tabs>

### Using environment variables in Expo
Expo environment loads automatically environment variables with prefix `EXPO_PUBLIC_`

The loaded values can be read in the program from `process.env`, for example:

```
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
```

The values are loaded at build time. If you change values, you will need to reload the application.

:::warning
  The values of `EXPO_PUBLIC_` variables will be visible in plain text in the compiled application. Do not store anything sensible in them in real world applications.
:::

### Using `dotenv` in Expo 

The environment variable functionality is implemented in Expo using the widely used `dotenv` library.

`dotenv` can read environment variables from the execution context. Additionally, the environment variable values can be set in `.env` file too. The actual value in the program is determined as follows:
- Values read from `dotenv` file never override the ones in the runtime environment. 
- If a variable is defined in both, the value defined in runtime environment will hold. 

Thus we can set the production environment variable values in the runtime environment and development environment values in a `.env` file. It is also easy to maintain different configurations bu just defining different `.env` files.

#### `.env` file

Define a file named `.env` in project root. Environment variable values can be assigned in the file:
  ```
  EXPO_PUBLIC_API_URL=https://staging.example.com
  EXPO_PUBLIC_API_KEY=abc123
  ```
Refer to [Expo documentation](https://docs.expo.dev/guides/environment-variables/) for details.

:::important
  Remember to ignore the `.env` file from git.
:::


