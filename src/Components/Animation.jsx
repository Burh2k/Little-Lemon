import React from "react";
import { motion } from "framer-motion";


export default function Anime({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 500 }} // Intro of animation
            animate={{ opacity: 1, x: 0 }} // Complete Animation at peak
            exit={{ opacity: 0, x: 500 }} // Outro of animation
        // transition={{ duration: 1 }} // Duration of the animation
        >
            {children}
        </motion.div>
    );
}