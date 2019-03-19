import React, { Component } from 'react';
import { Text } from 'react-native';

import { CardSection } from './common';

class LibraryListItem extends Component {
    render() {
        const { item } = this.props.library;

        const { titleStyle } = styles;

        return (
            <CardSection>
                <Text style={titleStyle}>{item.title}</Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default LibraryListItem;