import {Dimensions} from 'react-native'
const {height, width} = Dimensions.get('window')

export default styles = {
    main:{
        flex:1,
        flexDirection: 'row',
    },
    content:{
        flex:1,
        backgroundColor:'#f7f7f7',
    },
    swiper_1:{
        flex:1,
        position:"absolute",
        left:0,
        top:0,
        right:0,
        bottom:0,
        backgroundColor:'#fff000',
    },
    swiper_2:{
        flex:1,
        position:"absolute",
        top:0,
        right:0,
        bottom:0,
        backgroundColor:'#000',
    }
}
