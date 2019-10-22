/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const imgurl = 'https://miro.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png';
var count = 0;
export default class StateMangement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countval: 0,
    };
  }

  increase() {
    count = count + 1;
    this.setState({
      countval: this.state.countval + 1,
    });
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
            <Text style={{fontSize: 20}}>Inc</Text>
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
          <Text style={{fontSize: 25}}>{count}</Text>
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
            <Text style={{fontSize: 20}}>Dec</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
