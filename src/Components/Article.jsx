export function Article(props) {
  const { title, description, body, author } = props;
  console.log(props);
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>

      <Article1 body={props.body} author={author.username} />
    </>
  );
}

function Article1({ author, body }) {
  console.log(body, author);
  return (
    <>
      <h1>{author}</h1>
      <p>{body}</p>
    </>
  );
}
