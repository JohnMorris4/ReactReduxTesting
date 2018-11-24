import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from 'actions'
// import { FETCH_COMMENTS } from 'actions/types';


class CommentBox extends Component {
    state = { comment: '' };
    
    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment)
        this.setState({comment: ''});
    };

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
              <h4>Add a Comment</h4>
              <textarea onChange={this.handleChange} value={this.state.comment} />
              <div>
                <button>Submit Comment</button>
              </div>
            </form>
            <button onClick={this.props.fetchComments}>Fetch Comments from API</button>
          </div>
    }
}

export default connect(null, actions)(CommentBox);
