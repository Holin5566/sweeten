import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IconButton } from "@material-tailwind/react";
import OnlineHelp from "./OnlineHelp";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingBt = () => {
  const [openOnlineHelp, setOpenOnlineHelp] = useState(false);
  return (
    <>
      <AnimatePresence>
        {openOnlineHelp ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="fixed right-0 z-50 bg-white border-2 rounded-sm  top-100 md:right-10 border-line"
          >
            <motion.h5>
              <OnlineHelp />
            </motion.h5>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>

      {/* <div className="fixed z-50 overflow-hidden rounded-full  bottom-3 bg-primary right-3">
        <motion.IconButton
          onClick={() => {
            setOpenOnlineHelp(!openOnlineHelp);
          }}
        >
          <IconButton variant="text" className="">
            <RiCustomerService2Fill className="icon-lg" color="gray" />
          </IconButton>
        </motion.IconButton>
      </div> */}

      {/* {openOnlineHelp ? <CustomerService /> : <></>}
      <div className="fixed rounded-full  bottom-3 bg-primary right-3">
        <IconButton
          variant="text"
          onClick={() => {
            setOpenOnlineHelp(!openOnlineHelp);
          }}
        >
          <RiCustomerService2Fill className="icon-lg" color="gray" />
        </IconButton>
      </div> */}
    </>
  );
};

export default FloatingBt;
