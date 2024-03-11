"use client"
import Dashboard from "@/components/dashboard";
import Button from "@/components/Button";
export default function Home() {
  return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <Button onClick={() => alert('Button clicked!')} variant="secondary">Click Me!</Button>
              <Dashboard />
          </div>
        </main>
    </>
  );
}
