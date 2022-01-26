import React from "react";

const HomeInfoSection = () => {
  return (
    <section id="info">
      <div className="info-contain">
        <h1 className="info-t">Food For All</h1>
        <p className="para">
          Hungry? Then Why don't you treat yourself to one of our meals! <br />
          <br />
          Delicious Food has never been easier to find...
          <br />
          <br />
          Buy From Our website right now to get 10% Off with code "SV"
        </p>
      </div>
      <div className="circle"></div>
      <img className="panda" src="/assets/panda.png" alt="panda" />
    </section>
  );
};

export default HomeInfoSection;
