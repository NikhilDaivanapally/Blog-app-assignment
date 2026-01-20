import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import BlogListPage from "./features/blogs/pages/BlogListPage";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import NotFound from "./components/NotFound";
import BlogDetailsPage from "./features/blogs/pages/BlogDetailsPage";
import { Toaster } from "sonner";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <BlogListPage />,
        },
        {
          path: "blog/:id",
          element: <BlogDetailsPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <ReactQueryProvider>
      <Toaster position="top-right" richColors />
      <RouterProvider router={router} />
    </ReactQueryProvider>
  );
}
export default App;
