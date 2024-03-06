# Fitness Gym Management Software Full Stack/Microservices Architecture
This repository contains the source code for a Fitness Gym Management Software implemented using a full stack/microservices architecture. The architecture separates the application into smaller, independently deployable services, providing flexibility, scalability, and maintainability.

## Architecture Overview
This full stack/microservices architecture consists of two main services:

1. Django Backend Service: Handles the backend logic, data storage, and API endpoints. It is divided into separate Django apps (gym_management and gym_users) for gym management and user management functionalities.

2. React Frontend Service: Presents the user interface to interact with the gym management system. It includes components and pages organized based on functional areas such as gym management and user management.

By separating the backend and frontend into independent services, this architecture promotes modularity, scalability, and maintainability. It allows teams to work on different parts of the application simultaneously, facilitates easier deployment and scaling, and enables the adoption of different technologies or frameworks for each service.

## Getting Started
To run the application locally, follow these steps:

1. Install Docker and Docker Compose.
2. Clone this repository.
3. Navigate to the project directory.
4. Run docker-compose up to start the services.
5. Access the application via the specified port (e.g., http://localhost:3000 for the frontend).

## Contributing
Contributions are welcome! Please feel free to fork this repository and submit pull requests for any improvements or fixes.

## License
This project is licensed under the MIT License.

