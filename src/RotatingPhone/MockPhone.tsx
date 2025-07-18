import { useRef } from 'react';

import MediaCard from '../components/MediaCard';
import { PhoneBody } from '../MovieDisplay/Styled';
import { useMaintainAspectRatio } from '../libs/hooks';
import TechStackGrid from '../components/TechStackGrid';
import ProjectCards from '../components/ProjectCards';
import { ProjectData } from '../libs/constants';
import { Divider } from "primereact/divider";





export default function MockPhone({ isActive, deskActive, transformStyle }) {


    const containerRef = useRef(null);

    return (

        <PhoneBody
            ref={containerRef}
            $deskActive={deskActive}
            $isActive={isActive}
        >

            <div className="black-bar"></div>
            <div className="black-border"></div>

            <div className="contents-layout">



                <TechStackGrid />




                {ProjectData.map((project) => (
                    <>

                        \
                        <ProjectCards key={project.id} project={project} />
                    </>
                ))}
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>

            </div>
        </PhoneBody>



    )
}
