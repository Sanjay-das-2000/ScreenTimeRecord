import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";

let initialValue = {
  Yes: 0,
  No: 0,
  "Not sure": 0,
};
export default function AttentionProblemInChild() {
  const [Value, setValue] = useState(initialValue);
  let count = 0;
  useEffect(() => {
    const getuserFunction = async () => {
      let result = await getAllUsers();
      result = result.data;

      let updateValue = { ...Value };

      result.forEach((user) => {
        updateValue = {
          ...updateValue,
          [user.attentionprobleminchild]:
            updateValue[user.attentionprobleminchild] + 1,
        };
      });

      setValue(updateValue);
    };
    getuserFunction();
  }, []);
  const options = {
    chart: {
      id: "Attention problem in child",
    },
    xaxis: {
      categories: ["Yes", "No", "Not sure"],
    },
  };

  const series = [
    {
      name: "Attention problem in child",
      data: [],
    },
  ];

  Object.entries(Value).map(([key, value]) => {
    count = count + value;
  });

  series.map((item) => {
    Object.entries(Value).map(([key, value]) => {
      item.data.push((value / count).toFixed(2));
    });
  });

  return (
    <div>
      <Box>
        <Heading fontSize={"1.4rem"} mb={"4%"}>
        Does screen time attention problem in child distribution
        </Heading>
        <Chart options={options} series={series} type="bar" width="600" />
      </Box>
    </div>
  );
}
