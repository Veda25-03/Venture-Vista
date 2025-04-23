// Package data with detailed information
const packagesData = {
  goa: {
    name: "Beaches of Goa",
    price: "₹24,999",
    duration: "5 Days, 4 Nights",
    location: "North & South Goa",
    image: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Experience the vibrant beaches and lively nightlife of India's most famous coastal destination. From serene beaches to adventurous water sports, Goa offers an unforgettable experience for everyone.",
    highlights: [
      "Visit to famous Calangute and Baga beaches",
      "Water sports activities",
      "Cruise on the Mandovi River",
      "Visit to Fort Aguada",
      "Tour of Old Goa churches",
      "Flea markets and beach shacks",
      "Spice plantation tour",
      "Dudhsagar Waterfall trip (seasonal)"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Goa",
        description: "Arrive at Goa International Airport. Transfer to your beachside hotel. Evening free to relax at the beach. Welcome dinner at a local restaurant."
      },
      {
        day: "Day 2",
        title: "North Goa Tour",
        description: "Visit famous beaches of North Goa including Calangute, Baga, and Anjuna. Enjoy water sports activities. Evening visit to a famous beach shack for dinner with live music."
      },
      {
        day: "Day 3",
        title: "Old Goa & Spice Plantation",
        description: "Morning visit to Old Goa churches, including Basilica of Bom Jesus. Afternoon tour of a spice plantation with traditional Goan lunch. Evening cruise on the Mandovi River with cultural performances."
      },
      {
        day: "Day 4",
        title: "South Goa Exploration",
        description: "Travel to the serene beaches of South Goa. Visit Colva and Palolem beaches. Explore the Cabo de Rama Fort. Evening free for leisure activities."
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "After breakfast, free time for last-minute shopping. Transfer to Goa International Airport for your departure flight."
      }
    ]
  },
  manali: {
    name: "Magical Manali",
    price: "₹29,999",
    duration: "6 Days, 5 Nights",
    location: "Manali, Rohtang",
    image: "https://images.pexels.com/photos/4652000/pexels-photo-4652000.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Discover the majestic Himalayan landscapes and snowy peaks of this mountain paradise. From adventure activities to peaceful monasteries, Manali offers an escape into the lap of nature.",
    highlights: [
      "Visit to Rohtang Pass (weather permitting)",
      "Solang Valley adventure activities",
      "Ancient Hadimba Temple tour",
      "Riverside camping experience",
      "Naggar Castle and art gallery visit",
      "Hot spring baths at Vashisht",
      "Local Kullu handicraft shopping",
      "River rafting in Beas River"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Manali",
        description: "Arrive at Bhuntar Airport/Manali Bus Stand. Transfer to your hotel. Evening explore the Mall Road. Overnight stay in Manali."
      },
      {
        day: "Day 2",
        title: "Local Sightseeing",
        description: "Visit ancient Hadimba Temple, Manu Temple, Vashisht hot water springs, and Buddhist Monastery. Evening free for leisure at Mall Road."
      },
      {
        day: "Day 3",
        title: "Solang Valley",
        description: "Full day excursion to Solang Valley. Enjoy adventure activities like paragliding, zorbing, and skiing (seasonal). Return to hotel by evening."
      },
      {
        day: "Day 4",
        title: "Rohtang Pass/Gulaba",
        description: "Early morning departure for Rohtang Pass (subject to permits and weather conditions) or Gulaba. Enjoy the snow activities. Return to Manali by evening."
      },
      {
        day: "Day 5",
        title: "Naggar & Kullu",
        description: "Visit Naggar Castle, Roerich Art Gallery, and Jana Waterfall. Afternoon visit to Kullu for river rafting and local market shopping."
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "After breakfast, check-out from the hotel. Transfer to Bhuntar Airport/Manali Bus Stand for your onward journey."
      }
    ]
  },
  kerala: {
    name: "Kerala Backwaters",
    price: "₹32,999",
    duration: "7 Days, 6 Nights",
    location: "Kochi, Munnar, Alleppey",
    image: "https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Cruise through serene backwaters and experience the lush greenery of God's Own Country. Kerala's unique culture, cuisine, and landscapes make it a must-visit destination.",
    highlights: [
      "Overnight stay in traditional houseboat",
      "Tea plantation tours in Munnar",
      "Kathakali dance performance",
      "Spice garden tour",
      "Ayurvedic massage experience",
      "Chinese fishing nets of Kochi",
      "Wildlife spotting at Periyar",
      "Traditional Kerala cuisine"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kochi",
        description: "Arrive at Cochin International Airport. Transfer to your hotel. Evening witness traditional Kathakali dance performance. Overnight in Kochi."
      },
      {
        day: "Day 2",
        title: "Kochi City Tour",
        description: "Visit Fort Kochi, Chinese Fishing Nets, St. Francis Church, Dutch Palace, and Jewish Synagogue. Afternoon proceed to Munnar (4-5 hours drive)."
      },
      {
        day: "Day 3",
        title: "Munnar Exploration",
        description: "Visit Eravikulam National Park, Tea Museum, Mattupetty Dam, and Echo Point. Evening free to explore the local market."
      },
      {
        day: "Day 4",
        title: "Munnar to Thekkady",
        description: "Morning drive to Thekkady (4 hours). Afternoon spice plantation tour. Evening boat ride on Periyar Lake for wildlife spotting."
      },
      {
        day: "Day 5",
        title: "Thekkady to Alleppey",
        description: "Morning drive to Alleppey (4 hours). Board your private houseboat for an overnight cruise through the backwaters of Kerala."
      },
      {
        day: "Day 6",
        title: "Alleppey to Kovalam",
        description: "Disembark from houseboat after breakfast. Drive to Kovalam beach (4 hours). Evening free to relax at the beach."
      },
      {
        day: "Day 7",
        title: "Departure",
        description: "After breakfast, transfer to Trivandrum International Airport for your departure flight."
      }
    ]
  },
  rajasthan: {
    name: "Royal Rajasthan",
    price: "₹36,999",
    duration: "8 Days, 7 Nights",
    location: "Jaipur, Udaipur, Jodhpur",
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Explore ancient forts, vibrant markets, and experience the royal heritage of Rajasthan. The land of kings offers a colorful mix of history, culture, and traditions.",
    highlights: [
      "Amber Fort elephant ride",
      "City Palace tour in Udaipur",
      "Boat ride on Lake Pichola",
      "Desert safari in Jaisalmer",
      "Traditional Rajasthani folk dance",
      "Mehrangarh Fort in Jodhpur",
      "Camel ride in the Thar Desert",
      "Shopping in local bazaars"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Jaipur",
        description: "Arrive at Jaipur International Airport. Transfer to your hotel. Evening visit to local markets. Welcome dinner with traditional Rajasthani cuisine."
      },
      {
        day: "Day 2",
        title: "Jaipur Exploration",
        description: "Visit Amber Fort (elephant ride), City Palace, Jantar Mantar Observatory, and Hawa Mahal. Evening light and sound show at Amber Fort."
      },
      {
        day: "Day 3",
        title: "Jaipur to Jodhpur",
        description: "Morning drive to Jodhpur (6 hours). Evening visit to local markets. Overnight in Jodhpur."
      },
      {
        day: "Day 4",
        title: "Jodhpur Sightseeing",
        description: "Visit Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, and Clock Tower Market. Evening folk dance performance."
      },
      {
        day: "Day 5",
        title: "Jodhpur to Udaipur",
        description: "Morning drive to Udaipur (6 hours), visiting Ranakpur Jain Temples en route. Evening arrive in Udaipur."
      },
      {
        day: "Day 6",
        title: "Udaipur Exploration",
        description: "Visit City Palace, Saheliyon ki Bari, Jagdish Temple, and Bhartiya Lok Kala Museum. Evening boat ride on Lake Pichola."
      },
      {
        day: "Day 7",
        title: "Udaipur to Jaipur",
        description: "Morning drive back to Jaipur (7 hours). Evening free for shopping and leisure activities."
      },
      {
        day: "Day 8",
        title: "Departure",
        description: "After breakfast, transfer to Jaipur International Airport for your departure flight."
      }
    ]
  }
};

export default packagesData;