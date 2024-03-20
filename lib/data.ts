import React from "react";
import { FaSuitcase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import netflix from "@/public/netflix-clone.png";
import ecommerceAdmin from "@/public/ecommerce-admin.png";
import ecommerceStore from "@/public/ecommerce-store.png";
import digiupTelkomCertificate from "@/public/Certificate/digiup-telkom-certificate.png";
import dotCertificate from "@/public/Certificate/dot-certificate.png";
import ukbiCertificate from "@/public/Certificate/ukbi-certificate.png";
import englishPaperBasedTestCertificate from "@/public/Certificate/englishFirst-certificate.png";
import hackerrankProblemSolvingBasicCertificate from "@/public/Certificate/hackerrank-problemsolving-certificate.jpg";
import hackerrankPyhtonBasicCertificate from "@/public/Certificate/hackerrank-pyhton-certificate.jpg";
import dicodingDasarManajemenProyekCertificate from "@/public/Certificate/dicoding-dasarmenajemenproyek-certificate.jpg";
import dicodingProgrammingSoftwareBasicCertificate from "@/public/Certificate/dicoding-programmingsoftwarebasic-certificate.jpg";
import dicodingStructuredQueryLanguageCertificate from "@/public/Certificate/dicoding-structuredquerylanguage-certificate.jpg";
import indobotWebinarIoTCreationSmartUtilitiesCertificate from "@/public/Certificate/indobot-webinar-25-07-2022-certificate.jpg";
import indobotWebinarIoTDevelopmentsinIndonesiaVsGlobalCertificate from "@/public/Certificate/indobot-webinar-01-08-2022-certificate.jpg";
import indobotWebinarIoTCreationSmartAgricultureandFarmingCertificate from "@/public/Certificate/indobot-webinar-08-08-2022-certificate.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship at Telkom Akses",
    location: "South Jakarta, Indonesia",
    description:
      "I did an internship at PT Telkom Indonesia as IT Support position for 6 months",
    icon: React.createElement(FaSuitcase),
    date: "June 2022 - November 2022",
  },
  {
    title: "Telkom Malang Vocational High School",
    location: "Malang, Indonesia",
    description:
      "I graduated after 3 years of studying. I continued my studies at Telkom University and majored in S1 Informatics.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023",
  },
  {
    title: "Internship at AjakJago",
    location: "Jakarta, Indonesia",
    description:
      "I did a remote internship at AjakJago as Web Developer position for 4 months",
    icon: React.createElement(FaSuitcase),
    date: "September 2023 - December 2023",
  },
  {
    title: "Telkom University",
    location: "Bandung, Indonesia",
    description:
      "I'm now a student of Telkom University, majored in S1 Informatics. and I'am a full-stack developer working as a freelancer. My stack includes Next.js, TypeScript, Laravel, Tailwind, Prisma and MongoDB. I'am familiar with CodeIgniter and PHP Native. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2023 - present",
  }
] as const;

export const projectsData = [
  {
    title: "Netflix Clone",
    description:
      "This is my Netflix Clone project",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma", "MongoDB"],
    imageUrl: netflix,
    url: "https://netflix-clone-nextjs-iota.vercel.app"
  },
  {
    title: "Ecommerce Admin",
    description:
      "This is my ecommerce admin project for handling many ecommerce websites",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "PlanetScale"],
    imageUrl: ecommerceAdmin,
    url: "https://faiz-ecommerce-admin.vercel.app"
  },
  {
    title: "Ecommerce Store",
    description:
      "A public ecommerce store web app for showing and selling product. It connected and controlled using API from my ecommerce Admin project.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: ecommerceStore,
    url: "https://faiz-ecommerce-store.vercel.app"
  },
] as const;

