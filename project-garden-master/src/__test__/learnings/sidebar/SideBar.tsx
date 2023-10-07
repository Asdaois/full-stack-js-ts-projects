import React from "react";

export interface Item {
  name: string;
  href: string;
}

type Props = {
  items: Item[];
};

export const SideBar = ({ items }: Props) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.href}>
            <a role="navigation" href={item.href}>
              {item.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};
