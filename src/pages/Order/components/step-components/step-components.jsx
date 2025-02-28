import React from "react";
import { OrderComplet } from "../../../../assets/svg/order-step/OrderComplete";
import "./step.css";

export const StepComponents = ({ title, stepNum }) => {
    return (
        <div>
            <p className="text-center text-[54px] pb-[40px] pt-[80px] font-medium">
                {title}
            </p>
            <div className="flex gap-[32px] h-[70px] justify-center overflow-auto max-md:justify-start max-lg:justify-start skroll">
                <div className="flex flex-col gap-[26px] min-w-[256px] h-[66px] cursor-pointer">
                    <div className="flex items-center gap-[17px]">
                        {stepNum !== 1 ? (
                            <OrderComplet />
                        ) : (
                            <div className="w-[40px] h-[40px] rounded-[40px] bg-[#23262f] flex items-center justify-center font-semibold">
                                <p className="text-white">1</p>
                            </div>
                        )}
                        {stepNum !== 1 ? (
                            <p className="text-[#38cb89] font-semibold">
                                Shopping cart
                            </p>
                        ) : (
                            <p className="text-[#23262f] font-semibold">
                                Shopping cart
                            </p>
                        )}
                    </div>
                    {stepNum !== 1 ? (
                        <hr className="text-[#38cb89] border" />
                    ) : (
                        <hr className="text-[#23262f] border" />
                    )}
                </div>
                <div className="flex flex-col gap-[26px] min-w-[256px] h-[66px] cursor-pointer">
                    <div className="flex items-center gap-[17px]">
                        {stepNum == 3 ? (
                            <OrderComplet />
                        ) : stepNum == 2 ? (
                            <div className="w-[40px] h-[40px] rounded-[40px] bg-[#23262f] flex items-center justify-center font-semibold">
                                <p className="text-white">2</p>
                            </div>
                        ) : (
                            <div className="w-[40px] h-[40px] rounded-[40px] bg-[#b1b5c3] flex items-center justify-center font-semibold">
                                <p className="text-white">2</p>
                            </div>
                        )}
                        {stepNum == 3 ? (
                            <p className="text-[#38cb89] font-semibold">
                                Checkout details
                            </p>
                        ) : stepNum == 2 ? (
                            <p className="text-[#23262f] font-semibold">
                                Checkout details
                            </p>
                        ) : (
                            <p className="text-[#b1b5c3] font-semibold">
                                Checkout details
                            </p>
                        )}
                    </div>
                    {stepNum == 3 ? (
                        <hr className="text-[#38cb89] border" />
                    ) : stepNum == 2 ? (
                        <hr className="text-[#23262f] border" />
                    ) : (
                        ""
                    )}
                </div>
                <div className="flex flex-col gap-[26px] min-w-[256px] h-[66px] cursor-pointer">
                    <div className="flex items-center gap-[17px]">
                        {stepNum == 3 ? (
                            <div className="w-[40px] h-[40px] rounded-[40px] bg-[#23262f] flex items-center justify-center font-semibold">
                                <p className="text-white">3</p>
                            </div>
                        ) : (
                            <div className="w-[40px] h-[40px] rounded-[40px] bg-[#b1b5c3] flex items-center justify-center font-semibold">
                                <p className="text-white">3</p>
                            </div>
                        )}
                        {stepNum == 3 ? (
                            <p className="text-[#23262f] font-semibold">
                                Checkout details
                            </p>
                        ) : (
                            <p className="text-[#b1b5c3] font-semibold">
                                Checkout details
                            </p>
                        )}
                    </div>
                    {stepNum == 3 ? (
                        <hr className="text-[#23262f] border" />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};
