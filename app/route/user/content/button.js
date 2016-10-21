import React, {Component} from 'react'
import {StyleSheet,Text,View,TouchableHighlight} from 'react-native'
import styles from './styles'

class Button extends Component {
    constructor(props) {
        super(props)
    }
    _toPage(){

    }
    render() {
        return (
            <TouchableHighlight
                activeOpacity={0.9}
                onPress={this._toPage.bind(this)}
            >
                <View style = {styles.button}>
                    <Text style = {styles.buttonText}>
                        { this.props.name }
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}


export default Button
