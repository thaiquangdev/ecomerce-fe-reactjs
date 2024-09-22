import { icons } from "./icons";
import banner1 from "../assets/images/banner-1.png";
import banner2 from "../assets/images/banner-2.png";
import banner3 from "../assets/images/banner-3.png";
import bestDealImg1 from "../assets/images/best-deal-img-1.png";
import bestDealImg2 from "../assets/images/best-deal-img-2.png";
import bestDealImg3 from "../assets/images/best-deal-img-3.png";
import bestDealImg4 from "../assets/images/best-deal-img-4.png";

const { IoFlashOutline } = icons;

export const homeBanner = [
  {
    topTitle: {
      icon: IoFlashOutline,
      title: "Mega Sale Madness! Enjoy 50% off",
    },
    title: "Spark Your Savings on Electronics!",
    description:
      "New Electronics Deals Added! Explore the latest discounts on cameras, wearables, and smart home devices.",
    img: banner1,
  },
  {
    topTitle: {
      icon: IoFlashOutline,
      title: "Mega Sale Madness! Enjoy 30% off",
    },
    title: "Mobile Madness - Save Big Today!",
    description:
      "New Electronics Deals Added! Explore the latest discounts on cameras, wearables, and smart home devices.",
    img: banner2,
  },
  {
    topTitle: {
      icon: IoFlashOutline,
      title: "Mega Sale Madness! Enjoy 30% off",
    },
    title: "Wrist Tech Marvels on a Budget!",
    description:
      "New Electronics Deals Added! Explore the latest discounts on cameras, wearables, and smart home devices.",
    img: banner3,
  },
];

export const bestDeal = [
  {
    title: "iPad & Tablets",
    description: "Up to 50% off today!",
    img: bestDealImg1,
  },
  {
    title: "Cell Phones & Smartphones",
    description: "Up to 20% off today!",
    img: bestDealImg2,
  },
  {
    title: "Audio & SmartTV",
    description: "Up to 70% off today!",
    img: bestDealImg3,
  },
  {
    title: "Premium Headphones",
    description: "Up to 40% off today!",
    img: bestDealImg4,
  },
];
