`#master-in-software-engineering` `#assembler-institute-of-technology`

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-) <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" /> [![Netlify Status](https://api.netlify.com/api/v1/badges/47a7c356-f104-4348-9740-bc4234b53621/deploy-status)](https://app.netlify.com/sites/to-do-list-joe/deploys)

> This project outlines the functional requirements of a to-do list management system that uses a backend server built with the Express framework. The system will provide users with a RESTful API for creating, retrieving, updating, and deleting tasks, which will be stored in a MongoDB database.

## Index <!-- omit in toc -->
- [Installation](#installation)
- [About the project](#about-the-project)
- [Deploy version](#deploy-version)
- [Contributors](#contributors-)

## Installation

- ```
   git clone https://github.com/joejoyjoy/wish-list-frontend.git
  ```
- ```
    cd wish-list-frontend
  ```

- ```
    npm install
  ```

- Configure your .env file according to the .env.example file to specify the different environment variables needed to perform authentication using Auth0 Universal Login.

- ```
    npm run dev
  ```

- Don't forget to also do the same thing with the [backend](https://github.com/joejoyjoy/wish-list-backend). Get further  instructions on `https://github.com/joejoyjoy/wish-list-backend`

## About the project

This project has all functional requirements of a to-do list management system that uses a backend server built with the Express framework. The system will provide users with a RESTful API for creating, retrieving, updating, and deleting tasks, which will be stored in a MongoDB database. 
> If your are not logged in, you will be able to use the to do list management system as normal. The only difference is there is no MongoDB connection but a LocalStorage connection with your browser so the tasks will be stored.
<p float="left">
  <img src="./src/assets/gif/GitHubToDoPreviewGif.gif" alt="To Do List preview" width="450px">
</p>

### Functions 📕
The system provides the following functionalities:

#### 1. Create a task ✏️
- User can sends a POST request to the server with the task's title and description.
- Server validates the request and creates the task in the database.
- Server responds with a 201 (Created) status code and the new task's ID.

#### 2. Retrieve a task 🔎
- User can sends a GET request to the server with the task's ID.
- Server retrieves the task from the database and verifies that it belongs to the user.
- Server responds with a 200 (OK) status code and the task's details.

#### 3. Update a task 📝
- User can sends a PUT request to the server with the task's ID and new data (title, description, or status).
- Server retrieves the task from the database and verifies that it belongs to the user.
- Server validates the request and updates the task in the database.
- Server responds with a 200 (OK) status code and the updated task's details.

#### 4. Delete a task 🧨
- User can sends a DELETE request to the server with the task's ID.
- Server retrieves the task from the database and verifies that it belongs to the user.
- Server deletes the task from the database.
- Server responds with a 204 (No Content) status code.

#### 5. Complete a task ✅
- User can sends a PATCH request to the server with the task's ID and the status "completed".
- Server retrieves the task from the database and verifies that it belongs to the user and is not already completed.
- Server updates the task's status in the database.
- Server responds with a 200 (OK) status code and the completed task's details.

#### 6. Retrieve all tasks 📇
- User can sends a GET request to the server.
- Server retrieves all tasks from the database that belong to the user.
- Server responds with a 200 (OK) status code and the list of tasks.

## Deploy version
#### Just want to see the project in action?
Good news! There is a deployed version available for everyone.
Go to [to-do-list-joe.netlify.app](https://to-do-list-joe.netlify.app) and see the project in action!
[![Netlify Status](https://api.netlify.com/api/v1/badges/47a7c356-f104-4348-9740-bc4234b53621/deploy-status)](https://app.netlify.com/sites/to-do-list-joe/deploys) 

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/joejoyjoy">
          <img src="https://avatars.githubusercontent.com/u/73751755" width="100px" alt="Joe Alt"/>
          <br />
          <sub>
          <b>Joe Alt</b>
          </sub>
        </a>
        <br />
        <a href="#developer-joe" title="code-tools-maintenance-design">💻🔧🚧🎨</a>
      </td>
    </tr>
  </tbody>
</table>

This project follows the [all-contributors](https://allcontributors.org) specification.
Contributions of any kind are welcome!

## License <!-- omit in toc -->

This project is licensed under the MIT License
