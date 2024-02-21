# Development/Deployment Usage

### Installation

1. Make a copy of `.env.example` file, rename it for `.env.local` and set up your own local env variables. (make sure the env variables are the same on `.env.development` and `.env.production` in case `.env.local` require updates.)

2. Update the host variable available on `.env.development` and `.env.production` files.

3. Update the data available on `src/config/website.ts` with the desire informations for your website (GTM is also available on this file).

4. Update the default images used as metadata.

```
assets/share/share.jpg
assets/share/app-icon.png
assets/share/fav-icon.png
```

5. In order to run your local env on https, please open the file `https/localhost.crt` and install the certificate on your computer.

6. Run the command below to install all dev dependencies on the root folder of the project

```bash
yarn
```

### Development server

Run the command below to start the dev server

```bash
yarn dev
```

### Staging or production build

Run the command below to build the project

```bash
yarn build
```

### Exporting static verion

Run the command below to export the project as static html

```bash
yarn export
```

## Lint/Prettier/Husky

Please use the prettier extension to enforce code formatting on every save.

Before committing any updates, the Husky pre-commit script will run the commands below in order to keep the code clean and consistent.

1. Check Types - the command below will ensure there are no errors in the typescript types.

```bash
yarn check-types
```

2. Lint - the command below will show any required update based on the lint settings for your staged files.

```bash
yarn lint-staged
```
