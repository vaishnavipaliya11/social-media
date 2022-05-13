import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { PostProvider } from "./context/postContext";
import { ChakraProvider } from '@chakra-ui/react'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
 
    <BrowserRouter>
      <AuthProvider>
        <PostProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
        </PostProvider>
      </AuthProvider>
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById("root")
);
