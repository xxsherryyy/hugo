CREATE DATABASE insurance;

CREATE TABLE user(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  dateOfBirth DATE,
  address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zip NUMBER(255),

);

CREATE TABLE vehicle(
  userId NUMBER(255),
  vehicle VARCHAR(255),
  vin VARCHAR(255),
  year NUMBER
  make VARCHAR,
  model VARCHAR,
);
