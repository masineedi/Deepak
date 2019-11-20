/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import {connect} from 'react-redux';

class Stuents extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderWidth: 2,
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'red',
              borderRadius: 5,
              margin: 10,
            }}>
            <Text style={{fontSize: 25}}>{this.props.count}</Text>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Stuents);
