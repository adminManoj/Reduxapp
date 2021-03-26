import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

const PostsPage = ({ dispatch, loading_, posts_, hasErrors_ }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading_) return <p>Loading posts...</p>;
    if (hasErrors_) return <p>Unable to display posts.</p>;
    return posts_.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading_: state.postState.loading,
  posts_: state.postState.posts,
  hasErrors_: state.postState.hasErrors,
});

export default connect(mapStateToProps)(PostsPage);
