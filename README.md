# CivicLens

CivicLens is an AI-powered platform that processes government PDFs to provide quick, accurate summaries and insights. Built using React for the frontend and FastAPI for the backend, it integrates HuggingFace models to extract meaningful information from complex documents.


## ⚠️ **Note:** The backend is currently inactive due to the expiration of the free hosting trial. To test the complete functionality, clone the repository and run it locally by following the setup instructions below.
Please checkout the embedded video for more understanding about the model functionality

![Image](https://private-user-images.githubusercontent.com/88955625/451353079-c49b1cc6-c072-43c6-81e5-220accaa74f0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDkwMzcyMTEsIm5iZiI6MTc0OTAzNjkxMSwicGF0aCI6Ii84ODk1NTYyNS80NTEzNTMwNzktYzQ5YjFjYzYtYzA3Mi00M2M2LTgxZTUtMjIwYWNjYWE3NGYwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA0VDExMzUxMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZkNWQzZWY0MjVhYWYyZjU1OGUyZTU1YWIzZWJlNDY4YTBhZDc2YjExZmM1NWIwNTA5YTU4ZTg0Y2ZlMWIzMmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.PlddyZf85aA0OdFJw4lVR60OygpWzgHVzXJcl8UqKUI)
Visit the live server [here](https://civiclens-gamma.vercel.app/)




https://github.com/user-attachments/assets/f5e90455-b832-4829-a853-a02ff093380e


## Features

- **AI-Powered Analysis**: Utilize artificial intelligence to analyze legislative documents and extract key insights.
- **Summaries**: Get concise summaries of complex legislative documents.
- **Interactive Dashboard**: Access a dashboard to view and manage your analyses.
- **Sentiment Analysis**: Analyze the sentiment of legislative documents to understand public opinion.

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **TypeScript**: A typed superset of JavaScript for better developer experience.

## Getting Started

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open the Application**: Navigate to `http://localhost:3000` in your browser.

## Project Structure

- `frontend/`: Contains the frontend code for the application.
  - `components/`: React components used throughout the application.
  - `src/app/`: Next.js app directory for routing and layout.


## .env Example
For the frontend, create a .env file with your HuggingFace API key:
```
VITE_HUGGINGFACE_API_KEY=your_api_key_here
```
## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
