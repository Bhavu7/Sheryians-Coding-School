const h1 = document.querySelector("h1");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/";
const text = h1.innerText;

h1.addEventListener("mouseenter", () => {
  setInterval(() => {
    const str = text
      .split("")
      .map((char, index) => {
        return characters.split("")[
          Math.floor(Math.random() * characters.length)
        ];
      })
      .join("");

    h1.innerText = str;
  }, 50);
});
