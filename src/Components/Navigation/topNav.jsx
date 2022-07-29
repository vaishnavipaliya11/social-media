import React from "react";
import "./leftNav.css";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, header, useColorMode } from "@chakra-ui/react";
export const TopNav = () => {
  const navigate = useNavigate();
  const { user, token } = useSelector((store) => store.timeline);

  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box className="top-nav">
      <h1>Infinte-Spaces</h1>

      <Box className="dis-row">
        <header>
          <Button onClick={toggleColorMode}>
            <MdOutlineDarkMode /> {colorMode === 'dark' ? '' : ''}
          </Button>
        </header>

        {token ? (
          <h3>
            <FaSignOutAlt onClick={() => logOutHandler()} />
          </h3>
        ) : (
          <h3 onClick={() => navigate("/login")}>
            <FaUserAlt />
          </h3>
        )}
      </Box>
    </Box>
  );
};
