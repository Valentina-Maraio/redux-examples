import './App.css';
import World from './comps/world/World';
import Sweet from './comps/sweet/Sweet';
import Snack from './comps/snack/Snack';
import Search from './comps/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="search">
        <Search />
        </div>
      <div>
      <World />
      </div>
      <div>
        <Sweet />
      </div>
      <div>
        <Snack />
      </div>
      </header>
    </div>
  );
}

export default App;
