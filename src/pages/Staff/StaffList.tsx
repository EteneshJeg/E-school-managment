import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import StaffTable from "../../components/staff/StaffTable";
import StaffModal from "./StaffModal";
import DeleteConfirm from "../../components/common/DeleteConfirm";

export default function StaffList() {
  const [openModal, setOpenModal] = useState(false);
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [selectedStaff, setSelectedStaff] = useState<any>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
const [staffToDelete, setStaffToDelete] = useState<any>(null);

  return (
    <>
      <PageMeta title="Staff | School Dashboard" description="" />
      <PageBreadcrumb pageTitle="Staff" />

      <ComponentCard title="Staff Members">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => {
              setMode("add");
              setSelectedStaff(null);
              setOpenModal(true);
            }}
            className="btn-primary"
          >
            Add Staff
          </button>
        </div>

        <StaffTable
          onView={(staff) => {
            setMode("view");
            setSelectedStaff(staff);
            setOpenModal(true);
          }}
          onEdit={(staff) => {
            setMode("edit");
            setSelectedStaff(staff);
            setOpenModal(true);
          }}
            onDelete={(staff) => {
            setStaffToDelete(staff);
            setDeleteOpen(true);
          }}
        />
      </ComponentCard>

      <StaffModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        mode={mode}
        staff={selectedStaff}
      />
      <DeleteConfirm
          open={deleteOpen}
          title="Delete Staff"
          message={`Are you sure you want to delete ${staffToDelete?.name}?`}
          onCancel={() => setDeleteOpen(false)}
          onConfirm={() => {
            console.log("Deleted:", staffToDelete);
            setDeleteOpen(false);
          }}
        />

    </>
  );
}
