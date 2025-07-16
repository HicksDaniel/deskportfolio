import { useState, useRef } from "react";

import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import SlideshowRoundedIcon from "@mui/icons-material/SlideshowRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import "./MovieSideNav.css";
import { useMaintainAspectRatio } from "../libs/hooks";

import { CustomButton } from "./Styled";

export default function MovieSideNav() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(false);
  const { width, height } = useMaintainAspectRatio(containerRef, 1);

  const ButtonMenuList = [
    { icon: EmojiEventsRoundedIcon },
    { icon: HomeRoundedIcon },
    { icon: LibraryAddRoundedIcon },
    { icon: LibraryMusicRoundedIcon },
    { icon: SlideshowRoundedIcon },
    { icon: StarRoundedIcon },
    { icon: WidgetsRoundedIcon },
  ];

  const handleClick = (i) => {
    setSelected(i);
  };

  const renderedNavContents = ButtonMenuList.map((btn, index) => {
    const Icon = btn.icon;
    return (
      <CustomButton
        ref={containerRef}
        key={btn + index}
        onClick={() => handleClick(index)}

        $isSelected={selected === index && true}

      >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: `${width}px`, height: `${height}px`, margin: 0 }}>


          <Icon style={{ width: "50%", height: "50%" }} />

        </div>

      </CustomButton >
    );
  });

  return (
    <div className="side-nav-menu">
      <div className="menu-icon">
        <WidgetsRoundedIcon />
      </div>
      <div className="side-nav-contents">{renderedNavContents}</div>
    </div>
  );
}
