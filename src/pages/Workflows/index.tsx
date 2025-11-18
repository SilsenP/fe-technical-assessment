import Dropdown from "../../components/Dropdown"
import PageLayout from "../../components/PageLayout"
import SearchInput from "../../components/SearchInput"
import Table from "../../components/Table"
import { WORKFLOW_COLUMNS } from "./columns"

const WorkflowActions = () => (
  <div className="flex gap-2 items-center">
    <Dropdown options={[]} placeholder="Sort" />
    <SearchInput placeholder="Search Workflows" className="w-[200px]" />
  </div>
)

const WorkflowsPage = () => {
  return (
    <PageLayout
      title="Workflows"
      actions={<WorkflowActions />}
    >
      <Table
        columns={WORKFLOW_COLUMNS}
        data={[
          {
            type: "test-type",
            name: "test-name",
            tags: [{ name: "test-tags", color: '#50d71e' }],
            lastUpdated: "test-lastUpdated",
            actions: "test-actions",
          },
          {
            type: "test-type",
            name: "test-name",
            tags: [{ name: "test-tags", color: '#39669E' }],
            lastUpdated: "test-lastUpdated",
            actions: "test-actions",
          },
          {
            type: "test-type",
            name: "test-name",
            tags: [{ name: "test-tags", color: '#92399E' }],
            lastUpdated: "test-lastUpdated",
            actions: "test-actions",
          },
          {
            type: "test-type",
            name: "test-name",
            tags: [{ name: "test-tags", color: '#F7A62D' }],
            lastUpdated: "test-lastUpdated",
            actions: "test-actions",
          },
        ]}
      />
    </PageLayout>
  )
}

export default WorkflowsPage;