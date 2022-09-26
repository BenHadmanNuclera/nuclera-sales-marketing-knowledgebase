---
sidebar_position: 6
slug: how-to-make-a-knowledgebase-page
title: How to make a Knowledgebase
authors:
  - name: Ben Hadman
    title: Senior Digital Marketing Manager
tags: [salesforce]
---

:::caution

this content is under development, for illustrative purposes only.

:::

# Create a Page in Markdown for the Knowledgebase

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).

<embed
  src="https://drive.google.com/viewerng/
viewer?embedded=true&url=https://drive.google.com/file/d/14CIor6OwTC5oXL1TWxPY9YvKeqbU77DT/view?usp=sharing"
  width={750}
  height={1000}
  type="application/pdf"
/>
