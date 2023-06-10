import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";

let initialValue = {
    "Upper": 0,
        "Upper Middle": 0,
        "Upper Lower": 0,
        "Lower Middle": 0,
        "Lower": 0,
};
export default function SubeconomicClass() {
  const [Value, setValue] = useState(initialValue);
  let count = 0;
  useEffect(() => {
    const getuserFunction = async () => {
      let result = await getAllUsers();
      result = result.data;

      let updateValue = {...Value}

      result.forEach((user) => {
        updateValue = {
            ...updateValue,
            [user.class] : updateValue[user.class] + 1
        }
      });

      setValue(updateValue);
    };
    getuserFunction();
  }, []);
  const options = {
    chart: {
      id: "Subeconomic Class",
    },
    xaxis: {
      categories: [
        "Upper",
        "Upper Middle",
        "Upper Lower",
        "Lower Middle",
        "Lower",
      ],
    },
  };

  const series = [
    {
      name: "Subeconomic Class",
      data: [],
    },
  ];

  Object.entries(Value).map(([key, value]) => {
    count = count + value;
  });

  series.map((item) => {
    Object.entries(Value).map(([key, value]) => {
      item.data.push((value/count).toFixed(2));
    });
  });

  return (
    <div>
      <Box>
        <Heading fontSize={"1.4rem"} mb={"4%"}>
            Subeconomic class distribution based on data received
        </Heading>
        <Chart options={options} series={series} type="bar" width="600" />
      </Box>
    </div>
  );
}
