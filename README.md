# News Jockey

News Jockey is a React-based web application that provides the latest news from various categories using the News API. The project is built with Vite for fast development and Tailwind CSS for styling.

## Features

- Fetches and displays news articles from the News API.
- Categories include Business, Entertainment, General, Health, Science, Sports, and Technology.
- Responsive design with Tailwind CSS.
- Navigation bar for easy category selection.
- Loading spinner for better user experience during data fetching.

## Project Structure

```
.env
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
public/
README.md
SampleOutput.json
src/
    App.css
    App.jsx
    assets/
    favicon_io/
    about.txt
    site.webmanifest
    components/
        About.jsx
        Navbar.jsx
        News.jsx
        NewsItem.jsx
        Spinner.jsx
    index.css
    main.jsx
tailwind.config.js
vite.config.js
```

## Installation

1. Clone the repository:
     ```sh
     git clone https://github.com/S-Ketan/news-jockey.git
     cd news-jockey
     ```

2. Install dependencies:
     ```sh
     npm install
     ```

3. Create a `.env` file in the root directory and add your News API key:
     ```
     VITE_API_KEY=your_news_api_key
     ```

## Usage

To use the application, you will need to have your own News API key. Follow these steps:

1. Ensure you have created a `.env` file in the root directory with your News API key:
    ```
    VITE_API_KEY=your_news_api_key
    ```

2. Start the development server:
    ```sh
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

4. Use the navigation bar to select different news categories and view the latest articles.

5. To build the project for production, run:
    ```sh
    npm run build
    ```

6. To preview the production build, run:
    ```sh
    npm run preview
    ```

Make sure to replace `your_news_api_key` with your actual API key from News API for the application to work correctly.

To start the development server, run:
```sh
npm run dev
```

To build the project for production, run:
```sh
npm run build
```

To preview the production build, run:
```sh
npm run preview
```

## Acknowledgements

- [News API](https://newsapi.org/) for providing the news data.
- [Vite](https://vitejs.dev/) for the development environment.
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework.
