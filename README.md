# Memory Match

A cute and fun **card matching game** built with HTML, CSS, and JavaScript. Flip the cards and try to match all the adorable icons! This game is **progressive web app (PWA) ready**, allowing offline play and installation on your device.

---

## 🎮 Features

- 4x4 card grid with 8 pairs of cute emoji icons.
- Responsive and touch-friendly for mobile devices.
- Flip two cards at a time to find matches.
- Displays a congratulatory message when all pairs are matched.
- Progressive Web App (PWA) support:
  - Offline caching with a service worker.
  - Installable on desktop and mobile.
- Lightweight and easy to customize.

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the game.
- **CSS3** – Styling and responsive grid layout.
- **JavaScript (ES6)** – Game logic and interactions.
- **Service Worker** – Offline support.
- **Web App Manifest** – PWA configuration.

---

## ⚡ How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/yourusername/memory-match.git
````

2. Navigate into the project folder:

```bash
cd memory-match
```

3. Open `index.html` in your browser (no server required for basic functionality).

**Optional:** To test the service worker and PWA features, serve the project using a local server:

```bash
# Using Python 3
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## 📂 Project Structure

```
memory-match/
│
├─ index.html         # Main HTML page
├─ style.css          # Game styling
├─ app.js             # Game logic and service worker registration
├─ manifest.json      # PWA manifest
├─ service-worker.js  # Offline caching
├─ icon.png           # App icon for PWA
└─ README.md          # Project documentation
```

---

## 🖌️ Customization

* Change the emoji icons by editing the `icons` array in `app.js`.
* Modify the grid size by adjusting `grid-template-columns` and `grid-template-rows` in `style.css`.
* Update theme colors in `style.css` and `manifest.json` to match your style.

---

## ✅ Compatibility

* Works in modern browsers: Chrome, Firefox, Edge, Safari.
* Touch-friendly for mobile devices.
* Offline support via service worker.

---

## 🌟 Contributing

Contributions are welcome!
Feel free to open issues or submit pull requests to improve the game.

---

## 📄 License

This project is licensed under the MIT License.

---
