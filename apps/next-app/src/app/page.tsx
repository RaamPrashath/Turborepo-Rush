"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@rush-learning/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Shared UI in Next.js</CardTitle>
          <CardDescription>
            These components come from @rush-learning/ui.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Input type="email" placeholder="you@example.com" aria-label="Email" />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React JS</SelectItem>
              <SelectItem value="next">Next.js</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Continue</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
