import './about.css';
const statisticData=[
    {
        number:"50+",
        text:"Satisfied Customer"
    },
    {
        number:"5+",
        text:"Awards Wining"
    },
    {
        number:"150+",
        text:"Workers employed"
    },
    {
        number:"100+",
        text:"Projects Complete"
    },
]
const About=()=>{
    const statistic=statisticData.map((item, index)=>
        <div key={index} className='about-statistic-cell'>
            <p className='about-statistic-number' children={item.number}/>
            <p className='about-statistic-text' children={item.text}/>
        </div>
    )
    return(
        <div className="about-container">
            <div className="about-container-0">
                <div className="about-text-container">
                    <h1 className='about-header-0' children="About DigiEx Group"/>
                    <p className='about-paragraph-0' children="DigiEx Group, with over 20 years of international experience in IT and digital finance, specializes in digital transformation. We offer services like digital talent management, custom software development, cloud solutions, neobank labs and emerging tech research, tailored to each client's needs for success in the digital age."/>
                    <button className='about-button' children="More About Us"/>
                    <h2 className='about-header-1' children="Our journey is driven by innovation, expertise, and a dedication"/>
                </div>
                <div className='about-statistic-container' children={statistic}/>
            </div>
            <iframe
                className="about-video"
                src="https://www.youtube.com/embed/I17uIdrpECA?start=98&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}
export default About;