const parkingSpotsContainer = document.getElementByClass('parkingpspots');

		// Loop through 12 rows and 6 columns of parking spots
		for (let row = 1; row <= 12; row++) {
			for (let col = 1; col <= 6; col++) {
				let group;
				// Determine the group of columns
				if (col <= 2) {
					group = 'group-1';
				} else if (col <= 4) {
					group = 'group-2';
				} else {
					group = 'group-3';
				}
				// Determine the spot number
				const spotNum = (row - 1) * 6 + col;
				// Create the parking spot element
				const parkingSpot = document.createElement('div');
                parkingSpot.id = `spot-${spotNum}`;
				parkingSpot.classList.add('parking-spot', group);
				parkingSpot.textContent = spotNum;
				// Add the parking spot element to the container
				parkingSpotsContainer.appendChild(parkingSpot);
			}
		}