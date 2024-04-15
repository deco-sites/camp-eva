// sections/Product/HorizontalProducts.tsx

import type { Product } from "apps/commerce/types.ts";
import { HorizontalProductCard } from "$site/components/product/HorizontalProductCard.tsx";
import { asset } from "$fresh/runtime.ts";
import { clx } from "deco-sites/camp-eva/sdk/clx.ts";
import type { ProductCardFlagProps } from "$site/flags/multivariate/ProductCardFlag.ts";

export type maxWidth =
  | "max-w-xl"
  | "max-w-2xl"
  | "max-w-3xl"
  | "max-w-4xl"
  | "max-w-5xl"
  | "max-w-6xl"
  | "max-w-7xl"
  | "max-w-full";

export interface HorizontalProductCardPropsLayout {
  larguraMax?: maxWidth;
  zoomOnHover?: boolean;
}

export interface HorizontalProductSectionProps {
  products: ProductCardFlagProps;
  layout: HorizontalProductCardPropsLayout;
}

export function loader(props: HorizontalProductSectionProps, _req: Request) {
  // throw new Error("Not implemented");

  return props;
}

const HorizontalProductSection = ({
  products,
  layout,
}: HorizontalProductSectionProps) => {
  if (!products?.length) return null;

  return (
    <div
      class={clx(
        "container flex items-center justify-center gap-x-4 flex-wrap h-full py-4",
        layout.larguraMax,
      )}
    >
      {products.map((product) => (
        <HorizontalProductCard
          product={product}
          zoomOnHover={layout.zoomOnHover}
        />
      ))}
    </div>
  );
};

export function LoadingFallback() {
  return (
    <div class="container flex justify-center py-4">
      <div class="grid grid-cols-[2fr_3fr] gap-4 max-w-xl">
        <div class="skeleton h-52 w-52 shrink-0"></div>
        <div class="px-2 flex flex-col gap-1 ">
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
