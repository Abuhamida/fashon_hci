import Data_img1 from "@/images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg";
import Data_img2 from "@/images/people/portrait-british-woman.jpeg";
import Data_img3 from "@/images/people/beautiful-woman-face-portrait-brown-background.jpeg";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Data = [
  {
    Name: "Don",
    full_name: "Don Haruko",
    full_position: "",
    about:
      "Over three years in business had the chance to work on variety of projects, with companies",

    Image: Data_img1,
    position: "Product, VP",
    about_details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.",
    ],
    contact: [
      { icon: FaYoutube, link: "" },
      { icon: FaWhatsapp, link: "" },
      { icon: FaInstagramSquare, link: "" },
    ],
  },
  {
    Name: "Kelly",
    full_name: "Kelly Lisa",
    full_position: "Global, Head of Marketing",
    about:
      "Over three years in business had the chance to work on variety of projects, with companies",
    Image: Data_img2,
    position: "Marketing",
    about_details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.",
    ],
    contact: [
      {
        icon: FaFacebook,
        link: "",
      },
      { icon: IoMailUnreadOutline, link: "" },
      { icon: FaLinkedin, link: "" },
    ],
  },
  {
    Name: "Marie",
    full_name: "Marie Sam",
    full_position: "Founder & CEO",
    about:
      "Over three years in business had the chance to work on variety of projects, with companies",
    Image: Data_img3,
    position: "Founder",
    about_details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.",
    ],
    contact: [
      { icon: IoMailUnreadOutline, link: "" },
      { icon: FaLinkedin, link: "" },
      { icon: FaTwitter, link: "" },
    ],
  },
];

import img1 from "@/images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg";
import img2 from "@/images/people/beautiful-woman-face-portrait-brown-background.jpeg";
import img3 from "@/images/people/portrait-british-woman.jpeg";
import img4 from "@/images/people/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg";

export const Data_testimonial = [
  {
    name: "George",
    work: "Digital Art Fashion",
    rate: "Over three years in business, We've had the chance to work on a variety of projects, with companies Lorem ipsum dolor Sit amet",
    image: img1,
  },
  {
    name: "Sandar",
    work: "Zoom Fashion Idea",
    rate: "Over three years in business, We've had the chance to work on a variety of projects, with companies Lorem ipsum dolor Sit amet",
    image: img2,
  },
  {
    name: "Marie",
    work: "Art Fashion Design",
    rate: "Over three years in business, We've had the chance to work on a variety of projects, with companies Lorem ipsum dolor Sit amet",
    image: img3,
  },
  {
    name: "Catherine",
    work: " Dress Fashion",
    rate: "Over three years in business, We've had the chance to work on a variety of projects, with companies Lorem ipsum dolor Sit amet",
    image: img4,
  },
];
