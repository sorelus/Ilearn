import { createStackNavigator } from 'react-navigation-stack'
import LoginView from '../components/Login'
import Selection from '../Carousel/index'
import Video from '../components/Video'
import { createAppContainer } from 'react-navigation';

const SearchStackNavigator = createStackNavigator({
  LoginView: {
    screen: LoginView,
    navigationOptions: {
      headerShown: false,
    }
  },
  Selection: {
    screen: Selection,
    navigationOptions: {
      headerShown: false,
    }
  },
  Video: {
    screen: Video,
    navigationOptions: {
      headerShown: false,
    }
  }
})
export default createAppContainer(SearchStackNavigator)
