import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, Animated} from 'react-native'
import styles from './styles'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fadeAnim: new Animated.Value(0),
            bounce:new Animated.Value(0),
            compos:[1,2,3].map(() => new Animated.Value(0)),
        };
    }
    componentDidMount() {
        Animated.spring(
            this.state.fadeAnim,
            {
                toValue:1,
                //duration: 1000
                /*
                    we don't provide a duration when animating with springs, it is calculated for us depending on the spring tension, friction, current value and end value.
                */
            }
        ).start()

        Animated.spring(
            this.state.bounce,
            {
                toValue: 1,
                velocity: 3,  // 速度
                tension: 0, // 拉力
                friction: 1,  // 摩擦力
            }
        ).start()
    }
    render() {
        return (
            <View style = {styles.header}>
                <View style = {styles.headerImage}>
                    <Animated.Image
                        style={[styles.headerImageIcon,{opacity: this.state.fadeAnim}]}
                        resizeMode='contain'
                        source={{uri:this.props.header}}
                    />
                </View>

                <View style = {styles.headerName}>
                    <Animated.Text
                        style = {[
                            styles.headerNameText,
                            {
                                transform:[
                                    {
                                        translateX:this.state.bounce.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [-100, 0],
                                        })
                                    }
                                ],
                                opacity: this.state.bounce.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1],
                                })
                            }
                        ]}
                    >
                        {this.props.name}
                    </Animated.Text>
                </View>

                <View
                    style = {[
                        styles.headerDesc,
                    ]}
                >
                    <Text style = {styles.headerDescText}>{this.props.desc}</Text>
                </View>
            </View>
        )
    }
}

export
default Header
