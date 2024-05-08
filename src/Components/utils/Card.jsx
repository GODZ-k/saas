import React from "react";

function Card(props, { className = "" }) {
  return (
    <div class="col-md-4">
      <div class="main-services">
        <div className="flex justify-center items-center"><img src="services-icon.png" alt="pic" /></div>
        <h3>Agencies</h3>
        <p>
          Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae
          etsum nisle varius sed aliquam etsim vitae netsum.
        </p>
      </div>
    </div>
  );
}

export default Card;
