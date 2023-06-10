import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Select,
} from "@chakra-ui/react";

import GraphScreenWatchingTime from "./CombinedQuestionalServey/GraphScreenWatchingTime";
import GraphScreenWatchingTimebyAge from "./CombinedQuestionalServey/GraphScreenWatchingTimebyAge";
import GraphScreenWatchingTimebasedonGender from "./CombinedQuestionalServey/GraphScreenWatchingTimebasedonGender";
import GraphPurposeofViewScreenBasedonSocioeconomicClass from "./CombinedQuestionalServey/GraphPurposeofViewScreenBasedonSocioeconomicClass";
import GraphContentWatchonScreenBasedonSocioeconomicClass from "./CombinedQuestionalServey/GraphContentWatchonScreenBasedonSocioeconomicClass";
import Gestation from "./DirectQuestionalServer/Gestation";
import Delivery from "./DirectQuestionalServer/Delivery";
import Birthweight from "./DirectQuestionalServer/BirthWeight";
import Gender from "./DirectQuestionalServer/Gender";
import Familytype from "./DirectQuestionalServer/FamililyType";
import Religion from "./DirectQuestionalServer/Religion";
import TotalChildreninHouse from "./DirectQuestionalServer/TotalChildreninHouse";
import SubeconomicClass from "./DirectQuestionalServer/SubeconomicClass";
import ChildrenEatWatchingScreen from "./DirectQuestionalServer/ChildrenEatWatchingScreen";
import ScreentimeOfPrimaryCareTaker from "./DirectQuestionalServer/ScreentimeOfPrimaryCareTaker";
import EducationQualificationOfParent from "./DirectQuestionalServer/EducationQualificationOfParent";
import WeekDayTimeSpentOnScreen from "./DirectQuestionalServer/WeekDayTimeSpentOnScreen";
import WeekEndTimeSpentOnScreen from "./DirectQuestionalServer/WeekEndTimeSpentOnScreen";
import PurposeOfViewingScreenOnWeekdays from "./DirectQuestionalServer/PurposeOfViewingScreenOnWeekdays";
import PurposeOfViewingScreenOnWeekends from "./DirectQuestionalServer/PurposeOfViewingScreenOnWeekends";
import ContentWatch from "./DirectQuestionalServer/ContentWatch";
import OutdoorActivity from "./DirectQuestionalServer/OutdoorActivity";
import EasyManagementOfChild from "./DirectQuestionalServer/EasyManagementOfChild";
import ComunicationSkillEnhance from "./DirectQuestionalServer/ComunicationSkillEnhance";
import EffectOnChildsDevelopment from "./DirectQuestionalServer/EffectOnChildsDevelopment";
import EnhanceSocialSkill from "./DirectQuestionalServer/EnhanceSocialSkill";
import AttentionProblemInChild from "./DirectQuestionalServer/AttentionProblemInChild";
import RestrictChild from "./DirectQuestionalServer/RestrictChild";
import OwnershipOfElectronics from "./DirectQuestionalServer/OwnershipOfElectronics";

