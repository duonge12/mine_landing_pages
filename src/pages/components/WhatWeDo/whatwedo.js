import { Minus, Plus } from "lucide-react";
import "./whatwedo.css";
import { useState } from "react";
const list=[
    {
        title:"Digital Talent-Hub In Vietnam",
        text:"DigiEx Talent Hub not only connects businesses with top-tier remote software engineers from Vietnam but also offers a comprehensive onboarding process to ensure smooth integration. Our talent hub features a strong network of tech experts, ongoing skill development programs, and cultural training to enhance team dynamics and performance in remote settings.",
        img:"https://d2820gpw82hiks.cloudfront.net/assets/images/home/our-service-1.webp"
    },
    {
        title:"AI Consulting & Implementation",
        text:"DigiEx AI Service provides AI consulting services from AI strategy to custom-developed Deep learning models that address a specific gap in your technology processes or business operations. We have over 10 years of practical AI experience in banking, research, and in innovative startups. Let us help you identify ways that AI can make a real difference in your business.",
        img:"https://d2820gpw82hiks.cloudfront.net/assets/images/home/our-service-2.webp"
    },
    {
        title:"Digital Product Development",
        text:"We provide comprehensive product development services, including UX design, rapid prototyping, and iterative testing for a smooth launch. Our agile approach allows for quick adjustments and scalability, with ongoing post-launch support for continuous enhancement and user satisfaction.",
        img:"https://d2820gpw82hiks.cloudfront.net/assets/images/home/our-service-3.webp"
    },
    {
        title:"NeoBank/Fintech Solutions & Development",
        text:"DigiEx provides a full suite of fintech solutions, including real-time payments, digital wallets, multi-currency support, and compliance with financial regulations. Our Neobank and fintech services are designed for security, scalability, and personalized customer experiences, ensuring that your financial products stand out in a competitive market.",
        img:"https://d2820gpw82hiks.cloudfront.net/assets/images/home/our-service-4.webp"
    }
]
const WhatWeDo=()=>{
    const [active, setActive]=useState(list[0].text)
    const handleDropDown=(text)=>{
        if(text === active) return;
        setActive(text)
    }
    const listItem=list.map((item, index)=>
        <div key={index}>
            <div className="whatwedo-item-title-container" onClick={()=>handleDropDown(item.text)}>
                <h3 className="whatwedo-item-title" children={item.title}/>
                {active === item.text ? <Minus/>:<Plus/>}
            </div>
            <div className={"whatwedo-item-content-container "+ (active === item.text ? 'active-content' : '')}>
                <p className="whatwedo-item-text" children={item.text}/>
                <img className="whatwedo-item-image" src={item.img}/>
            </div>
        </div>
    )
    return(
        <div>
            <div className="whatwedo-container">
                <div className="whatwedo-title-container">
                    <h1 className="whatwedo-title" children="Our Services"/>
                    <h2 className="whatwedo-text" children="What we do?"/>
                </div>
                <div className="whatwedo-container-0">
                    <img className="whatwedo-lg-image" src={list.filter(item=> item.text === active)[0].img}/>
                    <div className="whatwedo-list-container" children={listItem}/>
                </div>
            </div>
        </div>
    )
}
export default WhatWeDo;