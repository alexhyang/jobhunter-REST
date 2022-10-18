const generateFetch = (link: string) => async () => {
  try {
    const response = await fetch(link);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const fetchPostings = generateFetch(
  "http://alexhyang.herokuapp.com/jobhunter-app/fetch_all_postings"
);

export const fetchSkills = generateFetch(
  "http://alexhyang.herokuapp.com/jobhunter-app/skills/fetch"
);
