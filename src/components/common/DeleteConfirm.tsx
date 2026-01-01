interface Props {
  open: boolean;
  title?: string;
  message?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirm({
  open,
  title = "Delete Confirmation",
  message = "Are you sure you want to delete this item?",
  onCancel,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-gray-900">
        <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>

        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          {message}
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="btn-outline"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
