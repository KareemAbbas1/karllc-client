// import Logo from "../assets/Logo.png";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-12 lg:px-8">
                <div>
                    {/* <img
                        className="mx-auto h-10 w-auto"
                        src={Logo}
                        alt="Your Company"
                    /> */}
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default AdminLayout