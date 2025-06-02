import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">USA Inflatables</h1>
        <p className="text-lg">Nationwide Inflatable Rentals – Bounce Houses, Obstacle Courses, Water Slides & More!</p>
        <Link href="/booking">
          <Button className="mt-4">Book Now</Button>
        </Link>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <img src="https://images.unsplash.com/photo-1591895024094-cddbbd0c7b85?auto=format&fit=crop&w=800&q=60" alt="Bounce House" className="rounded-xl w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold">Bounce Houses</h2>
            <p>Colorful, safe, and perfect for birthdays and backyard fun!</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <img src="https://images.unsplash.com/photo-1605969909221-6f1efab0e85c?auto=format&fit=crop&w=800&q=60" alt="Obstacle Course" className="rounded-xl w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold">Obstacle Courses</h2>
            <p>Challenge your friends and race through thrilling inflatable setups!</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <img src="https://images.unsplash.com/photo-1565023025811-204f71e5e5b3?auto=format&fit=crop&w=800&q=60" alt="Water Slide" className="rounded-xl w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold">Water Slides</h2>
            <p>Cool down with giant inflatable slides—ideal for hot summer days!</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-600 mt-12">
        Serving all 50 states | Based in Brunswick, OH | © {new Date().getFullYear()} USA Inflatables
      </footer>
    </div>
  );
}
