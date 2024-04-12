CREATE TABLE Series (
	"seriesId" int NOT NULL PRIMARY KEY,
	"seriesTitle" varchar(255) NOT NULL,
	"seriesCoverImageOrVideo" varchar(255) NOT NULL,
	"seriesAuthors" varchar(255) NOT NULL,
	"useVideoInsteadOfImage" boolean NOT NULL,
	"seriesType" varchar(255) NOT NULL,
	"seriesTypeTitle" varchar(255) NOT NULL,
	"seriesStartDate" date NOT NULL, 
	"section" varchar(255) NOT NULL,
  "authorId" int NOT NULL,
	"sectionLink" varchar(255) NOT NULL,
  "isHidden"boolean NOT NULL,
  FOREIGN KEY("authorId") REFERENCES Authors("authorId")
);