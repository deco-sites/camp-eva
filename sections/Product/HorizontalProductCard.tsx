// sections/Product/HorizontalProducts.tsx

import type { Product } from "apps/commerce/types.ts";
import { HorizontalProductCard } from "$site/components/product/HorizontalProductCard.tsx";
import { asset } from "$fresh/runtime.ts";

export interface HorizontalProductSectionProps {
  products: Product[] | null;
}

export function loader(props: HorizontalProductSectionProps, _req: Request) {
  throw new Error("Not implemented");

  return props;
}

const HorizontalProductSection = ({
  products,
}: HorizontalProductSectionProps) => {
  if (!products?.length) return null;

  return (
    <div class="container flex items-center justify-center gap-x-4 flex-wrap py-4">
      {products.map((product) => (
        <HorizontalProductCard product={product} />
      ))}
    </div>
  );
};

export function LoadingFallback() {
  // Renderer spinners, skeletons and other placeholder
  return (
    <div class="container flex justify-center py-4">
      <div class="flex max-sm:flex-col gap-4">
        <div class="skeleton h-52 w-52 shrink-0"></div>
        <div class="px-2 flex flex-col gap-1 self-stretch shrink-0 w-64">
          <div class="skeleton h-4"></div>
          <div class="skeleton h-4 w-full mb-auto"></div>
          <div class="skeleton h-4 w-14"></div>
          <div class="skeleton h-4 w-18 mb-4"></div>
          <div class="skeleton h-12 w-full"></div>
        </div>
      </div>
    </div>
  );
}

export function ErrorFallback({ error: _error }: { error?: Error }) {
  return (
    <div class="flex flex-col mx-auto max-w-96 py-4 gap-2">
      <img
        src={asset("/image/carne-de-sol.jpg")}
        class="object-cover"
        alt={"a"}
        height={400}
        width={400}
      />
      <h2 class="text-xl py-4">Paçoca</h2>
      <p class="">
        A paçoca é um dos pratos mais requisitados na mesa dos piauienses. E por
        onde você andar pelos cantos do estado, tem lugar que serve paçoca. Mas
        não é aquela paçoquita que vende em São Paulo, por exemplo. Não tem nada
        a ver com doce. A paçoca piauiense é feita de farinha, carne de sol
        pisada no pilão, coentro e uns pedaços de banana para dar um toque a
        mais.
      </p>
      <a href="/cultura" class="btn btn-primary">
        Para saber mais
      </a>
    </div>
  );
}

export default HorizontalProductSection;
