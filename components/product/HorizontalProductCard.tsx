import Image from "apps/website/components/Image.tsx";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import { Product } from "apps/commerce/types.ts";
import { formatPrice } from "$site/sdk/format.ts";
import { useOffer } from "$site/sdk/useOffer.ts";

interface HorizontalProductCardProps {
  product: Product;
}

export const HorizontalProductCard = ({
  product,
}: HorizontalProductCardProps) => {
  const { productID, name, url, offers, isVariantOf, image: images } = product;

  const description = product.description || isVariantOf?.description;
  const { listPrice, price, seller } = useOffer(offers);

  const eventParams = {
    items: [{ item_url: url, quantity: 1, item_name: name! }],
  };

  const [image] = images ?? [];

  return (
    <div class="flex border border-neutral p-2 gap-2 max-sm:flex-col">
      {image.url && (
        <Image
          src={image.url}
          width={200}
          height={200}
          loading="lazy"
          alt={name}
        />
      )}
      <div class="px-2 flex flex-col self-stretch">
        <h2 class="text-lg">{name}</h2>
        <p class="mb-auto text-sm line-clamp-2">{description}</p>
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