import React, {Component} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import styles from './styles'

class Content extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {styles.headerBlock} >
                <View style = {styles.header} >
                    <Text style = {styles.headerText} >{this.props.text}</Text>
                </View>
            </View>
        );
    }
}


export default Content
