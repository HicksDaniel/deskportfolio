import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";


export default function ProjectCards({ project }: { project: any }) {


    const [hovered, setHovered] = useState<string | null>(null);
    const isHovered = hovered === project.id;

    const header = (
        <div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "center", padding: "0 0.25rem" }}>
            <h3 style={{ padding: "0", margin: "0.25rem 0" }}>{project.title}</h3>
            <Divider pt={{
                root: {
                    style: { width: "50%", margin: "0", color: "rgba(255, 255, 255, .5)", }
                }
            }} />

            <h4 style={{ padding: "0", fontSize: "0.6rem", margin: "0.5rem 0" }}>{project.description}</h4>
            <ul style={{ padding: "0", fontSize: "0.6rem", marginTop: "0" }}>
                {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                ))}
            </ul>
        </div>
    );

    const footer = (
        <>
            <Button

                label="Website"
                icon="pi pi-globe"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "40%",
                    aspectRatio: "5/1",
                    fontSize: "0.65rem",
                    outline: "2px solid var(--primary-color)",
                    border: "3px solid black",
                    borderRadius: "20px",

                }}
                onClick={() => {
                    window.open(project.url, "_blank");
                }}
            />
            < Button
                label="GitHub"
                icon="pi pi-github"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "40%",
                    aspectRatio: "5/1",
                    fontSize: "0.55rem",
                    outline: "2px solid var(--primary-color)",
                    border: "3px solid black",
                    borderRadius: "20px",

                }}
                onClick={() => {
                    window.open(`https://github.com/HicksDaniel/${project.id}`, "_blank");
                }}
            />
        </>
    );
    return (
        <Card
            key={project.id}
            footer={footer}
            header={header}
            pt={{
                content: {
                    style: { padding: "0", margin: "0" }
                },
                body: {
                    style: { padding: "0", marginBottom: "5px0" }
                },
                footer: {
                    style: { display: "flex", justifyContent: "space-evenly", padding: "0", margin: "10px 0px" }
                }
            }}


            style={{
                display: "flex",
                justifySelf: "center",
                width: "93%",
                color: "var(--text-color)",
                border: "2px solid var(--primary-color)",
                outline: "5px solid rgba(0,0,0,0.5)",
                flexDirection: "column",
                marginBottom: "1rem",
                borderRadius: "15px",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
        >
            <p style={{
                textAlign: "center",
                fontSize: "0.5rem",
                marginTop: "0",
                width: "100%"
            }}>
                Hover over to see Technologies Used
            </p>
            <div
                style={{
                    display: "flex",
                    justifySelf: "center",

                    position: "relative",
                    width: "95%",
                    margin: 0,
                    padding: 0
                }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    style={{
                        objectFit: "contain",
                        borderRadius: "0.75rem",
                        width: "100%",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    }}
                />

                <div style={{
                    display: "flex",

                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {project.technologies.map((tech, i) => {
                        const total = project.technologies.length;
                        const step = (2 * Math.PI) / total;
                        const offset = total % 2 === 0 ? step / 2 : -Math.PI / 2;
                        const angle = (2 * Math.PI * i) / total + offset
                        const radius = isHovered ? 55 : 360;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "absolute",
                                    color: "white",
                                    fontSize: "0.65rem",
                                    fontWeight: "bold",
                                    borderRadius: "0.25rem",
                                    backgroundColor: "var(--primary-color)",
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                    transform: "translate(-50%, -50%)",
                                    height: "1.5rem",
                                    width: "4rem",
                                    opacity: isHovered ? 1 : 0,
                                    transition: "opacity 1.25s ease, left 1s ease, top 1s ease",
                                }}>
                                {tech}
                            </div>
                        );
                    })}
                </div>
            </div>
        </Card>
    );
}
