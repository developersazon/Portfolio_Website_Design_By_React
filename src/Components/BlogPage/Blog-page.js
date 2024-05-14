import { Outlet } from 'react-router-dom';
import Banner from '../HomePage/Banner';
import Blog from './Blog';


export default function BlogPage() {
  return (
    <div className="blog">
        <Banner/>
        <Blog/>
    </div>
  );
}
