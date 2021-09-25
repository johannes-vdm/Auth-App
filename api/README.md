## POST
### `http://localhost:4000/users/register`
```json
{
    "firstName": "test",
    "lastName": "test",
    "username": "test",
    "password": "test",
    "post": "Hello I test"
}
```
## POST
### `http://localhost:4000/users/authenticate`
```json
{
  "username": "test",
    "password": "test"
}
```

## GET
### `http://localhost:4000/users/`
 - requires bearer token from login
```json 
[
    {
        "id": 1,
        "firstName": "test",
        "lastName": "test",
        "username": "test",
        "post": "Hello I am test"
    },
    {
        "id": 2,
        "firstName": "Johannes",
        "lastName": "van der Merwe",
        "username": "johannes",
        "post": "Hello I am Johannes"
    },
    ...
]
```

## GET
### `http://localhost:4000/users/posts/${userid}`
  - requires bearer token from login
```
Hello I am test
```
