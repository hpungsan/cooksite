// src/app/dashboard/page.tsx
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          Welcome to your Dashboard
        </h2>
        <p className="text-muted-foreground">
          Select a tab from the sidebar to get started.
        </p>
      </Card>
    </div>
  );
}
