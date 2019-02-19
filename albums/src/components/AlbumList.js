// We need to keep the react imported because our JSX will be replaced
// to a bunch of React.createElement
import React, { Component } from 'react';
import { View } from 'react-native';

// Node modules imports
import axios from 'axios';

// Custom imports
import { constants } from '../constants/index';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] };

    async componentWillMount() {
        try {
            const result =
                await axios.get(`${constants.BASE_URI}${constants.ALBUMS_URI}`);
            this.setState({ albums: result.data });
        } catch (ex) {
            console.log(ex);
        }
    }

    render() {
        return (
            <View>
                {
                    this.state.albums.map((album, i) =>
                        <AlbumDetail key={i} data={album} />
                    )
                }
            </View>
        );
    }

}

// const styles = {

// };

export default AlbumList;
