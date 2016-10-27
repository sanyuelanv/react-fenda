import React, {Component} from 'react'
import User from './user'
import {Navigator} from 'react-native'


const routeStack = [
    {name:"home",component:User}
]

class App extends Component{
  constructor(props) {
    super(props)
  }
  renderScene(route,navigator){
    let Item = route.component
    return <Item navigator={navigator} route={route} />
  }
  render(){
    return (
      <Navigator
        initialRouteStack = {routeStack}
        renderScene = {this.renderScene.bind(this)}
      />
    )
  }
}

export default App
