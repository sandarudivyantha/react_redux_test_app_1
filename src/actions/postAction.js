export const fetchPosts = () => {
  return {
    type: "FETCH_BUTTON_CLICKED",
    payload: [
      {
        userId: 1,
        id: 1,
        title: "Pride and Prejudice",
        body: "A witty and romantic tale of love and social standing in 19th century England. Elizabeth Bennet, a spirited young woman, must overcome societal expectations and prejudice to find true love with the enigmatic Mr. Darcy.",
      },
      {
        userId: 2,
        id: 2,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        body: "A young hobbit, Frodo Baggins, is tasked with destroying the One Ring, a powerful artifact that threatens the world. Joined by a fellowship of brave companions, he embarks on a perilous journey to Mordor.",
      },
      {
        userId: 3,
        id: 3,
        title: "To Kill a Mockingbird",
        body: "Set in the American South during the Great Depression, this coming-of-age story explores themes of racial injustice and the loss of innocence. Young Scout Finch learns valuable lessons about life and humanity from her wise father, Atticus Finch.",
      },
      {
        userId: 4,
        id: 4,
        title: "The Great Gatsby",
        body: "A classic American novel set in the Jazz Age, exploring themes of wealth, class, love, and the American Dream. The enigmatic Jay Gatsby throws lavish parties in hopes of reuniting with his lost love, Daisy Buchanan.",
      },
      {
        userId: 5,
        id: 5,
        title: "1984",
        body: "A dystopian novel set in a totalitarian society where the government controls every aspect of life. The protagonist, Winston Smith, rebels against the oppressive regime and questions the nature of truth and reality.",
      },
    ],
  };
};
