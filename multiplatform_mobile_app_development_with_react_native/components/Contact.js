import React, { Component } from 'react';

import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: ["121, Clear Water Bay Road", "Clear Water Bay, Kowloon", "HONG KONG", "Tel: +852 1234 5678", "121," +
            "Clear Water Bay Road", "Fax: +852 8765 4321", "Email:confusion@food.net"]
        };
    }

    render() {
        return(
            <Card title={"Contact Information"}>
                <Text style={{margin: 10, display: "flex"}}>
                    {this.state.address.map((line, i) => {
                        return(
                            <View key={i}>
                                <Text>{line}</Text>
                            </View>

                        )
                    })}
                </Text>
            </Card>
        );
    }
}

export default Contact;
