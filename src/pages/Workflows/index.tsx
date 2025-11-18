import Dropdown from "../../components/Dropdown"
import PageLayout from "../../components/PageLayout"
import SearchInput from "../../components/SearchInput"

const WorkflowActions = () => (
  <div className="flex gap-2 items-center">
    <Dropdown options={[]} placeholder="Sort" />
    <SearchInput placeholder="Search Workflows" className="w-[200px]" />
  </div>
)

const WorkflowsPage = () => {
  return (
    <PageLayout title="Workflows" actions={<WorkflowActions />}>
      Test
    </PageLayout>
  )
}

export default WorkflowsPage;