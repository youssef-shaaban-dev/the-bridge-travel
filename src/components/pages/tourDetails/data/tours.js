import Cairo_1 from "@/assets/images/Cairo-01.webp"
import Cairo_2 from "@/assets/images/Cairo-02.webp"
import Cairo_3 from "@/assets/images/Cairo-Cruise.webp"
import Cairo_4 from "@/assets/images/Cairo-Coptic.webp"
import Cairo_5 from "@/assets/images/Khan-El-Khalil.webp"

import Sphinx from "@/assets/images/Sphinx.webp"
import Sakkara_Pyramids from "@/assets/images/Sakkara-Pyramids.webp"
import Saladin_Citadel from "@/assets/images/Saladin-Citadel.webp"

import Alexandria_1 from "@/assets/images/Alexandria-01.webp"
import Alexandria_2 from "@/assets/images/Alexandria-02.webp"

import NileCruise from "@/assets/images/Nile-Cruise.webp"

import Aswan_1 from "@/assets/images/Aswan-01.webp"
import Aswan_3 from "@/assets/images/Aswan-03.webp"
import Aswan_7 from "@/assets/images/Aswan-07.webp"

import Luxor_1 from "@/assets/images/Luxor.webp"
import Luxor_2 from "@/assets/images/Luxor-02.webp"

import SharmElShik_1 from "@/assets/images/Sharm-El-Sheikh-01.webp"
import SharmElShik_2 from "@/assets/images/Sharm-El-Sheikh-02.webp"
import SharmElShik_3 from "@/assets/images/Sharm-El-Sheikh-03.webp"
import SharmElShik_4 from "@/assets/images/Sharm-El-Sheikh-04.webp"

import Jordan_1 from "@/assets/images/Jordan-01.webp"
import Jordan_2 from "@/assets/images/Jordan-02.webp"
import Jordan_3 from "@/assets/images/Jordan-03.webp"


