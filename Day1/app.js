import React, { Component } from 'react';
import Card from './card';

class App extends Component {

    render() {
        let todos = [
            { title: 'Recharge Phone', status: 0 },
            { title: 'Do Shopping', status: 1 },
            { title: 'Wash Clothes', status: 0 },
            { title: 'Purchase fwe', status: 1 }
        ]
        return (
            <div>
                <Card todos={todos} />
            </div>
        )
    }
}

export default App;