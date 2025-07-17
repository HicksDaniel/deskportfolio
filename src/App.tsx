import React, { useRef, useState, useCallback } from 'react';
import DraggableItem from './components/DraggableItem';
import ItemModal from './components/ItemModal';
import "./App.css";
import {
  stickyItems,
  imageItems,
  deviceItems,
  type ItemID,
  type DeskItem,
  draggableItems,
} from './libs/deskItems';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highestZ = useRef(draggableItems.length);

  // ← pass initial values to useState
  const [activeItem, setActiveItem] = useState<ItemID | null>(null);
  const [popupItem, setPopupItem] = useState<DeskItem | null>(null);
  const [deskActive, setDeskActive] = useState<boolean>(false);

  const allItems = [...stickyItems, ...imageItems, ...deviceItems];

  const handleActivate = useCallback(
    (node: HTMLDivElement, id: ItemID) => {
      highestZ.current += 1;
      node.style.zIndex = String(highestZ.current);
      setActiveItem(id);
    },
    []
  );

  return (
    <>
      <div
        ref={containerRef}
        onClick={() => setDeskActive(true)}
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          justifySelf: "center",
          width: '95vw',
          height: '95vh',
          borderRadius: '25px',
          backgroundImage: 'url(/smooth-wooden-texture.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: "2s ease-in-out",
          boxShadow: deskActive ? 'none' : '10px 10px 1px rgba(41, 26, 26, 1)',
          transform: deskActive
            ? `matrix3d(
                1, 0, 0, 0,
                0, 1, 0.1, -0.000025,
                0, 0, 0.5, 0,
                0, 0, 0, 1
              )`
            : `matrix3d(
                0.55, 0.2, 0.7, -0.0002,
                -0.5, 0.5, 0.2, -0.0001,
                0.75, -0.5, 0.5, 0,
                0, 0, 0, 1.5
              )`,
          transformOrigin: 'center',
          willChange: 'transform, boxShadow',
        }}
      >
        {allItems.map((item, idx) => (
          <DraggableItem
            key={item.id}
            item={item}
            initialZ={idx + 1}
            isActive={activeItem === item.id}
            deskActive={deskActive}
            onActivate={handleActivate}

            onOpen={(id) => {
              console.log("it's fucking running", id);
              const found = allItems.find((i) => i.id === id) ?? null;
              console.log("found", found);
              setPopupItem(found);
            }}
          />
        ))}

        <ItemModal selectedPopupItem={popupItem} onClose={() => setPopupItem(null)} />
      </div>
    </>
  );
}




