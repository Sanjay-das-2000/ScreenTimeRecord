import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";

let initialValue = {
  Yes: 0,
  No: 0,
  "Not sure": 0,
};
export default function EnhanceSocialSkill() {
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
          [user.increasesocialskills]:
            updateValue[user.increasesocialskills] + 1,
        };
      });

      setValue(updateValue);
    };
    getuserFunction();
  }, []);
  const options = {
    chart: {
      id: "Social skill improvement",
    },
    xaxis: {
      categories: ["Yes", "No", "Not sure"],
    },
  };

  const series = [
    {
      name: "Social skills improvement",
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
          Enhances childs social skills or not  distribution
        </Heading>
        <Chart options={options} series={series} type="bar" width="600" />
      </Box>
    </div>
  );
}
