import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Home from './Home';
export default function App() {
  return (
    // <h1 class="text-center text-4xl font-bold text-blue-900">Your Heading Text</h1>
    <>

    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}  />
      </Routes>
    </Router>
    </>

  )
}