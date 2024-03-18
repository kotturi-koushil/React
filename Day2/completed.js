import React, { Component } from 'react'

class Completed extends Component {
    render() {
        let tasks = this.props.items;
        return (
            tasks.map((item, index) => {
                if (item.status === 1) {
                    return <div>
                        <div className='mt-3'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 key={index}><span className='pl-3'>{item.title}</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            })
        )
    }
}

export default Completed;
