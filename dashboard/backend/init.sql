CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  lat FLOAT,
  lng FLOAT,
  capacity VARCHAR(50),
  progress INT,
  weather VARCHAR(50)
);

CREATE TABLE updates (
  id SERIAL PRIMARY KEY,
  alfred_insight TEXT,
  contractor_status TEXT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  project_id INT REFERENCES projects(id) ON DELETE CASCADE
);

CREATE TABLE actions (
  id SERIAL PRIMARY KEY,
  task TEXT,
  priority VARCHAR(10),
  due DATE,
  project_id INT REFERENCES projects(id) ON DELETE CASCADE
);
