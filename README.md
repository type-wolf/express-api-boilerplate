# README

## Clone

```bash
git clone -b heroku-auto-deploy https://github.com/ito-rui/express-api-boilerplate.git my-repo
```

## How to start WebServer

-   ### Dev Environment

```bash
npm run dev
```

-   ### Production environment

```bash
npm start
```

## Add necessary environment variables

1. ### [HEROKU_API_KEY](https://dashboard.heroku.com/account)

2. ### HEROKU_APP_NAME

3. ### HEROKU_EMAIL

```yml
heroku_api_key: ${{secrets.HEROKU_API_KEY}}
heroku_app_name: ${{secrets.HEROKU_APP_NAME}}
heroku_email: ${{secrets.HEROKU_EMAIL}}
```

## How to pass environment variables to Heroku

-   ### Set Github environment variables

    ### Add `HD_` at the beginning to set

```yml
env:
    # Don't forget to prefix variables in your scripts with `HD_`!
    # * Not required at the beginning of the environment variable to be registered on the Github side.
    HD_MONGODB_URI: ${{secrets.MONGODB_URI}}
```
