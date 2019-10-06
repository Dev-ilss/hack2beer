import {React, Component} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Servicio from './views/Servicio';
import {TransitionGroup, CSSTransition, Transition } from 'react-transition-group';

class App extends Component {
  
  
  render(){
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Route render={({location}) => {
            const {pathname, key } = location;
            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  // onEnter={(node,appears) => play(pathname, node, appears)}
                  timeout={{enter: 750, exit: 0}}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/servicio" component={Servicio} />
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

