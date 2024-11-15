
# Event Management Website

![Event Management Banner](https://github.com/user-attachments/assets/f6bb3daf-bd43-462e-b2f0-53221485df2a)


An Event Management Website designed to help users create, organize, and manage events seamlessly. This web application provides tools for organizers to plan, coordinate, and track events, while allowing attendees to explore, register, and receive updates.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)


## Team Members

We’re a team of passionate developers and contributors who worked together on this project. Here are the amazing members:

| Name                | Role               | GitHub Profile                                          |
|---------------------|--------------------|---------------------------------------------------------|
| Priyanka Jhala      | Project Lead       | [priii-13](https://github.com/priii-13)                 |
| Himansh Prajapati   | Backend Developer  | [himansh-01](https://github.com/himansh-01)             |
| Archana Nair        | Frontend Developer | [Archana7224](https://github.com/Archana7224)           |
| Ayush Singh         | UI/UX Designer     | [AyushSingh9893](https://github.com/AyushSingh9893)     |

We’d like to thank everyone for their contributions, hard work, and dedication to making this project a success!




## Features

- **User Registration and Authentication**: Sign up, log in, and manage profiles.
- **Event Creation and Management**: Create events, set details, and manage attendees.
- **Attendee Registration**: Users can register for events and view details.
- **Dashboard for Organizers**: View events, manage attendees, and track metrics.
- **Search and Filter Events**: Find events by date, type, or location.
- **Responsive Design**: Accessible across devices.
- **Notifications and Reminders**: Email or SMS reminders for upcoming events.

## Screenshots

### Homepage
![Homepage Screenshot](https://github.com/user-attachments/assets/3736ae1a-988a-4ee2-bc22-40e9fac7a520)


### Event Details Page
![Event Details Screenshot](https://github.com/user-attachments/assets/361970e0-d3a4-4d71-bea0-ea31859670a8)

## Tech Stack

| Frontend               | Backend                | Database                |
|------------------------|------------------------|-------------------------|
| HTML, CSS, JavaScript  | Node.js, Express       | MongoDB (or MySQL)      |
|                        | JWT for Authentication |                         |

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/priii-13/neww.git
   cd neww
   ```

2. **Install dependencies for the backend**:
   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for the frontend**:
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**: Create a `.env` file with your configuration.
   ```plaintext
   PORT=5000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key
   ```

5. **Start the application**:
   - Backend: `npm start` (within the `backend` directory)
   - Frontend: `npm start` (within the `frontend` directory)

6. **Open the application** in your browser: Go to `http://localhost:3000`.

## Usage

1. **Organizers**: Register or log in to access the dashboard, where you can create and manage events.
2. **Attendees**: Sign up or log in to explore events, register, and receive reminders.

## Contributing

We welcome contributions to enhance the website! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

