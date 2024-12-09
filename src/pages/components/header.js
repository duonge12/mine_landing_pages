import { Link } from "react-router";
import { path, serviceSubPath } from "../../constants/router_path";
import './index.css'
import ArrowDown from "../../icons/arrow_down";
import { useState } from "react";
import ArrowUp from "../../icons/arrow_up";

const logoScr = "https://s3-alpha-sig.figma.com/img/a062/7c09/4ff204c4e4be0d77e444f29297b0b790?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZenZCxiVtBbXYOx7-fBCJ~8wcTBIkrLagBzqklcMaQ~ZPqhEcyhncnvsa9ws8j5d5Zcc6DxDLv1znnDjXI1IgU7BLXf5l6lAk-KJCnJ~8Lu4oSYRrYdSsg5zWzYA1XHv-lmgyHCUSEc4O1WpvNhGRscHnE1suD4ay9AFA617~PA3Qc5RYgHfAj9r61cPW-f5tAbOyWQJ7UrchO4IShq5f7XYpiHQ7jXpNDkoKp6kwuyAhVop~pM5~QdGfBq~~B~-uU2zfqNLQvpkl9PGBtXXcO6WJiDPFIJMx5DTWJZr24PHB5rtFALqTYQzkojmqO6l2AKF8gIPGxtLRFUYiQJ9FQ__"
const headerLinks = [
    {
        path: path.home,
        text: "Home",
    },
    {
        path: path.about,
        text: "About us",
    },
    {
        path: path.service,
        text: "Our services",
        child: [
            {
                path: serviceSubPath.digital_talent_hub,
                text: "Digital talent hub",
            },
            {
                path: serviceSubPath.ai_consulting,
                text: "AI consulting and Implementation",
            },
            {
                path: serviceSubPath.digital_product,
                text: "Digital product development",
            },
            {
                path: serviceSubPath.cloud,
                text: "Cloud migration and Management service",
            },
        ]
    },
    {
        path: path.venture_builder,
        text: "Venture builder",
    },
    {
        path: path.neobank,
        text: "Neo bank labs",
    },
    {
        path: path.carreer,
        text: "Carreer",
    },
    {
        path: path.contact_use,
        text: "Contact us",
    },
];
const Header = () => {
    const [activeChild, setActiveChild] = useState('');
    const handleDropDown = (e) => {
        const content = e.target.dataset.content;
        if (activeChild === content) {
            setActiveChild('');
            return;
        }
        else {
            setActiveChild(content);
            return;
        }
    }
    const mainItem = headerLinks.map((item, index) =>
        <div key={index} className="header-main-item">
            <span>
                <Link
                    children={item.text}
                    data-content={item.text}
                    to={item.path}
                    onClick={(e) => handleDropDown(e)}
                />
                {item.child && ((activeChild !== item.text) ? <ArrowDown /> : <ArrowUp />)}
            </span>
            <span className="header-main-item-underlining" />
            {item.child && (activeChild === item.text) &&
                <div className="subItems-anchor">
                    <div className="subItems-container">
                        {item.child.map((child, childIndex) =>
                            <Link
                                key={childIndex}
                                to={child.path} className="subItem"
                                children={child.text}
                            />)}
                    </div>
                </div>
            }
        </div >
    )
    return (
        <div className="header-container">
            <Link children={<img className="header-brand" src={logoScr} />} />
            <div className="header-main-container" children={mainItem} />
        </div>
    )
}

export default Header;