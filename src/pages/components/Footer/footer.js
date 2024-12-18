import { Link } from 'react-router'
import './footer.css'
import { footerLinks, logoScr } from '../../../constants/navigate_content';
import { FBIcon, LinkedinIcon } from '../../../icons';
import { Button } from '../../../common_components';


const Footer = () => {
    const navigate_content = footerLinks.map((item, index) =>
        <div
            key={index}
            className='footer-navigate-list'
        >
            <h2 children={item.text} />
            {item.child && item.child.map((child, childIndex) =>
                <span>
                    <Link
                        key={childIndex}
                        className='footer-navigate-content'
                        children={child.text}
                        to={child.path}
                    />
                    <div className='footer-navigate-content-underline' />
                </span>
            )}
        </div>

    );


    return (
        <div className="footer-container-0">
            <div className='footer-body'>
                <div>
                    <Link children={<img className="header-brand" src={logoScr} />} />
                    <span children="Email us" />
                    <span children="info@digiex.asia" />
                    <div className='button-container-0'>
                        <Button className="common-button">
                            <FBIcon />
                            <span>Facebook</span>
                        </Button>
                        <Button className="common-button">
                            <LinkedinIcon />
                            <span>Linkedin</span>
                        </Button>
                    </div>
                </div>
                <div children={navigate_content} />
            </div>
            <div>
                <span children="Privacy Policy" />
                <span children="Terms of Use" />
                <span children="Cookie Policy" />
            </div>
            <div children="© 2024 Digiex. All rights reserved." />
        </div>

    )
}
export default Footer