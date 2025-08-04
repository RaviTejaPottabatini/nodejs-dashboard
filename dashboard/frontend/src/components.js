import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";

/** Sidebar */
export function Sidebar() {
  return (
    <div className="w-56 bg-gray-900 p-4">
      <h1 className="text-xl font-bold mb-6">Alfred</h1>
      <ul>
        <li className="mb-4 cursor-pointer hover:text-gray-300">Dashboard</li>
        <li className="mb-4 cursor-pointer hover:text-gray-300">Projects</li>
        <li className="mb-4 cursor-pointer hover:text-gray-300">Risks</li>
      </ul>
    </div>
  );
}

/** Navbar */
export function Navbar() {
  return (
    <div className="bg-gray-800 p-4 flex justify-between">
      <span className="text-lg font-semibold">Command Center</span>
      <button className="bg-gray-700 px-3 py-1 rounded">Refresh</button>
    </div>
  );
}

/** Project Site Map with Progress + Capacity */
export function ProjectSiteMap() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects").then(res => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Project Site Map</h2>
      <div style={{ height: "250px" }}>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{ lat: 28.6, lng: 77.2 }}
            zoom={5}
          >
            {projects.map((site) => (
              <Marker
                key={site.id}
                position={{ lat: site.lat, lng: site.lng }}
                title={`${site.name} - ${site.weather}`}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="mt-4">
        {projects.map((site) => (
          <div key={site.id} className="mb-3">
            <div className="flex justify-between">
              <span>{site.name}</span>
              <span>{site.progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${site.progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Capacity: {site.capacity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Communication Hub */
export function CommunicationHub() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/updates").then(res => {
      setUpdates(res.data);
    });
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Communication Hub</h2>
      {updates.map((u, idx) => (
        <div key={idx} className="mb-2">
          <p><strong>Alfred Insight:</strong> {u.alfred_insight}</p>
          <p><strong>EPC Contractor:</strong> {u.contractor_status}</p>
        </div>
      ))}
      <div className="flex gap-2 mt-3">
        <button className="bg-red-500 px-3 py-1 rounded">Flag Risk</button>
        <button className="bg-yellow-500 px-3 py-1 rounded">Clarify</button>
        <button className="bg-green-500 px-3 py-1 rounded">Update</button>
      </div>
    </div>
  );
}

/** Action Center */
export function ActionCenter() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/actions").then(res => {
      setActions(res.data);
    });
  }, []);

  const getColorByDueDate = (due) => {
    const today = new Date();
    const dueDate = new Date(due);
    const diffDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
    if (diffDays <= 3) return "bg-red-500";
    if (diffDays <= 7) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Action Center</h2>
      <ul>
        {actions.map((a) => (
          <li key={a.id} className="mb-2 p-2 bg-gray-700 rounded flex justify-between">
            <div>
              <p>{a.task}</p>
              <span className={`text-xs px-2 py-1 rounded ${getColorByDueDate(a.due)}`}>
                {a.priority}
              </span>
            </div>
            <p className="text-xs">{a.due}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
