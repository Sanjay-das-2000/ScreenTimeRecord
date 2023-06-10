import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";
import { Box, Heading, Select, VStack } from "@chakra-ui/react";

const setinitialweekend = () => {
  return{
  Upper: {
    count: 0,
    "No electronic device at home":0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Upper Middle": {
    count: 0,
    "No electronic device at home":0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Upper Lower": {
    count: 0,
        "No electronic device at home":0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Lower Middle": {
    count: 0,
        "No electronic device at home":0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  Lower: {
    count: 0,
        "No electronic device at home":0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
}
};
const setinitialweekday = () => {
  return{
  Upper: {
    count: 0,
        "No electronic device at home":0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Upper Middle": {
    count: 0,
        "No electronic device at home":0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Upper Lower": {
    count: 0,
        "No electronic device at home":0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Lower Middle": {
    count: 0,
        "No electronic device at home":0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  Lower: {
    count: 0,
        "No electronic device at home":0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
}
};
export default function Graph() {
  const [selectValue, setSelectValue] = useState("tvwatchingtime");

  const [weekday, setWeekday] = useState(setinitialweekday());
  const [weekend, setWeekend] = useState(setinitialweekend());


  useEffect(() => {
    const getuserFunction = async () => {
      let result = await getAllUsers();
      result = result.data;

      let updatedWeekday = { ...weekday };
      let updatedWeekend = { ...weekend };

      result.forEach((user) => {
        updatedWeekday[user.class] = {
          ...updatedWeekday[user.class],
          [user.weekdaytimespanviewingelectronics[`${selectValue}`]]:
            updatedWeekday[user.class][
              user.weekdaytimespanviewingelectronics[`${selectValue}`]
            ] + 1,
        };
        updatedWeekend[user.class] = {
          ...updatedWeekend[user.class],
          [user.weekendtimespanviewingelectronics[`${selectValue}`]]:
            updatedWeekend[user.class][
              user.weekendtimespanviewingelectronics[`${selectValue}`]
            ] + 1,
        };
      });

      setWeekday(updatedWeekday);
      setWeekend(updatedWeekend);
    };
    getuserFunction();
  }, [selectValue]);

  const options = {
    chart: {
      id: "Screen Watching time",
    },
    xaxis: {
      categories: [
        "No electronic device at home",
        "0 hours",
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
    {
      name: "Lower Middle",
      data: [],
    },
    {
      name: "Lower",
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
    {
      name: "Lower Middle",
      data: [],
    },
    {
      name: "Lower",
      data: [],
    },
  ];

  series.map((item) => {
    Object.entries(weekday[item.name]).map(([key, value]) => {
      if(key !== "count"){
        weekday[item.name].count = weekday[item.name].count + value;
      }
    });
  });
  series2.map((item) => {
    Object.entries(weekend[item.name]).map(([key, value]) => {
      if(key !== "count"){
        weekend[item.name].count = weekend[item.name].count + value;
      }    });
  });

  series.map((item) => {
    Object.entries(weekday[item.name]).map(([key, value]) => {
      if(key !== "count"){
      item.data.push((value/(weekday[item.name].count)).toFixed(2));
      }
    });
  });
  series2.map((item) => {
    Object.entries(weekend[item.name]).map(([key, value]) => {
      if(key !== "count"){
      item.data.push((value/(weekend[item.name].count)).toFixed(2));
      }
    });
  });

  const onValueChange = (e) => {
    setSelectValue(e.target.value);
    setWeekday(setinitialweekday());
    setWeekend(setinitialweekend());
  };

  return (
    <div>
      <Box w={"25vw"} ml={"7%"} mt={"2%"}>
          <Select
            variant="filled"
            onChange={(e) => onValueChange(e)}
            borderColor="gray"
            size='lg'
            borderRadius={"30px"}
            fontWeight={"medium"}
          >
            <option value={"tvwatchingtime"}>TV viewing hours per day by the child</option>
            <option value={"smartphonewatchingtime"}>Smartphone use by the child</option>
            <option value={"laptopwatchingtime"}>FLaptop use by the child</option>
            <option value={"tabletwatchingtime"}>Tablet use by the child</option>
          </Select>
        </Box>
      <VStack p={"4%"}>
        <Box mb={"4%"}>
          <Heading fontSize={"1.4rem"} mb={"8%"}>
            Weekday screen watching time
          </Heading>
          <Chart options={options} series={series} type="bar" width="1100" height="500" />
        </Box>
        <Box>
          <Heading fontSize={"1.4rem"} mb={"8%"}>
            Weekend screen watching time
          </Heading>
          <Chart options={options} series={series2} type="bar" width="1100" height="500" />
        </Box>
      </VStack>
    </div>
  );
}
