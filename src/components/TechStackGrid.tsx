import { imageList } from "../assets/ImageList";
import TechItem from "./TechItems";
import { Divider } from "primereact/divider";

export default function TechStackGrid() {
    return (
        <>
            <h2 style={{ 
                display: "flex", 
                textAlign: "center", 
                justifyContent: "center", 
                fontSize: "1.5rem", 
                fontWeight: "bold", 
                margin: "0", 
                marginBottom: "0.25rem" 
            }}>
                Tech Stack
            </h2>
            <Divider />
            <div style={{ 
                display: "flex", 
                flexFlow: "row wrap", 
                justifyContent: "center", 
                gap: "2rem", 
                width: "100%", 
                marginTop: "1rem" 
            }}>
                {imageList.map((item) => (
                    <TechItem key={item.name} item={item} />
                ))}
            </div>
        </>
    );
}
