
import React, { Component } from 'react';
import { connect } from 'react-redux';


class CreatePost extends Component {
    render() {
        return (
            <div>
                Create Post
          </div>
        );
    }
}

export default connect()(CreatePost)