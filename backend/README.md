# Automathic
## Data Schema
### Tests
```json
[
    {
    "accessed": UnixTimeOfLastAccess,
    "id": RandomGen,
    "name": "Name",
    "problems": [
        {
        "text": "Bob has `x` apples and he gets `y` more. How many does he have now?",
        "answer": "x + y",
        "isAnswerInt": true,
        "variables": ["x", "y"],
        "ranges": {
            "x": {
            "min": 3,
            "max": 9
            },
            "y": {
            "min": 4,
            "max": 10
            }
        }
        }
    ]
    }
]
```
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
- Assigned to: Chinmay

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
- Assigned to: Chinmay

### Logout(GET)
- Endpoint: /logout
- Description: Logs you out of the account (clears the session)
- Return:
```json
{
    "success": true
}
```
- Assigned to: Chinmay
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
- Assigned to: Chinmay

### Dashboard (GET)
- Endpoint: /dashboard
- Description: Returns a list of each test's name and randomly generated id
- Return:
```json
[
    {
        "id": "123456789ABCD",
        "name": "Unit 1 Test"
    },
    {
        "id": "132456789ABCD",
        "name": "Unit 2 Test"
    }
]
```
- Assigned to: Siddharth Mohanty

### Create Test (POST)
- Endpoint: /createTest
- Description: Creates a new test with the default settings and the name given
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
- Assigned to: Samih

### Delete Test (POST)
- Endpoint: /deleteTest
- Description: Deletes a test with a given id
- Request:
```json
{
    "id": "132456789ABCD"
}
```
- Return:
```json
{
    "success": true
}
```
- Assigned to: Manu, Sanjeev


### Edit Test (POST)
- Endpoint: /editTest
- Description: Takes in a test's id and its new data: passing in the entire test's data. The test in the user's collection with the specified id will be updated.
- Request:
```json
{
    "testID": "18267E7DY1S23087",
    "name": "Unit 3 Test",
    "problems": [
        {
            "text": "Bob has `x` candies but he loses `y`. How many does he have now?",
            "answer": "x - y",
            "variables": ["x", "y"],
            "ranges": {
                "x": {
                "min": 3,
                "max": 9
                },
                "y": {
                "min": 4,
                "max": 10
                }
            }
        }
    ]
}
```
- Return: the updated test
```json
{
    "testID": "18267E7DY1S23087",
    "name": "Unit 3 Test",
    "problems": [
        {
            "text": "Bob has `x` candies but he loses `y`. How many does he have now?",
            "answer": "x - y",
            "variables": ["x", "y"],
            "ranges": {
                "x": {
                "min": 3,
                "max": 9
                },
                "y": {
                "min": 4,
                "max": 10
                }
            }
        }
    ]
}
```
- Assigned to: Tanush

### View Student Test (POST)
- Endpoint: /viewTest
- Description: Returns a test with the id passed in if it exists
- Request:
```json
{
    "testID": "18267E7DY1S23087"
}
```
- Return: the entire test with the specified id
```json
{
    "testID": "18267E7DY1S23087",
    "name": "Unit 3 Test",
    "problems": [
        {
            "text": "Bob has `x` candies but he loses `y`. How many does he have now?",
            "answer": "x - y",
            "variables": ["x", "y"],
            "ranges": {
                "x": {
                "min": 3,
                "max": 9
                },
                "y": {
                "min": 4,
                "max": 10
                }
            }
        }
    ]
}
```
- Assigned to: Ronit

### View Student Test
- Endpoint: /viewStudentTest
- Description:
- Request:
```json
```
- Return:
```json
```
- Assigned to: Siddharth Mohanty
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
