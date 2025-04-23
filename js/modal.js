function openBookingModal(packageId) {
  const packageData = packagesData[packageId];
  if (!packageData) return;

  // Modal HTML content with direct form redirection
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
          <form id="package-booking-form" action="payment.html" method="POST">
            <div class="form-row">
              <div class="form-group">
                <label for="full-name">Full Name</label>
                <input type="text" id="full-name" name="full-name" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" class="form-control" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="travelers">Number of Travelers</label>
                <input type="number" id="travelers" name="travelers" class="form-control" min="1" value="2" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="travel-date">Travel Date</label>
                <input type="date" id="travel-date" name="travel-date" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="package-type">Package Type</label>
                <select id="package-type" name="package-type" class="form-control" required>
                  <option value="standard">Standard</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label for="special-requests">Special Requests</label>
              <textarea id="special-requests" name="special-requests" class="form-control" rows="3"></textarea>
            </div>
            
            <button type="submit" class="submit-btn">Proceed to Payment</button>
          </form>
        </div>
      </div>
    </div>
  `;

  modalPackageDetails.innerHTML = modalContent;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
