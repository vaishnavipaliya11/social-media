import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"tweet about web dev",
    portfolio:"www.adarshBalika.com",
    userImage:"https://minimaltoolkit.com/images/randomdata/female/101.jpg"
  },
  {
    _id: uuid(),
    firstName: "Mohit",
    lastName: "Kumar",
    username: "mohit46",
    password: "mohit123",
    portfolio: "https://Mohit-Kumar.netlify.app/",
    userImage:"https://minimaltoolkit.com/images/randomdata/male/95.jpg",
    bio: "I am learning python",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
