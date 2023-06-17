import React from "react";
import logo from "../images/cato.webp";
import POPOSSpace from "./POPOSSpace";
import "../css/POPOSList.css";
function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="https://upload.wikimedia.org/wikipedia/commons/f/fa/50_California_Street%2C_San_Francisco.jpg"
      />
      <POPOSSpace
        name="100 Pine Street"
        address="100 Pine St."
        image="https://upload.wikimedia.org/wikipedia/commons/1/10/100_Pine_Center.jpg"
      />
      <POPOSSpace
        name="101 California Street"
        address="101 California"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/101_California_Street_2021.jpg/320px-101_California_Street_2021.jpg"
      />
      <POPOSSpace
        name="343 Sansome Roof Garden"
        address="343 Sansome St."
        image="https://upload.wikimedia.org/wikipedia/commons/e/e0/Sansome_St._from_343_Sansome_roof_garden.JPG"
      />
      <POPOSSpace
        name="525 Market Street Plaza"
        address="525 Market St."
        image="https://images.squarespace-cdn.com/content/v1/55e77066e4b0ef23d8d3fdad/1516232191030-6PSMBSS8KQSGLOI7XI14/064015_010small.jpg?format=1500wg"
      />
      <POPOSSpace
        name="Citigroup Center"
        address="1 Sansome St."
        image="https://upload.wikimedia.org/wikipedia/commons/1/12/Citigroup_center.jpg"
      />
    </div>
  );
}

export default POPOSList;
