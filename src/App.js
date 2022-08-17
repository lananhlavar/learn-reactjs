import TodoFeature from './features/Todo';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AlbumFeature from './features/Album/index';
// import NotFound from './components/NotFound';

import CounterFeature from './features/Counter/index';
import Header from './components/Header';
import ProductFeature from './features/Product/index';
function App() {
  //test call api
  
  return (
    <div className="App">
      <Header/>
   
      <Switch>
        <Redirect from="home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
{/* 
        <Route component={NotFound} /> */}
      </Switch>
      {/* Footer */}
    </div>
  );
}

export default App;
