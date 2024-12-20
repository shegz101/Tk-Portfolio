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
  return (
    <div className="my-[70px] px-[100px]">
      <h2 className="text-blue-500 font-bold text-3xl pb-3">My Projects</h2>
      <div className="border-b-4 border-blue-200 w-[100px]" />

      {/* Project 1 */}
      <div className="mt-10 md:mx-20 h-[600px] flex sm:flex-col md:flex-row items-start">
        {/* Project Card */}
        <div className="w-[50%] space-y-5 h-full bg-white shadow-md rounded-lg py-5 px-10">
          <h3 className="text-2xl font-bold text-gray-800">Sigil</h3>
          <p className="text-lg uppercase text-gray-500 mb-2 font-semibold">
            <ul className="flex space-x-4">
              {["Dart", "Flutter", "Riverpod", "Sentry"].map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="mr-2 text-gray-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </p>

          <p className="text-gray-600 text-base text-justify">
          A fintech application designed to enable seamless 
          cross-border and cryptocurrency transactions, providing 
          a secure and efficient platform for modern financial needs. 
          The app combines user-friendly design with cutting-edge technology 
          to ensure exceptional performance, offering users fast transaction 
          processing and reliable data synchronization. With a robust design 
          system and a focus on performance optimization, this application delivers a premium user experience and fosters trust and engagement.
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

        {/* Carousel */}
        <Carousel images={signilImages} />
      </div>

      {/* Project 2 */}
      <div className="mt-10 md:mx-20 h-[600px] flex sm:flex-col md:flex-row items-start">
        {/* Project Card */}
        <div className="w-[50%] space-y-5 h-full bg-white shadow-md rounded-lg py-5 px-10">
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
          A navigation-focused mobile application designed to improve campus 
          accessibility within the University of Lagos (UNILAG). The app 
          provides precise, step-by-step directions to various destinations across 
          the campus using real-time navigation powered by Google Maps. It integrates 
          dynamic data retrieval through Google Sheet API for seamless updates and features a 
          secure Firebase authentication system to ensure user data protection. With an emphasis 
          on reliability and user experience, the app serves as a valuable tool for navigating the expansive UNILAG campus efficiently.
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

        {/* Carousel */}
        <Carousel images={guidaImages} />
      </div>
    </div>
  );
}
