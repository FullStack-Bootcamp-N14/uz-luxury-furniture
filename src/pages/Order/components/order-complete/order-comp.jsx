import React from "react";
import { StepComponents } from "../step-components/step-components";
import orderImg from "@/assets/image/order-complite.png";
import orderImg2 from "@/assets/image/order-complite2.png";
import orderImg3 from "@/assets/image/order-complite3.png";

export const OrderComplete = () => {
    return (
        <div className="container">
            <div className="pb-[80px]">
                <StepComponents title={"Complete!"} stepNum={3} />
            </div>
            <div className="flex justify-center mb-[80px]">
                <div className="py-[16px] px-[16px] shadow-2xl md:py-[80px] md:px-[95px]">
                    <p className="font-medium text-[28px] text-[#6c7275] text-start sm:text-center">
                        Thank you! 🎉
                    </p>
                    <p className="font-medium text-[30px] text-start max-w-[396px] pb-[40px] sm:text-[40px] sm:text-center">
                        Your order has been received
                    </p>
                    <div className="flex gap-[40px] justify-center">
                        <div className="relative">
                            <span className="absolute w-[32px] h-[32px] right-[-16px] top-[-16px] text-white bg-black justify-center rounded-[80px] flex items-center">
                                2
                            </span>
                            <img src={orderImg} alt="order img" />
                        </div>
                        <div className="relative">
                            <span className="absolute w-[32px] h-[32px] right-[-16px] top-[-16px] text-white bg-black justify-center rounded-[80px] flex items-center">
                                2
                            </span>
                            <img src={orderImg2} alt="order img" />
                        </div>
                        <div className="relative">
                            <span className="absolute w-[32px] h-[32px] right-[-16px] top-[-16px] text-white bg-black justify-center rounded-[80px] flex items-center">
                                2
                            </span>
                            <img src={orderImg3} alt="order img" />
                        </div>
                    </div>
                    <div className="flex gap-[32px] justify-center py-[40px]">
                        <div className="flex flex-col gap-[20px]">
                            <p>Order code:</p>
                            <p>Date:</p>
                            <p>Total:</p>
                            <p>Payment method:</p>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <p>#0123_45678</p>
                            <p>October 19, 2023</p>
                            <p>$1,345.00</p>
                            <p>Credit Card</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="text-white bg-[#141718] py-[12px] px-[40px] rounded-[88px]">
                            Purchase history
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
