import { AuthLayout } from "../../components/layout/AuthLayout";
import ForgetPassword from "../../components/authentication/forgetPassword";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset your password"
      subtitle="We'll send you a code to reset your password"
    >
      <ForgetPassword />
    </AuthLayout>
  );
}
