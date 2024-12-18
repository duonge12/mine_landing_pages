import { Link } from "react-router"
import { headerLinks } from "../../../constants/navigate_content"
import './header.css'
import {ChevronDown, Menu } from "lucide-react"
const Header=()=>{
    const handleShowMenu=()=>{
        const menu=document.getElementById('dropdown-menu');
        menu.classList.toggle('active');
    }
    const handleShowSubMenu=()=>{
        const menu=document.getElementById('header-sub-menu');
        menu.classList.toggle('active');
    }
    const handleMainMenuDropDown=(index)=>{
        const icon=document.getElementsByClassName('header-main-menu-icon-'+index)[0];
        icon.classList.toggle('active');
        console.log(icon)
    }
    const dropDownContent=headerLinks.map((item,index)=>{
        if(item.child)
        return(
            <div className="dropdown-menu-item" key={index}>
                <div 
                    className="header-dropdown-menu-item"
                    children={item.text}
                    onClick={handleShowSubMenu}
                />
                {item.child && 
                    <div id="header-sub-menu">
                        {item.child.map((itemChild, childIndex)=>
                            <div className="header-sub-menu-item">
                                +<Link to={itemChild.path} children={itemChild.text}
                                />
                            </div>
                        )}
                    </div>
                }
            </div>
        )
        else return(
            <div key={index}>
                <Link
                    className="header-dropdown-menu-item"
                    to={item.path}
                    children={item.text}
                />
            </div>
        )
    })

    const mainMenu=headerLinks.map((item, index)=>{
        if(item.child)
            return(
                <div className="header-main-menu-sub-container">
                   
                    <div className="header-menu-item" children={item.text} onClick={()=>handleMainMenuDropDown(index)}/> 
                    <ChevronDown className={"header-main-menu-icon-"+index} stroke="white"/>
                   
                    <div className="header-main-subMenu">
                        {item.child.map((child, childIndex)=>
                            <Link key={childIndex} to={child.path} children={child.text}/>
                        )}
                    </div>
                </div>
            )
        if(item.text==="Contact us") return;
        return(
            <div>
                <Link className="header-menu-item" to={item.path} children={item.text}/>
            </div>
        )
    })
    return(
        <div id="main-header">
            <div className="container-0">
                <img id="header-brand-image" src="https://d2820gpw82hiks.cloudfront.net/assets/images/logo.webp"/>
                <div className="container-1">
                    <div id="header-menu-container" children={mainMenu}/>
                    <button className="header-menu-button" onClick={handleShowMenu}>
                        <Menu/> Menu
                    </button>
                    <button className="header-contact-us-button" children={"Contact Us"}/>
                </div>
            </div>
            <div id='dropdown-menu' children={dropDownContent}/>      
        </div>
    )
}
export default Header