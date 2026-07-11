export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  image: string;
  popular?: boolean;
  bengaliName?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  bengaliName: string;
  icon: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "bridal",
    name: "Bridal Makeup",
    bengaliName: "ব্রাইডাল মেকআপ",
    icon: "Heart",
    services: [
      {
        id: "bridal-1",
        name: "Premium Bengali Bridal Makeup",
        bengaliName: "প্রিমিয়াম বাঙালি কনে সাজানো",
        price: "₹8,500",
        duration: "3 hrs",
        description: "Traditional bridal makeup with premium HD cosmetics, saree draping, hairstyling, and jewelry setting.",
        image: "/images/service-bridal-1.jpeg",
        popular: true
      },
      {
        id: "bridal-2",
        name: "Airbrush HD Bridal Makeup",
        bengaliName: "এয়ারব্রাশ এইচডি ব্রাইডাল মেকআপ",
        price: "₹12,000",
        duration: "3.5 hrs",
        description: "Flawless, long-lasting, water-resistant airbrush makeup ideal for photography under bright wedding lights.",
        image: "/images/service-bridal-2.jpeg"
      },
      {
        id: "bridal-3",
        name: "Reception & Party Makeup",
        bengaliName: "রিসেপশন ও পার্টি মেকআপ",
        price: "₹4,500",
        duration: "2 hrs",
        description: "Elegant glam look for reception party or special celebrations with hair styling included.",
        image: "/images/bridal-apply.jpeg"
      }
    ]
  },
  {
    id: "hair",
    name: "Hair Styling & Spa",
    bengaliName: "হেয়ার স্টাইলিং ও স্পা",
    icon: "Scissors",
    services: [
      {
        id: "hair-1",
        name: "Designer Haircut & Styling",
        bengaliName: "হেয়ার কাট এবং স্টাইলিং",
        price: "₹350",
        duration: "45 mins",
        description: "Modern professional hair wash, customized haircut according to face shape, blow-dry, and styling.",
        image: "/images/service-haircut.jpeg",
        popular: true
      },
      {
        id: "hair-2",
        name: "Deep Nourishing Hair Spa",
        bengaliName: "ডিপ নারিশিং হেয়ার স্পা",
        price: "₹1,200",
        duration: "1 hr",
        description: "Strengthening treatment with premium hair creams, steam, massage, and wash to treat dry, damaged hair.",
        image: "/images/service-hairspa.jpeg"
      },
      {
        id: "hair-3",
        name: "Luxury Hair Wash & Blow-dry",
        bengaliName: "হেয়ার ওয়াশ ও ব্লো-ড্রাই",
        price: "₹250",
        duration: "30 mins",
        description: "Relaxing head wash with salon-grade shampoo and conditioner, finished with a professional blow-dry.",
        image: "/images/service-hairwash.jpeg"
      }
    ]
  },
  {
    id: "coloring",
    name: "Hair Coloring",
    bengaliName: "চুলের রঙ",
    icon: "Sparkles",
    services: [
      {
        id: "color-1",
        name: "Global Hair Coloring",
        bengaliName: "গ্লোবাল হেয়ার কালারিং",
        price: "₹2,500",
        duration: "2 hrs",
        description: "Full global hair coloring using premium ammonia-free professional colors for brilliant shade and shine.",
        image: "/images/service-hairspa.jpeg"
      },
      {
        id: "color-2",
        name: "Highlights / Balayage",
        bengaliName: "হাইলাইটস ও ফ্যাশন কালার",
        price: "₹3,500",
        duration: "2.5 hrs",
        description: "Trendy highlights or balayage patterns designed to add depth and movement to your hair.",
        image: "/images/team-stylist.jpeg",
        popular: true
      }
    ]
  },
  {
    id: "skin",
    name: "Skin Care & Facials",
    bengaliName: "ত্বকের যত্ন ও ফেসিয়াল",
    icon: "Smile",
    services: [
      {
        id: "skin-1",
        name: "O3+ Bridal Glow Facial",
        bengaliName: "ও থ্রি প্লাস ব্রাইডাল ফেসিয়াল",
        price: "₹2,500",
        duration: "1.5 hrs",
        description: "Premium whitening & brightening facial treatment that deeply purifies skin and restores bridal glow.",
        image: "/images/service-facial.jpeg",
        popular: true
      },
      {
        id: "skin-2",
        name: "De-Tan Treatment",
        bengaliName: "ডি-ট্যান ট্রিটমেন্ট",
        price: "₹600",
        duration: "45 mins",
        description: "Sun tan removal therapy using herbal fruit acids for instant brightening and tone evening.",
        image: "/images/gallery-wo.jpeg"
      },
      {
        id: "skin-3",
        name: "Charcoal Deep Cleansing Facial",
        bengaliName: "চারকোল ক্লিনজিং ফেসিয়াল",
        price: "₹1,200",
        duration: "1 hr",
        description: "Active charcoal mask treatment to extract impurities, blackheads, and tighten skin pores.",
        image: "/images/gallery-enhance-1.jpeg"
      }
    ]
  },
  {
    id: "nails",
    name: "Nail Art & Manicure",
    bengaliName: "নেল আর্ট ও ম্যানিকিউর",
    icon: "Flower",
    services: [
      {
        id: "nails-1",
        name: "Bridal Extension & Gel Nail Art",
        bengaliName: "ব্রাইডাল এক্সটেনশন ও নেল আর্ট",
        price: "₹1,500",
        duration: "1.5 hrs",
        description: "Stunning acrylic or gel nail extensions decorated with beautiful stones and designs.",
        image: "/images/service-nails.jpeg",
        popular: true
      },
      {
        id: "nails-2",
        name: "Luxury Rose Petal Manicure",
        bengaliName: "লাক্সারি ম্যানিকিউর",
        price: "₹650",
        duration: "45 mins",
        description: "Exfoliating hand scrub, rose water soak, nail shaping, massage, and premium polish application.",
        image: "/images/service-manicure.jpeg"
      },
      {
        id: "nails-3",
        name: "Spa Pedicure",
        bengaliName: "স্পা পেডিকিউর",
        price: "₹800",
        duration: "1 hr",
        description: "Relaxing foot soak, dead skin scrubbing, nail trimming, leg massage, and nail paint.",
        image: "/images/gallery-enhance-3.jpeg"
      }
    ]
  },
  {
    id: "waxing",
    name: "Waxing & Threading",
    bengaliName: "ওয়াক্সিং ও থ্রেডিং",
    icon: "Fingerprint",
    services: [
      {
        id: "wax-1",
        name: "Full Body Rica Waxing",
        bengaliName: "ফুল বডি ওয়াক্সিং",
        price: "₹2,200",
        duration: "1.5 hrs",
        description: "Gentle Rica wax for hair removal, reducing pain and leaving the skin silky smooth.",
        image: "/images/service-waxing.jpeg"
      },
      {
        id: "wax-2",
        name: "Eyebrow & Upper Lip Threading",
        bengaliName: "আইব্রো ও আপার লিপ থ্রেডিং",
        price: "₹80",
        duration: "15 mins",
        description: "Precise threading for facial hair removal to define beautiful eyebrows.",
        image: "/images/service-waxing.jpeg"
      }
    ]
  }
];

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "rev-1",
    name: "Debolina Banerjee",
    rating: 5,
    text: "The bridal makeup was absolutely stunning! Thanks to Keya di for making me look like a queen on my special day. Saree folding and jewelry styling chilo just perfect. Keranitola-r best salon for brides!",
    avatar: "/images/customer-1.jpeg",
    date: "1 week ago"
  },
  {
    id: "rev-2",
    name: "Riya Sen",
    rating: 5,
    text: "I did hair coloring and highlights here and I am so happy with the result! Staff behavior is very polite, environment is fully hygienic and clean. Medinipur-e erom standard service pawa sotti khub mushkil.",
    avatar: "/images/customer-2.jpeg",
    date: "2 weeks ago"
  },
  {
    id: "rev-3",
    name: "Ananya Ghosh",
    rating: 5,
    text: "Regular customer ami onader hair spa and facial er. High quality products and top-notch hygiene maintenance. The rates are very reasonable compared to the service quality. Highly recommended!",
    avatar: "/images/customer-3.jpeg",
    date: "3 weeks ago"
  },
  {
    id: "rev-4",
    name: "Susmita Roy",
    rating: 5,
    text: "Best beauty parlour in Medinipur town for skin care! My O3+ facial was done with extreme care. Massage ta khub relaxation chilo. Staff-ra khub gentle and caring. Ekdom professional service.",
    avatar: "/images/customer-4.jpeg",
    date: "1 month ago"
  },
  {
    id: "rev-5",
    name: "Priyanka Chakraborty",
    rating: 5,
    text: "Reception party-r jonno mehendi r makeup done by them, absolutely brilliant service. Makeup felt extremely light on skin and stayed fresh all night! Medinipur rail station or keranitola-r asepase best salon.",
    avatar: "/images/customer-5.jpeg",
    date: "1 month ago"
  },
  {
    id: "rev-6",
    name: "Tania Pramanik",
    rating: 5,
    text: "Khub shundor and aesthetic interior decor salon-er. Staff is very well behaved. Hair wash ar hair spa experience ta awesome chilo! Medinipur-e safe & premium salon experience-er jonno best.",
    avatar: "/images/customer-2.jpeg",
    date: "2 months ago"
  }
];

