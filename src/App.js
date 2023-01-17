import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Courses from "./Components/Courses/Courses";

import HomePage from "./Components/Landing/HomePage";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Teachers from "./Components/Teachers/Teachers";
import Add from "./Components/FormPages/Add";
import DetailedTeacher from "./Components/Teachers/DetailedTeacher/[slug]";

function App() {
	return (
		<Router>
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/teachers" element={<Teachers />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/add" element={<Add />} />
					<Route path="/teachers/:slug" element={<DetailedTeacher />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
