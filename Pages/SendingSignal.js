import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, ListItem, Left, Body } from 'native-base';

import { StackNavigator } from 'react-navigation';

export default class SendingSignal extends React.Component {

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Institution Name</Text>
                        </CardItem>

                        <ListItem icon onPress={() => { alert("Signal sent") }}>
                            <Left>
                                <Icon active name="ios-aperture" />
                            </Left>
                            <Body>
                                <Text>Institution 1</Text>
                            </Body>

                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>

                        <ListItem icon onPress={() => { alert("Signal sent") }}>
                            <Left>
                                <Icon active name="ios-contract" />
                            </Left>
                            <Body>
                                <Text>Institution 2</Text>
                            </Body>

                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>

                        <ListItem icon onPress={() => { alert("Signal sent") }}>
                            <Left>
                                <Icon active name="ios-disc" />
                            </Left>
                            <Body>
                                <Text>Institution 3</Text>
                            </Body>

                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>

                        <ListItem icon onPress={() => { alert("Signal sent") }}>
                            <Left>
                                <Icon active name="ios-flower" />
                            </Left>
                            <Body>
                                <Text>Institution 4</Text>
                            </Body>

                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>

                        <ListItem icon onPress={() => { alert("Signal sent") }}>
                            <Left>
                                <Icon active name="ios-funnel" />
                            </Left>
                            <Body>
                                <Text>Institution 5</Text>
                            </Body>

                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>

                        <ListItem icon onPress={() => { alert("Signal sent") }}>
                            <Left>
                                <Icon active name="ios-done-all" />
                            </Left>
                            <Body>
                                <Text>Send All</Text>
                            </Body>

                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>

                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});