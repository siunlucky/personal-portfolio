"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { certificatesData } from "@/lib/data";
import React from "react";
import Certificate from "@/components/certificate";

const Certificates = () => {
    const { ref } = useSectionInView("Certificates");

    return (
        <motion.section
            id="certificates"
            ref={ref}
            className="scroll-mt-28 mb-28"
        >
            <SectionHeading>My Certificates</SectionHeading>
            <div>
                {certificatesData.map((certificate, index) => (
                    <React.Fragment key={index}>
                        <Certificate {...certificate} />
                    </React.Fragment>
                ))}
            </div>
        </motion.section>
    );
}

export default Certificates;