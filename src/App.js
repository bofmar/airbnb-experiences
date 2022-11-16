import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardsList from './components/CardsList';
import experiences from './data/Experiences';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardsList experiences={experiences} />
    </div>
  );
}

export default App;
