import { ActionsCell, LightTextCell, TagsCell } from "../../components/shared/table/Cells";
import { Column } from "../../components/shared/table/Table";
import TimeAgo from "react-timeago";

export const WORKFLOW_COLUMNS: Column[] = [
  {
    title: "Type",
    key: "type",
    renderCell: (row, key) => <LightTextCell value={row?.[key] || ""} />
  },
  { title: "Name", key: "name" },
  {
    title: "Tags",
    key: "tags",
    renderCell: (row, key) => <TagsCell tags={row?.[key]} />
  },
  {
    title: "Last Updated",
    key: "lastUpdated",
    renderCell: (row, key) => <LightTextCell value={<TimeAgo date={new Date(row?.[key] * 1000)} />} />
  },
  {
    title: "Actions",
    key: "actions",
    renderCell: (_row, key) => <ActionsCell key={key} />
  },
];