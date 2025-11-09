import React, { useState, useRef, useEffect } from "react";
import { Database, Menu, X, Wallet, ChevronDown } from "lucide-react";
import useStore from "../../store/useStore";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {
    currentPage,
    setCurrentPage,
    walletConnected,
    setWalletConnected,
    walletAddress,
  } = useStore();

  const navItems = [
    { id: "home", label: "Home" },
    {
      id: "products",
      label: "Products",
      hasDropdown: true,
      items: [
        { id: "deposit", label: "Deposit" },
        { id: "datasets", label: "Datasets" },
        { id: "governance", label: "Governance" },
        { id: "analytics", label: "Analytics" },
      ],
    },
    { id: "apply", label: "Apply" },
    { id: "curator", label: "Curator" },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    setProductsOpen(false);
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => handleNavClick("home")}>
          <img
            src="/videos/loggo.png"
            alt="DataCommons Logo"
            className="navbar-logo-icon"
          />
          <span className="navbar-logo-text">DataCommons</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.id} className="navbar-dropdown" ref={dropdownRef}>
                <button
                  className="navbar-link dropdown-trigger"
                  onClick={toggleProducts}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`dropdown-icon ${productsOpen ? "open" : ""}`}
                  />
                </button>

                {productsOpen && (
                  <div className="dropdown-menu">
                    {item.items.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleNavClick(subItem.id)}
                        className={`dropdown-item ${
                          currentPage === subItem.id ? "active" : ""
                        }`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`navbar-link ${
                  currentPage === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* Wallet Button & Mobile Menu Toggle */}
        <div className="navbar-actions">
          <button
            onClick={() => setWalletConnected(!walletConnected)}
            className={`wallet-button ${walletConnected ? "connected" : ""}`}
          >
            <Wallet size={20} />
            <span className="wallet-text">
              {walletConnected ? walletAddress : "Connect Wallet"}
            </span>
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.id} className="mobile-dropdown">
                <div className="mobile-dropdown-label">{item.label}</div>
                {item.items.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => handleNavClick(subItem.id)}
                    className={`mobile-link sub-item ${
                      currentPage === subItem.id ? "active" : ""
                    }`}
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-link ${
                  currentPage === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
