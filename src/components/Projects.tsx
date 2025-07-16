
import { Divider } from "primereact/divider";
import ProjectCards from "./ProjectCards";
import { ProjectData } from "../libs/constants";





export default function Projects() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        width: "91.666667%", 
        justifyContent: "center",
        padding: "2rem",
        background: "rgba(0, 0, 0, 0.6)",
        color: "var(--text-color)",
        borderRadius: "5px",
        border: "2px solid var(--primary-color)",
        outline: "5px solid rgba(0,0,0,0.5)"
      }}
    >

      <h2 style={{
        display: "flex",
        width: "100%", // w-12 equivalent (12/12 * 100%)
        textAlign: "center",
        justifyContent: "center",
        fontSize: "1.5rem", // text-2xl equivalent
        fontWeight: "bold",
        margin: "0"
      }}>Active Projects</h2>
      <Divider style={{
        marginTop: "0",
        paddingTop: "0",
        marginBottom: "0.75rem" // mb-3 equivalent (3 * 0.25rem = 0.75rem)
      }} />
      {/* <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
      }}>
        {ProjectData.map((project) => {
          return (
            <ProjectCards key={project.id} project={project} />
          );
        })}
      </div> */}

    </div>

  );
}
