import React from 'react'
import pokeballLogo from './assets/pokeball.png'
import { Navbar } from './components/navbar/Navbar'
import { ServiceContainer } from './services/ServiceContainer'
import { Provider } from 'inversify-react'
import 'reflect-metadata'
import './App.css'

export class App extends React.Component {

  private readonly serviceContainer: ServiceContainer = new ServiceContainer()

  render() {
    return (
      <div className='App'>
        <Provider container={this.serviceContainer.getContainer()}>
          <Navbar />
          <header className='App-header'>
            <h1>Welcome!</h1>
            <img src={pokeballLogo} className='App-logo' alt='logo' />
          </header>
        </Provider>
      </div>
    )
  }
}
