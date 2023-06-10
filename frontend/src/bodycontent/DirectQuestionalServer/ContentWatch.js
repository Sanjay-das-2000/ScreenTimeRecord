import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";

let animatedcartoons = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let nonanimatedcartoons = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let animatedmovies = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let nonanimatedmovies = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let songs = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let rhyms = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let knowledgebased = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let spirituals = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
let serials = {
    "0 hours": 0,
    "<2 hours": 0,
    "2 to 4 hours": 0,
    "4 to 6 hours": 0,
    "6 to 8 hours": 0,
    "more than 8 hours": 0
};
export default function ContentWatch() {
  const [Value, setValue] = useState(animatedcartoons);
  const [Value1, setValue1] = useState(nonanimatedcartoons);
  const [Value2, setValue2] = useState(animatedmovies);
  const [Value3, setValue3] = useState(nonanimatedmovies);
  const [Value4, setValue4] = useState(songs);
  const [Value5, setValue5] = useState(rhyms);
  const [Value6, setValue6] = useState(knowledgebased);
  const [Value7, setValue7] = useState(spirituals);
  const [Value8, setValue8] = useState(serials);

  let count = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;
  let count7 = 0;
  let count8 = 0;
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
      let updateValue7 = { ...Value7 };
      let updateValue8 = { ...Value8 };

      result.forEach((user) => {
        updateValue = {
          ...updateValue,
          [user.contentwatchedbyclild.cartoonswathingtime]:
            updateValue[user.contentwatchedbyclild.cartoonswathingtime] + 1,
        };
        updateValue1 = {
            ...updateValue1,
            [user.contentwatchedbyclild.nonanimetedcartoonswatchingtime]:
              updateValue1[user.purposeofviewscreenonweekends.nonanimetedcartoonswatchingtime] + 1,
          };
          updateValue2 = {
            ...updateValue2,
            [user.contentwatchedbyclild.animetedmoviewatchingtime]:
              updateValue2[user.contentwatchedbyclild.animetedmoviewatchingtime] + 1,
          };
          updateValue3 = {
            ...updateValue3,
            [user.contentwatchedbyclild.nonanimatedmoviewatchingtime]:
              updateValue3[user.contentwatchedbyclild.nonanimatedmoviewatchingtime] + 1,
          };
          updateValue4 = {
            ...updateValue4,
            [user.contentwatchedbyclild.songslisteningtime]:
              updateValue4[user.contentwatchedbyclild.songslisteningtime] + 1,
          };
          updateValue5 = {
            ...updateValue5,
            [user.contentwatchedbyclild.rhymeslisteningtime]:
              updateValue5[user.contentwatchedbyclild.rhymeslisteningtime] + 1,
          };
          updateValue6 = {
            ...updateValue6,
            [user.contentwatchedbyclild.knowledgebasedcontentwatchingtime]:
              updateValue6[user.contentwatchedbyclild.knowledgebasedcontentwatchingtime] + 1,
          };
          updateValue7 = {
            ...updateValue7,
            [user.contentwatchedbyclild.spiritualwatchingtime]:
              updateValue7[user.contentwatchedbyclild.spiritualwatchingtime] + 1,
          };
          updateValue8 = {
            ...updateValue8,
            [user.contentwatchedbyclild.serialwatchingtime]:
              updateValue8[user.contentwatchedbyclild.serialwatchingtime] + 1,
          };
      });

      setValue(updateValue);
      setValue1(updateValue1);
      setValue2(updateValue2);
      setValue3(updateValue3);
      setValue4(updateValue4);
      setValue5(updateValue5);
      setValue6(updateValue6);
      setValue7(updateValue8);
      setValue8(updateValue8);
    };
    getuserFunction();
  }, []);
  const options = {
    chart: {
      id: "Content watch on screen",
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
      name: "Animated Cartoon",
      data: [],
    },
    {
      name: "Non-Animated Cartoon",
      data: [],
    },
    {
        name: "Animated Movie",
        data: [],
      },
      {
        name: "Non-Animated Movie",
        data: [],
      },
      {
        name: "Songs",
        data: [],
      },
      {
        name: "Rhymes",
        data: [],
      },
      {
        name: "Knowledge based",
        data: [],
      },
      {
        name: "Spiritual",
        data: [],
      },
      {
        name: "Serials",
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
  Object.entries(Value7).map(([key, value]) => {
    count7 = count7 + value;
  });
  Object.entries(Value8).map(([key, value]) => {
    count8 = count8 + value;
  });


  series.map((item) => {
    if (item.name === "Animated Cartoon") {
      Object.entries(Value).map(([key, value]) => {
        item.data.push((value / count).toFixed(2));
      });
    } else if(item.name === "Non-Animated Cartoon") {
      Object.entries(Value1).map(([key, value]) => {
        item.data.push((value / count1).toFixed(2));
      });
    }
    else if(item.name === "Animated Movie") {
        Object.entries(Value2).map(([key, value]) => {
          item.data.push((value / count2).toFixed(2));
        });
      }
    else if(item.name === "Non-Animated Movie") {
        Object.entries(Value3).map(([key, value]) => {
          item.data.push((value / count3).toFixed(2));
        });
      }
      else if(item.name === "Songs") {
        Object.entries(Value4).map(([key, value]) => {
          item.data.push((value / count4).toFixed(2));
        });
      }
      else if(item.name === "Rhymes") {
        Object.entries(Value5).map(([key, value]) => {
          item.data.push((value / count5).toFixed(2));
        });
      }
      else if(item.name === "Knowledge based") {
        Object.entries(Value6).map(([key, value]) => {
          item.data.push((value / count6).toFixed(2));
        });
      }
      else if(item.name === "Spiritual") {
        Object.entries(Value7).map(([key, value]) => {
          item.data.push((value / count7).toFixed(2));
        });
      }
      else if(item.name === "Serials") {
        Object.entries(Value8).map(([key, value]) => {
          item.data.push((value / count8).toFixed(2));
        });
      }
  });

  return (
    <div>
      <Box>
        <Heading fontSize={"1.4rem"} mb={"4%"}>
          Content Watch on screen by child distribution
        </Heading>
        <Chart options={options} series={series} type="bar" width="1000" />
      </Box>
    </div>
  );
}
