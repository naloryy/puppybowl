const BaseUrl =
  "https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-FT/players";

export const fetchPuppies = async () => {
  try {
    const response = await fetch(BaseUrl);
    const result = await response.json();
    console.log(result, "response");
    return result;
  } catch (error) {
    console.log(error);
  }
};
