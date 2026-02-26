import Cairo_1 from "@/assets/images/Cairo-01.webp"
import Cairo_2 from "@/assets/images/Cairo-02.webp"
import Cairo_3 from "@/assets/images/Cairo-Cruise.webp"
import Cairo_4 from "@/assets/images/Cairo-Coptic.webp"
import Cairo_5 from "@/assets/images/Khan-El-Khalil.webp"

import Sphinx from "@/assets/images/Sphinx.webp"
import Sakkara_Pyramids from "@/assets/images/Sakkara-Pyramids.webp"
import Saladin_Citadel from "@/assets/images/Saladin-Citadel.webp"

import Egyptian_Museum_1 from "@/assets/images/Egyptian-Museum-01.webp"
import Egyptian_Museum_2 from "@/assets/images/Egyptian-Museum-02.webp"

import Abu_Simbel_1 from "@/assets/images/Abu-Simble-01.webp"
import Abu_Simbel_2 from "@/assets/images/Abu-Simble-02.webp"

import Alexandria_1 from "@/assets/images/Alexandria-01.webp"
import Alexandria_2 from "@/assets/images/Alexandria-02.webp"

import NileCruise from "@/assets/images/Nile-Cruise.webp"

import Aswan_1 from "@/assets/images/Aswan-01.webp"
import Aswan_3 from "@/assets/images/Aswan-03.webp"
import Aswan_7 from "@/assets/images/Aswan-07.webp"

import Luxor_1 from "@/assets/images/Luxor.webp"
import Luxor_2 from "@/assets/images/Luxor-02.webp"
import Luxor_3 from "@/assets/images/Luxor-03.webp"
import Luxor_4 from "@/assets/images/Luxor-04.webp"
import Luxor_5 from "@/assets/images/Luxor-05.webp"
import Luxor_6 from "@/assets/images/Luxor-06.webp"





