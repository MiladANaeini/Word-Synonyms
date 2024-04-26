import { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "../common/IsEmpty";

const useFetchData = ({
  url = "",
  callBack = () => {},
  enable = true,
  //no query params to avoid complexity given that we dont have complex filters
}) => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (enable) {
      getData();
    }
  }, []);

  const getData = async () => {
    setIsLoading(true);
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
        setIsLoading(false);
      });
  };

  return { isLoading, error, result, getData };
};

export default useFetchData;
