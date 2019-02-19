import React from 'react';
import { Text } from 'react-native';

/* Custom imports */
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ data }) => {
    return (
        <Card>
            <CardSection>
                {/* This text will be available in our Card component through props.children */}
                <Text>{data.title}</Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;
