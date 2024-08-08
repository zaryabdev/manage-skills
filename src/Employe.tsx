import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { DotsVerticalIcon } from "@radix-ui/react-icons";
import "./App.css";

import { Signal, SignalHigh, SignalLow, SignalMedium, SignalZero } from "lucide-react";
import { useState } from "react";
import CreatableSkill from "./CreatableSkill";

function Employe({ skills, setSkills, employeData }) {
    const [toggleAddSkill, setToggleAddSkill] = useState(true)
    return (
        <div className="mx-auto bg-gray-100 max-w-8xl px-2 sm:px-6 lg:px-8 mt-2 ">
            <div className="flex items-center">
                <Avatar className="me-2">
                    <AvatarImage src={employeData.url} />
                    <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-semibold">{employeData.name}</span>
                    <span>{employeData.role}</span>
                </div>
            </div>
            <Navigation />
            <div className="bg-white p-3">
                <span className="font-thin text-sm">SKILLS</span>
                <div className="flex gap-3 mt-2">
                    {employeData.skills.map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                skill={skill}
                                skills={skills}
                            />
                        );
                    })}
                    {
                        toggleAddSkill ? <Button onClick={() => setToggleAddSkill(false)}>+</Button> :
                            <CreatableSkill options={skills} setOptions={setSkills} />
                    }
                </div>
            </div>

        </div>
    );
}

const Skill = ({ skill, skills = [] }) => {
    const thisSkill = skills.find((s) => s.id == skill.id);
    const [open, setOpen] = useState(false);

    return (
        <span>
            <span className="inline-flex items-center gap-x-0.5 rounded-md bg-gray-100 px-2 py-2 text-sm font-medium text-gray-600">
                <span>

                    {thisSkill.label}
                </span>
                {/* <span>
                    {skill.experience == 1 && <SignalZero />}
                    {skill.experience == 2 && <SignalLow />}
                    {skill.experience == 3 && <SignalMedium />}
                    {skill.experience == 4 && <SignalHigh />}
                    {skill.experience == 5 && <Signal />}
                </span> */}
                {/* <ControlledComponent /> */}

                <Select className="w-6 ">
                    <SelectTrigger  >
                        <SelectValue placeholder="3" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1"><SignalZero /></SelectItem>
                        <SelectItem value="2"><SignalLow /></SelectItem>
                        <SelectItem value="3"><SignalMedium /></SelectItem>
                        <SelectItem value="4"><SignalHigh /></SelectItem>
                        <SelectItem value="5"><Signal /></SelectItem>
                    </SelectContent>
                </Select>
                <Select className="w-12">
                    <SelectTrigger className="">
                        <SelectValue placeholder="remove">
                            <DotsVerticalIcon className="h-4 w-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75" />
                        </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="remove">Remove</SelectItem>
                    </SelectContent>
                </Select>
            </span>
        </span>
    );
};

const Navigation = () => {
    return (
        <div className="ml-6 flex space-x-8">
            <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
                Insights
            </a>
            <a
                href="#"
                className="inline-flex items-center border-b-2 h-12 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
            >
                Skills
            </a>
            <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
                Details
            </a>
        </div>
    );
};

const ControlledComponent = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    aria-expanded="true"
                    aria-haspopup="true"
                >
                    Options
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            <div
                className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${!show && "hidden"} transition ease-in-out`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
            >
                <div className="py-1" role="none">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                    >
                        Account settings
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                    >
                        Support
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-2"
                    >
                        License
                    </a>
                    <form method="POST" action="#" role="none">
                        <button
                            type="submit"
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-3"
                        >
                            Sign out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Employe;
