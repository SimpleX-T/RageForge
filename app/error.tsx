"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import errorIllustration from "@/public/images/error-illustration.png";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
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
            src={errorIllustration}
            alt="Error Illustration"
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
            Something went wrong!
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            We apologize for the inconvenience. Please try refreshing the page.
          </p>
        </motion.div>

        <motion.div>
          <details className="text-sm">
            <summary className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
              If you are the developer, check out the error here
            </summary>
            <code className="mt-2 block p-4 bg-muted rounded-lg text-red-500">
              {"Error: " + error.message}
            </code>
          </details>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Button onClick={reset} asChild size="lg">
            <div className="flex items-center gap-2">
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </div>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
