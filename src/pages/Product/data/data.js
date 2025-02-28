import ProductImgBlack from "@/assets/svg/product-img-2.svg";
import ProductImgBlack1 from "@/assets/svg/product-img-3.svg";
import ProductImgBlack2 from "@/assets/svg/product-img-4.svg";
import ProductImgBlack3 from "@/assets/svg/product-img-5.svg";
import ProductImgWhite1 from "@/assets/svg/TableProductWhite-1.jpg";
import ProductImgWhite2 from "@/assets/svg/TableProductWhite-2.jpg";
import ProductImgWhite3 from "@/assets/svg/TableProductWhite-3.jpg";
import ProductImgWhite4 from "@/assets/svg/TableProductWhite-4.jpg";
import ProductImgGray1 from "@/assets/svg/TableProductGray-1.jpg";
import ProductImgGray2 from "@/assets/svg/TableProductGray-2.jpg";
import ProductImgGray3 from "@/assets/svg/TableProductGray-3.jpg";
import ProductImgGray4 from "@/assets/svg/TableProductGray-4.jpg";

export const ProductData = [
  {
    title: "Tray Table",
    description:
      "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    price: 190.0,
    old_price: 400.0,
    skidka: 50,
    reviews: 11,
    expires_in: "2025-03-02",
    measurements: "17 1/2x20 5/8 ",
    choose_color: [
      {
        cllor: "black",
        imgs: [
          ProductImgBlack,
          ProductImgBlack1,
          ProductImgBlack2,
          ProductImgBlack3,
        ],
      },
      {
        clor: "white",
        imgs: [
          ProductImgWhite1,
          ProductImgWhite2,
          ProductImgWhite3,
          ProductImgWhite4,
        ],
      },
      {
        clor: "gray",
        imgs: [
          ProductImgGray1,
          ProductImgGray2,
          ProductImgGray3,
          ProductImgGray4,
        ],
      },
    ],
    SKU: 1117,
    category: "Living Room, Bedroom",
    type: "NEW",
  },
];
