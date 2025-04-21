import React, { useState } from "react";
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Mechanical Engineer",
    desc: "Specializes in robotic mobility and actuator design.",
    img: "https://i.ibb.co/2P5smTm/alice.jpg",
  },
  {
    name: "Bob Smith",
    role: "Software Engineer",
    desc: "Backend and control system integration.",
    img: "https://i.ibb.co/sPWrTQz/bob.jpg",
  },
  {
    name: "Clara Reyes",
    role: "Electronics Expert",
    desc: "Sensor calibration and PCB design.",
    img: "https://i.ibb.co/CHGmmFY/clara.jpg",
  },
  {
    name: "David Kim",
    role: "AI/ML Engineer",
    desc: "Navigation and mapping algorithms.",
    img: "https://i.ibb.co/YbbqTqk/david.jpg",
  },
  {
    name: "Ella Martin",
    role: "Project Manager",
    desc: "Coordinates project tasks and team responsibilities.",
    img: "https://i.ibb.co/Gt4NyWP/ella.jpg",
  },
  {
    name: "Frank Lee",
    role: "Hardware Lead",
    desc: "Responsible for sensor assembly and integration.",
    img: "https://i.ibb.co/3WjdmMs/frank.jpg",
  },
  {
    name: "Grace Chen",
    role: "UI/UX Designer",
    desc: "Designs intuitive user interfaces for control apps.",
    img: "https://i.ibb.co/2FzRtNK/grace.jpg",
  },
  {
    name: "Henry Zhao",
    role: "Data Analyst",
    desc: "Analyzes rover data and supports AI training.",
    img: "https://i.ibb.co/GWxFhRY/henry.jpg",
  },
  {
    name: "Isla Gomez",
    role: "Environmental Specialist",
    desc: "Ensures compliance with safety standards.",
    img: "https://i.ibb.co/2vDKp1h/isla.jpg",
  },
  {
    name: "Jack Patel",
    role: "Test Engineer",
    desc: "Conducts field testing and troubleshooting.",
    img: "https://i.ibb.co/JQ3dLRM/jack.jpg",
  },
];

const achievements = [
  {
    title: "Successful Feasibility Test",
    desc: "The team conducted successful tests on the rover at two different industries — the Construction of Chemical Warehouse in Tongi and Eastern Tubes Limited. This led to a Performance Certificate and praise for the rover’s capabilities.",
    icon: "🏆",
  },
  {
    title: "Partnership Opportunity",
    desc: " After demonstrating the rover’s features to industry officials, BRACU ALTER received interest for a partnership to develop an industrial-grade version of the Rescue Rover for chemical operations.",
    icon: "📄",
  },
  {
    title: "ICT Ministry Support",
    desc: "The team had a meeting with the Honorable Secretary of the ICT Ministry, who was impressed by the rover's capabilities and promised funding of 10 lakh BDT if they pass the Feasibility Test.",
    icon: "📰",
  },
  {
    title: "Semi-Finals of Idea Innovation 5.0",
    desc: "BRACU ALTER reached the semi-finals in the Idea Innovation 5.0 competition, showcasing the innovation and potential of their rover project.",
    icon: "🛠️",
  },
  {
    title: "RoboCup 2024",
    desc: "BRACU ALTER showcased their rover's capabilities with successful control systems and maneuvering, preparing for future enhancements.",
    icon: "🛠️",
  },
  {
    title: "RoboCup 2025",
    desc: "BRACU ALTER showcased their rover's capabilities with successful control systems and maneuvering, preparing for future enhancements.",
    icon: "🛠️",
  },
];

const goals = [
  {
    title: "Successful Feasibility Test",

    desc: "The team conducted successful tests on the rover at two different industries — the Construction of Chemical Warehouse in Tongi and Eastern Tubes Limited. This led to a Performance Certificate and praise for the rover’s capabilities",
  },
  {
    title: "Reliable Communication",

    desc: "Wireless rescue rover communication system designed to ensure reliable data transmission in hazardous environments.",
  },
  {
    title: "Pioneering Robotics Industry",

    desc: "Aiming to establish a pioneering robotics industry in Bangladesh for long-term technological growth, innovation, and impactful contributions to national safety.",
  },
  {
    title: "AI-Powered Intelligence",

    desc: "Future integration of AI to enhance autonomous decision-making and environment analysis.",
  },
];

const photos = [
  "https://i.ibb.co.com/twh5MhSN/40.jpg",
  "https://i.ibb.co.com/27PjM8j9/37.jpg",
  "https://i.ibb.co/yP1vhs9/rover3.jpg",
  "https://i.ibb.co/KrDfDcc/rover4.jpg",
  "https://i.ibb.co/dWVvdRC/rover5.jpg",
  "https://i.ibb.co/Gxq6HPp/rover6.jpg",
];

const features = [
  "Real-time 2D and 3D mapping using LiDAR and RGB-depth cameras",
  "Autonomous navigation through rugged and hazardous terrain",
  "Object detection with YOLOv5 trained on Hazmat and QR code datasets",
  "Thermal imaging and environmental sensing",
  "Tracked locomotion system with 6-track drive for high stability",
  "Dynamic flippers (4 flippers with PID control) for stair and obstacle traversal",
  "UFactory xArm 6 with 6 DoF (under development) for manipulation tasks",
  "Customised GUI",
  "Our Base Station: Centralizes all control systems, offering real-time monitoring, advanced control, and seamless communication.",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};
