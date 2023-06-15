import './App.css';
import SearchBar from './components/SearchBar';
import {Link, Route} from 'wouter';
import Detail from './components/Gif/Detail';
import { GifsContextProvider } from './contexts/GifContexts';
function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Link to='/'> <h1>HOME</h1>
        </Link>
        <GifsContextProvider>
          <Route path="/" component={SearchBar}/>
          <Route path='/gif/:id' component={Detail}> </Route>
        </GifsContextProvider>
      </div>
    </div> 
  );
}

export default App;
