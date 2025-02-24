import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
	return (
		<div className="w-full">
			<Router>
				<Routes>
					<Route path="/3legant-E-Commerce/" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
