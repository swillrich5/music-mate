import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchArtists from './pages/SearchArtists';
// import Episode from './pages/Episode';
import Artist from './pages/Artist';
import './App.css';


function App() {
  return (
    <Router>  
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/artists' component={SearchArtists}/>  
          <Route path='/artists/:id' component={Artist} />        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
