// components/DraggableItem.tsx
import React, { useRef, useCallback, useEffect } from 'react';
import Draggable from 'react-draggable';

import type { DeskItem, ItemID } from '../libs/deskItems';

interface DraggableItemProps {
    item: DeskItem;
    initialZ: number;
    isActive: boolean;
    deskActive: boolean;
    isOpen: string;
    onActivate: (node: HTMLDivElement, id: ItemID) => void;
    onOpen: (id: ItemID) => void;
}

const DraggableItem = React.memo(function DraggableItem({
    item,
    initialZ,
    isActive,
    deskActive,
    onActivate,
    isOpen,

    onOpen,
}: DraggableItemProps) {
    const nodeRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (isOpen) {
                    onOpen(item.id);

                }
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onOpen]);

    const handleStart = useCallback(() => {
        if (nodeRef.current) {
            onActivate(nodeRef.current, item.id);
        }
    }, [onActivate, item.id]);

    const innerContent = item.component ? (
        (() => {
            const Component = item.component!;
            return (
                <div >

                    <Component
                        {...(item.componentProps ?? {})}
                        deskActive={deskActive}
                        isActive={isActive}
                        onDoubleClick={onOpen}
                    />
                </div>
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

    const draggableProps =
        item.id === 'mockPhone' || "tablet" ? { bounds: 'parent' as const } : {};


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
                    if (nodeRef.current) onActivate(nodeRef.current, item.id);
                }}

                onDoubleClick={() => {
                    onOpen(item.id);
                }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: 'absolute',
                    padding: 0,
                    margin: 0,
                    ...item.position,
                    width: item.size.width,
                    maxWidth: item.size.maxWidth,
                    maxHeight: "40%",
                    zIndex: initialZ,
                    borderRadius: '25px',
                    cursor: 'grab',




                }}
            >

                <div
                    style={{
                        transform: isOpen === item.id ? item.scale.isSelected : item.scale.notSelected,
                        transformOrigin: 'center center',
                        width: "100%",
                        aspectRatio: item.size.aspectRatio,
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    {innerContent}
                </div>
            </div>
        </Draggable>
    );
});

export default DraggableItem;
