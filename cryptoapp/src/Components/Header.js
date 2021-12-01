import React, { useContext } from "react";
import TrendCarsoule from "./TrendCarsoule";
import { useHistory } from "react-router";
import { UserContext } from "../App";

const Header = () => {
  const history = useHistory();
  const { state } = useContext(UserContext);

  return (
    <div className="relative top-28 px-52 mb-20 bg-gray-200 mobile:px-1 tablet:px-10 laptop:px-32">
      <div className="bg-taj-mahal bg-no-repeat bg-right bg-opacity-0">
        <div className="p-10 font-nunito">
          <p className="text-5xl font-bold my-5">Welcome to TP-Coin</p>
          <p className="text-lg text-gray-700 mobile:text-base">
            India's leading Crypto Currency based web application.
          </p>
          <p className="text-lg text-gray-700 mobile:text-base">
            Invest in genuine Crypto Currency in One-Click for a better future.
          </p>
          <div>
            {state ? (
              <button
                className="my-5 text-2xl font-semibold bg-gray-800 hover:bg-black text-gray-50 rounded-md px-5 py-2 mobile:text-xl hidden"
                onClick={() => history.push("/register")}
              >
                Register Now
              </button>
            ) : (
              <button
                className="my-5 text-2xl font-semibold bg-gray-800 hover:bg-black text-gray-50 rounded-md px-5 py-2 mobile:text-xl"
                onClick={() => history.push("/register")}
              >
                Register Now
              </button>
            )}
          </div>
        </div>
        <div className="mt-12 mobile:mt-2">
          <TrendCarsoule />
        </div>
      </div>
    </div>
  );
};

export default Header;
