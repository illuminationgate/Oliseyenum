// Import images so they are processed correctly
import project1 from "@/assets/images/projects/single-project.jpg";
import project2 from "@/assets/images/projects/single-project1.jpg";
import project3 from "@/assets/images/projects/single-project2.jpg";
import project4 from "@/assets/images/projects/single-project3.jpg";
import project5 from "@/assets/images/projects/single-project4.jpg";
import project6 from "@/assets/images/projects/work6.jpg";
import project7 from "@/assets/images/projects/work5.jpg";
import project8 from "@/assets/images/projects/work4.jpg";

export const portfolio_data = [
  {
    id: 1,
    img: project1,
    category: "SaaS Web App",
    title: "Verity: A WhatsApp Marketing Platform",
    description:
      "Verity is a robust Software as a Service (SaaS) platform I developed to help businesses streamline their WhatsApp marketing and communication efforts. The primary problem it solves is the manual and time-consuming process of engaging with customers on WhatsApp, a popular messaging platform. My role was to architect and build the full-stack application, ensuring it was scalable, secure, and intuitive for users with varying technical backgrounds. The platform includes key features such as bulk message sending, campaign management, and a powerful chat bot for automated responses. A major challenge was integrating with the WhatsApp Cloud API while managing a complex database schema to handle user data, campaign analytics, and CRM functionalities. The final product is a comprehensive tool that empowers small and large businesses to leverage WhatsApp for growth and customer retention.",
    technologies: "PHP (Laravel), MySQL, JavaScript, cURL, and others.",
    client: "verity",
    date: "Q3 2025",
    url: "whatsapp.igatehub.com",
  },
  {
    id: 2,
    img: project2,
    category: "Website",
    title: "Branding Company Website",
    description:
      "A static website for a branding company, showcasing their services and portfolio. The site was designed to be clean, modern, and fully responsive to provide an excellent user experience on any device.",
    technologies: "HTML, CSS, JavaScript.",
    client: "Branding Agency",
    date: "Q4 2024",
    url: "slyvaconsults.com.ng",
  },
  {
    id: 3,
    img: project3,
    category: "Web App",
    title: "WhatsApp Business Chat",
    description:
      "An efficient application for creating an automated auto-reply system for WhatsApp Business accounts. This project was built to help small businesses manage customer inquiries more effectively and save time. It automates common responses and can be customized with business-specific rules.",
    technologies: "PHP.",
    client: "Local Business",
    date: "Q2 2025",
    url: "whatsappchat.igtehub.com",
  },
  {
    id: 4,
    img: project4,
    category: "Website",
    title: "Heavenzarom",
    description:
      "A website for a cleaning service company based in Canada. The site includes a full-featured booking management system, allowing customers to schedule services online. The user interface was designed for ease of use, and the backend handles all scheduling and client data.",
    technologies:
      "HTML, CSS, JavaScript (Frontend), PHP (Backend for bookings).",
    client: "Heavenzarom",
    date: "Q3 2024",
    url: "cleaning.heavenzarom.com",
  },
  {
    id: 5,
    img: project5,
    category: "Website",
    title: "Courier Company",
    description:
      "A website for a courier company that allows customers to track their shipments in real time. The site's core functionality is a robust tracking system, which provides customers with up-to-date information on their package's location and delivery status. The design is clean and focused on user experience.",
    technologies: "PHP.",
    client: "Logistic Solutions Inc.",
    date: "Q2 2025",
    url: "igcourier.igatehub.com",
  },
  {
    id: 6,
    img: project6,
    category: "Website",
    title: "Church website",
    description:
      "A static website with a dynamic blog feature, built for a local church. The site provides information about services, events, and community outreach. The blog, powered by Supabase, allows administrators to easily post new content without needing to edit the code directly.",
    technologies:
      "HTML, CSS, JavaScript (Frontend), Supabase (Backend for blog).",
    client: "Potter's Embassy",
    date: "Q2 2024",
    url: "tpe.org.ng",
  },
  {
    id: 7,
    img: project7,
    category: "Web App",
    title: "Personal Portfolio Website",
    description:
      "This is my personal portfolio, a reflection of my skills as a web designer and developer. It showcases my projects, skills, and professional background. Built with modern frameworks for a fast, responsive, and visually appealing user experience.",
    technologies: "React, Next.js.",
    client: "Self-Project",
    date: "Q3 2025",
    url: "olise.igatehub.com",
  },
  {
    id: 8,
    img: project8,
    category: "Website",
    title: "Illumination Gate Global Service",
    description:
      "A comprehensive tech website for Illumination Gate Global Service, a technology solutions provider. The site serves as a digital storefront, detailing their services, mission, and contact information. The entire site is built on the Laravel framework for robust performance and security.",
    technologies: "Laravel.",
    client: "Illumination Gate",
    date: "Q1 2024",
    url: "igatehub.com",
  },
];
