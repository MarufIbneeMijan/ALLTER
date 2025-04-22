import React, { useState } from "react";
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Menu, X } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "keen-slider/keen-slider.min.css";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const teamMembers = [
  {
    name: "Muntasir Ahad",
    role: "Project Manager",
    img: "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-22%20at%2012.48.50%20AM.png",
  },

  {
    name: "Shahoria Ahmmad Durjoy",
    role: "Team Lead",
    desc: "Develops machine learning algorithms for autonomous navigation.",
    img: "https://i.ibb.co.com/c5DL0Wd/Whats-App-Image-2025-04-21-at-9-53-31-PM-3.jpg",
  },
  {
    name: "Farha Hassan Priti",
    role: "Electronics and Communication Lead",
    desc: "Builds and maintains the rover’s software systems.",
    img: "https://i.ibb.co.com/XNtkH4p/Whats-App-Image-2025-04-21-at-9-53-32-PM-1.jpg",
  },
  {
    name: "Mehedi Hasan",
    role: "Control and AI Lead",
    desc: "Builds and maintains the rover’s software systems.",
    img: "https://i.ibb.co.com/F4Zw913f/Whats-App-Image-2025-04-21-at-9-53-32-PM.jpg",
  },
  {
    name: "Anamul Haque Akash",
    role: "Management Lead",
    desc: "Builds and maintains the rover’s software systems.",
    img: "https://i.ibb.co.com/N6BcN4KD/Whats-App-Image-2025-04-21-at-9-53-33-PM-1.jpg",
  },
  {
    name: "Mahadia Mashkura  ",
    role: "Management Co-Lead",
    desc: "Builds and maintains the rover’s software systems.",
    img: "https://i.ibb.co.com/rfTqXJxB/Whats-App-Image-2025-04-21-at-9-53-33-PM.jpg",
  },
  {
    name: "Raheeb Sadman",
    role: "Electronics Co-Lead",
    desc: "Builds and maintains the rover’s software systems.",
    img: "https://i.ibb.co.com/67WnbFr8/Whats-App-Image-2025-04-21-at-9-53-31-PM-1.jpg",
  },
  {
    name: "Jahedul Alam Mahe",
    role: "Communication Co-Lead",
    desc: "Builds and maintains the rover’s software systems.",
    img: "https://i.ibb.co.com/4nvQg23N/Whats-App-Image-2025-04-23-at-1-15-50-AM.jpg",
  },
  {
    name: "Daniel Kim",
    role: "Software Developer",
    desc: "Builds and maintains the rover’s software systems.",
    img: "https://i.ibb.co.com/KpGwFYyd/Whats-App-Image-2025-04-21-at-9-53-31-PM-2.jpg",
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
  "https://i.ibb.co.com/rKcpLtrQ/34.jpg",
  "https://i.ibb.co.com/wNYxsTDy/39.jpg",
  "https://i.ibb.co.com/GQkhntvq/Whats-App-Image-2025-04-23-at-12-53-37-AM-3.jpg",
  "https://i.ibb.co.com/Zpq8g35D/Whats-App-Image-2025-04-23-at-12-53-37-AM-1.jpg",
  "https://i.ibb.co.com/v4TvWLy7/Whats-App-Image-2025-04-23-at-12-53-37-AM.jpg",
  "https://i.ibb.co.com/ynj83rP8/50.jpg",
  "https://i.ibb.co.com/3mkxZ6mB/48-1.jpg",
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

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Goals", to: "goals" },
  { name: "Features", to: "features" },
  { name: "Team", to: "team" },
  { name: "Gallery", to: "gallery" },
  { name: "Publications", to: "publications" },
  { name: "Achievements", to: "achievements" },
];
const featureImages = [
  "https://i.ibb.co.com/FrKXyPK/IMG-20250414-WA0016.jpg",
  "https://i.ibb.co.com/Lj7wjfT/Messenger-creation-1350-FF05-8-C8-D-48-E4-94-D1-400875-F0-ABEE.jpg",
  "https://i.ibb.co.com/67HrJ2Ym/Whats-App-Image-2025-04-22-at-10-43-02-PM.jpg",
  "https://i.ibb.co.com/H0Tknfz/Whats-App-Image-2025-04-22-at-10-43-03-PM-2.jpg",
  "https://i.ibb.co.com/nqdKwWDs/Whats-App-Image-2025-04-22-at-10-43-03-PM-3.jpg",
  "https://i.ibb.co.com/k2hqvFXS/Whats-App-Image-2025-04-22-at-10-45-48-PM-1.jpg",
  "https://i.ibb.co.com/Nct1btw/Whats-App-Image-2025-04-22-at-10-45-48-PM-2.jpg",
];

const Alter = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
    slides: { perView: 1, spacing: 20 },
    loop: true,
  });
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="container mx-auto fixed top-0 z-50 bg-white  px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-cyan-600">Alter</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-cyan-600 cursor-pointer font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 bg-white shadow-lg px-6 py-4 rounded-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-cyan-600 cursor-pointer font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
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
        <div className="relative z-20 flex p-5 items-end justify-center h-full">
          <h1 className="text-2xl md:text-2xl font-bold text-center text-white  px-4 p-4 rounded-xl">
            <span className="text-3xl"> "BRACU ALTER"</span> An Autonomous
            locomotion technology for emergency rescue
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
          <p className="max-w-2xl text-justify text-lg">
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
        {/* Header */}
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
          {/* Feature list */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(0)}
                className={`relative border-l-4 pl-4 cursor-pointer transition-all duration-300 
                ${
                  hoveredIndex === index
                    ? "border-cyan-500 bg-cyan-50 shadow-md"
                    : "border-gray-200"
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="text-lg font-semibold">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* Dynamic image display */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full md:w-[90%] lg:w-[80%]">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={featureImages[hoveredIndex]}
                  alt={`Feature ${hoveredIndex + 1}`}
                  className="w-full h-64 object-cover transition-all duration-500 rounded-lg"
                />
              </div>
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
            Team Members
          </h2>
        </motion.div>

        <motion.div
          className="w-full max-w-6xl"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="keen-slider" ref={sliderRef}>
            {teamMembers.map((member, index) => (
              <div className="keen-slider__slide" key={index}>
                <div
                  className="h-72 rounded-xl shadow-lg flex items-end justify-center bg-cover bg-center relative group overflow-hidden"
                  style={{ backgroundImage: `url(${member.img})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
                  <div className="relative z-10 text-center p-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-purple-300 font-semibold">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                  <div className="w-full aspect-square relative">
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
                  </div>
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
