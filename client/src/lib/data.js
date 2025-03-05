import ServiceIcon1 from "../assets/image/serrviceIcons/icon1.png";
import ServiceIcon3 from "../assets/image/serrviceIcons/icon3.png";
import ServiceIcon4 from "../assets/image/serrviceIcons/icon4.png";
import ServiceIcon5 from "../assets/image/serrviceIcons/icon5.png";
import ServiceIcon6 from "../assets/image/serrviceIcons/icon6.png";
import ServiceIcon7 from "../assets/image/serrviceIcons/icon7.png";
import ServiceIcon8 from "../assets/image/serrviceIcons/icon8.png";
import Team1 from "../assets/team/1.jpg";
import Team2 from "../assets/team/2.jpg";
import Team3 from "../assets/team/3.jpg";
import Team4 from "../assets/team/4.jpg";
import BannerImg1 from "../assets/portfolio/banner1.png";
import BannerImg2 from "../assets/portfolio/banner2.png";
import BannerImg3 from "../assets/portfolio/banner3.png";
import BannerImg4 from "../assets/portfolio/banner4.png";
import BannerImg5 from "../assets/portfolio/banner5.png";
import BannerImg6 from "../assets/portfolio/banner6.png"; 
import TestimonialImage1 from "../assets/person/person-1.webp";
import TestimonialImage2 from "../assets/person/person-2.webp";
import TestimonialImage3 from "../assets/person/person-3.webp";
import TestimonialImage4 from "../assets/person/person-4.webp";
import TestimonialImage5 from "../assets/person/person-5.webp";
import TestimonialImage6 from "../assets/person/person-6.webp";

export const TestimonialData = [
  {
    name: "Jane Cooper",
    role: "Social Media Coordinator",
    image: TestimonialImage1,
    rating: ["★", "★", "★", "★", "☆"],
    review:
      "Orange Cap Media boosted our social media presence with dynamic video campaigns. Highly recommended!",
  },
  {
    name: "John Doe",
    role: "Marketing Manager",
    image: TestimonialImage2,
    rating: ["★", "★", "★", "★", "★"],
    review:
      "Their video production exceeded our expectations. Professional, creative, and impactful!",
  },
  {
    name: "Emily Johnson",
    role: "CEO",
    image: TestimonialImage3,
    rating: ["★", "★", "★", "★", "☆"],
    review:
      "Their strategic video marketing skyrocketed our engagement. Perfect execution!",
  },
  {
    name: "Michael Brown",
    role: "Content Director",
    image: TestimonialImage4,
    rating: ["★", "★", "★", "★", "★"],
    review:
      "Their content planning ensured high-quality videos that kept our audience engaged.",
  },
  {
    name: "Emily Johnson",
    role: "Brand Manager",
    image: TestimonialImage5,
    rating: ["★", "★", "★", "★", "☆"],
    review:
      "Their creative storytelling and production helped us connect with our audience.",
  },
  {
    name: "David Wilson",
    role: "Product Marketing Lead",
    image: TestimonialImage6,
    rating: ["★", "★", "★", "★", "★"],
    review:
      "Seamless experience! Their videos played a key role in our product launch.",
  },
];

