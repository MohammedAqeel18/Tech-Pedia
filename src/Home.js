import React from "react";
import Homecard from "./Homecard";

function Home({ list }) {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((HomeContent) => (
        <Homecard
          key={HomeContent.id}
          Name={HomeContent.Name}
          Description={HomeContent.Description}
          img={HomeContent.img}
        />
      ))}
    </div>
  );
}

export default Home;
