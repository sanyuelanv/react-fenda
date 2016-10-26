import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    PanResponder
} from 'react-native'
const {height, width} = Dimensions.get('window')
import styles from './styles'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pan: new Animated.ValueXY(), // inits to zero
        }
        this.state.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null, {
                    dx: this.state.pan.x, // x,y are Animated.Value
                    dy: this.state.pan.y
                }
            ]),
            onPanResponderRelease: () => {
                console.log(1);
                Animated.spring(this.state.pan, {toValue: { x: 0, y: 0}}).start();
            }
        });
    }
    componentWillMount() {}
    render() {
        return(
            <Animated.View {...this.state.panResponder.panHandlers} style = {styles.main}>
                <View style = {styles.content} >
                    <View
                        style = {styles.swiper_1}
                    >
                    </View>
                    <View style = {styles.swiper_2} ></View>
                </View>
            </Animated.View>
        );
    }
}

export
default Content
