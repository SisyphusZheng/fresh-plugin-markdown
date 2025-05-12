import type { MarkdownPlugin, MarkdownPluginOptions } from "./types.ts";
import { MarkdownRenderer } from "./renderer.ts";
import { setupCodeHighlight } from "./utils/code-highlight.ts";

export default function markdown(
  options: MarkdownPluginOptions = {},
): MarkdownPlugin {
  const renderer = new MarkdownRenderer();
  setupCodeHighlight();

  return {
    name: "markdown",
    render: (input: string, opts = {}) => {
      const markedOpts = {
        gfm: opts.gfm ?? true,
        renderer,
      };

      const html = opts.inline
        ? Marked.parseInline(input, markedOpts) as string
        : Marked.parse(input, markedOpts) as string;

      return { headings: renderer.headings, html };
    },
  };
}
