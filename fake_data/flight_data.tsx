// // Function to generate flight data based on type and days
const generateFlightData = (days:any, type:any) => {
  return Array.from({ length: days }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    const formattedDate1 = date.toISOString().split('T')[0];
    
    // Increment end date for Round Trip flights
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 5);
    const formattedDate2 = endDate.toISOString().split('T')[0];
    
    // Define the common fields
    const commonFields = {
      id: `${type.toLowerCase().replace(' ', '')}${index + 1}`,
      type,
      performance: 'Non-stop',
      refundable: type === 'Multi-City' ? 'Non-refundable' : 'Refundable',
      newTaka: type === 'Multi-City' ? '60,000' : '20,000',
      oldTaka: type === 'Multi-City' ? '65,000' : '25,000',
      passengers: type === 'Multi-City' ? 3 : 1,
      extra1: type === 'Multi-City' ? 'Economy Class' : 'Business Class',
    };

    if (type === 'One Way') {
      return {
        ...commonFields,
        titleName1: 'DAC',
        titleDate1: formattedDate1,
        place1: 'Dhaka, Bangladesh',
        time1: '08:00 AM',
        titleName2: 'SIN',
        titleDate2: formattedDate1,
        place2: 'Singapore',
        time2: '12:30 PM',
        showMoreInfo: [
          {
            id: `${commonFields.id}_1`,
            serviceId: 'SQ001',
            serviceName: 'Singapore Airlines',
            duration: '4h 30m',
            titleName1: 'DAC',
            titleDate1: formattedDate1,
            place1: 'Dhaka, Bangladesh',
            time1: '08:00 AM',
            titleName2: 'SIN',
            titleDate2: formattedDate1,
            place2: 'Singapore',
            time2: '12:30 PM',
            performance: 'Non-stop',
            refundable: commonFields.refundable,
            newTaka: commonFields.newTaka,
            oldTaka: commonFields.oldTaka,
            extra1: commonFields.extra1,
          }
        ],
      };
    } else if (type === 'Round Trip') {
      return {
        ...commonFields,
        titleName1: 'DAC',
        titleDate1: formattedDate1,
        place1: 'Dhaka, Bangladesh',
        time1: '10:00 AM',
        titleName2: 'KUL',
        titleDate2: formattedDate2,
        place2: 'Kuala Lumpur, Malaysia',
        time2: '03:00 PM',
        showMoreInfo: [
          {
            id: `${commonFields.id}_1`,
            serviceId: 'MH101',
            serviceName: 'Malaysia Airlines',
            duration: '5h 0m',
            titleName1: 'DAC',
            titleDate1: formattedDate1,
            place1: 'Dhaka, Bangladesh',
            time1: '10:00 AM',
            titleName2: 'KUL',
            titleDate2: formattedDate2,
            place2: 'Kuala Lumpur, Malaysia',
            time2: '03:00 PM',
            performance: 'Non-stop',
            refundable: commonFields.refundable,
            newTaka: commonFields.newTaka,
            oldTaka: commonFields.oldTaka,
            extra1: commonFields.extra1,
          },
          {
            id: `${commonFields.id}_2`,
            serviceId: 'MH102',
            serviceName: 'Malaysia Airlines',
            duration: '5h 0m',
            titleName1: 'KUL',
            titleDate1: formattedDate2,
            place1: 'Kuala Lumpur, Malaysia',
            time1: '04:00 PM',
            titleName2: 'DAC',
            titleDate2: formattedDate1,
            place2: 'Dhaka, Bangladesh',
            time2: '09:00 PM',
            performance: 'Non-stop',
            refundable: commonFields.refundable,
            newTaka: commonFields.newTaka,
            oldTaka: commonFields.oldTaka,
            extra1: commonFields.extra1,
          }
        ],
      };
    } else if (type === 'Multi-City') {
      return {
        ...commonFields,
        titleName1: 'SYD',
        titleDate1: formattedDate1,
        place1: 'Sydney, Australia',
        time1: '10:00 PM',
        titleName2: 'SIN',
        titleDate2: formattedDate1,
        place2: 'Singapore',
        time2: '04:00 AM',
        showMoreInfo: [
          {
            id: `${commonFields.id}_1`,
            serviceId: 'QF002',
            serviceName: 'Qantas',
            duration: '8h 0m',
            titleName1: 'SYD',
            titleDate1: formattedDate1,
            place1: 'Sydney, Australia',
            time1: '10:00 PM',
            titleName2: 'SIN',
            titleDate2: formattedDate1,
            place2: 'Singapore',
            time2: '04:00 AM',
            performance: '1 Stop',
            refundable: commonFields.refundable,
            newTaka: commonFields.newTaka,
            oldTaka: commonFields.oldTaka,
            extra1: commonFields.extra1,
          },
          {
            id: `${commonFields.id}_2`,
            serviceId: 'SQ003',
            serviceName: 'Singapore Airlines',
            duration: '7h 30m',
            titleName1: 'SIN',
            titleDate1: formattedDate1,
            place1: 'Singapore',
            time1: '08:00 AM',
            titleName2: 'LHR',
            titleDate2: formattedDate2,
            place2: 'London, UK',
            time2: '03:30 PM',
            performance: 'Non-stop',
            refundable: commonFields.refundable,
            newTaka: commonFields.newTaka,
            oldTaka: commonFields.oldTaka,
            extra1: commonFields.extra1,
          }
        ],
      };
    }
  });
};


