import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";
import { Box, Heading, Select } from "@chakra-ui/react";

const setinitialweekend = () => {
  return{
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
}
};
const setinitialweekday = () => {
  return{
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
}
};

export default function GraphContentWatchonScreenBasedonSocioeconomicClass() {
  const [selectValue, setSelectValue] = useState("cartoonswathingtime");

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
          [user.purposeofviewscreenonweekdays[`${selectValue}`]]:
            updatedWeekday[user.class][
              user.purposeofviewscreenonweekdays[`${selectValue}`]
            ] + 1,
        };
        updatedWeekend[user.class] = {
          ...updatedWeekend[user.class],
          [user.purposeofviewscreenonweekends[`${selectValue}`]]:
            updatedWeekend[user.class][
              user.purposeofviewscreenonweekends[`${selectValue}`]
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
  console.log(series);
  console.log(series2);

  const onValueChange = (e) => {
    setSelectValue(e.target.value);
    setWeekday(setinitialweekday());
    setWeekend(setinitialweekend());
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
      <Box display={"flex"} justifyContent={"space-around"} p={"4%"}>
        <Box>
          <Heading fontSize={"1.4rem"} mb={"8%"}>
            Weekday content watching time on screen
          </Heading>
          <Chart options={options} series={series} type="bar" width="600" />
        </Box>
        <Box>
          <Heading fontSize={"1.4rem"} mb={"8%"}>
            Weekend content watching time on screen
          </Heading>
          <Chart options={options} series={series2} type="bar" width="600" />
        </Box>
      </Box>
    </div>
  );
}

