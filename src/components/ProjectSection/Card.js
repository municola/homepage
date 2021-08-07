import React, {Component} from 'react';
import {CardItem} from './ProjectElements'

class Card extends Component {
    render() {
        return (
            <CardItem>
                <h3>{this.props.data.title}</h3>
            </CardItem>
        );
    }
}

export default Card;