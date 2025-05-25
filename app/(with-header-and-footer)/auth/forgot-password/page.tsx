import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import authAvatar from "@/public/images/auth_avatar.png";

export default function ForgotPasswordPage() {
  return (
    <section className="w-full min-h-screen md:py-34 py-12 bg-[url('/images/auth_bg.svg')] bg-cover bg-center">
      <div className="flex justify-center items-center px-4">
        <Card className="w-full max-w-md bg-background shadow-none border-primary/10">
          <CardHeader>
            <Image
              src={authAvatar}
              alt="auth avatar"
              placeholder="blur"
              className="mx-auto w-32 h-32"
            />
          </CardHeader>
          <CardContent>
            <ForgotPasswordForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
