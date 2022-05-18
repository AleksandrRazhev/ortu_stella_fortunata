const useArticlesService = () => {

  const getArticles = async () => {
    try {
      const response = await fetch('/api/get-articles');
      return response.json();
    } catch (e) {
      console.log(e)
      return [];
    }
  }

  return {getArticles};

}

export default useArticlesService;
