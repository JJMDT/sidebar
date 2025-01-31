import styled from "styled-components";
import React from "react";
import logo from "../assets/logo.png";
import { v } from "../styles/variables.jsx";
import { FaAngleLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { Switch } from "@mui/material";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const modSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { setTheme, theme } = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Container isOpen={sidebarOpen}>
      <button className="sidebarButton" onClick={modSidebarOpen}>
        <FaAngleLeft />
      </button>
      <div className="Logocontent">
        <div className="imgcontent">
          <img src={logo} />
        </div>
        <h2>EShop</h2>
      </div>
      <Divisor />
      {linksArray.map(({ icon, label, to }) => (
        <div className="linkContent" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `links${isActive ? ` active` : ``}`}
          >
            <div className="linkIcon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divisor />
      {linksArraySecondary.map(({ icon, label, to }) => (
        <div className="linkContent" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `links${isActive ? ` active` : ``}`}
          >
            <div className="linkIcon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divisor />

      <div className="themeContent">
        {sidebarOpen && <span> Theme Mode </span>}
        <div className="toogleContent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <Switch
                  checked={theme === "dark"}
                  onChange={changeTheme}
                  color="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
//region links
const linksArray = [
  {
    label: "Home",
    icon: <FaHome />,
    to: "/",
  },
  {
    label: "Profile",
    icon: <FaUser />,
    to: "/perfil",
  },
  {
    label: "Favorites",
    icon: <FaRegStar />,
    to: "/favoritos",
  },

  {
    label: "Products",
    icon: <AiFillProduct />,
    to: "/productos",
  },

  {
    label: "Statistics",
    icon: <IoStatsChartSharp />,
    to: "/estadisticas",
  },
];
const linksArraySecondary = [
  {
    label: "Settings",
    icon: <IoSettingsSharp />,
    to: "/settings",
  },

  {
    label: "Exit",
    icon: <IoMdExit />,
    to: "/link2",
  },
];
// regiones

//
const Container = styled.div`
  height: 100%;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: sticky;
  
  .sidebarButton {
    position: absolute;
    top: ${v.xxlSpacing};
    right: -20px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},0 0 7px ${(props) =>
  props.theme.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    trasition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
    cursor: pointer;
    &:hover {
    scale: 1.2;}
  }
  .Logocontent {
    display: flex;
    align-items: center;
    flex-direction: column;
     h2 {
      cursor: default;
     }
    .imgcontent {
      display: flex;
      justify-content: center;
      img {

        max-width: ${({isOpen}) => (isOpen ? `50%` : `50%`)};
        transition: all 0.3s;
        filter: ${({ theme }) => theme.imgFilter}; // Usa la propiedad imgFilter del tema

      }
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)};
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
  }
    .linkContent {
      margin: 8px 0;
      padding: 0 15%;
      
      :hover {
      background: ${(props) => props.theme.bg3}; 
      
      }
      
    
      
    }
      .links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px) 0;
      color: ${(props) => props.theme.text};
      height:50px;

      .linkIcon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
}
          &.active {
            span { color: ${(props) => props.theme.bg4}; }
            font-weight: 700;

           .linkIcon {
           svg {
            color: ${(props) => props.theme.bg4};
            }
          }
      }
      span {
        display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
      }
}
}

.themeContent {
display: flex;
justify-content: space-evenly;
align-items: center;

}

`;

const Divisor = styled.div`
  height: 1px;
  width: 80%;

  background:  ${({theme}) => theme.bg3};
  margin: ${v.mdSpacing} 0;
  margin: 10px auto;
`;
