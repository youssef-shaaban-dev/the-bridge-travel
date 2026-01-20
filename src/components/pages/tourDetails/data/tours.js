import pyramids from "@/assets/hero/pyramids.webp";
import nile from "@/assets/hero/nile.webp";
import temple from "@/assets/hero/temple.webp";
import sharm from "@/assets/experiences/sharm.png";
import cairo from "@/assets/experiences/old_cairo.png";
import desert from "@/assets/experiences/desert.png";

export const toursData = [
    {
        slug: "cairo-and-alexandria",
        title: "Cairo and Alexandria",
        location: "Cairo, Egypt",
        rating: 5.0,
        reviews: 22,
        isFeatured: true,
        price: 635,
        duration: "6 Days / 5 Nights",
        category: "Tour Egypt Packages",
        badge: "Best Seller",
        type: "Private Tour",
        includes: "VIP Fast Track",
        images: [
            "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1200", 
            "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=600", 
            "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=600", 
            "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=600",
        ],
        description: "Step into the heart of ancient civilization with a perfectly curated Egypt experience that blends iconic sights, five-star comfort, and personal service from the moment you land. From the Great Pyramids and the Sphinx to the treasures of King Tut, from the spiritual beauty of Old Cairo to the Mediterranean charm of Alexandria - this journey is crafted to turn your dream of Egypt into a seamless, unforgettable reality.",
        itinerary: [
            { day: 1, title: "VIP Arrival in Cairo", description: "A personal representative welcomes you at the airport, assists with fast-track procedures, and escorts you to your hotel." },
            { day: 2, title: "Pyramids, Museum & Old Bazaar", description: "Explore the Egyptian Museum and stand before the Great Pyramids and the Sphinx." },
            { day: 3, title: "Sakkara, Memphis & Spiritual Cairo", description: "Discover the Step Pyramid, ancient tombs, and sacred sites of Old Cairo." },
            { day: 4, title: "Alexandria Day Trip", description: "A full-day private tour to Egypt’s Mediterranean jewel: Roman Theater, Catacombs, and more." },
            { day: 5, title: "At Leisure or Optional Royal Cairo Tour", description: "Enjoy a free day or choose a guided visit to the Citadel and Islamic Cairo." },
            { day: 6, title: "Smooth Departure", description: "Private transfer and assistance at the airport for your return flight." }
        ]
    },
    {
        slug: "5-day-luxor-to-aswan-nile-cruise",
        title: "5 Day Luxor to Aswan Nile Cruise",
        location: "Luxor, Egypt",
        rating: 4.9,
        reviews: 45,
        isFeatured: true,
        price: 1280,
        duration: "5 Days / 4 Nights",
        category: "Nile Cruise Packages",
        badge: "Most Popular",
        type: "Private Tour",
        includes: "Flights Included",
        images: [nile, pyramids, temple, desert],
        description: "Experience the magic of ancient Egypt on this luxurious Nile cruise from Luxor to Aswan. Witness the stunning temples that line the banks of the world's longest river while enjoying five-star hospitality on board.",
        itinerary: [
            { day: 1, title: "Welcome to Luxor", description: "Arrival in Luxor, transfer to your cruise ship. Evening visit to Luxor Temple." },
            { day: 2, title: "West Bank Wonders", description: "Visit the Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon." },
            { day: 3, title: "Temples of Edfu & Kom Ombo", description: "Explore the Temple of Horus in Edfu and the unique double temple of Kom Ombo." },
            { day: 4, title: "Philae & High Dam", description: "Arrival in Aswan. Visit the High Dam and the beautiful Philae Temple." },
            { day: 5, title: "Farewell Aswan", description: "Disembarkation and transfer to Aswan Airport for your flight back to Cairo." }
        ]
    },
    {
        slug: "7-day-cairo-and-nile-cruise",
        title: "7 Day Cairo and Nile Cruise",
        location: "Cairo & Nile, Egypt",
        rating: 5.0,
        reviews: 38,
        isFeatured: true,
        price: 1599,
        duration: "7 Days / 6 Nights",
        category: "Tour Egypt Packages",
        badge: "Classic Choice",
        type: "Private Tour",
        includes: "Cairo + Cruise",
        images: [pyramids, nile, temple, cairo],
        description: "The ultimate Egyptian highlights package. Start in the vibrant city of Cairo before flying south to embark on a classic Nile cruise.",
        itinerary: [
            { day: 1, title: "Arrival in Cairo", description: "Transfer to your hotel and evening at leisure." },
            { day: 2, title: "Pyramid Grandeur", description: "Full day tour of the Giza Pyramids and Sphinx." },
            { day: 3, title: "Flight to Luxor", description: "Early flight to Luxor to board your Nile cruise." },
            { day: 4, title: "Royal Luxor", description: "West Bank exploration including Valley of the Kings." },
            { day: 5, title: "Sailing the Nile", description: "Enjoy the views as you sail towards Edfu and Kom Ombo." },
            { day: 6, title: "Aswan Highlights", description: "Visit Philae Temple and the High Dam." },
            { day: 7, title: "Return to Cairo", description: "Fly back to Cairo for your international departure." }
        ]
    },
    {
        slug: "luxury-red-sea-escape",
        title: "Luxury Red Sea Escape",
        location: "Sharm El Sheikh, Egypt",
        rating: 4.8,
        reviews: 15,
        isFeatured: false,
        price: 950,
        duration: "4 Days / 3 Nights",
        category: "Relaxation Packages",
        badge: "Relaxation",
        type: "Resort Stay",
        includes: "All Inclusive",
        images: [sharm, nile, desert, cairo],
        description: "Unwind at a premium resort in Sharm El Sheikh with private beach access and world-class snorkeling in the Red Sea.",
        itinerary: [
            { day: 1, title: "Sharm Arrival", description: "Transfer to your luxury resort and relax by the beach." },
            { day: 2, title: "Red Sea Wonders", description: "Full day of snorkeling or optional diving in Ras Mohammed." },
            { day: 3, title: "Desert & Stars", description: "Evening safari with Bedouin dinner under the stars." },
            { day: 4, title: "Departure", description: "Final swim before your transfer back to the airport." }
        ]
    },
];
