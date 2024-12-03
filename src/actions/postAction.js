//import { type } from "@testing-library/user-event/dist/type";
import { FETCH_BUTTON_CLICKED, SELECT_POST } from "./types";

export const fetchPosts = () => {
  return {
    type: FETCH_BUTTON_CLICKED,
    payload: [
      {
        userId: 1,
        id: 1,
        title: "Pride and Prejudice",
        body: "A witty and romantic tale of love and social standing in 19th century England.",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg" 
      },
      {
        userId: 2,
        id: 2,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        body: "A young hobbit, Frodo Baggins, is tasked with destroying the One Ring.",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654215925i/61215351.jpg"
      },
      {
        userId: 3,
        id: 3,
        title: "To Kill a Mockingbird",
        body: "Set in the American South during the Great Depression.",
        imageUrl: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        userId: 4,
        id: 4,
        title: "The Great Gatsby",
        body: "A classic American novel set in the Jazz Age.",
        imageUrl: "https://m.media-amazon.com/images/I/81Q6WkLhX4L._UF1000,1000_QL80_.jpg"
      },
      {
        userId: 5,
        id: 5,
        title: "1984",
        body: "A dystopian novel set in a totalitarian society.",
        imageUrl: "https://s3.amazonaws.com/adg-bucket/1984-george-orwell/3423-medium.jpg"
      },
    ],
  };
};

export const selectPost = (post) => {
  return {
    type: SELECT_POST,
    payload: post,
  };
};