export const projects = [
  {
    id: 1,
    title: "GlobalMapl - Business Growth Solutions",
    description:
      "Empowering businesses with digital strategies, agility, and innovation to stay ahead in a competitive market.",
    imageUrl: BannerImg1,
    href: "https://www.globalmapl.com",
    date: "March 15, 2024",
  },
  {
    id: 2,
    title: "360 Video for Cafe Zero Point",
    description:
      "Explore Cafe Zero Point in stunning 360-degree detail, giving you a complete view of its unique atmosphere, delicious treats, and inviting decor.",
    imageUrl: BannerImg2,
    href: "",
    date: "July 8, 2023",
  },
  {
    id: 3,
    title: "360° Video Showcase for Liquors and Lockers",
    description:
      "Immersive 360° video solutions to enhance liquor and locker presentations with interactive experiences.",
    imageUrl: BannerImg3,
    href: "",
    date: "November 22, 2024",
  },
  {
    id: 4,
    title: "Café Zero Point: Your Escape from the Ordinary",
    description:
      "Curated Experiences, Authentic Flavors. Step into an oasis of vibrant ambience, where our passionate team welcomes you with warm smiles. Unwind in luxury seating.",
    imageUrl: BannerImg4,
    href: "https://www.cafezeropoint.com",
    date: "April 5, 2025",
  },
  {
    id: 5,
    title: "Corporate Promotion Video for Fine Frag Private Limited",
    description:
      "A professionally crafted corporate video showcasing the brand identity, values, and achievements of Fine Frag Pvt Ltd.",
    imageUrl: BannerImg5,
    href: "",
    date: "September 18, 2023",
  },
  {
    id: 6,
    title: "Prop Metaverse Private Limited",
    description:
      "PROP METAVERSE is a 3-year-old company with a registered office in Pune, Maharashtra. 6 Key Management Personnel (KMPs) have been associated.",
    imageUrl: BannerImg6,
    href: "",
    date: "January 29, 2024",
  },
];

