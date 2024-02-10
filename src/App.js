import './App.css';
import Timer from './components/timer/Timer';

function App() {
  return (
    <div className="App">
      <Timer minutes = { 1 } seconds = { 10 } />
    </div>
  );
}

export default App;
