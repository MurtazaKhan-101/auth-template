import { AuthLayout } from "../../components/layout/AuthLayout";
import VerifyResetOtp from "../../components/authentication/verifyResetOtp";

export default function VerifyResetOtpPage() {
  return (
    <AuthLayout
      title="Verify reset code"
      subtitle="Enter the code we sent to your email"
    >
      <VerifyResetOtp />
    </AuthLayout>
  );
}
