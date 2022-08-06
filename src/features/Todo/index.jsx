import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'
import NotFound from '../../components/NotFound'
TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const math= useRouteMatch();
  

    return (
        <div>
         <Switch>
            <Route path={math.path} component={ListPage} exact/>
            <Route path={`${math.path}/:todoId`} component={DetailPage} exact/>
            <Route component={NotFound}/>
         </Switch>
        </div>
    );
}

export default TodoFeature;