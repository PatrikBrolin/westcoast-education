import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./Components/Landing/HomePage";
import Navbar from "./Components/Layout/Navbar/Navbar";

function App() {
	return (
		<Router>
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
