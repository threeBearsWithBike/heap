import './App.css';
import Timer from './components/timer/Timer';

function App() {
  return (
    <div className="App">
      <Timer minutes = { 0 } seconds = { 30 } />
    </div>
  );
}

export default App;
