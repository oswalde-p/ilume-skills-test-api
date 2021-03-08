# skills test - api

A simple express api, live at https://ilume-api.herokuapp.com/

## Running

`npm run dev` - Start dev server with hot reloading using nodemon

`npm run start` - Start production server

By default, the server will listen on port 3000. This can be modified by providing the PORT env var.

## API Endpoints

### POST api/users

Creates a new user

#### Body

```js
{
    "name": String,
    "email": String,
    "userLevel": Number
}
```

#### Repsonse

The newly created user

#### Eg

```sh
    curl -X POST localhost:3000/api/users -H 'Content-type: application/json' -d '{"name": "jason", "email":"test@test.com", "userLevel": 1 }'
```

### GET api/users

List all users. For paginated results, include `page` and `perpage` in the query string.

#### Response

Array of user objects

#### Eg

```sh
    curl localhost:3000/api/users/
    curl `localhost:3000/api/users?page=1&perpage=2`
```

### GET api/users/:userId

Get specific user details. userId must be a valid mongoose ObjectId

#### Response

```js
{
  "fav": [
    "fav001",
    "fav002"
  ],
  "_id": "604333588047aea19523a993",
  "user_level": 1,
  "email": "blue@mail.com",
  "name": "Betty Blue",
  "meta": [
    {
      "metas": [
        "meta1",
        "meta2"
      ],
      "meta_count": 3
    }
  ]
}
```

#### Eg

```sh
curl localhost:3000/api/users/604333588047aea19523a993
```

## Deployement

Commits to `master` branch are automatically deployed via Heroku once CI finishes successfully.

## Envirornment Variables

| Var       | Description            |
| --------- | ---------------------- |
| PORT      | port to listen on      |
| MONGO_URI | mongodb connection URI |
