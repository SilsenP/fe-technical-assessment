import Sidenav from "./components/navigation/Sidenav";
import { HiDatabase } from "react-icons/hi";
import { CgLoadbarSound } from "react-icons/cg";
import { BsFillGearFill } from "react-icons/bs";
import WorkflowsPage from "./pages/Workflows";

function App() {
  return (
    <div className="w-full h-dvh flex overflow-hidden">
      <Sidenav>
        <Sidenav.Profile name="AirOps" />
        <Sidenav.CreateButton />
        <Sidenav.ActionsContainer>
          <Sidenav.Action icon={<HiDatabase className="w-3 h-3" />} path="/data-name" label="Data Name" />
          <Sidenav.Action icon={<CgLoadbarSound className="w-3 h-3" viewBox="3 3 16 16" />} path="/monitoring" label="Monitoring" />
          <Sidenav.Action icon={<BsFillGearFill className="w-3 h-3" />} path="/settings" label="Settings" />
        </Sidenav.ActionsContainer>
      </Sidenav>
      <WorkflowsPage />
    </div>
  )
}

export default App
