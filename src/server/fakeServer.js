 const workoutFromDb = [
  { 
    id: Math.random().toString(),
    date: new Date(2021, 4, 3),
    description: "Бег",
    distance: 7,
  },
  { 
    id: Math.random().toString(),
    date: new Date(2022, 6, 2),
    description: "Красочный забег",
    distance: 5,
  },
  {
    id: Math.random().toString(),
    date: new Date(2022, 7, 8),
    description: "Марафон RunIt",
    distance: 10,
  },
];

export default workoutFromDb;