export const ServiceData = [
  {
    id: 1,
    title: "Website Design & Development",
    description:
      "We design and develop responsive, user-friendly websites that align with your brand identity and business goals. From simple landing pages to complex e-commerce platforms, we create websites that deliver seamless user experiences and drive conversions.",
    icon: ServiceIcon7,
    heroImage: "Img1", // Main image for the service details page
    paragraphs: [
      "Website Design & Development: A stunning, user-friendly, and high-performance website is the cornerstone of a strong digital identity. A well-crafted website is more than just an online presence; it is a powerful tool for attracting customers and building credibility. Our team ensures that your website is visually appealing, fully functional, and optimized for user engagement.",
      "We specialize in Custom Website Development, E-commerce & CMS Solutions, UI/UX-Optimized Designs, and Progressive Web Apps (PWAs). Our approach combines creativity, technology, and strategic planning to deliver websites that not only look great but also drive conversions and provide an exceptional user experience.",
      "Having a strong online presence is crucial in today's competitive digital landscape. Our website design and development services focus on creating sites that are optimized for search engines, load quickly, and are mobile-friendly. Whether you're a startup or an established brand, we help you achieve your business goals with a website that stands out.",
      "We use the latest technologies, including React.js, Next.js, and Tailwind CSS, to build dynamic, high-performance websites. Our expertise ensures that your site is scalable, secure, and designed with a user-first approach, making it an essential asset for your business growth.",
    ],
    features: [
      {
        icon: "check-icon", // Replace with your icon component or path
        title: "Custom Website Development",
        description:
          "Tailored websites that align with your brand identity and business needs, ensuring a unique and engaging user experience.",
      },
      {
        icon: "check-icon", // Replace with your icon component or path
        title: "E-commerce & CMS Solutions",
        description:
          "Scalable and secure e-commerce and content management solutions that enhance online transactions and content delivery.",
      },
      {
        icon: "check-icon",
        title: "UI/UX-Optimized Designs",
        description:
          "User-centric and visually appealing designs that enhance engagement and drive conversions.",
      },
      {
        icon: "check-icon",
        title: "Progressive Web Apps (PWAs)",
        description:
          "Fast, responsive, and app-like web experiences that improve accessibility and performance across all devices.",
      },
    ],
    additionalContent: [
      {
        title: "Enhancing Digital Identity",
        description:
          "A well-designed website serves as the foundation of your digital presence, offering seamless navigation and high performance. A strong website establishes trust with your audience, helping convert visitors into customers. We build visually engaging and feature-rich websites tailored to your needs.",
      },
      {
        title: "User-Centric & High-Performance",
        description:
          "Our websites are built with speed, responsiveness, and accessibility in mind, ensuring an optimal user experience. With our expertise in modern web technologies, we craft solutions that load fast, function smoothly, and keep your users engaged.",
      },
    ],
  },
  {
    id: 2,
    title: "Web & Mobile App Development",
    description:
      "We build innovative web and mobile applications that offer seamless performance and exceptional user experiences. Our solutions ensure fast, secure, and scalable apps tailored to your business needs, empowering your digital growth across platforms.",
    icon: ServiceIcon8,
    heroImage: "Img2", // Main image for the service details page
    paragraphs: [
      "Web & Mobile App Development: Transform ideas into reality with cutting-edge web applications and mobile apps that ensure an exceptional user experience and drive business growth. Our solutions are designed to be intuitive, efficient, and scalable, ensuring your business remains competitive in the digital age.",
      "We specialize in developing high-performance web and mobile applications using modern frameworks such as React.js, Next.js, and React Native. Whether you need a web portal, SaaS platform, or a mobile app for Android and iOS, our expert team delivers solutions tailored to your unique requirements.",
      "In today's fast-paced digital landscape, having a robust web or mobile application is essential for customer engagement and operational efficiency. Our solutions focus on performance, security, and scalability, ensuring that your app delivers an outstanding experience across all devices.",
      "We follow an agile development process, ensuring seamless collaboration, timely delivery, and continuous innovation. Our expertise extends across fintech, e-commerce, healthcare, and enterprise applications, making us the perfect technology partner for your business growth.",
    ],
    features: [
      {
        icon: "check-icon", // Replace with your icon component or path
        title: "Scalable Web Applications",
        description:
          "We build highly scalable web applications using the latest technologies, ensuring seamless performance and user engagement.",
      },
      {
        icon: "check-icon",
        title: "Cross-Platform Mobile Apps",
        description:
          "Developing mobile apps for both Android and iOS using React Native, ensuring a smooth and consistent experience.",
      },
      {
        icon: "check-icon",
        title: "Performance & Security",
        description:
          "Our applications are optimized for speed and security, ensuring safe transactions and data integrity.",
      },
      {
        icon: "check-icon",
        title: "Custom Business Solutions",
        description:
          "We create tailored applications that cater to unique business needs, enhancing productivity and customer satisfaction.",
      },
    ],
    additionalContent: [
      {
        title: "Driving Digital Transformation",
        description:
          "Our web and mobile apps empower businesses with robust digital solutions, streamlining processes and enhancing customer engagement.",
      },
      {
        title: "User-Friendly & High-Performance",
        description:
          "We prioritize user-centric designs and fast performance, ensuring that your applications stand out in a competitive market.",
      },
    ],
  },
  {
    id: 3,
    title: "Digital Branding",
    description:
      "We help businesses establish a strong digital presence through strategic branding and design. From logo creation to brand messaging, we develop visually compelling assets that resonate with your audience and enhance brand recognition.",
    icon: ServiceIcon4,
    heroImage: "Img3", // Main image for the service details page
    paragraphs: [
      "Digital Branding: Build a unique and compelling brand identity that resonates with your target audience. Our branding services ensure consistency, authenticity, and emotional connection, helping your business stand out in a crowded market.",
      "Your brand is more than just a logo—it's your identity, voice, and how customers perceive you. We craft brand experiences that communicate your values, mission, and story through impactful visuals and messaging.",
      "Our branding strategies focus on creating a lasting impression. Whether you're a startup or an established business, we refine and elevate your brand identity through professional design, storytelling, and market positioning.",
      "From designing logos to defining color palettes, typography, and brand guidelines, we ensure a cohesive digital presence across all platforms, helping you build trust and recognition in your industry.",
    ],
    features: [
      {
        icon: "check-icon",
        title: "Logo & Identity Design",
        description:
          "We create distinctive and memorable logos that reflect your brand personality and values.",
      },
      {
        icon: "check-icon",
        title: "Brand Messaging & Storytelling",
        description:
          "Developing a compelling brand voice that effectively communicates your mission and connects with your audience.",
      },
      {
        icon: "check-icon",
        title: "Visual Branding & Assets",
        description:
          "Crafting visually stunning brand assets, including social media graphics, business cards, and marketing materials.",
      },
      {
        icon: "check-icon",
        title: "Consistent Brand Experience",
        description:
          "Ensuring your brand maintains consistency across websites, social media, and digital platforms for maximum impact.",
      },
    ],
    additionalContent: [
      {
        title: "Elevate Your Brand Presence",
        description:
          "Our strategic branding solutions empower businesses to build credibility, enhance recognition, and leave a lasting impression.",
      },
      {
        title: "Comprehensive Branding Solutions",
        description:
          "From initial logo concepts to full brand identity development, we provide all the essentials for a strong and recognizable brand.",
      },
    ],
  },
  {
    id: 4,
    title: "Digital Marketing & SEO",
    description:
      "We craft data-driven digital marketing and SEO strategies to boost your online presence and customer engagement. By optimizing search rankings, running targeted ad campaigns, and leveraging social media, we help drive sustainable business growth.",
    icon: ServiceIcon6,
    heroImage: "Img4", // Main image for the service details page
    paragraphs: [
      "Digital Marketing & SEO: We craft data-driven marketing strategies that maximize reach, engagement, and conversions across digital platforms. Our tailored approach ensures your brand stands out in a competitive market, attracting the right audience for sustained growth.",
      "An effective digital presence is more than just visibility—it’s about meaningful interactions and measurable results. We leverage the latest SEO techniques, paid advertising, and social media strategies to drive traffic, increase conversions, and enhance brand awareness.",
      "Our expertise spans across multiple digital marketing channels, ensuring a comprehensive approach to growing your business. Whether it's improving organic search rankings, running high-performing PPC campaigns, or optimizing social media presence, we help you stay ahead of the competition.",
      "From keyword research to performance analytics, our marketing strategies are data-driven, ensuring every campaign is optimized for maximum impact and return on investment (ROI).",
    ],
    features: [
      {
        icon: "check-icon",
        title: "Search Engine Optimization (SEO)",
        description:
          "Improve organic visibility, optimize website performance, and rank higher on search engines like Google.",
      },
      {
        icon: "check-icon",
        title: "Search Engine Marketing (SEM)",
        description:
          "Maximize ROI with targeted paid advertising campaigns across Google Ads and Bing Ads.",
      },
      {
        icon: "check-icon",
        title: "Social Media Marketing (SMM)",
        description:
          "Engage your audience across Facebook, Instagram, LinkedIn, and Twitter with data-driven content strategies.",
      },
      {
        icon: "check-icon",
        title: "Pay-Per-Click Advertising (PPC)",
        description:
          "Create high-performing ad campaigns designed to generate leads, drive conversions, and increase brand visibility.",
      },
    ],
    additionalContent: [
      {
        title: "Boost Your Online Presence",
        description:
          "We use cutting-edge digital marketing strategies to enhance your brand’s visibility, engagement, and conversions.",
      },
      {
        title: "Data-Driven Marketing Approach",
        description:
          "Our campaigns are backed by in-depth analytics, ensuring continuous optimization and better performance.",
      },
    ],
  },
  {
    id: 5,
    title: "Digital Reputation Management",
    description:
      "We monitor, manage, and improve your online reputation to build trust and credibility. Our proactive approach includes handling customer reviews, enhancing brand perception, and mitigating negative feedback to maintain a strong digital image.",
    icon: ServiceIcon5,
    heroImage: "Img5", // Main image for the service details page
    paragraphs: [
      "Digital Reputation Management: Your brand’s online reputation is crucial. We proactively monitor, manage, and enhance your digital presence to build trust and credibility. A strong reputation not only improves customer confidence but also drives long-term business success.",
      "Online perception can make or break a brand. With social media, reviews, and online discussions shaping consumer trust, maintaining a positive digital presence is essential. Our expertise ensures that your brand is represented accurately and favorably across all platforms.",
      "We use a combination of reputation monitoring, customer feedback management, and strategic brand positioning to safeguard your online image. Whether it's handling negative reviews, addressing customer concerns, or promoting positive content, our approach strengthens your brand identity.",
      "By leveraging cutting-edge tools and proactive strategies, we help businesses maintain transparency, authenticity, and trust. From crisis management to long-term brand building, our solutions are designed to enhance your credibility and authority in the digital space.",
    ],
    features: [
      {
        icon: "check-icon",
        title: "Proactive Monitoring",
        description:
          "We track brand mentions, reviews, and feedback across multiple platforms to maintain a positive online presence.",
      },
      {
        icon: "check-icon",
        title: "Review & Feedback Management",
        description:
          "We handle customer feedback efficiently, promoting positive interactions and addressing concerns professionally.",
      },
      {
        icon: "check-icon",
        title: "Crisis & Reputation Recovery",
        description:
          "Mitigate negative feedback and implement strategies to rebuild and strengthen brand trust.",
      },
      {
        icon: "check-icon",
        title: "Brand Enhancement",
        description:
          "Enhance brand perception by creating and promoting positive, high-quality content about your business.",
      },
    ],
    additionalContent: [
      {
        title: "Maintain a Positive Online Image",
        description:
          "Our reputation management services ensure your brand remains trusted and well-regarded in the digital landscape.",
      },
      {
        title: "Build Long-Term Credibility",
        description:
          "Through strategic reputation management, we help businesses establish lasting trust with their audience.",
      },
    ],
  },
  {
    id: 6,
    title: "Audio-Visual & 360° Video Production",
    description:
      "We create high-quality video content and immersive 360° experiences that captivate audiences. From promotional videos to engaging brand storytelling, we bring your vision to life with visually stunning and compelling multimedia solutions.",
    icon: ServiceIcon1,
    heroImage: "Img6", // Main image for the service details page
    paragraphs: [
      "Audio-Visual Content Creation & 360° Videos: Video is the future of digital engagement. We produce compelling corporate videos, brand films, promotional videos, explainer animations, and immersive 360° experiences to captivate audiences. High-quality visuals help brands connect with their audience, leaving a lasting impression.",
      "In today’s fast-paced digital landscape, video content is the most powerful way to engage, educate, and inspire. From dynamic brand films to interactive 360° experiences, we create visually striking content that tells your story in a compelling way.",
      "Our expertise spans multiple formats, including motion graphics, product showcases, testimonial videos, and social media content. Whether you need high-impact promotional material or immersive experiences, our team ensures top-tier production quality and creative execution.",
      "By leveraging the latest video production techniques, we help businesses enhance their brand identity and communicate their message effectively. Our end-to-end solutions cover everything from concept development to post-production, delivering engaging, results-driven multimedia content.",
    ],
    features: [
      {
        icon: "check-icon",
        title: "High-Quality Video Production",
        description:
          "From scripting to editing, we produce professional-grade videos that align with your brand and marketing goals.",
      },
      {
        icon: "check-icon",
        title: "Engaging Storytelling",
        description:
          "We craft compelling narratives that resonate with audiences and create emotional connections with your brand.",
      },
      {
        icon: "check-icon",
        title: "Immersive 360° Video Experiences",
        description:
          "Enhance viewer engagement with interactive 360° videos that provide a unique and immersive experience.",
      },
      {
        icon: "check-icon",
        title: "Optimized for Digital Platforms",
        description:
          "Our videos are tailored for websites, social media, advertisements, and other digital channels to maximize reach.",
      },
    ],
    additionalContent: [
      {
        title: "Bring Your Brand to Life",
        description:
          "Through high-quality visuals and immersive storytelling, we help businesses showcase their brand in a captivating way.",
      },
      {
        title: "Engage & Inspire Audiences",
        description:
          "Our video content is designed to boost audience engagement, increase conversions, and enhance brand recognition.",
      },
    ],
  },
  {
    id: 7,
    title: "End-to-End Digital Solutions",
    description:
      "From conceptualizing strategies to executing powerful campaigns and continuously optimizing results, we ensure that your digital assets perform at their best, delivering measurable success.",
    icon: ServiceIcon3,
    heroImage: "Img7", // Main image for the service details page
    paragraphs: [
      "End-to-End Digital Solutions: A successful digital presence requires a well-structured strategy, seamless execution, and continuous optimization. We provide a holistic approach to digital transformation, ensuring that businesses leverage the latest technologies and data-driven insights to maximize their online impact.",
      "Our process begins with in-depth research and strategic planning, identifying the best digital channels and tactics to achieve your business goals. From website development and digital branding to performance marketing and analytics, we cover every aspect of your digital journey.",
      "With a strong focus on ROI, we craft campaigns that drive real business results. Whether it's boosting brand awareness, increasing lead generation, or enhancing customer engagement, our data-driven methodologies ensure continuous growth and success.",
      "We offer end-to-end solutions tailored to your business needs, helping you navigate the ever-evolving digital landscape with confidence. By combining creativity, technology, and analytics, we build scalable and sustainable digital strategies that fuel long-term success.",
    ],
    features: [
      {
        icon: "check-icon",
        title: "Comprehensive Digital Strategy",
        description:
          "We develop data-driven strategies tailored to your business objectives, ensuring sustainable digital growth.",
      },
      {
        icon: "check-icon",
        title: "Seamless Execution & Optimization",
        description:
          "Our team ensures flawless implementation and continuous improvement for maximum impact.",
      },
      {
        icon: "check-icon",
        title: "Performance Marketing & Analytics",
        description:
          "We leverage cutting-edge tools to track, analyze, and optimize your digital campaigns for measurable success.",
      },
      {
        icon: "check-icon",
        title: "Customized Digital Transformation",
        description:
          "Our solutions help businesses embrace digital transformation effectively, enhancing efficiency and customer experience.",
      },
    ],
    additionalContent: [
      {
        title: "Maximize Your Digital Potential",
        description:
          "We ensure that your digital presence is optimized for growth, engagement, and long-term success.",
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Our insights and analytics help businesses make informed decisions, leading to better performance and ROI.",
      },
    ],
  },
];

