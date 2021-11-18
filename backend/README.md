# Automathic
## Data Schema
## Endpoints(API DOCS)
### Login(POST)
- Endpoint: /login
- Description: Client sends username & password, they get back a success or error message. Current login is saved in session.
- Request:
```json
{
"username": "username",
"password": "PASSWORD"
}
```
- Return:
```json
```
- Assigned to:

### Login(GET)
- Endpoint: /login
- Description: returns username and id of currently logged in user
- Return:
```json
{
    "username": "username",
    "id": "038470as08q34ra"
}
```

### Logout(GET)
- Endpoint: /logout
- Description: Logs you out of the account (clears the session)
- Return:
```json
{
    "success": true
}
```
### Signup(POST)
- Endpoint: /signup
- Description: Client sends username, email, password, and confirm password, they get back a success or error message
- Request:
```json
{
"username": "example@example.com",
"email": "example@example.com",
"password": "PASSWORD"
}
```
- Return:
```json
```
- Error Messages:
    - Username already exists:
    ```json
    {
        "error": "An account with that name already exists"
    }
    ```
     - Email already exists:
    ```json
    {
        "error": "An account with that email already exists"
    }
    ```
- Assigned to:

### Dashboard (GET)
- Endpoint:
- Description:
- Request:
```json
```
- Return:
```json
```
- Assigned to: Siddharth Mohanty

### Create Test (POST)
- Endpoint: /createTest
- Description: Creates a new test with the default settings
- Request:
```json
{
    "name": "Unit 1 Math Test"
}
```
- Return:
```json
{
    "success": true
}
```
- Assigned to:

### Edit Test (POST)
- Endpoint:
- Description:
- Request:
```json
```
- Return:
```json
```
- Assigned to:

### View Student Test (GET)
- Endpoint:
- Description:
- Request:
```json
```
- Return:
```json
```
- Assigned to:

### Settings (GET)
- Endpoint:
- Description:
- Request:
```json
```
- Return:
```json
```
- Assigned to:

### Update Settings (POST)
- Endpoint:
- Description:
- Request:
```json
```
- Return:
```json
```
- Assigned to:

### Test Validity (GET)
- Endpoint:
- Description:
- Request:
```json
```
- Return:
```json
```
- Assigned to:

### Export Grades (GET)
- Endpoint:
- Description:
- Request:
```json
```
- Return:
```json
```
- Assigned to:
