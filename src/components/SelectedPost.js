import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    selectedPost: state.selectedPost,
  };
}

const SelectedPost = (props) => {
  if (!props.selectedPost) {
    return <div>No post selected</div>;
  }
  return (
    <div>
      <h2>Book ID : {props.selectedPost.userId}</h2>
      <h2>Title : {props.selectedPost.title}</h2>
      <p>Description : {props.selectedPost.body}</p>
    </div>
  );
};

export default connect(mapStateToProps)(SelectedPost);
