const services = [
  {
    title: "Anxiety & Stress Management",
    description: "Learn to manage overwhelming thoughts and develop healthier coping mechanisms. We use CBT and mindfulness to reduce stress and build emotional resilience.",
    image: "https://img.freepik.com/free-photo/relaxed-young-woman-meditating-while-sitting-floor_1098-20465.jpg"
  },
  {
    title: "Relationship Counseling",
    description: "Improve communication, strengthen trust, and navigate challenges with your partner in a safe and supportive environment.",
    image: "https://img.freepik.com/free-photo/happy-couple-therapy-session_23-2149340130.jpg"
  },
  {
    title: "Trauma Recovery",
    description: "Heal from past trauma with compassionate care and evidence-based techniques that prioritize your safety and well-being.",
    image: "https://img.freepik.com/free-photo/counseling-therapy-session-young-woman_23-2148745809.jpg"
  }
];

export default function Services() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}