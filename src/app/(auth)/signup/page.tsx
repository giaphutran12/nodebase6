import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUnauth } from "@/lib/auth-ultils";
const Page = async () => {
  await requireUnauth(); //this is just for ux, the data access layer is the only security layer that counts, which is trpc
  return <RegisterForm />;
};
export default Page;
//localhost:3000/signup
