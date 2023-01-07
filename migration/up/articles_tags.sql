CREATE TABLE articles_tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER NOT NULL,
  tag_id INTEGER NOT NULL,
  FOREIGN KEY(article_id) REFERENCES articles(id),
  FOREIGN KEY(tag_id) REFERENCES tags(id)
);
