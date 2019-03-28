import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children, style }) => {
    const { containerStyle } = styles;

    return (
        <View style={[containerStyle, style]}>
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 0.2,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        bordercolor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