const featureImages = [
  "https://i.ibb.co.com/twh5MhSN/40.jpg",
  "https://i.ibb.co.com/27PjM8j9/37.jpg",
];

const Alter = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#1a1f2e] mx-auto shadow-md z-50">
        <ul className="flex justify-center space-x-8 p-4 text-cyan-200 font-semibold">
          {[
            "home",
            "about",
            "publications",
            "goals",
            "team",
            "achievements",
          ].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={600}
                offset={-64}
                className="cursor-pointer capitalize hover:text-cyan-400"
              >
                {item === "team" ? "Meet the Team" : item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Home Section - Swiper with Background Images */}
      <Element name="home" className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/public/BannerVdo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white px-4 bg-black/60 p-4 rounded-xl">
            Welcome to the Alter 🚀
          </h1>
        </div>
      </Element>

      {/* About Section */}
      <Element
        name="about"
        className="pt-16 min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 text-center"
      >
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 ">About the Mission</h2>
          <p className="max-w-2xl  text-lg">
            Our mission is to create a cutting-edge underground rover that can
            safely explore, map, and monitor hazardous environments such as
            manholes and underground tunnels. The rover is equipped with gas
            detection sensors, real-time 2D mapping, precision actuators, and a
            rugged design to withstand harsh conditions. This innovative
            solution aims to aid in infrastructure maintenance, emergency
            response, and scientific research by minimizing human risk and
            increasing data reliability.
          </p>
        </motion.div>
      </Element>

      {/* Research Section */}
      <Element name="goals" className="bg-white py-20 px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our Core Goals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering national resilience with robotic innovation, strategic
            safety, and long-term industrial growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {goals.map((goal, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-cyan-300/50 transition duration-300 hover:scale-[1.03] flex flex-col items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="mb-4">{goal.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {goal.title}
              </h3>
              <p className="text-gray-600 text-sm">{goal.desc}</p>
            </motion.div>
          ))}
        </div>
      </Element>

      {/* Explore Section */}
      <Element name="features" className="bg-white py-20 px-6 text-gray-800">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-cyan-600 mb-4 border-b-2 border-cyan-500 inline-block pb-2">
            Project Features
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Discover the cutting-edge features engineered into our rover system.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-cyan-500 pl-4 text-gray-700 hover:border-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="text-lg font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* Centered Image Slider */}
          <motion.div
            className="flex justify-center items-center h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full md:w-[90%] lg:w-[80%]">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 10 }}
                className="rounded-xl shadow-lg overflow-hidden"
              >
                {featureImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Feature ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </Element>

      {/* Publication section  */}
      <Element name="publications" className="py-20 px-6 bg-white text-black">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-cyan-600 mb-4 border-b-4 border-cyan-500 inline-block pb-2">
            Publications
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our published research and findings from the rover project.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Publication 1 */}
          <motion.div
            className="bg-gray-100 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-600 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl text-cyan-700 font-semibold mb-2">
              Wireless event-based kill-switch for safe and autonomous UAS
              operation
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              J. Uddin, M. Ahad and A. Hil Kafi, "Wireless event-based
              kill-switch for safe and autonomous UAS operation," 2023
              International Conference on Electronics, Information, and
              Communication (ICEIC), Singapore, 2023.
            </p>
            <a
              href="https://ieeexplore.ieee.org/abstract/document/10049917"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline font-medium"
            >
              Read Full Paper →
            </a>
          </motion.div>

          {/* Publication 2 */}
          <motion.div
            className="bg-gray-100 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-600 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl text-cyan-700 font-semibold mb-2">
              Rover Circuit Protection: A Holistic and Comprehensive Approach
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              M. Ahad, M. Hassan, S. A. Durjoy and A. H. Kafi, "Rover Circuit
              Protection: A Holistic and Comprehensive Approach," TENCON 2023 -
              2023 IEEE Region 10 Conference (TENCON), Chiang Mai, Thailand,
              2023
            </p>
            <a
              href="https://ieeexplore.ieee.org/abstract/document/10322442"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline font-medium"
            >
              Read Full Paper →
            </a>
          </motion.div>
        </div>
      </Element>

      {/* Meet the Team Section */}
      <Element
        name="team"
        className="pt-16  h-screen  flex flex-col items-center justify-center px-4"
      >
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-black mb-8 text-center">
            Meet the Team Behind the Rover
          </h2>
        </motion.div>

        <motion.div
          className="w-full max-w-6xl"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-purple-300"
                  />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-purple-700 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Element>

      {/* Achievements Section */}
      <Element
        name="achievements"
        className="pt-16 min-h-screen bg-blue-400- px-4 py-16"
      >
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-10">Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achieve, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{achieve.icon}</div>
                <h3 className="text-lg font-bold mb-2">{achieve.title}</h3>
                <p className="text-sm text-gray-600">{achieve.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Element>
      {/* Photo gallery section */}
      <Element name="gallery" className="py-20 px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-4 border-b-4 border-cyan-500 inline-block pb-2">
            Photo Gallery
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Glimpse into the build, testing, and field moments of our rover
            journey.
          </p>
        </motion.div>

        {/* Flex Layout: Gallery + Iframes */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Gallery Section */}
          <div className="w-full lg:w-2/3">
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
              {photos.map((src, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg relative group break-inside-avoid cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg transition-all duration-500 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Iframe Section */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-cyan-400">
              <iframe
                src="https://www.youtube.com/watch?v=FAMdFjuKT0E"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-cyan-400">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Google Earth"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Add more iframes as needed */}
          </div>
        </div>
      </Element>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-1 shadow-lg hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alter;
