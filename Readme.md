# 🌦️ Weather API

![License](https://img.shields.io/badge/License-MIT-blue.svg)

A full-stack weather dashboard built with **TypeScript**, **Express**, **Vite**, and the **OpenWeatherMap API**. Users can search for any city and view current weather conditions and a 5-day forecast. All searched cities are stored in history and can be revisited or deleted.

---

## 📑 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

---

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:Calebfeliciano/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run locally**

   ```bash
   npm run start:dev
   ```

> This will start the server on port `3001` and the client (Vite) on `http://localhost:3000`

---

## 🔧 Usage

Once the app is running locally or deployed:

- Type a **city name** into the search bar and click **Search**
- The **current weather** and a **5-day forecast** will display
- Each city searched is saved to the **search history list**
- Click a city in the list to reload weather instantly
- Click the 🗑️ icon to delete a saved city from history
- Invalid city searches will show a friendly alert
- Uses OpenWeatherMap API and supports cities globally

👉 **Live App:** [https://weather-dashboard-a5uw.onrender.com]
> _(Replace with your actual Render URL)_

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 🤝 Contributing

Contributions are welcome and encouraged! To contribute:

1. Fork the repository
2. Create a new branch for your feature or fix:

   ```bash
   git checkout -b your-feature-name
   ```

3. Make your changes and commit them with clear messages
4. Push to your fork and open a **Pull Request**
5. Describe your changes clearly in the PR

---

## 🧪 Tests

There are currently no automated tests. Manual testing includes:

- Searching for cities
- Error handling for invalid inputs
- History persistence and deletion

---

## ❓ Questions

If you have any questions, feel free to reach out:

- GitHub: [Calebfeliciano](https://github.com/Calebfeliciano)
- Email: [Caleb.feliciano11@gmail.com](mailto:Caleb.feliciano11@gmail.com)

