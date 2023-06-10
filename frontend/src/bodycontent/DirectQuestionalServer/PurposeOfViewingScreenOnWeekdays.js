import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";

let education = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let entertainment = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let playinggames = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let socialconnect = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let duringmeals = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let beforebed = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let engaging = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
export default function PurposeOfViewingScreenOnWeekdays() {
  const [Value, setValue] = useState(education);
  const [Value1, setValue1] = useState(entertainment);
  const [Value2, setValue2] = useState(playinggames);
  const [Value3, setValue3] = useState(socialconnect);
  const [Value4, setValue4] = useState(duringmeals);
  const [Value5, setValue5] = useState(beforebed);
  const [Value6, setValue6] = useState(engaging);

  let count = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;
  useEffect(() => {
    const getuserFunction = async () => {
      let result = await getAllUsers();
      result = result.data;

      let updateValue = { ...Value };
      let updateValue1 = { ...Value1 };
      let updateValue2 = { ...Value2 };
      let updateValue3 = { ...Value3 };
      let updateValue4 = { ...Value4 };
      let updateValue5 = { ...Value5 };
      let updateValue6 = { ...Value6 };

      result.forEach((user) => {
        updateValue = {
          ...updateValue,
          [user.purposeofviewscreenonweekdays.foreducation]:
            updateValue[user.purposeofviewscreenonweekdays.foreducation] + 1,
        };
        updateValue1 = {
            ...updateValue1,
            [user.purposeofviewscreenonweekdays.forentertainment]:
              updateValue1[user.purposeofviewscreenonweekdays.forentertainment] + 1,
          };
          updateValue2 = {
            ...updateValue2,
            [user.purposeofviewscreenonweekdays.forplayinggames]:
              updateValue2[user.purposeofviewscreenonweekdays.forplayinggames] + 1,
          };
          updateValue3 = {
            ...updateValue3,
            [user.purposeofviewscreenonweekdays.invideocalls]:
              updateValue3[user.purposeofviewscreenonweekdays.invideocalls] + 1,
          };
          updateValue4 = {
            ...updateValue4,
            [user.purposeofviewscreenonweekdays.duringeating]:
              updateValue4[user.purposeofviewscreenonweekdays.duringeating] + 1,
          };
          updateValue5 = {
            ...updateValue5,
            [user.purposeofviewscreenonweekdays.beforebed]:
              updateValue5[user.purposeofviewscreenonweekdays.beforebed] + 1,
          };
          updateValue6 = {
            ...updateValue6,
            [user.purposeofviewscreenonweekdays.toengage]:
              updateValue6[user.purposeofviewscreenonweekdays.toengage] + 1,
          };
      });

      setValue(updateValue);
      setValue1(updateValue1);
      setValue2(updateValue2);
      setValue3(updateValue3);
      setValue4(updateValue4);
      setValue5(updateValue5);
      setValue6(updateValue6);
    };
    getuserFunction();
  }, []);
  const options = {
    chart: {
      id: "Purpose of viewing screen",
    },
    xaxis: {
      categories: [
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
      name: "Education",
      data: [],
    },
    {
      name: "Enatertainment",
      data: [],
    },
    {
        name: "Playing Games",
        data: [],
      },
      {
        name: "Social Connect",
        data: [],
      },
      {
        name: "During Eating",
        data: [],
      },
      {
        name: "Before Bed",
        data: [],
      },
      {
        name: "To Engage Child",
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
  Object.entries(Value4).map(([key, value]) => {
    count4 = count4 + value;
  });
  Object.entries(Value5).map(([key, value]) => {
    count5 = count5 + value;
  });
  Object.entries(Value6).map(([key, value]) => {
    count6 = count6 + value;
  });


  series.map((item) => {
    if (item.name === "Education") {
      Object.entries(Value).map(([key, value]) => {
        item.data.push((value / count).toFixed(2));
      });
    } else if(item.name === "Enatertainment") {
      Object.entries(Value1).map(([key, value]) => {
        item.data.push((value / count1).toFixed(2));
      });
    }
    else if(item.name === "Playing Games") {
        Object.entries(Value2).map(([key, value]) => {
          item.data.push((value / count2).toFixed(2));
        });
      }
    else if(item.name === "Social Connect") {
        Object.entries(Value3).map(([key, value]) => {
          item.data.push((value / count3).toFixed(2));
        });
      }
      else if(item.name === "During Eating") {
        Object.entries(Value4).map(([key, value]) => {
          item.data.push((value / count4).toFixed(2));
        });
      }
      else if(item.name === "Before Bed") {
        Object.entries(Value5).map(([key, value]) => {
          item.data.push((value / count5).toFixed(2));
        });
      }
      else if(item.name === "To Engage Child") {
        Object.entries(Value6).map(([key, value]) => {
          item.data.push((value / count6).toFixed(2));
        });
      }
  });

  return (
    <div>
      <Box>
        <Heading fontSize={"1.4rem"} mb={"4%"}>
          Purpose of viewing screen on weekdays distribution
        </Heading>
        <Chart options={options} series={series} type="bar" width="1000" />
      </Box>
    </div>
  );
}
