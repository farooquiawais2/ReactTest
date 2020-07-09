/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress = '25%' }) => (
    <React.Fragment>
        <View style={{ position: 'relative' }}>
            <View style={[styles.progrss, { width: progress }]} />
        </View>
        <View style={styles.inCompleteProgress} />
    </React.Fragment>
);

export default ProgressBar;

const styles = StyleSheet.create({
    progrss: {
        height: 10,
        backgroundColor: 'gray',
    },
    inCompleteProgress: {
        borderBottomWidth: 10,
        borderBottomColor: '#0000000F',
        position: 'absolute',
        width: '100%',
    },
});
