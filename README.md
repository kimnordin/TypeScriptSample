# TypeScript-React Counter App

This project is a simple counter application built with React and TypeScript. It showcases a basic setup and usage of React with TypeScript, Redux for state management, and Redux Toolkit to handle the logic for a counter that can increment and decrement values.  
The app is a great starting point for understanding how to structure a React project with TypeScript.

## Features

- Increment and decrement counter values.
- Use of React, TypeScript, and Redux Toolkit.
- Simple and clear project structure for learning purposes.

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/en/) (version 12.x or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository**

```
git clone https://github.com/kimnordin/TypeScriptSample.git
cd TypeScriptSample
```

2. **Install dependencies**

Navigate to the project directory and run:

```
npm install
```

> [!IMPORTANT]  
> The project uses a specific version of typescript that may conflict with the version required by react-scripts. To resolve these conflicts, you can use the `--legacy-peer-deps` option with npm install, which tells npm to ignore peer dependencies and proceed with the installation.

```
npm install --legacy-peer-deps
```

This command installs all the necessary dependencies defined in `package.json`.

3. **Start the application**

Once the dependencies are installed, you can start the application by running:

```
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

The application displays a simple counter that users can interact with. Use the `+` and `-` buttons to increment or decrement the counter by 1, and the `+10` and `-10` buttons for larger increments or decrements. The counter's current value is displayed prominently on the screen.

## Project Structure

- `public/index.html`: The HTML template for the application.
- `src/index.tsx`: The entry point for the React application. Sets up the Redux store provider.
- `src/App.tsx`: The main App component that renders the Counter.
- `src/app/store.ts`: Configures the Redux store and combines reducers.
- `src/app/hooks.ts`: Provides typed versions of `useDispatch` and `useSelector` hooks for use throughout the application.
- `src/features/counter/Counter.tsx`: Defines the Counter component with buttons to increment or decrement the counter's value.
- `src/features/counter/counterSlice.tsx`: Contains the Redux slice for counter state management, including actions and reducers.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, feel free to open an issue or submit a pull request.
