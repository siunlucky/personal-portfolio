"use client";

import { certificatesData } from "@/lib/data";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


type CertificateProps = (typeof certificatesData)[number];

const Certificate = ({
    title,
    description,
    date,
    link,
    imageUrl
}: CertificateProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const handleDownload = () => {
        window.location.href = `/${link}`;
    }

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="mb-3 group sm:mb-8 last:mb-0"
        >
            <section
                className="bg-gray-100 cursor-pointer max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
                onClick={handleDownload}
            >
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
                        {date}
                    </ul>
                </div>

                <Image
                    src={imageUrl}
                    alt="Project I worked on"
                    quality={95}
                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                />
            </section>
        </motion.div>
    );
}

export default Certificate;