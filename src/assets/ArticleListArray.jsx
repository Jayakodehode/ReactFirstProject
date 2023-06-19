const articleListArray = [
  {
    key: "1",
    id: "1234",
    name: "Jaya",
    degree: "bachelor in computers",
  },
  {
    key: "2",
    id: "1235",
    name: "JC",
    degree: "Phd in cloud",
  },
  { key: "3", id: "1236", name: "Barsha", degree: "Masters in law" },
  {
    key: "4",
    id: "1237",
    name: "Antorweep",
    degree: "Assosiate professer",
  },
];
export function ArticleId() {
  return articleListArray.map((article) => {
    return (
      <ul key={article.key}>
        <li>{article.id}</li>
        <li>{article.name}</li>
        <li>{article.degree}</li>
      </ul>
    );
  });
}
