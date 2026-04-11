import { ProductDetails } from "@/components/product_details_page/Product_Details";
import { ProductCategory } from "@/components/product_details_page/ProductCategory";

export default function SingleProduct() {
  return (
    <div>
      <ProductDetails />
      <ProductCategory />
    </div>
  );
}
