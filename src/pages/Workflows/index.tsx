import { useEffect, useState } from "react";
import Dropdown from "../../components/shared/Dropdown";
import PageLayout from "../../components/layout/PageLayout";
import SearchInput from "../../components/shared/SearchInput";
import Table from "../../components/shared/table/Table";
import useAirOps from "../../hooks/useAirOps";
import { WORKFLOW_COLUMNS } from "./columns";
import { Workflow } from "../../types/workflow";

const EXECUTION_ID = import.meta.env.VITE_EXECUTION_ID;

const WorkflowActions = () => (
  <div className="flex gap-2 items-center">
    <Dropdown options={[]} placeholder="Sort" />
    <SearchInput placeholder="Search Workflows" className="w-[200px]" />
  </div>
)

const WorkflowsPage = () => {
  const [workflowData, setWorkflowData] = useState<Workflow[]>([]);
  const { getWorkflowResults } = useAirOps();

  useEffect(() => {
    getWorkflowResults(EXECUTION_ID)
      .then((value) => {
        const output = value.output as Record<string, any>;
        setWorkflowData(output.data);
      })
      .catch((reason) => {
        console.error(`The fetch of Workflow Results failed. Error: ${reason}`)
      })
  }, []);

  return (
    <PageLayout
      title="Workflows"
      actions={<WorkflowActions />}
    >
      <Table
        columns={WORKFLOW_COLUMNS}
        data={workflowData}
      />
    </PageLayout>
  )
}

export default WorkflowsPage;