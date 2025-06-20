import React from 'react';


const ComingSoon = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-500 mb-4 animate__animated animate__fadeIn">
          Coming Soon!
        </h1>
        <p className="text-xl mb-4">Our e-commerce site will be launching soon. Stay tuned!</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded-l"
          />
          <button className="p-2 bg-blue-500 text-white rounded-r">Subscribe</button>
        </form>
        <div className="mt-4 text-xl">
          <span>Time left: </span>
          <span className="text-red-500">5:00:00</span>
        </div>
        <div className="mt-6">
          <button to="/signup" className="text-blue-500 hover:underline">Sign Up</button> | 
          <button to="/login" className="text-blue-500 hover:underline"> Login</button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