export const certificatesData = [
  {
    title: "Webinar IoT Creation Smart Utilities Indobot",
    description: "This is a certificate of Webinar IoT Creation Smart Utilities from Indobot.",
    date: "July 25, 2022",
    link: "Certificate/FaizElfahadKurniawan-WebinarIoTCreationSmartUtilities-Indobot.pdf",
    imageUrl: indobotWebinarIoTCreationSmartUtilitiesCertificate
  },
  {
    title: "Webinar IoT Developments in Indonesia Vs Global Indobot",
    description: "This is a certificate of Webinar IoT Developments in Indonesia Vs Global from Indobot.",
    date: "August 01, 2022",
    link: "Certificate/FaizElfahadKurniawan-WebinarIoTDevelopmentsinIndonesiaVsGlobal-Indobot.pdf",
    imageUrl: indobotWebinarIoTDevelopmentsinIndonesiaVsGlobalCertificate
  },
  {
    title: "Webinar IoT Creation Smart Agriculture and Farming Indobot",
    description: "This is a certificate of Webinar IoT Creation Smart Agriculture and Farming from Indobot.",
    date: "August 08, 2022",
    link: "Certificate/FaizElfahadKurniawan-WebinarIoTCreationSmartAgricultureandFarming-Indobot.pdf",
    imageUrl: indobotWebinarIoTCreationSmartAgricultureandFarmingCertificate
  },
  {
    title: "English Paper Based Test (PBT)",
    description: "This is a certificate of English Paper Based Test from English First.",
    date: "January 25, 2023",
    link: "FaizElfahadKurniawan-EnglishPaperBasedTest-English First.pdf",
    imageUrl: englishPaperBasedTestCertificate
  },
  {
    title: "Uji Kemahiran Berbahasa Indonesia (UKBI)",
    description: "This is a certificate of competence in Indonesian Language from the Ministry of Education and Culture.",
    date: "February 04, 2023",
    link: "FaizElfahadKurniawan-UKBI-Kemendikbud.pdf",
    imageUrl: ukbiCertificate
  },
  {
    title: "DigiUp Telkom",
    description: "This is a certificate of the competence Junior Web Developer from Digiup Telkom using CodeIgniter Framework.",
    date: "February 15, 2023",
    link: "FaizElfahadKurniawan-JuniorWebDeveloper-DigiUp.pdf",
    imageUrl: digiupTelkomCertificate,
  },
  {
    title: "Desktop Office Training (DOT)",
    description: "Certificate of the competency test In Competency Of Laravel (Blade) with achievement level Very Competent",
    date: "April 11, 2023",
    link: "FaizElfahadKurniawan-LaravelBlade-DOT.pdf",
    imageUrl: dotCertificate,
  },
  {
    title: "Project Management (Basic) Dicoding",
    description: "This Certificate is from Dicoding after successfully cleared assessment for the skill of Project Management (Basic)",
    date: "August 25, 2023",
    link: "Certificate/FaizElfahadKurniawan-DasarManajemenProyek-Dicoding.pdf",
    imageUrl: dicodingDasarManajemenProyekCertificate,
  },
  {
    title: "Problem Solving (Basic) HackerRank",
    description: "This Certificate is from HackerRank after successfully cleared assessment for the skill of Problem Solving (Basic)",
    date: "September 1, 2023",
    link: "Certificate/FaizElfahadKurniawan-ProblemSolvingBasic-HackerRank.pdf",
    imageUrl: hackerrankProblemSolvingBasicCertificate,
  },
  {
    title: "Python (Basic) HackerRank",
    description: "This Certificate is from HackerRank after successfully cleared assessment for the skill of Pyhton (Basic)",
    date: "September 2, 2023",
    link: "Certificate/FaizElfahadKurniawan-PythonBasic-HackerRank.pdf",
    imageUrl: hackerrankPyhtonBasicCertificate,
  },
  {
    title: "Programming Software (Basic) Dicoding",
    description: "This Certificate is from Dicoding after successfully cleared assessment for the skill of Programming Software (Basic)",
    date: "September 7, 2023",
    link: "Certificate/FaizElfahadKurniawan-ProgrammingSoftwareBasic-Dicoding.pdf",
    imageUrl: dicodingProgrammingSoftwareBasicCertificate,
  },
  {
    title: "Structured Query Language (Basic) Dicoding",
    description: "This Certificate is from Dicoding after successfully cleared assessment for the skill of Structured Query Language (Basic)",
    date: "September 7, 2023",
    link: "Certificate/FaizElfahadKurniawan-StructuredQueryLanguage(SQL)Basic-Dicoding.pdf",
    imageUrl: dicodingStructuredQueryLanguageCertificate,
  },

  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Laravel",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Golang",
  "Framer Motion",
] as const;
