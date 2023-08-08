import React from "react";
import { FaReact, FaSuitcase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import netflix from "@/public/netflix-clone.png";
import ecommerceAdmin from "@/public/ecommerce-admin.png";
import ecommerceStore from "@/public/ecommerce-store.png";
import digiupTelkomCertificate from "@/public/digiup-telkom-certificate.png";
import dotCertificate from "@/public/dot-certificate.png";
import ukbiCertificate from "@/public/ukbi-certificate.png";
import englishPaperBasedTestCertificate from "@/public/englishFirst-certificate.png";

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
      "I did an internship in an IT Support position for 6 months at PT Telkom Indonesia",
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
    title: "Telkom University",
    location: "Bandung, Indonesia",
    description:
      "I'm now a student of Telkom University, majored in S1 Informatics. and I'am a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Laravel, Tailwind, Prisma and MongoDB. I'am familiar with CodeIgniter and PHP Native. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
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
  },
  {
    title: "Ecommerce Admin",
    description:
      "This is my ecommerce admin project for handling many ecommerce websites",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "PlanetScale"],
    imageUrl: ecommerceAdmin,
  },
  {
    title: "Ecommerce Store",
    description:
      "A public ecommerce store web app for showing and selling product. It connected and controlled using API from my ecommerce Admin project.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: ecommerceStore,
  },
] as const;

export const certificatesData = [
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

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
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
