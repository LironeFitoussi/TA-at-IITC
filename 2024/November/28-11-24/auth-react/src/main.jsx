import { StrictMode } from "react"; 
// Import React's `StrictMode` component. This is a tool to highlight potential problems in the application during development.

import { createRoot } from "react-dom/client"; 
// Import `createRoot` from React DOM to initialize and render the React application.

import "./index.css"; 
// Import the global CSS file for application-wide styles.

import App from "./App.jsx"; 
// Import the main `App` component, which acts as the root of the application.

import { Provider } from "react-redux"; 
// Import the `Provider` component from `react-redux`. It allows the Redux store to be available throughout the application.

import { store } from './store'; 
// Import the Redux store configured in your application.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* Wrap the application with the Redux Provider to enable Redux store access across all components */}
      <App /> {/* Render the main App component */}
    </Provider>
  </StrictMode>
);
