import React from "react";
import serviceStyle from "./service.module.css";
import Link from "next/link";

const servicePage = () => {
  return (
    <div>
      <h1 className={serviceStyle.service}>Our Service Page</h1>
      <center>
        <span className={serviceStyle.heading2}>Nested Pages</span>
        <br />
        <div className={serviceStyle.nested}>
        <h2><Link href="services/web-development" target="_blank">Web-development Page</Link></h2>
        <h2><Link href="services/app-development" target="_blank">App-development Page</Link></h2>
        </div>
      </center>
      <p id="paragraph">
        We specialize in creating dynamic, responsive, and user-friendly web
        solutions tailored to meet your business needs. Leveraging cutting-edge
        technologies like Next.js, TypeScript, and Tailwind CSS, we ensure every
        project is crafted with precision, performance, and scalability in mind.
        Whether you need a sleek landing page, a full-scale e-commerce platform,
        or a custom web application, we bring expertise and a keen eye for
        design to every step of the process. Let us help you build a digital
        presence that stands out and engages your audience effectively.
      </p>
    </div>
  );
};

export default servicePage;
