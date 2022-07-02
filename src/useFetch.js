import { useState, useEffect } from "react";

const useFetch = function (url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //useEffect - HOOK - run with EVERY render.
  //add empty 'dependency array' as second argument to avoid infinite loop -> USECASE: when we want to run function one time during first render
  useEffect(
    function () {
      fetch(url)
        .then(function (res) {
          if (!res.ok) {
            throw Error("Yo! We could not fetch the data for that resource");
          }
          return res.json();
        })
        .then(function (dataFetched) {
          setData(dataFetched);
          setIsLoading(false);
          setError(null);
        })
        //catching the network error
        .catch(function (err) {
          setIsLoading(false);
          setError(err.message);
        });
    },
    [url]
  );
  return { data, isLoading, error };
};

export default useFetch;
