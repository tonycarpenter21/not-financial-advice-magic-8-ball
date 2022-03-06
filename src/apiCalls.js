const fetchedStocks = () => {
  return fetch("https://yh-finance.p.rapidapi.com/stock/v2/get-recommendations?symbol=INTC", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yh-finance.p.rapidapi.com",
        "x-rapidapi-key": "cd502dacebmshf0d4843a45c1645p12e898jsnd6e52b28cf26"
      }
      })
      .then(response => response.json().then((data) => data.finance.result[0]))
      .catch(err => {
        console.error(err);
      })
}

export default fetchedStocks;