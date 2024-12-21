import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Repository from "./pages/Repository";
import Cloud from "./pages/NavPages/Cloud";
import AiCode from "./pages/NavPages/AiCode";
import HowToUse from "./pages/NavPages/HowToUse";
import Settings from "./pages/NavPages/Settings";
import LoginPage from "./pages/AuthPages/LoginPage";
import LoginPageSelf from './pages/AuthPages/LoginPageSelf';
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repo" element={<Repository />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loginSelf" element={<LoginPageSelf />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/ai" element={<AiCode/>}/>
        <Route path="/cloud" element={<Cloud/>}/>
        <Route path="/use" element={<HowToUse/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </Router>
  );
};

export default App;
