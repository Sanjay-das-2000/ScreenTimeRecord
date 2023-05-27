import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";

let initialValue = {
    "Low birthweight (less than 2.5 kg)": 0,
    "Normal brithweight (2.5-4.5 kg)": 0,
    "Big baby (4.5 kg or more)": 0,
};
export default function Birthweight() {
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
            [user.birthweight] : updateValue[user.birthweight] + 1
        }
      });

      setValue(updateValue);
    };
    getuserFunction();
  }, []);
  const options = {
    chart: {
      id: "Birth Weight",
    },
    xaxis: {
      categories: [
        "Low birthweight (less than 2.5 kg)",
        "Normal brithweight (2.5-4.5 kg)",
        "Big baby (4.5 kg or more)",
      ],
    },
  };

  const series = [
    {
      name: "Birth Weight",
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
            Birth Weight distribution based on data received
        </Heading>
        <Chart options={options} series={series} type="bar" width="600" />
      </Box>
    </div>
  );
}
