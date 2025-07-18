import { useState } from "react";

import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";

import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import SlideshowRoundedIcon from "@mui/icons-material/SlideshowRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";



import { CustomButton, SideNavContainer } from "./Styled";

export default function MovieSideNav() {
  const [selected, setSelected] = useState(0); // Initialize with number

  const ButtonMenuList = [
    { icon: EmojiEventsRoundedIcon },
    { icon: HomeRoundedIcon },
    { icon: LibraryAddRoundedIcon },
    { icon: LibraryMusicRoundedIcon },
    { icon: SlideshowRoundedIcon },
    { icon: StarRoundedIcon },
    { icon: WidgetsRoundedIcon },
  ];

  const handleClick = (index) => {
    setSelected(index);
  };

  const renderedNavContents = ButtonMenuList.map((btn, index) => {
    const Icon = btn.icon;
    return (
      <CustomButton
        key={index}
        onClick={() => handleClick(index)}
        $isSelected={selected === index}
      >
        <Icon style={{ width: "50%" }} />
      </CustomButton>
    );
  });

  return (
    <SideNavContainer>

      <WidgetsRoundedIcon />

      <div className="side-nav-contents">{renderedNavContents}</div>
    </SideNavContainer>
  );
}
