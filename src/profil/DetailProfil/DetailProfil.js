import React from "react";
import PropTypes from "prop-types";

const DetailProfil = ({ per, children, clicfunc }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>{per.fullName}</h1>
      <h1 style={{ textAlign: "center", color: "green" }}>{per.bio}</h1>
      <h1 style={{ textAlign: "center", color: "blue" }}>{per.profession}</h1>
      {children}
      <h2>
        <button onClick={() => clicfunc(per.fullName)}>Salute </button>
      </h2>
    </div>
  );
};

DetailProfil.propTypes = {
  per: PropTypes.object,
};
DetailProfil.defaultProps = {
  per: {
    id: Math.random(),
    fullName: "ali",
    bio: "It",
    profession: "developper",
  },
};
export default DetailProfil;
