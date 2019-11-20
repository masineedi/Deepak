import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Srudents from '../Screens/Srudents';

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
    Srudents: {
      screen: Srudents,
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
    initialRouteName: 'Login',
  },
);

const drawer = createDrawerNavigator(
  {
    stackNav: {
      screen: stackNav,
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
    initialRouteName: 'stackNav',
  },
);

export const AppContainer = createAppContainer(stackNav);
