export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">USA Inflatables</h1>
        <p className="text-lg">Nationwide Inflatable Rentals – Bounce Houses, Obstacle Courses, Water Slides & More!</p>
        <a href="#" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Book Now</a>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <img src="https://images.unsplash.com/photo-1591895024094-cddbbd0c7b85?auto=format&fit=crop&w=800&q=60" className="rounded-xl w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold">Bounce Houses</h2>
          <p>Colorful, safe, and perfect for birthdays and backyard fun!</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1605969909221-6f1efab0e85c?auto=format&fit=crop&w=800&q=60" className="rounded-xl w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold">Obstacle Courses</h2>
          <p>Challenge your friends and race through thrilling inflatable setups!</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1565023025811-204f71e5e5b3?auto=format&fit=crop&w=800&q=60" className="rounded-xl w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold">Water Slides</h2>
          <p>Cool down with giant inflatable slides—ideal for hot summer days!</p>
        </div>
      </section>
      <footer className="text-center text-sm text-gray-600 mt-12">
        Serving all 50 states | Based in Brunswick, OH | © {new Date().getFullYear()} USA Inflatables
      </footer>
    </div>
  )
}
