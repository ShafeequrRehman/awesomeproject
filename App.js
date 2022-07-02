import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView,Handle } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
const app = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [no, setNo] = useState('')
  const [usernameerror, setUsernameerror] = useState('')
  const [emailerror, setEmailerror] = useState('')
  const [passworderror, setPassworderror] = useState('')
  const [confirmpassworderror, setConfirmpassworderror] = useState('')
  const [noerror, setNoerror] = useState('')
  const [nolengtherror, setNolengtherror] = useState('')
  const [passwordsameerror, setPasswordsameerror] = useState('')
  const validation=()=>{
  
if (username=='') {
  setUsernameerror('Please Enter Your Name');
  check=false;
}else if (username.length<=8) {
  setUsernameerror('Please Enter your complete name');
  check = false;
}else{
  setUsernameerror('')
}
// return check

    if (email=='') {
      setEmailerror('Please Enter Your Email');
      check=false;
    }else if (email.length<=8) {
      setEmailerror('Please Enter Valid Email Address');
      check = false;
    }else{
      setEmailerror('')
    }
    // return check
    if (password=='') {
      setPassworderror('Please Enter Your Password');
      check=false;
    }else if (password.length<=8) {
      setPassworderror('Please Enter  least "8" character ');
      check = false;
    }else{
      setPassworderror('')
    }
    // return check
  if (confirmpassword!=password) {
      setConfirmpassworderror('Please Enter same password and confirm passord');
      check = false;
    }else{
      setConfirmpassworderror('')
    }
    // return check
    if (no=='') {
      setNoerror('Please Enter Your Phone No');
      check=false;
    }else if (no.length<=11) {
setNoerror('Please Enter Valid Phone No with"11"digit');
      check = false;
    }else{
setNoerror('')
    }
  
    return check
  }
// if(username.length==0)
// {
//   alert('Please enter user name')
// }
// if(username.length <(3))
// {
//   alert('Please Enter your name less then "6" character')
// }
// if(!email.trim())
// {
//   alert('Please enter user email')
// }
// if(!password.trim())
// {
//   alert('Please enter user password')
// }
// if(!confirmpassword.trim())
// {
//   alert('Please enter user confirmpassword')
// }
// if(!no.trim())
// {
//   alert('Please enter user Phone.No')
// }
// if(password!==confirmpassword)
// {
// alert('password and confirm password not same')
// }


  

  return (


    <ScrollView contentContainerStyle={styles.view}>
      <View style={{ marginBottom: 1, alignSelf: 'center' }}>
        <Image source={require('../AwesomProject/img/jazz.png')} style={styles.logo} />
      </View>
      <Text style={styles.signup}>
        Sign Up
      </Text>
      <Text style={{ marginBottom: 10, marginTop: 0 }}>
        please enter email & password to continue
      </Text>
      <Text style={styles.email1}>
        username
      </Text>
      <TextInput style={styles.email} value={username} onChangeText={(value) => { setUsername(value) }} 
      ></TextInput>
      {!usernameerror?(null):<Text style={{color:'red'}}>{usernameerror}</Text>}
      {/* {!usernameerror?<Text style={{color:'red'}}>please Enter Your name</Text>:(null)} */}
      <Text style={styles.email1}>email</Text>
      <TextInput style={styles.email}
        placeholder="smithjordan67@gmail.com" keyboardType={'email-address'} value={email} onChangeText={(va) => { setEmail(va) }} >
      </TextInput>
      {!emailerror?(null):<Text style={{color:'red'}}>{emailerror}</Text>}
      <Text style={styles.email1}>password</Text>
      <TextInput style={styles.email}
        secureTextEntry={true} value={password} onChangeText={(a) => { setPassword(a) }}>
      </TextInput>
      {!passworderror?(null):<Text style={{color:'red'}}>{passworderror}</Text>}
      <Text style={styles.email1}>confirm password</Text>
      <TextInput style={styles.email}
        secureTextEntry={true} value={confirmpassword} onChangeText={(a) => { setConfirmpassword(a) }}>
      </TextInput>
      {!confirmpassworderror?(null):<Text style={{color:'red'}}>{confirmpassworderror}</Text>}
      {/* {!passwordsameerror?(null):<Text style={{color:'red'}}>{}</Text>} */}
      <Text style={styles.email1}>
        Phone.No
      </Text>
      <TextInput style={styles.email}
        keyboardType={'phone-pad'} maxLength={(14)} value={no} onChangeText={(a) => { setNo(a) }}>
      </TextInput>
      {!noerror?(null):<Text style={{color:'red'}}>{noerror}</Text>}
      {!nolengtherror?(null):<Text style={{color:'red'}}>please complete cell NO with "11"digit</Text>}
      <TouchableOpacity style={styles.button}
       onPress={() => {
validation()
        }}>
        <Text style={{ textAlign: "center", color: 'white', }}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={{ color: 'black', marginTop: 20, textAlign: 'center' }}>
        Joined us before?{' '}
        <TouchableOpacity style={{height:17}}>
        <Text style={{ color: 'orange', textDecorationLine: 'underline' }}>
        Log in
      </Text>
      </TouchableOpacity>
      </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  signup: {
    fontWeight: '500',
    color: 'black',
    marginTop: 10,
    fontSize: 22
    

  },
  email: {
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
    borderRadius: 5,
    marginBottom: 10
  },
  email1: {
    color: 'black'
  },
  button: {

    backgroundColor:"orange",
    borderRadius: 50,
    marginTop: 40,
    padding: 10
  },
  logo: {
    height: 120,
    width: 120,
    //marginLeft:100,
    borderRadius: 100
    // marginBottom:30

  },
  view: {
    padding: 15,
    backgroundColor: 'white'
  }
});
export default app;