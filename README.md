# ⚛️ React Feature-Based Architecture Boilerplate

A scalable React + Vite + TypeScript boilerplate following **feature-based architecture**.

This project provides a clean, modular structure to help you build large React applications that are easy to maintain, test, and grow over time.

---

## 📁 Project Structure

```bash
src/
├── core/                # Global configuration, assets, styles, context
├── layouts/             # App-wide layouts (Header, Footer, etc.)
├── features/            # Feature-based modules (e.g. Post, Product)
│   └── Post/
│       ├── components/
│       ├── hooks/
│       ├── types/
│       ├── views/
│       └── routes.ts
├── router.ts            # Central route aggregation
└── main.tsx             # App entry point
```

> Each feature folder contains everything it needs: components, views, hooks, types, and routing.

---

## 🚀 Features

- ✅ Feature-based architecture
- ⚡️ Vite for fast development
- 🧠 TypeScript support
- 🔀 Modular routing per feature
- 🎨 Organized global styles and layouts
- 🧱 Clean and scalable file structure

---

## 📦 Tech Stack

- React 19
- Vite
- TypeScript
- React Router DOM (v7)

---

## 🛠️ Getting Started

```bash
# Clone the repo
git clone https://github.com/naserrasoulii/feature-based-react

# Install dependencies
cd feature-based-react
yarn

# Start dev server
yarn dev
```

---

## 📂 Feature Example

Here’s how the `Post` feature is organized:

```bash
features/
└── Post/
    ├── components/
    │   ├── PostItem.tsx
    │   └── PostList.tsx
    ├── hooks/
    │   └── usePost.ts
    ├── types/
    │   └── post.types.ts
    ├── views/
    │   └── PostView.tsx
    └── routes.ts
```

---

## 🌐 Routing Example

Each feature can define its own routes in `routes.ts`, then the app combines all routes centrally:

```tsx
// features/Post/routes.ts
export const postRoutes = [
  { path: "/posts", element: <PostView /> }
];

// router.ts
import { postRoutes } from "@/features/Post/routes";
export const routes = [...postRoutes, ...otherRoutes];
```

---

## 🤝 Contributing

Pull requests and suggestions are welcome!  
If you find this helpful, feel free to star ⭐ the repo or share it with others.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

Made with ❤️ by [Naser Rasouli]  
GitHub: [@naserrasoulii](https://github.com/naserrasoulii)