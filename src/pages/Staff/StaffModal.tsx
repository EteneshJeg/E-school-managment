import Form from "../../components/form/Form";

interface Props {
  open: boolean;
  onClose: () => void;
  mode: "add" | "edit" | "view";
  staff?: any;
}

export default function StaffModal({ open, onClose, mode, staff }: Props) {
  if (!open) return null;

  const isView = mode === "view";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-xl p-6">
        <h2 className="mb-4 text-xl font-semibold">
          {mode === "add" && "Add Staff"}
          {mode === "edit" && "Edit Staff"}
          {mode === "view" && "View Staff"}
        </h2>

        <Form onSubmit={() => onClose()} className="space-y-4">
          <input
            disabled={isView}
            defaultValue={staff?.name}
            placeholder="Full Name"
            className="input"
          />
          <input
            disabled={isView}
            defaultValue={staff?.email}
            placeholder="Email"
            className="input"
          />
          <select
            disabled={isView}
            defaultValue={staff?.role}
            className="input"
          >
            <option>Teacher</option>
            <option>Admin</option>
            <option>Assembly Staff</option>
          </select>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="btn-outline"
            >
              Close
            </button>

            {!isView && (
              <button type="submit" className="btn-primary">
                Save
              </button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}
