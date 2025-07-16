import { radialGradient } from "motion/react-client";
import type { TechStackItem } from "../libs/types";

export default function TechItem({ item }: { item: TechStackItem }) {
    return (
        <div style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            margin: 0,
            width: "25%",
            aspectRatio: "1/1"
        }}>
            <div style={{
                display: "flex",
                flexFlow: "column",
                margin: "0",
                padding: "0",
                width: "75%",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                aspectRatio: "1/1",
                justifyContent: "center",
                borderRadius: "50%",
                alignItems: "center",
                background: "radial-gradient(circle, rgba(50,50,50,0.7) 0%, rgba(50,50,50, .2) 60%, rgba(255,255,255,1) 80%"
            }}>
                {item.src ? (
                    <img
                        src={item.src}
                        alt={item.name}
                        width="60%"
                        style={{ borderRadius: "20%" }}
                        onError={() => {
                            <p>No Image Available</p>
                        }}
                    />
                ) : item.icon ? (
                    <item.icon size={50} />
                ) : null}
                {/* <span style={{
                    marginTop: ".5rem",
                    fontWeight: "500",
                    fontSize: "1rem",
                    fontWeight: "bold"
                }}>
                    {item.name}
                </span> */}
            </div>
        </div>
    );
}
