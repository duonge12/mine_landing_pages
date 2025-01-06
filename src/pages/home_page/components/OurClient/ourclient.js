import { Autoplay } from 'swiper/modules';
import { AiculusIcon, AQCPartnerIcon, BanCowIcon, BigXDataIcon, CJParnerIcon, ICIHomeIcon, ITruckIcon, KokoziIcon, MegazoneIcon, OperrIcon, QTSCIcon, RealCapitalLondonIcon, RealReachIcon, ShareableIcon, ShinhanDSIcon, SuperCoderIcon, USCPartnerIcon, VinGroupIcon, WellableIcon } from '../../../../icons';
import './ourclient.css';

import { Swiper, SwiperSlide } from 'swiper/react';


const clients=[
    <AiculusIcon/>,
    <AQCPartnerIcon/>,
    <BanCowIcon/>,
    <BigXDataIcon/>,
    <CJParnerIcon/>,
    <ITruckIcon/>,
    <ICIHomeIcon/>,
    <KokoziIcon/>,
    <MegazoneIcon/>,
    <OperrIcon/>,
    <QTSCIcon/>,
    <RealCapitalLondonIcon/>,
    <RealReachIcon/>,
    <ShareableIcon/>,
    <ShinhanDSIcon/>,
    <SuperCoderIcon/>,
    <USCPartnerIcon/>,
    <VinGroupIcon/>,
    <WellableIcon/>,
]
const duplicateClient=clients.concat(clients).concat(clients).concat(clients);

const OurClient=()=>{
    const slides=duplicateClient.map((item, index)=>
        <SwiperSlide className='client-logo' key={index}>
            {item}
        </SwiperSlide>
    )
    return(
        <div className="our-client-background">
            <div className="our-client-container">
                <div className='left-blur'/>
                <div className='right-blur'/>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={'auto'}
                    autoplay={{
                        delay:500
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    speed={2000}
                    className="our-swiper"
                >{slides}</Swiper>
            </div>
        </div>
    )
}
export default OurClient;