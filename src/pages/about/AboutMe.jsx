import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function AboutMe() {
  const controls = useAnimation(); // Controls the animation state
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Observes the section

  React.useEffect(() => {
    if (inView) {
      controls.start('visible'); // Trigger animation when in view
    } else {
      controls.start('hidden'); // Reset animation when out of view
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      id="aboutme"
      className="space-y-3 my-[70px] px-[100px]"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 }, // Dim and slide down when hidden
        visible: { opacity: 1, y: 0 }, // Fully revealed when visible
      }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <h2 className="text-blue-500 font-bold text-3xl">About Me</h2>

      <div className="border-b-4 border-blue-200 w-[100px]" />

      <div className="text-blue-600 text-justify space-y-3 text-xl">
        <p>
          Hi! I'm Toki Olaoluwa, though friends and colleagues call me{' '}
          <span className="text-blue-800 font-bold">Laolu</span>. I’m a dedicated
          and detail-oriented software developer with a strong focus on building
          high-quality, robust mobile applications using Flutter, Dart, and Swift.
          My journey in tech began with experiencing mobile apps that had poorly
          designed interfaces and confusing user experiences. This sparked a
          passion in me for creating solutions that prioritize intuitive design
          and enhance user satisfaction. With a background in Electrical and
          Electronics Engineering, I also work with embedded systems, IoT, and
          write Arduino code, bridging the gap between software and hardware to
          create innovative tech solutions.
        </p>

        <p>
          <span className="text-blue-800 font-bold">Core Skills:</span>
          <span>
            {' '}
            Mobile Development: Proficient in{' '}
            <span className="text-blue-800 font-bold">Flutter</span> and{' '}
            <span className="text-blue-800 font-bold">Dart</span>, with experience
            building scalable apps for Android and iOS.
          </span>
          <span>
            {' '}
            Embedded Systems & IoT: Skilled in integrating hardware with software
            solutions, particularly using microcontrollers and sensors to solve
            real-world problems.
          </span>
          <span>
            {' '}
            Programming Languages: Proficient in{' '}
            <span className="text-blue-800 font-bold">Swift</span>,{' '}
            <span className="text-blue-800 font-bold">C++</span>,{' '}
            <span className="text-blue-800 font-bold">Python</span>, and{' '}
            <span className="text-blue-800 font-bold">Arduino</span>, enabling
            flexibility across platforms and projects.
          </span>
          <span>
            {' '}
            Frameworks and Tools: Experienced with{' '}
            <span className="text-blue-800 font-bold">Firebase</span> for backend
            integration, as well as using{' '}
            <span className="text-blue-800 font-bold">REST APIs</span>,{' '}
            <span className="text-blue-800 font-bold">Google Maps API</span>, and{' '}
            <span className="text-blue-800 font-bold">SQLite</span> for full-stack
            app development.
          </span>
        </p>

        <p>
          I’m open to new opportunities in mobile development, embedded systems,
          or any challenging tech role that encourages growth. If you’re looking
          for someone passionate about creating impactful solutions, let’s connect
          and build something amazing together!
        </p>
      </div>
    </motion.div>
  );
}
