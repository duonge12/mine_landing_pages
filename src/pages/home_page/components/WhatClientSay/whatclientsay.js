
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import './whatclientsay.css';
import { useEffect, useRef } from "react";
import { LeftCircle, LeftCorner } from "../../../../icons";
import { ChevronLeft, ChevronRight } from "lucide-react";
const clientSpeech=[
    {
      name: 'Kevin Wang',
      position: 'President & CEO, OPERR Group',
      description:
        'We had great experiences with DigiEx Team on building & launching couple of our products. Strong communication skills provided a high-quality product in a short amount of time. Skill level of their Dev team is extremely high. I strongly recommend DigiEx for any company looking for software development partner',
      image: {
        avatar: 'https://d2820gpw82hiks.cloudfront.net/assets/images/home/avt1.webp',
        logoCompany: 'https://d2820gpw82hiks.cloudfront.net/assets/images/home/logo1.webp',
      },
    },
    {
      name: 'Jim Schaefer',
      position: 'President & CEO, RealReach Marketing, LLC',
      description:
        'We partner with DigiEx Team for Web Development & Cloud Managed Service, I have been really impressed working with the team. They are professional, work ahead of schedule and are technically strong across a range of fields.',
      image: {
        avatar: 'https://d2820gpw82hiks.cloudfront.net/assets/images/home/avt2.webp',
        logoCompany: 'https://d2820gpw82hiks.cloudfront.net/assets/images/home/logo2.webp',
      },
    },
    {
      name: 'Omaru Maruatona',
      position: 'CEO, AICulus',
      description:
        'DigiEx Group have been great partners to Aiculus. We’ve worked with them since 2019 and have found them easy to work with and attentive to the customer’s needs. I’ve enjoyed working with DigiEx team',
      image: {
        avatar: 'https://d2820gpw82hiks.cloudfront.net/assets/images/home/avt3.webp',
        logoCompany: 'https://d2820gpw82hiks.cloudfront.net/assets/images/home/logo3.webp',
      },
    },
    {
      name: 'Jae Woong',
      position: 'CPO, Supercoder',
      description:
        'Working with Johnny and the Digiex Team was a great experience. I realized that they were professionals who could translate ideas and concepts into a functional product. This means that their communication skills are superior and their work process is quick and effective. I would highly recommend working with Digiex Team.',
      image: {
        avatar: 'https://d2820gpw82hiks.cloudfront.net/assets/images/home/avt4.webp',
        logoCompany: 'https://d2820gpw82hiks.cloudfront.net/assets/images/home/logo4.webp',
      },
    },
    {
      name: 'Nabarun Chakma',
      position: 'CEO, PizzaPOS, Au',
      description:
        'The team at DigiEx Group always have a great attitude to listen to and understand what customers need. We trust the team of DigiEx a lot. They do keep the deadline and never give up the difficult tasks. If the team finds a better solution, they share the ideas with us and create the opportunities to discuss more. I have been relieved that they care about the anxiety of customers and try to get rid of it.',
      image: {
        avatar: 'https://d2820gpw82hiks.cloudfront.net/assets/images/home/avt5.webp',
      },
    },
  ];
const WhatClientSay=()=>{
    const swiperRef=useRef(null)
    const slides=clientSpeech.map((item, index)=>
        <SwiperSlide key={index}>
            <div className="what-we-say-container">
                <div className="what-we-say-client-logo-container">
                    <LeftCircle className="what-we-say-circle"/>
                    <div className="what-we-say-logo-container">
                        <img src={item.image.avatar}/>
                        {item.image.logoCompany && <img src={item.image.logoCompany}/>}
                    </div>
                    <div className="what-we-say-client-container">
                        <h2 children={item.name}/>
                        <span children={item.position}/>
                    </div>
                </div>
                <div className="what-we-say-client-say-container">
                    <LeftCorner className={"what-we-say-square"}/>
                    <p children={item.description}/>   
                </div>
            </div>
        </SwiperSlide>
    );
    const handleScrollPrev=()=>{
        swiperRef.current.slidePrev();
    }
    const handleScrollNext=()=>{
        swiperRef.current.slideNext();
    }
    useEffect(()=>{
        const handleGetMaxHeightOfSlides=()=>{
            const swiper=document.getElementsByClassName('what-client-say-swiper')[0]
            const slides= swiper.querySelectorAll('.what-we-say-client-say-container >p');
            for(let slide of slides){
                slide.style.minHeight='auto';  
            }
            const slideHeights=Array.from(slides).map(item => item.offsetHeight);
            const maxHeight= slideHeights.reduce((maxHeight, slideHeight)=>{
                return slideHeight < maxHeight ? maxHeight :slideHeight;
            },0);
            for(let slide of slides){
                slide.style.minHeight=`${maxHeight}px`;  
            }   
        }

        handleGetMaxHeightOfSlides()
        window.addEventListener("resize",handleGetMaxHeightOfSlides);
        return ()=>{ 
            window.removeEventListener("resize",handleGetMaxHeightOfSlides);
        };
    })
   

    return(
        <div className="what-client-say-background">
            <div className="what-client-say-container">
                <div className="what-client-say-title-container">
                    <div>
                        <span className="what-client-say-our-client-text" children="Our Clients"/>
                        <span className="what-client-say-what-client-say-text" children="What Client’s Say?"/>
                    </div>
                    <div>
                        <div className="what-client-say-percentage">
                            30%
                            <div>
                                <div className="what-client-say-our-field"  children="Project"/>
                                <div className="what-client-say-our-role" children="Consulting"/>
                            </div>
                        </div>
                        <div className="what-client-say-percentage">
                            70%
                            <div>
                                <div className="what-client-say-our-field" children="App"/>
                                <div className="what-client-say-our-role" children="Development"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay:500
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    onSwiper={(swiper)=>{
                        swiperRef.current=swiper
                    }}
                    speed={2000}
                    className="what-client-say-swiper"
                >{slides}</Swiper>
                <div className="what-client-say-button-container">
                    <ChevronLeft onClick={handleScrollPrev} className="what-client-say-button-pre"/>
                    <ChevronRight onClick={handleScrollNext} className="what-client-say-button-next"/>
                </div>
            </div>
        </div>
    )
}
export default WhatClientSay;