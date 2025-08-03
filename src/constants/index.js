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

      name: "Home",
      link: "#home"
    },
      {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
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
      imgPath: "src/public/images/web.png",
      title: "Web Design",
      desc: "We use the latest design trends and always start by getting to know the people behind the brand. For us, it’s all about mixing creativity with technical precision to create standout User Interface designs—again and again. ",
    },  
    {    
      imgPath: "src/public/images/code.png",
      title: "Web Development",
      desc: "Every website is built from the ground up using the latest tools to create a fully custom design tailored to your brand and goals. With clean, modern code and fully responsive layouts, each site performs seamlessly across desktop, mobile, and tablet devices"
    },
      {
      imgPath: "src/public/images/react.png",
      title: "Latest Technology",
      desc: "Your website will be built with React—the same fast, dynamic tech used by Facebook, Instagram, and Netflix. It’s perfect for creating smooth, interactive experiences that load quickly and run seamlessly as your business grows."
    },
    {
      imgPath: "src/public/images/time.png",
      title: "Brand Design",
      imgPath: "src/public/images/layers.png",
      desc: "Top-quality branding including logo design and colour palette selections to incorporate into your web build."
    },
    {
      imgPath: "src/public/images/news.png",
      title: "Content Creation",
      desc: "I bring professional, high-quality writing experience—having been published in major newspapers—and tailor content specifically to your needs.",
    },
    {
      imgPath: "src/public/images/security.png",
      title: "Quality & Security",
      desc: "We carefully check every part of your website on all devices to ensure it looks amazing and works smoothly. We build websites with security in mind—using best practices to protect.",
    },
    {
      imgPath: "src/public/images/google.png",
      title: "Performance Optimization",
      desc: "Search Engine Optimization (SEO) helps your website show up when people search online. Using React technology, we build fast, efficient sites that perform better in Google search results—helping you stay ahead of the competition.",
    },
    {
      imgPath: "src/public/images/service.png",
      title: "Web Maintenance & Support",
      desc: "By offering ongoing support and maintenance your site is secure, updated, and performing at its best—even after it’s live.",
    },
    {
      imgPath: "src/public/images/quick-response.png",
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
      review: "New technology helps shape what we deliver. By taking a patient methodical approach to our work, this forward thinking mindset opens the space of necessary calmness to let creativity flow.",
      imgPath: "",
      logoPath: "src/public/images/letter-r.png",
      title: "The Creative Studio",
      date: "",
      responsibilities: [
        "Reakt Web Design offers a fresh, high-performance approach to building interactive, React-powered websites",
        "A fan of first principles thinking — tackling challenges from the ground up to deliver smarter solutions",
        "I'm always exploring the latest tech, It’s the driving force behind websites that stand out",
      ],
    },
    {
      review: "Your brand’s image is everything — I get that. That's why a client-centric approach is a key part of what makes each project successful.",
      logoPath: "src/public/images/horn.png",
      title: "A Unique Brand",
      date: "",
      responsibilities: [
        "Trusting a developer with your brand is a big decision",
        "It is an awesome responsibility for me to bridge the gap between your company and its audience",
        "You get agency-level web design without the agency-sized price tag",
        
      ],
    },
    {
      review: "I got into this to do what I love. I'm dedicated to developing the most creative websites while enjoying every step of the journey.",
      imgPath: "",
      logoPath: "src/public/images/react.png",
      title: "Our Philosophy",
      date: "",
      responsibilities: [
        "We’re here to have a blast and create some pretty cool stuff",
        "Every project is an opportunity to showcase creative flair and deliver exceptional React development",
        "I’m passionate about my work, and I want you to enjoy the process as much as I enjoy bringing your project to life",
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
  
