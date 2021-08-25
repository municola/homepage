import React, {Component} from 'react';
import {CardItem, CardImg, CardTitle, CardImageSegment, CardTitleSegment}  from './ProjectElements'


class Card extends Component {
    render() {
        return (
            <CardItem to={this.props.data.path}>
                <CardImageSegment>
                    <CardImg style={this.props.data.style}src={this.props.picture} />
                </CardImageSegment>
                <CardTitleSegment>
                    <CardTitle>{this.props.data.title}</CardTitle>
                </CardTitleSegment>
            </CardItem>
        );
    }
}

export default Card;