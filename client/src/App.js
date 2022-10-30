import './App.css';
// import { BrowserRouter, Router, Switch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import NewPokemon from './components/NewPokemon/NewPokemon'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/newpokemon' component={NewPokemon} />
        <Route path='/detail/:id' component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
