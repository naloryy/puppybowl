const BaseUrl =
  "https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-FT/players";

export const fetchPuppies = async () => {
  try {
    const response = await fetch(BaseUrl);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.log(error);
  }
};
