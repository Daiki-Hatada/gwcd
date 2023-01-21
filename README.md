# Next.js Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This app is written in TypeScript, React, Next.js.

## Run Locally

Clone the project

```shell
git clone https://github.com/Daiki-Hatada/gwcd.git
```

Go to the project directory

```shell
cd gwcd
```

Install dependencies and start the server

```shell
yarn
yarn build
yarn start
```

## Backend

To set up backend, you need to deploy Cloud Functions with the command below.

```shell
yarn functions deploy
```

If you deploy functions which require administraive authorization, you can run this command after preparing service account file.

```shell
yarn functions deploy-with-cred:ENVIRONMENT_NAME
```

## Tech Stack

- Docker
- Node.js 16.0.0
- TypeScript 4.9.4
- React 18.2.0
- Next.js 12.1.6

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

```shell
cp .env.example .env
```

| Key                                          | Type                              | Description                                                                                                                                                                                                                              |
| -------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_FIREBASE_API_KEY`               | `string \| undefined`             | The key to use Firebase web API. This can be gotten in Firebase console.                                                                                                                                                                 |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`           | `string \| undefined`             | The domain used in Firebase Authenticaion. This can be gotten in Firebase console.                                                                                                                                                       |
| `NEXT_PUBLIC_FIREBASE_DATABASE_URL`          | `string \| undefined`             | The URL to Firestore. This can be gotten in Firebase console.                                                                                                                                                                            |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID`            | `string \| undefined`             | The ID of Firebase project. This can be gotten in Firebase console.                                                                                                                                                                      |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`        | `string \| undefined`             | The URL to the bucket of Cloud Storage. This can be gotten in Firebase console.                                                                                                                                                          |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`   | `string \| undefined`             | The ID of cloud messaging sender. This can be gotten in Firebase console.                                                                                                                                                                |
| `NEXT_PUBLIC_FIREBASE_APP_ID`                | `string \| undefined`             | The ID which indentifies the Firebase application. This can be gotten in Firebase console.                                                                                                                                               |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`            | `string \| undefined`             | Google Analytics ID. This can be gotten in GA console.                                                                                                                                                                                   |
| `NEXT_PUBLIC_ALGOLIA_APP_ID`                 | `string \| undefined`             | This is your unique application identifier. It's used to identify you when using Algolia's API. This can be gotten in [setting page of Algolia](https://www.algolia.com/account/api-keys/all).                                           |
| `NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY`    | `string \| undefined`             | This is the public API key to use in your frontend code. This key is only usable for search queries and sending data to the Insights API. This can be gotten in [setting page of Algolia](https://www.algolia.com/account/api-keys/all). |
| `FIREBASE_PRIVATE_KEY`                       | `string \| undefined`             | The private key used to access the Firebase application as an administrator service account. This can be gotten in Firebase console.                                                                                                     |
| `FIREBASE_CLIENT_EMAIL`                      | `string \| undefined`             | The principal email of the administrator service account. This can be gotten in Firebase console.                                                                                                                                        |
| `IP_ADDRESSES_ALLOWED_TO_ACCESS_ADMIN_PAGES` | `string \| string[] \| undefined` | The list of IP addresses with which clients can access pages for administrators.                                                                                                                                                         |
| `GOOGLE_FORM_URL`                            | `string`                          | This is the URL of Google Form.                                                                                                                                                                                                          |
| `CHROMATIC_PROJECT_TOKEN`                    | `string \| undefined`             | A unique project token for Storybook by signing in to Chromatic and creating a project. You can get this value from [@Daiki-Hatada](https://github.com/Daiki-Hatada).                                                                    |

To deploy Cloud Functions, you will need to add the following environment variables to your .env file and create a service account file like a firebase/service-account-example.json. You can get the service account file in Firebase console.

```shell
cp firebase/functions/.env.example firebase/functions/.env
cp firebase/service-account-example.json firebase/service-account-ENVIRONMENT_NAME.json
```

| Key                           | Type                  | Description                                                                                                                                                                                                                                                                                     |
| ----------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ALGOLIA_APP_ID`              | `string \| undefined` | This is your unique application identifier. It's used to identify you when using Algolia's API. This can be gotten in [setting page of Algolia](https://www.algolia.com/account/api-keys/all).                                                                                                  |
| `ALGOLIA_WRITE_API_KEY`       | `string \| undefined` | This is a private API key. Please keep it secret and use it ONLY from your backend: this key is used to create, update and DELETE your indices. You CANNOT use this key to manage your API keys. This can be gotten in [setting page of Algolia](https://www.algolia.com/account/api-keys/all). |
| `CORS_ALLOWED_ORIGIN_REGEXES` | `string \| undefined` | The list of the regular expressions of origin that Cloud Functions allow to access itself.                                                                                                                                                                                                      |
| `SENDGRID_API_KEY`            | `string \| undefined` | The API key for Send Grid. Please check with your administrator.                                                                                                                                                                                                                                |

## Contributing

Before contribution you need to install `pre-commit` and `pre-push` hook and commit template.

```shell
git config --local commit.template .commit_template
yarn
```
