import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListPosts extends Component {

    listTasks(tasksList) {
        return tasksList.map((task) => {
            return (
                <div class="col s12 m7">
                    <div class="card horizontal">
                        <div class="card-stacked">
                            <div class="card-content">
                                <span class="card-title">{task.title}</span>
                                <hr style={{ border: '1px solid rgba(230, 227, 227, 0.39)', 'margin-bottom': '16px', height: '0px' }} />
                                <p>{task.content}</p>
                            </div>
                            <div class="card-action">
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