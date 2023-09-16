# QuadB_TECH-Assignement


## Table of Contents

- [Description](#description)
- [API Documentation](#api-documentation)
  - [Endpoints](#endpoints)
- [Database Documentation](#database-documentation)
  - [Users Table Structure](#users-table-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)


## API Documentation

This section provides documentation for the APIs used in your project.

### Endpoints

List and describe the available API endpoints here.

#### `/details` - GET Request
- GET `/users/details/:id` - Get the user's details from the database by ID.
#### `/update` - PUT Request
- PUT `/users/update/:user_id` - Update an existing user by its id.

#### `/image` - GET Request
- GET `/users/image/:user_id` - Retrieve a specific image by its user id.
#### `/insert` - POST Request
- GET `/users/insert` - Create User data and store in the database.

### `/delete` - DELETE Request
- DELETE `/users/delete/:user_id` - Delete an item by its ID.
  
...

### Database Documentation

Describe the structure of your database here.

#### Users Table Structure

- `user_id`: A randomly generated UUIDV4.
- `user_name`: The username of a user (may not be unique).
- `user_email`: The user's email address (unique).
- `user_password`: The user's password.
- `user_image`: The user's image.
- `total_orders`: Total orders placed by the user.
- `created_at`: Timestamp when the user was created.
- `last_logged_in`: Timestamp when the user last logged in.



## Installation
1. Ensure you have Node.js, Nodemon, Express, Sequelize, and mySQL workbench installed on your system.
2. Clone the repository: `https://github.com/Indrajeet790/QuadB_TECH-Assignement`
3. Install the dependencies: `npm install`
4. Start the server: `npm start`
5. The API will be available at `http://localhost:7000`.

## Usage

Explain how to use your project and the available APIs.

## Contributing

Explain how others can contribute to your project if applicable.

## License

This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details.
