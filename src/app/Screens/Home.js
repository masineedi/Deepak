// /* eslint-disable react-native/no-inline-styles */
// import React, {Component} from 'react';
// import {View, Image, Text, TouchableOpacity} from 'react-native';
// // import {TouchableOpacity} from 'react-native-gesture-handler';

// export default class Home extends Component {
//   //   static navigationOptions = () => ({
//   //     title: 'Add New Member',
//   //     headerTitleStyle: {textAlign: 'center', alignSelf: 'center' },
//   //     headerStyle: {
//   //       backgroundColor: 'red',
//   //     },
//   //     headerTintColor: 'blue',
//   //   });

//   constructor(props) {
//     super(props);
//     this.state = {
//       countval: 0,
//     };
//   }

//   increase() {
//     this.setState(preVState => ({
//       countval: preVState.countval + 1,
//     }));
//   }

//   decrease() {
//     this.setState({
//       countval: this.state.countval - 1,
//     });
//   }

//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <TouchableOpacity onPress={() => this.increase()}>
//           <View
//             style={{
//               width: 50,
//               height: 50,
//               borderWidth: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text style={{fontSize: 20, fontFamily: 'Roboto-Medium'}}>Inc</Text>
//           </View>
//         </TouchableOpacity>
//         <View
//           style={{
//             width: 50,
//             height: 50,
//             borderWidth: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text style={{fontSize: 25}}>{this.state.countval}</Text>
//         </View>
//         <TouchableOpacity onPress={() => this.decrease()}>
//           <View
//             style={{
//               width: 50,
//               height: 50,
//               borderWidth: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text style={{fontSize: 20, fontFamily: 'Proximanova-bold'}}>
//               Dec
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import {connect} from 'react-redux';

class Counter extends Component {
  // constructor(){
  //     super()
  //     this.state={
  //         count:0
  //     }
  // }

  // inc(){
  //     this.setState({count:this.state.count+1})
  // }
  // dec(){
  //     this.setState({count:this.state.count-1})
  // }

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
          <TouchableOpacity onPress={() => this.props.inc()}>
            <View
              style={{
                borderWidth: 1,
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20}}>Inc</Text>
            </View>
          </TouchableOpacity>
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
          <TouchableOpacity onPress={() => this.props.dec()}>
            <View
              style={{
                borderWidth: 1,
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20}}>Dec</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('Srudents')}
          title={'go to students'}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    inc: () => dispatch({type: 'INC_COUNT'}),
    dec: () => dispatch({type: 'DEC_COUNT'}),
  };
}

function mapStateToProps(state) {
  console.log(state);
  return {
    count: state.count,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
