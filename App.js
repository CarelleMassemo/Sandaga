
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Interface1 from "./Ecran1/interface1";
import interface2 from "./Ecran1/interface2"; 
import interface3 from "./Ecran1/interface3";
import interface4 from "./Ecran1/interface4";
import interface5 from "./Ecran1/interface5";
import interface6 from "./Ecran1/interface6";
import interface7 from "./Ecran1/interface7";
const Tab=createBottomTabNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Pro-Max">
        <Tab.Screen name="Massemo" component={Interface1} />
        <Tab.Screen name="Tchouaguep" component={interface2}/>
        <Tab.Screen name="Kotieu" component={interface3}/>
        <Tab.Screen name="Carelle" component={interface4}/>
        <Tab.Screen name="Programmeusse" component={interface5}/>
        {/* <Tab.Screen name="Pro-Max " component={interface5}/> */}
        <Tab.Screen name="Pro-Max" component={interface7}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}