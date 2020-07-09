/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';
import { Question } from '../components/Question';

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('./Expertizo-logo.png')}
                    style={styles.image}
                />
                <Button
                    title="Go to Quiz"
                    onClick={this._onButtonClick}
                />
                {this.state.showComponent ?
                    <Question /> :
                    null
                }
            </View >
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: undefined,
        resizeMode: 'contain',
    },
});
export default Logo;
