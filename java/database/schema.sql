BEGIN TRANSACTION;

DROP TABLE IF EXISTS music;

DROP SEQUENCE IF EXISTS seq_music_id;

CREATE SEQUENCE seq_music_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;

CREATE TABLE music (
	music_id int DEFAULT nextval('seq_music_id'::regclass) NOT NULL,
	artist varchar(50),
	song varchar(100) NOT NULL,
	album varchar(100),
	link varchar(200),
	CONSTRAINT PK_music PRIMARY KEY (music_id)
);

INSERT INTO music (artist, song, album, link) VALUES ('Lane 8','Road','Brightest Lights', 'https://open.spotify.com/track/6kckNpuM5oXZrObLExRg6d?si=413ba4a967544c38');

SELECT * FROM music;

--ROLLBACK TRANSACTION;
COMMIT TRANSACTION;
