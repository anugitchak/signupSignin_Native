import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import background from '../../assets/background.png'
import loginpage from '../../assets/loginpage.png'
import { errormessage, formgroup, head1, input, label, link } from '../common/form'
import { head2 ,link2} from '../common/form'
import { button1 } from '../common/Button'

const Verification = ({navigation,route}) => {
  const {useState}=route.params;
  const [errormsg,setErrormsg]=useState(null);
  const [userCode,setUserCode]=useState('XXXX');
  const [actualCode,setActualCode]=useState(null);

  useEffect(()=>{
    setActualCode(userdata[0]?.VerificationCode);
  },[])
 const Sendtobackend=()=>{
    // console.log(userCode);
    // console.log(actualCode);

    if(userCode == 'XXXX' || userCode==''){
      setErrormsg('please Enter the code');
      return;
    }
    else if(userCode==actualCode){
      // console.log('correct code');
      const fdata={
        email:userdata[0]?.email,
        password:userdata[0]?.password,
        name:userdata[0]?.name,
        dob:userdata[0]?.dob,
        address:userdata[0]?.address,
      }
      fetch('/signup',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(fdata)
      })
      .then(res=>res.json())
      .then(
        data=>{
          if(data.message=== 'User registered successfully'){
            alert(data.message);
            navigation.navigate('login')
          }
          else{
            alert('Something went wrong ! Try Signing up again');
          }
        })
    }
    else if(userCode !=actualCode){
      setErrormsg('Incorrect code');
      return;
    }
 }
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={background} />

      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={loginpage} />
          <Text style={styles.h1} 
          onPress={()=>navigation.navigate('welcome')}>welcome To our page</Text>
        </View>
        <View style={styles.s2}>
          <Text style={head1}>Verification</Text>
          <Text style={displaymessage}>A code has been sent to your email</Text>
          {
            errormsg ? <Text style={errormessage}>{errormsg}</Text>:null
          }
          
          <View style={formgroup}>
            <Text style={label}>Code</Text>
            <TextInput style={input} placeholder='Enter 6 digit verification code'
            secureTextEntry={true}
            onChangeText={(text)=> setUserCode(text)}
            onPressIn={()=> setErrormsg(null)}/>
          </View>
          <View style={styles.fp}>
            <Text style={link}>Forget Password?</Text>
          </View>
          <Text style={button1}
                        onPress={() => Sendtobackend()}
                    >Verify</Text>
                    
          
        </View>
      </View>
    </View>
  )
}

export default Verification

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  patternbg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  s1: {
    display: 'flex',
    height: '40%'
  },
  s2: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  fp: {
    display: 'flex',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 4,
  }
})