import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectPost } from "../actions/postAction";
import './PostList.css'; 

function mapStateToProps(state) {
  return {
    AllPosts: state.allPosts,
    selectedPost: state.selectedPost,  
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectPost: selectPost }, dispatch);
}

const PostList = (props) => {
  const createCardItems = () => {
    return props.AllPosts.map((post) => {
      const isSelected = props.selectedPost && props.selectedPost.id === post.id;

      return (
        <div
          key={post.id}
          className={`card ${isSelected ? 'selected' : ''}`} 
          onClick={() => props.selectPost(post)}
        >
          <div className="card-content">
            <h4>Book ID: {post.id}</h4>
            <h3>{post.title}</h3>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="card-image"
            />
            <p>{post.body}</p>
          </div>
        </div>
      );
    });
  };

  if (!props.AllPosts) {
    return <h2>Click the Button First!</h2>;
  }

  return (
    <div className={`card-container ${props.selectedPost ? 'minimized' : ''}`}>
      {createCardItems()}
    </div>
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(PostList);
