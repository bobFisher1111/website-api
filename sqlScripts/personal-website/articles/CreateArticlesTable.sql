CREATE TABLE Articles (
	"articleId" int NOT NULL PRIMARY KEY,
	"authorId" int NOT NULL,
	"seriesId"int NOT NULL,
  "sections" varchar(255) NOT NULL,
  "sectionLink" varchar(255) NOT NULL,
  "sectionType" varchar(255) NOT NULL,
	"articleTitle" varchar(255) NOT NULL,
  "articleSubTitle" varchar(255) NOT NULL,
  "isHidden" boolean NOT NULL,
  "publishedDate" date NOT NULL,
  "numberOfFavorites" INT,
  "series" boolean NOT NULL,
  "seriesChapter" INT NOT NULL,
  "seriesType" varchar(255) NOT NULL,
  "useVideoInsteadOfImage" boolean NOT NULL,
  "coverImageOrVideo" text NOT NULL,
  "article" text NOT NULL,
	FOREIGN KEY("authorId") REFERENCES Authors("authorId"),
	FOREIGN KEY("seriesId") REFERENCES Series("seriesId")
);