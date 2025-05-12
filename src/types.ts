import type { Plugin } from "$fresh/server.ts";

export interface MarkdownHeading {
  id: string;
  html: string;
}

export interface MarkdownOptions {
  inline?: boolean;
  gfm?: boolean;
  highlight?: boolean;
  frontMatter?: boolean;
}

export interface MarkdownPluginOptions {
  options?: MarkdownOptions;
}

export interface MarkdownPlugin extends Plugin {
  render: (input: string, opts?: MarkdownOptions) => {
    headings: MarkdownHeading[];
    html: string;
  };
}
