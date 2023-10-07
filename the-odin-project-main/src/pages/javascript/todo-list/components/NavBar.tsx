import AllTodosIcon from "assets/icons/AllTodosIcon";
import CalendarIcon from "assets/icons/CalendarIcon";
import CreateBLankIcon from "assets/icons/CreateBlankIcon";
import DayIcon from "assets/icons/DayIcon";
import ProjectsTodoIcon from "assets/icons/ProjectsTodoIcon";
import React from "react";
import { Tabs } from "../enums/Tabs";
import MenuOption from "./MenuOption";

interface NavBarProps {
  handleTabs: (tabs: Tabs) => void;
}
export default function NavBar({ handleTabs }: NavBarProps) {
  return (
    <div className="bg-gray-500 row-span-4 flex flex-col items-center lg:items-start md:p-4 gap-5 py-5">
      <MenuOption
        name="ALL"
        nameClassName="tracking-widest"
        icon={<AllTodosIcon />}
        onClick={() => {
          handleTabs(Tabs.ALL);
        }}
      />
      <hr className="w-full px-2 border-2 border-gray-700 mx-auto rounded-full" />
      <MenuOption
        name="Day"
        icon={<DayIcon />}
        onClick={() => {
          handleTabs(Tabs.DAY);
        }}
      />
      <MenuOption
        name="Calendar"
        icon={<CalendarIcon />}
        onClick={() => {
          handleTabs(Tabs.CALENDAR);
        }}
      />
      <hr className="w-full px-2 border-2 border-gray-700 mx-auto rounded-full" />
      <MenuOption
        name="Create Project"
        icon={<CreateBLankIcon />}
        onClick={() => {
          handleTabs(Tabs.CREATE_PROJECT);
        }}
      />
      <MenuOption
        name="Projects"
        icon={<ProjectsTodoIcon />}
        onClick={() => {
          handleTabs(Tabs.PROJECTS);
        }}
      />
    </div>
  );
}
