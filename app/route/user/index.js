import React, {Component} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import styles from './styles'
import Nav from '../../component/navBar'
import Content from './content'
import Header from '../../component/header'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {styles.container} >
                <Header text="我" />
                <Content />
                <Nav {...this.props} routeName={this.props.route.name} />
            </View>
        );
    }
}


export default App
