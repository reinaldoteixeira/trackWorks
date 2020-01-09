import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../HomeScreen';
import ExploreScreen from '../ExploreScreen';
import MenuScreen from '../MenuScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Menu: {
      screen: MenuScreen,
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#eb6e3d',
    },
  },
);

export default createAppContainer(TabNavigator);
