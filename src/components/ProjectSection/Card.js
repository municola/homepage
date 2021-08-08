import React, {Component} from 'react';
import {CardItem, CardImg, CardTitle} from './ProjectElements'
import picture from '/home/nicolas/git/nicolasmuntwyler/src/images/geko.jpeg'

class Card extends Component {
    render() {
        return (
            <CardItem to={this.props.data.path}>
                <CardImg src={picture} />
                <CardTitle>{this.props.data.title}</CardTitle>
            </CardItem>
        );
    }
}

export default Card;