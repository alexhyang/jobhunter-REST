export async function getPostings() {
  try {
    const response = await fetch(
      "http://alexhyang.herokuapp.com/jobhunter-app/fetch_all_postings"
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
