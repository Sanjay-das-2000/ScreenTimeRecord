const FormData = [
  {
    question: "Name of child",
    name: "name",
    type: "text",
  },
  {
    question: "Age of child",
    name: "age",
    type: "number",
  },
  {
    question: "Date of Birth",
    name: "DOB",
    type: "date",
  },
  {
    question: "Place of Birth",
    name: "POB",
    type: "text",
  },
  {
    question: "Time of Birth",
    name: "name",
    type: "time",
  },
  
  {
      question: "Gestation",
      name: "Gestation",
      type: "singleselect",
      options: [
        "Preterm (before 37 weeks)",
        "Term (37-41 weeks)",
        "Post-dated (more than 41 weeks)",
      ],
    },
    {
      question: "Mode of Delivery",
      name: "deliverymode",
      type: "singleselect",
      options: ["Normal", "C-Section"],
    },
    {
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
      question: "Gender",
      name: "gender",
      type: "sinsingleselectgle",
      options: [
        "Male",
        "Female",
      ],
    },
    {
      question: "Family Type",
      name: "familytype",
      type: "singleselect",
      options: [
        "Joint Neuclear",
        "Single Parent",
      ],
    },
    {
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
      question: "Educational Qualification of Father",
      name: "educationqualificationoffather",
      type: "singleselect",
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
      question: "Educational Qualification of Mother",
      name: "educationqualificationofmother",
      type: "singleselect",
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
        "Upper Lower ",
        "Lower Middle",
        "Lower ",
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