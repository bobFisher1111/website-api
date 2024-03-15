CREATE TABLE Books (
	"bookId" int NOT NULL PRIMARY KEY,
	"bookTitle" varchar(255) NOT NULL,
	"bookSubtitle" varchar(255) NOT NULL,
	"buy" varchar(255) NOT NULL,
	"genre" varchar(255) NOT NULL,
	"publishedDate" date NOT NULL,
	"bookCoverLarge" varchar(255) NOT NULL,
	"bookCoverSmall" varchar(255) NOT NULL,
	"authorId" int NOT NULL,
  "isHidden" boolean NOT NULL,
	FOREIGN KEY("authorId") REFERENCES Authors("authorId")
);