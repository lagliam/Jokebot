# Knock-Knock Joke Teller App

This is a simple Knock-Knock Joke Teller application built with Laravel for the backend and Vue 3 for the frontend. The application allows users to retrieve, add, and view jokes stored in an SQLite database.

## Features

- Retrieve all jokes
- Add a new joke
- View a specific joke by ID
- Built with Laravel and Vue 3

## Requirements

- PHP >= 8.0
- Composer
- Node.js and npm
- SQLite

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd Jokebot
   ```

2. Install PHP dependencies:

   ```
   composer install
   ```

3. Set up the environment file:

   ```
   cp .env.example .env
   ```

   Update the `.env` file with your database configuration.

4. Run the migrations to create the database tables:

   ```
   php artisan migrate:fresh --seed
   ```

5. Install JavaScript dependencies:

   ```
   npm install
   ```

6. Build the frontend assets:

   ```
   npm run build
   ```

7. Start the Laravel development server:

   ```
   php artisan serve
   ```

8. Access the application at `http://localhost:8000`.

## Usage

- Use the API endpoints to interact with the jokes:
  - `GET /api/jokes` - Retrieve all jokes
  - `POST /api/jokes` - Add a new joke
  - `GET /api/jokes/{id}` - Retrieve a specific joke by ID

## License

This project is open-source and available under the MIT License.