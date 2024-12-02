import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    AllPosts: state.allPosts, 
  };
}

const PostList = (props) => {
  const createListItems = () => {
    return props.AllPosts.map((post) => {
      return (
        <li key={post.id}>
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

export default connect(mapStateToProps)(PostList);
