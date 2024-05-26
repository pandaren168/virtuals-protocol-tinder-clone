# Tinder-swipe
## Getting Started
Before you begin, ensure you have following installed:
- You have `git`, `npm`, `node` installed.

### Installation

To install, follow these steps:

1. Clone the repository:
2. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Navigate to the backend directory:
    ```sh
    cd ../backend
    ```

5. Install dependencies:
    ```sh
    npm install
    ```

### Usage

To run the project, you will need two terminal sessions:

1. Start the frontend:
    ```sh
    cd ../frontend
    npm start
    ```

2. Start the backend:
    ```sh
    cd ../backend
    npm start
    ```
    
### Accessing the Frontend

Open your web browser.
  ```sh
  http://localhost:3000/swipe-landing
  ```
You shall see a carded user profile, using your mouse, you can swipe right or left to skip to next
![image](https://github.com/pandaren168/virtuals-protocol-tinder-clone/assets/35392882/6cfaa1d1-e3af-40ce-b39b-3d77f33d008e)

### Accessing the Backend
When you access the frontend, you should see a message indicating that the server is running on port 4000. This means that the backend is already running in the background.


### Interacting with the User Cards
Once you access the frontend and see the carded user profile, you can interact with it using your mouse. Here's how:
By swiping right or left, you can navigate through the user profiles.
<br/>

------------------------------------------------
<br/>


## UML diagrams for Data structure and logics
This illustrates the user journey through user interaction
![image](https://github.com/pandaren168/virtuals-protocol-tinder-clone/assets/35392882/8693ec3a-122f-494d-bef2-b7bf9c29194c)
https://drive.google.com/file/d/1TWqz4WXUl8XuprKzpBUSVxu6Rx9Zycin/view?usp=sharing


<br/>

------------------------------------------------
<br/>

# Web-service-hosting
## Getting Started
Before you begin, ensure you have following installed:
- You have `Docker Desktop` installed.
  
### Installation

To install, follow these steps:

1. Navigate to the backend directory
    ```sh
    cd ../backend
    ```
3. Build docker image:
    ```sh
    docker build -t my-node-app .
    ```
2. Spin up the docker image:
    ```sh
    docker run -d -p 3000:3000 my-node-app
    ```
    
### Usage

1. Start the frontend:
    ```sh
    cd ../frontend
    npm start
    ```
2. Open your web browser.
    ```sh
    http://localhost:3000/web-hosting
    ```
3. You will then see an input box where you can paste your GitHub repository URL and click "Register".
![image](https://github.com/pandaren168/virtuals-protocol-tinder-clone/assets/35392882/fb2d5287-dadb-41ad-804a-755a24c3f11f)

5. However, there is currently an issue with spawning a new Docker service in the backend.

