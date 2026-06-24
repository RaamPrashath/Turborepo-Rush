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

const features = [
  ["One install", "Rush keeps every workspace dependency consistent."],
  ["Fast builds", "Turbo only rebuilds packages affected by a change."],
  ["Shared UI", "The same components work across both applications."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3 font-semibold">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-sm text-primary-foreground">RL</span>
          Rush Learning
        </div>
        <span className="rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">Next.js app</span>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <p className="mb-4 text-sm font-medium text-muted-foreground">RUSH + TURBOREPO</p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            A small monorepo that actually feels connected.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Rush manages dependencies, Turbo coordinates builds, and one UI package keeps both apps speaking the same visual language.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button>Explore the workspace</Button>
            <Button variant="outline">View shared UI</Button>
          </div>
        </div>

        <Card className="shadow-lg shadow-black/5">
          <CardHeader>
            <CardTitle>Try the shared components</CardTitle>
            <CardDescription>This entire card is imported from @rush-learning/ui.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Input type="email" placeholder="you@example.com" aria-label="Email" />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="next">Next.js</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Join the demo</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="border-y bg-muted/35">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-12 md:grid-cols-3">
          {features.map(([title, description], index) => (
            <div key={title} className="rounded-xl border bg-card p-5">
              <span className="text-xs font-medium text-muted-foreground">0{index + 1}</span>
              <h2 className="mt-3 font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
