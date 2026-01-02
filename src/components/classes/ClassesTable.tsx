import { Eye, Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

export interface ClassItem {
  id: number;
  name: string;
  section: string;
  teacher: string;
  status: "Active" | "Inactive";
}

const classesData: ClassItem[] = [
  {
    id: 1,
    name: "Grade 8",
    section: "A",
    teacher: "Abel Tesfaye",
    status: "Active",
  },
  {
    id: 2,
    name: "Grade 10",
    section: "B",
    teacher: "Sara Kebede",
    status: "Inactive",
  },
];

interface Props {
  onView: (cls: ClassItem) => void;
  onEdit: (cls: ClassItem) => void;
  onDelete: (cls: ClassItem) => void;
}

export default function ClassesTable({ onView, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Class</TableCell>
            <TableCell isHeader>Section</TableCell>
            <TableCell isHeader>Class Teacher</TableCell>
            <TableCell isHeader>Status</TableCell>
            <TableCell isHeader>Actions</TableCell>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center">
          {classesData.map((cls) => (
            <TableRow key={cls.id}>
              <TableCell>{cls.name}</TableCell>
              <TableCell>{cls.section}</TableCell>
              <TableCell>{cls.teacher}</TableCell>

              <TableCell>
                <Badge
                  size="sm"
                  color={cls.status === "Active" ? "success" : "error"}
                >
                  {cls.status}
                </Badge>
              </TableCell>

              <TableCell>
                <div className="flex justify-center gap-5">
                  <button
                    onClick={() => onView(cls)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => onEdit(cls)}
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(cls)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
