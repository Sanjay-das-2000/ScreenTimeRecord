const FormData = [
  {
    qno:1,
    question: "Name of child",
    name: "name",
    type: "text",
  },
  {
    qno:2,
    question: "Age of child",
    name: "age",
    type: "text",
  },
  {
    qno:3,
    question: "Date of Birth",
    name: "DOB",
    type: "date",
  },
  {
    qno:4,
    question: "Place of Birth",
    name: "POB",
    type: "text",
  },
  {
    qno:5,
    question: "Time of Birth",
    name: "TOB",
    type: "time",
  },
  
  {
    qno:6,
      question: "Gestation",
      name: "gestation",
      type: "singleselect",
      options: [
        "Preterm (before 37 weeks)",
        "Term (37-41 weeks)",
        "Post-dated (more than 41 weeks)",
      ],
    },
    {
      qno:7,
      question: "Mode of Delivery",
      name: "deliverymode",
      type: "singleselect",
      options: ["Normal", "C-Section"],
    },
    {
    qno:8,
      question: "Birth weight",
      name: "birthweight",
      type: "singleselect",
      options: [
        "Low birthweight (less than 2.5 kg)",
        "Normal brithweight (2.5-4.5 kg)",
        "Big baby (4.5 kg or more)",
      ],
    },
    {
    qno:9,
      question: "Gender",
      name: "gender",
      type: "singleselect",
      options: [
        "Male",
        "Female",
      ],
    },
    {
    qno:10,
      question: "Family Type",
      name: "familytype",
      type: "singleselect",
      options: [
        "Joint",
        "Neuclear",
        "Single Parent",
      ],
    },
    {
    qno:11,
    question: "Religion",
      name: "religion",
      type: "singleselect",
      options: [
        "Hinduism",
        "Buddhism",
        "Jainism",
        "Sikhism",
        "Islam",
        "Khristianity",
        "Other"
      ],
    },
    {
      question: "Educational Qualification of Parent",
      name: "educationqualificationofparent",
      type: "singleselectmultirow",
      subquestions: [
        {
          question: "Father",
          name: "father"
        },
        {
          question: "Mother",
          name: "mother"
        },
      ],
      options: [
        "Below secondary",
        "Secondary",
        "Higher secondary",
        "Diploma",
        "Graduate",
        "Postgraduate",
        "Doctorate"
      ],
    },
    {
      question: "Total children in house",
      name: "totalchildren",
      type: "singleselect",
      options: [
        "Single child",
        "2 children",
        "3 children ",
        "more than equal to 3 children",
      ],
    },
    {
      question: "Number of helping staff for the child. Please specify gender also. (if any)",
      name: "noofhelpingstaff",
      type: "number",
    },
    {
      question: "Age range of helping staff for the child. (if any)",
      name: "ageofhelpingstaff",
      type: "text",
    },
    {
      question: "Number of Friends of child (if any)",
      name: "nooffriends",
      type: "text",
    },
    {
      question: "Age range of the friends of child (if any)",
      name: "ageoffriends",
      type: "text",
    },
    {
      question: "At what age did the child start media viewing (Please specify age in year)?",
      name: "ageofstartingviewmedia",
      type: "text",
    },
    {
      question: "Socioeconomic Class",
      name: "class",
      type: "singleselect",
      options: [
        "Upper",
        "Upper Middle",
        "Upper Lower",
        "Lower Middle",
        "Lower",
      ],
    },
    {
      question: "During Week Days, time spent by child in viewing electronic devices (time is per day):",
      name: "weekdaytimespanviewingelectronics",
      type: "singleselectmultirow",
      subquestions: [
        {
          question: "TV viewing hours per day by the child",
          name: "tvwatchingtime",
        },
        {
          question: "Smartphone use by the child",
          name: "smartphonewatchingtime",
        },
        {
          question: "Laptop use by the child",
          name: "laptopwatchingtime",
        },
        {
          question: "Tablet use by the child",
          name: "tabletwatchingtime",
        },
      ],
      options: [
        "No electronic device at home",
        "0 hours",
        "<2 hours",
        "2 to 4 hours",
        "4 to 6 hours",
        "6 to 8 hours",
        "more than 8 hours"
      ]
    },
    {
      question: "During Week Ends, time spent by child in viewing electronic devices (time is per day):",
      name: "weekendtimespanviewingelectronics",
      type: "singleselectmultirow",
      subquestions: [
        {
          question: "TV viewing hours per day by the child",
          name: "tvwatchingtime",
        },
        {
          question: "Smartphone use by the child",
          name: "smartphonewatchingtime",
        },
        {
          question: "Laptop use by the child",
          name: "laptopwatchingtime",
        },
        {
          question: "Tablet use by the child",
          name: "tabletwatchingtime",
        },
      ],
      options: [
        "No electronic device at home",
        "0 hours",
        "<2 hours",
        "2 to 4 hours",
        "4 to 6 hours",
        "6 to 8 hours",
        "more than 8 hours"
      ]
    },
    {
      question: "Purpose of Screen hours spend by the child during Week Days (time is per day):",
      name: "purposeofviewscreenonweekdays",
      type: "singleselectmultirow",
      subquestions: [
        {
          question: "For education",
          name: "foreducation",
        },
        {
          question: "For entertainment",
          name: "forentertainment",
        },
        {
          question: "For playing games",
          name: "forplayinggames",
        },
        {
          question: "For social connect by the child (Video calls) by the child",
          name: "videocalls",
        },
        {
          question: "During meals by the child",
          name: "duringeating",
        },
        {
          question: "Just before bed time by the child",
          name: "beforebed",
        },
        {
          question: "For engaging the child (when you are busy)",
          name: "toengage",
        },
      ],
      options: [
        "0 hours",
        "<2 hours",
        "2 to 4 hours",
        "4 to 6 hours",
        "6 to 8 hours",
        "more than 8 hours"
      ]
    },
    {
      question: "Purpose of Screen hours spend by the child during Week Ends (time is per day):",
      name: "purposeofviewscreenonweekends",
      type: "singleselectmultirow",
      subquestions: [
        {
          question: "For education",
          name: "foreducation",
        },
        {
          question: "For entertainment",
          name: "forentertainment",
        },
        {
          question: "For playing games",
          name: "forplayinggames",
        },
        {
          question: "For social connect by the child (Video calls) by the child",
          name: "invideocalls",
        },
        {
          question: "During meals by the child",
          name: "duringeating",
        },
        {
          question: "Just before bed time by the child",
          name: "beforebed",
        },
        {
          question: "For engaging the child (when you are busy)",
          name: "toengage",
        },
      ],
      options: [
        "0 hours",
        "<2 hours",
        "2 to 4 hours",
        "4 to 6 hours",
        "6 to 8 hours",
        "more than 8 hours"
      ]
    },
   
    {
      question: "What does the child watch among following programs per day during his or her screen time? (Specify hours of watching):",
      name: "contentwatchedbyclild",
      type: "singleselectmultirow",
      subquestions: [
        {
          question: "Animated cartoons",
          name: "cartoonswathingtime",
        },
        {
          question: "Non-animated cartoons",
          name: "nonanimetedcartoonswatchingtime",
        },
        {
          question: "Movie (Animated)",
          name: "animetedmoviewatchingtime",
        },
        {
          question: "Movie (Non-animated)",
          name: "nonanimatedmoviewatchingtime",
        },
        {
          question: "Songs",
          name: "songslisteningtime",
        },
        {
          question: "Rhymes",
          name: "rhymeslisteningtime",
        },
        {
          question: "Knowledge based (News / web series/any more)",
          name: "knowledgebasedcontentwatchingtime",
        },
        {
          question: "Spiritual (bhajan)",
          name: "spiritualwatchingtime",
        },
        {
          question: "Serials",
          name: "serialwatchingtime",
        },
      ],
      options: [
        "0 hours",
        "<2 hours",
        "2 to 4 hours",
        "4 to 6 hours",
        "6 to 8 hours",
        "more than 8 hours"
      ]
    },
    {
      question: "Do you think children will eat better only if you feed them while watching the screen?",
      name: "willchildreneatbetterwhilewatchinscreen",
      type: "singleselect",
      options: [
        "Yes",
        "No",
        "Not sure",
      ],
    },
    {
      question: "Average Screen time of the Primary caretaker of the child (time is per day)",
      name: "screentimeofprimarycaretaker",
      type: "singleselect",
      options: [
        "No electronic device at home",
        "0 hours",
        "<2 hours",
        "2 to 4 hours",
        "4 to 6 hours",
        "6 to 8 hours",
        "more than 8 hours"
      ]
    },
    {
      question: "Outdoor physical activity / play of the child per day",
      name: "outdoorphysicalactivity",
      type: "singleselect",
      options: [
        "No physical activity",
        "<2 hours",
        "2 to 4 hours",
        "4 to 6 hours",
        "6 to 8 hours",
        "more than 8 hours"
      ],
    },
    {
      question: "Do you think it is easy to manage your child when they are given a screen to watch for? For example, screen time help your child to be engaged during your household chores/ helps manage your child better while shopping",
      name: "isiteasytomanagechildwithscreen",
      type: "singleselect",
      options: [
        "Yes",
        "No",
        "Not sure",
      ],
    },
    {
      question: "Do you think your child's communication skills will enhance watching screen?",
      name: "communicationskillincreased",
      type: "singleselect",
      options: [
        "Yes",
        "No",
        "Not sure",
      ],
    },
    {
      question: "Do you think increased screen time will slow down child's speech and language development?",
      name: "slowdownchildspeechandlanguagedevelopment",
      type: "singleselect",
      options: [
        "Yes",
        "No",
        "Not sure",
      ],
    },
    {
      question: "Do you think screentime will enhance your child's social skills such as sharing, waiting for their turn etc ?",
      name: "increasesocialskills",
      type: "singleselect",
      options: [
        "Yes",
        "No",
        "Not sure",
      ],
    },
    {
      question: "Do you think that increased screen time will lead to attention problems in your child?",
      name: "attentionprobleminchild",
      type: "singleselect",
      options: [
        "Yes",
        "No",
        "Not sure",
      ],
    },
    {
      question: "Do you think you have to restrict screen time for your children? ",
      name: "restrictscreentime",
      type: "singleselect",
      options: [
        "Yes",
        "No",
        "Not sure",
      ],
    },
    {
      question: "Does your child has ownership of electronic media / gadgets for their personal use?",
      name: "ownershipofelectronics",
      type: "singleselect",
      options: [
        "Yes",
        "No"
      ],
    },
    
    // {
    //   question: "Primary care giver of the child",
    //   type: "multiple",
    //   options: [
    //     "Mother",
    //     "Father",
    //     "Parents",
    //     "Grandparent",
    //     "Sibling",
    //     "Helping staff",
    //   ],
    // },
  ];

export default FormData;