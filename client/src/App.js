import './App.css';
// import { BrowserRouter, Router, Switch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing'
import Home from './components/Home';
import Detail from './components/Detail';
import NewPokemon from './components/NewPokemon'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/newpokemon' component={NewPokemon} />
        <Route exact path='/detail' component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
