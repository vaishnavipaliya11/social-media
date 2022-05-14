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
    username: "Roman",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "When I wrote this code, only God and I understood what I did. Now only God knows.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Christina",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
