
import React, { Component, Suspense } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute }  from './common/PrivateRoute';
import { render } from 'react-dom';
import history from './common/history';
import routes from './routes';
import Hello from './Hello';
import './style.css';
import Timenow from './components/Timenow';
// import Dog from './components/Dog';


class App extends Component {
  loading = () => <div>Loading...</div>

  render() {
    return (
      
      <Router history={history}>
        <Timenow/>
        <Suspense fallback={this.loading()}> 
                <Switch>
                  {
                    routes.map((route, idx) => 
                    {
                      return (route.component && route.active) ?
                      (
                        route.private ?
                        (
                          <PrivateRoute
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            component={route.component} 
                          />
                        ):(
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (<route.component {...props} />
                            )} />
                        )
                      ) 
                      : (null);
                  }
                  )
                  }
                  <Route path='*' render={()=>(<div>404</div>)} />
                  <Redirect from="*" to="/" />
                  
                </Switch>
          </Suspense>
          
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));


