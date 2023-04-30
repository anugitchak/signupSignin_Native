import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import background from '../../assets/background.png'
import loginpage from '../../assets/loginpage.png'
import { errormessage, formgroup, head1, input, label, link } from '../common/form'
import { head2 ,link2} from '../common/form'
import { button1 } from '../common/Button'

const Login = ({navigation}) => {
  const[fdata,setFdata]=useState({
    email:"",
    password:""
  })
  const [errormsg,setErrormsg]=useState(null);
  const Sendtobackend=()=>{
    // console.log(fdata);
    if(fdata.email =='' || fdata.password==''){
      setErrormsg('All fields are required');
      return;
    }
    else{
      fetch('http://10.0.2.2.:3000/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
         body:JSON.stringify(fdata)
      })
      .then (res=>res.json()).then(
        data=>{
          // console.log(data);
          if(data.error){
            setErrormsg(data.error);
          }
          else{
            alert('login successfully');
            navigation.navigate('home');
          }
        }
      )
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={background} />

      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={loginpage} />
        </View>
        <View style={styles.s2}>
          <Text style={head1}>Login</Text>
          <Text style={head2}>Sign in to Continue</Text>
          {
            errormsg ? <Text style={errormessage}>{errormsg}</Text>:null
          }
          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput style={input} placeholder='Enter your Email' 
            onPressIn={()=> setErrormsg(null)}
            onChangeText={(text)=> setFdata({...fdata,email:text})}/>
          </View>

          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput style={input} placeholder='Enter your Password'
            secureTextEntry={true}
            
            onChangeText={(text)=> setFdata({...fdata,password:text})}
            onPressIn={()=> setErrormsg(null)}/>
          </View>
          <View style={styles.fp}>
            <Text style={link}>Forget Password?</Text>
          </View>
          <Text style={button1}
                        onPress={() => Sendtobackend()}
                    >Login</Text>
          <Text style={link2}>Don't have an account?&nbsp;
          <Text style={link}
          onPress={()=>navigation.navigate('signup')}> Create a new account</Text></Text>
        </View>
      </View>
    </View>
  )
}

export default Login

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