import { Skill } from "interfaces";

export function sortSkills(skills: { [key: string]: number }) {
  const sortable: Skill[] = [];
  let key = 1;
  for (const skill in skills) {
    sortable.push([key, skill, skills[skill]]);
    key++;
  }
  sortable.sort(function (a, b) {
    return b[2] - a[2];
  });
  return sortable;
}
