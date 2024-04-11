const FetchIssuePr = async (
    url: string,
    token: string | undefined
  ): Promise<void> => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      const data = await response.json();
      return data 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  export default FetchIssuePr;
  