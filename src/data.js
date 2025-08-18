// import a1 from "/image/coaster00.jpg";
// import a2 from "/image/bumper02.jpg";
// import a3 from "/image/robots02.jpg";
// import a4 from "/image/tower01.jpg";
// import s1 from "/image/gearshop02.jpg";
// import s2 from "/image/gearshop03.jpg";

export const zones = [
  {
    name: "Signature Experiences",
    description: "Experience the ultimate fusion of cyberpunk thrills and Hong Kong flair with our iconic rides and experiences.",
    attractions: [
      { name: "Neon Vortex Ride", image: "/image/coaster00.jpg", description: "Step into the heart-pounding world of the Neon Vortex Ride, where the pulsating energy of a cyberpunk Hong Kong comes alive in a whirlwind of speed and spectacle. This state-of-the-art roller coaster is the crown jewel of our theme park, designed to immerse thrill-seekers in a futuristic metropolis inspired by the neon-drenched streets of Kowloon and the high-tech chaos of a dystopian future. As you strap into your sleek, glowing pod—adorned with holographic displays and ergonomic seats that adjust to your body's contours—the anticipation builds like the hum of a revving fusion engine.", thrill: "High", heightReq: "120cm minimum" },
      { name: "Holo-Dome Bumper", image: "/image/bumper02.jpg", description: "Welcome to the Holo-Dome Arena, a revolutionary bumper car experience that catapults classic fun into the cyberpunk era, infused with the chaotic vibrancy of Hong Kong's street life. Enclosed in a massive, translucent dome that shimmers like a holographic bubble under neon skies, this attraction turns bumping into a high-stakes battle royale. Riders pilot customized bumper cars—sleek, hover-capable vehicles with glowing chassis and customizable LED patterns—that glide across a multi-level arena floor, dodging obstacles and opponents in a frenzy of controlled chaos.", thrill: "Medium", heightReq: "120cm minimum" },
      { name: "Blade Challenge", image: "/image/robots02.jpg", description: "Dive into the Cyber Blade Challenge, an immersive robot-related experience that thrusts you into the gritty underbelly of a cyberpunk Hong Kong, where man and machine clash in epic duels. This attraction pits guests against advanced robotic opponents in a controlled arena, wielding cyber blades—safe, foam-tipped swords with embedded LEDs and sensors that light up on impact. Drawing from Hong Kong's martial arts heritage and cyberpunk narratives of augmented warriors, it's like stepping into a Wuxia film fused with robotic rebellion.", thrill: "Medium", heightReq: "No" },
      { name: "Quantum Leap Tower", image: "/image/tower01.jpg", description: "Ascend to new heights in the Quantum Leap Tower, a cyberpunk-related experience that blends heart-stopping drops with mind-bending VR, capturing the essence of Hong Kong's vertical urban sprawl in a dystopian twist. This towering attraction simulates quantum leaps through alternate realities, combining a classic drop tower with immersive virtual overlays. Riders board an open-air elevator pod that climbs 150 meters, offering panoramic views of the park's neon skyline, before plummeting in controlled freefalls that feel like jumping between dimensions.", thrill: "Moderate", heightReq: "No" }
    ]
  },
    {
    name: "Shops",
    description: "Discover futuristic treasures and souvenirs infused with neon-lit Asian charm in our unique park stores.",
    attractions: [
      { name: "Neo Gadgets Shop", image: "/image/gearshop02.jpg", description: "Nestled in the glowing crossroads of our cyberpunk-themed park, the Neon Gadgets Shop is a treasure trove of futuristic tech toys and accessories, echoing the bustling electronics markets of Hong Kong's Sham Shui Po. Step inside this vibrant storefront, where shelves brim with neon-lit gadgets that blend high-tech innovation with playful whimsy. From holographic projectors that cast mini cityscapes on your palm to augmented reality glasses that overlay cyberpunk filters on the real world, every item invites exploration and creativity.", thrill: "Moderate", heightReq: "No" },
      { name: "Cyber Shop", image: "/image/gearshop03.jpg", description: "The Cyber Souvenirs Shop stands as a memento haven in our neon-soaked park, capturing the essence of cyberpunk Hong Kong in collectible form. Modeled after the night markets of Temple Street, this shop offers an array of themed keepsakes, from t-shirts emblazoned with holographic prints of park attractions to keychains shaped like quantum portals or cyber blades.", thrill: "Moderate", heightReq: "No"  },
    ]
  },
      {
    name: "Park Map",
    description: "Navigate our neon-drenched wonderland with this guide to all attractions and shops.",
    attractions: [
      // { name: "Neo Gadgets Shop", image: s1, description: "Nestled in the glowing crossroads of our cyberpunk-themed park, the Neon Gadgets Shop is a treasure trove of futuristic tech toys and accessories, echoing the bustling electronics markets of Hong Kong's Sham Shui Po. Step inside this vibrant storefront, where shelves brim with neon-lit gadgets that blend high-tech innovation with playful whimsy. From holographic projectors that cast mini cityscapes on your palm to augmented reality glasses that overlay cyberpunk filters on the real world, every item invites exploration and creativity."},
      // { name: "Cyber Shop", image: s2, description: "The Cyber Souvenirs Shop stands as a memento haven in our neon-soaked park, capturing the essence of cyberpunk Hong Kong in collectible form. Modeled after the night markets of Temple Street, this shop offers an array of themed keepsakes, from t-shirts emblazoned with holographic prints of park attractions to keychains shaped like quantum portals or cyber blades." },
    ]
  },
];


