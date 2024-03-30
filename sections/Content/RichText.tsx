import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  text: HTMLWidget;
}

const DEFAULT_TEXT =
  '<p><span style="font-size: 36pt;" data-mce-style="font-size: 36pt;"><strong>Rich Text</strong></span></p><p><span style="font-size: 24pt;" data-mce-style="font-size: 24pt;"><strong>Rich Text</strong></span></p><p><span style="font-size: 18pt;" data-mce-style="font-size: 18pt;"><strong>Rich Text</strong></span></p><p><span style="font-size: 14pt;" data-mce-style="font-size: 14pt;"><strong>Rich Text</strong></span></p>';

export default function RichText({ text = DEFAULT_TEXT }: Props) {
  return (
    <div class="container" dangerouslySetInnerHTML={{ __html: text }}></div>
  );
}
