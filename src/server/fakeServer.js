 const workoutFromDb = [
  {
    id: Math.random().toString(),
    date: new Date(2021, 8, 5),
    description: "Марафон RunIt",
    distance: 10,
  },
  { 
    id: Math.random().toString(),
    date: new Date(2021, 4, 3),
    description: "Бег",
    distance: 7,
  },
  { 
    id: Math.random().toString(),
    date: new Date(2021, 6, 2),
    description: "Бег",
    distance: 15,
  },
];

export default workoutFromDb;
