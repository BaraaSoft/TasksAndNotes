import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modal extends Component {


    componentDidMount() {
        if (!window.M) {
            return
        }
        window.M.AutoInit();
        window.M.Modal.init(this.refs.modal);
        this.instance = window.M.Modal.getInstance(this.refs.modal);
    }
    shouldComponentUpdate() {
        return false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modal) {
            nextProps.modal.then(() => {
                this.instance.open()
            });
        }
    }
    render() {
        return (
            <div className="row">
                <div id="modal1" className="modal" ref="modal">
                    <div className="modal-content">
                        <h4>Loading...</h4>
                        <p>Please wait!</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ modal }) {
    return { modal }
}

export default connect(mapStateToProps)(Modal)