import React, { Component } from 'react';
import {
    Text,
    View,
    UIManager,
    LayoutAnimation,
    TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
// We use * because there are many exports inside '../actions/index'

// since our actions are all functions, they will automaticaly
// be dispatched and we don't need to return dispatch
import * as actions from '../actions';

class LibraryListItem extends Component {

    componentWillUpdate() {
        /* 
            The methods below will automatically add animation to any 
            changes on the rendering.
        */

        // Will animate only on android platforms
        UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);

        // Will animate only on iOS platforms
        LayoutAnimation.spring();
    };

    render() {
        const { library, expanded } = this.props;
        const { titleStyle, textStyle } = styles;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(library.id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {library.title}
                        </Text>
                    </CardSection>
                    {
                        expanded &&
                        <CardSection>
                            <Text style={textStyle}>{library.description}</Text>
                        </CardSection>
                    }
                </View>
            </TouchableWithoutFeedback >
        );
    };
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    textStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }
};

// 'ownProps' is exactly equal to the component props (this.props)
const mapStateToProps = (state, ownProps) => {
    const expanded =
        state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(LibraryListItem);