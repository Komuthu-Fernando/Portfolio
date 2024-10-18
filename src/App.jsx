import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './screens/Error';
import { Analytics } from "@vercel/analytics/react"

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
			<Analytics />
		</Router>
	);
}

export default App;
