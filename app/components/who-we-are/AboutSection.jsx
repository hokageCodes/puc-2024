"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Use Next.js Image for optimization and lazy loading

const slideInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInVariants}
    >
      <div className="mt-12 relative bg-white py-16" id="about-us">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-textPrimary space-y-6">
              <h2 className="text-4xl mt-[20px] lg:text-5xl font-bold my-2 mt-24">Who We Are</h2>
              <p className="text-md text-textDark lg:text-lg">
                Paul Usoro & Co. (PUC) is a leading full-service law firm, providing top-notch legal services to both local and
                international clients. We hold our clients in high esteem, providing them with sound legal advice and innovative
                business solutions.
              </p>
              <div>
                <button className="bg-[#01553d] text-white hover:bg-ctaHover rounded-md px-6 py-3 transition duration-300 ease-in-out">
                  <a href="/pre-register">Read More</a>
                </button>
              </div>
            </div>
            
            {/* Image Content with Skeleton Loading */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="transform -rotate-6 hover:rotate-0 transition duration-500">
                <Image
                  src="/assets/img/who-we-are.jpg" // Use absolute path for next/image
                  alt="About the Law Firm"
                  width={600}
                  height={600}
                  className="rounded-xl shadow-2xl"
                  placeholder="blur" // Enable the blur placeholder
                  blurDataURL="/assets/img/skeleton-placeholder.jpg" // Skeleton blur image
                  loading="lazy" // Lazy load the image
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
