import plate10 from "../ecommerce-images/10kg bumperplate.png";
import plate15 from "../ecommerce-images/15kg bumperplate.png";
import plate20 from "../ecommerce-images/20kg bumperplate.png";
import foamRoller from "../ecommerce-images/foamroller.png";
import dumbbell from "../ecommerce-images/dumbbell.png";

export let productData = [
  {
    id: 1,
    title: "Bumper plate 10kg",
    text: "These Bumper Plates feature superior durability with quality, smooth finishes and vibrant colors. Constructed with the highest-standards in mind, Bumper Plates are factory tested to withstand drops and heavy use.",
    price: 49.95,
    image: plate10,
  },
  {
    id: 2,
    title: "Bumper plate 15kg",
    text: "These Bumper Plates feature superior durability with quality, smooth finishes and vibrant colors. Constructed with the highest-standards in mind, Bumper Plates are factory tested to withstand drops and heavy use.",
    price: 59.95,
    image: plate15,
  },
  {
    id: 3,
    title: "Bumper plate 20kg",
    text: "These Bumper Plates feature superior durability with quality, smooth finishes and vibrant colors. Constructed with the highest-standards in mind, Bumper Plates are factory tested to withstand drops and heavy use.",
    price: 69.95,
    image: plate20,
  },
  {
    id: 4,
    title: "Foam roller",
    text: "Foam Rollers are perfect for balance exercises, stability exercises, strength training, and deep tissue massage. The Foam Rollers’ design enhances balance, body awareness, muscle re-education, muscular flexibility, and dynamic strength. Foam Rollers are an exceptional self massage aid for all major muscle groups.",
    price: 29.95,
    image: foamRoller,
  },
  {
    id: 5,
    title: "Dumbbell",
    text: "Made from cast iron in a hex shape design and encased in virgin rubber to Resist cracking, fading, prevents rolling and protects floors and equipment.The ends are cast with a through hole to secure to the handle. The final step is to over-mold with rubber onto the end weights.",
    price: 19.95,
    image: dumbbell,
  },
];

//Lookup product
export function getProduct(id) {
  return productData.find((product) => product.id === id);
}
