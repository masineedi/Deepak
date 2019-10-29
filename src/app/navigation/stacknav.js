import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../Screens/Login';
import Home from '../Screens/Home';

const stackNav = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerMode: 'Screen',
        //   title: 'Home screen',
        //   headerTintColor: 'red',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerMode: 'none',
      //   headerVisible: false,
      headerStyle: {
        backgroundColor: 'yellow',
      },
    },
    initialRouteName: 'Home',
  },
);

export const AppContainer = createAppContainer(stackNav);
