# Bot Battlr

## Introduction

Bot Battlr is a React application that allows you to browse through a list of robots, view their details, and enlist them into your army. The app demonstrates the use of React hooks, state management, and working with an API.

Key features:
- View a collection of available bots
- Sort bots by health, damage, or armor
- Filter bots by their class
- Enlist bots into your army
- Release bots from your army

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (usually comes with Node.js)

### Forking and Cloning the Repository

1. Fork the repository by clicking the 'Fork' button on the top right corner of this page.
2. Clone your forked repository:
3. Navigate to the project directory:### Installing Dependencies

Install the required npm packages:This will install React and other necessary dependencies.

### Installing Axios

Axios is used for making HTTP requests. Install it with:### Setting up JSON Server

JSON Server is used to create a mock API. Install it globally:Create a `db.json` file in the root of your project with the following structure:

https://drive.google.com/file/d/157IfYxr4Bp63-ByF1g1wCP1uOpQ5i2R4/view
Running the Application

Start the JSON server:
Copyjson-server --watch db.json --port 8001

In a new terminal, start the React app:
Copynpm start


The application should now be running on http://localhost:3000.
Component Structure
App.js
This is the main component that orchestrates the entire application. It maintains the state of enlisted bots and passes down props to child components.
BotCollection.js
This component fetches and displays the collection of available bots. It includes sorting and filtering functionality.
YourBotArmy.js
This component displays the bots that have been enlisted in your army.
SortBar.js
This component provides buttons to sort the bot collection by different attributes.
FilterBar.js
This component provides buttons to filter the bot collection by bot class.
How to Use

The main page displays the bot collection. You can sort and filter these bots using the buttons provided.
Click the "Enlist" button on a bot card to add it to your army.
Your enlisted bots appear in the "Your Bot Army" section at the top of the page.
To release a bot from your army, click the "Release" button on the bot in your army.

Customization
Feel free to customize the styling, add more features, or modify the existing functionality to suit your needs. You can edit the CSS in the respective component files or create a separate CSS file for global styles.
Troubleshooting

If you encounter CORS issues, ensure your JSON server is running on the correct port (8001).
If the bot data isn't loading, check that your db.json file is correctly formatted and the JSON server is running.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
