import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Search from "./src/screen/Search";
import resultScreen from "./src/screen/ResultsShow"

const navigator = createStackNavigator(
  {
    searchScreen: Search,
    resultScreen: ResultsShow
  },
  {
    initialRouteName: "searchScreen",
    defaultNavigationOptions: {
      title: "Lets Eat !!"
    }
  }
);

export default createAppContainer(navigator);