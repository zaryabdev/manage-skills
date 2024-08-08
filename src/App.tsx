import { useState } from "react";
import "./App.css";
import Employe from "./Employe";
import { generateId } from "./lib/utils";

const createOption = (label: string, id?: string) => ({
    id: id ? id : generateId(),
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
});



const defaultSkills = [
    createOption("Angular", "YYUQBW"),
    createOption("React", "JTWWDD"),
    createOption("Vue"),
    createOption("Figma"),
    createOption("UI"),
    createOption("UX"),
    createOption("JavaScript", "ZWKMQS"),
];

function App() {
    const [skills, setSkills] = useState(defaultSkills);

    return (
        <div>
            <Employe
                skills={skills}
                setSkills={setSkills}
            />
        </div>
    );
}

export default App;
