DROP DATABASE gis_request;

CREATE DATABASE gis_request;
USE gis_request;

CREATE TABLE requests
(
    id int NOT NULL
    AUTO_INCREMENT,
    gis_analyst varchar
    (255),
	project_manager varchar
    (255) NOT NULL,
    project_priority varchar
    (10),
    date_submitted DATE,
    due_date DATE,
    project_name varchar
    (255) NOT NULL,
    project_number NUMERIC
    (10, 2) NOT NULL,
    latitude NUMERIC
    (10, 6) NOT NULL,
    longitude NUMERIC
    (10, 6) NOT NULL,
    notes_comments varchar
    (500),
    map_requested varchar
    (255) NOT NULL,
    active_archive BOOLEAN DEFAULT TRUE,
	PRIMARY KEY
    (id)
);
