import { Facebook, Linkedin } from 'lucide-react';
import './footer.css'
import { footerLinks } from '../../../constants/navigate_content';
const Footer=()=>{
    const footerNav=footerLinks.map((item,index)=> 
        <div className='footer-navigate-item-container'>
            <h2 className='footer-navigate-header' children={item.text}/>
            {item.child && item.child.map((child, childIndex)=>
                <p className='footer-navigate-text' children={child.text}/>
            )}
        </div>
    )
    return(
        <footer className="footer-container">
            <div className="footer-container-0">
                <div className="footer-container-1">
                    <div className="footer-logo-container">
                        <div id="footer-brand-image"/>
                        <p className='footer-text' children={'Email us'}/>
                        <p class="footer-text" children={'info@digiex.asia'}/>
                        <div className='footer-buttons-container'>
                            <button className='footer-button'>
                                <Facebook/>
                                Facebook
                            </button>
                            <button className='footer-button'>
                                <Linkedin/>
                                Linkedin
                            </button>
                        </div>
                        
                    </div>
                    <div className='footer-navigate-container' children={footerNav}/>
                </div> 
                <div className='footer-container-2'>
                    <p className='footer-rule' children={"Privacy Policy"}/>
                    <p className='footer-rule' children={"Terms of Use"}/>
                    <p className='footer-rule' children={"Cookie Policy"}/>
                </div>
            </div>
            <p className='footer-message' children={"© 2024 DigiEx Group. All rights reserved."}/>
        </footer>
    )
}
export default Footer;