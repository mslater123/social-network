class SocialNetwork {
    constructor() {
        this.network = {};
    }

    addPerson(person) {
        if (!this.network[person]) {
            this.network[person] = [];
        }
    }

    addFriendship(person1, person2) {
        this.addPerson(person1);
        this.addPerson(person2);
        // Avoid adding duplicate friendships
        if (!this.network[person1].includes(person2)) {
            this.network[person1].push(person2);
        }
        if (!this.network[person2].includes(person1)) {
            this.network[person2].push(person1);
        }
    }

    findShortestPath(startPerson, targetPerson) {
        if (!this.network[startPerson] || !this.network[targetPerson]) {
            return 0;
        }

        let queue = [[startPerson, 0]];
        let visited = new Set();
        visited.add(startPerson);

        while (queue.length > 0) {
            let [currentPerson, degree] = queue.shift();

            if (currentPerson === targetPerson) {
                return degree;
            }

            for (let friend of this.network[currentPerson]) {
                if (!visited.has(friend)) {
                    visited.add(friend);
                    queue.push([friend, degree + 1]);
                }
            }
        }

        return 0;
    }

    getAllFriendships() {
        const friendships = [];
        for (let person in this.network) {
            this.network[person].forEach(friend => {
                if (!friendships.includes(`${friend}-${person}`)) {
                    friendships.push(`${person}-${friend}`);
                }
            });
        }
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

    friendships.forEach(pair => {
        const listItem = document.createElement('li');
        listItem.textContent = pair;
        friendshipsList.appendChild(listItem);
    });
}

// Handle adding friendships
friendshipForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const person1 = document.getElementById('person1').value.trim();
    const person2 = document.getElementById('person2').value.trim();

    if (person1 && person2) {
        network.addFriendship(person1, person2);
        displayFriendships(); // Update the displayed list
        friendshipForm.reset();
    }
});

// Handle finding degrees of separation
separationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const startPerson = document.getElementById('startPerson').value.trim();
    const targetPerson = document.getElementById('targetPerson').value.trim();

    if (startPerson && targetPerson) {
        const degree = network.findShortestPath(startPerson, targetPerson);
        resultOutput.textContent = `Degrees of separation between ${startPerson} and ${targetPerson}: ${degree}`;
        separationForm.reset();
    }
});
