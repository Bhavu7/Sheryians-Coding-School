var teams = [
  {
    teamName: "MI",
    players: ["Rohit Sharma", "Kieron Pollard", "Jasprit Bumrah"],
    primary: "#004BA0",
    secondary: "#FFC300",
  },
  {
    teamName: "CSK",
    players: ["MS Dhoni", "Suresh Raina", "Ravindra Jadeja"],
    primary: "#F9DD16",
    secondary: "#0000FF",
  },
  {
    teamName: "RCB",
    players: ["Virat Kohli", "AB de Villiers", "Yuzvendra Chahal"],
    primary: "#D50032",
    secondary: "#000000",
  },
  {
    teamName: "KKR",
    players: ["Eoin Morgan", "Andre Russell", "Sunil Narine"],
    primary: "#3D2C8D",
    secondary: "#F6F1F1",
  },
  {
    teamName: "SRH",
    players: ["David Warner", "Kane Williamson", "Bhuvneshwar Kumar"],
    primary: "#FF6F00",
    secondary: "#000000",
  },
  {
    teamName: "DC",
    players: ["Shikhar Dhawan", "Rishabh Pant", "Kagiso Rabada"],
    primary: "#004080",
    secondary: "#FF0000",
  },
  {
    teamName: "PBKS",
    players: ["KL Rahul", "Mayank Agarwal", "Arshdeep Singh"],
    primary: "#FF0000",
    secondary: "#000000",
  },
  {
    teamName: "RR",
    players: ["Sanju Samson", "Jos Buttler", "Yashasvi Jaiswal"],
    primary: "#254AA5",
    secondary: "#ED1C24",
  },
  {
    teamName: "GT",
    players: ["Hardik Pandya", "Shubman Gill", "Rashid Khan"],
    primary: "#1C6DD0",
    secondary: "#F5C518",
  },
  {
    teamName: "LSG",
    players: ["KL Rahul", "Quinton de Kock", "Ravi Bishnoi"],
    primary: "#FFA500",
    secondary: "#000000",
  },
];

let colorDisplay = document.getElementById("colorDisplay");
let playerName = document.getElementById("playerName");
let teamName = document.getElementById("teamName");
let guessTeam = document.getElementById("guessTeam");

guessTeam.addEventListener("click", function () {
  var randomTeam = teams[Math.floor(Math.random() * teams.length)];

  let playerNames = randomTeam.players.join(", ");

  colorDisplay.style.background = `linear-gradient(90deg, ${randomTeam.primary}, ${randomTeam.secondary})`;
  playerName.textContent = playerNames;
  teamName.textContent = randomTeam.teamName;
});
