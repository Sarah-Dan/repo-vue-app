async function searchRepository(query, user) {
    const url = `https://api.github.com/search/repositories?q=${query}+user:${user}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
  }
  
  export default searchRepository;