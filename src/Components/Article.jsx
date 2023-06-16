export function Article({ title, description, author, createdAt }) {
  return (
    <>
      <h1>{author.username}</h1>
      <p>{createdAt}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <Article1
        username={author.username}
        bio={author.bio}
        image={author.image}
      />
      <Article1 {...author} />
    </>
  );
}

function Article1({ username, bio, image }) {
  return (
    <>
      <h1>{username}</h1>
      <p>{bio}</p>
      <img src={image} alt="" />
    </>
  );
}
