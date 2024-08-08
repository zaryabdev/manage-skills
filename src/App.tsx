import { useState } from "react";
import "./App.css";
import Employe from "./Employe";
import { generateId } from "./lib/utils";

const createOption = (label: string, id?: string) => ({
    id: id ? id : generateId(),
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
});

const employeData = {
    name: "Alan Jackson",
    role: "Developer",
    url: "https://www.gravatar.com/avatar/701ff8df0162f2702f73379b261ad04b?d=404&r=R&s=80",
    skills: [
        {
            id: "YYUQBW",
            experience: 3,
        },
        {
            id: "JTWWDD",
            experience: 2,
        },
        {
            id: "ZWKMQS",
            experience: 5,
        },
    ],
};

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
        <Employe
            skills={skills}
            setSkills={setSkills}
            employeData={employeData}
        />
    );
}

export default App;
