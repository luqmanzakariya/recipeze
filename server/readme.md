## RECIPEZE

## List of User routes:

| Route  | HTTP | Headers(s) |Sucess Response | Body | Description         |
| ------ | ---- | ---------- | - |-| ---- | ------------------- |
| `/users/signup` | POST | `none` | (201) json(data) | `name, email, password` | Sign up with new user info |
| `/users/signin` | POST | `none` |  (200) json(data) | `email, password` | Sign in and get an access token based on credentials |

## List of Nutrition routes:

| Route | HTTP | Headers(s) | Body | Sucess Response | Error Response | Description |
| ----- | ---- | ---------- | ---- | ----------------| -------------- | ---|
| `/nutrition` | GET | `none` | `food, nutrition` | (200) json(data)| | Get nutritions info |


## List of BMI routes:

| Route | HTTP | Headers(s) | Body | Sucess Response | Error Response | Description |
| ----- | ---- | ---------- | ---- | --------------- | -------------- | -|
| `/getBmi` | GET | `none` | `weight, height` | (200) json(data)| | Get BMI info |

## List of Youtube routes:

| Route | HTTP | Headers(s) | Body | Sucess Response | Error Response | Description |
| ----- | ---- | ---------- | ---- | --------------- | -------------- | - |
| `/youtube` | GET | `none` |`none`| (200) json(videos)| | Get youtube videos |

## Usage Client

Make sure you have live server installed in your computer, then go to client folder and run these commands:

    live-server --host=localhost

## Usage Server

Make sure you have Node.js and npm installed in your computer, then go to server folder and run these commands:

    npm install
    npm start
    npm run dev

Access via http://localhost:8080