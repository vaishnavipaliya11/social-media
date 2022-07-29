import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Programming isn't about what you know; it's about what you can figure out.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vaishnavi",
    userId: "0af3d380-4d9e-4b80-88af-b0a59483de42",
    createdAt: "2022/01/01",
    userAvtar:"https://minimaltoolkit.com/images/randomdata/female/101.jpg",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "mohit kumar",
        text: "true",
        userAvtar:"https://minimaltoolkit.com/images/randomdata/male/95.jpg",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "React makes front-end easy.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Shraddha",
    userId: "0af3d380-4d9e-4b80-88af-b0a59483de42",
    userAvtar:"https://minimaltoolkit.com/images/randomdata/female/11.jpg",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The only way to learn a new programming language is by writing programs in it.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Shivam",
    userId: "0af3d380-4d9e-4b80-88af-b0a59483de44",
    userAvtar:"https://minimaltoolkit.com/images/randomdata/male/12.jpg",
    comments: [
      {
        _id: uuid(),
        username: "vaishnavi",
        text: "yes i have experienced this.",
        userAvtar:"https://minimaltoolkit.com/images/randomdata/female/101.jpg",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
