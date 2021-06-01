import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchSinglePost } from '../actions/singlePostActions';
import { SinglePost } from '../components/SinglePost';

const SinglePostPage = ({ dispatch, loading, singlePost, hasErrors }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  // Show loading, error, or success state
  const renderSinglePost = () => {
    if (loading) return <p>Loading post...</p>;
    if (hasErrors) return <p>Unable to display post.</p>;
    return <SinglePost singlePost={singlePost} />;
  };

  return <section>{renderSinglePost()}</section>;
};

const mapStateToProps = (state) => ({
  loading: state.singlePost.loading,
  singlePost: state.singlePost.singlePost,
  hasErrors: state.singlePost.hasErrors,
});

export default connect(mapStateToProps)(SinglePostPage);
