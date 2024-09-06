import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle, BsPlusCircle } from "react-icons/bs";

function ProfileCard() {
  const [activeTab, setActiveTab] = useState("About Me");

  // Gallery images
  const initialImages = [
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100/0000FF/808080",
    "https://via.placeholder.com/100/FF0000/FFFFFF",
    "https://via.placeholder.com/100/00FF00/000000",
    "https://via.placeholder.com/100/FFFF00/000000",
    "https://via.placeholder.com/100/FF00FF/000000",
  ];

  const [images, setImages] = useState(initialImages);
  const [visibleImages, setVisibleImages] = useState([0, 1, 2, 3]);

  // Function to handle left arrow click
  const handleLeftClick = () => {
    if (visibleImages[0] > 0) {
      setVisibleImages(visibleImages.map((index) => index - 1));
    }
  };

  // Function to handle right arrow click
  const handleRightClick = () => {
    if (visibleImages[3] < images.length - 1) {
      setVisibleImages(visibleImages.map((index) => index + 1));
    }
  };

  // Function to handle image upload
  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);

      if (visibleImages[3] === images.length - 1) {
        setVisibleImages(visibleImages.map((index) => index + 1));
      }
    }
  };

  return (
    <div className="min-h-screen w-2/4 bg-gray-900 flex items-center justify-end">
      <div className="pr-8 flex flex-col space-y-8">

        <div
          className="bg-gray-800 rounded-2xl p-6 shadow-lg"
          style={{ width: "500px", height: "250px" }}
        >
          <div className=" bg-black p-2 rounded-xl flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              {["About Me", "Experiences", "Recommended"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-1 px-4 rounded-full ${activeTab === tab ? "bg-gray-700" : "bg-transparent"
                    } text-white focus:outline-none hover:shadow-lg hover:shadow-gray-800 transition-shadow`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="text-gray-400">
              <span>?</span>
            </div>
          </div>

          <div
            className="bg-gray-700 text-gray-300 rounded-lg p-4"
            style={{ height: "calc(100% - 56px)", overflowY: "auto" }}
          >
            {activeTab === "About Me" && (
              <p>
                Hi, I'm a Computer Science and Engineering (CSE) student with a strong passion for technology and problem-solving.
              Throughout my studies, I've developed a solid foundation in programming languages like Java, Python, and C++, as well as experience with web development frameworks and databases. I'm particularly interested in areas like software development, algorithms, and data structures, and have worked on a few projects, including building web apps and implementing machine learning models.
              Aside from technical skills, I'm always looking to improve my soft skills like teamwork, communication, and time management. I'm eager to keep learning, work on real-world problems, and contribute to impactful projects in the tech industry.
              </p>
            )}
            {activeTab === "Experiences" && (
              <p>Hello,
                <div>
                  During my time as a CSE student, I’ve had the chance to work on several hands-on projects and internships that have helped shape my technical skills. One of the key experiences was developing a web application using the MERN stack (MongoDB, Express, React, Node.js). I worked on both frontend and backend, implementing user authentication and a responsive UI.

                  Additionally, I completed an internship where I worked on optimizing algorithms for data processing in a large-scale system. This involved working with Python and exploring machine learning models to improve prediction accuracy.

                  I’ve also collaborated in a team setting on a capstone project, where we developed a recommendation system using collaborative filtering techniques. These experiences taught me how to apply my academic knowledge in real-world scenarios, work with version control (Git), and communicate effectively within a team.</div></p>
            )}
            {activeTab === "Recommended" && (
              <p>I recommend checking out these resources...</p>
            )}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600" />

        {/* Second Widget - Gallery */}
        <div
          className="bg-gray-800 rounded-2xl p-6 shadow-lg"
          style={{ width: "500px", height: "200px" }}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="bg-black rounded-xl text-white text-lg py-1 px-4 rounded-full">Gallery</div>
            <div className="flex space-x-2">
              <div className="relative">
                <button className="text-white flex items-center space-x-1 bg-gray-600/70 rounded-full p-2">
                  <BsPlusCircle size={20} />
                  <span>Add Image</span>
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAddImage}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              <button
                onClick={handleLeftClick}
                className={`text-white p-2 rounded-full bg-gray-600/70 focus:outline-none ${visibleImages[0] === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={visibleImages[0] === 0}
              >
                <BsArrowLeftCircle size={20} />
              </button>
              <button
                onClick={handleRightClick}
                className={`text-white p-2 rounded-full bg-gray-600/70 focus:outline-none ${visibleImages[3] === images.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                  }`}
                disabled={visibleImages[3] === images.length - 1}
              >
                <BsArrowRightCircle size={20} />
              </button>
            </div>
          </div>

          <div className="flex space-x-4 overflow-hidden">
            {visibleImages.map((index) => (
              <div key={index} className="w-1/5 h-20">
                <img
                  src={images[index]}
                  alt={`Gallery ${index}`}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
