import React, {Component} from 'react'
import {StyleSheet,Text,View,TouchableHighlight} from 'react-native'
import User from '../../route/user'
import Home from '../../route/home'
import styles from './styles'

class Nav extends Component {
    constructor(props) {
        super(props)
    }
    _toUser(){
        let routeName = this.props.route
        if(routeName == 'user')return
        let {navigator} = this.props
        console.log(navigator);
        let route = {name:"user",component:User}
        navigator.push(route)
    }
    _toHome(){
        let routeName = this.props.route
        if(routeName == 'user')return
        let {navigator} = this.props
        let route = {name:"home",component:Home}
        navigator.pop(route)
    }
    render() {
        let routeName = this.props.route
        return (
            <View style = {styles.nav} >
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor = {'#f1f1f1'}
                    onPress={this._toHome.bind(this)}
                    style = {styles.item}
                >
                    <View>
                        <Text style = {routeName == 'home'?styles.itemActivityText:styles.itemText} >主页</Text>
                    </View>
                </TouchableHighlight>
                <View style = {styles.item} >
                    <Text style = {routeName == 'more'?styles.itemActivityText:styles.itemText} >收听</Text>
                </View>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor = {'#f1f1f1'}
                    onPress={this._toUser.bind(this)}
                    style = {styles.item}
                >
                    <View>
                        <Text style = {routeName == 'user'?styles.itemActivityText:styles.itemText} >我的</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}


export default Nav
