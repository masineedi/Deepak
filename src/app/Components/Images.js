/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image} from 'react-native';

const imgurl = 'https://miro.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png';

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{width: 200, height: 200}}>
          <Image
            resizeMode={'center'}
            style={{width: '100%', height: '100%'}}
            source={{
              uri: imgurl,
            }}
          />
        </View>
        <View style={{width: 300, height: 300}}>
          <Image
            resizeMode={'stretch'}
            style={{width: '100%', height: '100%'}}
            source={require('../../../assets/images/logo.png')}
          />
        </View>
      </View>
    );
  }
}
