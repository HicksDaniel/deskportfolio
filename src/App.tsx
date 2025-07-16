// App.tsx
import React, { useRef, useState, useCallback } from 'react';
import Draggable from 'react-draggable';
import './App.css';

import {
  stickyItems,
  imageItems,
  deviceItems,
  type ItemID,
  type DeskItem,
  draggableItems,
} from './libs/deskItems';

import ItemModal from './components/ItemModal';

// -----------------------------------------------------------------------------
// DraggableItem: memoized wrapper that handles one DeskItem
// -----------------------------------------------------------------------------
const DraggableItem = React.memo(function DraggableItem({
  item,
  initialZ,
  isActive,
  onActivate,
  deskActive,
  onOpen,
}: {
  item: DeskItem;
  initialZ: number;
  isActive: boolean;
  deskActive: boolean;
  onActivate: (node: HTMLDivElement, id: ItemID) => void;
  onOpen: (id: ItemID) => void;
}) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleStart = useCallback(() => {
    if (nodeRef.current) {
      onActivate(nodeRef.current, item.id);
    }
  }, [onActivate, item.id]);

  // Build inner content: either an <img> or a custom component
  const innerContent = item.component ? (
    (() => {
      const Component = item.component!;
      return (
        <Component
          {...item.componentProps}
          deskActive={deskActive}
          isActive={isActive}
        />
      );
    })()
  ) : (
    <img
      src={item.src}
      alt={item.id.startsWith('sticky') ? `Sticky ${item.id}` : `Image ${item.id}`}
      style={{
        width: '100%',
        height: 'auto',
        transition: '.5s ease-in-out',
        transform: isActive ? 'rotate(0deg)' : item.rotation,
        boxShadow: isActive
          ? '2px 0 15px 2px rgba(0,0,0,0.8)'
          : '1px 1px 5px 0.5px rgba(0,0,0,0.5)',
        pointerEvents: 'none',
      }}
    />
  );

  // Special prop for mockPhone bounds
  const draggableProps =
    item.id === 'mockPhone' ? { bounds: 'parent' as const } : {};

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={{ x: 0, y: 0 }}
      onStart={handleStart}
      {...draggableProps}
    >
      <div
        ref={nodeRef}
        onClick={(e) => {
          e.stopPropagation();
          onActivate(nodeRef.current!, item.id);
        }}
        onDoubleClick={() => onOpen(item.id)}
        style={{
          position: 'absolute',
          ...item.position,
          width: item.size.width,
          height: item.size.height,
          zIndex: initialZ,           // initial stacking order
          cursor: 'grab',
          ...(item.id === 'tablet' && {
            transition: 'box-shadow 0.3s ease-in-out',
            borderRadius: '12px',
            overflow: 'hidden',
          }),
        }}
      >
        {innerContent}
      </div>
    </Draggable>
  );
});

// -----------------------------------------------------------------------------
// App: lays out all DraggableItems and manages z-index imperatively
// -----------------------------------------------------------------------------
export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highestZ = useRef(draggableItems.length);

  const [activeItem, setActiveItem] = useState<ItemID | null>(null);
  const [popupItem, setPopupItem] = useState<ItemID | null>(null);
  const [deskActive, setDeskActive] = useState(false);

  const allItems = [...stickyItems, ...imageItems, ...deviceItems];

  // Called when an item is clicked or drag starts:
  //   - Bump the global z-index counter
  //   - Apply the new z-index directly to the DOM node
  //   - Mark it as active (React state) for styling
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
          width: '95vw',
          height: '95vh',
          borderRadius: '10px',
          backgroundImage: 'url(/smooth-wooden-texture.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: "2s ease-in-out",
          boxShadow: deskActive ? 'none' : '10px 10px 1px rgba(0, 0, 0, 1)',
          transform: deskActive
            ? `matrix3d(
                1, 0, 0, 0,
                0, 1, 0.1, -0.00005,
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
            onOpen={setPopupItem}
          />
        ))}

        <ItemModal popupItem={popupItem} onClose={() => setPopupItem(null)} />
      </div>
    </>
  );
}
