import { SignupForm } from "@/components/auth/signup-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import authAvatar from "@/public/images/auth_avatar.png";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <section className="w-full md:py-32 py-12 flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md bg-muted/50 shadow-none border-primary/10">
        <CardHeader>
          <Image
            src={authAvatar}
            alt="auth avatar"
            placeholder="blur"
            className="mx-auto w-32 h-32"
          />
        </CardHeader>
        <CardContent>
          <Suspense
            fallback={<div className="text-center py-4">Loading form...</div>}
          >
            <SignupForm />
          </Suspense>
        </CardContent>
      </Card>
    </section>
  );
}
