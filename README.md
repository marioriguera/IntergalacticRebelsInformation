# Technical Test Statement: Intergalactic Rebel Registry

## General description

<p align="justify">
    The test consists of developing a web application to manage an intergalactic registry of rebels spread throughout the galaxy. The application must be divided into two parts: a front-end developed in Angular and a back-end developed in .NET with an API. Data persistence will need to be done using Entity Framework. In addition, the application must have an authentication system that allows secure access through login with username and password.
</p>

## Functional Requirements

### 1- Rebel Management

- Rebel Registration: Users must be able to register new rebels with the following information:
  - Name
  - Home planet
  - Rank (e.g., Soldier, Captain, General)
  - Registration date
- Rebel List: Users should be able to see a list of all registered rebels.
- Rebel Update: Users should be able to update rebel information.
- Removing Rebels: Users must be able to delete rebel records.

### 2- User Management

- User Registration: The system must allow the registration of new users with the following information:
  - Username
  - Password (encrypted)
- User Login: The system must allow users to authenticate using a username and password.
- User Roles: Users can have roles (e.g., Administrator, Standard User) that determine their permissions within the system.

### 3- Use cases

- CU1: Rebel Registration: Allow an authenticated user to register a new rebel.
- CU2: Rebel List: Allow an authenticated user to view a list of all rebels.
- CU3: Rebel Update: Allow an authenticated user to update a rebel's information.
- CU4: Rebel Delete: Allow an authenticated user to delete a rebel record.
- CU5: User Registration: Allow a new user to register in the system.
- CU6: User Login: Allow a user to authenticate to the system.
- CU7: Role Assignment: Allow an administrator to assign roles to users.

## Non-Functional Requirements

### 1- Security

- Passwords should be stored encrypted.
- Authentication must implement JWT (JSON Web Tokens) for user session management.
- The API must ensure that only authenticated users can access the endpoints.

### 2- Technologies

- Front-end: Angular (latest stable version).
- Back-end: .NET (latest stable version).
- Persistence: Entity Framework Core.
- Database: SQL Server, PostgreSQL or MySQL.

### 3- Documentation

- Document the API using Swagger.
- Provide clear instructions for deploying the application in both development and production environments.

### 4- Evidence

- Implement unit and integration tests on both the front-end and back-end.

## Evaluation criteria

### 1- Full Functionality

- Compliance with all functional and non-functional requirements.

### 2- Code Quality

- Structure and organization of the code.
- Proper use of design patterns and SOLID principles.

### 3- Security

- Implementation of security measures for authentication and handling of sensitive data.

### 4- Tests

- Coverage and quality of the tests implemented.

### 5- Documentation

- Clarity and completeness of the documentation provided.

## Deliverables

- Front-end and back-end source code.
- Database scripts.
- API documentation (Swagger).
- Deployment and configuration instructions.
- Unit and integration tests.

## Additional notes

<p align="justify">
The user interface should be intuitive and friendly.
The use of reusable components in Angular will be valued.
The architecture of the solution must allow for future scalability and maintenance.
Good luck and may the force be with you on this mission.
</p>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=cs,angular,dotnet,docker" />
  </a>
</p>
