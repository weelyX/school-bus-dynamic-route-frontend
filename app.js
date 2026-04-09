(() => {
  const STORAGE_KEY = "schoolBusTracker.frontendOnly.v2";
  const SESSION_MARKER_COLORS_KEY = "schoolBusTracker.driver.markerColors";
  const DEFAULT_CENTER = [24.495, 39.598];
  const DEFAULT_CENTER_OBJECT = () => ({ lat: DEFAULT_CENTER[0], lng: DEFAULT_CENTER[1] });
  const SIMULATION_INTERVAL_MS = 3000;

  const translations = {
    en: {
      appTitle: "School Bus Tracking",
      topbarSubtitle: "Live map, attendance, and bus monitoring",
      navDashboard: "Map",
      navSchools: "Schools",
      navBuses: "Buses",
      navStudents: "Students",
      navDriver: "Bus Driver",
      navParent: "Parent Portal",
      navSettings: "Settings",
      language: "Language",
      languageHint: "Switch between English and Arabic",
      theme: "Theme",
      themeHint: "Toggle light and dark mode",
      liveFleetMap: "Map",
      liveFleetMapHint: "Click any bus or school to view details.",
      selectItem: "Select an item",
      selectItemHint: "Choose a bus or school from the map or lists to view details.",
      linkedBuses: "Linked buses",
      school: "School",
      lastSeen: "Last seen",
      studentsAssigned: "Students",
      busStatus: "Bus status",
      markOutOfService: "Mark Out of Service",
      markOperational: "Mark Operational",
      markDelayed: "Mark Delayed",
      centerOnMap: "Center on Map",
      assignedStudents: "Assigned Students",
      schoolsList: "Schools",
      schoolsListHint: "Click a school to see its linked buses and students.",
      addSchool: "Add New School",
      addSchoolHint: "Click directly on the map below to choose the school location.",
      schoolName: "School Name",
      schoolNamePlaceholder: "Enter school name",
      schoolAddress: "Address",
      schoolAddressPlaceholder: "Enter school address",
      pickSchoolLocation: "Pick school location",
      saveSchool: "Save School",
      busesList: "Buses",
      busesListHint: "Open any bus to inspect driver details, route, and assigned students.",
      addBus: "Add New Bus",
      addBusHint: "Choose a school, set driver details, and click the map to define the bus start point.",
      busName: "Bus Name",
      busNamePlaceholder: "Enter bus name",
      busCode: "Bus Code",
      busCodePlaceholder: "Enter bus code",
      plateNumber: "Plate Number",
      plateNumberPlaceholder: "Enter plate number",
      driverName: "Driver Name",
      driverNamePlaceholder: "Enter driver name",
      driverPhone: "Driver Phone",
      driverPhonePlaceholder: "Enter phone number",
      assignSchool: "Assign School",
      pickBusLocation: "Pick bus starting location",
      saveBus: "Save Bus",
      studentsList: "Students",
      studentsListHint: "Add students, assign them to buses, and keep the data in localStorage.",
      student: "Student",
      bus: "Bus",
      attendance: "Attendance",
      boarding: "Boarding",
      addStudent: "Add New Student",
      addStudentHint: "Click directly on the map below to choose the student's home location.",
      studentName: "Student Name",
      studentNamePlaceholder: "Enter student name",
      grade: "Grade",
      gradePlaceholder: "Enter grade",
      pickupAddress: "Home Address",
      pickupAddressPlaceholder: "Enter home address",
      assignBus: "Assign Bus",
      pickStudentLocation: "Pick student home location",
      saveStudent: "Save Student",
      noLocationSelected: "No location selected",
      routeOverview: "Route Overview",
      routeOverviewHint: "The bus route updates automatically when students are added.",
      driverMap: "Driver Route Map",
      driverMapHint: "View all assigned students, route order, and customize marker colors.",
      driverStops: "Student Stops",
      colorMarker: "Marker color",
      focusStudent: "Focus",
      startPoint: "Start point",
      destinationSchool: "Destination school",
      parentPortal: "Parent Portal",
      parentPortalHint: "Track the bus in real time from home to school and back again.",
      selectStudent: "Select Student",
      driverInformation: "Driver Information",
      driverInformationHint: "View-only details for the assigned bus driver.",
      routeModeLabel: "Route mode",
      routeModeValue: "Home → school → home",
      parentStatus: "Status",
      routeEta: "Estimated trip state",
      approachingHome: "Approaching home",
      headingToSchool: "Heading to school",
      returnTrip: "Return trip",
      waitingForStart: "Preparing route",
      instantAlert: "Instant alert",
      breakdownAlert: "This bus is currently broken down or out of service.",
      delayedAlert: "This bus is delayed. The live marker continues to update more slowly.",
      accountSettings: "Account Settings",
      accountSettingsHint: "Update your local profile, language, and theme preferences.",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      languagePreference: "Language Preference",
      themePreference: "Theme Preference",
      light: "Light",
      dark: "Dark",
      notifications: "Notifications",
      notificationsHint: "Simulated preference stored in the browser",
      saveSettings: "Save Settings",
      systemTools: "System Tools",
      systemToolsHint: "Reset the simulated data while keeping the standalone setup intact.",
      resetDemo: "Reset Demo Data",
      changeLanguageAction: "Toggle Language",
      changeThemeAction: "Toggle Theme",
      operational: "Operational",
      delayed: "Delayed",
      outOfService: "Out of Service",
      brokenDown: "Broken Down",
      attending: "Attending",
      absent: "Absent",
      notReached: "Not Reached",
      waiting: "Waiting",
      boarded: "Boarded",
      missed: "Missed",
      markAbsent: "Mark Absent",
      markAttending: "Mark Attending",
      gradeLabel: "Grade",
      stopLabel: "Stop",
      driverNameLabel: "Driver",
      driverPhoneLabel: "Driver phone",
      routeLengthLabel: "Route points",
      pickupsLabel: "Pickups",
      schoolSaved: "School added successfully",
      busSaved: "Bus added successfully",
      studentSaved: "Student added and route optimized",
      settingsSaved: "Settings updated",
      busUpdated: "Bus health status updated",
      studentUpdated: "Student attendance updated",
      demoReset: "Demo data has been reset",
      operationalBuses: "Operational Buses",
      delayedBuses: "Delayed Buses",
      outOfServiceBuses: "Out of Service",
      absentStudents: "Absent Students",
      boardedStudents: "Boarded Students",
      location: "Location",
      selectBus: "Select Bus",
      chooseBusStatus: "Bus Status",
      notificationsOn: "Notifications enabled",
      notificationsOff: "Notifications disabled",
      linkedBusListEmpty: "No buses linked yet.",
      routeOptimized: "Route updated automatically",
      resetParentView: "Choose a student to start tracking",
      home: "Home",
      schoolArrival: "School arrival",
      startTrackingHint: "The map follows the shared live bus position used in the driver view.",
      busesCount: "Buses",
      studentsCount: "Students"
    },
    ar: {
      appTitle: "تتبع الحافلات المدرسية",
      topbarSubtitle: "الخريطة والحضور ومراقبة الحافلات",
      navDashboard: "خريطة",
      navSchools: "المدارس",
      navBuses: "الحافلات",
      navStudents: "الطلاب",
      navDriver: "السائق",
      navParent: "بوابة ولي الأمر",
      navSettings: "الإعدادات",
      language: "اللغة",
      languageHint: "التبديل بين الإنجليزية والعربية",
      theme: "المظهر",
      themeHint: "التبديل بين الوضع الفاتح والداكن",
      liveFleetMap: "خريطة",
      liveFleetMapHint: "اضغط على أي حافلة أو مدرسة لعرض التفاصيل.",
      selectItem: "اختر عنصرًا",
      selectItemHint: "اختر حافلة أو مدرسة من الخريطة أو القوائم لعرض التفاصيل.",
      linkedBuses: "الحافلات المرتبطة",
      school: "المدرسة",
      lastSeen: "آخر ظهور",
      studentsAssigned: "الطلاب",
      busStatus: "حالة الحافلة",
      markOutOfService: "تعطيل الحافلة",
      markOperational: "إرجاعها للعمل",
      markDelayed: "تعيينها متأخرة",
      centerOnMap: "توسيط في الخريطة",
      assignedStudents: "الطلاب المرتبطون",
      schoolsList: "المدارس",
      schoolsListHint: "اضغط على مدرسة لعرض الحافلات والطلاب المرتبطين بها.",
      addSchool: "إضافة مدرسة جديدة",
      addSchoolHint: "اضغط مباشرة على الخريطة أدناه لتحديد موقع المدرسة.",
      schoolName: "اسم المدرسة",
      schoolNamePlaceholder: "أدخل اسم المدرسة",
      schoolAddress: "العنوان",
      schoolAddressPlaceholder: "أدخل عنوان المدرسة",
      pickSchoolLocation: "تحديد موقع المدرسة",
      saveSchool: "حفظ المدرسة",
      busesList: "الحافلات",
      busesListHint: "افتح أي حافلة لمراجعة بيانات السائق والمسار والطلاب المرتبطين.",
      addBus: "إضافة حافلة جديدة",
      addBusHint: "اختر المدرسة وأدخل بيانات السائق ثم اضغط على الخريطة لتحديد نقطة بداية الحافلة.",
      busName: "اسم الحافلة",
      busNamePlaceholder: "أدخل اسم الحافلة",
      busCode: "رمز الحافلة",
      busCodePlaceholder: "أدخل رمز الحافلة",
      plateNumber: "رقم اللوحة",
      plateNumberPlaceholder: "أدخل رقم اللوحة",
      driverName: "اسم السائق",
      driverNamePlaceholder: "أدخل اسم السائق",
      driverPhone: "هاتف السائق",
      driverPhonePlaceholder: "أدخل رقم الهاتف",
      assignSchool: "ربط المدرسة",
      pickBusLocation: "تحديد نقطة بداية الحافلة",
      saveBus: "حفظ الحافلة",
      studentsList: "الطلاب",
      studentsListHint: "أضف الطلاب واربطهم بالحافلات مع حفظ البيانات في التخزين المحلي.",
      student: "الطالب",
      bus: "الحافلة",
      attendance: "الحضور",
      boarding: "الصعود",
      addStudent: "إضافة طالب جديد",
      addStudentHint: "اضغط مباشرة على الخريطة أدناه لتحديد موقع منزل الطالب.",
      studentName: "اسم الطالب",
      studentNamePlaceholder: "أدخل اسم الطالب",
      grade: "الصف",
      gradePlaceholder: "أدخل الصف",
      pickupAddress: "عنوان المنزل",
      pickupAddressPlaceholder: "أدخل عنوان المنزل",
      assignBus: "ربط الحافلة",
      pickStudentLocation: "تحديد موقع منزل الطالب",
      saveStudent: "حفظ الطالب",
      noLocationSelected: "لم يتم تحديد موقع",
      routeOverview: "ملخص المسار",
      routeOverviewHint: "يتم تحديث مسار الحافلة تلقائيًا عند إضافة الطلاب.",
      driverMap: "خريطة السائق",
      driverMapHint: "اعرض جميع الطلاب المرتبطين وترتيب المسار وخصص ألوان العلامات.",
      driverStops: "نقاط توقف الطلاب",
      colorMarker: "لون العلامة",
      focusStudent: "تركيز",
      startPoint: "نقطة البداية",
      destinationSchool: "مدرسة الوجهة",
      parentPortal: "بوابة ولي الأمر",
      parentPortalHint: "تابع الحافلة مباشرة من المنزل إلى المدرسة ثم العودة.",
      selectStudent: "اختر الطالب",
      driverInformation: "معلومات السائق",
      driverInformationHint: "بيانات عرض فقط لسائق الحافلة المرتبطة.",
      routeModeLabel: "وضع المسار",
      routeModeValue: "منزل ← مدرسة ← منزل",
      parentStatus: "الحالة",
      routeEta: "حالة الرحلة التقديرية",
      approachingHome: "تقترب من المنزل",
      headingToSchool: "في الطريق إلى المدرسة",
      returnTrip: "رحلة العودة",
      waitingForStart: "جارٍ تجهيز المسار",
      instantAlert: "تنبيه فوري",
      breakdownAlert: "هذه الحافلة متعطلة حاليًا أو خارج الخدمة.",
      delayedAlert: "هذه الحافلة متأخرة. تستمر العلامة الحية في التحديث بشكل أبطأ.",
      accountSettings: "إعدادات الحساب",
      accountSettingsHint: "حدّث ملفك المحلي وتفضيلات اللغة والمظهر.",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      languagePreference: "تفضيل اللغة",
      themePreference: "تفضيل المظهر",
      light: "فاتح",
      dark: "داكن",
      notifications: "الإشعارات",
      notificationsHint: "تفضيل تجريبي محفوظ داخل المتصفح",
      saveSettings: "حفظ الإعدادات",
      systemTools: "أدوات النظام",
      systemToolsHint: "أعد ضبط البيانات التجريبية مع الحفاظ على النسخة المستقلة.",
      resetDemo: "إعادة ضبط البيانات التجريبية",
      changeLanguageAction: "تبديل اللغة",
      changeThemeAction: "تبديل المظهر",
      operational: "تعمل",
      delayed: "متأخرة",
      outOfService: "خارج الخدمة",
      brokenDown: "متعطلة",
      attending: "حاضر",
      absent: "غائب",
      notReached: "لم تصل بعد",
      waiting: "بانتظار الصعود",
      boarded: "صعد الحافلة",
      missed: "فاتته الحافلة",
      markAbsent: "تعيين كغائب",
      markAttending: "تعيين كحاضر",
      gradeLabel: "الصف",
      stopLabel: "المحطة",
      driverNameLabel: "السائق",
      driverPhoneLabel: "هاتف السائق",
      routeLengthLabel: "نقاط المسار",
      pickupsLabel: "نقاط الالتقاط",
      schoolSaved: "تمت إضافة المدرسة بنجاح",
      busSaved: "تمت إضافة الحافلة بنجاح",
      studentSaved: "تمت إضافة الطالب وتحديث المسار",
      settingsSaved: "تم تحديث الإعدادات",
      busUpdated: "تم تحديث حالة الحافلة",
      studentUpdated: "تم تحديث حالة حضور الطالب",
      demoReset: "تمت إعادة ضبط البيانات التجريبية",
      operationalBuses: "الحافلات العاملة",
      delayedBuses: "الحافلات المتأخرة",
      outOfServiceBuses: "خارج الخدمة",
      absentStudents: "الطلاب الغائبون",
      boardedStudents: "الطلاب الصاعدون",
      location: "الموقع",
      selectBus: "اختر الحافلة",
      chooseBusStatus: "حالة الحافلة",
      notificationsOn: "الإشعارات مفعلة",
      notificationsOff: "الإشعارات معطلة",
      linkedBusListEmpty: "لا توجد حافلات مرتبطة بعد.",
      routeOptimized: "تم تحديث المسار تلقائيًا",
      resetParentView: "اختر طالبًا لبدء التتبع",
      home: "المنزل",
      schoolArrival: "الوصول للمدرسة",
      startTrackingHint: "تتبع الخريطة نفس موقع الحافلة الحي المستخدم في واجهة السائق.",
      busesCount: "الحافلات",
      studentsCount: "الطلاب"
    }
  };

  const uiState = {
    activeView: "dashboard",
    selectedBusId: null,
    selectedSchoolId: null,
    driverBusId: null,
    selectedParentStudentId: null,
    pickerMode: null,
    parentLastAlertedStatus: null
  };

  const mapState = {
    dashboardMap: null,
    driverMap: null,
    parentMap: null,
    schoolMarkers: new Map(),
    busMarkers: new Map(),
    dashboardRouteLayer: null,
    parentLayers: { route: null, school: null, home: null, bus: null },
    driverLayers: { route: null, school: null, bus: null, homes: [] },
    pickerMaps: {
      school: { map: null, marker: null, value: null },
      bus: { map: null, marker: null, value: null },
      student: { map: null, marker: null, value: null }
    }
  };

  let state = loadState();
  let sessionState = loadSessionState();
  let toastTimer = null;
  let simulationTimer = null;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    normalizeState();
    bindStaticEvents();
    initializeMaps();
    applyTheme(state.settings.theme);
    applyLanguage(state.settings.language);
    syncSettingsForm();
    renderAll();
    startSimulation();
  }

  function loadState() {
    const defaults = clone(window.DEFAULT_DATA || {});
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaults;
    try {
      const parsed = JSON.parse(saved);
      return {
        ...defaults,
        ...parsed,
        settings: {
          ...defaults.settings,
          ...(parsed.settings || {}),
          profile: {
            ...defaults.settings.profile,
            ...((parsed.settings && parsed.settings.profile) || {})
          }
        },
        schools: Array.isArray(parsed.schools) ? parsed.schools : defaults.schools,
        buses: Array.isArray(parsed.buses) ? parsed.buses : defaults.buses,
        students: Array.isArray(parsed.students) ? parsed.students : defaults.students
      };
    } catch {
      return defaults;
    }
  }

  function loadSessionState() {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_MARKER_COLORS_KEY) || "{}") || {};
    } catch {
      return {};
    }
  }

  function persistState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function persistSessionState() {
    sessionStorage.setItem(SESSION_MARKER_COLORS_KEY, JSON.stringify(sessionState));
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function toLocalizedValue(value) {
    if (value && typeof value === "object" && ("en" in value || "ar" in value)) return value;
    const text = value == null ? "" : String(value);
    return { en: text, ar: text };
  }

  function createLocalizedText(text) {
    return { en: text, ar: text };
  }

  function localize(value) {
    if (value && typeof value === "object" && ("en" in value || "ar" in value)) {
      return value[state.settings.language] || value.en || value.ar || "";
    }
    return value == null ? "" : String(value);
  }

  function t(key) {
    return translations[state.settings.language]?.[key] ?? translations.en[key] ?? key;
  }

  function normalizeState() {
    state.settings = state.settings || clone(DEFAULT_DATA.settings);
    state.settings.profile = state.settings.profile || clone(DEFAULT_DATA.settings.profile);
    state.settings.language = state.settings.language === "ar" ? "ar" : "en";
    state.settings.theme = state.settings.theme === "dark" ? "dark" : "light";

    state.schools = (Array.isArray(state.schools) ? state.schools : clone(DEFAULT_DATA.schools)).map((school, index) => ({
      ...school,
      id: school.id || createId(`sch${index}`),
      name: toLocalizedValue(school.name || `School ${index + 1}`),
      address: toLocalizedValue(school.address || "Address"),
      location: normalizePoint(school.location, DEFAULT_CENTER_OBJECT())
    }));

    state.buses = (Array.isArray(state.buses) ? state.buses : clone(DEFAULT_DATA.buses)).map((bus, index) => ({
      ...bus,
      id: bus.id || createId(`bus${index}`),
      displayName: toLocalizedValue(bus.displayName || bus.name || `Bus ${index + 1}`),
      driver: {
        name: toLocalizedValue(bus.driver?.name || `Driver ${index + 1}`),
        phone: bus.driver?.phone || "+966 55 000 0000"
      },
      healthStatus: ["OPERATIONAL", "DELAYED", "OUT_OF_SERVICE", "BROKEN_DOWN"].includes(bus.healthStatus) ? bus.healthStatus : "OPERATIONAL",
      startLocation: normalizePoint(bus.startLocation || bus.currentLocation, DEFAULT_CENTER_OBJECT()),
      currentLocation: normalizePoint(bus.currentLocation || bus.startLocation, DEFAULT_CENTER_OBJECT()),
      route: Array.isArray(bus.route) ? bus.route.map((point) => normalizePoint(point, DEFAULT_CENTER_OBJECT())) : [],
      routeIndex: Number.isFinite(Number(bus.routeIndex)) ? Number(bus.routeIndex) : 0,
      stopIndices: bus.stopIndices || {},
      schoolArrivalIndex: Number.isFinite(Number(bus.schoolArrivalIndex)) ? Number(bus.schoolArrivalIndex) : 0,
      delayTick: Number.isFinite(Number(bus.delayTick)) ? Number(bus.delayTick) : 0,
      lastSeenAt: bus.lastSeenAt || new Date().toISOString()
    }));

    state.students = (Array.isArray(state.students) ? state.students : clone(DEFAULT_DATA.students)).map((student, index) => ({
      ...student,
      id: student.id || createId(`std${index}`),
      fullName: toLocalizedValue(student.fullName || `Student ${index + 1}`),
      grade: toLocalizedValue(student.grade || "Grade 1"),
      pickupAddress: toLocalizedValue(student.pickupAddress || "Home Address"),
      pickupLocation: normalizePoint(student.pickupLocation, DEFAULT_CENTER_OBJECT()),
      attendanceStatus: student.attendanceStatus === "ABSENT" ? "ABSENT" : "ATTENDING",
      boardingStatus: ["NOT_REACHED", "WAITING", "BOARDED", "MISSED"].includes(student.boardingStatus) ? student.boardingStatus : "NOT_REACHED"
    }));

    state.buses.forEach((bus) => recomputeBusRoute(bus.id, false));

    if (!uiState.driverBusId && state.buses[0]) uiState.driverBusId = state.buses[0].id;
    if (!uiState.selectedParentStudentId && state.students[0]) uiState.selectedParentStudentId = state.students[0].id;
  }

  function normalizePoint(point, fallback) {
    const lat = Number(point?.lat ?? fallback.lat);
    const lng = Number(point?.lng ?? fallback.lng);
    return { lat, lng };
  }

  function bindStaticEvents() {
    document.querySelectorAll(".nav-link").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
        btn.classList.add("active");
        showView(btn.dataset.view);
        closeSidebar();
      });
    });

    document.getElementById("openSidebarBtn").addEventListener("click", openSidebar);
    document.getElementById("closeSidebarBtn").addEventListener("click", closeSidebar);
    document.getElementById("sidebarBackdrop").addEventListener("click", closeSidebar);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeSidebar();
    });

    document.getElementById("languageToggleBtn").addEventListener("click", toggleLanguage);
    document.getElementById("desktopLanguageBtn").addEventListener("click", toggleLanguage);
    document.getElementById("themeToggleBtn").addEventListener("click", toggleTheme);
    document.getElementById("desktopThemeBtn").addEventListener("click", toggleTheme);

    document.getElementById("schoolForm").addEventListener("submit", handleSchoolSubmit);
    document.getElementById("busForm").addEventListener("submit", handleBusSubmit);
    document.getElementById("studentForm").addEventListener("submit", handleStudentSubmit);
    document.getElementById("settingsForm").addEventListener("submit", handleSettingsSubmit);
    document.getElementById("resetDemoBtn").addEventListener("click", resetDemoData);
    document.getElementById("settingsLanguageQuickBtn").addEventListener("click", toggleLanguage);
    document.getElementById("settingsThemeQuickBtn").addEventListener("click", toggleTheme);

    document.getElementById("studentSchoolSelect").addEventListener("change", syncStudentBusOptions);
    document.getElementById("busSchoolSelect").addEventListener("change", () => {
      const school = getSchoolById(document.getElementById("busSchoolSelect").value);
      const picker = mapState.pickerMaps.bus;
      if (school && picker.map && !picker.value) picker.map.setView([school.location.lat, school.location.lng], 13);
    });

    document.getElementById("driverBusSelect").addEventListener("change", (event) => {
      uiState.driverBusId = event.target.value || null;
      renderDriverView();
    });

    document.getElementById("parentStudentSelect").addEventListener("change", (event) => {
      uiState.selectedParentStudentId = event.target.value || null;
      renderParentPortal(true);
    });
  }

  function initializeMaps() {
    initializeDashboardMap();
    initializePickerMap("school", "schoolPickerMap", DEFAULT_CENTER, (point) => {
      mapState.pickerMaps.school.value = point;
      updatePickerPreview("school", point);
    });
    initializePickerMap("bus", "busPickerMap", DEFAULT_CENTER, (point) => {
      mapState.pickerMaps.bus.value = point;
      updatePickerPreview("bus", point);
    });
    initializePickerMap("student", "studentPickerMap", DEFAULT_CENTER, (point) => {
      mapState.pickerMaps.student.value = point;
      updatePickerPreview("student", point);
    });

    mapState.driverMap = L.map("driverMap", { zoomControl: true }).setView(DEFAULT_CENTER, 12);
    addTileLayer(mapState.driverMap);

    mapState.parentMap = L.map("parentPortalMap", { zoomControl: true }).setView(DEFAULT_CENTER, 12);
    addTileLayer(mapState.parentMap);

    renderDashboardMap();
    renderDriverView();
    renderParentPortal(false);
  }

  function addTileLayer(map) {
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
  }

  function initializeDashboardMap() {
    mapState.dashboardMap = L.map("map", { zoomControl: true }).setView(DEFAULT_CENTER, 12);
    addTileLayer(mapState.dashboardMap);
  }

  function initializePickerMap(type, elementId, center, onPick) {
    const picker = mapState.pickerMaps[type];
    picker.map = L.map(elementId, { zoomControl: true }).setView(center, 12);
    addTileLayer(picker.map);
    picker.map.on("click", (event) => {
      const point = { lat: event.latlng.lat, lng: event.latlng.lng };
      setPickerMarker(type, point);
      onPick(point);
    });
  }

  function setPickerMarker(type, point) {
    const picker = mapState.pickerMaps[type];
    picker.value = point;
    if (!picker.marker) {
      picker.marker = L.marker([point.lat, point.lng]).addTo(picker.map);
    }
    picker.marker.setLatLng([point.lat, point.lng]);
  }

  function updatePickerPreview(type, point) {
    const previewMap = {
      school: "schoolLocationPreview",
      bus: "busLocationPreview",
      student: "studentLocationPreview"
    };
    document.getElementById(previewMap[type]).textContent = `${point.lat.toFixed(5)}, ${point.lng.toFixed(5)}`;
  }

  function resetFormLocation(type) {
    const picker = mapState.pickerMaps[type];
    picker.value = null;
    if (picker.marker) {
      picker.map.removeLayer(picker.marker);
      picker.marker = null;
    }
    const previewMap = {
      school: "schoolLocationPreview",
      bus: "busLocationPreview",
      student: "studentLocationPreview"
    };
    document.getElementById(previewMap[type]).textContent = t("noLocationSelected");
  }

  function renderAll() {
    renderTranslations();
    renderStats();
    renderSchools();
    renderBuses();
    renderStudentsTable();
    populateSelects();
    renderSelectedDetails();
    renderDashboardMap();
    renderDriverView();
    renderParentPortal(false);
    syncSettingsForm();
  }

  function renderTranslations() {
    document.documentElement.lang = state.settings.language;
    document.documentElement.dir = state.settings.language === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      element.setAttribute("placeholder", t(key));
    });
    document.title = t("appTitle");
    document.getElementById("languageToggleBtn").textContent = state.settings.language === "en" ? "AR" : "EN";
    document.getElementById("desktopLanguageBtn").textContent = state.settings.language === "en" ? "AR" : "EN";
    document.getElementById("themeToggleBtn").textContent = state.settings.theme === "dark" ? "☀️" : "🌙";
    document.getElementById("desktopThemeBtn").textContent = state.settings.theme === "dark" ? "☀️" : "🌙";

    const settingsLanguageSelect = document.getElementById("settingsLanguageSelect");
    settingsLanguageSelect.options[0].textContent = "English";
    settingsLanguageSelect.options[1].textContent = "العربية";
    const settingsThemeSelect = document.getElementById("settingsThemeSelect");
    settingsThemeSelect.options[0].textContent = t("light");
    settingsThemeSelect.options[1].textContent = t("dark");
  }

  function renderStats() {
    const cards = [
      { label: t("operationalBuses"), value: state.buses.filter((bus) => bus.healthStatus === "OPERATIONAL").length },
      { label: t("delayedBuses"), value: state.buses.filter((bus) => bus.healthStatus === "DELAYED").length },
      { label: t("outOfServiceBuses"), value: state.buses.filter((bus) => ["OUT_OF_SERVICE", "BROKEN_DOWN"].includes(bus.healthStatus)).length },
      { label: t("absentStudents"), value: state.students.filter((student) => student.attendanceStatus === "ABSENT").length },
      { label: t("boardedStudents"), value: state.students.filter((student) => student.boardingStatus === "BOARDED").length }
    ];

    document.getElementById("statsGrid").innerHTML = cards.map((card) => `
      <article class="stat-card">
        <div class="stat-label">${card.label}</div>
        <div class="stat-value">${card.value}</div>
      </article>
    `).join("");
  }

  function renderSchools() {
    const list = document.getElementById("schoolsList");
    list.innerHTML = state.schools.map((school) => {
      const buses = getBusesBySchoolId(school.id);
      const students = getStudentsBySchoolId(school.id);
      return `
        <article class="school-card" data-school-id="${school.id}">
          <div class="school-card-top">
            <div>
              <div class="school-card-title">${localize(school.name)}</div>
              <div class="meta-stack">
                <span>${localize(school.address)}</span>
                <span>${t("busesCount")}: ${buses.length}</span>
                <span>${t("studentsCount")}: ${students.length}</span>
              </div>
            </div>
            <span class="count-pill">${buses.length}</span>
          </div>
        </article>
      `;
    }).join("");

    list.querySelectorAll("[data-school-id]").forEach((node) => {
      node.addEventListener("click", () => {
        selectSchool(node.dataset.schoolId);
        showView("schools");
      });
    });

    renderSelectedSchoolSection();
  }

  function renderSelectedSchoolSection() {
    const school = getSchoolById(uiState.selectedSchoolId);
    const card = document.getElementById("selectedSchoolCard");
    if (!school) {
      card.classList.add("hidden");
      return;
    }
    const buses = getBusesBySchoolId(school.id);
    card.classList.remove("hidden");
    document.getElementById("selectedSchoolTitle").textContent = localize(school.name);
    document.getElementById("selectedSchoolSubtitle").textContent = localize(school.address);
    document.getElementById("selectedSchoolBuses").innerHTML = buses.length ? buses.map((bus) => `
      <article class="bus-list-card" data-school-bus-id="${bus.id}">
        <div class="card-top">
          <div>
            <div class="bus-list-title">${localize(bus.displayName)} · ${bus.code}</div>
            <div class="meta-stack">
              <span>${t("driverNameLabel")}: ${localize(bus.driver.name)}</span>
              <span>${bus.driver.phone}</span>
            </div>
          </div>
          ${renderBadge(bus.healthStatus, "health")}
        </div>
      </article>
    `).join("") : `<div class="meta-stack">${t("linkedBusListEmpty")}</div>`;

    document.querySelectorAll("[data-school-bus-id]").forEach((node) => {
      node.addEventListener("click", () => selectBus(node.dataset.schoolBusId));
    });
  }

  function renderBuses() {
    const list = document.getElementById("busesList");
    list.innerHTML = state.buses.map((bus) => {
      const school = getSchoolById(bus.schoolId);
      const students = getStudentsByBusId(bus.id);
      return `
        <article class="bus-list-card" data-bus-list-id="${bus.id}">
          <div class="card-top">
            <div>
              <div class="bus-list-title">${localize(bus.displayName)} · ${bus.code}</div>
              <div class="meta-stack">
                <span>${school ? localize(school.name) : "-"}</span>
                <span>${t("driverNameLabel")}: ${localize(bus.driver.name)}</span>
                <span>${t("studentsAssigned")}: ${students.length}</span>
              </div>
            </div>
            ${renderBadge(bus.healthStatus, "health")}
          </div>
        </article>
      `;
    }).join("");

    list.querySelectorAll("[data-bus-list-id]").forEach((node) => {
      node.addEventListener("click", () => {
        selectBus(node.dataset.busListId);
        showView("dashboard");
      });
    });
  }

  function renderStudentsTable() {
    const body = document.getElementById("studentsTableBody");
    const mobile = document.getElementById("studentsMobileList");
    const rows = state.students.map((student) => {
      const school = getSchoolById(student.schoolId);
      const bus = getBusById(student.busId);
      return {
        student,
        school,
        bus,
        row: `
        <tr>
          <td>
            <strong>${localize(student.fullName)}</strong>
            <div class="pickup-tag">${localize(student.pickupAddress)}</div>
          </td>
          <td>${school ? localize(school.name) : "-"}</td>
          <td>${bus ? `${localize(bus.displayName)} · ${bus.code}` : "-"}</td>
          <td>${renderBadge(student.attendanceStatus, "attendance")}</td>
          <td>${renderBadge(student.boardingStatus, "boarding")}</td>
        </tr>
      `,
        card: `
        <article class="student-card">
          <div class="student-card-top">
            <div>
              <div class="student-name">${localize(student.fullName)}</div>
              <div class="meta-stack">
                <span>${school ? localize(school.name) : "-"}</span>
                <span>${bus ? `${localize(bus.displayName)} · ${bus.code}` : "-"}</span>
                <span>${localize(student.pickupAddress)}</span>
              </div>
            </div>
            <div class="meta-stack">
              ${renderBadge(student.attendanceStatus, "attendance")}
              ${renderBadge(student.boardingStatus, "boarding")}
            </div>
          </div>
        </article>
      `
      };
    });
    body.innerHTML = rows.map((entry) => entry.row).join("");
    if (mobile) mobile.innerHTML = rows.map((entry) => entry.card).join("");
  }

  function populateSelects() {
    const schoolOptions = state.schools.map((school) => `<option value="${school.id}">${localize(school.name)}</option>`).join("");
    document.getElementById("busSchoolSelect").innerHTML = schoolOptions;
    document.getElementById("studentSchoolSelect").innerHTML = schoolOptions;

    syncStudentBusOptions();

    const driverBusSelect = document.getElementById("driverBusSelect");
    driverBusSelect.innerHTML = state.buses.map((bus) => `<option value="${bus.id}">${localize(bus.displayName)} · ${bus.code}</option>`).join("");
    if (uiState.driverBusId && state.buses.some((bus) => bus.id === uiState.driverBusId)) {
      driverBusSelect.value = uiState.driverBusId;
    } else if (state.buses[0]) {
      uiState.driverBusId = state.buses[0].id;
      driverBusSelect.value = uiState.driverBusId;
    }

    const parentStudentSelect = document.getElementById("parentStudentSelect");
    parentStudentSelect.innerHTML = state.students.map((student) => `<option value="${student.id}">${localize(student.fullName)}</option>`).join("");
    if (uiState.selectedParentStudentId && state.students.some((student) => student.id === uiState.selectedParentStudentId)) {
      parentStudentSelect.value = uiState.selectedParentStudentId;
    } else if (state.students[0]) {
      uiState.selectedParentStudentId = state.students[0].id;
      parentStudentSelect.value = uiState.selectedParentStudentId;
    }
  }

  function syncStudentBusOptions() {
    const schoolId = document.getElementById("studentSchoolSelect").value || state.schools[0]?.id;
    const buses = getBusesBySchoolId(schoolId);
    const studentBusSelect = document.getElementById("studentBusSelect");
    studentBusSelect.innerHTML = buses.map((bus) => `<option value="${bus.id}">${localize(bus.displayName)} · ${bus.code}</option>`).join("");
    const bus = getBusById(studentBusSelect.value) || buses[0];
    const picker = mapState.pickerMaps.student;
    if (bus && picker.map && !picker.value) picker.map.setView([bus.currentLocation.lat, bus.currentLocation.lng], 13);
  }

  function renderSelectedDetails() {
    const empty = document.getElementById("emptyDetailsState");
    const schoolPanel = document.getElementById("schoolPanelContent");
    const busPanel = document.getElementById("busPanelContent");

    if (uiState.selectedSchoolId) {
      empty.classList.add("hidden");
      busPanel.classList.add("hidden");
      schoolPanel.classList.remove("hidden");
      renderSchoolPanel();
      return;
    }

    if (uiState.selectedBusId) {
      empty.classList.add("hidden");
      schoolPanel.classList.add("hidden");
      busPanel.classList.remove("hidden");
      renderBusPanel();
      return;
    }

    empty.classList.remove("hidden");
    schoolPanel.classList.add("hidden");
    busPanel.classList.add("hidden");
  }

  function renderSchoolPanel() {
    const school = getSchoolById(uiState.selectedSchoolId);
    if (!school) return;
    const buses = getBusesBySchoolId(school.id);
    const students = getStudentsBySchoolId(school.id);
    document.getElementById("schoolPanelName").textContent = localize(school.name);
    document.getElementById("schoolPanelAddress").textContent = localize(school.address);
    document.getElementById("schoolBusCountPill").textContent = String(buses.length);
    document.getElementById("schoolLinkedBusCount").textContent = String(buses.length);
    document.getElementById("schoolStudentCount").textContent = String(students.length);
    document.getElementById("schoolBusListCount").textContent = String(buses.length);

    const list = document.getElementById("schoolLinkedBusList");
    list.innerHTML = buses.length ? buses.map((bus) => `
      <article class="bus-list-card" data-school-panel-bus-id="${bus.id}">
        <div class="card-top">
          <div>
            <div class="bus-list-title">${localize(bus.displayName)} · ${bus.code}</div>
            <div class="meta-stack">
              <span>${t("driverNameLabel")}: ${localize(bus.driver.name)}</span>
              <span>${t("studentsAssigned")}: ${getStudentsByBusId(bus.id).length}</span>
            </div>
          </div>
          ${renderBadge(bus.healthStatus, "health")}
        </div>
      </article>
    `).join("") : `<div class="meta-stack">${t("linkedBusListEmpty")}</div>`;

    list.querySelectorAll("[data-school-panel-bus-id]").forEach((node) => {
      node.addEventListener("click", () => selectBus(node.dataset.schoolPanelBusId));
    });
  }

  function renderBusPanel() {
    const bus = getBusById(uiState.selectedBusId);
    if (!bus) return;
    const school = getSchoolById(bus.schoolId);
    const students = getStudentsByBusId(bus.id);
    document.getElementById("busCodeText").textContent = `${localize(bus.displayName)} · ${bus.code}`;
    document.getElementById("busMetaText").textContent = `${bus.plateNumber} · ${t("driverNameLabel")}: ${localize(bus.driver.name)}`;
    const badge = document.getElementById("busHealthBadge");
    badge.textContent = busStatusLabel(bus.healthStatus);
    badge.className = `status-badge ${healthBadgeClass(bus.healthStatus)}`;
    document.getElementById("panelSchoolName").textContent = school ? localize(school.name) : "-";
    document.getElementById("panelLastSeen").textContent = formatTime(bus.lastSeenAt);
    document.getElementById("panelStudentCount").textContent = String(students.length);
    document.getElementById("panelBusStatusText").textContent = busStatusLabel(bus.healthStatus);
    document.getElementById("assignedCountPill").textContent = String(students.length);

    const healthBtn = document.getElementById("toggleBusHealthBtn");
    healthBtn.textContent = bus.healthStatus === "OUT_OF_SERVICE" || bus.healthStatus === "BROKEN_DOWN" ? t("markOperational") : t("markOutOfService");
    healthBtn.onclick = () => toggleBusHealth(bus.id);

    const delayedBtn = document.getElementById("toggleBusDelayBtn");
    delayedBtn.textContent = bus.healthStatus === "DELAYED" ? t("markOperational") : t("markDelayed");
    delayedBtn.onclick = () => toggleBusDelay(bus.id);

    document.getElementById("centerBusBtn").onclick = () => {
      if (mapState.dashboardMap) mapState.dashboardMap.setView([bus.currentLocation.lat, bus.currentLocation.lng], 14, { animate: true });
    };

    const studentList = document.getElementById("panelStudentList");
    studentList.innerHTML = students.map((student) => `
      <article class="student-card">
        <div class="student-card-top">
          <div>
            <div class="student-name">${localize(student.fullName)}</div>
            <div class="meta-stack">
              <span>${t("gradeLabel")}: ${localize(student.grade)}</span>
              <span>${localize(student.pickupAddress)}</span>
              <span>${t("stopLabel")}: ${bus.stopOrder?.[student.id] || "-"}</span>
            </div>
          </div>
          <div class="meta-stack">
            ${renderBadge(student.attendanceStatus, "attendance")}
            ${renderBadge(student.boardingStatus, "boarding")}
          </div>
        </div>
        <div class="student-card-footer">
          <button class="mini-action-btn" data-toggle-student="${student.id}" type="button">
            ${student.attendanceStatus === "ABSENT" ? t("markAttending") : t("markAbsent")}
          </button>
        </div>
      </article>
    `).join("");

    studentList.querySelectorAll("[data-toggle-student]").forEach((button) => {
      button.addEventListener("click", () => toggleStudentAttendance(button.dataset.toggleStudent));
    });

    renderDashboardRouteForBus(bus);
  }

  function renderDashboardMap() {
    if (!mapState.dashboardMap) return;
    refreshDashboardSchoolMarkers();
    refreshDashboardBusMarkers();
    renderSelectedDetails();
  }

  function refreshDashboardSchoolMarkers() {
    mapState.schoolMarkers.forEach((marker, key) => {
      if (!state.schools.some((school) => school.id === key)) {
        marker.remove();
        mapState.schoolMarkers.delete(key);
      }
    });

    state.schools.forEach((school) => {
      let marker = mapState.schoolMarkers.get(school.id);
      if (!marker) {
        marker = L.marker([school.location.lat, school.location.lng], {
          icon: L.divIcon({
            className: "custom-school-icon",
            html: '<div class="school-marker">🏫</div>',
            iconSize: [42, 42],
            iconAnchor: [21, 21]
          })
        }).addTo(mapState.dashboardMap);
        marker.on("click", () => selectSchool(school.id));
        mapState.schoolMarkers.set(school.id, marker);
      }
      marker.setLatLng([school.location.lat, school.location.lng]);
      const buses = getBusesBySchoolId(school.id);
      marker.bindPopup(`
        <div class="popup-card">
          <strong>${localize(school.name)}</strong>
          <span>${localize(school.address)}</span>
          ${buses.length ? `<ul class="popup-list">${buses.map((bus) => `<li>${localize(bus.displayName)} · ${bus.code}</li>`).join("")}</ul>` : `<span>${t("linkedBusListEmpty")}</span>`}
        </div>
      `);
    });
  }

  function refreshDashboardBusMarkers() {
    mapState.busMarkers.forEach((marker, key) => {
      if (!state.buses.some((bus) => bus.id === key)) {
        marker.remove();
        mapState.busMarkers.delete(key);
      }
    });

    state.buses.forEach((bus) => {
      let marker = mapState.busMarkers.get(bus.id);
      const icon = createBusIcon(bus.healthStatus);
      if (!marker) {
        marker = L.marker([bus.currentLocation.lat, bus.currentLocation.lng], { icon }).addTo(mapState.dashboardMap);
        marker.on("click", () => selectBus(bus.id));
        mapState.busMarkers.set(bus.id, marker);
      }
      marker.setLatLng([bus.currentLocation.lat, bus.currentLocation.lng]);
      marker.setIcon(icon);
      const school = getSchoolById(bus.schoolId);
      marker.bindPopup(`
        <div class="popup-card">
          <strong>${localize(bus.displayName)} · ${bus.code}</strong>
          <span>${school ? localize(school.name) : "-"}</span>
          <span>${busStatusLabel(bus.healthStatus)}</span>
        </div>
      `);
    });
  }

  function renderDashboardRouteForBus(bus) {
    if (!mapState.dashboardMap) return;
    if (mapState.dashboardRouteLayer) {
      mapState.dashboardMap.removeLayer(mapState.dashboardRouteLayer);
      mapState.dashboardRouteLayer = null;
    }
    if (!bus?.route?.length) return;
    mapState.dashboardRouteLayer = L.polyline(bus.route.map((point) => [point.lat, point.lng]), {
      color: state.settings.theme === "dark" ? "#7dd3fc" : "#2563eb",
      weight: 4,
      opacity: 0.75
    }).addTo(mapState.dashboardMap);
  }

  function renderDriverView() {
    const bus = getBusById(uiState.driverBusId);
    const summary = document.getElementById("driverBusSummary");
    const controls = document.getElementById("driverStudentMarkerControls");
    const count = document.getElementById("driverStopsCount");
    clearDriverMapLayers();

    if (!bus) {
      summary.innerHTML = "";
      controls.innerHTML = "";
      count.textContent = "0";
      return;
    }

    const school = getSchoolById(bus.schoolId);
    const students = getStudentsByBusId(bus.id);
    summary.innerHTML = `
      <div class="summary-item"><span class="summary-label">${t("chooseBusStatus")}</span><strong>${busStatusLabel(bus.healthStatus)}</strong></div>
      <div class="summary-item"><span class="summary-label">${t("routeLengthLabel")}</span><strong>${bus.route.length}</strong></div>
      <div class="summary-item"><span class="summary-label">${t("pickupsLabel")}</span><strong>${students.length}</strong></div>
      <div class="summary-item"><span class="summary-label">${t("destinationSchool")}</span><strong>${school ? localize(school.name) : "-"}</strong></div>
    `;

    if (bus.route.length) {
      mapState.driverLayers.route = L.polyline(bus.route.map((point) => [point.lat, point.lng]), {
        color: state.settings.theme === "dark" ? "#a78bfa" : "#4f46e5",
        weight: 4,
        opacity: 0.82
      }).addTo(mapState.driverMap);
    }

    if (school) {
      mapState.driverLayers.school = L.marker([school.location.lat, school.location.lng], {
        icon: L.divIcon({ className: "driver-school-icon", html: '<div class="school-marker">🏫</div>', iconSize: [42, 42], iconAnchor: [21, 21] })
      }).addTo(mapState.driverMap).bindPopup(`<strong>${localize(school.name)}</strong>`);
    }

    mapState.driverLayers.bus = L.marker([bus.currentLocation.lat, bus.currentLocation.lng], { icon: createBusIcon(bus.healthStatus) })
      .addTo(mapState.driverMap)
      .bindPopup(`<strong>${localize(bus.displayName)} · ${bus.code}</strong>`);

    controls.innerHTML = students.map((student) => {
      const color = sessionState[student.id] || defaultMarkerColor(student);
      return `
        <article class="driver-stop-card">
          <div class="student-card-top">
            <div>
              <div class="student-name">${localize(student.fullName)}</div>
              <div class="meta-stack">
                <span>${localize(student.pickupAddress)}</span>
                <span>${t("stopLabel")}: ${bus.stopOrder?.[student.id] || "-"}</span>
              </div>
            </div>
            ${renderBadge(student.boardingStatus, "boarding")}
          </div>
          <div class="driver-color-row">
            <label>
              <span>${t("colorMarker")}</span>
              <input type="color" data-student-color="${student.id}" value="${color}" />
            </label>
            <button class="mini-action-btn" data-focus-driver-student="${student.id}" type="button">${t("focusStudent")}</button>
          </div>
        </article>
      `;
    }).join("");

    count.textContent = String(students.length);

    students.forEach((student) => {
      const color = sessionState[student.id] || defaultMarkerColor(student);
      const marker = L.circleMarker([student.pickupLocation.lat, student.pickupLocation.lng], {
        radius: 10,
        color,
        fillColor: color,
        fillOpacity: 0.82,
        weight: 3
      }).addTo(mapState.driverMap).bindPopup(`
        <div class="popup-card">
          <strong>${localize(student.fullName)}</strong>
          <span>${localize(student.pickupAddress)}</span>
          <span>${t("attendance")}: ${t(statusToTranslationKey(student.attendanceStatus))}</span>
        </div>
      `);
      mapState.driverLayers.homes.push({ id: student.id, marker });
    });

    controls.querySelectorAll("[data-student-color]").forEach((input) => {
      input.addEventListener("input", () => {
        sessionState[input.dataset.studentColor] = input.value;
        persistSessionState();
        renderDriverView();
      });
    });

    controls.querySelectorAll("[data-focus-driver-student]").forEach((button) => {
      button.addEventListener("click", () => {
        const student = state.students.find((item) => item.id === button.dataset.focusDriverStudent);
        if (student) mapState.driverMap.setView([student.pickupLocation.lat, student.pickupLocation.lng], 14, { animate: true });
      });
    });

    const bounds = L.latLngBounds([
      [bus.currentLocation.lat, bus.currentLocation.lng],
      ...(school ? [[school.location.lat, school.location.lng]] : []),
      ...students.map((student) => [student.pickupLocation.lat, student.pickupLocation.lng])
    ]);
    if (bounds.isValid()) mapState.driverMap.fitBounds(bounds.pad(0.18));
  }

  function clearDriverMapLayers() {
    Object.entries(mapState.driverLayers).forEach(([key, layer]) => {
      if (Array.isArray(layer)) {
        layer.forEach((entry) => mapState.driverMap.removeLayer(entry.marker));
        mapState.driverLayers[key] = [];
      } else if (layer) {
        mapState.driverMap.removeLayer(layer);
        mapState.driverLayers[key] = null;
      }
    });
  }

  function renderParentPortal(shouldFit = false) {
    const student = state.students.find((item) => item.id === uiState.selectedParentStudentId) || state.students[0];
    const statusContainer = document.getElementById("parentStatusChips");
    const driverCard = document.getElementById("driverInfoCard");
    const routeCard = document.getElementById("routeInfoCard");
    const alertBanner = document.getElementById("parentAlertBanner");

    clearParentLayers();

    if (!student) {
      statusContainer.innerHTML = `<span class="info-badge badge-neutral">${t("resetParentView")}</span>`;
      driverCard.innerHTML = "";
      routeCard.innerHTML = `<div class="meta-stack">${t("resetParentView")}</div>`;
      alertBanner.classList.add("hidden");
      return;
    }

    const bus = getBusById(student.busId);
    const school = getSchoolById(student.schoolId);
    const chips = [
      renderBadge(student.attendanceStatus, "attendance"),
      renderBadge(student.boardingStatus, "boarding"),
      bus ? renderBadge(bus.healthStatus, "health") : ""
    ].filter(Boolean);
    statusContainer.innerHTML = chips.join("");

    driverCard.innerHTML = bus ? `
      ${infoRow(t("driverNameLabel"), localize(bus.driver.name))}
      ${infoRow(t("driverPhoneLabel"), bus.driver.phone)}
      ${infoRow(t("bus"), `${localize(bus.displayName)} · ${bus.code}`)}
    ` : "";

    routeCard.innerHTML = `
      ${infoRow(t("home"), localize(student.pickupAddress))}
      ${infoRow(t("destinationSchool"), school ? localize(school.name) : "-")}
      ${infoRow(t("routeModeLabel"), t("routeModeValue"))}
      ${infoRow(t("routeEta"), bus ? parentTripPhase(bus, student) : t("waitingForStart"))}
      <div class="meta-stack route-note">${t("startTrackingHint")}</div>
    `;

    if (bus?.route?.length) {
      mapState.parentLayers.route = L.polyline(bus.route.map((point) => [point.lat, point.lng]), {
        color: state.settings.theme === "dark" ? "#34d399" : "#059669",
        weight: 4,
        opacity: 0.8
      }).addTo(mapState.parentMap);
    }

    if (school) {
      mapState.parentLayers.school = L.marker([school.location.lat, school.location.lng], {
        icon: L.divIcon({ className: "parent-school-icon", html: '<div class="school-marker">🏫</div>', iconSize: [42, 42], iconAnchor: [21, 21] })
      }).addTo(mapState.parentMap).bindPopup(`<strong>${localize(school.name)}</strong>`);
    }

    mapState.parentLayers.home = L.marker([student.pickupLocation.lat, student.pickupLocation.lng], {
      icon: L.divIcon({ className: "parent-home-icon", html: '<div class="home-marker">🏠</div>', iconSize: [42, 42], iconAnchor: [21, 21] })
    }).addTo(mapState.parentMap).bindPopup(`<strong>${localize(student.fullName)}</strong><br>${localize(student.pickupAddress)}`);

    if (bus) {
      mapState.parentLayers.bus = L.marker([bus.currentLocation.lat, bus.currentLocation.lng], { icon: createBusIcon(bus.healthStatus) })
        .addTo(mapState.parentMap)
        .bindPopup(`<strong>${localize(bus.displayName)} · ${bus.code}</strong>`);
    }

    if (bus && ["BROKEN_DOWN", "OUT_OF_SERVICE"].includes(bus.healthStatus)) {
      alertBanner.textContent = t("breakdownAlert");
      alertBanner.classList.remove("hidden");
      if (uiState.parentLastAlertedStatus !== bus.healthStatus && state.settings.notifications) showToast(t("breakdownAlert"));
      uiState.parentLastAlertedStatus = bus.healthStatus;
    } else if (bus?.healthStatus === "DELAYED") {
      alertBanner.textContent = t("delayedAlert");
      alertBanner.classList.remove("hidden");
      uiState.parentLastAlertedStatus = bus.healthStatus;
    } else {
      alertBanner.classList.add("hidden");
      uiState.parentLastAlertedStatus = bus?.healthStatus || null;
    }

    if (shouldFit) {
      const bounds = L.latLngBounds([
        [student.pickupLocation.lat, student.pickupLocation.lng],
        ...(school ? [[school.location.lat, school.location.lng]] : []),
        ...(bus ? [[bus.currentLocation.lat, bus.currentLocation.lng]] : [])
      ]);
      if (bounds.isValid()) mapState.parentMap.fitBounds(bounds.pad(0.25));
    }
  }

  function clearParentLayers() {
    Object.keys(mapState.parentLayers).forEach((key) => {
      const layer = mapState.parentLayers[key];
      if (layer) mapState.parentMap.removeLayer(layer);
      mapState.parentLayers[key] = null;
    });
  }

  function infoRow(label, value) {
    return `<div class="info-row"><span>${label}</span><strong>${value}</strong></div>`;
  }

  function renderBadge(status, type) {
    const className = type === "attendance" ? attendanceBadgeClass(status) : boardingOrHealthBadgeClass(status);
    return `<span class="info-badge ${className}">${t(statusToTranslationKey(status))}</span>`;
  }

  function statusToTranslationKey(status) {
    return {
      OPERATIONAL: "operational",
      DELAYED: "delayed",
      OUT_OF_SERVICE: "outOfService",
      BROKEN_DOWN: "brokenDown",
      ATTENDING: "attending",
      ABSENT: "absent",
      NOT_REACHED: "notReached",
      WAITING: "waiting",
      BOARDED: "boarded",
      MISSED: "missed"
    }[status] || status;
  }

  function attendanceBadgeClass(status) {
    return status === "ABSENT" ? "badge-absent" : "badge-attending";
  }

  function boardingOrHealthBadgeClass(status) {
    switch (status) {
      case "OPERATIONAL":
        return "badge-operational";
      case "DELAYED":
      case "WAITING":
        return "badge-delayed";
      case "OUT_OF_SERVICE":
      case "BROKEN_DOWN":
      case "ABSENT":
      case "MISSED":
        return "badge-out-of-service";
      case "BOARDED":
        return "badge-boarded";
      default:
        return "badge-neutral";
    }
  }

  function healthBadgeClass(status) {
    return boardingOrHealthBadgeClass(status);
  }

  function busStatusLabel(status) {
    return t(statusToTranslationKey(status));
  }

  function createBusIcon(healthStatus) {
    const className = healthStatus.toLowerCase().replace(/_/g, "-");
    return L.divIcon({
      className: "custom-bus-icon",
      html: `<div class="bus-marker ${className}">🚌</div>`,
      iconSize: [42, 42],
      iconAnchor: [21, 21]
    });
  }

  function handleSchoolSubmit(event) {
    event.preventDefault();
    const location = mapState.pickerMaps.school.value;
    if (!location) {
      showToast(t("pickSchoolLocation"));
      return;
    }
    state.schools.push({
      id: createId("sch"),
      name: createLocalizedText(document.getElementById("schoolNameInput").value.trim()),
      address: createLocalizedText(document.getElementById("schoolAddressInput").value.trim()),
      location
    });
    persistState();
    event.target.reset();
    resetFormLocation("school");
    populateSelects();
    renderAll();
    showToast(t("schoolSaved"));
  }

  function handleBusSubmit(event) {
    event.preventDefault();
    const startLocation = mapState.pickerMaps.bus.value;
    if (!startLocation) {
      showToast(t("pickBusLocation"));
      return;
    }
    const bus = {
      id: createId("bus"),
      schoolId: document.getElementById("busSchoolSelect").value,
      code: document.getElementById("busCodeInput").value.trim(),
      displayName: createLocalizedText(document.getElementById("busNameInput").value.trim()),
      plateNumber: document.getElementById("busPlateInput").value.trim(),
      healthStatus: "OPERATIONAL",
      driver: {
        name: createLocalizedText(document.getElementById("driverNameInput").value.trim()),
        phone: document.getElementById("driverPhoneInput").value.trim()
      },
      startLocation,
      currentLocation: { ...startLocation },
      routeIndex: 0,
      route: [],
      stopIndices: {},
      schoolArrivalIndex: 0,
      delayTick: 0,
      lastSeenAt: new Date().toISOString()
    };
    state.buses.push(bus);
    recomputeBusRoute(bus.id, false);
    persistState();
    event.target.reset();
    resetFormLocation("bus");
    populateSelects();
    renderAll();
    showToast(t("busSaved"));
  }

  function handleStudentSubmit(event) {
    event.preventDefault();
    const pickupLocation = mapState.pickerMaps.student.value;
    if (!pickupLocation) {
      showToast(t("pickStudentLocation"));
      return;
    }
    const student = {
      id: createId("std"),
      schoolId: document.getElementById("studentSchoolSelect").value,
      busId: document.getElementById("studentBusSelect").value,
      fullName: createLocalizedText(document.getElementById("studentNameInput").value.trim()),
      grade: createLocalizedText(document.getElementById("studentGradeInput").value.trim()),
      pickupAddress: createLocalizedText(document.getElementById("studentAddressInput").value.trim()),
      pickupLocation,
      attendanceStatus: "ATTENDING",
      boardingStatus: "NOT_REACHED"
    };
    state.students.push(student);
    recomputeBusRoute(student.busId, true);
    persistState();
    event.target.reset();
    resetFormLocation("student");
    renderAll();
    showToast(t("studentSaved"));
  }

  function handleSettingsSubmit(event) {
    event.preventDefault();
    state.settings.profile.fullName = document.getElementById("profileNameInput").value.trim();
    state.settings.profile.email = document.getElementById("profileEmailInput").value.trim();
    state.settings.profile.phone = document.getElementById("profilePhoneInput").value.trim();
    state.settings.notifications = document.getElementById("notificationsToggle").checked;
    const nextLanguage = document.getElementById("settingsLanguageSelect").value;
    const nextTheme = document.getElementById("settingsThemeSelect").value;
    persistState();
    applyLanguage(nextLanguage);
    applyTheme(nextTheme);
    showToast(t("settingsSaved"));
  }

  function syncSettingsForm() {
    document.getElementById("profileNameInput").value = state.settings.profile.fullName || "";
    document.getElementById("profileEmailInput").value = state.settings.profile.email || "";
    document.getElementById("profilePhoneInput").value = state.settings.profile.phone || "";
    document.getElementById("settingsLanguageSelect").value = state.settings.language;
    document.getElementById("settingsThemeSelect").value = state.settings.theme;
    document.getElementById("notificationsToggle").checked = Boolean(state.settings.notifications);
  }

  function toggleLanguage() {
    applyLanguage(state.settings.language === "en" ? "ar" : "en");
      }

  function applyLanguage(language) {
    state.settings.language = language === "ar" ? "ar" : "en";
    persistState();
    renderAll();
    closeSidebar();
    setTimeout(invalidateAllMaps, 80);
  }

  function toggleTheme() {
    applyTheme(state.settings.theme === "dark" ? "light" : "dark");
  }

  function applyTheme(theme) {
    state.settings.theme = theme === "dark" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", state.settings.theme === "dark");
    persistState();
    renderTranslations();
    renderDashboardRouteForBus(getBusById(uiState.selectedBusId));
    renderDriverView();
    renderParentPortal(false);
  }

  function resetDemoData() {
    state = clone(DEFAULT_DATA);
    sessionState = {};
    persistSessionState();
    normalizeState();
    persistState();
    resetFormLocation("school");
    resetFormLocation("bus");
    resetFormLocation("student");
    renderAll();
    showToast(t("demoReset"));
  }

  function invalidateAllMaps() {
    [mapState.dashboardMap, mapState.driverMap, mapState.parentMap].forEach((map) => map?.invalidateSize());
    Object.values(mapState.pickerMaps).forEach((picker) => picker.map?.invalidateSize());
  }

  function showView(viewName) {
    uiState.activeView = viewName;
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    const active = document.getElementById(`view-${viewName}`);
    if (active) active.classList.add("active");
    setTimeout(() => {
      invalidateAllMaps();
      if (viewName === "driver") renderDriverView();
      if (viewName === "parent") renderParentPortal(true);
    }, 120);
  }

  function openSidebar() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("sidebarBackdrop").classList.add("show");
    document.body.classList.add("no-scroll");
    document.body.classList.add("sidebar-open"); 
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarBackdrop").classList.remove("show");
    document.body.classList.remove("no-scroll");
    document.body.classList.remove("sidebar-open"); 
  }
  function selectSchool(schoolId) {
    uiState.selectedSchoolId = schoolId;
    uiState.selectedBusId = null;
    renderSelectedSchoolSection();
    renderSelectedDetails();
    const school = getSchoolById(schoolId);
    if (school) mapState.dashboardMap.setView([school.location.lat, school.location.lng], 14, { animate: true });
  }

  function selectBus(busId) {
    uiState.selectedBusId = busId;
    uiState.selectedSchoolId = null;
    renderSelectedDetails();
    renderBuses();
    const bus = getBusById(busId);
    if (bus) mapState.dashboardMap.setView([bus.currentLocation.lat, bus.currentLocation.lng], 14, { animate: true });
    showView("dashboard");
    const activeNav = document.querySelector('.nav-link[data-view="dashboard"]');
    document.querySelectorAll(".nav-link").forEach((btn) => btn.classList.remove("active"));
    if (activeNav) activeNav.classList.add("active");
  }

  function startSimulation() {
    if (simulationTimer) clearInterval(simulationTimer);
    simulationTimer = setInterval(() => {
      state.buses.forEach((bus) => advanceBus(bus));
      persistState();
      refreshDashboardBusMarkers();
      renderStats();
      renderStudentsTable();
      renderSelectedDetails();
      if (uiState.activeView === "driver") renderDriverView();
      if (uiState.activeView === "parent") renderParentPortal(false);
    }, SIMULATION_INTERVAL_MS);
  }

  function advanceBus(bus) {
    if (!Array.isArray(bus.route) || bus.route.length < 2) return;
    if (["OUT_OF_SERVICE", "BROKEN_DOWN"].includes(bus.healthStatus)) return;
    if (bus.healthStatus === "DELAYED") {
      bus.delayTick = (bus.delayTick || 0) + 1;
      if (bus.delayTick % 2 === 1) return;
    }

    const previousIndex = Number(bus.routeIndex || 0);
    const nextIndex = (previousIndex + 1) % bus.route.length;
    bus.routeIndex = nextIndex;
    bus.currentLocation = { ...bus.route[nextIndex] };
    bus.lastSeenAt = new Date().toISOString();

    const wrapped = nextIndex < previousIndex;
    const students = getStudentsByBusId(bus.id);
    if (wrapped) {
      students.forEach((student) => {
        student.boardingStatus = "NOT_REACHED";
      });
    }

    students.forEach((student) => {
      if (student.attendanceStatus === "ABSENT") {
        student.boardingStatus = "NOT_REACHED";
        return;
      }
      const stopIndex = Number(bus.stopIndices?.[student.id] ?? -1);
      if (stopIndex < 0) {
        student.boardingStatus = "NOT_REACHED";
      } else if (nextIndex < stopIndex) {
        student.boardingStatus = "NOT_REACHED";
      } else if (nextIndex === stopIndex) {
        student.boardingStatus = "WAITING";
      } else {
        student.boardingStatus = "BOARDED";
      }
    });
  }

  function recomputeBusRoute(busId, showMessage) {
    const bus = getBusById(busId);
    if (!bus) return;
    const school = getSchoolById(bus.schoolId);
    const students = getStudentsByBusId(bus.id);
    const start = normalizePoint(bus.startLocation || bus.currentLocation, DEFAULT_CENTER_OBJECT());
    bus.startLocation = { ...start };

    const orderedStudents = nearestNeighborOrder(start, students.map((student) => ({
      id: student.id,
      point: normalizePoint(student.pickupLocation, start)
    })));

    bus.stopOrder = {};
    orderedStudents.forEach((entry, index) => {
      bus.stopOrder[entry.id] = index + 1;
    });

    const outboundCheckpoints = [start, ...orderedStudents.map((entry) => entry.point), school ? school.location : start];
    const inboundCheckpoints = [...orderedStudents.map((entry) => entry.point).slice().reverse(), start];
    const routeStops = outboundCheckpoints.concat(inboundCheckpoints);
    const densified = [];
    const stopIndices = {};
    let schoolArrivalIndex = 0;

    for (let i = 0; i < routeStops.length - 1; i += 1) {
      const segment = interpolatePoints(routeStops[i], routeStops[i + 1], 10);
      if (i === 0) densified.push(routeStops[i]);
      segment.forEach((point) => densified.push(point));

      const checkpointIndex = densified.length - 1;
      if (i + 1 <= orderedStudents.length) {
        const studentId = orderedStudents[i].id;
        stopIndices[studentId] = checkpointIndex;
      }
      if (school && i + 1 === orderedStudents.length + 1) {
        schoolArrivalIndex = checkpointIndex;
      }
    }

    bus.route = densified.length ? densified : [start, school ? school.location : start];
    bus.stopIndices = stopIndices;
    bus.schoolArrivalIndex = schoolArrivalIndex;
    bus.routeIndex = Math.min(bus.routeIndex || 0, bus.route.length - 1);
    bus.currentLocation = bus.route[bus.routeIndex] ? { ...bus.route[bus.routeIndex] } : { ...start };
    bus.lastSeenAt = new Date().toISOString();

    if (showMessage) showToast(t("routeOptimized"));
  }

  function nearestNeighborOrder(start, studentPoints) {
    const remaining = [...studentPoints];
    const ordered = [];
    let current = start;
    while (remaining.length) {
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      remaining.forEach((entry, index) => {
        const distance = distanceBetween(current, entry.point);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });
      const [next] = remaining.splice(bestIndex, 1);
      ordered.push(next);
      current = next.point;
    }
    return ordered;
  }

  function interpolatePoints(start, end, steps) {
    const points = [];
    for (let step = 1; step <= steps; step += 1) {
      const ratio = step / steps;
      points.push({
        lat: Number((start.lat + (end.lat - start.lat) * ratio).toFixed(6)),
        lng: Number((start.lng + (end.lng - start.lng) * ratio).toFixed(6))
      });
    }
    return points;
  }

  function distanceBetween(a, b) {
    return Math.hypot(a.lat - b.lat, a.lng - b.lng);
  }

  function parentTripPhase(bus, student) {
    const stopIndex = Number(bus.stopIndices?.[student.id] ?? -1);
    const currentIndex = Number(bus.routeIndex || 0);
    if (stopIndex < 0) return t("waitingForStart");
    if (currentIndex < stopIndex) return t("approachingHome");
    if (currentIndex <= (bus.schoolArrivalIndex || stopIndex)) return t("headingToSchool");
    return t("returnTrip");
  }

  function toggleStudentAttendance(studentId) {
    const student = state.students.find((item) => item.id === studentId);
    if (!student) return;
    student.attendanceStatus = student.attendanceStatus === "ABSENT" ? "ATTENDING" : "ABSENT";
    student.boardingStatus = "NOT_REACHED";
    persistState();
    renderAll();
    showToast(t("studentUpdated"));
  }

  function toggleBusHealth(busId) {
    const bus = getBusById(busId);
    if (!bus) return;
    if (["OUT_OF_SERVICE", "BROKEN_DOWN"].includes(bus.healthStatus)) {
      bus.healthStatus = "OPERATIONAL";
    } else {
      bus.healthStatus = "OUT_OF_SERVICE";
    }
    persistState();
    renderAll();
    showToast(t("busUpdated"));
  }

  function toggleBusDelay(busId) {
    const bus = getBusById(busId);
    if (!bus) return;
    bus.healthStatus = bus.healthStatus === "DELAYED" ? "OPERATIONAL" : "DELAYED";
    persistState();
    renderAll();
    showToast(t("busUpdated"));
  }

  function getSchoolById(id) {
    return state.schools.find((school) => school.id === id) || null;
  }

  function getBusById(id) {
    return state.buses.find((bus) => bus.id === id) || null;
  }

  function getStudentsByBusId(busId) {
    return state.students.filter((student) => student.busId === busId);
  }

  function getStudentsBySchoolId(schoolId) {
    return state.students.filter((student) => student.schoolId === schoolId);
  }

  function getBusesBySchoolId(schoolId) {
    return state.buses.filter((bus) => bus.schoolId === schoolId);
  }

  function createId(prefix) {
    return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
  }

  function formatTime(isoString) {
    if (!isoString) return "-";
    return new Intl.DateTimeFormat(state.settings.language === "ar" ? "ar-SA" : "en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date(isoString));
  }

  function defaultMarkerColor(student) {
    if (student.attendanceStatus === "ABSENT") return "#ef4444";
    if (student.boardingStatus === "BOARDED") return "#22c55e";
    return "#3b82f6";
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }
})();
