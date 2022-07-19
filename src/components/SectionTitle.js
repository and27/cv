import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ mainTitle, backgroundTitle }) => {
  const item = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.1,
      },
    },
  };
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            color: "#eeeeee",
            zIndex: "0",
            top: "-80%",
            letf: "5%",
          }}
        >
          <h3
            className="back-titles"
            style={{ fontSize: "150px", zIndex: "-1", position: "relative" }}
          >
            {backgroundTitle}
          </h3>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={item}>
            <h1
              className="py-2 title-cv"
              style={{ zIndex: "1", position: "relative" }}
            >
              {mainTitle}
            </h1>
          </motion.div>
        </motion.div>
        <hr
          width="25px"
          style={{
            margin: "0px auto 30px auto",
            border: "2px solid black",
          }}
        />
      </div>
    </>
  );
};

export default SectionTitle;
