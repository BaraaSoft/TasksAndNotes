import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addNewTask } from '../actions';

class AddPost extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const palceholder = !touched && error ? "Add new task" : ""
        return (
            <div className="input-field">
                <input {...field.input} id="search" type="search" placeholder={palceholder} />
                <label className="label-icon" htmlFor="search">
                    <i className="material-icons Medium">mode_edit</i>
                </label>
                <i className="material-icons">close</i>
            </div>
        );
    }

    onSubmit(value) {
        this.props.addNewTask(value);
        value.title = null;
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} className="form">
                <Field name="title" component={this.renderField} />
            </form>
        );
    }
}

function validate(value) {
    let error = {};
    if (!value.title) {
        error.title = "You have entered no task!"
    }

    return error;
}

export default reduxForm({
    validate,
    form: 'AddNewTask'
})(
    connect(null, { addNewTask })(AddPost)
)

