# mern-events-app
Welcome to the MERN Events App repository! This is a comprehensive Event Management System built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows
users to effortlessly explore, review, and book events at designated venues, on specific dates and time slots.
Below is a detailed guide to understanding and using the app effectively.

## Introduction
MERN Events App is a full-stack(MERN) web application designed to simplify event booking and management. The app consists of two modules: **Users and Admin**. Users can browse, review, and book events, while Admins have full control over user management, event creation, timeslots management, review management, bookings management and more. 
The app implements various modern web development concepts and technologies, including all important topics of React, MongoDB database, Node.js server, and Express.js framework.

## Features
- **Event Exploration:** Users can browse through a list of events, view event details, venue information, and pricing per person. They can also see the minimum and maximum guest sizes allowed for each event.

- **Dynamic Pricing:** As users specify the number of guests they plan to bring, the pricing adjusts dynamically, ensuring transparency and flexibility in event selection.

- **Booking System:** Users can book events by selecting a specific timeslot and day. The system automatically checks availability, preventing double bookings and ensuring event integrity.

- **User Authentication:** Users are required to log in to access review and booking features. Authentication is implemented using JSON Web Tokens (JWT) for secure user sessions.

- **User Reviews:** Authenticated users can leave reviews for events they've attended, sharing their experiences and opinions.

- **Admin Privileges:** Admins have access to a dedicated admin panel where they can manage users, events, timeslots, reviews, and bookings. They can perform CRUD operations seamlessly.

- **Modern UI with React:** The app boasts a user-friendly and responsive interface created with React, leveraging hooks, state management, and reusable components.

## Key Modules:

- **Home Section:** The app greets users with an inviting home page, showcasing featured events and an overview of its diverse offerings.

- **Event Gallery:** Users can leisurely browse through a gallery of events, each elegantly displayed with captivating visuals and relevant details.

- **Services Showcase:** A dedicated section highlights the comprehensive range of services the app provides, creating an all-inclusive experience.

- **Featured Events:** Catching the eye, the Featured Events section showcases standout events that pique users' interest and curiosity.

- **Review Section:** Users can share their experiences and insights by posting reviews for events they've attended, enriching the app's community.

- **Booking Section:** Seamlessly, users can book an event by selecting a specific date and time slot, all while seeing real-time updates on guest size and cost.

- **About Us:** This section provides insight into the app's background, objectives, and the team that has made it possible.

- **Search Functionality:** A user-friendly search bar allows users to swiftly locate specific events, streamlining their journey.

## Concepts and Technologies Used

- **React Concepts:** The app extensively uses React's functional components, Context API, hooks (useState, useEffect, useRef), props,dynamic rendering, forms and state management techniques.

- **Node.js and Express:** The server is built using Node.js and Express.js, RESTful API facilitating seamless data retrieval, user authentication, and data manipulation.

- **MongoDB Database:** MongoDB is employed for database storage, with Mongoose as the ODM (Object Document Mapper) for interaction with the database.

- **User Authentication:** Authentication is implemented using JWT tokens, hashing passwords using bcrypt, Custom middleware functions to verify user authentication and authorization. ensuring secure user sessions and protected routes.

- **Role-Based Access Control:** Different user roles (user and admin) are defined with distinct permissions.

#
Thank you for visiting this repository, and I hope you find this project helpful in your learning journey! Feel free to explore the project. If you have any questions or suggestions, contact me at fatimaiqbalmirza002@gmail.com

Happy coding!✨
