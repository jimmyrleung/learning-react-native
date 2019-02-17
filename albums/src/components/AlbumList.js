// We need to keep the react imported because our JSX will be replaced
// to a bunch of React.createElement
import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import axios from 'axios';

class AlbumList extends Component {

    async componentWillMount() {
        // TODO: fetch the album collection
        // const result = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        // console.log(result.data);
    }

    render() {
        return (
            <View>
                <Text>AlbumList!!!!</Text>
            </View>
        );
    }

}

// const styles = {

// };

export default AlbumList;
