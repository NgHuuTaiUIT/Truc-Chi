import React from 'react';
import ReactPlayer from 'react-player';
import Container from '../Container/Container';
import imgBanner from '../../assets/images/banner.png';
import { ReactComponent as IconPlay } from "../../assets/icon/play-circle.svg";

const BannerVideo = () => {
    return (
        <Container>
            <img src={imgBanner} alt="" className='absolute inset-0 object-cover w-full h-full'/>
            {/* <div className='absolute inset-0'>
                <ReactPlayer
                    url="https://www.youtube.com/embed/9DylqB7t-dE"
                    width="100%"
                    height="100%"
                    controls={false}
                    playing={false}
                    muted={false}
                />
            </div> */}
            <div className='flex absolute inset-0 z-[1] justify-center items-center'>
                <IconPlay className='absolute z-[1]' />
            </div>
        </Container>
    );
}

export default BannerVideo;
