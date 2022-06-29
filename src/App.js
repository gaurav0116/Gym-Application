import React from "react";
import { Box } from "@mui/system";  // Material UI Components 
import Navbar from "./components/Navbar";   // navbar   
import Footer from "./components/Footer";   // footer
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";   // Router 
import "./App.css";

const App = () => {
    return (
        <Box width="400px" sx={{ width: {xl:'1488px'} }} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    )
}
export default App;