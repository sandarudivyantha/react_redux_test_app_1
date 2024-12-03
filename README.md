# Book Store - Redux Application

This **Book Store** web application is built using **React** and **Redux** to manage the state of the app. The app allows users to view a list of books and their details, and select a book to see more information. This application is a React-based application that demonstrates the usage of Redux for state management. The app includes fetching and displaying book details, selecting a book, and showcasing it dynamically.

## Features
- **Redux State Management**: The project uses `@reduxjs/toolkit` and `redux-thunk` for efficient state management.
- **Dynamic Book Display**: Books are displayed as cards with images, titles, and descriptions.
- **Responsive Design**: The application is fully responsive, providing a great user experience on any device.
- **Redux DevTools**: Debugging state changes using Redux DevTools.

## Deployment
The application is live and accessible at:
[React Redux Test Application](https://sandarudivyantha.github.io/react_redux_test_application_1/)

## Redux Features Used

In this project, **Redux** is used to manage the global state of the application. Here's a summary of the key Redux features implemented:

### 1. **Actions**
Actions in Redux are used to send data from the application to the Redux store. In this project, there are two main actions:
- One action is triggered when the "Click Me" button is pressed to fetch the list of books.
- Another action updates the store with the details of the selected book.

### 2. **Reducers**
Reducers specify how the state of the application changes in response to actions. This project uses two reducers:
- One handles the list of all books.
- The other manages the details of the selected book.

### 3. **Store**
The **Redux store** holds the entire state of the application. It is created by combining the reducers and applying middleware to manage state changes effectively.

### 4. **Provider**
The **Provider** component from `react-redux` is used to pass the Redux store to the entire application, making the state accessible throughout the app.

### 5. **Connecting Redux to Components**
React components connect to Redux to access the state and dispatch actions. Components like the book list and selected post are connected to Redux to fetch the necessary data and display it.

---

This project uses Redux to centralize the state management, making the app more scalable and easier to manage, especially as it grows in complexity.

---

## Screenshots

### Main Page
![1](https://github.com/user-attachments/assets/abc4e79b-1f03-45a7-9fe1-a3bea5be682c)

### All Books Details Display
![2](https://github.com/user-attachments/assets/ca8a1944-07fa-4071-baa6-4ce42e99a4d8)

### Book Details Display
![4](https://github.com/user-attachments/assets/832524ae-9ee0-4f68-9991-bd46a263bfed)

### Redux DevTools
![5](https://github.com/user-attachments/assets/6f5fecef-0ba2-4d3f-8ba1-4f60230ec275)


## Getting Started

### Prerequisites
- Node.js (version 14 or above)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sandarudivyantha/react_redux_test_app_1.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react_redux_test_app_1
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
