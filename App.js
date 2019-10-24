/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import Images from './src/app/Components/Images';
import StateMangement from './src/app/Components/state';
import TextInputComponent from './src/app/Components/textinput';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextInputComponent />
      </View>
    );
  }
}
