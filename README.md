# Can not be use right now 
# Fresh Markdown Plugin

A Markdown plugin for [Fresh](https://fresh.deno.dev/) that provides Markdown
rendering with code highlighting and front matter support.

## Features

- Markdown rendering with GFM support
- Code syntax highlighting
- Front matter parsing
- Smart typography
- Custom admonitions (info, warn, tip)
- Table of contents generation

## Usage

```ts
// fresh.config.ts
import { defineConfig } from "$fresh/server.ts";
import markdown from "fresh-plugin-markdown";

export default defineConfig({
  plugins: [
    markdown({
      options: {
        gfm: true,
        highlight: true,
        frontMatter: true,
      },
    }),
  ],
});
```

## API

### Plugin Options

```ts
interface MarkdownOptions {
  inline?: boolean; // Render as inline markdown
  gfm?: boolean; // Enable GitHub Flavored Markdown
  highlight?: boolean; // Enable code highlighting
  frontMatter?: boolean; // Enable front matter parsing
}
```

### Render Function

```ts
const { html, headings } = markdown.render("# Hello World");
```

## License

MIT
