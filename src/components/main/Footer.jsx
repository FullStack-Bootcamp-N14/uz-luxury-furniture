import { Link } from "react-router-dom";
import FooterLogo from "../../assets/svg/footer/footer-logo.svg";
import FooterSocial from "../../assets/svg/footer/footer-social";
import FooterSocial2 from "../../assets/svg/footer/footer-social2";
import FooterSocial3 from "../../assets/svg/footer/footer-social3";
const Footer = () => {
    return (
        <footer className="bg-[#232627] py-[48px] md:bg-[#141718] md:pb-[32px]">
            <div className="container">
                <div className="flex flex-col gap-[40px] ">
                    <div className="flex flex-col gap-[40px] md:flex-row md:justify-between md:gap-0">
                        <div className="flex flex-col items-center gap-[16px] md:flex-row md:gap-[24px] lg:gap-[32px]">
                            <Link to={"/"}>
                                <img src={FooterLogo} alt="footer logo" />
                            </Link>
                            <span className="inline-block border rotate-[90deg] w-[1px] h-[24px] border-[#6c7275] md:rotate-0"></span>
                            <p className="text-[#fff] font-normal leading-[157%] text-[14px]">
                                Gift & Decoration Store
                            </p>
                        </div>
                        <div className="flex flex-col ml-auto mr-auto items-center gap-[32px] max-w-[75px] md:flex-row md:gap-[20px] md:max-w-[360px] md:ml-0 md:mr-0 lg:gap-[40px] lg:max-w-[392px]">
                            <Link to={"/"}>
                                <p className="text-[#fff] font-normal leading-[157%] text-[14px]">
                                    Home
                                </p>
                            </Link>
                            <Link to={"/shop"}>
                                <p className="text-[#fff] font-normal leading-[157%] text-[14px]">
                                    Shop
                                </p>
                            </Link>
                            <Link to={"/product"}>
                                <p className="text-[#fff] font-normal leading-[157%] text-[14px]">
                                    Product
                                </p>
                            </Link>
                            <Link to={"/blog"}>
                                <p className="text-[#fff] font-normal leading-[157%] text-[14px]">
                                    Blog
                                </p>
                            </Link>
                            <Link to={"/contacts"}>
                                <p className="text-[#fff] font-normal leading-[157%] text-[14px]">
                                    Contact Us
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[34px] border-t border-[#6c7275] md:flex-row-reverse md:justify-between md:items-center">
                        <div className="flex gap-[26px] pt-[25px] md:pt-[5px] lg:gap-[32px]">
                            <div>
                                <Link to={"https://www.instagram.com/"}>
                                    <FooterSocial />
                                </Link>
                            </div>
                            <div>
                                <Link to={"https://www.facebook.com/"}>
                                    <FooterSocial2 />
                                </Link>
                            </div>
                            <div>
                                <Link to={"https://www.youtube.com/"}>
                                    <FooterSocial3 />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center flex-col gap-[28px] md:flex-row-reverse ">
                            <div className="flex gap-[28px] md:pt-[16px] md:pb-[20px]">
                                <p className="text-[#fff] font-semibold leading-[167%] text-[12px]">
                                    Privacy Policy
                                </p>
                                <p className="text-[#fff] font-semibold leading-[167%] text-[12px]">
                                    Terms of Use
                                </p>
                            </div>
                            <p className="font-normal text-[#fff] leading-[167%] text-[12px]">
                                Copyright © 2023 HomeDecor. All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
