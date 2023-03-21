import {Link, Outlet} from "react-router-dom";


const Dashboard = () =>{
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'}>Yo</Link>
                </li>
                <li>
                    <Link to={'/proyectos'}>Proyectos</Link>
                </li>
                <li>
                    <Link to={'/contacto'}>Contacto</Link>
                </li>

            </ul>
            <Outlet/>
        </div>
    );
}

export default Dashboard;