import { useSignal } from "@preact/signals";
import Icon from "deco-sites/camp-eva/components/ui/Icon.tsx";
import { invoke } from "deco-sites/camp-eva/runtime.ts";
import { total } from "deco-sites/camp-eva/sdk/useTotalLikes.tsx";
import { useEffect } from "preact/hooks";

export interface LikeButtonProps {
  productID: string;
}

function LikeButton({ productID }: LikeButtonProps) {
  const selected = useSignal(false);
  const quantity = useSignal(0);

  const updateTotals = async () => {
    const totalLikes = await invoke["deco-sites/camp-eva"].loaders.totalLikes();
    const totalLikesProduct = await invoke[
      "deco-sites/camp-eva"
    ].loaders.totalLikesProduct({ productID });
    total.value = totalLikes.total;
    quantity.value = totalLikesProduct.product;
  };

  useEffect(() => {
    updateTotals();
    setInterval(updateTotals, 30000);
  });

  const handleToggleLike = async (e: MouseEvent) => {
    e.preventDefault();
    selected.value = true;

    await invoke["deco-sites/camp-eva"].actions.sendLike({
      productID: productID,
    });

    const totalLikes = await invoke["deco-sites/camp-eva"].loaders.totalLikes();

    total.value = totalLikes.total;
    const totalLikesProduct = await invoke[
      "deco-sites/camp-eva"
    ].loaders.totalLikesProduct({ productID });

    quantity.value = totalLikesProduct.product;
  };

  return (
    <button
      class="absolute left-4 sm:left-auto sm:right-4 top-4 flex items-center justify-center gap-1 p-1 sm:p-2 rounded bg-neutral sm:bg-white min-w-14 disabled:text-primary"
      onClick={(e) => handleToggleLike(e)}
      disabled={selected.value}
    >
      {!selected.value ? (
        <Icon id="MoodSmile" width={24} height={24} />
      ) : (
        <Icon id="MoodCheck" width={24} height={24} />
      )}
      <span
        class={`min-w-4 text-center text-xs font-thin ${
          !selected.value ? "" : "text-primary"
        }`}
      >
        {quantity.value}
      </span>
    </button>
  );
}

export default LikeButton;