export const toursData = [
    {
        id: 1,
        slug: "cairo-and-alexandria",
        title: "Cairo and Alexandria",
        location: "Cairo, Egypt",
        rating: 5.0,
        reviews: 22,
        isFeatured: true,
        price: 635,
        rates: [
            { grade: "4★ Hotels", price: 635, description: "Premium Comfort" },
            { grade: "5★ Hotels", price: 735, description: "Ultimate Elegance", featured: true }
        ],
        duration: "6 Days / 5 Nights",
        category: "Tour Egypt Packages",
        badge: "Best Seller",
        type: "Private Tour",
        includes: "VIP Fast Track",
        images: [
            Cairo_1, 
            Cairo_2,
            Cairo_3,
            Cairo_4,
        ],
        description: "Step into the heart of ancient civilization with a perfectly curated Egypt experience that blends iconic sights, five-star comfort, and personal service from the moment you land. From the Great Pyramids and the Sphinx to the treasures of King Tut, from the spiritual beauty of Old Cairo to the Mediterranean charm of Alexandria - this journey is crafted to turn your dream of Egypt into a seamless, unforgettable reality.",
        itinerary: [
            { day: 1, title: "VIP Arrival in Cairo", description: "A personal representative welcomes you at the airport, assists with fast-track procedures, and escorts you to your hotel." },
            { day: 2, title: "Pyramids, Museum & Old Bazaar", description: "Explore the Egyptian Museum and stand before the Great Pyramids and the Sphinx." },
            { day: 3, title: "Sakkara, Memphis & Spiritual Cairo", description: "Discover the Step Pyramid, ancient tombs, and sacred sites of Old Cairo." },
            { day: 4, title: "Alexandria Day Trip", description: "A full-day private tour to Egypt’s Mediterranean jewel: Roman Theater, Catacombs, and more." },
            { day: 5, title: "At Leisure or Optional Royal Cairo Tour", description: "Enjoy a free day or choose a guided visit to the Citadel and Islamic Cairo." },
            { day: 6, title: "Smooth Departure", description: "Private transfer and assistance at the airport for your return flight." }
        ],
       
    },
    {
        id: 2,
        slug: "cairo-alexandria-premium",
        title: "6 Days Cairo & Alexandria",
        location: "Cairo & Alexandria",
        rating: 5.0,
        reviews: 32,
        isFeatured: true,
        price: 640,
        rates: [
            { grade: "4★ Hotels", price: 640, description: "Premium Comfort" },
            { grade: "5★ Hotels", price: 735, description: "Ultimate Elegance", featured: true }
        ],
        duration: "6 Days / 5 Nights",
        category: "Tour Egypt Packages",
        badge: "Top Choice",
        type: "Private Tour",
        includes: "Cairo | Alexandria",
        images: [
            Alexandria_1,
            Alexandria_2,
            Cairo_1,
            Cairo_2
        ],
        description: "Discover the magic of Egypt with a perfectly balanced itinerary combining ancient wonders, Mediterranean charm, and five-star comfort. This private tour is designed for travelers who seek culture, history, and seamless service.",
        itinerary: [
            { day: 1, title: "Arrival in Cairo", description: "Warm welcome by The Bridge Travel representative, assistance through airport formalities, and escort to your hotel. Settle in and relax." },
            { day: 2, title: "Pyramids, Museum & Bazaar", description: "Explore the Egyptian Museum (Tutankhamun treasures), the Great Pyramids of Giza, the Sphinx, and Khan El Khalili Bazaar." },
            { day: 3, title: "Sakkara, Memphis & Old Cairo", description: "Visit the Step Pyramid of Djoser, Memphis (Ramses II statue), Coptic Cairo churches, and Amr Ibn El-Aas Mosque." },
            { day: 4, title: "Alexandria Day Tour & Overnight", description: "Travel to Alexandria: Roman Theater, Pompey's Pillar, Catacombs, Montaza Gardens, and external views of the Library and Citadel." },
            { day: 5, title: "Return to Cairo & Free Day", description: "Drive back to Cairo. Enjoy free time or take an optional Islamic Cairo tour including the Citadel and famous mosques." },
            { day: 6, title: "Final Departure", description: "Transfer to Cairo International Airport with full assistance for your departure." }
        ],
        inclusions: [
            "4 Nights Cairo + 1 Night Alexandria (B&B)",
            "All private guided tours with Egyptologist",
            "All entrance fees",
            "Private A/C transportation",
            "Lunch during full-day tours",
            "Meet & assist at arrival and departure",
            "All taxes and service charges"
        ],
        exclusions: [
            "International flights",
            "Egypt entry visa",
            "Personal expenses & tips",
            "Optional tours"
        ]
    },
    {
        id: 3,
        slug: "cairo-premium-experience",
        title: "6 Days Cairo Experience",
        location: "Cairo, Egypt",
        rating: 4.9,
        reviews: 28,
        isFeatured: true,
        price: 635,
        rates: [
            { grade: "4★ Hotels", price: 635, description: "Premium Comfort" },
            { grade: "5★ Hotels", price: 735, description: "Ultimate Elegance", featured: true }
        ],
        duration: "6 Days / 5 Nights",
        category: "Tour Egypt Packages",
        badge: "Luxury Stay",
        type: "Private Tour",
        includes: "Detailed Cairo",
        images: [
            Cairo_5,
            Cairo_2,
            Cairo_1,
            Cairo_3,
            Cairo_4,
        ],
        description: "Discover the timeless beauty of Egypt with a carefully crafted itinerary that combines iconic history, cultural depth, and seamless five-star service - all in the heart of Cairo.",
        itinerary: [
            { day: 1, title: "Arrival in Cairo", description: "Welcomed by The Bridge Travel representative, assistance through customs, and escort to your hotel. Prepare for an unforgettable journey." },
            { day: 2, title: "Pyramids, Museum & Khan El Khalili", description: "Explore the Egyptian Museum (Tutankhamun treasures), the Great Pyramids of Giza, the Sphinx, and Khan El Khalili Bazaar." },
            { day: 3, title: "Sakkara, Memphis & Old Cairo", description: "Visit the Step Pyramid of Djoser, ancient tombs (Unas, Teti, etc.), Memphis (Ramses II statue), Coptic Cairo, and Amr Ibn El-Aas Mosque." },
            { day: 4, title: "Alexandria Day Tour", description: "Full-day excursion: Roman Theater, Pompey's Pillar, Catacombs, Montaza Gardens, and external views of the Library/Citadel. Return to Cairo." },
            { day: 5, title: "Free Day or Optional Islamic Cairo Tour", description: "Leisure time or optional visit to Cairo Citadel, Alabaster Mosque, Sultan Hassan & Al-Refa’i Mosques." },
            { day: 6, title: "Departure", description: "Transfer to Cairo International Airport with full assistance for your departure." }
        ],
        inclusions: [
            "5 Nights in Cairo (B&B)",
            "All private guided tours with Egyptologist",
            "All entrance fees",
            "Private A/C transportation",
            "Lunch during full-day tours",
            "Meet & assist at arrival and departure",
            "All taxes and service charges"
        ],
        exclusions: [
            "International flights",
            "Egypt entry visa",
            "Personal expenses & tips",
        ]
    },
    {
        id: 4,
        slug: "egypt-holidays-nile-cruise",
        title: "Egypt Holidays & Nile Cruise",
        location: "Cairo & Nile",
        rating: 5.0,
        reviews: 45,
        isFeatured: true,
        price: 1215,
        rates: [
            { grade: "4★ Hotels", price: 1215, description: "Premium Comfort" },
            { grade: "5★ Hotels", price: 1275, description: "Ultimate Elegance", featured: true }
        ],
        duration: "7 Days / 6 Nights",
        category: "Nile Cruise Packages",
        badge: "Signature Journey",
        type: "Private Tour",
        includes: "Cairo | Nile Cruise",
        images: [
            NileCruise,
            Aswan_1,
            Aswan_3,
            Cairo_1,
            Cairo_5
        ],
        description: "Experience the very best of Egypt with a perfect combination of iconic Cairo, a relaxing Nile Cruise, and the legendary temples of Upper Egypt — all with private guiding and five-star comfort.",
        itinerary: [
            { day: 1, title: "Arrival in Cairo", description: "Meet & assist at Cairo International Airport by The Bridge Travel representative, fast-track assistance, and private transfer to your hotel. Review your program and relax." },
            { day: 2, title: "Pyramids, Museum & Khan El Khalili", description: "With your private Egyptologist, explore the Egyptian Museum, the Great Pyramids of Giza, the Sphinx, and Khan El Khalili Bazaar." },
            { day: 3, title: "Fly to Aswan & Nile Cruise", description: "Morning flight to Aswan. Board your 5★ Nile Cruise. Visit Aswan High Dam and Philae Temple by felucca." },
            { day: 4, title: "Kom Ombo & Optional Abu Simbel", description: "Optional early tour to Abu Simbel. Sail to Kom Ombo and visit the Temple of Sobek & Haroeris." },
            { day: 5, title: "Edfu & Sail to Luxor", description: "Visit the Temple of Horus in Edfu. Sail to Luxor with Galabya Party in the evening." },
            { day: 6, title: "Luxor West & East Bank – Fly to Cairo", description: "Visit Valley of the Kings, Temple of Queen Hatshepsut, Colossi of Memnon, Karnak & Luxor Temples. Evening flight back to Cairo." },
            { day: 7, title: "Departure", description: "Optional Sakkara, Memphis & Old Cairo tour. Transfer to Cairo Airport for final departure." }
        ],
        inclusions: [
            "Domestic flights (Cairo–Aswan / Luxor–Cairo)",
            "All sightseeing with private Egyptologist",
            "All entrance fees",
            "Hot Air Balloon in Luxor",
            "Abu Simbel Excursion",
            "Sound & Light Show at Pyramids",
            "Private A/C transportation",
            "Meet & Assist service",
            "All taxes & service charges"
        ],
        exclusions: [
            "International flights",
            "Egypt entry visa",
            "Tips & personal expenses"
        ]
    },
    {
        id: 5,
        slug: "egypt-discovery-red-sea",
        title: "Egypt Discovery & Red Sea Escape",
        location: "Cairo, Aswan, Luxor & Hurghada",
        rating: 4.8,
        reviews: 38,
        isFeatured: true,
        price: 1260,
        rates: [
            { grade: "4★ Hotels", price: 1260, description: "Premium Comfort" },
            { grade: "5★ Hotels", price: 1350, description: "Ultimate Elegance", featured: true }
        ],
        duration: "9 Days / 8 Nights",
        category: "Red Sea Packages",
        badge: "Adventure & Sun",
        type: "Private Tour",
        includes: "Sleeper Train | Red Sea",
        images: [
            Luxor_1,
            Luxor_2,
            Aswan_7,
            Cairo_5,
        ],
        description: "A perfectly balanced journey combining Egypt’s ancient wonders, a romantic sleeper train experience, the magic of Upper Egypt, and pure relaxation on the Red Sea.",
        itinerary: [
            { day: 1, title: "Arrival in Cairo", description: "Meet & assist at Cairo International Airport by The Bridge Travel representative. Assistance and private transfer to your hotel." },
            { day: 2, title: "Pyramids, Museum & Sleeper Train", description: "Visit the Egyptian Museum and the Great Pyramids. Evening transfer for your overnight sleeper train to Aswan with dinner onboard." },
            { day: 3, title: "Aswan Highlights", description: "Arrival in Aswan. Visit the Aswan High Dam and Philae Temple by felucca on the Nile. Relax at your hotel." },
            { day: 4, title: "Optional Abu Simbel & Luxor East Bank", description: "Optional Abu Simbel trip. Drive to Luxor and visit Karnak & Luxor Temples, the Avenue of Sphinxes, and Hypostyle Hall." },
            { day: 5, title: "Luxor West Bank & Transfer to Hurghada", description: "Visit Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon. Transfer by private A/C vehicle to Hurghada." },
            { day: 6, title: "Hurghada Relaxation", description: "Free day to enjoy the beach, snorkeling, or resort facilities in Hurghada." },
            { day: 7, title: "Hurghada Leisure", description: "Another day at leisure by the crystal waters of the Red Sea." },
            { day: 8, title: "Fly to Cairo & Ancient Cairo Tour", description: "Flight to Cairo. Visit Sakkara Step Pyramid, Memphis, Coptic Cairo, and Amr Ibn El-Aas Mosque." },
            { day: 9, title: "Final Departure", description: "Transfer to Cairo International Airport with full assistance for your departure." }
        ],
        inclusions: [
            "All airport & station meet and assist",
            "All private guided tours with Egyptologist",
            "All entrance fees",
            "Private A/C transportation",
            "Sleeper train Cairo–Aswan (Half Board)",
            "Flight Hurghada–Cairo",
            "Transfers Aswan–Luxor & Luxor–Hurghada",
            "Free camel ride at Pyramids (photo stop)",
            "All taxes and service charges"
        ],
        exclusions: [
            "International flights",
            "Egypt entry visa",
            "Tips & personal expenses",
            "Optional excursions"
        ]
    },
    {
        id: 6,
        slug: "egypt-grand-red-sea",
        title: "Egypt Grand Experience & Red Sea Escape",
        location: "Cairo, Nile & Sharm El-Sheikh",
        rating: 5.0,
        reviews: 32,
        isFeatured: true,
        price: 1650,
        rates: [
            { grade: "4★ Hotels", price: 1650, description: "Premium Comfort" },
            { grade: "5★ Hotels", price: 1770, description: "Ultimate Elegance", featured: true }
        ],
        duration: "10 Days / 9 Nights",
        category: "Luxury Packages",
        badge: "Grand Experience",
        type: "Private Tour",
        includes: "Nile Cruise | Sharm",
        images: [
            SharmElShik_1,
            SharmElShik_2,
            SharmElShik_3,
            SharmElShik_4,
        ],
        description: "A perfect blend of ancient wonders, luxury Nile cruising, and relaxing beach time on the Red Sea — designed for travelers who want culture and comfort.",
        itinerary: [
            { day: 1, title: "Arrival in Cairo", description: "Meet & assist at Cairo International Airport by The Bridge Travel representative. Assistance and private transfer to your hotel." },
            { day: 2, title: "Pyramids, Museum & Khan El Khalili", description: "Explore the Egyptian Museum and the Great Pyramids. Visit Khan El Khalili Bazaar." },
            { day: 3, title: "Fly to Aswan & Nile Cruise", description: "Morning flight to Aswan. Board your 5★ Nile Cruise. Visit Aswan High Dam and Philae Temple." },
            { day: 4, title: "Kom Ombo & Optional Abu Simbel", description: "Optional Abu Simbel excursion. Sail to Kom Ombo and visit the Temple of Sobek & Haroeris." },
            { day: 5, title: "Edfu & Sail to Luxor", description: "Visit the Temple of Horus in Edfu. Sail to Luxor and enjoy a Galabya Party." },
            { day: 6, title: "Luxor West & East Bank – Fly to Sharm", description: "Visit Valley of the Kings, Hatshepsut Temple, Colossi of Memnon, Karnak & Luxor Temples. Evening flight to Sharm El-Sheikh." },
            { day: 7, title: "Sharm El-Sheikh Leisure", description: "Free day at the beach or optional snorkeling at Ras Mohamed." },
            { day: 8, title: "Sharm El-Sheikh Relaxation", description: "Enjoy the Red Sea, spa, and resort facilities in Sharm El-Sheikh." },
            { day: 9, title: "Fly to Cairo & Ancient Cairo Tour", description: "Flight to Cairo. Visit Sakkara Step Pyramid, Memphis, Coptic Cairo, and Amr Ibn El-Aas Mosque." },
            { day: 10, title: "Final Departure", description: "Transfer to Cairo International Airport with full assistance for your departure." }
        ],
        inclusions: [
            "Domestic flights (Cairo–Aswan / Luxor–Sharm / Sharm–Cairo)",
            "All private guided tours with Egyptologist",
            "All entrance fees",
            "Private A/C transportation",
            "Free camel ride at Pyramids (photo stop)",
            "Meet & assist at all airports",
            "All taxes and service charges"
        ],
        exclusions: [
            "International flights",
            "Egypt entry visa",
            "Tips & personal expenses",
            "Optional excursions"
        ]
    },
    {
        id: 7,
        slug: "egypt-grand-hurghada",
        title: "Egypt Grand Experience (Hurghada)",
        location: "Cairo, Nile & Hurghada",
        rating: 4.9,
        reviews: 26,
        isFeatured: true,
        price: 1650,
        rates: [
            { grade: "4★ Hotels", price: 1650, description: "Premium Comfort" },
            { grade: "5★ Hotels", price: 1770, description: "Ultimate Elegance", featured: true }
        ],
        duration: "10 Days / 9 Nights",
        category: "Luxury Packages",
        badge: "Red Sea Choice",
        type: "Private Tour",
        includes: "Nile Cruise | Hurghada",
        images: [
            Sakkara_Pyramids,
            Saladin_Citadel,
            NileCruise,
            Aswan_1
            
        ],
        description: "A perfect blend of ancient wonders, luxury Nile cruising, and pure relaxation on the Red Sea's Hurghada coast.",
        itinerary: [
            { day: 1, title: "Arrival in Cairo", description: "Meet & assist at Cairo Airport. Private transfer to your hotel and program review." },
            { day: 2, title: "Pyramids, Museum & Khan El Khalili", description: "Full day tour including the Egyptian Museum, Pyramids of Giza, Sphinx, and the old bazaar." },
            { day: 3, title: "Fly to Aswan & Nile Cruise", description: "Morning flight to Aswan. Board luxury cruise. Visit Aswan High Dam and Philae Temple." },
            { day: 4, title: "Kom Ombo & Optional Abu Simbel", description: "Optional Abu Simbel excursion. Sail to Kom Ombo and visit the unique dual temple." },
            { day: 5, title: "Edfu & Sail to Luxor", description: "Visit the Temple of Horus in Edfu. Afternoon tea and Galabya Party while sailing to Luxor." },
            { day: 6, title: "Luxor West & East Bank – Fly to Hurghada", description: "Visit Valley of the Kings, Karnak, and Luxor temples. Private transfer to Hurghada." },
            { day: 7, title: "Hurghada Relaxation", description: "Free day to enjoy Hurghada's famous beaches and Red Sea water activities." },
            { day: 8, title: "Hurghada Leisure", description: "Another day at leisure or optional desert safari / sea excursion in Hurghada." },
            { day: 9, title: "Fly to Cairo & Ancient Cairo Tour", description: "Flight to Cairo. Visit Sakkara Step Pyramid, Memphis, and Old Cairo churches." },
            { day: 10, title: "Final Departure", description: "Transfer to Cairo International Airport for your departure flight." }
        ],
        inclusions: [
            "Domestic flights (Cairo–Aswan / Hurghada–Cairo)",
            "All private guided tours with Egyptologist",
            "All entrance fees",
            "Private A/C transportation",
            "Free camel ride at Pyramids (photo stop)",
            "Meet & assist at all airports",
            "All taxes and service charges"
        ],
        exclusions: [
            "International flights",
            "Egypt entry visa",
            "Tips & personal expenses",
            "Optional excursions"
        ]
    },
    {
        id: 8,
        slug: "egypt-jordan-discovery",
        title: "Grand Egypt & Jordan Discovery",
        location: "Egypt & Jordan",
        rating: 5.0,
        reviews: 18,
        isFeatured: true,
        price: 3350,
        rates: [
            { grade: "4★ Hotels", price: 3350, description: "Premium Comfort" },
            { grade: "5★ Hotels", price: 3850, description: "Ultimate Elegance", featured: true }
        ],
        duration: "14 Days / 13 Nights",
        category: "Multi-Country Packages",
        badge: "Grand Tour",
        type: "Private Tour",
        includes: "Egypt + Jordan",
        images: [
            Jordan_1,
            Jordan_2,
            Jordan_3,
            Sphinx
        ],
        description: "An extraordinary journey that connects the wonders of Ancient Egypt with the timeless beauty of Jordan - from the Pyramids and the Nile to Petra, Wadi Rum, and the Dead Sea.",
        itinerary: [
            { day: 1, title: "Arrival in Cairo", description: "Meet & assist at Cairo Airport and private transfer to your hotel. Review your program and relax." },
            { day: 2, title: "Pyramids, Museum & Old Cairo", description: "Explore the Egyptian Museum, the Great Pyramids, Sphinx, Sakkara, and Memphis with your private Egyptologist." },
            { day: 3, title: "Cairo Tour & Sleeper Train", description: "Visit Old Cairo, Khan El Khalili, and the Citadel. Evening transfer for your overnight sleeper train to Aswan." },
            { day: 4, title: "Aswan & Nile Cruise", description: "Arrival in Aswan, board your 5★ cruise. Visit Philae Temple and the High Dam." },
            { day: 5, title: "Kom Ombo & Edfu", description: "Sail to Kom Ombo and Edfu, visiting the temples of Sobek and Horus. Enjoy scenic Nile views." },
            { day: 6, title: "Luxor West & East Bank", description: "Visit Valley of the Kings, Hatshepsut Temple, Karnak, and Luxor Temples. The highlight of Upper Egypt." },
            { day: 7, title: "Fly to Sharm El-Sheikh", description: "Morning flight from Luxor to Sharm El-Sheikh. Check into your Red Sea resort and relax." },
            { day: 8, title: "Sharm El-Sheikh Leisure", description: "Free day for beach relaxation or optional snorkeling at Ras Mohamed National Park." },
            { day: 9, title: "St. Catherine & Mount Sinai", description: "Drive to St. Catherine. Optional sunrise climb of Mount Sinai and visit to the historic Monastery." },
            { day: 10, title: "Ferry to Jordan & Petra", description: "Ferry from Nuweiba to Aqaba. Transfer to Petra and check into your hotel." },
            { day: 11, title: "Petra Full Day Tour", description: "A guided exploration of the Rose-Red City of Petra, including the Treasury, Monastery, and Royal Tombs." },
            { day: 12, title: "Little Petra & Wadi Rum", description: "Visit Little Petra, then drive to Wadi Rum for a 4x4 desert safari and a Bedouin-style dinner in a luxury camp." },
            { day: 13, title: "Dead Sea & Amman", description: "Visit Kerak Castle, Mount Nebo, and Madaba. Experience floating in the Dead Sea before arriving in Amman." },
            { day: 14, title: "Final Departure", description: "Transfer to Amman International Airport for your departure flight." }
        ],
        inclusions: [
            "All hotel & cruise accommodation",
            "Sleeper train Cairo–Aswan",
            "Domestic flight Luxor–Sharm El-Sheikh",
            "Ferry Nuweiba–Aqaba",
            "All private transfers in Egypt & Jordan",
            "Expert private guiding in both countries",
            "All entrance fees",
            "4x4 Jeep tour in Wadi Rum",
            "Dead Sea visit",
            "Mount Sinai & St. Catherine Monastery",
            "All taxes and service charges"
        ],
        exclusions: [
            "International flights",
            "Egypt & Jordan visas",
            "Tips and personal expenses",
            "Optional tours"
        ]
    }
];
