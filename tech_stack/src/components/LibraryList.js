import React, { Component } from 'react';

// data: list data source
// renderItem: function responsible for rendering each item
// keyExttractor: function responsible to extract the key property for each element
import { FlatList } from 'react-native';

// We use 'connect' to literally connect our Component to the
// Redux store in order to get access to some piece of state
import { connect } from 'react-redux';

import LibraryListItem from './LibraryListItem';

class LibraryList extends Component {

    renderItem(library) {
        return <LibraryListItem library={library} />;
    }

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => `${library.id}` /*must be a tring*/}
            />
        )
    }
}

// That function will map the redux state to some props
// of our component 
const mapStateToProps = state => {
    return {
        libraries: state.libraries
    };
};

export default connect(mapStateToProps)(LibraryList);