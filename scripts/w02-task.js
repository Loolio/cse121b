/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Ekimomwor Peter LOOLIO";

const currentYear = new Date().getFullYear(); 

const profilePicture = "images/ImageLoolio.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

//currentYear = document.getElementById("#year")
yearElement.textContent = currentYear;

//imageElement.setAttribute("src", profilePicture);

/* Step 5 - Array */
let favFoods = ["Mutton", "Sardine", "Omelette", "Avocado", "Brocolli", "Sorghum", "Ghee"];
document.getElementById('food').innerHTML = favFoods;

let newFood = "Arrow roots";
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods}`;

// Remove the first element in the favorite food array
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

// Remove the last element in the favorite food array.
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;

// Append the array output with this final modified favorite foods array.










