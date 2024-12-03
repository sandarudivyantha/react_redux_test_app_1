import React from "react";
import { connect } from "react-redux";
import './SelectedPost.css'; // Import the CSS file for styling

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
    <div className="selected-post">
      <h2>Book ID: {props.selectedPost.id}</h2>
      <h3>Title: {props.selectedPost.title}</h3>
      <img
        src={props.selectedPost.imageUrl}
        alt={props.selectedPost.title}
        className="selected-post-image"
      />
      <p>{props.selectedPost.body}</p>
    </div>
  );
};

export default connect(mapStateToProps)(SelectedPost);
