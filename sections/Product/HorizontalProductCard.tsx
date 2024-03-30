// sections/Product/HorizontalProducts.tsx

import type { Product } from "apps/commerce/types.ts";
import { HorizontalProductCard } from "$site/components/product/HorizontalProductCard.tsx";

export interface HorizontalProductSectionProps {
  products: Product[] | null;
}

const HorizontalProductSection = ({
  products,
}: HorizontalProductSectionProps) => {
  if (!products?.length) return null;

  return (
    <div class="flex items-center justify-center gap-x-4 flex-wrap py-4">
      {products.map((product) => (
        <HorizontalProductCard product={product} />
      ))}
    </div>
  );
};

export default HorizontalProductSection;
