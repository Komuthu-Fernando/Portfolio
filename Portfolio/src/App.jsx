import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Navbar from './components/Navbar';
import ScrollbarComponent from './components/Scrollbar';
import CustomCursor from './components/CustomCursor';

function App() {
	return (
		<>
			<ScrollbarComponent >
			<Router>
				<Navbar />
				{/* <CustomCursor /> */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					{/* Define other routes for Portfolio, About, Work, etc. */}
				</Routes>
			</Router>
			</ScrollbarComponent>
		</>
	);
}

export default App;
