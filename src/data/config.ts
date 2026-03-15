const config = {
  title: "I'm Aditya | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Aditya, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Aditya, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Aditya",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Aditya Singh",
  email: "adsingh9082@gmail.com",
  site: "https://imhuzaifportfolio.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/Aditya-singh9082",
    linkedin: "https://www.linkedin.com/in/aditya-singh-024553375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/aditya.exe_19/",
  },
};
export { config };
