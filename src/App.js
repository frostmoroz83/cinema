import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Content from './components/content/Content'
import FilmsDetails from './components/films/FilmsDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateFilms from './components/films/CreateFilms'
import HalloDA from './components/films/HallDA'


class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Content} />
            <Route path='/films/:id' component={FilmsDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateFilms} />
            <Route path='/hallo' component={HalloDA} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
