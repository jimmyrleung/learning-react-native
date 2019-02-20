import React from 'react';
import { Text, View, Image } from 'react-native';

/* Custom imports */
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ data }) => {
    const {
        headerContentStyle,
        headerTextstyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    const { title, artist, thumbnail_image, image } = data;

    return (
        <Card>
            <CardSection>
                {/* 
                    The content below will be available in our 
                    Card component through props.children 
                */}
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextstyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextstyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        // Images need a height and a width defined, otherwise it won't be
        // showed up
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
