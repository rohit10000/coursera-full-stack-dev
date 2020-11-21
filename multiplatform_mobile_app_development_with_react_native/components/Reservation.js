import React, {Component} from "react";
import {Button, Picker, ScrollView, Switch, Text, View, StyleSheet, Modal} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {Icon} from "react-native-elements";


class Reservation extends Component{

    constructor(props) {
        super(props);

        this.state = {
            guests: 1,
            smoking: false,
            date: '',
            show: false,
            showModal: false
        }
    }
    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    resetForm = () => {
        this.setState({
            guests: 1,
            smoking: false,
            date: '',
            show: false
        });
    }

    handleReservation = () => {
        console.log(JSON.stringify(this.state));
        this.toggleModal();
    }


    render() {
        return(
            <ScrollView>

                <Modal animationType={"slide"}
                       visible={this.state.showModal}
                       onDismiss={() => this.toggleModal()}
                       onRequestClose={() => this.toggleModal()}
                       transparent={false}>

                    <View style = {styles.modal}>
                        <Text style = {styles.modalTitle}>Your Reservation</Text>
                        <Text style = {styles.modalText}>Number of Guests: {this.state.guests}</Text>
                        <Text style = {styles.modalText}>Smoking?: {this.state.smoking ? 'Yes' : 'No'}</Text>
                        <Text style = {styles.modalText}>Date and Time: {this.state.date.toString()}</Text>

                        <Button
                            onPress = {() =>{this.toggleModal(); this.resetForm();}}
                            color="#512DA8"
                            title="Close"
                        />
                    </View>

                </Modal>

                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Number of Guests</Text>
                    <Picker selectedValue={this.state.guests}
                            style={styles.formItem}
                            onValueChange={(itemValue, itemIndex) =>{
                        this.setState({guests: itemValue})
                    }}>
                        <Picker.Item label={"1"} value={"1"}/>
                        <Picker.Item label={"2"} value={"2"}/>
                        <Picker.Item label={"3"} value={"3"}/>
                        <Picker.Item label={"4"} value={"4"}/>
                        <Picker.Item label={"5"} value={"5"}/>
                        <Picker.Item label={"6"} value={"6"}/>
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Smoking/Non-smoking?</Text>
                    <Switch value={this.state.smoking} style={styles.formItem}
                            onValueChange={(value) => this.setState({smoking: value})}
                            onTintColor={'#512DA8'}>
                    </Switch>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date and Time</Text>
                    {
                        this.state.show && (
                            <RNDateTimePicker value={this.state.date || new Date()}
                                              testID={"dateTimePicker"}
                                              mode="date"
                                              display={"default"}
                                              onChange={
                                                  (event, selectedDate) => {
                                                      const currentDate = selectedDate || new Date();
                                                      this.setState({date: currentDate});
                                                      this.setState({show: false});
                                                  }
                                              }

                            />
                        )
                    }
                    <Icon
                        name='calendar'
                        type='font-awesome'
                        size={24}
                        onPress={() => this.setState({show: true})}
                    />
                    <View style={styles.formDate}>
                        <Text>{this.state.date.toString()}</Text>
                    </View>
                </View>
                <View>
                    <Button title={"Reserve"} onPress={()=>this.handleReservation()}
                            color={"#512DA8"} accessibilityLabel={"Learn more about this purple button"}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel:{
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    formDate:{
        marginLeft: 10,
        height: 60,
        flex: 2,
        borderWidth: 2,
        borderStyle: "solid",
        padding: 5,
        borderColor: "#512DA8"
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#512DA8',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
})

export default Reservation;
