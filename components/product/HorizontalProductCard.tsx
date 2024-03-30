import Image from "apps/website/components/Image.tsx";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import { Product } from "apps/commerce/types.ts";
import { formatPrice } from "$site/sdk/format.ts";
import { useOffer } from "$site/sdk/useOffer.ts";
import { clx } from "deco-sites/camp-eva/sdk/clx.ts";

interface HorizontalProductCardProps {
  product: Product;
  zoomOnHover?: boolean;
}

export const HorizontalProductCard = ({
  product,
  zoomOnHover,
}: HorizontalProductCardProps) => {
  const { productID, name, url, offers, isVariantOf, image: images } = product;

  const description = product.description || isVariantOf?.description;
  const { listPrice, price, seller } = useOffer(offers);

  const eventParams = {
    items: [{ item_url: url, quantity: 1, item_name: name! }],
  };

  const [image] = images ?? [];

  return (
    <div class="grid grid-cols-[2fr_3fr] border border-neutral p-2 gap-2 max-sm:flex-col w-full rounded">
      {image.url && (
        <div class="aspect-square h-full overflow-hidden">
          <Image
            src={image.url}
            class={clx(
              "h-full w-full",
              zoomOnHover && "hover:scale-110 h-full w-full transition"
            )}
            width={208}
            height={208}
            loading="lazy"
            alt={name}
          />
        </div>
      )}
      <div class="px-2 flex flex-col self-stretch">
        <h2 class="text-lg line-clamp-1">{name}</h2>
        <p class="mb-auto text-sm line-clamp-1">{description}</p>
        <div class="mb-2">
          {listPrice && (
            <p class="text-xs opacity-80 line-through">
              {formatPrice(listPrice, offers?.priceCurrency)}
            </p>
          )}
          {price && (
            <p class="text-lg">{formatPrice(price, offers?.priceCurrency)}</p>
          )}
        </div>
        {price && (
          <AddToCartButtonVTEX
            eventParams={eventParams}
            productID={productID}
            seller={seller ?? "1"}
          />
        )}
      </div>
    </div>
  );
};
