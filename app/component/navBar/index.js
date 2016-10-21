import React, {Component} from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import User from '../../route/user'
import Home from '../../route/home'
import styles from './styles'

class Nav extends Component {
    constructor(props) {
        super(props)
    }
    _toUser(){
        if(this.props.route == 'user')return
        this.props.navigator.replace({name:"user",component:User})
    }
    _toHome(){
        if(this.props.route == 'home')return
        this.props.navigator.replace({name:"home",component:Home})
    }
    render() {
        let routeName = this.props.routeName || 'home'
        return (
            <View style = {styles.nav} >
                <TouchableOpacity onPress={this._toHome.bind(this)} style = {styles.item}>
                    <View>
                        <Text style = {routeName == 'home'?styles.itemActivityText:styles.itemText} >主页</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._toUser.bind(this)} style = {styles.item}>
                    <View>
                        <Text style = {routeName == 'user'?styles.itemActivityText:styles.itemText} >我的</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Nav
