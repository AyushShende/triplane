import './App.css';
import { RootLayout, RequireUser } from './components';
import {
  AdminPage,
  HomePage,
  LoginPage,
  NotFound,
  ProfilePage,
  RegisterPage,
  TourPage,
  UnauthorizePage,
} from './pages';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="tours/:tourId" element={<TourPage />} />
            <Route element={<RequireUser allowedRoles={['user', 'admin']} />}>
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route element={<RequireUser allowedRoles={['admin']} />}>
              <Route path="admin" element={<AdminPage />} />
            </Route>
          </Route>
          <Route path="unauthorized" element={<UnauthorizePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
