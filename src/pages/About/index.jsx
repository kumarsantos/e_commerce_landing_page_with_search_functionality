import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full h-full px-32 py-12 flex flex-col items-center justify-center">
      <div className="bg-gray-50 w-full px-12 py-8  rounded-sm">
        <h1 className="text-center text-2xl underline underline-offset-[5px] underline-color-red ">
          About Assignment
        </h1>
        <div className="mt-4">
          <h2 className="text-xl font-sm text-gray-600">Tools used</h2>
          <ul className="ml-2 p-2  text-gray-700">
            <li>
              <span className="font-medium mr-2">REACT JS and Vite</span> are used for
              project creation.{" "}
            </li>
            <li>
              <span className="font-medium mr-2">Tailwind CSS</span> for styling.
            </li>
            <li>
              <span className="font-medium mr-2">react-icons</span>for Icons.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-sm text-gray-600">
            Steps to run the project
          </h2>
          <ul className="ml-2 p-2 text-gray-700">
            <li className="font-medium mr-2">git clone 'url'</li>
            <li className="font-medium mr-2">
              cd 'project name' : Eg: cd e_commerce
            </li>
            <li className="font-medium mr-2">Npm install</li>
            <li className="font-medium mr-2">Npm run dev</li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-sm mb-2 text-gray-600">
            Feature Explanation
          </h2>
          <p className="text-gray-700 pl-4 mb-1">
            Login module has been implemented and all the neccessary validations
            have been Implemented as per the requirement.
          </p>
          <p className="text-gray-700 pl-4 mb-1">
            Search functionality has been Implemented as per the requirement.
          </p>
          <p className="text-gray-700 pl-4 mt-2">
            <strong>Ussues during Login </strong>:- API was throwing
            un-authorized error, so for showing login functionality,
            localStorage and React contex API have been used to fake login after
            all the validations are done. It is persistent because instead of
            token i have store isLoggedIn flag inside localStorage.
          </p>
          <p className="text-gray-700 pl-4 mt-2">
            There was no token from login API due to error so , during
            getAllProduct fetching API, TOKEN has not being passed.
          </p>
          <h2 className="text-xl font-sm mb-2 text-gray-600 mt-4">
            Folder Structure
          </h2>
          <ul className="ml-2 p-2 flex flex-col gap-y-1 text-gray-700">
            <li>
              <strong>src : </strong>It is entry point and all the neccessary
              files and folder have been created inside it.
            </li>
            <li>
              <strong>assets : </strong>This folder includes all the assets like
              images, fonts, etc.
            </li>
            <li>
              <strong>components : </strong>This folder includes all the
              components, later that can be re-use whenever we want.
            </li>
            <li>
              <strong>hook :</strong> This folder is mainly used for separating
              the business login from our main component, so it will be easy to
              maintain or write test cases for the features.
            </li>
            <li>
              <strong>pages :</strong> This folder includes all the pages, which
              is rendering based on the url changes.{" "}
            </li>
            <li>
              <strong>services :</strong> This folder includes all the service
              related codes so, this will separate the data fetching or updating
              logic from main components.
            </li>
            <li>
              <strong>utils :</strong> This folder includes all the utilities
              files like helper files, validation files, etc.{" "}
            </li>
            <li>
              <strong>constants :</strong> This folder includes all the constant
              or static content used in our project.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
