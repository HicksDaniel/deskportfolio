import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";


export default function ProjectCards({ project }: { project: any }) {


    const [hovered, setHovered] = useState<string | null>(null);
    const isHovered = hovered === project.id;

    const header = (
        <div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "center", padding: "0 0.25rem" }}>
            <h2 style={{ padding: "0", margin: "0.25rem 0" }}>{project.title}</h2>
            <Divider pt={{
                root: {
                    style: { width: "50%", margin: "0", color: "rgba(255, 255, 255, .5)", }
                }
            }} />

            <h4 style={{ padding: "0", fontSize: "0.875rem", margin: "0.5rem 0" }}>{project.description}</h4>
            <ul style={{ padding: "0", fontSize: "0.875rem", marginTop: "0" }}>
                {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                ))}
            </ul>
        </div>
    );

    const footer = (
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <Button
                style={{
                    fontSize: "0.4rem",
                    marginTop: "0.5rem",
                    backgroundColor: "transparent",
                    border: "1px solid var(--primary-color)",
                    color: "var(--primary-color)"
                }}
                label="Open Website"
                icon="pi pi-globe"
                onClick={() => {
                    window.open(`${project.url}`, "_blank");
                }}
            />
            <Button
                label="Open in GitHub"
                icon="pi pi-github"
                style={{
                    fontSize: "0.4rem",
                    marginTop: "0.5rem",

                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    border: "5px solid var(--primary-color)",
                    borderRadius: "50px",
                    color: "var(--primary-color)"
                }}
                onClick={() => {
                    window.open(`https://github.com/HicksDaniel/${project.id}`, "_blank");
                }}
            />
        </div>
    );
    return (
        <Card
            key={project.id}
            footer={footer}
            header={header}


            style={{

                width: "100%",
                background: "rgba(0, 0, 0, 0.6)",
                color: "var(--text-color)",
                borderRadius: "5px",
                border: "2px solid var(--primary-color)",
                outline: "5px solid rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
                padding: "0.25rem",
                alignItems: "space-between",
                justifyContent: "space-between",

                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
        >
            <h4 style={{
                textAlign: "center",
                fontSize: "0.75rem",
                marginTop: "0",
                width: "100%"
            }}>
                Hover over to see Technologies Used
            </h4>
            <div
                style={{
                    display: "flex",
                    position: "relative",
                    width: "100%"
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
                        const offset = total % 2 === 0 ? step / 1 : -Math.PI / 2;
                        const angle = (2 * Math.PI * i) / total + offset
                        const radius = isHovered ? 80 : 360;
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
                                    padding: "0 0.5rem",
                                    fontWeight: "bold",
                                    borderRadius: "0.5rem",
                                    backgroundColor: "var(--primary-color)",
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                    transform: "translate(-50%, -50%)",
                                    height: "2rem",
                                    width: "6.5rem",
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
