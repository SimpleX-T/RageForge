"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import notFoundIllustration from "@/public/images/404-illustration.png";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-8"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
          <Image
            src={notFoundIllustration}
            alt="404 Illustration"
            fill
            priority
            className="object-contain"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Oops! It seems you&apos;ve ventured into uncharted territory.
            Let&apos;s get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Button onClick={() => router.back()} asChild size="lg">
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </div>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
