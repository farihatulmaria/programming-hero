import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className='text-6xl font-bold my-10'>Welcome to my pricing club</h1>
      <Pricing/>
    </div>
  );
}

export default App;
