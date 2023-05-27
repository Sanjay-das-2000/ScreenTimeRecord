import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";
import { Box, Heading, Select } from "@chakra-ui/react";

let setinitialweekend = () => {
  return{
  "<5 year": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "5 to 10 year": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "10 to 15 year": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "15 to 18 year": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
}
};
let setinitialweekday = () => {
  return{
  "<5 year": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "5 to 10 year": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "10 to 15 year": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
  "15 to 18 year": {
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0,
  },
}
};

export default function GraphSmartphoneWatchingTimebyAge() {
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
        if(user.age < 5){
            updatedWeekday["<5 year"] = {
                ...updatedWeekday["<5 year"],
                [user.weekdaytimespanviewingelectronics[`${selectValue}`]]:
                  updatedWeekday["<5 year"][
                    user.weekdaytimespanviewingelectronics[`${selectValue}`]
                  ] + 1,
              };
              updatedWeekend["<5 year"] = {
                ...updatedWeekend["<5 year"],
                [user.weekendtimespanviewingelectronics[`${selectValue}`]]:
                  updatedWeekend["<5 year"][
                    user.weekendtimespanviewingelectronics[`${selectValue}`]
                  ] + 1,
              };
        }
        else if(user.age>=5 && user.age<10){
            updatedWeekday["5 to 10 year"] = {
                ...updatedWeekday["5 to 10 year"],
                [user.weekdaytimespanviewingelectronics[`${selectValue}`]]:
                  updatedWeekday["5 to 10 year"][
                    user.weekdaytimespanviewingelectronics[`${selectValue}`]
                  ] + 1,
              };
              updatedWeekend["5 to 10 year"] = {
                ...updatedWeekend["5 to 10 year"],
                [user.weekendtimespanviewingelectronics[`${selectValue}`]]:
                  updatedWeekend["5 to 10 year"][
                    user.weekendtimespanviewingelectronics[`${selectValue}`]
                  ] + 1,
              };
        }
        else if(user.age>=10 && user.age<15){
            updatedWeekday["10 to 15 year"] = {
                ...updatedWeekday["10 to 15 year"],
                [user.weekdaytimespanviewingelectronics[`${selectValue}`]]:
                  updatedWeekday["10 to 15 year"][
                    user.weekdaytimespanviewingelectronics[`${selectValue}`]
                  ] + 1,
              };
              updatedWeekend["10 to 15 year"] = {
                ...updatedWeekend["10 to 15 year"],
                [user.weekendtimespanviewingelectronics[`${selectValue}`]]:
                  updatedWeekend["10 to 15 year"][
                    user.weekendtimespanviewingelectronics[`${selectValue}`]
                  ] + 1,
              };
        }
        else if(user.age>=15 && user.age<18){
            updatedWeekday["15 to 18 year"] = {
                ...updatedWeekday["15 to 18 year"],
                [user.weekdaytimespanviewingelectronics[`${selectValue}`]]:
                  updatedWeekday["15 to 18 year"][
                    user.weekdaytimespanviewingelectronics[`${selectValue}`]
                  ] + 1,
              };
              updatedWeekend["15 to 18 year"] = {
                ...updatedWeekend["15 to 18 year"],
                [user.weekendtimespanviewingelectronics[`${selectValue}`]]:
                  updatedWeekend["15 to 18 year"][
                    user.weekendtimespanviewingelectronics[`${selectValue}`]
                  ] + 1,
              };
        }
        
      });

      setWeekday(updatedWeekday);
      setWeekend(updatedWeekend);
    };
    getuserFunction();
  }, [selectValue]);

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
      name: "<5 year",
      data: [],
    },
    {
      name: "5 to 10 year",
      data: [],
    },
    {
      name: "10 to 15 year",
      data: [],
    },
    {
      name: "15 to 18 year",
      data: [],
    },
  ];
  const series2 = [
    {
        name: "<5 year",
        data: [],
      },
      {
        name: "5 to 10 year",
        data: [],
      },
      {
        name: "10 to 15 year",
        data: [],
      },
      {
        name: "15 to 18 year",
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
      <Box display={"flex"} justifyContent={"space-around"} p={"4%"}>
        <Box>
          <Heading fontSize={"1.4rem"} mb={"8%"}>
            Weekday Smartphone Watching Time
          </Heading>
          <Chart options={options} series={series} type="bar" width="600" />
        </Box>
        <Box>
          <Heading fontSize={"1.4rem"} mb={"8%"}>
          Weekday Smartphone Watching Time
          </Heading>
          <Chart options={options} series={series2} type="bar" width="600" />
        </Box>
      </Box>
    </div>
  );
}
