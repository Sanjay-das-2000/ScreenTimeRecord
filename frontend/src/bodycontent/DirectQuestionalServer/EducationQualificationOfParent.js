import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAllUsers } from "../../api/api";

let initialValueFather = {
  "Below secondary": 0,
  Secondary: 0,
  "Higher secondary": 0,
  Diploma: 0,
  Graduate: 0,
  Postgraduate: 0,
  Doctorate: 0,
};
let initialValueMother = {
  "Below secondary": 0,
  Secondary: 0,
  "Higher secondary": 0,
  Diploma: 0,
  Graduate: 0,
  Postgraduate: 0,
  Doctorate: 0,
};
export default function EducationQualificationOfParent() {
  const [Value, setValue] = useState(initialValueFather);
  const [Value1, setValue1] = useState(initialValueMother);

  let count = 0;
  let count1 = 0;
  useEffect(() => {
    const getuserFunction = async () => {
      let result = await getAllUsers();
      result = result.data;

      let updateValue = { ...Value };
      let updateValue1 = { ...Value1 };

      result.forEach((user) => {
        updateValue = {
          ...updateValue,
          [user.educationqualificationofparent.father]:
            updateValue[user.educationqualificationofparent.father] + 1,
        };
        updateValue1 = {
            ...updateValue1,
            [user.educationqualificationofparent.mother]:
              updateValue1[user.educationqualificationofparent.mother] + 1,
          };
      });

      setValue(updateValue);
      setValue1(updateValue1);
    };
    getuserFunction();
  }, []);
  const options = {
    chart: {
      id: "Education qualification of parent",
    },
    xaxis: {
      categories: [
        "Below secondary",
        "Secondary",
        "Higher secondary",
        "Diploma",
        "Graduate",
        "Postgraduate",
        "Doctorate",
      ],
    },
  };

  const series = [
    {
      name: "Father",
      data: [],
    },
    {
      name: "Mother",
      data: [],
    },
  ];

  Object.entries(Value).map(([key, value]) => {
    count = count + value;
  });
  Object.entries(Value1).map(([key, value]) => {
    count1 = count1 + value;
  });

  series.map((item) => {
    if (item.name === "Father") {
      Object.entries(Value).map(([key, value]) => {
        item.data.push((value / count).toFixed(2));
      });
    } else {
      Object.entries(Value1).map(([key, value]) => {
        item.data.push((value / count1).toFixed(2));
      });
    }
  });

  return (
    <div>
      <Box>
        <Heading fontSize={"1.4rem"} mb={"4%"}>
          Education qualification of parent distribution
        </Heading>
        <Chart options={options} series={series} type="bar" width="600" />
      </Box>
    </div>
  );
}
