/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {AppContainer} from './src/app/navigation/stacknav';
import increducer from './src/app/Redux/Reducers/Countreducer';

const store = createStore(increducer);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}
