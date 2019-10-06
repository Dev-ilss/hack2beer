import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Servicio from './views/Servicio';
import {TransitionGroup, Transition, CSSTransition} from 'react-transition-group';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  // onEnter={(node, appears) => play(pathname, node, appears)}
                  // onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >
                <div className="app">
                  <Switch location={location}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/servicio" component={Servicio} />
                  </Switch>
                </div>  
                </Transition>
              </TransitionGroup>
            )
          }}/>
      </BrowserRouter>
    )
  }
}
