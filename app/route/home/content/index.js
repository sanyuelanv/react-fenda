import React, {Component} from 'react'
import {StyleSheet, Text, View,PanResponder} from 'react-native'
import styles from './styles'

class Content extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,  //对触摸进行响应
            onMoveShouldSetPanResponder: (evt, gestureState) => true,//对滑动进行响应
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                console.log("触摸开始")
            },
            onPanResponderMove: (evt, gestureState) => {
            },
            onPanResponderRelease: (evt, gestureState) => {
                console.log("触摸结束")
            },
            // 有所冲突的时候，是否释放给另一个组件响应触摸
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderTerminate: (evt, gestureState) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                // 默认返回true。目前暂时只支持android。
                return true;
            }
        });
    }
    render() {
        return (
            <View style = {styles.main} {...this._panResponder.panHandlers}>
                <View style = {styles.content} >
                    <View style = {styles.swiper_1} ></View>
                    <View style = {styles.swiper_2} ></View>
                </View>
            </View>
        );
    }
}

export default Content
