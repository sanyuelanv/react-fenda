import React, {Component} from 'react'
import {StyleSheet,Text,View,Image} from 'react-native'
import styles from './styles'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {styles.header}>
                <View style = {styles.headerImage}>
                    <Image
                        style={styles.headerImageIcon}
                        resizeMode='contain'
                        source={{uri:this.props.header}}
                    />
                </View>
                <View style = {styles.headerName}>
                    <Text style = {styles.headerNameText}>{this.props.name}</Text>
                </View>
                <View style = {styles.headerDesc}>
                    <Text style = {styles.headerDescText}>{this.props.desc}</Text>
                </View>
            </View>
        );
    }
}


export default Header
