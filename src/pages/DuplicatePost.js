import React from "react";
import { connect } from "react-redux";

const DuplicatePost = (props) => {
  return (
    <div>
      <h1>DuplicatePost {JSON.stringify(props.postArray)} </h1>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   posts: state.posts.posts,
// });

const mapStateToProps = (state) => ({
  postArray: state.postState.posts, //.posts.postState.posts, //.postState.posts.posts,
});

export default connect(mapStateToProps)(DuplicatePost);
