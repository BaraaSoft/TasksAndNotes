import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/header_post.css';
import Modal from './modal';
import { openModalDetails } from '../actions/index'
import AddPost from './addPost';



class HeaderPost extends Component {

    onContactUsClicked(e) {
        this.props.openModalDetails()
    }
    componentDidMount() {

    }

    render() {
        return (
            <header>
                <nav className="teal">
                    <div className="container teal nav-wrapper">
                        <a href="#" className="brand-logo">Tasks App</a>
                        <AddPost />
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html"></a></li>
                            <li><a href="badges.html"></a></li>
                            <li><a onClick={this.onContactUsClicked.bind(this)}>Info</a></li>
                        </ul>
                    </div>
                </nav>
                <Modal />
            </header>
        );
    }
}

export default connect(null, { openModalDetails })(HeaderPost);