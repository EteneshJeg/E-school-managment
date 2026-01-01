import { EyeIcon, PencilIcon, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

type Student = {
  id: number;
  name: string;
  email: string;
  grade: string;
  status: "Active" | "Inactive";
};

interface StudentTableProps {
  onView: (student: Student) => void;
  onEdit: (student: Student) => void;
  onDelete: (student: Student) => void;
}

const students: Student[] = [
  {
    id: 1,
    name: "Abel Tesfaye",
    email: "abel@gmail.com",
    grade: "Grade 8",
    status: "Active",
  },
  {
    id: 2,
    name: "Sara Kebede",
    email: "sara@gmail.com",
    grade: "Grade 10",
    status: "Inactive",
  },
];

export default function StudentTable({
  onView,
  onEdit,
  onDelete,
}: StudentTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white dark:bg-white/[0.03]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Name</TableCell>
            <TableCell isHeader>Email</TableCell>
            <TableCell isHeader>Grade</TableCell>
            <TableCell isHeader>Status</TableCell>
            <TableCell isHeader>Actions</TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.grade}</TableCell>
              <TableCell>{student.status}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <button onClick={() => onView(student)}>
                    <EyeIcon size={18} />
                  </button>
                  <button onClick={() => onEdit(student)}>
                    <PencilIcon size={18} />
                  </button>
                  <button onClick={() => onDelete(student)}>
                    <Trash2 size={18} className="text-red-500" />
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
