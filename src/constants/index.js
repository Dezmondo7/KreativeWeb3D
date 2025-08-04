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

import letterRlogo from '../../assets/letter-r.png'

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
      desc: "I mix creativity with technical precision to craft standout UI designs that are tailored towards delivering an outstanding user journey for your customers. ",
    },  
    {    
      imgPath: "src/public/images/code.png",
      title: "Web Development",
      desc: "Every website is uniquely coded, no templates, no copy paste designs. I code everything from scratch to reflect your brand and goals. With clean, modern code and fully responsive layouts, each site performs seamlessly across desktop, mobile, and tablet devices."
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
      desc: "We carefully check every part of your website on all devices to ensure it looks amazing and works smoothly. All websites are built with security in mind—using best practices to protect.",
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
      review: "New technology helps shape what we deliver. By taking a calm and methodical approach to work, this forward thinking mindset opens the space of necessary calmness to let creativity flow.",
      imgPath: "",
      logoPath: letterRlogo,
      title: "The Creative Studio",
      date: "",
      responsibilities: [
        "Reakt Web Design offers a fresh approach to building interactive high performance websites powered by React",
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
      name: "Luke",
      mentions: "",
      review:
        "Dale exceeded all expectations. He transformed our intricate project needs into a smooth, fully operational website. His knack for solving tough challenges is truly impressive.",
      imgPath: "",
    },
    {
      name: "Amanda",
      mentions: "",
      review:
        "Collaborating with Dale was an absolute pleasure. He took our old, outdated site and rebuilt it into a sleek, intuitive platform. His precision and dedication to excellence set him apart. I strongly recommend him for any web development work.",
      imgPath: "",
    },
    {
      name: "Graham",
      mentions: "",
      review:
        "Working with Dale was a genuinely rewarding experience. His professionalism, responsiveness, and unwavering commitment to excellence shone through at every stage of the project. What truly sets him apart is his passion for all aspects of development. If you're looking to enhance your website and strengthen your brand, Dale is the perfect choice.",
      imgPath: "",
    },
    {
      name: "Marcus",
      mentions: "",
      review:
        "Dale was great to work with from start to finish. He revamped our old website into a clean, user-friendly experience that feels current and easy to use. The end result was truly impressive.",
      imgPath: "",
    },
    {
      name: "Sam ",
      mentions: "",
      review:
        "Dale's web development skills are outstanding. He built a powerful platform for us, and we've seen a noticeable boost in performance since going live. His professionalism and expertise are second to none!",
      imgPath: "",
    },
    {
      name: "Claire",
      mentions: "",
      review:
        "Dale was fantastic to work with. He grasped our needs right away and delivered a website that went above and beyond what we envisioned. His expertise in both frontend development is exceptional.",
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
  
