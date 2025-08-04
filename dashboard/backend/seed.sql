INSERT INTO projects (name, lat, lng, capacity, progress, weather)
VALUES
('Site Alpha', 28.6139, 77.2090, '150 MW', 40, '23°C, Clear'),
('Devra 50 MW', 27.1767, 78.0081, '50 MW', 42, '25°C, Sunny');

INSERT INTO updates (alfred_insight, contractor_status, project_id)
VALUES
('Minor delays detected in Site Alpha.', 'Awaiting shipment', 1);

INSERT INTO actions (task, priority, due, project_id)
VALUES
('RFI from EPC Contractor', 'High', '2025-08-10', 1),
('Critical Risk Register', 'Medium', '2025-08-08', 2);
