import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/header_post.css';
import Modal from './modal';
import { openModalDetails, getRandomTasks, setChangeAuth } from '../actions/index'
import AddPost from './addPost';
import { Link } from 'react-router-dom'

class HeaderPost extends Component {

    onContactUsClicked(e) {
        this.props.openModalDetails()
    }

    getRandomTasks(e) {
        e.preventDefault();
        this.props.getRandomTasks()
    }

    actionAuth(e) {
        e.preventDefault();
        this.props.setChangeAuth(!this.props.changeAuth)
    }

    rederSign() {

        return this.props.changeAuth ? (
            <li><Link onClick={this.actionAuth.bind(this)} className="btn-post" to='/'>Sign out</Link></li>
        ) : (
                <li><Link onClick={this.actionAuth.bind(this)} className="btn-post" to='/'>Sign in</Link></li>
            );
    }

    render() {
        return (
            <header>
                <nav className="teal">
                    <div className="container teal nav-wrapper">
                        <Link className="brand-logo" to="/"> Tasks App</Link>
                        <AddPost />

                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html"></a></li>
                            <li><a className='btn-random' onClick={this.getRandomTasks.bind(this)} href="#">Random</a></li>
                            <li><a onClick={this.onContactUsClicked.bind(this)}>Info</a></li>
                            <li><Link className="btn-post" to='/post'>Post</Link></li>
                            {this.rederSign.apply(this)}
                        </ul>
                    </div>
                </nav>
                <Modal />
            </header>
        );
    }
}

function mapStateToProps({ changeAuth }) {
    return { changeAuth };
}

export default connect(mapStateToProps, { openModalDetails, getRandomTasks, setChangeAuth })(HeaderPost);