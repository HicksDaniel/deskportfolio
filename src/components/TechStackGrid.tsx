import { imageList } from "../assets/ImageList";
import TechItem from "./TechItems";
import { Divider } from "primereact/divider";

export default function TechStackGrid() {
    return (
        <>
            <h2 style={{
                marginTop: "2rem",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                fontWeight: "bold",
                margin: "0",
                marginBottom: "0.25rem"
            }}>
                Tech Stack
            </h2>
            <Divider pt={{
                root: {
                    style: { justifySelf: "center", width: "90%", color: "rgba(255, 255, 255, 0.8)", marginTop: "1rem" }
                }
            }} />
            <div style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                justifySelf: "center",

                width: "90%",
                marginTop: "1rem"
            }}>
                {imageList.map((item) => (
                    <TechItem key={item.name} item={item} />
                ))}
            </div>
        </>
    );
}