// Generate flights for each type
const oneWayFlights = generateFlightData(365, 'One Way').filter(Boolean) as Flight[];
const roundTripFlights = generateFlightData(365, 'Round Trip').filter(Boolean) as Flight[];
const multiCityFlights = generateFlightData(365, 'Multi-City').filter(Boolean) as Flight[];

// Export mockFlights with all generated flights
export const mockFlights: Flight[] = [
  ...oneWayFlights,
  ...roundTripFlights,
  ...multiCityFlights,
];


// src/data/flightsData.ts

export interface Flight {
  id: string;
  type: string;
  titleName1: string;
  titleDate1: string;
  place1: string;
  time1: string;
  titleName2: string;
  titleDate2: string;
  place2: string;
  time2: string;
  performance: string;
  refundable: string;
  newTaka: string;
  oldTaka: string;
  extra1: string;
  passengers: number;
  showMoreInfo: {
    id: string;
    serviceId: string;
    serviceName: string;
    duration: string;
    titleName1: string;
    titleDate1: string;
    place1: string;
    time1: string;
    titleName2: string;
    titleDate2: string;
    place2: string;
    time2: string;
    performance: string;
    refundable: string;
    newTaka: string;
    oldTaka: string;
    extra1: string;
  }[];
}

// export const mockFlights: Flight[] = [
//   // One Way Flights
//   {
//     id: 'ow1',
//     type: 'One Way',
//     titleName1: 'DAC',
//     titleDate1: '2024-11-05',
//     place1: 'Dhaka, Bangladesh',
//     time1: '08:00 AM',
//     titleName2: 'SIN',
//     titleDate2: '2024-11-05',
//     place2: 'Singapore',
//     time2: '12:30 PM',
//     performance: 'Non-stop',
//     refundable: 'Refundable',
//     newTaka: '20,000',
//     oldTaka: '25,000',
//     extra1: 'Business Class',
//     passengers: 1,
//     showMoreInfo: [
//       {
//         id: 'ow1_1',
//         serviceId: 'SQ001',
//         serviceName: 'Singapore Airlines',
//         duration: '4h 30m',
//         titleName1: 'DAC',
//         titleDate1: '2024-11-05',
//         place1: 'Dhaka, Bangladesh',
//         time1: '08:00 AM',
//         titleName2: 'SIN',
//         titleDate2: '2024-11-05',
//         place2: 'Singapore',
//         time2: '12:30 PM',
//         performance: 'Non-stop',
//         refundable: 'Refundable',
//         newTaka: '20,000',
//         oldTaka: '25,000',
//         extra1: 'Business Class',
//       }
//     ],
//   },
//   // Round Trip Flights
//   {
//     id: 'rt1',
//     type: 'Round Trip',
//     titleName1: 'DAC',
//     titleDate1: '2024-12-01',
//     place1: 'Dhaka, Bangladesh',
//     time1: '10:00 AM',
//     titleName2: 'KUL',
//     titleDate2: '2024-12-06',
//     place2: 'Kuala Lumpur, Malaysia',
//     time2: '03:00 PM',
//     performance: 'Non-stop',
//     refundable: 'Refundable',
//     newTaka: '40,000',
//     oldTaka: '45,000',
//     extra1: 'Economy Class',
//     passengers: 2,
//     showMoreInfo: [
//       {
//         id: 'rt1_1',
//         serviceId: 'MH101',
//         serviceName: 'Malaysia Airlines',
//         duration: '5h 0m',
//         titleName1: 'DAC',
//         titleDate1: '2024-12-01',
//         place1: 'Dhaka, Bangladesh',
//         time1: '10:00 AM',
//         titleName2: 'KUL',
//         titleDate2: '2024-12-05',
//         place2: 'Kuala Lumpur, Malaysia',
//         time2: '03:00 PM',
//         performance: 'Non-stop',
//         refundable: 'Refundable',
//         newTaka: '40,000',
//         oldTaka: '45,000',
//         extra1: 'Economy Class',
//       },
//       {
//         id: 'rt1_2',
//         serviceId: 'MH102',
//         serviceName: 'Malaysia Airlines',
//         duration: '5h 0m',
//         titleName1: 'KUL',
//         titleDate1: '2024-12-15',
//         place1: 'Kuala Lumpur, Malaysia',
//         time1: '04:00 PM',
//         titleName2: 'DAC',
//         titleDate2: '2024-12-19',
//         place2: 'Dhaka, Bangladesh',
//         time2: '09:00 PM',
//         performance: 'Non-stop',
//         refundable: 'Refundable',
//         newTaka: '40,000',
//         oldTaka: '45,000',
//         extra1: 'Economy Class',
//       }
//     ],
//   },
//   // Multi-City Flights
//   {
//     id: 'mc1',
//     type: 'Multi-City',
//     titleName1: 'SYD',
//     titleDate1: '2024-11-12',
//     place1: 'Sydney, Australia',
//     time1: '10:00 PM',
//     titleName2: 'SIN',
//     titleDate2: '2024-11-13',
//     place2: 'Singapore',
//     time2: '04:00 AM',
//     performance: '1 Stop',
//     refundable: 'Non-refundable',
//     newTaka: '60,000',
//     oldTaka: '65,000',
//     extra1: 'Economy Class',
//     passengers: 3,
//     showMoreInfo: [
//       {
//         id: 'mc1_1',
//         serviceId: 'QF002',
//         serviceName: 'Qantas',
//         duration: '8h 0m',
//         titleName1: 'SYD',
//         titleDate1: '2024-11-12',
//         place1: 'Sydney, Australia',
//         time1: '10:00 PM',
//         titleName2: 'SIN',
//         titleDate2: '2024-11-13',
//         place2: 'Singapore',
//         time2: '04:00 AM',
//         performance: '1 Stop',
//         refundable: 'Non-refundable',
//         newTaka: '60,000',
//         oldTaka: '65,000',
//         extra1: 'Economy Class',
//       },
//       {
//         id: 'mc1_2',
//         serviceId: 'SQ003',
//         serviceName: 'Singapore Airlines',
//         duration: '7h 30m',
//         titleName1: 'SIN',
//         titleDate1: '2024-11-14',
//         place1: 'Singapore',
//         time1: '08:00 AM',
//         titleName2: 'LHR',
//         titleDate2: '2024-11-14',
//         place2: 'London, UK',
//         time2: '03:30 PM',
//         performance: 'Non-stop',
//         refundable: 'Non-refundable',
//         newTaka: '60,000',
//         oldTaka: '65,000',
//         extra1: 'Economy Class',
//       }
//     ],
//   }
// ];


