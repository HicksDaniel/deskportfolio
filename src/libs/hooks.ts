import { useEffect, useState } from "react";

export function useMaintainAspectRatio(ref, aspectRatio = 0.5625) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!ref.current) return;

        const updateSize = () => {
            const width = ref.current.offsetWidth;
            const height = width * aspectRatio;
            setDimensions({ width, height });
        };

        updateSize(); // initial run

        const observer = new ResizeObserver(() => updateSize());
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, aspectRatio]);

    return dimensions;
}