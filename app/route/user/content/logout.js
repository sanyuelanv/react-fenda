import React, {Component} from 'react'
import {StyleSheet,Text,View,TouchableWithoutFeedback} from 'react-native'
import styles from './styles'

class Logout extends Component {
    constructor(props) {
        super(props)
    }
    _logout(){

    }
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={this._logout.bind(this)}
            >
                <View style = {styles.logoutButton}>
                    <Text style = {styles.logoutButtonText}>
                        { this.props.name }
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


export default Logout
