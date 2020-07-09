/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ResultProgressBar = ({ progress1 = '25%' }) => (
    <React.Fragment>
        <View style={{ position: 'relative' }}>
            <View style={[styles.progrss, { width: progress1 }]} />
        </View>
        <View style={styles.inCompleteProgress} />
    </React.Fragment>
);

export default ResultProgressBar;

const styles = StyleSheet.create({
    progrss: {
        height: 15,
        backgroundColor: 'black',
    },
    inCompleteProgress: {
        borderBottomWidth: 10,
        borderBottomColor: '#0000000F',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        flex: 1,
    },
});
