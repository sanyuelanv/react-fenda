import React, {Component} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import styles from './styles'
import Nav from '../../component/navBar'
import Content from '../../component/content'
import Header from '../../component/header'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {styles.container} >
                <Header text="我" />
                <Content text="我"/>
                <Nav {...this.props} route='user' />
            </View>
        );
    }
}


export default App
