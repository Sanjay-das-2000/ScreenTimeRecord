import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";
import { Box, Heading, Select, VStack } from "@chakra-ui/react";

const setinitialweekday = () => {
  return{
  Upper: {
    count: 0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Upper Middle": {
    count: 0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Upper Lower": {
    count: 0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "Lower Middle": {
    count: 0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  Lower: {
    count: 0,
    "0 hours":0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
}
};

export default function GraphContentWatchonScreenBasedonSocioeconomicClass() {
  const [selectValue, setSelectValue] = useState("cartoonswathingtime");

  const [weekday, setWeekday] = useState(setinitialweekday());

  useEffect(() => {
    const getuserFunction = async () => {
      let result = await getAllUsers();
      result = result.data;

      let updatedWeekday = { ...weekday };

      result.forEach((user) => {
        updatedWeekday[user.class] = {
          ...updatedWeekday[user.class],
          [user.contentwatchedbyclild[`${selectValue}`]]:
            updatedWeekday[user.class][
              user.contentwatchedbyclild[`${selectValue}`]
            ] + 1,
        };
      });

      setWeekday(updatedWeekday);
    };
    getuserFunction();
  }, [selectValue]);

  const options = {
    chart: {
      id: "Screen Watching time",
    },
    xaxis: {
      categories: [
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


  series.map((item) => {
    Object.entries(weekday[item.name]).map(([key, value]) => {
      if(key !== "count"){
        weekday[item.name].count = weekday[item.name].count + value;
      }
    });
  });

  series.map((item) => {
    Object.entries(weekday[item.name]).map(([key, value]) => {
      if(key !== "count"){
      item.data.push((value/weekday[item.name].count).toFixed(2));
      }
    });
  });

  const onValueChange = (e) => {
    setSelectValue(e.target.value);
    setWeekday(setinitialweekday());
  };

  return (
    <div>
        <Box w={"20vw"} ml={"7%"} mt={"2%"}>
          <Select
            variant="filled"
            onChange={(e) => onValueChange(e)}
            borderColor="gray"
            size='lg'
            borderRadius={"30px"}
            fontWeight={"medium"}
          >
            <option value={"cartoonswathingtime"}>Animated cartoons</option>
            <option value={"nonanimetedcartoonswatchingtime"}>Non-animated cartoons</option>
            <option value={"animetedmoviewatchingtime"}>Movie (Animated)</option>
            <option value={"nonanimatedmoviewatchingtime"}>Movie (Non-animated)</option>
            <option value={"songslisteningtime"}>Songs</option>
            <option value={"rhymeslisteningtime"}>Rhymes</option>
            <option value={"knowledgebasedcontentwatchingtime"}>Knowledge based (News / web series/any more)</option>
            <option value={"spiritualwatchingtime"}>Spiritual (bhajan)</option>
            <option value={"serialwatchingtime"}>Serials</option>
          </Select>
        </Box>
      <VStack p={"4%"}>
        <Box mb={"4%"}>
          <Heading fontSize={"1.4rem"} mb={"4%"}>
            Content watching time on screen
          </Heading>
          <Chart options={options} series={series} type="bar" width="1100" height="500" />
        </Box>
      </VStack>
    </div>
  );
}

