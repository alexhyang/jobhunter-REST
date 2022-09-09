import React from "react";

interface Props {
  data: { [key: string]: number };
}

type Skill = [number, string, number];

function sortSkills(skills: { [key: string]: number }) {
  const sortable: Skill[] = [];
  let key: number = 1;
  for (const skill in skills) {
    sortable.push([key, skill, skills[skill]]);
    key++;
  }
  sortable.sort(function (a, b) {
    return b[2] - a[2];
  });
  return sortable;
}

export default function WordCloud(props: Props) {
  const skills: Skill[] = sortSkills(props.data);
  console.log(skills);
  return (
    <div className="cloud-wrapper">
      <ul
        className="cloud"
        role="navigation"
        aria-label="Webdev tag cloud"
        data-show-value="true"
      >
        {skills.map(function (skill) {
          const id: number = skill[0];
          const name: string = skill[1];
          const count: number = skill[2];
          const size: number = Math.log(count) + 1;
          return (
            <li
              key={id}
              data-weight={count > 25 ? `(${count})` : ""}
              style={{ "--size": size } as React.CSSProperties}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
