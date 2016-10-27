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
    }
    componentWillMount() {}
    render() {
        return(
            <Animated.View
                style = {[
                    styles.main,
                ]}
            >
            </Animated.View>
        );
    }
}

export
default Content