export const OurWorkProcess = [
  {
    id: "01",
    title: "Market Research",
    description:
      "We start by understanding your audience and industry. This helps us create videos and strategies that truly connect with your customers.",
  },
  {
    id: "02",
    title: "Strategy Development",
    description:
      "Next, we craft a tailored plan for your video marketing needs, whether it's video production, social media campaigns.",
  },
  {
    id: "03",
    title: "Implementation",
    description:
      "Our expert team brings the plan to life, producing high-quality videos and executing effective marketing campaigns across all platforms.",
  },
  {
    id: "04",
    title: "Analysis and Refinement",
    description:
      "Finally, we analyze the results and refine our strategies to ensure continuous improvement and maximum ROI for your business.",
  },
];

export const teamData = [
  {
    name: "Abhishek Sinha",
    role: "Managing Director",
    image: Team1,
    bio: "Entrepreneur and business strategist specializing in startup growth, revenue models, and business scalability. With 15+ years of corporate experience, he mentors businesses to achieve structured success.",
  },
  {
    name: "Jayati Sinha",
    role: "Co-Founder & Life Architect",
    image: Team3,
    bio: "Entrepreneur, culinary innovator, and advocate for women's empowerment. From corporate leadership to building thriving food ventures, she empowers aspiring entrepreneurs through mentorship and innovation.",
  },
  {
    name: "Vikarn Sinha",
    role: "Founder & Digital Strategist",
    image: Team4,
    bio: "Entrepreneur and digital strategist, specializing in branding, SEO, and growth marketing. Passionate about leveraging technology to build strong online presences and scalable digital solutions.",
  },
  {
    name: "Rakesh Kumar",
    role: "Full Stack Developer",
    image: Team2,
    bio: "Expert in React, Next.js, Node.js, and scalable web applications. Skilled in building high-performance platforms with seamless user experiences and optimized backend infrastructure.",
  },
];


