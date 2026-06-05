import React from "react";
import { FaCheck } from "react-icons/fa6";
import { MEMBERSHIP_BENEFIT_LIST } from "../../manualData/membershipContent";

const MembershipSide = () => {
  return (
    <div className="space-y-5 flex-1">
      <h1 className="text-3xl font-bold text-blue-zodiac">Become a Member</h1>
      <p className="font-normal text-scarpa-flow">
        Join the cooperative today and start earning dividends on your
        purchases. Membership is a one-time fee of $100.
      </p>
      <ul className="text-black space-y-2.5" id="membership-benefit-list">
        {MEMBERSHIP_BENEFIT_LIST.map((item, index) => {
          return (
            <li key={index} className="flex flex-row gap-x-2.5 items-center">
              <FaCheck className="text-green-gaze font-black!" />
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <button className="tracking-widest uppercase rounded-sm border border-athens-gray bg-white px-8 py-3 font-bold text-sm text-blue-zodiac">
        Apply for membership
      </button>
    </div>
  );
};

export default MembershipSide;
