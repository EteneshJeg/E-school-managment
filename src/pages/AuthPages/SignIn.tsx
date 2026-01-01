import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
          title="E-School Management System | Sign In"
          description="Sign in to the E-School Management System to manage students, teachers, classes, and academic records."
        />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
