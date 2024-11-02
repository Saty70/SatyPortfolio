const roles = ["Student", "Developer", "Satyam"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing each letter (in ms)
const roleChangeDelay = 1000; // Time between full text transitions (in ms)

function typeRole() {
    const roleElement = document.getElementById("role");
    const currentRole = roles[index];

    // Check if the current role is "Satyam" and change the color
    if (currentRole === "Satyam") {
        roleElement.style.color = "rgb(43, 240, 69)";
    }
    else {
        roleElement.style.color = "#fff"; // Default color for other roles
    }

    if (charIndex < currentRole.length) {
        // Add the next character to the text
        roleElement.textContent += currentRole.charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, typingSpeed); // Call the function again to type the next letter
    } else {
        // When the word is fully typed, wait for a bit, then clear it
        setTimeout(() => {
            roleElement.textContent = ''; // Clear text
            charIndex = 0; // Reset character index
            index = (index + 1) % roles.length; // Move to next role
            typeRole(); // Start typing the next role
        }, roleChangeDelay); // Wait before clearing and typing next role
    }
}

// Initialize typing
typeRole();