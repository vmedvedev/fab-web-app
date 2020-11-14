# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Deploy

## Login in Heroku
```bash
$ heroku container:login
```

## Build and push
```bash
$ heroku container:push web -a fab-api
```

## Deploy
```bash
$ heroku container:release web -a fab-api
```

## Monitor logs
```bash
$ heroku logs --tail -a fab-api
```

## Open app
[https://fab-api.herokuapp.com](https://fab-api.herokuapp.com)
