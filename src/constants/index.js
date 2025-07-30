{/* export const words = [
    { text: 'Ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Code', imgPath: '/images/concepts.svg' },
    { text: 'Designs', imgPath: '/images/concepts.svg' },
    { text: 'Ideas', imgPath: '/images/concepts.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Code', imgPath: '/images/concepts.svg' },
    { text: 'Designs', imgPath: '/images/concepts.svg' }
] */}

const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Experience",
      link: "#experience",
    },
   
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "src/public/images/ideas.svg" },
    { text: "Concepts", imgPath: "src/public/images/concepts.svg" },
    { text: "Designs", imgPath: "src/public/images/designs.svg" },
    { text: "Code", imgPath: "src/public/images/code.svg" },
    { text: "Projects", imgPath: "src/images/ideas.svg" },
    { text: "Visions", imgPath: "/images/concepts.svg" },
    { text: "Sketches", imgPath: "/images/designs.svg" },
    { text: "Templates", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 10, suffix: "+", label: "Years in Technology" },
    { value: 98, suffix: "%", label: "Qualification in Front-End Engineering" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 99, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {    
      imgPath: "src/public/images/earth.png",
      title: "Web Design",
      desc: "We use the latest design trends and always start by getting to know the people behind the brand. For us, it’s all about mixing creativity with technical precision to create standout designs—again and again. ",
    },  
    {    
      imgPath: "src/public/images/programming.png",
      title: "Web Development",
      desc: "Our skilled developers work with the latest tech to build fast, modern websites that are completely custom—no templates, no copy-paste. Every site is built with clean code so it stands out and runs smoothly."
    },
      {
      imgPath: "src/public/images/react.png",
      title: "Latest Technology",
      desc: "Your website will be built with React—the same fast, dynamic tech used by Facebook, Instagram, and Netflix. It’s perfect for creating smooth, interactive experiences that load quickly and run seamlessly as your business grows."
    },
    {
      imgPath: "src/public/images/time.png",
      title: "Logo Design",
      imgPath: "src/public/images/design.png",
      desc: "Top-quality logo design that’s yours to keep—forever. You’ll get a custom logo that looks great everywhere, complete with all the file formats you need for any use."
    },
    {
      imgPath: "src/public/images/pen.png",
      title: "Content Creation",
      desc: "Our copywriters have been published in major newspapers and deliver professional, high-quality content tailored to your needs.",
    },
    {
      imgPath: "src/public/images/quality.png",
      title: "Quality & Security",
      desc: "We carefully check every part of your website on all devices to ensure it looks amazing and works smoothly. We build websites with security in mind—using best practices to protect.",
    },
    {
      imgPath: "src/public/images/seo1.png",
      title: "Performance Optimization",
      desc: "Search Engine Optimization (SEO) helps your website show up when people search online. Using React technology, we build fast, efficient sites that perform better in search results—helping you stay ahead of the competition.",
    },
    {
      imgPath: "src/public/images/bubble.png",
      title: "Web Maintenance & Support",
      desc: "By offering ongoing support and maintenance your site is secure, updated, and performing at its best—even after it’s live.",
    },
    {
      imgPath: "src/public/images/time-clock.png",
      title: "Delivered on Time",
      desc: "100% of projects are delivered on time, with a strong focus on quality and attention to detail.",
    },
    
  ];
  
  const techStackImgs = [
    {
      name: "React",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Node JS",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Three JS",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Agile",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Development",
      modelPath: "src/public/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Development",
      modelPath: "src/public/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Node JS",
      modelPath: "src/public/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Three.JS",
      modelPath: "src/public/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Agile Project Management",
      modelPath: "src/public/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "src/public/images/exp1.png",
      logoPath: "src/public/images/react.png",
      title: "The Creative Agency",
      date: "",
      responsibilities: [
        "Reakt Web is the alternative high-performance web development agency",
        "We bring creativity to the table to bring your ideas to life",
        "Our websites are visually striking and built to perform. It's what drives us",
      ],
    },
    {
      review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "src/public/images/exp2.png",
      logoPath: "src/public/images/logo2.png",
      title: "The Unique Agency",
      date: "",
      responsibilities: [
        "We do not settle for boring, our designs are unique and vibrant",
        "Specialists at building custom websites for small businesses and startups looking to stand out online",
        "Our value for money makes us an ideal partner for new & existing businesses"
      ],
    },
    {
      review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
      imgPath: "src/public/images/exp3.png",
      logoPath: "src/public/images/react.png",
      title: "The Credible Agency",
      date: "",
      responsibilities: [
        "Our Lead Developer brings over a decade of IT expertise and a sharp eye for quality",
        "A certified developer with a 98% score in React Web Development",
        "We have the skills and keep things simple and enjoyable for you",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "src/public/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "src/public/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "src/public/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "src/public/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "src/public/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "src/public/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "src/public/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "src/public/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "src/publi/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };
  