export default function Graphs() {
    const [selectValue, setSelectValue] = useState("SmartphoneWatchingTime");
    const [selectValue2, setSelectValue2] = useState("Gestation");
  
    const onValueChange = (e) => {
      setSelectValue(e.target.value);
    };
    const onValueChange2 = (e) => {
      setSelectValue2(e.target.value);
    };
  return (
    <div>
        <Heading fontSize={"3.2rem"} textAlign={"center"} m={"3% auto"} fontFamily={"Josefin Sans"}>
          Survey outcome based on collected data{" "}
        </Heading>
        <Heading  ml={"7.5%"} mb={"2%"}>Direct questions</Heading>
        <Box w={"40vw"} ml={"7%"}>
          <Select
            variant="filled"
            onChange={(e) => onValueChange2(e)}
            borderColor="gray"
            size="lg"
            borderRadius={"30px"}
            fontWeight={"medium"}
          >
            <option value={"Gestation"}>Gestation</option>
            <option value={"deliverymode"}>Mode of Delivery</option>
            <option value={"birthweight"}>Birth Weight</option>
            <option value={"gender"}>Gender</option>
            <option value={"familytype"}>Family Type</option>
            <option value={"religion"}>Religion</option>
            <option value={"totalchildren"}>Total children in house</option>
            <option value={"class"}>Subeconomic Class</option>
            <option value={"willchildreneatbetterwhilewatchinscreen"}>Does child eats better while watching screen</option>
            <option value={"screentimeofprimarycaretaker"}>Average screen time of primary caretaker</option>
            <option value={"educationqualificationofparent"}>Education qualification of parent </option>
            <option value={"weekdaytimespanviewingelectronics"}>Weekday time spent on screen </option>
            <option value={"weekendtimespanviewingelectronics"}>Weekend time spent on screen </option>
            <option value={"purposeofviewscreenonweekdays"}>Purpose of watching screen on weekdays </option>
            <option value={"purposeofviewscreenonweekends"}>Purpose of watching screen on weekends </option>
            <option value={"contentwatchedbyclild"}>Content Watch on screen </option>
            <option value={"outdoorphysicalactivity"}>Outdoor physical activity </option>
            <option value={"isiteasytomanagechildwithscreen"}>Is it easy to manage child who is given access to screen </option>
            <option value={"communicationskillincreased"}>Does child's communication skills will enhance watching screen </option>
            <option value={"slowdownchildspeechandlanguagedevelopment"}>Does increased screen time slow down child's speech and language development</option>
            <option value={"increasesocialskills"}>Does screentime will enhance your child's social skills</option>
            <option value={"attentionprobleminchild"}>Does increased screen time will lead to attention problems in your child</option>
            <option value={"restrictscreentime"}>Need of restrictriction on screen time for your children</option>
            <option value={"ownershipofelectronics"}>Does child has ownership of electronic</option>
          </Select>
        </Box>
        <Box mt={"3%"} mb={"4%"}>
          <Flex justify={"center"}>
          {selectValue2 === "Gestation" && <Gestation />}
          {selectValue2 === "deliverymode" && <Delivery />}
          {selectValue2 === "birthweight" && <Birthweight />}
          {selectValue2 === "gender" && <Gender />}
          {selectValue2 === "familytype" && <Familytype />}
          {selectValue2 === "religion" && <Religion />}
          {selectValue2 === "totalchildren" && <TotalChildreninHouse />}
          {selectValue2 === "class" && <SubeconomicClass />}
          {selectValue2 === "willchildreneatbetterwhilewatchinscreen" && <ChildrenEatWatchingScreen />}
          {selectValue2 === "screentimeofprimarycaretaker" && <ScreentimeOfPrimaryCareTaker />}
          {selectValue2 === "educationqualificationofparent" && <EducationQualificationOfParent />}
          {selectValue2 === "weekdaytimespanviewingelectronics" && <WeekDayTimeSpentOnScreen />}
          {selectValue2 === "weekendtimespanviewingelectronics" && <WeekEndTimeSpentOnScreen />}
          {selectValue2 === "purposeofviewscreenonweekdays" && <PurposeOfViewingScreenOnWeekdays />}
          {selectValue2 === "purposeofviewscreenonweekends" && <PurposeOfViewingScreenOnWeekends />}
          {selectValue2 === "contentwatchedbyclild" && <ContentWatch />}
          {selectValue2 === "outdoorphysicalactivity" && <OutdoorActivity />}
          {selectValue2 === "isiteasytomanagechildwithscreen" && <EasyManagementOfChild />}
          {selectValue2 === "communicationskillincreased" && <ComunicationSkillEnhance />}
          {selectValue2 === "slowdownchildspeechandlanguagedevelopment" && <EffectOnChildsDevelopment />}
          {selectValue2 === "increasesocialskills" && <EnhanceSocialSkill />}
          {selectValue2 === "attentionprobleminchild" && <AttentionProblemInChild />}
          {selectValue2 === "restrictscreentime" && <RestrictChild />}
          {selectValue2 === "ownershipofelectronics" && <OwnershipOfElectronics />}
        </Flex>
        </Box>
        <Heading ml={"7.5%"} mb={"2%"}>Combined questions</Heading>
        <Box w={"40vw"} ml={"7%"}>
          <Select
            variant="filled"
            onChange={(e) => onValueChange(e)}
            borderColor="gray"
            size="lg"
            borderRadius={"30px"}
            fontWeight={"medium"}
          >
            <option value={"SmartphoneWatchingTime"}>
              Screen watching by child based on socioeconomic class
            </option>
            <option value={"SmartphoneWatchingTimebyAge"}>
              Screen watching by child based on age of child
            </option>
            <option value={"SmartphoneWatchingTimebasedonGender"}>
              Screen watching by child based on gender
            </option>
            <option value={"PurposeofViewScreenBasedonSocioeconomicClass"}>
              Purpose of viewing screen based on socioeconomic class
            </option>
            <option value={"ContentWatchonScreenBasedonSocioeconomicClass"}>
              Content watch on screen based on socioeconomic class
            </option>
          </Select>
        </Box>
        <Box>
          {selectValue === "SmartphoneWatchingTime" && (
            <GraphScreenWatchingTime />
          )}
          {selectValue === "SmartphoneWatchingTimebyAge" && (
            <GraphScreenWatchingTimebyAge />
          )}
          {selectValue === "SmartphoneWatchingTimebasedonGender" && (
            <GraphScreenWatchingTimebasedonGender />
          )}
          {selectValue === "PurposeofViewScreenBasedonSocioeconomicClass" && (
            <GraphPurposeofViewScreenBasedonSocioeconomicClass />
          )}
          {selectValue === "ContentWatchonScreenBasedonSocioeconomicClass" && (
            <GraphContentWatchonScreenBasedonSocioeconomicClass />
          )}
        </Box>
    </div>
  )
}
