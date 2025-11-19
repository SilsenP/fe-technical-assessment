import { ReactNode } from "react"
import Button from "../../components/Button"
import { GoPencil } from "react-icons/go";
import { LuTrash } from "react-icons/lu";
import { Column } from "../../components/Table";
import { LiaPlusSolid } from "react-icons/lia";
import Chip from "../../components/Chip";
import { Tag } from "../../types/tag";
import TimeAgo from "react-timeago";

const WorkflowColumnLightText = ({ value }: { value: ReactNode }) => (
  <span className="text-sm text-neutral-500">{value}</span>
)

const WorkflowColumnActions = ({ key }: { key: string }) => (
  <div className="flex gap-2 items-center">
    <Button
      startIcon={<GoPencil className="w-3 h-3" />}
      className="w-6 h-6 rounded-md bg-neutral-200 hover:bg-neutral-400 hover:text-white"
      onClick={() => { alert(`Edit ${key}`) }}
    />
    <Button
      startIcon={<LuTrash className="w-3 h-3" />}
      className="w-6 h-6 rounded-md bg-neutral-200 hover:bg-neutral-400 hover:text-white"
      onClick={() => { alert(`Delete ${key}`) }}
    />
  </div>
)

interface WorkflowTagsProps {
  tags: Tag[]
}

const WorkflowTags = ({ tags }: WorkflowTagsProps) => {
  if (!tags.length) {
    return (
      <Button
        className="text-gray-500 border-gray-300 border rounded-full py-1 px-2 text-sm "
        startIcon={<LiaPlusSolid className="w-3 h-3 stroke-2" />}
      >
        Add Tag
      </Button>
    )
  }

  if (tags.length === 1) {
    return (
      <Chip>
        <span className={`w-2 h-2 rounded-sm`} style={{ background: tags[0].color }} />
        {tags[0].name}
      </Chip>
    )
  }

  return (
    <Chip>
      <span className={`w-2 h-2 rounded-sm`} style={{ background: tags[0].color }} />
      <span className={`w-2 h-2 rounded-sm`} style={{ background: tags[1].color }} />
      {tags.length} tags
    </Chip>
  )
}

export const WORKFLOW_COLUMNS: Column[] = [
  {
    title: "Type",
    key: "type",
    renderCell: (row, key) => <WorkflowColumnLightText value={row?.[key] || ""} />
  },
  { title: "Name", key: "name" },
  {
    title: "Tags",
    key: "tags",
    renderCell: (row, key) => <WorkflowTags tags={row?.[key]} />
  },
  {
    title: "Last Updated",
    key: "lastUpdated",
    renderCell: (row, key) => <WorkflowColumnLightText value={<TimeAgo date={new Date(row?.[key] * 1000)} />} />
  },
  {
    title: "Actions",
    key: "actions",
    renderCell: (_row, key) => <WorkflowColumnActions key={key} />
  },
];