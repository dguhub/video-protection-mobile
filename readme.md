<!-- @format -->

### **Video projection: Full Stack Live video streaming platform Mobile Application Documentation**

The application is a full-stack live video streaming platform developed using React Native for the frontend and NestJS with PostgreSQL for the backend. It provides a range of features, including viewing a list of videos, accessing detailed video information, and enabling user interaction through a commenting system. The platform is designed to deliver seamless performance and a user-friendly interface, catering to the needs of both content viewers and creators

#### Features

1. **User Management**

   - User Registration and Login: Users can create an account and securely log in to access personalized features.
   - Video Browsing: Users can explore a curated list of videos available on the platform.
   - Video Detail View: Users can view detailed information about individual videos, including title, description, and additional metadata.
   - Commenting System: Users can engage with video content by leaving comments and interacting with other viewers.
   - Profile Management: Users can manage their account details, including updating profile information.

#### Technology Stack

##### Frontend Libraries

- React Native
- Expo Image Picker
- Expo-router
- Expo-font
- React Native Snap Carousel

##### Backend Libraries

- Node.js
- NestJS
- TypeScript
- TypeORM
- JWT
- Bcrypt.js
- Passport.js
- Mongoose
- WebSocket
- Swagger
- PostgreSQL

#### Testing Instructions

To test the application:

1. **For Android Users:**

   - Download Expo Go on your Android smartphone.
   - Scan the provided QR code below within Expo Go.
   ![image](https://github.com/user-attachments/assets/26f0ea0e-730a-4046-b44f-7c7e791e4b7a)

)

2. **For iOS Users:**
   - Download Expo Go on your Apple smartphone.
   - Scan the provided QR code below within Expo Go.
   ![image](https://github.com/user-attachments/assets/37cf4b91-afa6-4237-ac08-730618d8920a)

)

**Note:** The backend server might experience a delay of up to 30 seconds due to server sleep as it is hosted on a free tier. This delay is not a bug but an issue related to free tier hosting.

#### Backend Setup

##### Environment Variables

Ensure the following environment variables are set for the backend:

- `PORT`
- `MONGODB_URI`
- `STRIPE_API_SECRET`
- `JWT_SECRET`
- `JWT_EXPIRES_TIME`
- `cookie_EXPIRES_TIME`
- `MYWEBSITE`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_EMAIL`
- `SMTP_PASSWORD`
- `SMTP_FROM_EMAIL`
- `SMTP_FROM_NAME`
- `CLOUDINARY_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

**Note:**

- If the backend is running locally, use the IPv4 address instead of "localhost". You can find the IPv4 Address by typing `ipconfig` in the command prompt.
- Modify the server link in `/mobile/stateManagement/store.js` to your server link followed by `/v2/api`, e.g., `http://localhost:5000/v2/api`.

#### Starting the Frontend

1. Navigate to the `mobile` directory.
2. Run `npm install` to install dependencies.
3. Initiate the application with `npm start`.

#### Starting the Backend

1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Start the backend server using `npm start`.

**Important:** Ensure that the backend environment variables are properly set before running the backend server.

### Swagger API Documentation

Explore the backend API documentation through Swagger using the provided link below:

[Postman API Documentation](https://video-protection-api-dev.dguhub.tech/documents)

Set the Postman environment variable `network` to eg`http://localhost:8000`.

This documentation provides an overview of the Live Video Streaming Application application, its features, technology stack, and setup instructions for both frontend and backend. For further development or testing, refer to this guide and ensure the necessary dependencies and configurations are in place.
