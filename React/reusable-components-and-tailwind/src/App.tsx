import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  const handleButtonClick = (message: string) => {
    alert(message);
  };

  return <LandingPage onButtonClick={handleButtonClick} />;
}

export default App;