export const faqs = [
  {
    question: "How can I book an appointment at The Skin Ateliere?",
    answer: "You can book directly through the appointment booking form on this website, send us a message on WhatsApp by clicking the WhatsApp icon, or call us directly at +91 91341 61165. We suggest booking in advance for weekends and bridal makeup."
  },
  {
    question: "Do you offer customizable bridal makeup packages?",
    answer: "Yes, absolutely! We offer packages that include pre-bridal beauty routines (facials, body scrubbing, wax, nails) and the wedding day makeup. You can choose from HD makeup or premium Airbrush makeup. Contact us for a free bridal consultation."
  },
  {
    question: "What beauty product brands do you use in the salon?",
    answer: "We use only premium and original international cosmetics and hair products, including L'Oreal, O3+, MAC, Huda Beauty, Kryolan, Matrix, and Rica to guarantee safety and the best beauty outcomes for your skin and hair."
  },
  {
    question: "Are your hair colors safe and ammonia-free?",
    answer: "Yes, we prioritize your hair health. We offer both standard and premium ammonia-free global coloring and highlights options that don't damage your hair roots and maintain shine and softness."
  },
  {
    question: "Where exactly is the salon located?",
    answer: "We are located at Midnapore Railway Station Road, Ashok Nagar, Keranitola, Medinipur, West Bengal 721101. It is extremely accessible from the main station road and has parking space available."
  },
  {
    question: "Do you follow safety and hygiene guidelines?",
    answer: "Hygiene is our highest priority at The Skin Ateliere. All our tools are sanitized before use, we use single-use disposables wherever possible, and our staff keeps face masks and hand sanitizers active."
  }
];
