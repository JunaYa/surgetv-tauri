import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Layout from '~/pages/App';
import About from '~/pages/about';
import Home from '~/pages/home';
import Discover from '~/pages/discover';
import Gift from '~/pages/gift';
import Person from '~/pages/person';
import Login from '~/pages/login';
import NotFound from '~/pages/notfound';


const Root = () => (
  <Routes>
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/gift" element={<Gift />} />
      <Route path="/person" element={<Person />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Route>
    // 404
    <Route path="*" element={<NotFound />} />
  </Routes>
)


const router = createBrowserRouter([{ path: '*', element: Root() }])

export default function App() {
  return <RouterProvider router={router} />
}
