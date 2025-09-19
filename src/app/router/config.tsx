import { createBrowserRouter } from 'react-router-dom'
import { AuthRegPage } from '../../pages/auth/auth-reg-page.tsx'
import { TodoListPage } from '../../pages/todo-list/todo-list-page.tsx'
import { MainPage } from '../../pages/main/main-page.tsx'
import { ListLayout } from '../../shared/ui/list-layout/list-layout.tsx'
import { TodoDetailsPage } from '../../pages/todo-details-page/todo-details-page.tsx'
import { RootLayout } from '../../shared/ui/root-layout/root-layout.tsx'

export const appRouterConfig = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/auth',
        element: <AuthRegPage />,
      },
      {
        path: '/list',
        element: <ListLayout />,
        children: [
          {
            index: true,
            element: <TodoListPage />,
          },
          {
            path: ':id',
            element: <TodoDetailsPage />,
          },
        ],
      },
    ],
  },
])
