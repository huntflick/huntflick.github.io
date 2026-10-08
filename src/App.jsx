import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Projects from "./Components/Projects/Projects.jsx";
import About from "./Components/About/About.jsx";
import Header from "./Components/Header/Header.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route
            path="/projects"
            element={
                <Projects />
            }
          />
          <Route
            path="/about"
            element={
                <About />
            }
          />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Components />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;