const About = () => {
  const stats = [
    { label: 'MERN Stack', value: 90 },
    { label: 'App Development', value: 85 },
    { label: 'UI Design', value: 92 },
    { label: 'AI Tools', value: 95 },
    { label: 'Deep Learning Algos', value: 75 },
    { label: 'Python', value: 88 },
    { label: 'C++', value: 78 },
    { label: 'Tailwind CSS', value: 82 },
  ];

  return (
    <div className="pixel-box min-h-[80vh]">
      <h1 className="text-2xl md:text-4xl mb-8 text-center">ABOUT THE PLAYER</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="pixel-box bg-purple-900">
          <h2 className="text-xl mb-4">CHARACTER INFO</h2>
          <p className="mb-4">
            Hi there! 👋 I'm Nithin M, a third-year Electrical Engineering student who loves mixing circuits with code and creativity. 💡⚡ When I'm not tinkering with wires or acing equations, you'll find me mastering the MERN stack, crafting cutting-edge apps, and diving headfirst into the fascinating world of machine learning.
          </p>
          <p className="mb-4">
            Oh, and did I mention? I'm also a seasoned <strong>UX designer</strong>—so I don't just build stuff; I make sure it looks great and feels amazing to use. 🚀 Whether it's sketching wireframes or training neural networks, I'm all about creating tech that leaves a spark. ⚙️✨
          </p>
        </div>

        <div className="pixel-box bg-green-900">
          <h2 className="text-xl mb-4">SKILL STATS</h2>
          <div className="space-y-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="flex justify-between mb-1">
                  <span>{stat.label}</span>
                  <span>{stat.value}/100</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${stat.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
