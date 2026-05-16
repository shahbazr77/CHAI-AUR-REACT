import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {

    const [crdata, setData] = useState({});
    useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.rates);
      setData(data.rates);
    });

    }, [currency]);

   console.log('kkkkk', crdata);

    return crdata;
}

export default useCurrencyinfo;