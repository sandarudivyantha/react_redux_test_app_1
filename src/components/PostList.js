import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectPost } from "../actions/postAction";

function mapStateToProps(state) {
  return {
    AllPosts: state.allPosts,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectPost: selectPost }, dispatch);
}

const PostList = (props) => {
  const createListItems = () => {
    return props.AllPosts.map((post) => {
      return (
        <li key={post.id} onClick={() => props.selectPost(post)}>
          {post.title} {post.body}
        </li>
      );
    });
  };

  if (!props.AllPosts) {
    return <h2>Click the Button First!</h2>;
  }

  return (
    <div>
      <ul>{createListItems()}</ul>
    </div>
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(PostList);
