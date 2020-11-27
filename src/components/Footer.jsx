import React from "react";

const Footer = ({ filter, onFilterClicked }) => {
  function renderFilter(filterProp, name) {
    if (filter === filterProp) {
      return name;
    }
    return (
      <span
        onClick={() =>{
          // console.log("clicked");
          onFilterClicked(filterProp)
        }}
        style={{color: 'blue'}}
      >
        {name}
      </span>
    );
  }
  return (
    <p>
      SHOW {renderFilter("SHOW_ALL", "All")}
      {", "}
      {renderFilter("SHOW_COMPLETED", "Completed")}
      {", "}
      {renderFilter("SHOW_ACTIVE", "Active")}.
    </p>
  );
};
export default Footer