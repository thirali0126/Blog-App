import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Blog from './components/Blog';
import Store from './Store';
import Header from './components/header';
import Hello from './components/Hello/hello';
import List from './components/List';

function App () {
  return (
    <>
      <Header />
      <Provider store={Store}>
        <BrowserRouter>
          <Switch>
            <Route path="/blog" exact component={Blog} />
            <Route  path="/list" exact  component={List} />
            <Route path="/hello" exact component={Hello} />
            <Route path="/thirali" exact component={Blog} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
