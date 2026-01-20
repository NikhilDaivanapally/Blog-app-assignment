# 📝 Blog Application (React)

A simple blog application built as an assignment to demonstrate **feature-based architecture**, **modern React practices**, and **clean state management**.

## 📦 Installation

1. Clone the repository
```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies
```bash
npm install
```

3. Start the mock backend (json-server)
```bash
npm run server
```

4. Start the development server
```bash
npm run dev
```

The application will be available at http://localhost:5173

---

## 🚀 Tech Stack

- React + TypeScript
- React Router v7
- @tanstack/react-query
- Tailwind CSS
- shadcn/ui
- react-hook-form + Zod
- json-server (mock backend)

---

## 📐 Architecture Strategy

### Feature-Based Folder Structure

The application is organized by **features**, not by file types. Each feature owns its pages, components, hooks, and API logic.

```bash
src/
│ ├── layouts/
│ │ └── MainLayout.tsx
│ └── providers/
│ └── ReactQueryProvider.tsx
│
├── features/
│ └── blogs/
│   ├── pages/
│   │ ├── BlogListPage.tsx
│   │ ├── BlogDetailsPage.tsx
│   │ └── BlogCreatePage.tsx
│   ├── components/
│   ├── hooks.ts
│   ├── types.ts
│   └── api.ts
│
└── components/
    ├── ui
    ├── Header.tsx
    └── Footer.tsx
```

---

## 🧭 Routing Strategy

REST-style routing is used for clarity and scalability.

```bash
/ → Blog listing page
/blog/:id → Blog details page
/create → Create blog page
```

🔄 Server State Management

React Query is used for all server-side data:
- Fetch blog list
- Fetch single blog details
- Create new blog

Benefits:
- Automatic loading and error states
- Caching and revalidation
- Clean separation of server state from UI state


🎨 UI State Handling

UI states are handled at the feature level:

- Skeleton loaders
- Empty states
- Error states

Examples:

- BlogListSkeleton
- BlogListEmpty
- BlogListError

Pages control when to render these states.


✅ Features Implemented

- Blog listing with loading, error, and empty states
- Blog details view using route parameters
- Create blog form with validation
- Shared layout with navigation
- Mock backend integration