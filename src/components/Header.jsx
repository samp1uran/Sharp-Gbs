import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { List, ListItemButton, ListItemText } from "@mui/material";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Logo.jpg"
            alt="Sharp Gbs Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="font-bold text-xl">Sharp Gbs</div>
        </Link>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-0 items-center">
          <Link to="/">
            <Button
              variant="contained"
              className="!text-base !shadow-none !bg-gray-800 !normal-case"
            >
              Home
            </Button>
          </Link>

          <Link to="/about">
            <Button
              variant="contained"
              className="!text-base !shadow-none !bg-gray-800 !normal-case"
            >
              About
            </Button>
          </Link>

          <div className="!w-fit relative group">
            <Link
              to="/services"
              className="relative inline-block text-white  group"
            >
              <Button
                variant="contained"
                className="!text-base !shadow-none !bg-gray-800 !normal-case"
              >
                Services
              </Button>
            </Link>
            <div
              className="absolute left-0 w-56 bg-gray-700 rounded shadow-lg z-10
                  invisible opacity-0 group-hover:visible group-hover:opacity-100
                  transition-all duration-200"
            >
              <List>
                <ListItemButton
                  className="!px-2 !py-2.5"
                  component={Link}
                  to="/services/bookKeeping"
                >
                  BookKeeping
                </ListItemButton>
                <ListItemButton
                  className="!px-2 !py-2.5"
                  component={Link}
                  to="/services/wordpressManagement"
                >
                  Wordpress Management
                </ListItemButton>
                <ListItemButton
                  className="!px-2 !py-2.5"
                  component={Link}
                  to="/services/dataAnalysis"
                >
                  Data Analysis
                </ListItemButton>
                <ListItemButton
                  className="!px-2 !py-2.5"
                  component={Link}
                  to="/services/contentWriting"
                >
                  Content Writing
                </ListItemButton>
                <ListItemButton
                  className="!px-2 !py-2.5"
                  component={Link}
                  to="/services/consultingServices"
                >
                  Consulting Services
                </ListItemButton>
              </List>
            </div>
          </div>

          <Link to="/contact">
            <Button
              variant="contained"
              className="!text-base !shadow-none !bg-gray-800 !normal-case"
            >
              Contact
            </Button>
          </Link>
          <Link to="/privacy">
            <Button
              variant="contained"
              className="!text-base !shadow-none !bg-gray-800 !normal-case"
            >
              Privacy
            </Button>
          </Link>
          <Link to="/terms">
            <Button
              variant="contained"
              className="!text-base !shadow-none !bg-gray-800 !normal-case"
            >
              Terms
            </Button>
          </Link>
        </nav>

        <div
          className={`absolute top-full left-0 w-full bg-gray-800 md:hidden overflow-hidden transition-all duration-50 ease-in-out z-10
    ${menuOpen ? "max-h-[1000px] py-3 px-4 flex flex-col gap-2" : "h-0 px-4"}
  `}
        >
          <ListItemButton
            component={Link}
            to="/"
            onClick={handleClick}
            className="!py-1.5 !px-2 !text-base !shadow-none !bg-gray-800 !normal-case"
          >
            Home
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/about"
            onClick={handleClick}
            className="!py-1.5 !px-2 !text-base !shadow-none !bg-gray-800 !normal-case"
          >
            About
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/services"
            onClick={() => {
              setServicesOpen(!servicesOpen);
            }}
            className="!py-1.5 !px-2 !text-base !shadow-none !bg-gray-800 !normal-case"
          >
            Services
          </ListItemButton>
          {servicesOpen && (
            <div className="pl-4 flex flex-col gap-1">
              <List className="!py-0">
                <ListItemButton
                  className="!px-2 !py-1"
                  component={Link}
                  to="/services/bookKeeping"
                  onClick={handleClick}
                >
                  BookKeeping
                </ListItemButton>

                <ListItemButton
                  className="!px-2 !py-1"
                  component={Link}
                  to="/services/wordpressManagement"
                  onClick={handleClick}
                >
                  Wordpress Management
                </ListItemButton>

                <ListItemButton
                  className="!px-2 !py-1"
                  component={Link}
                  to="/services/dataAnalysis"
                  onClick={handleClick}
                >
                  Data Analysis
                </ListItemButton>

                <ListItemButton
                  className="!px-2 !py-1"
                  component={Link}
                  to="/services/contentWriting"
                  onClick={handleClick}
                >
                  Content Writing
                </ListItemButton>

                <ListItemButton
                  className="!px-2 !py-1"
                  component={Link}
                  to="/services/consultingServices"
                  onClick={handleClick}
                >
                  Consulting Services
                </ListItemButton>
              </List>
            </div>
          )}
          <ListItemButton
            component={Link}
            to="/contact"
            onClick={handleClick}
            className="!py-1 !px-2 !text-base !shadow-none !bg-gray-800 !normal-case"
          >
            Contact
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/privacy"
            onClick={handleClick}
            className="!py-1 !px-2 !text-base !shadow-none !bg-gray-800 !normal-case"
          >
            Privacy
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/terms"
            onClick={handleClick}
            className="!py-1 !px-2 !text-base !shadow-none !bg-gray-800 !normal-case"
          >
            Terms
          </ListItemButton>
        </div>
      </header>

      <div className="px-6 py-2 max-w-5xl mx-auto leading-relaxed">
        <marquee>
          <p className="my-4 text-2xl font-semibold ">Welcome to Sharp Gbs</p>
        </marquee>
      </div>
    </>
  );
}

export default Header;
