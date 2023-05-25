import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../api/api";
import { Box, Heading } from "@chakra-ui/react";

let initialweekend = {
  Upper: {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Upper Middle": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Upper Lower": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Lower Middle": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  Lower: {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
};
let initialweekday = {
  Upper: {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Upper Middle": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Upper Lower": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Lower Middle": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  Lower: {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
};

export default function Graph() {
  const [weekday, setWeekday] = useState(initialweekday);
  const [weekend, setWeekend] = useState(initialweekend);

  useEffect(() => {
    const getuserFunction = async () => {
      let result = await getAllUsers();
      result = result.data;

      let updatedWeekday = { ...weekday };
      let updatedWeekend = { ...weekend };

      result.forEach((user) => {
        updatedWeekday[user.class] = {
          ...updatedWeekday[user.class],
          [user.weekdaytimespanviewingelectronics.smartphonewatchingtime]:
            updatedWeekday[user.class][
              user.weekdaytimespanviewingelectronics.smartphonewatchingtime
            ] + 1,
        };
        updatedWeekend[user.class] = {
          ...updatedWeekend[user.class],
          [user.weekendtimespanviewingelectronics.smartphonewatchingtime]:
            updatedWeekend[user.class][
              user.weekendtimespanviewingelectronics.smartphonewatchingtime
            ] + 1,
        };
      });

      setWeekday(updatedWeekday);
      setWeekend(updatedWeekend);
    };
    getuserFunction();
  }, []);
  console.log(weekday);

  const options = {
    chart: {
      id: "Smartphone Watching time",
    },
    xaxis: {
      categories: [
        "<2 hours",
        "2 to 4 hours",
        "4 to 6 hours",
        "6 to 8 hours",
        "more than 8 hours",
      ],
    },
  };

  const series = [
    {
      name: "Upper",
      data: [],
    },
    {
      name: "Upper Middle",
      data: [],
    },
    {
      name: "Upper Lower",
      data: [],
    },
  ];
  const series2 = [
    {
      name: "Upper",
      data: [],
    },
    {
      name: "Upper Middle",
      data: [],
    },
    {
      name: "Upper Lower",
      data: [],
    },
  ];

  series.map((item) => {
    Object.entries(weekday[item.name]).map(([key, value]) => {
      item.data.push(value);
    });
  });
  series2.map((item) => {
    Object.entries(weekend[item.name]).map(([key, value]) => {
      item.data.push(value);
    });
  });

  return (
    <div>
      <Box display={"flex"} justifyContent={"space-around"} p={"4%"}>
        <Box>
          <Heading fontSize={"1.4rem"} mb={"8%"}>
            Weekday smartphone watching time
          </Heading>
          <Chart options={options} series={series} type="bar" width="600" />
        </Box>
        <Box>
          <Heading fontSize={"1.4rem"} mb={"8%"}>
            Weekend smartphone watching time
          </Heading>
          <Chart options={options} series={series2} type="bar" width="600" />
        </Box>
      </Box>
    </div>
  );
}
