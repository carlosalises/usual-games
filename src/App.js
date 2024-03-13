import './App.css';
import FifthGame from './components/FifthGame/FifthGame';
import FirstGame from './components/FirstGame';
import FourthGame from './components/FourthGame/FourthGame';
import Game from './components/Game';
import SecondGame from './components/SecondGame';
import ThirdGame from './components/ThirdGame';

function App() {
  return (
    <main className='app'>
        <h1 className='principal-title'>JUEGOS DE SIEMPRE</h1>
        <Game title="PIEDRA PAPEL Y TIJERA">
          <FirstGame />
        </Game>
        <Game title="TRES EN RAYA" subtitle="JUEGO PARA DOS">
          <SecondGame/>
        </Game>
        <Game title="AHORCADO">
          <ThirdGame />
        </Game>
        <Game title="MEMORY">
          <FourthGame/>
        </Game>
        <Game title="GOLPEA AL TOPO">
          <FifthGame />
        </Game>
    </main>
  );
}

export default App;
