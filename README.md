# Project By Bhupendra Madhu (Express Skeleton App)

## expresss-app-skeleton

- Express app skeleton for fast [express](https://expressjs.com/en/starter/installing.html) backend creation, with support of [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/).
- This Application contains various methods for the response & calculation of the API system. Here We created Utilities & Services to fetch data & utility to send response.
- Middleware to handle the incoming request & user authentication.
- This project has logging support using [winston](https://github.com/winstonjs/winston).
- This application creates scaffolding for the Express Applicaiton with authentication, Model, Controller, services, & database access using [Prisma](https://www.prisma.io/docs).
- This Application supports MySQL by default, but you can configure it with various database tools like Mongo DB, PostgreSQL, or various database tools available in [Prisma](https://www.prisma.io/docs).
- This Application is using JWT for authentication using [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) package, and Generating password using [bcrypt](https://www.npmjs.com/package/bcrypt).
- This project also consists option to execute cron jobs using core code in javascript and saving command in package.json, and calling it from the server where the cron call is set

### Top packages used to create this project :-

- [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Express](https://expressjs.com/en/starter/installing.html)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)
- [Prisma](https://www.prisma.io/docs)
- [Winston](https://github.com/winstonjs/winston)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

### Steps to use this skeleton

1. Clone the repository from github
2. generate `.env` file, to create environement variable and establish variables for development and production environements

```env
PORT=3000
# if you're using any url to display in console
APP_URL=http://localhost
# use `npx prisma generate` to create value for db in the ENV
```

3. run commands for running the app

```shell
# For running in development mode,
npm run dev
# For running in Production mode,
npm start
```
