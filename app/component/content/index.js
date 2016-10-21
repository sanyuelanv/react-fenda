import React, {Component} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import styles from './styles'

class Content extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {styles.main} >
                <Text style = {styles.mainText} >{this.props.text}</Text>
            </View>
        );
    }
}


export default Content
