import React, {Component} from 'react'
import {StyleSheet,Text,View,ScrollView} from 'react-native'
import styles from './styles'
import Button from './button'
import Logout from './logout'
import Header from './header'

class Content extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {styles.main} >
                <ScrollView style = {styles.scroll} >
                    <Header
                        name={"三月懒驴"}
                        header={"https://pic2.zhimg.com/167b9dd52e27bbdafffa631bb81e93f9_l.jpg"}
                        desc={"这个人很懒，什么都没留下!"}
                    />
                    <View>
                        <Button name="我的主页" page='userPage' />
                        <Button name="我的金币" page='userMoney' />
                        <Button name="我的问题" page='userProblem' />
                        <Button name="我的回答" page='userAnswer' />
                        <Button name="我的收听" page='userListen' />
                    </View>

                    <View style = {styles.bottomView}>
                        <Button name="手机号码验证" page='checkPhone'/>
                        <Button name="结算说明" page="billeInstru" />
                        <Button name="帮助" page="help" />
                        <Button name="关于" page="about" />
                    </View>

                    <View style = {styles.logoutView}>
                        <Logout name="退出登录" />
                    </View>
                </ScrollView>
            </View>
        );
    }
}


export default Content
