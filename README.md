# Project Setup

## Getting Started

Follow the steps below to set up and run this project on your local machine.

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the Repository**

   ```sh
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Set Up Firebase Configuration**

   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Set up Firestore
   - Obtain your Firebase configuration credentials

3. **Create a Firebase Configuration File**

   - Inside the `src/` folder, create a new file named `config.js`
   - Add the following code to `config.js`:
     ```js
     export const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id",
     };
     ```
   - Replace the placeholder values with your actual Firebase credentials.

4. **Install Dependencies**

   ```sh
   npm install
   ```

5. **Run the Project**
   ```sh
   npm start
   ```

Your project should now be running locally!
