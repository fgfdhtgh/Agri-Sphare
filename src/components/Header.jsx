import { useState, useRef, useEffect } from "react";
import { Menu, UserCircle2} from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import Hero from "./Hero";
import { useFirebase } from "../context/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navItems = ["Home", "Education", "AgriMart", "AI Detection", "Orders"];
  const [open, setOpen] = useState(false);
  // const [user, setUser] = useState(null);
  const sidebarRef = useRef(null);
  const firebase = useFirebase();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleLogout = async () => {
    await firebase.logout();
    //navigate("/"); 
  };

  return (
      <header className="sticky top-0 bg-white/60 backdrop-blur-md z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold w-30 mt-10"><img src="/Agrisphere-logo.png" alt="AgriSphere"  /></Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 ">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="text-sm font-medium transition-colors hover:bg-white/40 rounded-md px-2 py-0.5 hover:text-[#29B6F6] text-black cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* User Section */}
            <div>
              {firebase.isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <img
                    src="/user-logo.png"
                    alt="user"
                    className="w-8 h-8 rounded-full border"
                  />
                  <span className="text-sm font-medium transition-colors hover:text-[#29B6F6] text-[#212121]">
                    {firebase.user.displayName }
                  </span>

                  <button 
                    onClick={handleLogout} 
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-4 hover:bg-white/40 rounded-md px-2 py-0.5">
                  <Link
                    to="/login"
                    className="flex items-center gap-2 text-[#212121] hover:text-[#29B6F6] transition-colors"
                  >
                    <UserCircle2 size={24} className=""/>
                    <span className="text-sm font-medium ">
                      Sign In
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <></> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            {open && (
              <div
                ref={sidebarRef}
                className="absolute top-0 right-0 w-3/4 h-screen bg-black/30 flex flex-col items-start gap-4 py-4 px-6 md:hidden shadow-lg"
              >
                <div className="flex flex-col items-center gap-2 mt-3">
                  {user ? (
                    <>
                      <img
                        src="/user-logo.png"
                        alt="user"
                        className="w-8 h-8 rounded-full border"
                      />
                      <span>{user.username}</span>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="flex items-center gap-2 hover:text-[#29B6F6]"
                      >
                        <UserCircle2 size={24} className="text-[#212121]"/>
                        <span className="text-sm font-medium transition-colors text-[#212121]">
                          Sign In
                        </span>
                      </Link>
                    </>
                  )}
                </div>
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    className="text-sm font-medium transition-colors hover:text-[#29B6F6] text-[#212121]"
                  >
                    {item}
                  </button>
                ))}

              </div>
            )}
          </div>
        </div>
      </header>

  ); 
};

export default Header;
