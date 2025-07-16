import { useRef, useState } from 'react';
import "./mockphone.css";
import MediaCard from '../components/MediaCard';
import { PhoneDisplay } from '../MovieDisplay/Styled';
import { useMaintainAspectRatio } from '../libs/hooks';
import Technologies from '../components/Technologies';
import ProjectCards from '../components/ProjectCards';
import { ProjectData } from '../libs/constants';

export default function MockPhone({ isActive, deskActive }) {
    const containerRef = useRef(null);
    const { width, height } = useMaintainAspectRatio(containerRef, 2);

    return (
        <div
            ref={containerRef} style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                maxHeight: "1080px",
                transition: "1s ease-in-out",
                transform: isActive ? 'rotate(0deg)' : 'rotate(45deg)',
                margin: "0 auto"
            }}>

            <PhoneDisplay

                $isActive={deskActive}
                $displayWidth={`${width}px`}
                $displayHeight={`${height}px`}>
                <div className="black-bar"></div>
                <div className="phone-contents">
                    <div className="contents-layout">
                        <h1>Title</h1>
                        <Technologies />
                        <MediaCard></MediaCard>
                        {ProjectData.map((project) => (
                            <ProjectCards key={project.id} project={project} />
                        ))}
                        <MediaCard></MediaCard>
                        <MediaCard></MediaCard>
                        <MediaCard></MediaCard>
                    </div>
                </div>
            </PhoneDisplay>
        </div>


    )
}
