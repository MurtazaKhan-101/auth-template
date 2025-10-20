import { AuthLayout } from "../../components/layout/AuthLayout";
import Login from "../../components/authentication/login";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to continue to Hyper Thread"
    >
      <Login />
    </AuthLayout>
  );
}
