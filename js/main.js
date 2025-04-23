// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const modal = document.getElementById('booking-modal');
const closeModal = document.querySelector('.close-modal');
const modalPackageDetails = document.getElementById('modal-package-details');
const bookNowButtons = document.querySelectorAll('.book-now-btn');

// Package Data
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => bar.classList.toggle('active'));
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Book Now Button Click
bookNowButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const packageCard = e.target.closest('.package-card');
    const packageId = packageCard.dataset.id;
    openBookingModal(packageId);
  });
});

// Close Modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Close Modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Open Booking Modal Function
function openBookingModal(packageId) {
  const packageData = packagesData[packageId];
  
  if (!packageData) return;
  
  // Create modal content
  let modalContent = `
    <div class="package-details">
      <div class="package-details-img">
        <img src="${packageData.image}" alt="${packageData.name}">
      </div>
      <div class="package-details-content">
        <div class="package-details-title">
          <h2>${packageData.name}</h2>
          <span class="package-details-price">${packageData.price}</span>
        </div>
        <p>${packageData.description}</p>
        
        <div class="package-meta">
          <span><i class="fas fa-calendar-alt"></i> ${packageData.duration}</span>
          <span><i class="fas fa-map-marker-alt"></i> ${packageData.location}</span>
        </div>
        
        <div class="package-highlights">
          <h3>Highlights</h3>
          <div class="highlights-list">
            ${packageData.highlights.map(highlight => `
              <div class="highlight-item">
                <i class="fas fa-check-circle"></i>
                <span>${highlight}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="itinerary">
          <h3>Itinerary</h3>
          ${packageData.itinerary.map(day => `
            <div class="itinerary-day">
              <span class="day-title">${day.day}: ${day.title}</span>
              <p>${day.description}</p>
            </div>
          `).join('')}
        </div>
        
        <div class="booking-form">
          <h3>Book This Package</h3>
          <form id="package-booking-form">
            <div class="form-row">
              <div class="form-group">
                <label for="full-name">Full Name</label>
                <input type="text" id="full-name" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" class="form-control" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="travelers">Number of Travelers</label>
                <input type="number" id="travelers" class="form-control" min="1" value="2" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="travel-date">Travel Date</label>
                <input type="date" id="travel-date" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="package-type">Package Type</label>
                <select id="package-type" class="form-control" required>
                  <option value="standard">Standard</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label for="special-requests">Special Requests</label>
              <textarea id="special-requests" class="form-control" rows="3"></textarea>
            </div>
            
            <button type="submit" href="payment.html" class="submit-btn">Proceed to Payment</button>
          </form>
        </div>
      </div>
    </div>
  `;
  
  modalPackageDetails.innerHTML = modalContent;
  
  // Show modal
 // ... after modalPackageDetails.innerHTML = modalContent;
modal.style.display = 'flex';
document.body.style.overflow = 'hidden';

// === Replace your old listener with this ===
const bookingForm = document.getElementById('package-booking-form');
bookingForm.addEventListener('submit', function(e) {
  e.preventDefault();
  window.location.href = 'payment.html';
});

     // alert('Booking form submitted successfully! You will be redirected to payment page.');
    // form.reset();
    //modal.style.display = 'none';
    // document.body.style.overflow = 'auto';
  
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Skip for Book Now buttons
    if (this.classList.contains('book-now-btn')) return;
    
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    // Skip for empty hrefs or just #
    if (targetId === '#' || targetId === '') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      navLinks.classList.remove('active');
      
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for the navbar
        behavior: 'smooth'
      });
    }
  });
});