import { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import DeleteConfirm from "../../components/common/DeleteConfirm";

import ClassesTable from "../../components/classes/ClassesTable";
import ClassModal from "../../components/classes/ClassModal";

export default function ClassesList() {
  const [openModal, setOpenModal] = useState(false);
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [selectedClass, setSelectedClass] = useState<any>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [classToDelete, setClassToDelete] = useState<any>(null);

  return (
    <>
      <PageMeta title="Classes | School Dashboard" description="Manage classes" />
      <PageBreadcrumb pageTitle="Classes" />

      <ComponentCard title="Classes List">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => {
              setMode("add");
              setSelectedClass(null);
              setOpenModal(true);
            }}
            className="btn-primary"
          >
            Add Class
          </button>
        </div>

        <ClassesTable
          onView={(cls) => {
            setMode("view");
            setSelectedClass(cls);
            setOpenModal(true);
          }}
          onEdit={(cls) => {
            setMode("edit");
            setSelectedClass(cls);
            setOpenModal(true);
          }}
          onDelete={(cls) => {
            setClassToDelete(cls);
            setDeleteOpen(true);
          }}
        />
      </ComponentCard>

      <ClassModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        mode={mode}
        classData={selectedClass}
      />

      <DeleteConfirm
        open={deleteOpen}
        title="Delete Class"
        message={`Are you sure you want to delete ${classToDelete?.name}?`}
        onCancel={() => setDeleteOpen(false)}
        onConfirm={() => {
          console.log("Deleted:", classToDelete);
          setDeleteOpen(false);
        }}
      />
    </>
  );
}
