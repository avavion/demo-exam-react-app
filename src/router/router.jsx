import React from "react";
import { createBrowserRouter } from "react-router-dom";


const Layout = React.lazy(() => import('../components/Layout/Layout'));
const ArticlesPage = React.lazy(() => import('../pages/ArticlesPage'));
const ArticlePage = React.lazy(() => import('../pages/ArticlePage'));
const SignInPage = React.lazy(() => import('../pages/SignInPage'));
const CreateArticlePage = React.lazy(() => import('../pages/CreateArticlePage'));
const SignUpPage = React.lazy(() => import('../pages/SignUpPage'));

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <ArticlesPage />,
                path: '/'
            },
            {
                element: <CreateArticlePage />,
                path: '/articles/create'
            },
            {
                element: <SignInPage />,
                path: '/signin'
            },
            {
                element: <SignUpPage />,
                path: '/signup'
            },
            {
                element: <ArticlePage />,
                path: '/articles/:id'
            }
        ]
    }
]);

export default router;