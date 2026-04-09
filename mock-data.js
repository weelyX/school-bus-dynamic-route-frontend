window.DEFAULT_DATA = {
  version: 7,
  settings: {
    language: "en",
    theme: "light",
    notifications: true,
    profile: {
      fullName: "Alya Hassan",
      email: "alya.hassan@example.com",
      phone: "+966 55 000 1234"
    }
  },
  schools: [
    {
      id: "sch_1",
      name: { en: "Al Noor International School", ar: "مدارس النور الدولية" },
      address: { en: "Prince Abdul Majeed Road, Medina", ar: "طريق الأمير عبد المجيد، المدينة" },
      location: { lat: 24.5007, lng: 39.5692 }
    },
    {
      id: "sch_2",
      name: { en: "Future Leaders Academy", ar: "أكاديمية قادة المستقبل" },
      address: { en: "King Abdullah Branch Road, Medina", ar: "طريق الملك عبدالله الفرعي، المدينة" },
      location: { lat: 24.4801, lng: 39.6105 }
    }
  ],
  buses: [
    {
      id: "bus_1",
      schoolId: "sch_1",
      code: "BUS-12",
      displayName: { en: "Bus 12", ar: "الحافلة 12" },
      plateNumber: "MDA-1203",
      healthStatus: "OPERATIONAL",
      driver: {
        name: { en: "Khalid Salem", ar: "خالد سالم" },
        phone: "+966 55 123 0001"
      },
      startLocation: { lat: 24.4975, lng: 39.5628 },
      routeIndex: 0,
      lastSeenAt: new Date().toISOString(),
      currentLocation: { lat: 24.4975, lng: 39.5628 },
      route: [],
      stopIndices: {},
      schoolArrivalIndex: 0,
      delayTick: 0
    },
    {
      id: "bus_2",
      schoolId: "sch_2",
      code: "BUS-21",
      displayName: { en: "Bus 21", ar: "الحافلة 21" },
      plateNumber: "MDA-2109",
      healthStatus: "DELAYED",
      driver: {
        name: { en: "Amal Nasser", ar: "أمل ناصر" },
        phone: "+966 55 123 0002"
      },
      startLocation: { lat: 24.4729, lng: 39.6038 },
      routeIndex: 0,
      lastSeenAt: new Date().toISOString(),
      currentLocation: { lat: 24.4729, lng: 39.6038 },
      route: [],
      stopIndices: {},
      schoolArrivalIndex: 0,
      delayTick: 0
    }
  ],
  students: [
    {
      id: "std_1",
      schoolId: "sch_1",
      busId: "bus_1",
      fullName: { en: "Sara Ahmed", ar: "سارة أحمد" },
      grade: { en: "Grade 5", ar: "الصف الخامس" },
      pickupAddress: { en: "Al Khalidiyyah District", ar: "حي الخالدية" },
      pickupLocation: { lat: 24.5055, lng: 39.5768 },
      attendanceStatus: "ATTENDING",
      boardingStatus: "NOT_REACHED"
    },
    {
      id: "std_2",
      schoolId: "sch_1",
      busId: "bus_1",
      fullName: { en: "Yousef Ali", ar: "يوسف علي" },
      grade: { en: "Grade 6", ar: "الصف السادس" },
      pickupAddress: { en: "Al Aziziyah District", ar: "حي العزيزية" },
      pickupLocation: { lat: 24.5103, lng: 39.5832 },
      attendanceStatus: "ATTENDING",
      boardingStatus: "NOT_REACHED"
    },
    {
      id: "std_3",
      schoolId: "sch_1",
      busId: "bus_1",
      fullName: { en: "Lina Omar", ar: "لينا عمر" },
      grade: { en: "Grade 4", ar: "الصف الرابع" },
      pickupAddress: { en: "Qurban Area", ar: "منطقة قربان" },
      pickupLocation: { lat: 24.5151, lng: 39.5895 },
      attendanceStatus: "ABSENT",
      boardingStatus: "NOT_REACHED"
    },
    {
      id: "std_4",
      schoolId: "sch_2",
      busId: "bus_2",
      fullName: { en: "Faisal Nasser", ar: "فيصل ناصر" },
      grade: { en: "Grade 8", ar: "الصف الثامن" },
      pickupAddress: { en: "Al Aridh Area", ar: "منطقة العريض" },
      pickupLocation: { lat: 24.4860, lng: 39.6172 },
      attendanceStatus: "ATTENDING",
      boardingStatus: "NOT_REACHED"
    },
    {
      id: "std_5",
      schoolId: "sch_2",
      busId: "bus_2",
      fullName: { en: "Maha Saeed", ar: "مها سعيد" },
      grade: { en: "Grade 7", ar: "الصف السابع" },
      pickupAddress: { en: "Bani Harithah", ar: "بني حارثة" },
      pickupLocation: { lat: 24.4918, lng: 39.6224 },
      attendanceStatus: "ATTENDING",
      boardingStatus: "NOT_REACHED"
    },
    {
      id: "std_6",
      schoolId: "sch_2",
      busId: "bus_2",
      fullName: { en: "Huda Khaled", ar: "هدى خالد" },
      grade: { en: "Grade 3", ar: "الصف الثالث" },
      pickupAddress: { en: "Al Jumuah Road", ar: "طريق الجمعة" },
      pickupLocation: { lat: 24.4982, lng: 39.6289 },
      attendanceStatus: "ATTENDING",
      boardingStatus: "NOT_REACHED"
    }
  ]
};
