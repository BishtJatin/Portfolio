import React, { useEffect } from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import TagCloud from "TagCloud";

const TextShpere = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "Babel",
      "ES6",
      "ReduxToolkit",
      "CSS",
      "JavaScript",
      "React",
      "Express JS",
      "Nodejs",
      "MongoDBCompass",
      "Mongoose",
      "GIT",
      "GITHUB",
      "Postman",
    ];

    const options = {
      radius: window.innerWidth < 768 ? 150 : 300, // Responsive radius
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    const tagCloudInstance = TagCloud(container, texts, options);

    // Cleanup function to remove the tag cloud when the component unmounts
    return () => {
      tagCloudInstance.destroy();
    };
  }, []);

  return (
    <div className="mt-12 md:mt-16 w-full px-5">
      <div className="text-gray-400 text-2xl md:text-3xl font-bold flex group border-b-2 shadow-2xl hover:border-[#FF5252] hover:shadow-[#FF5252] pb-2">
        <p>Skills</p>
        <span className="ml-2 mt-1 group-hover:text-[#FF5252]">
          <TiArrowRightOutline />
        </span>
      </div>
      <div className="text-shpere bg-black relative flex justify-center mt-10 md:mt-16">
        {/* The span with the class "tagcloud" is necessary for the TagCloud library */}
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};

export default TextShpere;
