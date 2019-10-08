import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Search from "./src/screen/Search"

const navigator = createStackNavigator(
  {
    searchScreen: Search
  },
  {
    initialRouteName: 'searchScreen',
    defaultNavigationOptions: {
      title: 'Lets find you an awsome restraunt !!'
    }
  }
);

export default createAppContainer(navigator);