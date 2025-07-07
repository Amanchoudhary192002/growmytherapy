export default function About() {
  return (
    <section className="bg-blue-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <div className="rounded-2xl overflow-hidden border-4 border-white shadow-lg">
            <img
              src="/images/serena.jpg" // Replace with actual path or URL
              alt="Dr. Serena Blake"
              className="w-72 h-auto object-cover"
            />
          </div>
          <div className="mt-3 text-sm bg-white p-2 rounded shadow text-center">
            <strong>Dr. Aman Choudhary</strong><br />
            Clinical Psychologist<br />
            ⭐ 8 Years Experience
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 text-gray-800">
          <div className="inline-block mb-2 bg-yellow-200 text-sm px-3 py-1 rounded-full font-medium">
            About Dr. Serena Blake, PsyD - Clinical Psychologist in Los Angeles, CA
          </div>
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Dr. Serena Blake</h2>
          <p className="mb-4 text-lg">
            With over <strong>8 years of experience</strong> and 500+ sessions, I specialize in helping individuals manage anxiety, heal from trauma, and build healthier relationships. My goal is to offer you a safe and supportive space to grow.
          </p>
          <p className="mb-4 text-lg">
            My approach combines <strong>cognitive behavioral therapy</strong>, <strong>mindfulness</strong>, and <strong>evidence-based care</strong> tailored to your needs. Whether you're meeting me in my office or virtually, I’m here to walk beside you every step of the way.
          </p>
          <p className="text-lg">
            Whether you're seeking to overcome <strong>past wounds</strong>, improve your <strong>relationships</strong>, or reduce <strong>daily stress</strong>, I’m here to help you move forward with clarity and confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
