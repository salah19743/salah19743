function submitCrimeReport() {
    const location = document.getElementById("location").value;
    const crimeType = document.getElementById("crimeType").value;
    const crimeDescription = document.getElementById("crimeDescription").value;

    if (location && crimeType && crimeDescription) {
        const crimeList = document.getElementById("crimeList");
        const currentDate = new Date().toLocaleString();

        const newCrimeItem = document.createElement("li");
        newCrimeItem.innerHTML = `<strong>${currentDate}</strong>: ${crimeType} - ${crimeDescription} (lokation: ${location})`;
        crimeList.insertBefore(newCrimeItem, crimeList.firstChild);

        document.getElementById("location").value = "";
        document.getElementById("crimeType").value = "";
        document.getElementById("crimeDescription").value = "";

       
        showPopup();
    } else {
        alert("Udfyld venligst alle felter.");
    }
}

function showPopup() {
    const popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "flex";
}

function closePopup() {
    const popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "none";
}

function simulateRealTimeUpdates() {
    const crimeList = document.getElementById("crimeList");

    setInterval(() => {
        const currentDate = new Date().toLocaleString();
        const randomCrime = getRandomCrime();

        const newCrimeItem = document.createElement("li");
        newCrimeItem.innerHTML = `<strong>${currentDate}</strong>: ${randomCrime.description} - ${randomCrime.location}`;
        crimeList.insertBefore(newCrimeItem, crimeList.firstChild);
    }, 42000); 
}

function getRandomCrime() {
    const crimeTypes = ["Tyveri", "Overfald", "Bedrageri", "Vold", "Narkotika", "Voldtægt", "Computorkriminalitet", "Brandstiftelse" ];
    const locations = ["København", "Århus", "Odense", "Aalborg", "Esbjerg", "Sønderborg", "Kolding", "Skagen","Skanderborg" ];

    const randomType = crimeTypes[Math.floor(Math.random() * crimeTypes.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];

    return {
        description: randomType,
        location: randomLocation
    };
}

simulateRealTimeUpdates();

function showSignupPopup() {
    const signupPopup = document.getElementById("signupPopup");
    signupPopup.style.display = "flex";
}

function closeSignupPopup() {
    const signupPopup = document.getElementById("signupPopup");
    signupPopup.style.display = "none";
}

function handleSignup(event) {
    event.preventDefault();
    closeSignupPopup();
}

document.addEventListener("DOMContentLoaded", function() {
    showSignupPopup();
});

