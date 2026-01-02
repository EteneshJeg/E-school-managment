import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import Form from "../../components/form/Form";

export default function AddStaff() {
  return (
    <>
      <PageMeta
        title="Add Staff | School Dashboard"
        description="Add new staff member"
      />

      <PageBreadcrumb pageTitle="Add Staff" />

      <ComponentCard title="Staff Information">
        <Form onSubmit={() => {}} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <input className="input" placeholder="Full Name" />
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Phone Number" />

          <select className="input">
            <option value="">Select Role</option>
            <option>Teacher</option>
            <option>Admin</option>
            <option>Assembly Staff</option>
          </select>

          <select className="input">
            <option value="">Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className="btn-primary col-span-2">
            Save Staff
          </button>
        </Form>
      </ComponentCard>
    </>
  );
}
