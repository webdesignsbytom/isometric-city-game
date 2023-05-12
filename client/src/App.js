import { Routes, Route } from 'react-router-dom';
// Pages
import WelcomePage from './pages/welcome/WelcomePage';
import MainPage from './pages/bricks/MainPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  );
}

export default App;
