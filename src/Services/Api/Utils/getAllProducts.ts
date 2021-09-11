import { Product } from "Services/Api/Types";
import { PRODUCT } from "Services/Api/Constants";

export function getAllProducts(): Product[] {
  return PRODUCT;
}