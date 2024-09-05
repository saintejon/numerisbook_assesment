import { Add, CloseCircle } from "iconsax-react";
import React from "react";

const Modal = ({ modalVisible = false, toggleModal, children }) => {
      // CUSTOM SITE-WIDE MODAL POPUP, NEST CHILDREN INSIDE TO RENDER NEEDED COMPONENTS =============================================
      // CUSTOM SITE-WIDE MODAL POPUP, NEST CHILDREN INSIDE TO RENDER NEEDED COMPONENTS =============================================
      // CUSTOM SITE-WIDE MODAL POPUP, NEST CHILDREN INSIDE TO RENDER NEEDED COMPONENTS =============================================
      // CUSTOM SITE-WIDE MODAL POPUP, NEST CHILDREN INSIDE TO RENDER NEEDED COMPONENTS =============================================
      // CUSTOM SITE-WIDE MODAL POPUP, NEST CHILDREN INSIDE TO RENDER NEEDED COMPONENTS =============================================
      if (modalVisible)
            return (
                  <div
                        className={`h-screen w-screen fixed top-0 left-0 z-50  flex items-center justify-around  backdrop-blur-md bg-black/50`}
                  >
                        <div className="min-w-[50%]">
                              <div className=" flex justify-end my-2">
                                    <div
                                          onClick={toggleModal}
                                          className="cursor-pointer  rounded-full bg-white border border-slate-400 p-1 rotate-45"
                                    >
                                          <Add
                                                size={38}
                                                color="gray"
                                                variant="TwoTone"
                                          />
                                    </div>
                              </div>
                              <div
                                    onClick={() => {}}
                                    className="bg-white rounded-3xl overflow-y-scroll min-h-[500px] p-4 max-h-[95vh]"
                              >
                                    {children}
                              </div>
                        </div>
                  </div>
            );
};

export default Modal;
