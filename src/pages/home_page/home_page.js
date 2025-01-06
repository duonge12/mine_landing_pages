import { WhatWeDo } from "../components"
import { About, GetInTouch, HomePageBanner, OurClient, WhatClientSay } from "./components"


export const HomePage=()=>{
    return(
        <>
            <HomePageBanner/>
            <OurClient/>
            <About/>
            <WhatWeDo/>
            <WhatClientSay/>
            <GetInTouch/>
        </>
    )
}