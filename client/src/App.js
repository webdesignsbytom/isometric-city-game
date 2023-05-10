import { Routes, Route } from 'react-router-dom';
// Pages
import WelcomePage from './pages/welcome/WelcomePage';

function App() {
  return (
    <Routes>
    <Route path="/" element={<WelcomePage />} />
    </Routes>
  );
}

export default App;
