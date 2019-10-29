/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Home extends Component {
  //   static navigationOptions = () => ({
  //     title: 'Add New Member',
  //     headerTitleStyle: {textAlign: 'center', alignSelf: 'center' },
  //     headerStyle: {
  //       backgroundColor: 'red',
  //     },
  //     headerTintColor: 'blue',
  //   });

  constructor(props) {
    super(props);
    this.state = {
      countval: 0,
    };
  }

  increase() {
    this.setState(preVState => ({
      countval: preVState.countval + 1,
    }));
  }

  decrease() {
    this.setState({
      countval: this.state.countval - 1,
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => this.increase()}>
          <View
            style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, fontFamily: 'Roboto-Medium'}}>Inc</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 25}}>{this.state.countval}</Text>
        </View>
        <TouchableOpacity onPress={() => this.decrease()}>
          <View
            style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, fontFamily: 'Proximanova-bold'}}>
              Dec
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
