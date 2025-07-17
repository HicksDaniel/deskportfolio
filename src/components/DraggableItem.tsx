// components/DraggableItem.tsx
import React, { useRef, useCallback } from 'react';
import Draggable from 'react-draggable';

import type { DeskItem, ItemID } from '../libs/deskItems';

interface DraggableItemProps {
    item: DeskItem;
    initialZ: number;
    isActive: boolean;
    deskActive: boolean;
    onActivate: (node: HTMLDivElement, id: ItemID) => void;
    onOpen: (id: ItemID) => void;
}

const DraggableItem = React.memo(function DraggableItem({
    item,
    initialZ,
    isActive,
    deskActive,
    onActivate,
    onOpen,
}: DraggableItemProps) {
    const nodeRef = useRef<HTMLDivElement>(null);

    const handleStart = useCallback(() => {
        if (nodeRef.current) {
            onActivate(nodeRef.current, item.id);
        }
    }, [onActivate, item.id]);

    const innerContent = item.component ? (
        (() => {
            const Component = item.component!;
            return (
                <Component
                    {...(item.componentProps ?? {})}
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

    const draggableProps = item.id === 'mockPhone' ? { bounds: 'parent' as const } : {};

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
                onDoubleClick={() => { onOpen(item.id) }}

                style={{
                    position: 'absolute',
                    ...item.position,
                    width: item.size.width,
                    height: item.size.height,
                    zIndex: initialZ,
                    cursor: 'grab',
                    ...(item.id === 'tablet' && {
                        transition: 'box-shadow 0.3s ease-in-out',
                        borderRadius: '12px',
                    }),
                }}
            >
                {innerContent}
            </div>
        </Draggable>
    );
});

export default DraggableItem;
