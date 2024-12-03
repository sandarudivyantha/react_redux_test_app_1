# Book Store - Redux Application

This **Book Store** web application is built using **React** and **Redux** to manage the state of the app. The app allows users to view a list of books and their details, and select a book to see more information.

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
