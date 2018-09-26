import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  componentDidMount() {
    this.shouldNavigateAway();
  }

  // Our component just received new props (hence the update)
  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      // This acts as a forced redirect
      this.props.history.push('/');
    }
  }

  handleChange = event => {
    this.setState({ comment: event.target.value });
    // The test's mock event: { target: { value: 'new comment' }}
    // setState() causes an asychronous rerendering (gets queued up)
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <h4>Add a Comment</h4>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className='fetch-comments' onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox);
