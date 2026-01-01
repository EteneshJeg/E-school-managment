import Form from "../form/Form";

type Student = {
  id?: number;
  name: string;
  email: string;
  grade: string;
  status?: "Active" | "Inactive";
  viewOnly?: boolean;
};

interface StudentModalProps {
  open: boolean;
  student: Student | null;
  onClose: () => void;
}

export default function StudentModal({
  open,
  student,
  onClose,
}: StudentModalProps) {
  if (!open) return null;

  const isView = Boolean(student?.viewOnly);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 dark:bg-gray-900">
        <h2 className="mb-4 text-lg font-semibold">
          {student ? "Edit Student" : "Add Student"}
        </h2>

        <Form onSubmit={() => console.log("Save Student")}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              className="input"
              placeholder="Full Name"
              defaultValue={student?.name}
              disabled={isView}
            />
            <input
              className="input"
              placeholder="Email"
              defaultValue={student?.email}
              disabled={isView}
            />
            <input
              className="input"
              placeholder="Grade"
              defaultValue={student?.grade}
              disabled={isView}
            />
            <select
              className="input"
              defaultValue={student?.status ?? "Active"}
              disabled={isView}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button type="button" onClick={onClose} className="btn-outline">
              Cancel
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
