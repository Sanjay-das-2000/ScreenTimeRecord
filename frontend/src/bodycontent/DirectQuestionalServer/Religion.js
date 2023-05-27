import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";

let initialValue = {
    "Hinduism":0,
    "Buddhism":0,
    "Jainism":0,
    "Sikhism":0,
    "Islam":0,
    "Khristianity":0,
    "Other":0
};
export default function Familytype() {
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
            [user.religion] : updateValue[user.religion] + 1
        }
      });

      setValue(updateValue);
    };
    getuserFunction();
  }, []);
  const options = {
    chart: {
      id: "Religion",
    },
    xaxis: {
      categories: [
        "Hinduism",
        "Buddhism",
        "Jainism",
        "Sikhism",
        "Islam",
        "Khristianity",
        "Other"
      ],
    },
  };

  const series = [
    {
      name: "Religion",
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
            Religion distribution based on data received
        </Heading>
        <Chart options={options} series={series} type="bar" width="600" />
      </Box>
    </div>
  );
}
