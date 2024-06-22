# 🌤️ Weather App Project

## 📚 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [License](#license)

## 🌟 Project Overview

The Weather App is a web application designed to provide users with real-time weather information. Built using the Django framework for the backend and a combination of HTML, CSS, and JavaScript for the frontend, this app allows users to search for and view current weather conditions for different cities. The application is deployed on Heroku for easy access and scalability.

## 🚀 Features

- 🌐 Real-time weather data retrieval.
- 📱 Responsive design for seamless user experience across devices.
- 🔐 User authentication and personalized settings.
- 🛠️ Error handling and graceful degradation for reliable performance.
- 🔄 Interactive UI for searching and displaying weather information.
- ⚡ Caching to improve performance and reduce redundant API calls.

## 🛠️ Technologies Used

### Backend
- **🐍 Python**: Core programming language.
- **🌍 Django**: Web framework for building the backend.
- **🔗 Django REST Framework**: For building APIs.

### Frontend
- **📄 HTML**: Structure of the web pages.
- **🎨 CSS**: Styling for the web pages.
- **💻 JavaScript**: Interactive elements and dynamic content.
- **⚡ AJAX**: For asynchronous data loading and updates.

### Deployment
- **🚀 Heroku**: Platform for deploying the application.

### APIs
- **🌦️ OpenWeatherMap API**: For fetching weather data.

## 📝 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add your API keys and other environment variables:
   ```plaintext
   SECRET_KEY=your_secret_key
   DEBUG=True
   ALLOWED_HOSTS=localhost,127.0.0.1
   OPENWEATHERMAP_API_KEY=your_api_key
   ```

5. **Apply migrations:**
   ```bash
   python manage.py migrate
   ```

6. **Start the development server:**
   ```bash
   python manage.py runserver
   ```

## 💻 Usage

1. **Access the application:**
   Open your web browser and navigate to `http://127.0.0.1:8000`.

2. **Search for weather information:**
   Enter the name of the city in the search bar and view the current weather details.

3. **User Authentication:**
   Sign up for an account to save your preferred settings and view personalized weather updates.

## 🚀 Deployment

1. **Prepare for Heroku deployment:**
   Ensure you have the Heroku CLI installed and are logged in.
   ```bash
   heroku login
   ```

2. **Create a Heroku app:**
   ```bash
   heroku create your-app-name
   ```

3. **Push the code to Heroku:**
   ```bash
   git push heroku main
   ```

4. **Set environment variables on Heroku:**
   ```bash
   heroku config:set SECRET_KEY=your_secret_key
   heroku config:set DEBUG=False
   heroku config:set ALLOWED_HOSTS=your-app-name.herokuapp.com
   heroku config:set OPENWEATHERMAP_API_KEY=your_api_key
   ```

5. **Run database migrations on Heroku:**
   ```bash
   heroku run python manage.py migrate
   ```

6. **Open your deployed app:**
   ```bash
   heroku open
   ```

## 🤝 Contributing

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes and commit them:**
   ```bash
   git commit -m "Add some feature"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a pull request.**

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
