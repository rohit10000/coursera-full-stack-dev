import React, { Component } from 'react';
import Menu from "./Menu";
import Home from "./Home";
import DishDetail from "./DishDetail";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Contact from "./Contact";
import About from "./About";

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

        const contactNavigator = function(){
            return(
                <Stack.Navigator initialRouteName={"Contact"}>
                    <Stack.Screen name="Contact" component={Contact} options={{ title: "Contact Us", headerStyle: {
                            backgroundColor: "#512DA8"
                        }, headerTintColor: '#fff',
                        headerTitleStyle: {
                            color: "#fff"
                        }
                    }}/>
                </Stack.Navigator>
            )
        }

        const aboutNavigator = function(){
            return(
                <Stack.Navigator initialRouteName={"About"}>
                    <Stack.Screen name="About" component={About} options={{ title: "About Us", headerStyle: {
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
                <Drawer.Navigator initialRouteName="About" drawerContentOptions={{
                    backgroundColor:"#D1C4E9"

                }}>
                    <Drawer.Screen name="Home" component={homeNavigator}  options={{ title: "Home" ,
                        headerStyle: { display: "none"}
                    }}/>

                    <Drawer.Screen name="About" component={aboutNavigator} options={{ title: "About Us" ,
                        headerStyle: { display: "none"}
                    }}/>

                    <Drawer.Screen name="Menu" component={menuNavigator} options={{ title: "Menu" ,
                        headerStyle: { display: "none"}
                    }}/>

                    <Drawer.Screen name="Contact" component={contactNavigator} options={{ title: "Contact Us" ,
                        headerStyle: { display: "none"}
                    }}/>

                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;
