import React from "react";

function Homecard({ Name, Description, img }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-200">
      <img
        src={img}
        alt={Name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold text-blue-700 mb-2">{Name}</h1>
        <p className="text-gray-600 text-sm">{Description}</p>
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
  Go Now
</button>
      </div>
    </div>
  );
}

export default Homecard;
