import React, { Component } from 'react';
import Menu from "./Menu";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DishDetail from "./DishDetail";

const Stack = createStackNavigator();

class Main extends Component{

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Menu"}>
                    <Stack.Screen name="Menu" component={Menu} options={{ title: "Menu" ,headerStyle: {
                            backgroundColor: "#512DA8"
                        }, headerTintColor: '#fff', headerTitleStyle: {
                            color: "#fff"
                        }
                    }}/>

                    <Stack.Screen name="DishDetail" component={DishDetail} options={{ title: "Dish Detail", headerStyle: {
                            backgroundColor: "#512DA8"
                        }, headerTintColor: '#fff',
                        headerTitleStyle: {
                            color: "#fff"
                        }
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;
