## Fruit.ai

Fruit.ai is a health management platform designed to help users gain insights into various fruits. The platform allows users to contribute and manage FAQs related to different fruits, providing helpful information on nutrition, benefits, and more. It also includes an integrated translator and chatbot for a more interactive and accessible user experience. Built using React and Vite for the frontend and Flask for the backend, it connects to a MongoDB database for persistent storage.


## Deployed Application

You can access the live version of Fruit.ai at:

https://fruit-ai-wine.vercel.app/


### Features

- User Login/Signup: Registration and login for users.
- FAQ Management: Easily add, delete, edit, and view FAQs about different fruits.
- Translator: Translate your queries into different languages for a global audience.
- Chatbot: An AI-powered chatbot to assist users with fruit-related queries.
- Responsive Design: Fully responsive design that works seamlessly across all devices.
 
### Tech Stack

- **Frontend:**
  - React.js + Vite
  - JavaScript
  - Tailwind CSS

- **Backend:**
  - Python
  - Flask
  - MongoDB

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download) installed
- [Python](https://www.python.org/downloads/) installed 
- [MongoDB](https://www.mongodb.com/try/download) installed or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) cloud account

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/gbgaurav007/Fruit.ai.git
   cd Fruit.ai
   ```

2. **Install Node Modules for frontend:**
    - Navigate to the `frontend` folder and install the dependencies:
      ```sh
      cd frontend
      npm install
      ```
      
3. **Install Python packages for backend:**
   - Navigate to the `backend` folder and create a virtual environment:
      ```sh
      cd ../backend
      python -m venv venv
      source venv/bin/activate    # On Windows: venv\Scripts\activate
      ```
   - Install required python packages
     ```sh
     pip install -r requirements.txt
     ```
     
### Running the application

1. **Setup Environment Variables:**
    - In the backend folder, create a file named `.env` and add the necessary variables (refer to the [Environment Variables](#environment-variables) section).

2. **Configure Base URL:**
    - Navigate to the `frontend/src/constants.js` file and update the `API_BASE_URL` file with the backend url on which you are running the Flask application (Default port = 5000):
      ```js
      // your backend url
      
      const API_BASE_URL = 'http://127.0.0.1:5000';
      export default API_BASE_URL;
      ```

3. **Start the Backend:**
    - In the `backend` folder, run the following command to start the backend Flask server:
      ```sh
      python app.py
      ```

4. **Start the Frontend:**
    - In the `frontend` folder, run the following command to start the frontend React development server:
      ```sh
      npm run dev
      ```

5.	Open your browser and navigate to http://localhost:5173 to access the Fruit.ai website.

## Environment Variables

Create a .env file inside the backend directory with the following variables:

```plaintext
MONGO_URI=your_mongodb_uri     # The MongoDB connection string
```

## Folder Structure

```plaintext
Fruit.ai/
├── backend/                   # Backend folder
│   ├── .env                   # Environment variables
│   ├── venv/                  # Virtual environment
│   ├── app.py                 # Flask app initialization
│   ├── requirements.txt       # Python dependencies
│   └── src/
│       ├── config/            # Database configuration
│       ├── models/            # MongoDB models
│       ├── controllers/       # Flask controllers for handling requests
│       └── services/          # Contains logic to perform acc to request
│
└── frontend/                  # Frontend folder
    ├── public/                # Public assets
    ├── src/                   # React components and pages
    ├── vite.config.js         # Vite configuration file
    └── tailwind.config.js     # Tailwind CSS configuration file
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, bugs, or enhancements.

Let me know if you’d like to make any adjustments!


