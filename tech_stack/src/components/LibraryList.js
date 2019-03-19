import React, { Component } from 'react';

// We use 'connect' to literally connect our Component to the
// Redux store in order to get access to some piece of state
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        // Our props must contain: the default dispatch function and
        // libraries
        console.log(this.props);
        return null;
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