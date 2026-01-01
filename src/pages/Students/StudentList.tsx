import ComponentCard from "../../components/common/ComponentCard";
import DeleteConfirm from "../../components/common/DeleteConfirm";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import StudentModal from "../../components/student/StudentModal";
import StudentTable from "../../components/student/StudentTable";
import { useState } from "react";

type Student = {
  id?: number;
  name: string;
  email: string;
  grade: string;
  status?: "Active" | "Inactive";
  viewOnly?: boolean;
};

export default function StudentList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);

  return (
    <>
      <PageMeta title="Students | E-School" description="Manage students" />
      <PageBreadcrumb pageTitle="Students" />

      <ComponentCard title="Students List">
        <div className="mb-4 flex justify-end">
          <button
            className="btn-primary"
            onClick={() => {
              setSelectedStudent(null);
              setModalOpen(true);
            }}
          >
            Add Student
          </button>
        </div>

        <StudentTable
          onView={(student) => {
            setSelectedStudent({ ...student, viewOnly: true });
            setModalOpen(true);
          }}
          onEdit={(student) => {
            setSelectedStudent({ ...student, viewOnly: false });
            setModalOpen(true);
          }}
          onDelete={(student) => {
            setStudentToDelete(student);
            setDeleteOpen(true);
          }}
        />
      </ComponentCard>

      {/* Add / Edit / View */}
      <StudentModal
        open={modalOpen}
        student={selectedStudent}
        onClose={() => setModalOpen(false)}
      />

      {/* Delete */}
      <DeleteConfirm
        open={deleteOpen}
        title="Delete Student"
        message={`Delete ${studentToDelete?.name}?`}
        onCancel={() => setDeleteOpen(false)}
        onConfirm={() => {
          console.log("Deleted:", studentToDelete);
          setDeleteOpen(false);
        }}
      />
    </>
  );
}
