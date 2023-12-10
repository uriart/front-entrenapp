# EntrenApp Frontend

This is the front-end repository for EntrenApp, a web application that generates a 6-week training program based on your maximum bench press, deadlift, and squat weights.

## Getting Started

To run the EntrenApp front-end locally, follow these steps:

### Prerequisites

Make sure you have Angular, Node.js, and npm installed on your machine.

### Installation

1. Clone this repository.
2. Navigate to the `front-entrenapp` directory.
3. Run the following commands:

```bash
npm install
ng serve
```

The application will be accessible at http://localhost:4200/entrenapp by default.

### Docker
Alternatively, you can use the Dockerized image available on Docker Hub:

```bash
docker run -p 4200:80 uriart/front-entrenapp:1.0.0
```

This will start the application in a Docker container.

### Usage
Open the application in your web browser.
Enter your maximum bench press, deadlift, and squat weights.
Receive a personalized 6-week training program.

### Technologies Used
1. Angular
2. Other dependencies are listed in the package.json file.
