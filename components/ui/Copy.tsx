export interface CupomProps {
  cupomCode?: string;
  cupomDescription?: string;
}

export default function Copy({
  cupomCode = "BEMVINDO10",
  cupomDescription = "Cupom de boas vindas",
}: CupomProps) {
  return (
    <div class="flex flex-col gap-2 pl-3 container">
      <p class="text-sm font-bold w-[150px] text-center p-2 border-dashed border border-black hover:bg-black hover:text-white hover:boder-white duration-300">
        {cupomCode}
      </p>
      <p class="w-fit">{cupomDescription}</p>
    </div>
  );
}
