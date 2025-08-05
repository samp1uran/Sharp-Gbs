const testimonials = [
  {
    name: "Rohit Sharma",
    position: "Founder, FinEdge",
    feedback:
      "Sharp GBS has transformed the way we manage our operations. Their service is prompt, professional, and always reliable.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Priya Mehta",
    position: "CEO, TechNova",
    feedback:
      "Impressive team and even better results. Sharp GBS truly understands what businesses need and delivers beyond expectations.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Jennifer",
    position: "Operations Head, QuickBooksPro",
    feedback:
      "Highly recommend Sharp GBS! Their attention to detail and support made a huge difference in our workflow.",
    image: "https://i.pravatar.cc/150?img=45",
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative mb-7 py-8 px-6 sm:px-12 rounded-xl "
      id="testimonials"
    >
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800 drop-shadow-sm">
          💬 What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-2xl rounded-2xl p-6 text-left transition transform hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-white object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.position}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                “{t.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
