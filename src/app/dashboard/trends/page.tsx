"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Timer, Utensils, Star } from "lucide-react";

export default function TrendsPage() {
  const trends = [
    {
      title: "Most Popular Cuisine",
      value: "Italian",
      change: "+12%",
      icon: <Utensils className="w-4 h-4" />,
      description: "Based on community engagement",
    },
    {
      title: "Average Cook Time",
      value: "45 mins",
      change: "-8%",
      icon: <Timer className="w-4 h-4" />,
      description: "Trending recipes this week",
    },
    {
      title: "Active Members",
      value: "2,847",
      change: "+24%",
      icon: <Users className="w-4 h-4" />,
      description: "Community growth this month",
    },
    {
      title: "Top Rated Recipe",
      value: "4.9",
      change: "+0.3",
      icon: <Star className="w-4 h-4" />,
      description: "Homemade Pizza",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold mb-6">Cooking Trends</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {trends.map((trend) => (
          <Card key={trend.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {trend.title}
              </CardTitle>
              {trend.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{trend.value}</div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-500">{trend.change}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {trend.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Popular Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { topic: "Meal Prep", percentage: 85 },
              { topic: "Quick Dinners", percentage: 75 },
              { topic: "Vegetarian", percentage: 65 },
              { topic: "Baking", percentage: 60 },
            ].map((item) => (
              <div key={item.topic} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{item.topic}</span>
                  <span className="text-muted-foreground">
                    {item.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
