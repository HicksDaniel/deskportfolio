import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Image } from "primereact/image";

export default function Intro() {

  return (

    <div>
      <h4 >
        Turning your complex ideas<br /> into elegant solutions
      </h4>
      <p
      >
        Hey there! I'm Daniel Hicks. I specialize in building clean,
        efficient, and engaging web interfaces using modern technologies and
        front-end best practices.
      </p>
      <div >
        <Button

          label="View Projects"

        />
        <a onClick={() => window.open("/resumepdf.pdf", "_blank", "width=900,height=900, left=2000, top=300, noopener, noreferrer")} >
          <Button
            label="View Resume"

          />
        </a>
      </div>
    </div>






  );
}
