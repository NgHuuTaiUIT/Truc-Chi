import React from 'react';
import { ReactComponent as LogoIcon } from "../../assets/icon/logo.svg";
import { ReactComponent as IconLine } from "../../assets/icon/line.svg";
import { ReactComponent as IconFace } from "../../assets/icon/facebook.svg";
import { ReactComponent as IconInsta } from "../../assets/icon/instagram.svg";
import { ReactComponent as IconYoutube } from "../../assets/icon/youtube.svg";
import imgChungnhan from '../../assets/images/chungnhan.png'
import "./Footer.style.scss";

const Footer = () => {
    return (
        <div className='w-full footer pb-[127px]'>
            <div className='footer-container w-[85%] mx-auto'>
                <div className='flex items-center justify-between gap-[40px] md:flex-row flex-col'>
                    <LogoIcon/>
                    <IconLine className="m-auto md:m-0 max-w-[100%]"/>
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-between content gap-[85px] md:mt-[155px] mt-[60px] mb-[128px]">
                    <div className="flex justify-between adress gap-[24px] flex-wrap lg:flex-nowrap ">
                        <ul className="adress-item flex flex-col gap-[15px] text-[25px] font-medium">
                            Trúc Chỉ Km 0
                            <li className=''>Vườn Trúc Chỉ - 5 Thạch Hãn, P. Thuận Hòa, TP. Huế</li>
                            <li className="">0962 901 518</li>
                        </ul>
                        <ul className="adress-item flex flex-col gap-[15px] text-[25px] font-medium">
                            Trúc Chỉ Km 650
                            <li className=''>Số 09, Dãy 16B1, Làng Việt Kiều Châu Âu, Mộ Lao, Hà Đông, Hà Nội</li>
                            <li className="">0911 806 269</li>
                        </ul>
                        <ul className="adress-item flex flex-col gap-[15px] text-[25px] font-medium">
                        Trúc Chỉ Km 1000
                            <li className=''>51B Tú Xương, P. Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh</li>
                            <li className="">0931 346 800</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center follow gap-[15px] m-auto">
                        <p className='text-txt1 whitespace-nowrap'>Theo dõi chúng tôi tại</p>
                        <ul className='flex gap-[16px]'>
                            <li className="facebook"><IconFace className='icon'/></li>
                            <li className="instagram"><IconInsta className='icon'/></li>
                            <li className="youtube"><IconYoutube className='icon'/></li>
                        </ul>
                        <img src={imgChungnhan} alt="" />
                    </div>
                </div>
                <h3 className='text-center font-[roboto] font-medium text-[25px]'>Copyright © 2022 Santani. All rights reserved</h3>
            </div>
        </div>
    );
}

export default Footer;
