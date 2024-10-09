# TaskThread Backend - Connects tasks into a unified thread.

### Introduction

TaskThread Backend implementation using ExpressJs: We could Register new users or logging in existing users, Fetch tasks, edit existing tasks ,and delete existing tasks for authorized users.

### Installation Guide

- Clone this repository
- The `main` branch is the most stable branch at any given time, ensure you're working from it.
- Move to the server dir to run `pnpm install` to install all server dependencies.

### Usage

- Copy .env.example and fill out values : `cp .env.example .env`
- To start the `server` application, Move to the server dir to run `pnpm start`.
- Connect to the API using Postman on port `4000`.

### API Endpoints

| HTTP Verbs   | Endpoints                      | Action                                                                                |
| ------------ | ------------------------------ | ------------------------------------------------------------------------------------- |
| POST         | /signup                        | To register a new user to the system                                                  |
| POST         | /signin                        | To sign in existing user                                                              |
| POST         | /logout                        | To logs out the specified user from all of the devices they are currently logged into |
| GET          | /getTodos                      | To retrieve all tasks list for specific user                                          |
| GET          | /getTodo/:id                   | To retrieve task details for specific user based on task id                           |
| POST         | /createTodo                    | To create a new task for specific user                                                |
| PATCH        | /updateTodoStatus/:id          | To edit the details of a single task's status for specific user                       |
| PATCH        | /updateTodo/:id                | To edit the details of a single task for specific user                                |
| DELETE       | /deleteTodo/:id                | To delete the details of a single task or specific user                               |
