import airpods from "../assets/images/airpods.jpg";
import headphone from "../assets/images/headphone.jpg";
import ipad from "../assets/images/ipad.jpg";
import macbook from "../assets/images/macbook.jpg";
import mic from "../assets/images/mic.jpg";
import mouse from "../assets/images/mouse.jpg";
import phone from "../assets/images/phone.jpg";
import watch from "../assets/images/watch.jpg";

let productList = [
  { id: "1", title: "Airpods", price: 300, image: airpods },
  { id: "2", title: "headphone", price: 600, image: headphone },
  { id: "3", title: "ipad", price: 900, image: ipad },
  { id: "4", title: "macbook", price: 396, image: macbook },
  { id: "5", title: "mic", price: 369, image: mic },
  { id: "6", title: "mouse", price: 300, image: mouse },
  { id: "7", title: "phone", price: 600, image: phone },
  { id: "8", title: "watch", price: 900, image: watch },
];

//get informtion as item
function getProductData(id) {
  // find product with id
  let productData = productList.find((item) => item.id === id);

  return productData;
}

export { productList, getProductData };
