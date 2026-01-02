import Form from "../../components/form/Form";
import { ClassItem } from "./ClassesTable";

interface Props {
  open: boolean;
  onClose: () => void;
  mode: "add" | "edit" | "view";
  classData?: ClassItem | null;
}

export default function ClassModal({
  open,
  onClose,
  mode,
  classData,
}: Props) {
  if (!open) return null;

  const isView = mode === "view";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 dark:bg-gray-900">
        <h2 className="mb-6 text-xl font-semibold text-gray-800 dark:text-white">
          {mode === "add" && "Add Class"}
          {mode === "edit" && "Edit Class"}
          {mode === "view" && "View Class"}
        </h2>

        <Form
          onSubmit={() => onClose()}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <input
            className="input"
            placeholder="Class Name"
            defaultValue={classData?.name}
            disabled={isView}
          />

          <input
            className="input"
            placeholder="Section"
            defaultValue={classData?.section}
            disabled={isView}
          />

          <input
            className="input"
            placeholder="Class Teacher"
            defaultValue={classData?.teacher}
            disabled={isView}
          />

          <select
            className="input"
            defaultValue={classData?.status}
            disabled={isView}
          >
            <option value="">Select Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div className="col-span-2 flex justify-end gap-4">
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
