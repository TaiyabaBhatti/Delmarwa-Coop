import React from "react";
import { MdDelete } from "react-icons/md";

const RemoveButton = ({ func }) => {
  return (
    <button
      onClick={func}
      className="text-tall-poppy  text-sm flex items-center cursor-pointer"
    >
      <MdDelete className="font-black" />
      <span className="font-medium">Remove</span>
    </button>
  );
};

export default RemoveButton;
