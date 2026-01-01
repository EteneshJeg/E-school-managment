import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Pencil, Trash2, Eye } from "lucide-react";
import Badge from "../ui/badge/Badge";

interface Staff {
  id: number;
  name: string;
  role: string;
  email: string;
  status: "Active" | "Inactive";
}

const staffData: Staff[] = [
  {
    id: 1,
    name: "Abel Tesfaye",
    role: "Teacher",
    email: "abel@school.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Sara Kebede",
    role: "Admin",
    email: "sara@school.com",
    status: "Inactive",
  },
];

interface Props {
  onEdit: (staff: Staff) => void;
  onDelete: (staff: Staff) => void;
  onView: (staff: Staff) => void;
}

export default function StaffTable({ onEdit, onDelete, onView }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-white/[0.05]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Name</TableCell>
            <TableCell isHeader>Role</TableCell>
            <TableCell isHeader>Email</TableCell>
            <TableCell isHeader>Status</TableCell>
            <TableCell isHeader>Actions</TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {staffData.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell>{staff.name}</TableCell>
              <TableCell>{staff.role}</TableCell>
              <TableCell>{staff.email}</TableCell>
              <TableCell>
                <Badge
                  size="sm"
                  color={staff.status === "Active" ? "success" : "error"}
                >
                  {staff.status}
                </Badge>
              </TableCell>

              <TableCell>
                <div className="flex gap-2">
                  <button
                    onClick={() => onView(staff)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => onEdit(staff)}
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(staff)}
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
