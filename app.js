// Class for creating the Social Network
class SocialNetwork {
    // Constructor to create the network itself
    constructor() {
        this.network = {};
    }

    // Add a person to the network
    addPerson(person) {
        if (!this.network[person]) {
            this.network[person] = [];
        }
    }

    // Add a friendship to the network
    addFriendship(person1, person2) {
        this.addPerson(person1);
        this.addPerson(person2);
        if (!this.network[person1].includes(person2)) {
            this.network[person1].push(person2);
        }
        if (!this.network[person2].includes(person1)) {
            this.network[person2].push(person1);
        }
    }

    // Find the sortest path for 2 people that are added to the network
    findShortestPath(startPerson, targetPerson) {
        // Check to see if the startPerson and targetPerson are in the network
        if (!this.network[startPerson] || !this.network[targetPerson]) {
            return 0;
        }

        // Create variables for finding the shortest path
        let queue = [[startPerson, 0]];
        let visited = new Set();
        visited.add(startPerson);

        // Main loop to check the length of the queue and find degrees of separation
        while (queue.length > 0) {
            let [currentPerson, degree] = queue.shift();

            // If the current persion is the target person the return the separation
            if (currentPerson === targetPerson) {
                return degree;
            }

            // Add firends to the queue and iterate the degree
            for (let friend of this.network[currentPerson]) {
                if (!visited.has(friend)) {
                    visited.add(friend);
                    queue.push([friend, degree + 1]);
                }
            }
        }

        // Return 0 if there is no connections
        return 0;
    }

    // Get all the friendships and display them on the page so its easier to find friendships
    getAllFriendships() {
        // Create friendships
        const friendships = [];

        // Iterate over tthe network to find friendships
        for (let person in this.network) {
            this.network[person].forEach(friend => {
                if (!friendships.includes(`${friend}-${person}`)) {
                    friendships.push(`${person}-${friend}`);
                }
            });
        }
        // Return the found friendships
        return friendships;
    }
}

// Initialize the network
const network = new SocialNetwork();

// DOM elements
const friendshipForm = document.getElementById('friendship-form');
const separationForm = document.getElementById('separation-form');
const resultOutput = document.getElementById('result-output');
const friendshipsList = document.getElementById('friendships-list');

// Function to display all friendships
function displayFriendships() {
    const friendships = network.getAllFriendships();
    friendshipsList.innerHTML = ''; // Clear current list

    // Find friendships for each pair
    friendships.forEach(pair => {
        const listItem = document.createElement('li');
        listItem.textContent = pair;
        friendshipsList.appendChild(listItem);
    });
}

// Handle adding friendships
friendshipForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Create variables for person1 and person2
    const person1 = document.getElementById('person1').value.trim();
    const person2 = document.getElementById('person2').value.trim();

    // If person1 and person2 exist then add a friendship between them
    if (person1 && person2) {
        network.addFriendship(person1, person2);
        displayFriendships(); // Update the displayed list
        friendshipForm.reset();
    }
});

// Handle finding degrees of separation
separationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Create variables for start person and target person
    const startPerson = document.getElementById('startPerson').value.trim();
    const targetPerson = document.getElementById('targetPerson').value.trim();

    // Check to see if start and target person exist and find the shortest path between them
    if (startPerson && targetPerson) {
        const degree = network.findShortestPath(startPerson, targetPerson);
        resultOutput.textContent = `Degrees of separation between ${startPerson} and ${targetPerson}: ${degree}`;
        separationForm.reset();
    }
});
