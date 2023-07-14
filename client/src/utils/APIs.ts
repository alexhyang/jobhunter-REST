const generateFetch = (url: string) => async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const fetchPostings = generateFetch("http://localhost:8000/api");
export const fetchSkills = generateFetch("http://localhost:8000/api");

// export const fetchSkills = generateFetch(
// );
