/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';

const Icon = props => {
    const { width, height, source, color, containerStyles = {}, imageStyles = {} } = props;
    return (
        <View style={{ width, height, ...containerStyles }}>
            <Image
                source={source}
                style={[{ width: '100%', resizeMode: 'contain', flex: 1 }, { tintColor: color, ...imageStyles }]}
            />
        </View>
    );
};

export default Icon;
