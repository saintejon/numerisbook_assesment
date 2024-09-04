import React from "react";

const NotFound = () => {
      return (
            <div className="flex justify-around items-center  h-full font-bold text-center">
                  <div>
                        <div className="flex items-center justify-around animate-bounce-infinite ease-in-out">
                              <svg
                                    width="150"
                                    height="150"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                              >
                                    <path
                                          d="M6.73992 4.32686C6.65162 4.22958 6.54501 4.15065 6.42618 4.09459C6.30736 4.03853 6.17866 4.00644 6.04743 4.00014C5.9162 3.99385 5.78501 4.01347 5.66137 4.0579C5.53772 4.10232 5.42405 4.17068 5.32683 4.25905C5.22962 4.34743 5.15077 4.4541 5.0948 4.57296C5.03883 4.69182 5.00683 4.82055 5.00063 4.95179C4.99443 5.08302 5.01415 5.2142 5.05866 5.33781C5.10318 5.46142 5.17162 5.57504 5.26007 5.67219L10.1652 11.0678L5.26892 16.3138C5.15675 16.434 5.07595 16.58 5.03367 16.7389C4.99138 16.8977 4.98891 17.0646 5.02648 17.2246C5.06405 17.3847 5.1405 17.533 5.24905 17.6565C5.35761 17.7799 5.49493 17.8747 5.64886 17.9324L12.8527 20.6339L11.0194 29.8C10.9767 30.0134 11.0048 30.2348 11.0993 30.4308C11.1939 30.6267 11.3498 30.7865 11.5434 30.8859C11.737 30.9852 11.9577 31.0187 12.172 30.9813C12.3863 30.9438 12.5826 30.8375 12.7311 30.6784L20.4624 22.3948L25.2601 27.6722C25.3484 27.7695 25.455 27.8484 25.5738 27.9045C25.6926 27.9605 25.8213 27.9926 25.9526 27.9989C26.0838 28.0052 26.215 27.9856 26.3386 27.9412C26.4623 27.8967 26.5759 27.8284 26.6732 27.74C26.7704 27.6516 26.8492 27.5449 26.9052 27.4261C26.9612 27.3072 26.9932 27.1785 26.9994 27.0473C27.0056 26.916 26.9858 26.7849 26.9413 26.6612C26.8968 26.5376 26.8284 26.424 26.7399 26.3269L6.73992 4.32686Z"
                                          fill="#003eff"
                                    />
                                    <path
                                          d="M22.4706 18.6574C22.5636 18.7597 22.6768 18.8416 22.803 18.8979C22.9293 18.9543 23.0658 18.9838 23.204 18.9847H23.2106C23.3477 18.9847 23.4834 18.9565 23.6091 18.9019C23.7349 18.8472 23.8481 18.7673 23.9416 18.667L26.731 15.6784C26.8432 15.5582 26.924 15.4122 26.9663 15.2533C27.0086 15.0945 27.0111 14.9276 26.9735 14.7676C26.9359 14.6075 26.8595 14.4592 26.7509 14.3357C26.6423 14.2123 26.505 14.1175 26.3511 14.0597L19.1473 11.3583L20.9805 2.19219C21.0232 1.97884 20.9951 1.7574 20.9005 1.56145C20.806 1.36551 20.6501 1.20575 20.4565 1.10641C20.2629 1.00708 20.0422 0.973577 19.8279 1.011C19.6136 1.04842 19.4173 1.15471 19.2689 1.31377L13.5321 7.46031C13.3608 7.64383 13.2648 7.88506 13.2632 8.13608C13.2616 8.3871 13.3544 8.62955 13.5233 8.81529L22.4706 18.6574Z"
                                          fill="#003eff"
                                    />
                              </svg>
                        </div>
                        <div className="text-3xl mb-4">
                              🙊..oops! Looks like you went astray
                        </div>
                        <div>Page not found</div>
                  </div>
            </div>
      );
};

export default NotFound;
