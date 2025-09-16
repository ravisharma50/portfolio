import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-10 w-full bg-gray-800"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">
        About Me
        <div className="w-16 h-1 bg-primary mx-auto mt-2 rounded"></div>
      </h2>

      {/* About Content */}
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left Side - Text */}
        <div className="md:col-span-2 text-xl text-muted-foreground leading-relaxed space-y-8">
          <p>
            Currently, I've completed my B.Tech degree with Electrical & Computer
            Engineering, student at Gandhi Institute for Education & Technology
            Collage with a passion for building innovative User-friendly web
            development. My journey in technology began when I built a Calculator,
            and since then I've been constantly expanding my skills.
          </p>

          <p>
            I enjoy building user-friendly interfaces, solving complex problems,
            and developing efficient, scalable applications. My expertise spans
            across creating interactive web applications, writing clean and
            maintainable code, and designing structured databases for optimal
            performance.
          </p>

          <p>
            When I'm not coding, you can find me contributing to open-source
            projects, reading tech blogs, or exploring new programming paradigms.
            I'm actively seeking opportunities to apply my skills in a professional
            environment after graduation.
          </p>
        </div>

        {/* Right Side - Cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-gray-300 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Frontend Development
            </h3>
            <p className="text-sm text-gray-700">
              Creating responsive, accessible, and performant user interfaces with
              modern frameworks.
            </p>
          </div>

          <div className="bg-gray-300 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Software Development
            </h3>
            <p className="text-sm text-gray-800">
              I am a motivated and passionate software developer eager to grow and contribute to meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
