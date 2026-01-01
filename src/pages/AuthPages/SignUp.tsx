import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
    <PageMeta
      title="E-School Management System | Sign Up"
      description="Sign in to the E-School Management System to manage students, teachers, classes, and academic records."
    />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
