const cards = [
  {
    name: "Aarav Patel",
    role: "Frontend Developer",
    description: "Builds clean UIs and loves React.",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400",
  },
  {
    name: "Neha Sharma",
    role: "UI/UX Designer",
    description: "Turns ideas into beautiful designs.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
  },
  {
    name: "Rohan Mehta",
    role: "Backend Engineer",
    description: "APIs, databases, and performance tuning.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  },
  {
    name: "Sara Khan",
    role: "Product Manager",
    description: "Keeps the team aligned and shipping.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
  },
  {
    name: "Kabir Singh",
    role: "Full Stack Dev",
    description: "From UI to server logic, does it all.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400",
  },
];

let card = "";
let body = document.querySelector("body");

cards.forEach(function (item) {
  card += `<div class="card">
      <img src=${item.image} alt="Profile Image" />
      <h1>${item.name}</h1>
      <h3>${item.role}</h3>
      <p>
        ${item.description}
      </p>
    </div>`;

  body.innerHTML = card;
});
