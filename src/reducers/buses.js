const initialState = [
    {
      id: '214',
      name: 'Purti Travels',
      depatureTime: '12:00',
      arrivalTime: '15:00',
      fare: '350',
      boardingPoints: ['Nagpur', 'Chandrapur', 'Amravati', 'Gondia'],
      droppingPoints: ['Akola', 'Washim', 'Buldhana'],
      seats: [
        { no: '1', isBooked: false },
        { no: '2', isBooked: true },
        { no: '3', isBooked: false },
        { no: '4', isBooked: false },
        { no: '5', isBooked: false },
        { no: '6', isBooked: true },
        { no: '7', isBooked: false },
        { no: '8', isBooked: true },
        { no: '9', isBooked: false },
        { no: '10', isBooked: true },
      ],
    },
    {
      id: '108',
  
      name: 'Purti Travels',
      depatureTime: '18:10',
      arrivalTime: '22;50',
      fare: '600',
      boardingPoints: ['Nagpur', 'Chandrapur', 'Amravati', 'Gondia'],
      droppingPoints: ['Akola', 'Washim', 'Buldhana'],
    },
    {
      id: '120',
  
      name: 'Purti Travels',
      depatureTime: '15:00',
      arrivalTime: '18:20',
      fare: '400',
      boardingPoints: ['Nagpur', 'Chandrapur', 'Amravati', 'Gondia'],
      droppingPoints: ['Akola', 'Washim', 'Buldhana'],
    },
    {
      id: '111',
      name: 'Purti Travels',
      depatureTime: '20:30',
      arrivalTime: '22:00',
      fare: '850',
      boardingPoints: ['Nagpur', 'Chandrapur', 'Amravati', 'Gondia'],
      droppingPoints: ['Akola', 'Washim', 'Buldhana'],
    },
    {
      id: '188',
      name: 'Purti Travels',
      depatureTime: '22:30',
      arrivalTime: '00:45',
      fare: '900',
      boardingPoints: ['Nagpur', 'Chandrapur', 'Amravati', 'Gondia'],
      droppingPoints: ['Akola', 'Washim', 'Buldhana'],
    },
  ];
  export default (state = initialState, action) => {
    return state;
  };
  