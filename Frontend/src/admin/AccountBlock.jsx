import React from "react";
import AdminIcon from "../../assets/images/admin-icon.jpg";

const AccountBlock = () => {
  return (
    <div className="flex items-center gap-x-2 p-5 border-t-2 border-t-gray-200">
      <div>
        <img
          src={AdminIcon}
          alt=""
          className="rounded-full w-10 h-10 object-cover"
        />
      </div>
      <div>
        <h6 className="text-xs font-semibold">Md Shania</h6>
        <p className="text-xs">md.shania@gmail.com</p>
      </div>
    </div>
  );
};

export default AccountBlock;
