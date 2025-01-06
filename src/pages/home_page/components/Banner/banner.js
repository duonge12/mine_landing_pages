import './banner.css'
const HomePageBanner=()=>{
    return(
        <div className="home-page-banner-container">
            <div className='home-page-banner-text-container'>
                <h1 className='home-page-banner-header' children={"Driving Global Digital Transformation and Innovation"}/>
                <p className='home-page-banner-text' children={"DigiEx Group is committed to driving global technology advancement through innovative solutions and a strong tech ecosystem. We connect companies with top talent and resources to achieve impactful and sustainable digital transformation."}/>
                <button className='home-page-banner-button' children={"Read more"}/>
            </div>

        </div>
    )
}
export default HomePageBanner;