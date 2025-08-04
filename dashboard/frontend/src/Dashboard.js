import { Sidebar, Navbar, ProjectSiteMap, CommunicationHub, ActionCenter } from "./components";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="grid grid-cols-3 gap-4 p-4 overflow-auto">
          <ProjectSiteMap />
          <CommunicationHub />
          <ActionCenter />
        </div>
      </div>
    </div>
  );
}
