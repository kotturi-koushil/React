import React, { Component } from 'react';
import './style.css';

export class Card extends Component {
    state = {
    }

    render() {
        let todos = this.props.todos;
        return (
            <div>
                {
                    todos.map((eachtodo, index) => {
                        if (eachtodo.status === 0) {
                            return <h1 key={index} className='red-bg'>{eachtodo.title}</h1>
                        }
                        else {
                            return <h1 key={index} className='yellow-bg'>{eachtodo.title}</h1>
                        }

                    }
                    )
                }
            </div>
        )
    }
}

export default Card;