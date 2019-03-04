import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    const {
        label, value, onChangeText, autoCapitalize, autoCorrect,
        placeholder, secureTextEntry
    } = props;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                value={value}
                style={inputStyle}
                autoCorrect={autoCorrect}
                placeholder={placeholder}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
    // When we have sibling components, we can use the flex property
    // to allocate the available space proportionally between these
    // components
    // So, two thirds of the space available will be allocated for
    // the input and one third for the label 
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };