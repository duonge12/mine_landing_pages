import './getintouch.css';
export const GetInTouch=()=>{
    return(
        <div className="get-in-touch-container">
            <div className="get-in-touch-container-0">
                <div className="get-in-touch-text-container">
                    <h1 className='get-in-touch-header' children="About your next project?"/>
                    <p className='get-in-touch-paragraph' children="We are ready to listen and support you in bringing your creative ideas to life. Contact us now to start the journey with your next project."/>
                    <button className='get-in-touch-button' children="Get In Touch"/>
                </div>
                <div className="get-in-touch-image-container">
                    <img className="get-in-touch-image-0"  src='https://d2820gpw82hiks.cloudfront.net/assets/images/home/get-in-touch-1.webp'/>
                    <img className="get-in-touch-image-1" src='https://d2820gpw82hiks.cloudfront.net/assets/images/home/our-service-4.webp'/>
                    <img className="get-in-touch-image-2" src='https://d2820gpw82hiks.cloudfront.net/assets/images/home/get-in-touch-2.webp'/>
                </div>
            </div>
        </div>
    )
}