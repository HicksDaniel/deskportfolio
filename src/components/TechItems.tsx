import type { TechStackItem } from "../libs/types";

export default function TechItem({ item }: { item: TechStackItem }) {
    return (
        <div style={{ 
            display: "flex", 
            flexFlow: "row wrap", 
            justifyContent: "center", 
            padding: 0, 
            margin: 0, 
            width: "25%" 
        }}>
            <div style={{ 
                display: "flex", 
                flexFlow: "column", 
                justifyContent: "center", 
                alignItems: "center" 
            }}>
                {item.src ? (
                    <img
                        src={item.src}
                        alt={item.name}
                        width={80}
                        height={80}
                        onError={() => {
                            <p>No Image Available</p>
                        }}
                    />
                ) : item.icon ? (
                    <item.icon size={80} />
                ) : null}
                <span style={{ 
                    marginTop: ".5rem", 
                    fontWeight: "500", 
                    fontSize: "1.125rem", 
                    fontWeight: "bold" 
                }}>
                    {item.name}
                </span>
            </div>
        </div>
    );
}
