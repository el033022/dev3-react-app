import styled from "styled-components"

export const StyledNav = styled.nav`
    .nav-container {
        position: fixed;
        background-color: #000;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        color: #fff;
    }

    a { color: inherit; }

    span {
        font-size: 1.2em;
        margin: 0 18px;
    }

    img {
        width: 190px;
        height: auto;
        object-fit: contain;
        margin: 0 50px;
    }

    .nav-item {
        padding: 10px;
    }

    .nav-right {
        display: flex;
        margin: 0 28px;
    }

    .nav-right-item {
        align-self: center;
    }
    
    .logo {

    }

    .social {
        margin-right: 50px;
    }

    .fab:hover {
        color: green;
        cursor: pointer;
        transition: 0.3s;

    }

    .menu:hover {
        cursor: pointer;
    }

    .bar1, .bar2, .bar3 {
        width: 18px;
        height: 2px;
        background-color: #fff;
        margin: 4px 0;
    }

    .nav-menu-container {
        position: fixed;
        width: 270px;
        height: 100vh;
        background-color: black;
        right: 0;
        padding-top: 66px;
        color: #fff;
        transform:translateX(270px);
        transition: all 0.5s;
    }

    .show {
        transform:translateX(0px);
    }

    .menu-item {
        display: flex;
        flex-direction: column;
    }
    
    .stag {
        margin: 30px 0;
        color: #61b549;
        transition: 0.5s;
        opacity: 0;
		transition: opacity 1s;
    }

    .stagger {
        opacity: 1;
		--index: 0;
		transition-delay: calc(0.1s * var(--index));
    }

    .close {
        cursor: pointer;
        margin-left: auto;
        margin-right: 20px;
        display: flex;
        font-size: 2em;
        font-weight: bold;
    }

    .menu-link {
        text-transform: uppercase;
        margin: 0 auto;
    }

    .stag>a {
        padding: 8px 0;
        text-decoration: none;

    }
    .stag>a:active {
        border-bottom: 1.5px solid #fff;
        padding: 8px 0;
        color: #fff;
    }
    .stag>a:hover {
        border-bottom: 1.5px solid #fff;
        color: #fff;
        cursor: pointer;
        transition: color 1s;
    }



    @media (max-width: 700px) {
        .social {
            display: none;
        }
        .nav-container {
            justify-content: center;
        }
        .nav-right {
            position: absolute;
            right: 10px;
            top: 15px;
            margin: 0px;
        }

        .nav-menu-container {
            width: 100%;
            transform: translateX(100%);
        }
        .show {
            transform:translateX(0);
        }
    }
`