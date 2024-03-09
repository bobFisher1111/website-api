CREATE TABLE Series (
	seriesId int NOT NULL PRIMARY KEY,
	seriesTitle varchar(255) NOT NULL,
	seriesCoverImageOrVideo varchar(255) NOT NULL,
	seriesAuthors varchar(255) NOT NULL,
	useVideoInsteadOfImage boolean NOT NULL,
	seriesType varchar(255) NOT NULL,
	seriesTypeTitle varchar(255) NOT NULL,
	seriesStartDate date NOT NULL, 
	section varchar(255) NOT NULL,
  authorid int NOT NULL,
	FOREIGN KEY(authorid) REFERENCES Authors(authorid),
	sectionLink varchar(255) NOT NULL
);