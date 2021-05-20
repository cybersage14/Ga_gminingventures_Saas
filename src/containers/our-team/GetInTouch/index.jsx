import React, { useState } from "react";

import Modal from "../../../components/Modal";
import GradientButton from "../../../components/gradientButton";
import * as styles from "./index.module.scss";

const GetInTouch = () => {
  const [thankModal, setThankModal] = useState(false);

  const subscribeHandler = (e) => {
    e.preventDefault();
    setThankModal(true);
  };

  return (
    <div className="px-4 xl:px-0 pb-12">
      {thankModal && <Modal onClose={() => setThankModal(false)} />}
      <form
        onSubmit={subscribeHandler}
        className={`${styles.footerOverly} px-5 text-center mx-auto max-w-6xl py-8 bg-gray-300 z-20 rounded-lg`}
      >
        <h3 className=" text-secondary uppercase pb-2">GET IN TOUCH</h3>
        <div className="flex flex-col lg:flex-row gap-8 py-4 font-xs">
          <input
            type="text"
            placeholder="NAME"
            className={`bg-transparent ${styles.input} pb-1 pl-2 flex-1 outline-none`}
          />
          <input
            type="text"
            placeholder="EMAIL ADDRESS"
            className={`bg-transparent ${styles.input} pb-1 pl-2 flex-1 outline-none`}
          />
        </div>
        <div className="pt-4 mb-6 lg:mb-16 font-xs">
          <input
            type="text"
            placeholder="MESSAGE"
            className={`bg-transparent ${styles.input} pb-1 pl-2 flex-1 w-full outline-none`}
          />
        </div>
        <div className="flex justify-center">
          <GradientButton long>SUBMIT</GradientButton>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
