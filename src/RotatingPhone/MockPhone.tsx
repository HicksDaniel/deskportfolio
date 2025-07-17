import { useRef } from 'react';
import "./mockphone.css";
import MediaCard from '../components/MediaCard';
import { PhoneBody } from '../MovieDisplay/Styled';
import { useMaintainAspectRatio } from '../libs/hooks';
import TechStackGrid from '../components/TechStackGrid';
import ProjectCards from '../components/ProjectCards';
import { ProjectData } from '../libs/constants';
import { Divider } from "primereact/divider";

export default function MockPhone({ isActive, deskActive }) {
    const containerRef = useRef(null);
    const { width, height } = useMaintainAspectRatio(containerRef, 2.33);
    console.log(width, height);

    return (
        <div
            ref={containerRef} style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                transition: "1s ease-in-out",
                transform: isActive ? 'rotate(0deg)' : 'rotate(25deg)',
                margin: "0 auto"
            }}>

            <PhoneBody

                $isActive={deskActive}
                $displayWidth={`${width}px`}
                $displayHeight={`${height}px`}>
                <div className="black-bar"></div>
                <div className="black-border"></div>

                <div className="contents-layout">
                    <h3>Dan's Phone</h3>


                    <TechStackGrid />



                    <Divider pt={{
                        root: {
                            style: { justifySelf: "center", width: "90%", color: "rgba(255, 255, 255, 0.8)", marginTop: "1rem" }
                        }
                    }} />

                    {ProjectData.map((project) => (
                        <ProjectCards key={project.id} project={project} />
                    ))}
                    <MediaCard></MediaCard>
                    <MediaCard></MediaCard>
                    <MediaCard></MediaCard>

                </div>
            </PhoneBody>
        </div>


    )
}
