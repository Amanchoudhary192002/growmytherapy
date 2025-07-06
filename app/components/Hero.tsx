export default function Hero() {
  return (
    <section className="bg-cover bg-center h-screen flex items-center justify-center text-white px-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?fit=crop&w=1400&q=80')" }}>
      <div className="text-center max-w-2xl bg-black/60 p-8 rounded-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Helping You Heal & Thrive</h1>
        <h2 className="text-xl md:text-2xl mb-6">Licensed Clinical Psychologist in Los Angeles</h2>
        <a href="#contact" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Book a Free Consult</a>
      </div>
    </section>
  );
}