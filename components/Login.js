import React, { Component  } from 'react';
import { Dimensions } from 'react-native';
import { colors } from '../assets/commons';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const wid = viewportWidth * 0.8 ;

export default class LoginView extends Component {

text ={
  title : 'ILearn',
  signin :'Login'
}
  onClickListener = (viewId) => {
    //Alert.alert("Alert", "Button pressed "+viewId);
     this.props.navigation.navigate("Selection");
  }

  singing = () => {
    Alert.alert("Alert", "this view is not available yet");
  }

  render() {
    return (
      <View style={styles.container}>
      <Image
            style={{width: 120, height: 120}}
            source={require('../assets/icon.png')}
              />
        <Text style={styles.title} > {this.text.title}</Text>
        <View style={[styles.inputContainer,styles.equalization]}>
           <TextInput style={styles.inputs}
              placeholder="login"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        <View style={[styles.inputContainer,styles.equalization]}>
            <TextInput style={styles.inputs}
              placeholder="password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,styles.equalization]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>{this.text.signin}</Text>
        </TouchableHighlight>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => this.singing()}
          >
          <Text style={{color: colors.primary}}>
            Sign Up,
            <Text style={{color: 'black'}}>
              {'\t'} if you are a new user
            </Text>
          </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background1,
  },
  equalization : {
  width: wid,
  marginLeft:20,
  marginRight:20

},
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:15,
      borderBottomWidth: 1,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,

    borderRadius:10,
  },
  loginButton: {
    backgroundColor: colors.primary,
  },
  loginText: {
    color: 'white',
  },
  title: {
      height:65,
      marginTop:12,
      fontSize: 32,
      color: colors.primary,
      fontWeight: 'bold',
  }
});
