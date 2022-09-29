import React, { useEffect } from 'react';
import ArtSlide from '../components/art-slide/ArtSlide';
import BannerVideo from '../components/banner/BannerVideo';
import Definition from '../components/definition/Definition';
import Journeys from '../components/journeys/Journeys';
import News from '../components/news/News';
import VR from '../components/Vr/VR';

const MainPage = () => {
    return (
        <div>
            <BannerVideo/>
            <ArtSlide/>
            <Definition/>
            <Journeys/>
            <VR/>
            <News/>
        </div>
    );
}

export default MainPage;
