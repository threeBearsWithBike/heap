import './App.css';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(prev => !prev)
  }

  return (
    <div className="App">
      <Modal open={modal}>
        <h2>Про кота</h2>
          <p>
            Он был тощим, облезлым, рыжим,
            Грязь помоек его покрывала.
            Он скитался по ржавым крышам,
            А ночами сидел в подвалах.
          </p>
          <button onClick={() => setModal(false)}>close</button>
      </Modal>
      <button onClick={openModal}>Открыть</button>
    </div>
  );
}

export default App;
