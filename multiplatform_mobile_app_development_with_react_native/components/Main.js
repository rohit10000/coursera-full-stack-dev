import React, { Component } from 'react';
import Menu from "./Menu";
import Home from "./Home";
import DishDetail from "./DishDetail";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import Contact from "./Contact";
import About from "./About";
import {useWindowDimensions, SafeAreaView, View, Image, Text, StyleSheet} from "react-native";
import {Icon} from "react-native-elements";

import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import Reservation from "./Reservation";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class Main extends Component{

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {
        const menuNavigator = function(){
            return(
                <Stack.Navigator initialRouteName={"Menu"}>
                    <Stack.Screen name="Menu" component={Menu}
                                  options = {({navigation}) =>(
                                      {
                                          title: "Menu",
                                          headerStyle: {
                                              backgroundColor: "#512DA8",
                                              height: 80
                                          },
                                          headerTintColor: '#fff',
                                          headerTitleStyle: {
                                              color: "#fff"
                                          },
                                          headerLeft:() =>(<Icon name="menu" size={24}
                                                                 color='white'
                                                                 onPress={() => navigation.toggleDrawer()}/>)
                                      }
                                  )
                                  }/>

                    <Stack.Screen name="DishDetail" component={DishDetail}
                                  options = {
                                      {
                                          title: "Dish Details",
                                          headerStyle: {
                                              backgroundColor: "#512DA8",
                                              height: 80
                                          },
                                          headerTintColor: '#fff',
                                          headerTitleStyle: {
                                              color: "#fff"
                                          }
                                      }
                                  }/>
                </Stack.Navigator>
            )
        }

        const homeNavigator = function(){
            return(
                <Stack.Navigator initialRouteName={"Home"} >
                    <Stack.Screen name="Home" component={Home}
                                  options = {({navigation}) =>(
                                      {
                                          title: "Home",
                                          headerStyle: {
                                              backgroundColor: "#512DA8",
                                              height: 80
                                          },
                                          headerTintColor: '#fff',
                                          headerTitleStyle: {
                                              color: "#fff"
                                          },
                                          headerLeft:() =>(<Icon name="menu" size={24}
                                                                             color='white'
                                                                             onPress={() => navigation.toggleDrawer()}/>)
                                      }
                                  )
                                  }/>

                </Stack.Navigator>
            )
        }

        const contactNavigator = function(){
            return(
                <Stack.Navigator initialRouteName={"Contact"}>
                    <Stack.Screen name="Contact" component={Contact}
                                  options={
                                      ({navigation}) => (
                                          {
                                              title: "Contact",
                                              headerStyle: {
                                                  backgroundColor: "#512DA8",
                                                  height: 80
                                              },
                                              headerTintColor: '#fff',
                                              headerTitleStyle: {
                                                  color: "#fff"
                                              },
                                              headerLeft:() =>(<Icon name="menu" size={24}
                                                                     color='white'
                                                                     onPress={() => navigation.toggleDrawer()}/>)
                                          }
                                      )
                                  }/>

                </Stack.Navigator>
            )
        }

        const aboutNavigator = function(){
            return(
                <Stack.Navigator initialRouteName={"About"}>
                    <Stack.Screen name="About" component={About}
                                  options={
                                      ({navigation}) => (
                                          {
                                              title: "About",
                                              headerStyle: {
                                                  backgroundColor: "#512DA8",
                                                  height: 80
                                              },
                                              headerTintColor: '#fff',
                                              headerTitleStyle: {
                                                  color: "#fff"
                                              },
                                              headerLeft:() =>(<Icon name="menu" size={24}
                                                                     color='white'
                                                                     onPress={() => navigation.toggleDrawer()}/>)
                                          }
                                      )
                                  }/>
                </Stack.Navigator>
            )
        }
        const reservationNavigator = function (){
            return(
                <Stack.Navigator>
                    <Stack.Screen name={"Reservation"} component={Reservation}
                                  options={
                                      ({navigation}) => (
                                          {
                                              title: 'Reservation',
                                              headerStyle: {
                                                  backgroundColor: "#512DA8",
                                                  height: 80
                                              },
                                              headerTintColor: '#fff',
                                              headerTitleStyle: {
                                                  color: "#fff"
                                              },
                                              headerLeft:() =>(<Icon name="menu" size={24}
                                                                     color='white'
                                                                     onPress={() => navigation.toggleDrawer()}/>)
                                          }
                                      )
                                  }/>
                </Stack.Navigator>
            )
        }

        const CustomDrawerContentComponent = (props) => (
            <DrawerContentScrollView {...props}>
                <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <View style={styles.drawerHeader}>
                        <View style={{flex:1}}>
                            <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                        </View>
                        <View style={{flex: 2}}>
                            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                        </View>
                    </View>
                </SafeAreaView>
                <DrawerItemList {...props} />

            </DrawerContentScrollView>
        );

        const dimensions = useWindowDimensions;

        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Reservation"
                                  drawerStyle={{backgroundColor: "#D1C4E9"}}
                                  drawerContent={(props) => <CustomDrawerContentComponent {...props}/>}
                                  drawerType={dimensions.width >= 768 ? 'permanent': 'front'}>

                    <Drawer.Screen name="Home" component={homeNavigator}
                                   options={
                                       {
                                           title: "Home",
                                           drawerLabel: "Home",
                                           drawerIcon: ({ tintColor, focused }) => (
                                               <Icon
                                                   name='home'
                                                   type='font-awesome'
                                                   size={24}
                                                   color={tintColor}
                                               />
                                           ),
                                           headerStyle:{
                                               display: "none"
                                           }
                                       }
                                   }
                    />

                    <Drawer.Screen name="About" component={aboutNavigator}
                                   options={
                                       {
                                           title: "About",
                                           drawerLabel: "About",
                                           drawerIcon: ({ tintColor, focused }) => (
                                               <Icon
                                                   name='info-circle'
                                                   type='font-awesome'
                                                   size={24}
                                                   color={tintColor}
                                               />
                                           ),
                                           headerStyle:{
                                               display: "none"
                                           }
                                       }
                                   }
                    />

                    <Drawer.Screen name="Menu" component={menuNavigator}
                                   options={
                                       {
                                           title: "Menu",
                                           drawerLabel: "Menu",
                                           drawerIcon: ({ tintColor, focused }) => (
                                               <Icon
                                                   name='list'
                                                   type='font-awesome'
                                                   size={24}
                                                   color={tintColor}
                                               />
                                           ),
                                           headerStyle:{
                                               display: "none"
                                           }
                                       }
                                   }
                    />

                    <Drawer.Screen name="Contact" component={contactNavigator}
                                   options={
                                       {
                                           title: "Contact Us",
                                           drawerLabel: "Contact Us",
                                           drawerIcon: ({ tintColor, focused }) => (
                                               <Icon
                                                   name='address-card'
                                                   type='font-awesome'
                                                   size={24}
                                                   color={tintColor}
                                               />
                                           ),
                                           headerStyle:{
                                               display: "none"
                                           }
                                       }
                                   }
                    />

                    <Drawer.Screen name="Reservation" component={reservationNavigator}
                                   options={
                                       {
                                           title: "Reserve Table",
                                           drawerLabel: "Reserve Table",
                                           drawerIcon: ({ tintColor, focused }) => (
                                               <Icon
                                                   name='cutlery'
                                                   type='font-awesome'
                                                   size={24}
                                                   color={tintColor}
                                               />
                                           ),
                                           headerStyle:{
                                               display: "none"
                                           }
                                       }
                                   }
                    />

                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
