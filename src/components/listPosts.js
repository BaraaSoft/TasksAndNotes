import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListPosts extends Component {

    listTasks(tasksList) {
        return tasksList.map((task) => {
            return (
                <div key={task.title} className="card-list-item col s12 m7">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <span className="card-title">{task.title}</span>
                                <hr style={{ border: '1px solid rgba(230, 227, 227, 0.39)', 'marginBottom': '16px', height: '0px' }} />
                                <p>{task.content}</p>
                            </div>
                            <div className="card-action">
                                <a className="activator" href="#">Edit</a>
                            </div>
                        </div>
                    </div>
                </div>

            );
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.listTasks(this.props.tasksList)}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ tasksList }) {
    return { tasksList };
}

export default connect(mapStateToProps)(ListPosts);