const url = 'https://api.tvmaze.com/shows?page=1';

const getshow = async () => {
  const data = await fetch(`${url}`);
  return data.json();
};

export default getshow;