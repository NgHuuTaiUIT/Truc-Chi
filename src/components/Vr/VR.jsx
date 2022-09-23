import React from 'react';
import Container from '../Container/Container';
const VR = () => {
    return (
        <Container className='min-h-[500px]'>
            <h1>Vườn Trúc Chỉ</h1>
            <p className='text-txt2 font-medium text-[28px] md:text-[32px] max-w-[80%] m-auto py-[20px] md:py-[36px]'>Cùng đắm chìm vào không gian nghệ thuật của Trúc Chỉ Garden với công nghệ thực tế ảo 360 VR.</p>
            <iframe
                id="iframe_tour_vr"
                src="https://refs.sgallery.vn/ndc/vrtour/"
                className="min-h-[500px] md:min-h-[100vh] max-w-[1440px] w-full m-auto px-2"
                title="iframe-vr-tour"
            />
        </Container>
    );
};



export default VR;
