import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import background from '../../assets/background.png'
import welcome from '../../assets/welcomepage.png'
import { button1 } from '../common/Button'
const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={ styles.patternbg} source={background}/>
      <View style={styles.container1}>
      <Image style={styles.logo} source={welcome}/>

      <Text style={button1} 
      onPress={()=>navigation.navigate('signup')}>SignUp</Text>
      <Text style={button1}
      onPress={()=>navigation.navigate('login')}
      >Login</Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
    width:'100%',
    height:'100%',
    display:'flex',
    },
    patternbg:{
        position:'absolute',
        top:0,
        width:'100%',
        height:'100%',
        zIndex:-1,
    },
    head:{
        fontSize:80,
        color:'white',
    },
    container1:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',

    },
    
})