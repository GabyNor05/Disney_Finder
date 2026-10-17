![Banner](./documentation/disney+Header.png)

# 📺 Disney+ Finder

Disney+ Finder is a React-based web application designed to help users quickly discover high-quality movies and TV shows available on Disney+. The app uses a curated dataset of Disney+ titles combined with metadata fetched from the [OMDb API](https://www.omdbapi.com/) (The Open Movie Database), a public API that provides reliable information such as IMDb ratings, release year, and genre.

---

## 💡 Overview

The goal of Disney+ Finder is to help users choose what to watch based on quality and popularity, rather than scrolling endlessly through categories. By comparing IMDb ratings, Metascore ratings, and Rotten Tomatoes ratings, users can identify the top-performing titles available on Disney+.

The app simplifies decision-making by visualising data and presenting clear comparisons.

---

# 🏗️ Tech Stack Overview

| Technology | Purpose |
|------------|---------|
| React | Core framework used to build the interface, manage components, and handle dynamic updates. |
| CSS + Bootstrap | Provides UI styling for layouts, dropdowns, spacing, and responsive design. |
|JavaScript | Logic for API calls, state handling, and data processing. |
| Axios | Asynchronous data retrieval. |
| OMDb API | Provides IMDb ratings, genre, and release-year metadata for selected titles. |
| Chart.js | Renders the interactive doughnut chart comparing IMDb, TMDb, and popularity values. |

---

# ⚙️ How to Run

#### 1️⃣ Clone the repo
```
git clone https://github.com/GabyNor05/Formative-One-Disney_Finder.git
```
#### 2️⃣ Open disney-finder file in the terminal:

```
cd disney-finder
```

#### 3️⃣ Install dependencies using the terminal:

```
npm install
```

#### 4️⃣ Run the app:

```
npm start
```

## Deploy to GitHub Pages

The GitHub Actions workflow builds the React app in `disney-finder/` and deploys its `build/` output. In the repository settings, open **Pages** and set the build and deployment source to **GitHub Actions**. Push to `deploy` or `main` to publish; the workflow can also be started manually from the Actions tab.

---

# 💡 Key Features

| Home Page | Compare Page |
| :--- | :--- |
| API overview details overview | Compare Title Details |
| Character Images | Compare Title IMBD Rating|
| Thumbnails | Compare Title Metascore Rating |
|  | Compare Title Rotten Tomato Rating |

## 🛠️ Built With
[![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
[![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![ChartJS](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

---

# 🧩 Development Process

## ✨ Highlights

#### I implemented a clean router-based navigation bar for intuitive page transitions. Created an interactive doughnut chart using Chart.js, visualising title-specific data, clearly and engagingly. Integrated character images and dynamic title selection to enhance user engagement. I built a custom dropdown component that dynamically loads titles from the API and updates the comparison page.

## ⚠️ Challenges

#### The initial Disney Plus Top Movies and TV Shows API was difficult to use due to its:

* Get-random endpoint is the only functional one.
* Get-list endpoint containing non-descriptive property names, making it hard to reliably access content. It only returned 10 items.
* The API I originally used had a 200 call limit per month. I had to use different emails to regain access, which caused delays.

#### Dropdown text visibility:

* Selected items appeared in dark text on a dark background, reducing legibility.

#### Alert box logic:

* Building the custom alert on the Compare page required extra debugging.

#### Chart data selection:

* Choosing which metrics to visualise in the doughnut chart required experimentation to ensure distinct, readable values.


## 🧪 Solution

#### To improve usability and reliability, the project transitioned to using the [OMDB API](https://www.omdbapi.com/), which provides consistent movie data and clearer property structures. This API resolved issues with:
* Data availability
* Naming conventions
* Fetch reliability

#### The dropdown visibility issue was fixed by adjusting the CSS state styling so that selected text remains legible against the background.

#### The alert box functionality on the comparison page was implemented using custom JavaScript, replacing the default browser alert for a more branded and user-friendly experience.

#### For the Chart.js doughnut chart, carefully selected data fields were used to ensure visual clarity and meaningful comparison.

---

# Demo Video

[Watch Demo Video](./documentation/Demo%20Video.mp4)

---

# 🚀 Future Implementations

* 🔐 User Login System
* 🕒 Timeline Page
* 🔍 Discover Page
* 📄 Single Title View Page

