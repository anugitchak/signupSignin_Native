import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../common/Button'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={head1}>This is HomePage</Text>
      <Text style={Button}
      onPress={()=>{navigation.navigate('login')}}>Logout</Text>
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
})