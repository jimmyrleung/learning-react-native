import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ text }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{text}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        height: 60,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',

        // Shadow configuration for iOS:
        shadowColor: '#000', // A black shadow
        shadowOffset: {
            width: 0, // No shadow in the left/right
            height: 2
        },
        shadowOpacity: 0.3, // How heavy the shadow is

        // Shadow configuration for Android
        elevation: 2.5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
};

export { Header };
