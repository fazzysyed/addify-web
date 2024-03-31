export const generateId = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

export const Medications = [
  {
    id: generateId(),
    label: "Lisdexamfetamine",
    value: "Lisdexamfetamine",

    selected: false,
    strength: [
      {
        value: 10,
        label: "10 mg",
        selected: false,
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 20,
        label: "20 mg",
        selected: false,
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 30,
        selected: false,
        label: "30 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 40,
        selected: false,
        label: "40 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 50,
        selected: false,
        label: "50 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 60,
        selected: false,
        label: "60 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 70,
        selected: false,
        label: "70 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
    ],
  },

  {
    id: generateId(),
    label: "Dexamfetamine",
    value: "Dexamfetamine 5 mg",
    selected: false,
    strength: [
      {
        label: "5 mg",
        value: 5,
        selected: false,

        frequency: [
          {
            value: 1,
            selected: false,
            label: "Once a day",
          },
          {
            value: 27,
            selected: false,
            label: "Twice a day",
          },
          {
            value: 36,
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "10 mg",
        value: 10,
        selected: false,
        frequency: [
          {
            value: 1,
            selected: false,
            label: "Once a day",
          },
          {
            value: 27,
            selected: false,
            label: "Twice a day",
          },
          {
            value: 36,
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "15 mg",
        value: 15,
        selected: false,
        frequency: [
          {
            value: 1,
            selected: false,
            label: "Once a day",
          },
          {
            value: 27,
            selected: false,
            label: "Twice a day",
          },
          {
            value: 36,
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "20 mg",
        value: 20,
        selected: false,
        frequency: [
          {
            value: 1,
            selected: false,
            label: "Once a day",
          },
          {
            value: 27,
            selected: false,
            label: "Twice a day",
          },
          {
            value: 36,
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "25 mg",
        value: 25,
        selected: false,
        frequency: [
          {
            value: 1,
            selected: false,
            label: "Once a day",
          },
          {
            value: 27,
            selected: false,
            label: "Twice a day",
          },
          {
            value: 36,
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "30 mg",
        value: 30,
        selected: false,
        frequency: [
          {
            value: 1,
            selected: false,
            label: "Once a day",
          },
          {
            value: 27,
            selected: false,
            label: "Twice a day",
          },
          {
            value: 36,
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "35 mg",
        value: 35,
        selected: false,
        frequency: [
          {
            value: 1,
            selected: false,
            label: "Once a day",
          },
          {
            value: 27,
            selected: false,
            label: "Twice a day",
          },
          {
            value: 36,
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "40 mg",
        value: 40,
        selected: false,
        frequency: [
          {
            value: 1,
            selected: false,
            label: "Once a day",
          },
          {
            value: 27,
            selected: false,
            label: "Twice a day",
          },
          {
            value: 36,
            selected: false,
            label: "Three times a day",
          },
        ],
      },
    ],
  },
  {
    id: generateId(),
    label: "Methylphenidate LA",
    value: "Methylphenidate LA",
    selected: false,
    strength: [
      {
        value: 10,
        selected: false,
        label: "10 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 20,
        selected: false,
        label: "20 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 30,
        selected: false,
        label: "30 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 40,
        selected: false,
        label: "40 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 50,
        selected: false,
        label: "50 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 60,
        selected: false,
        label: "60 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
    ],
  },
  {
    id: generateId(),
    label: "Concerta",
    value: "Concerta",
    selected: false,

    strength: [
      {
        value: 18,
        selected: false,
        label: "18 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 27,
        selected: false,
        label: "27 mg",

        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 36,
        selected: false,
        label: "36 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
      {
        value: 54,
        selected: false,
        label: "54 mg",
        frequency: [
          {
            label: "once a day",
            value: "once a day",
            selected: false,
          },
          {
            label: "Other",
            value: "Other",
            selected: false,
          },
        ],
      },
    ],
  },
  {
    id: generateId(),
    label: "Methylphenidate IR",
    value: "Methylphenidate IR",
    selected: false,

    strength: [
      {
        label: "5 mg",
        value: 5,
        selected: false,

        frequency: [
          {
            value: "Once a day",
            selected: false,
            label: "Once a day",
          },
          {
            value: "Twice a day",
            selected: false,
            label: "Twice a day",
          },
          {
            value: "Three times a day",
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "10 mg",
        value: 10,
        selected: false,
        frequency: [
          {
            value: "Once a day",
            selected: false,
            label: "Once a day",
          },
          {
            value: "Twice a day",
            selected: false,
            label: "Twice a day",
          },
          {
            value: "Three times a day",
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "15 mg",
        value: 15,
        selected: false,
        frequency: [
          {
            value: "Once a day",
            selected: false,
            label: "Once a day",
          },
          {
            value: "Twice a day",
            selected: false,
            label: "Twice a day",
          },
          {
            value: "Three times a day",
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "20 mg",
        value: 20,
        selected: false,
        frequency: [
          {
            value: "Once a day",
            selected: false,
            label: "Once a day",
          },
          {
            value: "Twice a day",
            selected: false,
            label: "Twice a day",
          },
          {
            value: "Three times a day",
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "25 mg",
        value: 25,
        selected: false,
        frequency: [
          {
            value: "Once a day",
            selected: false,
            label: "Once a day",
          },
          {
            value: "Twice a day",
            selected: false,
            label: "Twice a day",
          },
          {
            value: "Three times a day",
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "30 mg",
        value: 30,
        selected: false,
        frequency: [
          {
            value: "Once a day",
            selected: false,
            label: "Once a day",
          },
          {
            value: "Twice a day",
            selected: false,
            label: "Twice a day",
          },
          {
            value: "Three times a day",
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "35 mg",
        value: 35,
        selected: false,
        frequency: [
          {
            value: "Once a day",
            selected: false,
            label: "Once a day",
          },
          {
            value: "Twice a day",
            selected: false,
            label: "Twice a day",
          },
          {
            value: "Three times a day",
            selected: false,
            label: "Three times a day",
          },
        ],
      },
      {
        label: "40 mg",
        value: 40,
        selected: false,
        frequency: [
          {
            value: "Once a day",
            selected: false,
            label: "Once a day",
          },
          {
            value: "Twice a day",
            selected: false,
            label: "Twice a day",
          },
          {
            value: "Three times a day",
            selected: false,
            label: "Three times a day",
          },
        ],
      },
    ],
  },
  {
    id: generateId(),
    label: "None",
    value: "None",
    message: "",
    selected: false,
  },
];
