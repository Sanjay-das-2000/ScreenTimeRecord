import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";

let initialValueTV = {
    "No electronic device at home": 0,
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let initialValueSmartphone = {
    "No electronic device at home": 0,
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let initialValueLaptop = {
    "No electronic device at home": 0,
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let initialValueTablet = {
    "No electronic device at home": 0,
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
export default function WeekDayTimeSpentOnScreen() {
  const [Value, setValue] = useState(initialValueTV);
  const [Value1, setValue1] = useState(initialValueSmartphone);
  const [Value2, setValue2] = useState(initialValueLaptop);
  const [Value3, setValue3] = useState(initialValueTablet);

  let count = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  useEffect(() => {
    const getuserFunction = async () => {
      let result = await getAllUsers();
      result = result.data;

      let updateValue = { ...Value };
      let updateValue1 = { ...Value1 };
      let updateValue2 = { ...Value2 };
      let updateValue3 = { ...Value3 };

      result.forEach((user) => {
        updateValue = {
          ...updateValue,
          [user.weekdaytimespanviewingelectronics.tvwatchingtime]:
            updateValue[user.weekdaytimespanviewingelectronics.tvwatchingtime] + 1,
        };
        updateValue1 = {
            ...updateValue1,
            [user.weekdaytimespanviewingelectronics.smartphonewatchingtime]:
              updateValue1[user.weekdaytimespanviewingelectronics.smartphonewatchingtime] + 1,
          };
          updateValue2 = {
            ...updateValue2,
            [user.weekdaytimespanviewingelectronics.laptopwatchingtime]:
              updateValue2[user.weekdaytimespanviewingelectronics.laptopwatchingtime] + 1,
          };
          updateValue3 = {
            ...updateValue3,
            [user.weekdaytimespanviewingelectronics.tabletwatchingtime]:
              updateValue3[user.weekdaytimespanviewingelectronics.tabletwatchingtime] + 1,
          };
      });

      setValue(updateValue);
      setValue1(updateValue1);
      setValue2(updateValue2);
      setValue3(updateValue3);
    };
    getuserFunction();
  }, []);
  const options = {
    chart: {
      id: "Education qualification of parent",
    },
    xaxis: {
      categories: [
        "No electronic device at home",
        "0 hours",
        "<2 hours",
        "2 to 4 hours",
        "4 to 6 hours",
        "6 to 8 hours",
        "more than 8 hours"
      ],
    },
  };

  const series = [
    {
      name: "TV",
      data: [],
    },
    {
      name: "Smartphone",
      data: [],
    },
    {
        name: "Laptop",
        data: [],
      },
      {
        name: "Tablet",
        data: [],
      },
  ];

  Object.entries(Value).map(([key, value]) => {
    count = count + value;
  });
  Object.entries(Value1).map(([key, value]) => {
    count1 = count1 + value;
  });
  Object.entries(Value2).map(([key, value]) => {
    count2 = count2 + value;
  });
  Object.entries(Value3).map(([key, value]) => {
    count3 = count3 + value;
  });

  series.map((item) => {
    if (item.name === "TV") {
      Object.entries(Value).map(([key, value]) => {
        item.data.push((value / count).toFixed(2));
      });
    } else if(item.name === "Smartphone") {
      Object.entries(Value1).map(([key, value]) => {
        item.data.push((value / count1).toFixed(2));
      });
    }
    else if(item.name === "Laptop") {
        Object.entries(Value2).map(([key, value]) => {
          item.data.push((value / count2).toFixed(2));
        });
      }
    else if(item.name === "Tablet") {
        Object.entries(Value3).map(([key, value]) => {
          item.data.push((value / count3).toFixed(2));
        });
      }
  });

  return (
    <div>
      <Box>
        <Heading fontSize={"1.4rem"} mb={"4%"}>
          Weekday screen watching time distribution
        </Heading>
        <Chart options={options} series={series} type="bar" width="1000" />
      </Box>
    </div>
  );
}
