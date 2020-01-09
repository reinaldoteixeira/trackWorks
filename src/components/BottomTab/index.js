import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Indicate from '../../pages/Indicate';
import Explore from '../../pages/Explore';
import Menu from '../../pages/Menu';
import colors from '../../css/colors';

const TabNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="eye" size={24} color={tintColor} />,
      },
    },
    Indicate: {
      screen: Indicate,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="user" size={24} color={tintColor} />,
      },
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="bars" size={24} color={tintColor} />,
      },
    },
  },
  {
    initialRouteName: 'Indicate',
    tabBarOptions: {
      activeTintColor: colors.emphasisText,
      inactiveTintColor: colors.secondaryText,
      style: {
        borderTopColor: colors.white,
      },
    },
  },
);


export default createAppContainer(TabNavigator);
