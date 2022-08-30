import React from "react";

interface Props {
  data: { [key: string]: number };
}

type Skill = [number, string, number];

function sortSkills(skills: { [key: string]: number }) {
  let sortable: Skill[] = [];
  let key: number = 1;
  for (let skill in skills) {
    sortable.push([key, skill, skills[skill]]);
    key++;
  }
  sortable.sort(function (a, b) {
    return b[2] - a[2];
  });
  return sortable;
}

export default function WordCloud(props: Props) {
  let skills: Skill[] = sortSkills(props.data);
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
          let id: number = skill[0];
          let name: string = skill[1];
          let count: number = skill[2];
          let size: number = Math.log(count) + 1;
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
