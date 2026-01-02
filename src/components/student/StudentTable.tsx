import { Eye, Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Student {
  id: number;
  name: string;
  email: string;
  grade: string;
  status: "Active" | "Inactive";
}

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
  {
    id: 3,
    name: "mahder Kebede",
    email: "mahu@gmail.com",
    grade: "Grade 10",
    status: "Active",
  },
  {
    id: 4,
    name: "Bereket Kebede",
    email: "beri@gmail.com",
    grade: "Grade 10",
    status: "Active",
  },
  
];

export default function StudentTable({
  onView,
  onEdit,
  onDelete,
}: StudentTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-white/[0.05]">
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

        <TableBody className="text-center">
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.grade}</TableCell>

              <TableCell>
                <Badge
                  size="sm"
                  color={student.status === "Active" ? "success" : "error"}
                >
                  {student.status}
                </Badge>
              </TableCell>

              <TableCell>
                <div className="flex gap-5 justify-center">
                  <button
                    onClick={() => onView(student)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => onEdit(student)}
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(student)}
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
