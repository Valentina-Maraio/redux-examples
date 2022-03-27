import logo from './logo.svg';
import './App.css';
import Grid from './comps/Grid';
import Search from './comps/Search';
import World from './buttons/World';
import Sweet from './buttons/Sweet';
import Snack from './buttons/Snack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search />
      <div>
        <World />
      <Grid />
      </div>
      <div>
        <Sweet />
        <Grid />
      </div>
      <div>
        <Snack />
        <Grid />
      </div>
      </header>
    </div>
  );
}

export default App;
