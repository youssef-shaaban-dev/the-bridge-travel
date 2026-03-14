import Cairo_1 from "@/assets/images/Cairo-01.webp"
import Cairo_2 from "@/assets/images/Cairo-02.webp"
import Cairo_3 from "@/assets/images/Cairo-Cruise.webp"
import Cairo_4 from "@/assets/images/Cairo-Coptic.webp"
import Cairo_5 from "@/assets/images/Khan-El-Khalil.webp"

import Sphinx from "@/assets/images/Sphinx.webp"
import Sakkara_Pyramids from "@/assets/images/Sakkara-Pyramids.webp"
import Saladin_Citadel from "@/assets/images/Saladin-Citadel.webp"

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
        duration: "6 Days / 5 Nights (4 Nights Cairo - 1 Night Alexandria)",
        category: "Tour Egypt Packages",
        badge: "Best Seller",
        type: "Private Tour",
        inclusions: [
            "4 Nights hotel accommodation in Cairo on bed and breakfast basis.",
            "1 Nights hotel accommodation in Alexandria on bed and breakfast basis.",
            "1 Full day tour in Cairo visiting the Egyptian Museum, Pyramids, Sphinx & Khan El Khalili. with Lunch",
            "1 Full day tour in Cairo visiting Sakkara, Memphis & Old Cairo with Lunch",
            "1 Full day tour in Alexandria with Lunch",
            "All Transfers in Cairo.",
            "All your tours and excursions are with private A/C minivan",
            "The service of meet and assist at all your destinations.",
            "Multilingual expert Egyptologist guide.",
            "All your visits include entrance fees.",
            "Our prices include all taxes and services."
        ],
        exclusions: [
            "Visa Entry for Egypt.",
            "International Flights",
            "Personal items.",
            "Tipping.",
            "Any other items not mentioned.",
            "Any Optional tours."
        ],
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
            {
                day: 4, title: "Alexandria Day Trip", description: `
                -The Roman Theater
                -Pompey’s Pillar
                -The Catacomb of Kom El-Shoqafa
                -Followed by Visiting Alexandria Library from outside Also from outside you will Visit Qaytbay Citadel & El Mursi Abu Elabas.
                ` },
            {
                day: 5, title: "At Leisure or Optional Royal Cairo Tour", description: `
                Breakfast. Back to Cairo by A / C car, transfer you back to your Hotel. 
                Free Day 
                (Optional) Islamic and Coptic Cairo
                ` },
            { day: 6, title: "Smooth Departure", description: "Private transfer and assistance at the airport for your return flight." }
        ],


    },
    {
        id: 2,
        slug: "cairo-premium-experience",
        title: "6 Days / 5 Nights Cairo Experience",
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
            { day: 2, title: "Pyramids, Museum & Khan El Khalili", description: "Explore the Egyptian Museum, the Great Pyramids of Giza, the Sphinx, and Khan El Khalili Bazaar." },
            {
                day: 3, title: "Memphis & Old Cairo", description: `
                Sakkara the step Pyramids 
                - The Pyramids of Unas & Oser-Kaf the Mastaba. Then Memphis Then start your tour by visiting The Old part of Cairo, Christianity. We visit The Church of St. Barbara & Abu-Serga 
                - The Mosque of Amr Ibn El-Aas 
                ` },
            {
                day: 4, title: "Alexandria Day Tour", description: `
                Tour to Alexandria Visiting: 
                - The Roman Theater 
                - Then visit Pompay's Pillar.
                - Followed by visit to The Catacomb of Kom El-Shoqafa & Also from out side you will Visit Qaytbay Citadel & El Mursi Abu Elabas.
                Back to Cairo by A / C car, transfer you back to your Hotel. 
                ` },
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
        id: 3,
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
        duration: "7 Days / 6 Nights ( 3 Nights in Cairo   3 Nights in Nile Cruise (Aswan & Luxor) ",
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
            "3 Nights hotel accommodation in Cairo on bed and breakfast basis.",
            "3 Nights on Cruise board (Aswan & Luxor) full board (sightseeing included).",
            "1 Day tour in Cairo visiting the Egyptian Museum, the Great Pyramids, and Sphinx & Khan El Khalili.",
            "All transfers in Cairo, Luxor and Aswan",
            "Multilingual expert Egyptologist guide.",
            "All your tours and excursions are with Private A/C minivan.",
            "The service of meet and assist at all your destinations.",
            "All your visits include entrance fees.",
            "Our prices include all taxes and services.",
            "Flight : Cairo/ Aswan , Luxor / Cairo"
        ],
        exclusions: [
            "Visa Entry for Egypt.",
            "International Flights",
            "Personal items.",
            "Tipping.",
            "Any other items not mentioned.",
            "Any Optional tours."
        ]
    },
    {
        id: 4,
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
        duration: "9 Days / 8 Nights ( 2 Nights Cairo  -  1 Night Sleeper Train -   1 Nights Aswan  - 1 Nights Luxor - 3 Nights Hurghada)",
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
            "2 Nights hotel accommodation in Cairo on bed and breakfast basis.",
            "1 Nights hotel accommodation in Aswan on bed and breakfast basis",
            "1 Nights hotel accommodation in Luxor on bed and breakfast basis",
            "3 Nights hotel accommodation in Hurghada on Half Board basis",
            "1 Night Sleeper train on half board basis.",
            "1 Full day tour in Cairo visiting Egyptian Museum, Pyramids and Khan EL Khalili.",
            "1 Full day tour in Aswan visiting High Dam-Temple & Philae Temple.",
            "1 Full day tour in Luxor visiting the West & East Bank",
            "All transfers in Cairo, Aswan, Luxor and Hurghada",
            "All your tours and excursions are with Private A/C minivan.",
            "The service of meet and assist at all your destinations",
            "Multilingual expert Egyptologist guide.",
            "Our prices include all taxes and services.",
            "All your visits include entrance fees.",
            "Transfer by A/C car: Aswan / Luxor , Luxor / Hurghada",
            "Transfer by flight: Hurghada / Cairo"
        ],
        exclusions: [
            "International Flights",
            "Visa entry for Egypt.",
            "Personal items (laundry, telephone calls and meals….etc).",
            "Tipping.",
            "Any Optional tours."
        ]
    },
    {
        id: 5,
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
        duration: "10 Days / 9 Nights ( 3 Nights Cairo - 3 Nights Nile Cruise (Aswan & Luxor) - 3 Nights Sharm  El Sheik )",
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
            "3 Nights hotel accommodation in Cairo on bed and breakfast basis.",
            "3 Nights on Cruise board (Aswan & Luxor) Full board (sightseeing included).",
            "3 Nights hotel accommodation in Sharm El Sheikh on AL .",
            "1 Day tour in Cairo visiting the Egyptian Museum, Pyramids, Sphinx & Khan El Khalili.",
            "All transfers in Cairo, Aswan, Luxor and Sharm El Sheikh.",
            "Multilingual expert Egyptologist guide.",
            "All your tours and excursions are with private A/C minivan.",
            "The service of meet and assist at all your destinations.",
            "All your visits include entrance fees.",
            "Our prices include all taxes and services.",
            "Domestic airfare: Cairo / Aswan , Luxor / Sharm El Sheikh or Via Cairo , Sharm / Cairo"
        ],
        exclusions: [
            "Visa Entry to Egypt.",
            "International Flights.",
            "Tips",
            "Personal items (laundry and other items of a personal nature).",
            "Any meals not stated on the itinerary.",
            "Any Optional tours."
        ]
    },
    {
        id: 6,
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
        duration: "10 Days / 9 Nights ( 3 Nights Cairo - 3 Nights Nile Cruise (Aswan & Luxor) - 3 Nights Hurghada)",
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
            { day: 3, title: "Fly to Aswan & Nile Cruise", description: "Morning flight to Aswan. Visit Aswan High Dam and Philae Temple." },
            {
                day: 4, title: "Kom Ombo & Optional Abu Simbel", description: `
                Breakfast on board
                (Optional) Abu Simbel Temple  after tour back to Aswan
                Sail to Kom Ombo. 
                Visit the Temple Shared by The Two Gods Sobek and Haroeris. 
                ` },
            { day: 5, title: "Edfu & Sail to Luxor", description: "(B + L + D) with drinks. Visit the Temple of Horus in Edfu. Afternoon tea and Galabya Party while sailing to Luxor." },
            { day: 6, title: "Luxor West & East Bank", description: "(B + L + D) with drinks. Visit Valley of the Kings, Karnak, and Luxor temples. Private transfer to Hurghada." },
            { day: 7, title: "Hurghada Relaxation", description: "(B + L + D) with drinks. Free day to enjoy Hurghada's famous beaches and Red Sea water activities." },
            { day: 8, title: "Hurghada Leisure", description: "Another day at leisure or optional desert safari / sea excursion in Hurghada." },
            { day: 9, title: "Fly to Cairo & Ancient Cairo Tour", description: "Flight to Cairo. Visit Sakkara Step Pyramid, Memphis, and Old Cairo churches." },
            { day: 10, title: "Final Departure", description: "Transfer to Cairo International Airport for your departure flight." }
        ],
        inclusions: [
            "3 Nights hotel accommodation in Cairo on bed and breakfast basis.",
            "3 Nights hotel accommodation in Hurghada on Half board basis",
            "3 Nights on Cruise board (Aswan & Luxor) Full board (sightseeing included).",
            "1 Day tour in Cairo visiting the Egyptian Museum, Pyramids, Sphinx & Khan El Khalili.",
            "1 Full day tour in Cairo visiting Sakkara, Memphis & Old Cairo with Lunch",
            "All transfers in Cairo, Aswan, Luxor and Hurghada.",
            "Multilingual expert Egyptologist guide.",
            "All your tours and excursions are with private A/C minivan.",
            "The service of meet and assist at all your destinations.",
            "All your visits include entrance fees.",
            "Our prices include all taxes and services.",
            "Transfer by A/C Private Car: Luxor / Hurghada",
            "Transfer by flight: Cairo / Aswan , Hurghada / Cairo"
        ],
        exclusions: [
            "Visa Entry for Egypt.",
            "International Flights",
            "Personal items.",
            "Tipping.",
            "Any other items not mentioned.",
            "Any Optional tours."
        ]
    },
    {
        id: 7,
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
        duration: "14 Days / 13 Nights (2 Nights Cairo - 1 Night Sleeper Train -  3 Nights Nile Cruise (Aswan& Luxor) - 2 Nights Sharm El- Sheikh - 1 Night St. Catherine - 2 Nights Petra -1 Night Wadi Rum - 1 Night Amman)",
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
        description: "An extraordinary journey that connects the wonders of Ancient Egypt with the timeless beauty of Jordan - from the Pyramids and the Nile to Petra, Wadi Rum, and the Dead Sea. Note: The Nile cruises 3 nights sailing dates on Friday and Wednesday every week From Aswan so the client must be in Cairo before the sailing day by 2 days.",
        itinerary: [
            { day: 1, title: "Arrival in Cairo", description: "Arrival to Egypt. The Bridge Travel Representative will meet you at the airport, assist you through customs and will be with you to help you check into your hotel, review your itinerary, answer questions and most of all, help to make sure that your trip will be of the best experiences you've ever had. Overnight at your hotel in Cairo." },
            { day: 2, title: "Pyramids, Museum & Khan El Khalili", description: "(B+L) Breakfast. Then Meet with your Egyptologist tour guide at the lobby to enjoy your tour visiting to: The Egyptian Museum Then visit Great Pyramids - Cheops, Chephren & Mykerions. Next is a close-up look at Sphinx - Then continue to Khan El Khalili Bazaars. (Optional) Nile Dinner Cruise with Show including transportation, dinner, Belly Dancer, Tanura Show. Overnight at your hotel in Cairo." },
            { day: 3, title: "Sakkara, Memphis & Old Cairo", description: "(B + D) Breakfast. Then Meet with your Egyptologist tour guide to enjoy your tour visiting: Sakkara is 27-Km Southwest of Cairo. Including a visit to the step Pyramids of Followed by a visit to The Pyramids of Unas & Oser-Kaf the Mastaba. Tomb of Mereruka, Ti & Pta-Hotep (carved and painted tombs) -Then Memphis Then start your tour by visiting The Old part of Cairo, The Church of St. Barbara & Abu-Serga Followed by a Visit to The Mosque of Amr Ibn El-Aas Then you’ll Meet with The Bridge Travel representative who will Transfer you to the train station for your overnight Sleeper train to Aswan. Dinner on the train. Overnight in Sleeper train." },
            { day: 4, title: "Aswan Highlights", description: "(B + L + D) Breakfast Then Meet with l representative at the lobby to Transfer you to the domestic airport. Departure by the plane to Aswan. Arrival, meet & assist by our representatives Embarkation. Lunch on board. -Visit The High Dam The Philae temple and Felucca in Aswan Overnight in Aswan" },
            { day: 5, title: "Kom Ombo & Optional Abu Simbel", description: "(B + L + D) Breakfast on board (Optional) At early mooring 04:00 Abu Simbel Sail to Kom Ombo. -Afternoon Tea. Visit the Temple Shared by The Two Gods Sobek and Haroeris. -Dinner on board. Overnight in Kom Ombo ." },
            { day: 6, title: "Edfu & Sail to Luxor", description: "(B + L + D) early morning Sail to Edfu. Breakfast on board -Visit The Temple of Horus in Edfu. Cross the lock. Sail to Luxor. -Afternoon Tea. Dinner on board & Galabya party. Overnight in Luxor." },
            { day: 7, title: "Luxor West & East Bank – Fly to Sharm El-Sheikh", description: "(B + L + D) Breakfast on board. Disembarkation. (Optional) Hot Balloon: . Start your Day with Visiting the West Bank to see: -Valley of the Kings, Colossi of Memnon and Temple of Queen Hatshepsut. On the return journey stop at The Colossi of Memnon -Then visit the Temple of Queen Hatshepsut. Then Visiting the east Bank - Visit Karnak & Luxor Temples Then Meet with The Bridge Travel representative who will transfer you to the domestic airport. Departure by plane to Sharm El Sheikh. Arrival meets & assists by our local representatives and transfer to the hotel. Overnight at your hotel in Sharm El-Sheikh." },
            { day: 8, title: "Sharm El Sheikh Leisure", description: "(B+D) Breakfast. Leisure Day (Optional) Full day Tour: Snorkling in Ras Mohammed Overnight at your hotel in Sharm El Sheikh." },
            { day: 9, title: "St. Catherine & Mount Sinai", description: "(B + D) Breakfast Transfer by car to Saint Catherine, Then at 01:00 AM you’ll meet our representative who will transfer you to The park of the Monastery then to The Mountain peak, this is about 2200 m above sea level. Waiting for Sun Rise to shoot some photos. Overnight at your hotel in St.Catherine" },
            { day: 10, title: "Ferry to Jordan & Petra", description: "(B + D) After that start to go down breakfast back to start The visit of the monastery at 09.30 Transfer from St. Catherine to Nuweiba for ferry crossing to Aqaba. overnight at your hotel in Petra" },
            { day: 11, title: "Petra Full Day Tour", description: "(B + D) Breakfast. Today you will visit Petra, The \"Siq\", a long winding fissure between two walls of overhanging cliffs, The famous Treasury, The Street of Facades, The Court House and The Amphitheater. Overnight in Petra." },
            { day: 12, title: "Little Petra & Wadi Rum", description: "(B + D) Breakfast. Transfer to Wadi Rum. Enjoy spending the day in Wadi Rum Breakfast, transfer to visit Wadi Rum desert with 4X4 Jeep, dinner and Overnight at Camp in Wadi Rum" },
            { day: 13, title: "Dead Sea & Amman", description: "(B + D) Breakfast, Depart Petra, traveling north to Amman. On the way visit the crusader’s Castle of Kerak, Continue to Madaba, to visit St. George's Cathedral and The mosaic map of Jerusalem and to Mountain Nebo, the burial place of Moses perched on a cliff overlooking The Jordan Valley . Overnight in Amman" },
            { day: 14, title: "Final Departure", description: "(B) Breakfast at the hotel. Then Meet with representative at the lobby to Transfer you to Amman airport and assist you at the airport through final departure formalities." }
        ],
        inclusions: [
            "2 Nights hotel accommodation in Cairo on bed and breakfast basis.",
            "3 Nights Nile cruise Aswan – Luxor on Full board basis (sight seeing included).",
            "2 Nights hotel accommodation in Sharm El- Sheikh on bed and breakfast basis.",
            "1 Night hotel accommodation in St. Catherine on Half Board basis",
            "1 Night hotel accommodation in Amman on bed and breakfast basis",
            "1 Night camping on Wadi Rum",
            "2 Nights hotel accommodation in Petra on Half Board basis",
            "1 Night in Sleeper train on Half Board basis.",
            "1 Day tour in Cairo visiting the Egyptian Museum, Pyramids, Sphinx & Khan El Khalili.",
            "1 Day tour in Cairo visiting Sakkara, Memphis & Old Cairo",
            "Free Camel ride in Pyramids area. (10 Minutes for taking photo)",
            "1 Day in St. Catherine visiting the Monastery and Mosses Mountain.",
            "1 Day visit Petra",
            "1 Day visit Amman",
            "All transfers in Cairo, Luxor, Aswan, Sharm El-Sheikh, St. Catherine, Aqaba , Petra and Amman.",
            "All your tours and excursions are with private A/C minivan.",
            "The service of meet and assist at all your destinations",
            "Multilingual expert Egyptologist guide.",
            "All entrance fees.",
            "Ferry crossing Nuweiba / Aqaba.",
            "Transportation by A/C private car from: Sharm / St. Catherine , St. Catherine / Nuweiba",
            "Air fare: Luxor / Sharm El-Sheikh."
        ],
        exclusions: [
            "International Flights",
            "Visa entry for Egypt",
            "Personal items (laundry, telephone calls and meals….etc)",
            "Tipping",
            "Any Optional tours"
        ]
    },
    {
        id: 8,
        slug: "egypt-nile-hurghada-9days",
        title: "9 Days / 8 Nights Egypt, Nile Cruise & Hurghada",
        location: "Cairo, Nile Cruise & Hurghada",
        rating: 5.0,
        reviews: 24,
        isFeatured: true,
        price: 1670,
        rates: [
            { grade: "4★ Hotels / 5★ Deluxe Nile Cruise", price: 1670, description: "Premium Comfort" },
            { grade: "5★ Hotels / 5★ Deluxe Nile Cruise", price: 1720, description: "Ultimate Elegance", featured: true }
        ],
        duration: "9 Days / 8 Nights (2 Nights Cairo - 1 Night Sleeper Train - 3 Nights Nile Cruise (Aswan & Luxor) - 2 Nights Hurghada)",
        category: "Red Sea Packages",
        badge: "Special Offer",
        type: "Private Tour",
        includes: "Cairo | Nile Cruise | Hurghada",
        images: [
            Cairo_1,
            NileCruise,
            Luxor_1,
            Aswan_1
        ],
        description: "Note: The Nile cruises 3 nights sailing dates on Friday and Wednesday every week From Aswan so the client must be in Cairo before the sailing day by 2 days.",
        itinerary: [
            { day: 1, title: "Arrival in Cairo", description: "Arrival to Egypt. The Bridge Travel Representative will meet you at the airport, assist you through customs and will be with you to help you check into your hotel, review your itinerary, answer questions and most of all, help to make sure that your trip will be of the best experiences you've ever had. Overnight at your hotel in Cairo." },
            { day: 2, title: "Pyramids, Museum & Khan El Khalili", description: "(B + D) Breakfast. Start your tour visiting: -The Egyptian Museum Then visit Great Pyramids - Cheops, Chephren & Mykerions. Sphinx - -Then continue to Khan El Khalili Bazaars. Transfers to the train station for your overnight Sleeper train to Aswan. Dinner on the train. Overnight in Sleeper train." },
            { day: 3, title: "Aswan Highlights", description: "(B + L + D) Breakfast on the train. Arrival, meet & assist by The Bridge Travel representatives and transfer to the Cruise. Boarding before lunch, Embarkation. Lunch on board. -Visit The High Dam The Philae temple Felucca in Aswan Overnight in Aswan" },
            { day: 4, title: "Kom Ombo", description: "(B + L + D) Breakfast on board (Optional) Abu Simbel Sail to Kom Ombo. -Visit the Temple Shared by The Two Gods Sobek and Haroeris. -Dinner on board. Overnight in Kom Ombo ." },
            { day: 5, title: "Edfu & Sail to Luxor", description: "(B + L + D) early morning Sail to Edfu. Breakfast on board -Visit The Temple of Horus in Edfu. Cross the lock. Sail to Luxor. -Afternoon Tea. Dinner on board & Galabya party. Overnight in Luxor." },
            { day: 6, title: "Luxor West & East Bank – Transfer to Hurghada", description: "(B + L + D) Breakfast on board. Disembarkation. (Optional) Hot Balloon: Start your Day with Visiting the West Bank to see: -Valley of the Kings, Colossi of Memnon and Temple of Queen Hatshepsut. -On the return journey stop at The Colossi of Memnon Then visit the Temple of Queen Hatshepsut. Then Visiting the east Bank - Visit Karnak & Luxor Temples. Then Transfer you to Hurghada by A/C car, Arrive. Check-in Leisure Day Overnight at your hotel in Hurghada." },
            { day: 7, title: "Hurghada Leisure", description: "(B+D) Breakfast. Leisure Day Overnight at your hotel in Hurghada." },
            { day: 8, title: "Fly to Cairo & Optional Tour", description: "(B) Breakfast. Then Meet with The Bridge Travel representative at the lobby to Transfer you to the domestic airport. Departure by the plane to Cairo Arrival, meet & assist by Our representatives and transfer to your hotel. Check in. (Optional) Then Meet with your Egyptologist tour guide to enjoy your tour visiting: -Sakkara is 27-Km Southwest of Cairo. Including a visit to the step Pyramids of Sakkara (The first proper Pyramids built for the king Zoser, it is considered evolution of the Pyramid from the simple Mastaba to the Pyramid in its known form) Followed by a visit to The Pyramids of Unas & Oser-Kaf the Mastaba. Tomb of Mereruka, Ti & Pta-Hotep (carved and painted tombs) -Then Memphis the ancient capital of Egypt where Colossal Statue of Ramses II and the great Alabaster Sphinx, Then start your tour by visiting The Old part of Cairo, as Egypt was one of the first countries to embrace Christianity. We visit The Church of St. Barbara & Abu-Serga one of the places where the Holy Family rested after fleeing Israel from King Herod. At the turn of the century this little church, which dates from the 10th-century, was the most important pilgrimage spot in Old Cairo for visiting Christian tourists. There are 24 marble columns lining the central court, and a series of 12th-century icons depicting the 12 apostles. Followed by a Visit to The Mosque of Amr Ibn El-Aas the first and oldest mosque ever built on the land of Egypt. At the end of the day we will transfer you back to your hotel. The Cost is 95 USD$ Per Person. Overnight at your hotel in Cairo." },
            { day: 9, title: "Final Departure", description: "(B) Breakfast at the hotel. Then Meet with The Bridge Travel representative at the lobby to Transfer you to the airport and assist you at the airport through final departure formalities." }
        ],
        inclusions: [
            "2 Nights hotel accommodation in Cairo on bed and breakfast basis.",
            "1 Night sleeper train on Half Board basis.",
            "3 Nights Nile Cruise (Aswan & Luxor) Full board (sightseeing included).",
            "2 Nights hotel accommodation in Hurghada on Half Board basis",
            "1 Day tour in Cairo visiting the Egyptian Museum, Pyramids, Sphinx & Khan El Khalili.",
            "All transfers in Cairo, Aswan, Luxor and Hurghada.",
            "Multilingual expert Egyptologist guide.",
            "All your tours and excursions are with private A/C minivan.",
            "The service of meet and assist at all your destinations.",
            "All your visits include entrance fees.",
            "Our prices include all taxes and services.",
            "Transfer by A/C Private Car: Luxor / Hurghada",
            "Transfer by flight: Hurghada / Cairo"
        ],
        exclusions: [
            "Visa Entry for Egypt.",
            "International Flights",
            "Personal items.",
            "Tipping.",
            "Any other items not mentioned.",
            "Any Optional tours."
        ]
    }
];
