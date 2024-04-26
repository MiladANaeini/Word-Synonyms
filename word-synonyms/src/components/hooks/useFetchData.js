import { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "../common/IsEmpty";

const useFetchData = ({
  url = "",
  callBack = () => {},
  params = {},
  enable = true,
}) => {
  const [result, setResault] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [groupId, setGroupId] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (enable) {
      getData();
    }
  }, []);

  const getData = async () => {
    setIsLoading(true);
    await axios
      .get(url, {
        params: {
          ...params,
        },
      })
      .then((res) => {
        if (!isEmpty(res.data)) {
          setGroupId(res.data[0]?.groupId);
        }
        callBack(res.data);
        setResault(res.data);
      })
      .catch((error) => {
        setError(error?.response?.data.error);
        setResault([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, error, result, groupId, getData };
};

export default useFetchData;
