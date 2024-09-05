import {
      Category2,
      Home2,
      MessageQuestion,
      Profile2User,
      ReceiptItem,
      Setting,
} from "iconsax-react";
import React from "react";

const CustomIcon = ({ text, size = 20 }) => {
      // SWITCH STATEMENT TO RENDER SVGS ICONS BASED ON THE TEXT PROVIDED=============================================
      switch (text) {
            case "Getting Started":
                  return <Home2 size="20" color="#697598" variant="TwoTone" />;
            case "Accounts":
                  return <Home2 size="20" color="#697598" variant="TwoTone" />;
            case "Invoice":
                  return (
                        <ReceiptItem
                              size={size}
                              color="#697598"
                              variant="TwoTone"
                        />
                  );
            case "Beneficiary Management":
                  return (
                        <Profile2User
                              size={size}
                              color="#697598"
                              variant="TwoTone"
                        />
                  );
            case "Help Center":
                  return (
                        <MessageQuestion
                              size={size}
                              color="#697598"
                              variant="TwoTone"
                        />
                  );
            case "Overview":
                  return (
                        <Category2
                              size={size}
                              color="#697598"
                              variant="TwoTone"
                        />
                  );
            case "Settings":
                  return (
                        <Setting
                              size={size}
                              color="#697598"
                              variant="TwoTone"
                        />
                  );

            default:
                  break;
      }
      return <div>NavBarIcon</div>;
};

export default CustomIcon;
