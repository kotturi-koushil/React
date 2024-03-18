import React, { Component } from 'react'
import Form from './form'
import ActiveItems from './activeitem';
import Completed from './completed';

class App extends Component {
    state = {
        tasks: []
    }
    handleChecks(id) {
        let itemIndex;
        let allTasks = this.state.tasks;
        allTasks.forEach(function (eachTask, index) {
            if (eachTask.id === id) {
                itemIndex = index;
            }
        })
        allTasks[itemIndex].status = 1;
        this.setState({ tasks: allTasks })

    }
    handleSubmit(e) {
        //Add new task in pending\\
        let title = document.getElementById('task').value;
        document.getElementById('task').value = "";
        let allTasks = this.state.tasks;
        console.log(title);
        allTasks.push({ id: Date.now(), title: title, status: 0 });

        this.setState({ tasks: allTasks })

        e.preventDefault();
    }
    render() {
        return (
            <div>
                <nav className='navbar bg-primary'>
                    <h4 className='navbar-brand text-white'>Todo App</h4>
                </nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <Form handleSubmit={this.handleSubmit.bind(this)}></Form>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <h3>Active Tasks</h3>
                            <ActiveItems items={this.state.tasks} handleChecks={this.handleChecks.bind(this)} />
                        </div>
                        <div className='col-6'>
                            <h3> Complted Items</h3>
                            <Completed items={this.state.tasks} />

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default App;
