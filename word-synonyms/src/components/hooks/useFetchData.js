import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = ({
  url = "",
  callBack = () => {},
  enable = true,
  //no query params to avoid complexity given that we dont have complex filters
}) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (enable) {
      getData();
    }
  }, []);

  const getData = async () => {
    setLoading(true);
    await axios
      .get(url)
      .then((res) => {
        callBack(res.data);
        setResult(res.data);
      })
      .catch((error) => {
        setError(error?.response?.data.error);
        setResult([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, error, result, getData };
};

export default useFetchData;
