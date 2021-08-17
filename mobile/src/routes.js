import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import screenOptions from "./constants/screenOptions";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import BiggerStock from "./pages/BiggerStock";
import SmallerStock from "./pages/SmallerStock";

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {

  return (
    <Navigator screenOptions={screenOptions}>
       <Screen name="SignIn" component={SignIn}
        options={() => ({ title: 'Faça seu login' }
        )}
      />

      <Screen name="Home" component={Home}
        options={() => ({ title: 'Home' }
        )}
      />
      <Screen name="BiggerStock" component={BiggerStock}
        options={() => ({ title: 'Produto com maior estoque' }
        )}
      />

      <Screen name="SmallerStock" component={SmallerStock}
        options={() => ({ title: 'Produto com menor estoque' }
        )}
      />

    </Navigator>
  )
}
export default Routes;