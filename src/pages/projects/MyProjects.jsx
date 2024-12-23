import { useState, useRef } from "react";
import images from "../../assets/index";
import Carousel from "../../utils/Carousel";

const signilImages = [images.sigil1, images.sigil2, images.sigil3];
const guidaImages = [
  images.guida1,
  images.guida2,
  images.guida3,
  images.guida4,
  images.guida5,
  images.guida6,
];

export function MyProjects() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleReadMore = (description) => {
    setModalContent(description);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <div className="my-[70px] px-[20px] md:px-[100px] relative">
      <h2 className="text-blue-500 font-bold text-3xl pb-3">My Projects</h2>
      <div className="border-b-4 border-blue-200 w-[100px]" />

      {/* Projects Section */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-x-8 scrollbar-hide"
      >
        {/* Project 1 */}
        <div className="mt-10 h-[400px] w-[650px] border-2 border-blue-400 rounded-md flex sm:flex-col md:flex-row items-start flex-shrink-0">
          <div className="w-[70%] space-y-5 h-full bg-white shadow-md rounded-lg py-5 px-5">
            <h3 className="text-2xl font-bold text-gray-800">Sigil</h3>
            <p className="text-lg uppercase text-gray-500 mb-2 font-semibold">
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {["Dart", "Flutter", "Riverpod", "Sentry"].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center whitespace-nowrap"
                  >
                    <span className="mr-2 text-gray-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </p>
            <p className="text-gray-600 text-base text-justify">
              A fintech application designed to enable seamless cross-border
              and cryptocurrency transactions, providing a secure and efficient
              platform for modern financial needs.{" "}
              <span
                onClick={() =>
                  handleReadMore(
                    "A fintech application designed to enable seamless cross-border and cryptocurrency transactions, providing a secure and efficient platform for modern financial needs.The app combines user-friendly design with cutting-edge technology to ensure exceptional performance, offering users fast transaction processing and reliable data synchronization. With a robust design system and a focus on performance optimization, this application delivers a premium user experience and fosters trust and engagement."
                  )
                }
                className="text-xl font-semibold text-blue-500 cursor-pointer"
              >
                read more...
              </span>
            </p>
            <div className="mt-5 flex space-x-3">
              <a
                href="https://github.com/benjamin421/sigil-mobile-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2"
              >
                Source Code
              </a>
            </div>
          </div>
          <Carousel images={signilImages} />
        </div>

        {/* Project 2 */}
        <div className="mt-10 h-[400px] border-2 border-blue-400 rounded-md w-[650px] flex sm:flex-col md:flex-row items-start flex-shrink-0">
          <div className="w-[70%] space-y-5 h-full bg-white shadow-md rounded-lg py-5 px-5">
            <h3 className="text-2xl font-bold text-gray-800">Guida</h3>
            <p className="text-lg uppercase text-gray-500 mb-2 font-semibold">
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {[
                  "Dart",
                  "Flutter",
                  "Riverpod",
                  "Firebase",
                  "Google Maps API",
                  "Google Places API",
                  "Google Sheet API",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center whitespace-nowrap"
                  >
                    <span className="mr-2 text-gray-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </p>
            <p className="text-gray-600 text-base text-justify">
              A navigation-focused mobile application designed to improve
              campus accessibility within the University of Lagos (UNILAG).{" "}
              <span
                onClick={() =>
                  handleReadMore(
                    "A navigation-focused mobile application designed to improve campus accessibility within the University of Lagos (UNILAG). The app provides precise, step-by-step directions to various destinations across the campus using real-time navigation powered by Google Maps. It integrates dynamic data retrieval through Google Sheet API for seamless updates and features a secure Firebase authentication system to ensure user data protection. With an emphasis on reliability and user experience, the app serves as a valuable tool for navigating the expansive UNILAG campus efficiently."
                  )
                }
                className="text-xl font-semibold text-blue-500 cursor-pointer"
              >
                read more...
              </span>
            </p>
            <div className="mt-5 flex space-x-3">
              <a
                href="https://github.com/benjamin421/sigil-mobile-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2"
              >
                Source Code
              </a>
            </div>
          </div>
          <Carousel images={guidaImages} />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
            className="bg-white w-[80%] max-w-lg rounded-lg p-6 relative"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-gray-500 text-lg font-bold"
            >
              X
            </button>
            <p className="text-gray-800 text-justify pt-2">{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}
