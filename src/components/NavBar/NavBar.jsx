import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open , setOpen] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/products/:id', name: 'ProductDetail', id: 'product-detail' },
        { path: '*', name: 'NotFound', id: 'not-found' }
      ];
      
      
      
    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> :  <AiOutlineMenu className=" "></AiOutlineMenu>
                }
           
            </div>
           <ul className={`md:flex  duration-1000 absolute md:static
           ${open ? 'top-16' : '-top-60' }
           bg-yellow-200 px-6`}>
           {
                routes.map(routes => <Link key={routes.id} routes= {routes}></Link>)
            } 
           </ul>
        </nav>
    );
};

export default NavBar;