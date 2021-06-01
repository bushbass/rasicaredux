export const SinglePost = ({ singlePost }) => (
  <article>
    <h1>{singlePost.title}</h1>
    <p>{singlePost.body}</p>
    <p>article id: {singlePost.id}</p>
  </article>
);