export const robots = [
  {
    name: 'Neo-Samurai',
    personality: 'Honorable and strategic, embodying the bushido code in a digital age.',
    strengths: 'Masterful swordsmanship, enhanced reflexes for quick parries and strikes.',
    weaknesses: 'Susceptible to electromagnetic pulses that disrupt circuits; limited range in attacks.',
    profilePic: "/image/samurai02.jpg", // Replace with generated image URL
  },
  {
    name: 'Shadow Hacker',
    personality: 'Stealthy and cunning, a digital trickster who thrives in shadows and code.',
    strengths: 'Invisibility cloaking, hacking enemy systems mid-battle for disruptions.',
    weaknesses: 'Fragile frame with low physical durability; over-relies on tech that can be jammed.',
    profilePic: "/image/hacker01.jpg", // Replace with generated image URL
  },
  {
    name: 'Quantum Droid',
    personality: 'Unpredictable and innovative, a genius that bends reality with quantum logic.',
    strengths: 'Teleportation abilities, phase-shifting to avoid hits and appear behind foes.',
    weaknesses: 'High energy consumption leading to quick burnout; unstable in prolonged fights.',
    profilePic: "/image/droid01.jpg", 
  },
  {
    name: 'Cyber-Ninja',
    personality: 'Agile and elusive, a silent assassin programmed for precision kills.',
    strengths: 'Extreme speed and acrobatics, dual-wielding blades for rapid combos.',
    weaknesses: 'Low defense against area-of-effect attacks; relies on surprise, weak in open confrontations.',
    profilePic: "/image/ninja01.jpg", // Replace with generated image URL
  },
];


// import a1 from "/public/image/attraction_1.png";
// import a2 from "/public/image/attraction_2.png";
// import a3 from "/public/image/attraction_3.png";
// import a4 from "/public/image/attraction_4.png";

// export const facilities = [
//     {
//     id : 1,
//     image : a1,
//     title : "Robotic Ride",
//     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     location: "Robot Zone",
//     },

//     {id : 2,
//     image : a2,
//     title : "Neon Bumper",
//     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     location: "Neon Zone",

//     },
//     {id : 3,
//     image : a3,
//     title : "Dragon Tron",
//     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     location: "Tron Zone",

//     },
//     {id : 4,
//     image : a4,
//     title : "ElevateX",
//     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     location: "X Zone",

//     },
// ];

// export const pageLinks = [
//     {id: 1, href: "index.html", text: "home" },
//     {id: 2, href: "#about", text: "about" },
//     {id: 3, href: "#services", text: "services" },
//     {id: 4, href: "#tours", text: "tours" },
// ];

// export const socialLinks = [
//     {id: 1, href: "http://facebook.com", icon: "fa-brands fa-facebook"},
//     {id: 2, href: "http://x.com", icon: "fa-brands fa-x-twitter"},
//     {id: 3, href: "http://threads.com", icon: "fa-brands fa-threads"},
// ];

// export const services = [
//     {id: 1, icon: "fa-solid fa-wallet", title: "saving money", info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, reiciendis?",},
//     {id: 2, icon: "fa-solid fa-tree", title: "endless hiking", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, facilis.",},
//     {id: 3, icon: "fa-solid fa-socks", title: "Amazing Comfort", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deserunt!",},
// ]