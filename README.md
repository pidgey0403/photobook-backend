# Photobook-backend

Photobook's GraphQL API, built with Nest.js, Prisma, and PostgreSQL.

Note: Click [here](https://photobook.herokuapp.com/) to check out the full-stack application (please note it might take a minute or two to load up). If you want to just explore the GraphQL backend service, visit [here](https://photobook-be.herokuapp.com/)!

**For the MLH Fellowship Admissions team:** please visit [here](https://github.com/pidgey0403/photobook-frontend) to also view the Photobook-frontend repository!

## Build Status

![](https://github.com/pidgey0403/photobook-backend/actions/workflows/ci.yml/badge.svg)
![](https://github.com/pidgey0403/photobook-frontend/actions/workflows/CI.yml/badge.svg)

## Running the App Locally
Run the command:

```bash
$ docker-compose up
$ pnpm start:dev

```
This should run the App inside a Docker container and expose port 3001. Visit `http://localhost:3001/graphql` to begin making local queries and mutations.

## Code Style
<a href="https://prettier.io/"><img src="https://img.shields.io/badge/formatter-prettier-blue.svg"></a>
<a href="https://eslint.org/"><img src="https://img.shields.io/badge/linter-eslint-blue.svg"></a>


## Frameworks & Languages

Built with:

-   ![TypeScript](https://www.typescriptlang.org/) - strongly typed JavaScript
-   ![Docker](https://www.docker.com/) - containerization of the database
-   ![GraphQL](https://graphql.org/) - query language and server-side runtime for API
-   ![Prisma](https://www.prisma.io/) - ORM for Node.js and TypeScript
-   ![Nest.js](https://nestjs.com/) - Node.js framework that is deeply inspired by Angular
-   ![PostgreSQL](https://www.postgresql.org/) - open source database
-   ![GitHub Actions](https://github.com/features/actions) - workflow automation and implementation of custom CI/CD pipelines


## Curious About How I Built Photobook-Backend?
<details><summary>Click Here to Learn More</summary>
<p>

### Databases
During this past semester at university, I took an introduction to databases course. Here I learnt the fundamentals of **SQL**, **relational** **databases**, **relational** **algebra**, **relational** **calculus**, **data** **storage** and more. This foundation made me confident in taking the next steps in building a database, using JavaScript/TypeScript, from scratch.

As writing and maintaining databases in pure SQL can easily get complicated and messy, I decided to find a suitable ORM to use for my application. [Prisma]() is an easy to use **Object-Relational Mapper** (ORM) designed for use with Node.js and TypeScript. Being quite familiar with TypeScript due to my previous experience in frontend development, I felt that Prisma would be a great choice.

Prisma has 3 tools available to developers:

- **Prisma Migrate**: a migration tool which allows us to convert our database schemas into SQL tables and relations by typing `pnpm prisma migrate dev -[name]`
- **Prisma Client**: a query builder for Node.js which allows us to send our queries to the database
- **Prisma Studio**: a GUI designed to make it easy to view and edit our database

Using Prisma made it very easy to write out the schema required for the entities in my database, and convert these TypeScript files into a fully built database with tables and relations in SQL.


### APIs
Prior to this project, I really didn’t have much experience with writing APIs before, so this portion was definitely the most challenging to grasp. I first began by comparing and contrasting the differences between the two most popular APIs: REST and GraphQL. 

- **REST APIs:**
    - Stands for Representational State Transfer. It is an architectural concept for network-based software.
    - Clients make HTTP requests, which are made up of the **endpoint, HTTP method, Header, and Body,** and data is sent as an HTTP response object.
    - Gather data by **accessing multiple endpoints** such as `/users/<id>` to get initial user data and `/users/<id>/posts` to get all posts for a user.
- **GraphQL APIs:**
    - A specification Query Language
    - Uses strongly typed system to define the capabilities of an API. All schema types are writing in the **GraphQL Schema Definition Language (SDL)** which makes it safe to define response objects.
    - Clients can specify the **exact data requirements** using query structures as seen below. The GraphQL response returns exactly the data you specify, no more and no less.
    
    ```graphql
    {
    	burgers {
    		name
    	}
    }
    ```
    
I chose to use GraphQL to develop my backend API as I preferred the simplicity of using a **single HTTP endpoint** to access the full capabilities of the service, and the fact that the **GraphQL schemas** made it simple to define requests and return response’s that provided clients specific data. While GraphQL is not a replacement for REST, it helped me to understand the fundamentals of routing, response bodies and headers, request bodies and headers, and how data transfer between endpoints functions.

### Backend Frameworks
Before starting this project I had a bit of experience with the Express.js framework, which is a fast, unopinionated, minimalist web framework built for Node.js. Both **Nest.js** and **Express.js** handle routing, sessions, HTTP requests, error handling, etc. but in very different ways.

To highlight some differences:

- **Express.js:**
    - provides middleware modules to respond to HTTP requests
    - requires definition of application routes using HTTP methods and URLs
    - A simple express app looks like this. Notice we define URLs such as “/” and then pass in a callback function with parameters of req, res, and sometimes next (for middleware)
        
        ```tsx
        const express = require('express')
        const app = express()
        const port = 3000
        
        app.get('/', (req, res) => {
          res.send('Hello World!')
        })
        
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
        ```
        
- **Nest.js:**
    - follows the **Model-View-Controller (MVC)** design architecture as it is heavily inspired by Angular.js (**Modules**, **Providers**, **Controllers**)
    - an opinionated framework that combines the elements of **OOPs** (Object-Oriented Programming), **FP** (Functional Programming), and **FRP** (Functional Reactive Programming)
    - contains built-in **Dependency Injection (DI)** containers which help keep the code clean and easy to use
    - easy integration with technologies like TypeORM, GraphQL and web sockets
    - A simple Nest.js app has the following 3-tiered file structure:
        
        `app.service.ts` → A provider can be injected as a dependency. It is the smallest functional unit that can ‘wire up’ other objects in the application.
        
        `app.module.ts` → A module is a class annotated with a @Module() decorator. This decorator provides metadata that Nest makes use of to organize the application structure. It will contain all the necessary imports and providers that other modules need to access in the application.
        
        `app.controller.ts` → Controllers are responsible for handling incoming requests and returning responses to the client. It does not use explicit HTTP URLs like Express.js does, but rather uses function names and decorators to accomplish the task.
        

After comparing the benefits and drawbacks of these two popular Node.js frameworks, I decided to use Express.js as I preferred its **Isolation of Concerns (IoC)** via its MVC architecture. I also appreciated how simple it was to use controllers to handle routing, and enjoyed not having to write explicit HTTP URLs to make get and post requests.

### Sources:

If you want to do more reading about these technologies, these are some of the sources I consulted while building this service.

[https://www.solutelabs.com/blog/nestjs-vs-expressjs](https://www.solutelabs.com/blog/nestjs-vs-expressjs) 

[https://hygraph.com/blog/graphql-vs-rest-apis](https://hygraph.com/blog/graphql-vs-rest-apis) 

[https://www.prisma.io/](https://www.prisma.io/)

[https://graphql.org/](https://graphql.org/)

[https://nestjs.com/](https://nestjs.com/) 

[https://expressjs.com/](https://expressjs.com/)
</p>
</details>


## License

MIT License

Copyright © 2022 Gabrielle Niamat

