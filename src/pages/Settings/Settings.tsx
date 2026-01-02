import ComponentCard from "../../components/common/ComponentCard";

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">
        Settings
      </h1>

      <p className="text-gray-500 dark:text-gray-400">
        Manage your school configuration and preferences.
      </p>

      <div className="space-y-4">
        {/* School Info Card */}
        <ComponentCard title="School Info">
          <p className="text-gray-500 dark:text-gray-400">
            E-school, logo, address, and other basic info here.
          </p>
        </ComponentCard>

        {/* Roles & Permissions Card */}
        <ComponentCard title="Roles & Permissions">
          <p className="text-gray-500 dark:text-gray-400">
            Manage user roles and permissions for staff and students.
          </p>
        </ComponentCard>

        {/* Academic Settings Card */}
        <ComponentCard title="Academic Settings">
          <p className="text-gray-500 dark:text-gray-400">
            Configure grades, subjects, and academic year settings.
          </p>
        </ComponentCard>
      </div>
    </div>
  );
}
