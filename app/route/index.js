import React, {Component} from 'react'
import Home from './home'
import User from './user'
import {Navigator} from 'react-native'


const routeStack = [
    {name:"user",component:User},
    {name:"home",component:Home}
]

class App extends Component{
  constructor(props) {
    super(props)
  }
  renderScene(route,navigator){
    let Item = route.component
    return <Item {...this.props} navigator={navigator} />
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
