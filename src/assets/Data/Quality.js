export const generateId = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

export const Quality = [
  {
    id: generateId(),
    question: 'How would you rate your quality of life?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very poor',
      },
      {
        score: 1,
        name: 'poor',
      },
      {
        score: 2,
        name: 'Neither poor nor good',
      },
      {
        score: 3,
        name: 'Good',
      },
      {
        score: 4,
        name: 'Very Good',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How satisfied are you with your health?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very dissatisfied',
      },
      {
        score: 1,
        name: 'Dissatisfied',
      },
      {
        score: 2,
        name: 'Neither satisfied nor dissatisfied',
      },
      {
        score: 3,
        name: 'Satisfied',
      },
      {
        score: 4,
        name: 'Very satisfied',
      },
    ],
  },
  {
    id: generateId(),
    question:
      'To what extent do you feel that physical pain prevents you from doing what you need to do?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'A moderate amount',
      },
      {
        score: 3,
        name: 'Very much',
      },
      {
        score: 4,
        name: 'An extreme amount',
      },
    ],
  },
  {
    id: generateId(),
    question:
      'How much do you need any medical treatment to function in your life?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'A moderate amount',
      },
      {
        score: 3,
        name: 'Very much',
      },
      {
        score: 4,
        name: 'An extreme amount',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How much do you enjoy life?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'A moderate amount',
      },
      {
        score: 3,
        name: 'Very much',
      },
      {
        score: 4,
        name: 'An extreme amount',
      },
    ],
  },
  {
    id: generateId(),
    question: 'To what extent do you feel your life to be meaningful?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'A moderate amount',
      },
      {
        score: 3,
        name: 'Very much',
      },
      {
        score: 4,
        name: 'An extreme amount',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How well are you able to concentrate?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'A moderate amount',
      },
      {
        score: 3,
        name: 'Very much',
      },
      {
        score: 4,
        name: 'An extreme amount',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How safe do you feel in your daily life?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'A moderate amount',
      },
      {
        score: 3,
        name: 'Very much',
      },
      {
        score: 4,
        name: 'Extremely',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How healthy is your physical environment?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'A moderate amount',
      },
      {
        score: 3,
        name: 'Very much',
      },
      {
        score: 4,
        name: 'Extremely',
      },
    ],
  },
  {
    id: generateId(),
    question: 'Do you have enough energy for everyday life?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'Moderately',
      },
      {
        score: 3,
        name: 'Mostly',
      },
      {
        score: 4,
        name: 'Completely',
      },
    ],
  },
  {
    id: generateId(),
    question: 'Are you able to accept your bodily appearance?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'Moderately',
      },
      {
        score: 3,
        name: 'Mostly',
      },
      {
        score: 4,
        name: 'Completely',
      },
    ],
  },
  {
    id: generateId(),
    question: 'Have you enough money to meet your needs?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'Moderately',
      },
      {
        score: 3,
        name: 'Mostly',
      },
      {
        score: 4,
        name: 'Completely',
      },
    ],
  },
  {
    id: generateId(),
    question:
      'How available to you is the information that you need in your day-to-day life?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'Moderately',
      },
      {
        score: 3,
        name: 'Mostly',
      },
      {
        score: 4,
        name: 'Completely',
      },
    ],
  },
  {
    id: generateId(),
    question:
      'To what extent do you have the opportunity for leisure activities?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Not at all',
      },
      {
        score: 1,
        name: 'A little',
      },
      {
        score: 2,
        name: 'Moderately',
      },
      {
        score: 3,
        name: 'Mostly',
      },
      {
        score: 4,
        name: 'Completely',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How well are you able to get around?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very poor',
      },
      {
        score: 1,
        name: 'Poor',
      },
      {
        score: 2,
        name: 'Neither poor nor well',
      },
      {
        score: 3,
        name: 'Well',
      },
      {
        score: 4,
        name: 'Very well',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How satisfied are you with your sleep?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very dissatisfied',
      },
      {
        score: 1,
        name: 'Dissatisfied',
      },
      {
        score: 2,
        name: 'Neither satisfied nor dissatisfied',
      },
      {
        score: 3,
        name: 'Satisfied',
      },
      {
        score: 4,
        name: 'Very satisfied',
      },
    ],
  },
  {
    id: generateId(),
    question:
      'How satisfied are you with your ability to perform your daily living activities.',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very dissatisfied',
      },
      {
        score: 1,
        name: 'Dissatisfied',
      },
      {
        score: 2,
        name: 'Neither satisfied nor dissatisfied',
      },
      {
        score: 3,
        name: 'Satisfied',
      },
      {
        score: 4,
        name: 'Very satisfied',
      },
    ],
  },
  {
    id: generateId(),
    question: ' How satisfied are you with your capacity for work?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very dissatisfied',
      },
      {
        score: 1,
        name: 'Dissatisfied',
      },
      {
        score: 2,
        name: 'Neither satisfied nor dissatisfied',
      },
      {
        score: 3,
        name: 'Satisfied',
      },
      {
        score: 4,
        name: 'Very satisfied',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How satisfied are you with yourself?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very dissatisfied',
      },
      {
        score: 1,
        name: 'Dissatisfied',
      },
      {
        score: 2,
        name: 'Neither satisfied nor dissatisfied',
      },
      {
        score: 3,
        name: 'Satisfied',
      },
      {
        score: 4,
        name: 'Very satisfied',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How satisfied are you with your personal relationships?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very dissatisfied',
      },
      {
        score: 1,
        name: 'Dissatisfied',
      },
      {
        score: 2,
        name: 'Neither satisfied nor dissatisfied',
      },
      {
        score: 3,
        name: 'Satisfied',
      },
      {
        score: 4,
        name: 'Very satisfied',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How satisfied are you with your sex life?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very dissatisfied',
      },
      {
        score: 1,
        name: 'Dissatisfied',
      },
      {
        score: 2,
        name: 'Neither satisfied nor dissatisfied',
      },
      {
        score: 3,
        name: 'Satisfied',
      },
      {
        score: 4,
        name: 'Very satisfied',
      },
    ],
  },
  {
    id: generateId(),
    question:
      ' How satisfied are you with the support you get from your friends?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very dissatisfied',
      },
      {
        score: 1,
        name: 'Dissatisfied',
      },
      {
        score: 2,
        name: 'Neither satisfied nor dissatisfied',
      },
      {
        score: 3,
        name: 'Satisfied',
      },
      {
        score: 4,
        name: 'Very satisfied',
      },
    ],
  },
  {
    id: generateId(),
    question:
      ' How satisfied are you with the conditions of your living place?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very dissatisfied',
      },
      {
        score: 1,
        name: 'Dissatisfied',
      },
      {
        score: 2,
        name: 'Neither satisfied nor dissatisfied',
      },
      {
        score: 3,
        name: 'Satisfied',
      },
      {
        score: 4,
        name: 'Very satisfied',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How satisfied are you with your access to health services?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very dissatisfied',
      },
      {
        score: 1,
        name: 'Dissatisfied',
      },
      {
        score: 2,
        name: 'Neither satisfied nor dissatisfied',
      },
      {
        score: 3,
        name: 'Satisfied',
      },
      {
        score: 4,
        name: 'Very satisfied',
      },
    ],
  },
  {
    id: generateId(),
    question: 'How satisfied are you with your mode of transportation?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Very dissatisfied',
      },
      {
        score: 1,
        name: 'Dissatisfied',
      },
      {
        score: 2,
        name: 'Neither satisfied nor dissatisfied',
      },
      {
        score: 3,
        name: 'Satisfied',
      },
      {
        score: 4,
        name: 'Very satisfied',
      },
    ],
  },
  {
    id: generateId(),
    question:
      'How often do you have negative feelings, such as blue mood, despair, anxiety, depression?',
    answer: '',
    comment: '',
    score: 0,
    answers: [
      {
        score: 0,
        name: 'Never',
      },
      {
        score: 1,
        name: 'Seldom',
      },
      {
        score: 2,
        name: 'Quite often',
      },
      {
        score: 3,
        name: 'Very often',
      },
      {
        score: 4,
        name: 'Always',
      },
    ],
  },
];