export const excursionsData = [
    {
        id: 1,
        slug: "dinner-cruise-on-the-nile",
        title: "DINNER CRUISE ON THE NILE WITH BELLY DANCING SHOW",
        subtitle: "Private Evening Tour",
        images: [NileCruise, Cairo_1, Cairo_3, Cairo_2],
        duration: "4 Hours",
        location: "Cairo / Giza",
        price: 75,
        details: {
            operatingDays: "Daily",
            pickupLocation: "All Cairo & Giza Hotels",
            pickupTime: "About 18:00 pm",
            return: "in your hotel accommodation"
        },
        inclusions: [
            "Entry Fees",
            "All Taxes Services",
            "All Transfers by Private A/C Vehicles Newest Model",
            "Lunch (Dinner Buffet)"
        ],
        exclusions: [
            "Personal Items",
            "Tipping"
        ],
        tags: ["Evening", "Dinner", "Cultural Show"],
        category: "Day Excursions",
        itinerary: [
            {
                day: 1,
                title: "Dinner Cruise Experience",
                description: `Starts at 18:30 Pm Our Representative will Pick you up from your Hotel then transfer by Private A/C Vehicle to Nile Cruise Ship Then get on Board and Enjoy sailing for 2 Hours and enjoy watching the Belly Dancing.
                
                Enjoy the traditional Tanoura Show and enjoy the Open Buffet dinner with the view of the Nile. later you will be transferred back to your Hotel at 22:30 pm.`
            }
        ]
    },
    {
        id: 2,
        slug: "full-day-cairo-tour-religious-sights",
        title: "Full Day Cairo Day Tour to Christian & Islamic Sights",
        subtitle: "Private Tour",

        images: [Alexandria_1, Cairo_3, Alexandria_2, Cairo_4, Cairo_5],
        duration: "Full Day",
        location: "Cairo",
        price: 95,
        details: {
            operatingDays: "Daily",
            pickupLocation: "All Cairo & Giza Hotels",
            pickupTime: "About 8:00 am",
            return: "In your hotel accommodation"
        },
        inclusions: [
            "Entry Fees",
            "Expert Tour guide",
            "Lunch at Local restaurant",
            "All Taxes Services",
            "Bottle of Water",
            "All Transfers by Private A/C Vehicles Newest Model"
        ],
        exclusions: [
            "Personal Items",
            "Tipping"
        ],
        tags: ["Spiritual", "Religious", "History"],
        category: "Day Excursions",
        itinerary: [
            {
                day: 1,
                title: "Christian & Islamic Sights",
                description: `Cairo's day tours to Christian and Islamic Sights starts at 8:00 am Pickup from your hotel in Cairo By Our Tours guide to Start your full day tour visiting Old Cairo that known as Christian Coptic Cairo which is Among the most important locations visited by the Holy Family where the spiritual impact of their presence is most felt still, There you will be able to visit and Enter the Church of Abu-Sergah and St. Barbara, the hanging church, and the old jewish synagogue – Ben Ezra Synagogue. 
 
                Then continue your day tour to Islamic Cairo that was founded in 641 A.D By the First Muslam leader Amr Ibn Elas Over there in Islamic Cairo you will be able to Visit and Enter the Following Mosques \`Masjid\` Amr Ibn Elas Mosque that was built in 642 A.D By the Muslim leader Amr Ibn Elas at El FUSTAT area
                
                then followed by a visit to the Most and Biggest mosques in Cairo which is El Sultan Hassan Mosque that also known as \`Madrasa El Sultan Hassan\` that was founded by Sultan Hassan in 1356 A.D The Mosque-Madrassa of Sultan Hassan is a massive Mamluk era mosque and madrassa located near The Citadel in Cairo.

                Then followed by another big famous Mosque Which is Al-Rifa’i Mosque The building is located opposite the Mosque-Madrassa of Sultan Hassan, which dates from around 1361, and was architecturally conceived as a complement to the older structure.

                Then visit The Citadel of Cairo where you can visit the most famous mosque in Cairo which is Mohamed Ali\`s mosque that known as the Alabaster Mosque 
                Then End your day tour with a visit to Khan Khalili Bazaar 
                At the end of the Tour, you will be transferred back to your Hotel`
            }
        ]
    },
    {
        id: 3,
        slug: "egyptian-museum-pyramids-khan-el-khalili",
        title: "Full Day Tour: The Egyptian Museum, Great Pyramids & Khan El Khalili Bazaars",
        subtitle: "Duration: 6 - 8 hours",
        images: [Cairo_5, Cairo_4, Sphinx, Sakkara_Pyramids],
        duration: "6 - 8 Hours",
        location: "Cairo - Egypt",
        price: 110,
        details: {
            operatingDays: "Daily",
            pickupLocation: "All Cairo hotels",
            pickupTime: "About 9:00 am",
            return: "To your hotel after the tour"
        },
        inclusions: [
            "Private day trip to the Great Pyramids, Egyptian Museum and Khan el Khalili from Cairo",
            "Multilingual expert Egyptologist guide.",
            "All your tours and excursions are with private A/C minivan.",
            "The service of meet and assist at all your destinations.",
            "All your visits include entrance fees.",
            "Our prices include all taxes and services."
        ],
        exclusions: [
            "Visa Entry for Egypt.",
            "Personal items.",
            "Tipping.",
            "Any other items not mentioned."
        ],
        tags: ["Must-See", "History", "Professional Guide"],
        category: "Day Excursions",
        itinerary: [
            {
                day: 1,
                title: "Pyramids, Museum & Bazaar",
                description: `Pick you up from your Hotel In Cairo by our tour guide then Transfer to Giza pyramids in Private A/C start your Full Day Tour
                Visit The Famous Pyramids of Egypt which is Known as Giza Pyramids Where you See the Great pyramid of king Cheops then Enjoy 20 and get Back to the history then Our guide will take you to the Panoramic Place where you can see All Pyramids in one View then drive to Valley Temple or Mummification Temple the place where the dead body of King Chephren Was mummified it's also the same Place where you get Closer to the Sphinx Statue and our guide will assist you to intake some nice photos and he will choose the best Locations for taking a memorable Photos.

                Then Drive from Giza pyramids to Cairo City Center Where you Visit the Egyptian Museum one of the biggest museums in the World it Contains huge number of real Statues you will also able to see the treasures of King Tutankhamun.
                Then visit Khan El Khalili Bazaars. Shops in this district are legendary for fine brassware, copper, perfumes, leather, silver, gold, antiques …etc. At the end of the day we will transfer you back to your hotel.`
            }
        ]
    },
    {
        id: 4,
        slug: "giza-pyramids-egyptian-museum-nmec",
        title: "Full Day Tour: Giza Pyramids, Egyptian Museum & National Museum of Egyptian Civilization",
        subtitle: "Private Full-Day Tour",
        images: [Egyptian_Museum_1, Egyptian_Museum_2, Sakkara_Pyramids, Sphinx],
        duration: "Full Day",
        location: "Cairo / Giza",
        price: 120,
        details: {
            operatingDays: "Daily",
            pickupLocation: "All Cairo & Giza hotels",
            pickupTime: "Around 8:00 AM",
            return: "To your hotel after the tour"
        },
        tags: ["History", "Museums", "Private"],
        category: "Day Excursions",
        itinerary: [
            {
                day: 1,
                title: "Pyramids & Dual Museums",
                description: "Start your day with pickup from your hotel in Cairo or Giza. Your first stop is the legendary Giza Pyramids, including Great Pyramid of Cheops and the Sphinx. Then visit the world-famous Egyptian Museum. Proceed to the National Museum of Egyptian Civilization (NMEC) to explore the Royal Mummies Hall and unique artifacts. Enjoy lunch at a local restaurant before returning to your hotel."
            }
        ]
    },
    {
        id: 5,
        slug: "giza-sphinx-memphis-sakkara",
        title: "Full Day Tour: Giza Pyramids, Sphinx, Memphis, Sakkara",
        subtitle: "Private Tour",
        images: [Sphinx, Sakkara_Pyramids, Abu_Simbel_1, Abu_Simbel_2],
        duration: "Full Day",
        location: "Cairo / Giza",
        price: 130,
        details: {
            operatingDays: "Daily",
            pickupLocation: "All Cairo & Giza Hotels",
            pickupTime: "About 8:00 am",
            return: "To your hotel after the tour"
        },
        inclusions: [
            "Private day trip to the Great Pyramids and Sphinx, Sakkara and Memphis from Cairo",
            "Multilingual expert Egyptologist guide.",
            "All your tours and excursions are with private A/C minivan.",
            "The service of meet and assist at all your destinations.",
            "All your visits include entrance fees.",
            "Our prices include all taxes and services."
        ],
        exclusions: [
            "Visa Entry for Egypt.",
            "Personal items.",
            "Tipping.",
            "Any other items not mentioned."
        ],
        tags: ["Ancient Capital", "Step Pyramid", "Giza"],
        category: "Day Excursions",
        itinerary: [
            {
                day: 1,
                title: "Giza, Memphis & Sakkara",
                description: `Our Representative will pick you up from your Hotel in Cairo then Start your full day tour to Giza pyramids sphinx Memphis Sakkara.

                You will visit the great pyramids of the pharaohs of the 4th dynasty who built the great pyramid of King Cheops, the second pyramid of Chephren and the pyramid of Mekarenous, the famous statue of the Sphinx and the valley temple which was used for embalming process.

                During your tour at Giza pyramids there are other activities available to do such as getting inside one of the pyramids (extra charge), ride a camel (extra charge) or visit the solar boat museum (extra charge) at all of these activities.

                At the second stop you will visit Sakkara which was the grave yard of the pharaohs at the old kingdom time this sightseeing is very famous for the first pyramid complex ever built in Egypt devoted for King Zoser and built by his wise architect Imhotep where you will see the step pyramid, the papyrus columns and the remaining of the enclosure wall. Then visit one of the carved and painted tombs at the same area of Sakkara for no extra charge.

                Then visit Memphis the oldest capital of ancient Egypt where you see the laying down statue of King Ramses the second which made aut of one piece of limestone weighted 120 tons the visit the alabaster statue of the Sphinx which weighted 80 tons and there are other artifacts displayed within the same area.`
            }
        ]
    },
    {
        id: 6,
        slug: "grand-egyptian-museum-giza-pyramids",
        title: "Full Day Tour: Grand Egyptian Museum & GIZA PYRAMIDS",
        subtitle: "Private Tour",
        images: [Egyptian_Museum_2, Egyptian_Museum_1, Sphinx, Sakkara_Pyramids, Saladin_Citadel],
        duration: "Full Day",
        location: "Cairo / Giza",
        price: 125,
        details: {
            operatingDays: "Daily",
            pickupLocation: "All Cairo & Giza hotels",
            pickupTime: "Around 8:00 AM",
            return: "To your hotel after the tour"
        },
        inclusions: [
            "GIZA PYRAMIDS",
            "Grand Egyptian Museum",
            "Entry Fees",
            "Expert Tour guide",
            "Lunch at Local restaurant",
            "All Taxes Services",
            "Bottle of Water",
            "All Transfers by Private A/C Vehicles Newest Model"
        ],
        exclusions: [
            "Personal Items",
            "Tipping"
        ],
        tags: ["GEM", "Pyramids", "Luxury"],
        category: "Day Excursions",
        itinerary: [
            {
                day: 1,
                title: "GEM & Giza Pyramids",
                description: `Pick you up from your Hotel In Cairo by our tour guide then Transfer to Giza pyramids in Private A/C start your Full Day Tour
                Visit The Famous Pyramids of Egypt which is Known as Giza Pyramids Where you See the Great pyramid of king Cheops then Enjoy 20 and get Back to the history then Our guide will take you to the Panoramic Place where you can see All Pyramids in one View then drive to Valley Temple or Mummification Temple the place where the dead body of King Chephren Was mummified it's also the same Place where you get Closer to the Sphinx Statue and our guide will assist you to intake some nice photos and he will choose the best Locations for taking a memorable Photos.

                Then Grand Egyptian Museum 
                Enjoy a guided tour of the world’s largest archaeological museum. Marvel at the full collection of King Tutankhamen’s treasures and thousands of other artifacts. Learn about Egypt's ancient history in a modern, immersive environment.`
            }
        ]
    },
    {
        id: 7,
        slug: "luxor-east-west-bank",
        title: "FULL DAY TOUR IN LUXOR TO EAST AND WEST BANK",
        subtitle: "Private Tour",
        images: [Luxor_1, Luxor_2, Luxor_3, Luxor_4, Luxor_5, Luxor_6],
        duration: "Full Day",
        location: "Luxor",
        price: 165,
        details: {
            operatingDays: "Daily",
            pickupLocation: "All Luxor Hotels",
            pickupTime: "About 8:00 am",
            return: "in your hotel accommodation Luxor"
        },
        inclusions: [
            "All your tours and excursions are with private A/C minivan.",
            "Pick up services from your hotel in Luxor and return",
            "Private Licensed English-speaking Egyptologist guide",
            "Entrance fees to all the mentioned sites",
            "Our prices include all taxes and services.",
            "Lunch",
            "Bottle of water",
            "All service charges & taxes"
        ],
        exclusions: [
            "Visa Entry for Egypt.",
            "Personal items.",
            "Tipping.",
            "Any other items not mentioned."
        ],
        tags: ["Luxor", "Valley of the Kings", "Karnak"],
        category: "Day Excursions",
        itinerary: [
            {
                day: 1,
                title: "Luxor East & West Banks",
                description: `At 7:00 am Pickup from your Hotel or Nile Cruise in Luxor or even from Luxor airport by Our Representative then you will be transferred by Private A/C car to the West Bank where you will visit the Valley Of The Kings, the magnificence of the grandeur of architecture which was used for burial, there are many kings buried in this valley.The most known tombs are King Tutmosis I, Tutmosis III, Tut-Ankh-Amon, King Ramssess VI, King Mrenptah and AmonhotepII.
                
                Followed by a visit to the Temple of Queen Hatshepsut that known as El Dir El Bahari which was built by Queen Hatshepsut the daughter of Thutmosis I, who ruled Egypt about 20 years during the 18th Dynasty (approximately 1490-1469 B.C), the only pharaonic woman who reigned ancient Egypt.
                            
                Then continue your day Tour to The Colossi of Memnon which is remains of the mortuary temple of Amenhotep III.
                            
                Then Transfer to the East Bank visits in Luxor to continue your day Tour visiting Karnak Temple, the greatest example of worship in the history, dedicated to the God Amon, his wife Mut and their son Khonsu.
                            
                Finish your day tour by visiting the Temple Of Luxor, it was built by Amunhotep III in 18th Dynasty in the New Kingdom and it was completed by Ramses' II during the 19th Dynasty.`
            }
        ]
    },
    {
        id: 8,
        slug: "abu-simbel-from-aswan",
        title: "Full day Tour: Abu Simbel Temple by A/C Car (private)",
        subtitle: "Private by A/C Car",
        images: [Abu_Simbel_1, Abu_Simbel_2, Aswan_1, Aswan_3, Aswan_7],
        duration: "8 hours",
        location: "Aswan - Egypt",
        price: 110,
        details: {
            operatingDays: "Daily",
            pickupLocation: "All Aswan hotels",
            pickupTime: "2 Convoy: from 3:30 am to 11:00 am or from 11:00 am to 7:00 pm",
            return: "To your hotel in Aswan"
        },
        inclusions: [
            "Private day trip Full day Tour: Abu Simple Temple by A/C Car (private) from Aswan",
            "Multilingual expert Egyptologist guide.",
            "All your tours and excursions are with private A/C minivan.",
            "The service of meet and assist at all your destinations.",
            "All your visits include entrance fees.",
            "Our prices include all taxes and services."
        ],
        exclusions: [
            "Personal items.",
            "Tipping.",
            "Any other items not mentioned."
        ],
        tags: ["Abu Simbel", "Ramses II", "UNESCO"],
        category: "Day Excursions",
        itinerary: [
            {
                day: 1,
                title: "Abu Simbel Temples",
                description: `Pick you up from your Hotel in Aswan early morning to enjoy Abu Simbel by a private air-conditioned vehicle. The two Temples of Abu Simbel, with their unique style, are considered to be the masterpieces of ancient Egypt. They reflect the glory and grandeur of the new Kingdom. 

                The Egyptian government and UNESCO decided to co-operate in order to save these temples from the flood. The Temple of Ramsses II was dedicated to the four universal gods Ptah, Re-Her-Akhtey, Amun-Re, and to Ramsses II himself. The great Abu Simbel temple is also called The Sun Temple of Ramssess II.

                The Temple of Queen Nefertari is also Called Temple of Hathor who was the wife of the Sun God so in a symbolic way, the two Temples, that of Ramsses II and that of Nefertari, bring Ramesses II, Nefertari, Hathor and the Sun God together as one.

                At the end transfer you back to your Hotel.`
            }
        ]
    },
    {
        id: 9,
        slug: "alexandria-from-cairo",
        title: "FULL DAY TOUR TO ALEXANDRIA",
        subtitle: "Private Tour",
        images: [Alexandria_1, Alexandria_2, Cairo_1, Cairo_2, Cairo_3],
        duration: "Full Day",
        location: "Alexandria",
        price: 115,
        details: {
            operatingDays: "Daily",
            pickupLocation: "All Cairo & Giza Hotels",
            pickupTime: "About 8:00 am",
            return: "in your hotel accommodation"
        },
        inclusions: [
            "The Roman Theater",
            "The Catacomb of Kom El-Shoqafa",
            "Pompay's Pillar",
            "Entry Fees",
            "Expert Tour guide",
            "Lunch at Local restaurant",
            "All Taxes Services",
            "Bottle of Water",
            "All Transfers by Private A/C Vehicles Newest Model"
        ],
        exclusions: [
            "Personal Items",
            "Tipping"
        ],
        tags: ["Alexandria", "Coast", "Roman Context"],
        category: "Day Excursions",
        itinerary: [
            {
                day: 1,
                title: "Alexandria Highlights",
                description: `starts at 06:00 am with Pickup from your hotel in Cairo or Giza By Our Tours guide and transfer by Private A/C to Alexandria where it's 220 k/m away from Cairo. Arrive Alexandria around 9 am and start your day Tour there Visiting The Roman Theater (A theater with marble seats up to 800 spectators, Galleries, Section of mosaic flooring & a pleasure garden surrounded by Roman Villas & baths).

                Then a visit to The Catacomb of Kom El-Shoqafa (Tombs on three levels, also contains the Tri-cilium where relatives used to sit on stone benches to feast the dead, a center with relieves of bearded serpents, Inside are 2nd Century AD statues of Sobek & Anubis wearing Roman Armor).
                            
                Then visit Pompay's Pillar. Then from outside visit Alexandria Library & Also from outside you will Visit Qaytbay Citadel & El Mursi Abu Elabas where you can have a free walk on the Cornish.
                            
                Tour finishes with drop off at your hotel in Cairo you will be back to Cairo around 20:00 pm.`
            }
        ]
    },
    {
        id: 10,
        slug: "sound-light-show-giza-pyramids",
        title: "SOUND AND LIGHT SHOW AT GIZA PYRAMIDS",
        subtitle: "Evening Tour",
        images: [Sakkara_Pyramids, Sphinx, Abu_Simbel_1, Abu_Simbel_2],
        duration: "Evening",
        location: "Cairo / Giza",
        price: 70,
        details: {
            operatingDays: "Daily",
            pickupLocation: "All Cairo & Giza Hotels",
            pickupTime: "About 18:00 pm",
            return: "in your hotel accommodation"
        },
        inclusions: [
            "Entry Fees",
            "Expert Tour guide",
            "Lunch at Local restaurant",
            "All Taxes Services",
            "Bottle of Water",
            "All Transfers by Private A/C Vehicles Newest Model"
        ],
        exclusions: [
            "Personal Items",
            "Tipping"
        ],
        tags: ["Evening", "Show", "Legendary"],
        category: "Day Excursions",
        itinerary: [
            {
                day: 1,
                title: "Sound & Light Experience",
                description: "Around 18:00 pm we will pick you up from your Hotel in Cairo or Giza city then transfer you by private car with A/C to Enjoy one of the most amazing night show at Giza pyramids and after the show we will transfer you back to your Hotel in Cairo"
            }
        ]
    },
    {
        id: 11,
        slug: "overnight-tour-el-baharia",
        title: "Over Night Tour to El Baharia",
        subtitle: "Private Safari Tour",
        images: [Cairo_2, Sphinx, Sakkara_Pyramids], // Placeholder, please add real safari images later
        duration: "2 Days / 1 Night",
        location: "El Bahariya Oasis",
        price: 350,
        details: {
            operatingDays: "Daily",
            pickupLocation: "Cairo",
            pickupTime: "8:00 am",
            return: "To Cairo"
        },
        inclusions: [
            "1 night desert safari Camping / Hotel on full board basis.",
            "All transfers.",
            "Multilingual expert Egyptologist guide.",
            "All your tours and excursions are with 4x4.",
            "All your visits include entrance fees.",
            "Our prices include all taxes and services.",
            "Private day trip Full day Tour By Private Car +Tour Guide + Lunch"
        ],
        exclusions: [
            "Visa Entry for Egypt.",
            "Personal items.",
            "Tipping.",
            "Any other items not mentioned"
        ],
        tags: ["Safari", "Camping", "Oasis", "White Desert"],
        category: "Day Excursions",
        itinerary: [
            {
                day: 1,
                title: "Cairo to El Bahariya & White Desert",
                description: `Departure from Cairo at 8:00 am to El Bahariya Oasis (385km) about four hours.

Drive on a half asphalt / half of road towards the incredible White Desert. On the way we will stop at the Black and Crystal Mountain. Sunset at the white desert. Dinner

Overnight in White Desert (Camp)`
            },
            {
                day: 2,
                title: "El Bahariya Exploration & Return",
                description: `Breakfast. Back to El Bahariya Oasis’s Starting tour in El Bahariya Oasis’s city, and have lunch. Later we visit the temple of Alexander the great, tombs of the nobles and the English mountain. We join a camel caravan for one hour, later have dinner. Possibility of enjoying a bathe in the hot water of the spring.

                Then back to Cairo.
                            
                More Detail About Safari 
                Transportation: All the mentioned itinerary by 4WD Toyota land Cruiser newest model. Every 4WD will be equipped with: Powerful Diesel engines, Radio Am/Fm and cassette player, Cool bottle. The leading car will be equipped with: GPS system, First aid kit, Tour leader/Guide, Cool box.
                Tented camp will include: Spacious, well ventilated dome tents including Mattresses, blankets, sleeping bags and bed sheets. All necessary cooking gear, kitchen utensils, mugs and glassware. Binoculars, reference books on Egypt. Cool boxes, Trash bags, Ice boxes, Fire grill and cooking stoves.
                Accommodation: Camping or hotel used is clean (with hot water bathrooms, the best in the oases.)
                Food and Beverage: Breakfast: (Juice, tea, coffee, jam, cheese, beans, eggs and bread). Picnic lunch: (Fresh vegetables, white cheese, tuna, sardines, chips & fruits). Dinner: (Rice or pasta, cooked vegetables, soup and chicken or beef). (Tea & coffee with all meals .1 mineral water).`
            }
        ]
    }
];
