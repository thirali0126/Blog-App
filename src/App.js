import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Bloglist from './components/bloglist';
import Blogform from './components/blogform';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/blogform" exact component={Blogform} />
        <Route path="/bloglist" exact component={Bloglist}/>
      </Switch>
    </div>
  );
}

export default App;
