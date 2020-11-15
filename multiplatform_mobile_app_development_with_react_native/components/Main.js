import React, { Component } from 'react';
import Menu from "./Menu";
import Home from "./Home";
import DishDetail from "./DishDetail";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class Main extends Component{

    render() {
        const menuNavigator = function(){
            return(
                <Stack.Navigator initialRouteName={"Menu"}>
                    <Stack.Screen name="Menu" component={Menu} options={{ title: "Menu", headerStyle: {
                            backgroundColor: "#512DA8"
                        }, headerTintColor: '#fff',
                        headerTitleStyle: {
                            color: "#fff"
                        }
                    }}
                    />

                    <Stack.Screen name="DishDetail" component={DishDetail} options={{ title: "Dish Detail", headerStyle: {
                            backgroundColor: "#512DA8"
                        }, headerTintColor: '#fff',
                        headerTitleStyle: {
                            color: "#fff"
                        }
                    }}/>
                </Stack.Navigator>
            )
        }

        const homeNavigator = function(){
            return(
                <Stack.Navigator initialRouteName={"Home"}>
                    <Stack.Screen name="Home" component={Home} options={{ title: "Home", headerStyle: {
                            backgroundColor: "#512DA8"
                        }, headerTintColor: '#fff',
                        headerTitleStyle: {
                            color: "#fff"
                        }
                    }}/>
                </Stack.Navigator>
            )
        }
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={homeNavigator}  options={{ title: "Home" ,headerStyle: {
                            backgroundColor: "#512DA8"
                        }, headerTintColor: '#fff', headerTitleStyle: {
                            color: "#fff"
                        }
                    }}
                    />
                    <Drawer.Screen name="Menu" component={menuNavigator} options={{ title: "Menu" ,headerStyle: {
                            backgroundColor: "#512DA8"
                        }, headerTintColor: '#fff', headerTitleStyle: {
                            color: "#fff"
                        }
                    }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;
