import React from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./Components/Navbar/Navbar";
import Search from "./Components/Navbar/Search/Search";

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
