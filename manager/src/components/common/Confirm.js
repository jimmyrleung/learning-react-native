import React from 'react';
import { Text, View, Modal } from 'react-native';

// Avoiding cyclic dependencies
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDeclined, visible }) => {
    const { cardSectionStyle, textStyle, containerStyle } = styles;

    return (
        <Modal
            transparent
            visible={visible}
            animationType='slide'
            onRequestClose={() => { }}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDeclined}>No</Button>
                </CardSection>
            </View>
        </Modal>
    )
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textalign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm };