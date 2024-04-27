"use client";
import React from "react";
import { motion } from "framer-motion";
const Instruction = () => {
  return (
    <div className="w-full mt-[20px] bg-muted/20 flex justify-center items-center mb-[100px]">
      <div className="px-[20px] w-[min(1400px , 85%)] py-[70px] flex  flex-col justify-center gap-[40px]">

        <motion.div initial={{ opacity: 0, scale:0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{ duration: 0.7, type: "Spring", bounce: 0.4 , delay:0.1 }} className="flex relative w-[min(1250px,79vw)] z-[0] border-[3px] rounded-[16px] flex-col">
          <div className="w-full h-[50px]"></div>
          <div className="relative bg-[#0f0e10] z-[10000] px-[100px]  w-[105%] min-h-[90px] left-[-30px] flex justify-between items-end">
            <h1 className="text-4xl font-[470]">Upload</h1> 
            <h2  className="text-md max-w-[50%] font-[500]">Choose a video file that you want to analyze and upload it in the
            "Detection" section. The videos should be within 20-30 MB in size
            and should be in MP4 format</h2>
          </div>
          <div className="w-full h-[50px]"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale:0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{ duration: 0.7, type: "Spring", bounce: 0.4 , delay:0.2 }}  className="flex relative w-[min(1250px,79vw)] z-[0] border-[3px] rounded-[16px] flex-col">
          <div className="w-full h-[50px]"></div>
          <div className="relative bg-[#0f0e10] z-[10000] px-[100px]  w-[105%] min-h-[90px] left-[-30px] flex justify-between items-end">
          <h1 className="text-4xl font-[470]">AI Analysis</h1> 
            <h2  className="text-md max-w-[50%] font-[500]">The uploaded videos undergo thorough analysis by AI algorithms to detect any signs of manipulation or deepfake content.</h2> 
          </div>
          <div className="w-full h-[50px]"></div>
        </motion.div>


        <motion.div initial={{ opacity: 0, scale:0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{ duration: 0.7, type: "Spring", bounce: 0.4 , delay:0.3 }}  className="flex relative w-[min(1250px,79vw)] z-[0] border-[3px] rounded-[16px] flex-col">
          <div className="w-full h-[50px]"></div>
          <div className="relative bg-[#0f0e10] z-[10000] px-[100px]  w-[105%] min-h-[90px] left-[-30px] flex justify-between items-end">
          <h1 className="text-4xl font-[470]">Report Review</h1> 
            <h2 className="text-md max-w-[50%] font-[500]">Users receive detailed reports generated by the AI analysis, enabling them to review and interpret the findings to assess the authenticity of the video content. </h2>  
          </div>
          <div className="w-full h-[50px]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Instruction;
