/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordval: '',
      nameVal: '',
    };
  }

  submit() {
    // alert(this.state.nameVal);

    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 40,
          justifyContent: 'center',
          marginHorizontal: 20,
        }}>
        <View style={{width: '100%'}}>
          <View style={{marginHorizontal: 15, height: 100}}>
            <Text style={{marginBottom: 10, fontSize: 24}}>Enter Name</Text>
            <TextInput
              placeholder="enter your name"
              style={{
                width: '100%',
                height: 50,
                borderWidth: 1,
                paddingHorizontal: 5,
              }}
              value={this.state.nameVal}
              onChangeText={value => this.setState({nameVal: value})}
            />
          </View>
          <View style={{marginHorizontal: 15, height: 100}}>
            <Text style={{marginBottom: 10, fontSize: 24}}>Enter password</Text>
            <TextInput
              placeholder="enter your password"
              secureTextEntry
              style={{
                width: '100%',
                height: 50,
                borderWidth: 1,
                paddingHorizontal: 5,
              }}
              value={this.state.password}
              onChangeText={value => this.setState({passwordval: value})}
            />
          </View>
          <Button onPress={() => this.submit()} title="submit" />
        </View>
      </View>
    );
  }
}
