import './App.css';
import Timer from './components/timer/Timer';

function App() {
  return (
    <div className="App">
      <Timer hours={ 1 } minutes = { 1 } seconds = { 30 } />
    </div>
  );
}

export default App;
