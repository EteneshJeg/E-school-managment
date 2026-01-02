import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import Form from "../../components/form/Form";

export default function AddClass() {
  return (
    <>
      <PageMeta title="Add Class | School Dashboard" description="Add new class" />
      <PageBreadcrumb pageTitle="Add Class" />

      <ComponentCard title="Class Information">
        <Form onSubmit={() => {}} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <input className="input" placeholder="Class Name" />
          <input className="input" placeholder="Section" />
          <input className="input" placeholder="Class Teacher" />
          <select className="input">
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className="btn-primary col-span-2">Save Class</button>
        </Form>
      </ComponentCard>
    </>
  );
}
