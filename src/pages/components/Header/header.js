import { Link } from "react-router";
import './header.css'
import { useState } from "react";
import { headerLinks, logoScr } from "../../../constants/navigate_content";
import { ArrowDownIcon, ArrowUpIcon } from "../../../icons";


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
                {item.child && ((activeChild !== item.text) ? <ArrowDownIcon /> : <ArrowUpIcon />)}
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