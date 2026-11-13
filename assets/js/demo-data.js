/**
 * MindSpark Academy - Demo Data & localStorage State Manager
 * Note: All student records, achievements, schedules, enrollments, and fee entries
 * are demonstration data stored locally in the browser via localStorage.
 */

window.MINDSPARK_DATA = {
  programs: [
    // Abacus Programs (Levels 1 - 6)
    {
      id: "abacus-l1",
      type: "Abacus",
      name: "Level 1 – Foundation Abacus",
      shortName: "Beginner Abacus",
      level: "Level 1",
      ageGroup: "5-7",
      ageLabel: "Ages 5–7 (Editable)",
      duration: "12 Weeks",
      frequency: "2 Classes / Week",
      mode: "Online & Offline",
      fee: "$140 / term (Sample)",
      feeAmount: 140,
      image: "ab/kati-hoehl-i3rBo3b9QbA-unsplash.jpg",
      objectives: [
        "Introduction to the Soroban abacus frame and bead values",
        "Finger-gymnastics & two-hand bead manipulation",
        "Single-digit addition and subtraction foundations"
      ],
      description: "A joyful, tactile introduction to numbers where young learners build familiarity with beads, place value, and focused listening."
    },
    {
      id: "abacus-l2",
      type: "Abacus",
      name: "Level 2 – Beginner Abacus",
      shortName: "Junior Abacus",
      level: "Level 2",
      ageGroup: "6-8",
      ageLabel: "Ages 6–8 (Editable)",
      duration: "12 Weeks",
      frequency: "2 Classes / Week",
      mode: "Online & Offline",
      fee: "$150 / term (Sample)",
      feeAmount: 150,
      image: "ab/alexandr-popadin-SgqSVVo7lMo-unsplash.jpg",
      objectives: [
        "Small friend (5-complement) formulas",
        "Two-digit bead calculations with rhythm",
        "Early mental visualization of the abacus"
      ],
      description: "Learners transition from physical counting to structured complement rules and begin visualizing bead movements mentally."
    },
    {
      id: "abacus-l3",
      type: "Abacus",
      name: "Level 3 – Elementary Abacus",
      shortName: "Elementary Abacus",
      level: "Level 3",
      ageGroup: "7-10",
      ageLabel: "Ages 7–10 (Editable)",
      duration: "14 Weeks",
      frequency: "2 Classes / Week",
      mode: "Online & Offline",
      fee: "$165 / term (Sample)",
      feeAmount: 165,
      image: "ab/oleksii-piekhov-IflQrze1wMM-unsplash.jpg",
      objectives: [
        "Big friend (10-complement) & combined formulas",
        "Rapid 2-digit mental addition & subtraction",
        "Flash-card number recall exercises"
      ],
      description: "Strengthens concentration and working memory as students solve multi-row sums using mental imagery."
    },
    {
      id: "abacus-l4",
      type: "Abacus",
      name: "Level 4 – Intermediate Abacus",
      shortName: "Intermediate Abacus",
      level: "Level 4",
      ageGroup: "8-12",
      ageLabel: "Ages 8–12 (Editable)",
      duration: "14 Weeks",
      frequency: "2 Classes / Week",
      mode: "Online & Offline",
      fee: "$180 / term (Sample)",
      feeAmount: 180,
      image: "ab/dong-xie-7ka-Gn4JtQc-unsplash.jpg",
      objectives: [
        "2-digit × 1-digit multiplication on abacus & mentally",
        "3-digit addition & subtraction chains",
        "Timed accuracy & speed drills"
      ],
      description: "Designed for growing confidence with multi-digit operations and structured mental arithmetic speed."
    },
    {
      id: "abacus-l5",
      type: "Abacus",
      name: "Level 5 – Advanced Abacus",
      shortName: "Advanced Abacus",
      level: "Level 5",
      ageGroup: "9-14",
      ageLabel: "Ages 9–14 (Editable)",
      duration: "16 Weeks",
      frequency: "3 Classes / Week",
      mode: "Online",
      fee: "$200 / term (Sample)",
      feeAmount: 200,
      image: "ab/yucel-m-yhVDhfE3-eU-unsplash.jpg",
      objectives: [
        "Multi-digit multiplication & division on Soroban",
        "Decimal place handling & mental Anzan",
        "Competition readiness mock rounds"
      ],
      description: "Prepares students for complex multi-digit mental calculations and regional showcase challenges."
    },
    {
      id: "abacus-l6",
      type: "Abacus",
      name: "Level 6 – Expert Abacus",
      shortName: "Expert Abacus",
      level: "Level 6",
      ageGroup: "10-15",
      ageLabel: "Ages 10–15 (Editable)",
      duration: "16 Weeks",
      frequency: "3 Classes / Week",
      mode: "Online & Offline",
      fee: "$220 / term (Sample)",
      feeAmount: 220,
      image: "ab/math/saad-ahmad-BQLw0OrA6F4-unsplash.jpg",
      objectives: [
        "High-speed Flash Anzan (rapid visual sums)",
        "4-digit operations & multi-step mental chains",
        "Championship coaching & strategy"
      ],
      description: "Our pinnacle abacus level focusing on poise, precision under timed conditions, and mental mastery."
    },

    // Vedic Mathematics Programs
    {
      id: "vedic-1",
      type: "Vedic Maths",
      name: "Number Foundations (Vedic)",
      shortName: "Number Foundations",
      level: "Level 1",
      ageGroup: "7-10",
      ageLabel: "Ages 7–10 (Editable)",
      duration: "10 Weeks",
      frequency: "2 Classes / Week",
      mode: "Online & Offline",
      fee: "$150 / term (Sample)",
      feeAmount: 150,
      image: "ab/math/1750416185.webp",
      objectives: [
        "Base-10 complements & digital roots",
        "Left-to-right mental addition",
        "Pattern recognition in everyday numbers"
      ],
      description: "Introduces flexible number sense and intuitive pattern spotting for elementary learners."
    },
    {
      id: "vedic-2",
      type: "Vedic Maths",
      name: "Basic Calculation Techniques",
      shortName: "Basic Techniques",
      level: "Level 2",
      ageGroup: "8-12",
      ageLabel: "Ages 8–12 (Editable)",
      duration: "12 Weeks",
      frequency: "2 Classes / Week",
      mode: "Online & Offline",
      fee: "$165 / term (Sample)",
      feeAmount: 165,
      image: "ab/math/Vedic-Maths.png",
      objectives: [
        "All from 9 and the last from 10 subtraction",
        "Rapid doubling, halving & rounding strategies",
        "Verification via digit sums"
      ],
      description: "Builds confident mental subtraction and error-checking habits without rote memorization."
    },
    {
      id: "vedic-3",
      type: "Vedic Maths",
      name: "Multiplication Methods",
      shortName: "Multiplication Methods",
      level: "Level 3",
      ageGroup: "9-14",
      ageLabel: "Ages 9–14 (Editable)",
      duration: "12 Weeks",
      frequency: "2 Classes / Week",
      mode: "Online",
      fee: "$175 / term (Sample)",
      feeAmount: 175,
      image: "ab/math/Vedic Maths2.jpg",
      objectives: [
        "Vertically & Crosswise (Urdhva Tiryagbhyam) 2×2 & 3×3",
        "Special multipliers (11, 99, 25, 125)",
        "Base multiplication near 10, 100 & 1000"
      ],
      description: "Transforms multi-digit multiplication into single-line mental steps."
    },
    {
      id: "vedic-4",
      type: "Vedic Maths",
      name: "Division Techniques",
      shortName: "Division Techniques",
      level: "Level 4",
      ageGroup: "10-15",
      ageLabel: "Ages 10–15 (Editable)",
      duration: "12 Weeks",
      frequency: "2 Classes / Week",
      mode: "Online & Offline",
      fee: "$185 / term (Sample)",
      feeAmount: 185,
      image: "ab/math/images.jpg",
      objectives: [
        "Flag method (Dhvajanka) straight division",
        "Nikhilam division near powers of 10",
        "Fraction & percentage mental conversions"
      ],
      description: "Demystifies long division into clean, step-by-step mental workflows."
    },
    {
      id: "vedic-5",
      type: "Vedic Maths",
      name: "Advanced Mental Maths",
      shortName: "Vedic Mathematics",
      level: "Level 5",
      ageGroup: "10-15",
      ageLabel: "Ages 10–15 (Editable)",
      duration: "14 Weeks",
      frequency: "2 Classes / Week",
      mode: "Online",
      fee: "$195 / term (Sample)",
      feeAmount: 195,
      image: "ab/math/pexels-dione-neris-563567049-16825355.jpg",
      objectives: [
        "Squares, cubes, square roots & cube roots",
        "Algebraic pattern shortcuts & linear equations",
        "Structured problem-solving confidence"
      ],
      description: "Ideal for middle-school students seeking versatile calculation strategies for school and olympiads."
    },
    {
      id: "vedic-6",
      type: "Vedic Maths",
      name: "Speed Calculation Practice",
      shortName: "Mental Maths Mastery",
      level: "Level 6",
      ageGroup: "10-15",
      ageLabel: "Ages 10–15 (Editable)",
      duration: "14 Weeks",
      frequency: "3 Classes / Week",
      mode: "Online & Offline",
      fee: "$210 / term (Sample)",
      feeAmount: 210,
      image: "ab/math/geralt-geometry-1044090_1920.jpg",
      objectives: [
        "Combined Abacus-Vedic hybrid speed drills",
        "Timed 60-second sprint rounds",
        "Competitive exam strategy & calm focus"
      ],
      description: "Combines speed drills with analytical accuracy for confident test and competition performance."
    }
  ],

  competitions: [
    {
      id: "comp-abacus-2026",
      name: "MindSpark Annual Abacus Championship (Demo)",
      date: "Dec 14, 2026",
      deadline: "Dec 05, 2026",
      level: "Levels 1–6",
      eligibility: "Ages 5–15 (Enrolled & Guest Demo)",
      mode: "Hybrid (Center & Live Online)",
      image: "ab/gvz-42-z47okydJjGs-unsplash.jpg",
      summary: "Friendly multi-round abacus & mental visualization championship celebrating accuracy and steady focus."
    },
    {
      id: "comp-mental-2026",
      name: "Winter Mental Maths Challenge (Demo)",
      date: "Jan 18, 2027",
      deadline: "Jan 10, 2027",
      level: "Levels 2–5",
      eligibility: "Ages 7–14",
      mode: "Live Online Arena",
      image: "ab/math/pexels-artempodrez-8087931.jpg",
      summary: "Timed mental arithmetic sprints designed to build confidence in a supportive, encouraging format."
    },
    {
      id: "comp-vedic-2027",
      name: "Vedic Maths Pattern & Speed Cup (Demo)",
      date: "Feb 22, 2027",
      deadline: "Feb 12, 2027",
      level: "Vedic Levels 1–6",
      eligibility: "Ages 8–15",
      mode: "In-Center Showcase",
      image: "ab/math/Why-Vedic-Maths-is-Changing-the-Way-Students-Learn-Mathematics.jpg",
      summary: "Creative calculation challenge highlighting multi-digit shortcuts, squares, and number patterns."
    },
    {
      id: "comp-sprint-2027",
      name: "60-Second Speed Calculation Event (Demo)",
      date: "Mar 15, 2027",
      deadline: "Mar 05, 2027",
      level: "All Levels",
      eligibility: "Ages 6–15",
      mode: "Online Timed Portal",
      image: "ab/math/pexels-mikhail-nilov-8923996.jpg",
      summary: "Fast-paced, age-bracketed calculation rounds where every participant earns a digital milestone badge."
    }
  ],

  leaderboard: [
    { rank: 1, studentId: "MS-2026-104 (Aarav S.)", level: "Level 5 – Advanced Abacus", score: 98, time: "01m 42s" },
    { rank: 2, studentId: "MS-2026-118 (Maya R.)", level: "Vedic Level 5", score: 96, time: "01m 49s" },
    { rank: 3, studentId: "MS-2026-089 (Zaid K.)", level: "Level 4 – Intermediate Abacus", score: 95, time: "01m 55s" },
    { rank: 4, studentId: "MS-2026-132 (Chloe T.)", level: "Level 3 – Elementary Abacus", score: 94, time: "02m 04s" },
    { rank: 5, studentId: "MS-2026-147 (Liam P.)", level: "Vedic Level 3", score: 92, time: "02m 11s" },
    { rank: 6, studentId: "MS-2026-163 (Noor A.)", level: "Level 2 – Beginner Abacus", score: 91, time: "02m 18s" }
  ],

  instructors: [
    {
      name: "Ananya Deshmukh (Sample Profile)",
      role: "Lead Abacus Educator",
      qualification: "M.Sc. Mathematics • 9+ Years Teaching",
      specialty: "Mental Anzan & Early Childhood Number Sense",
      initials: "AD",
      color: "#5736A8",
      photo: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Rohan Kulkarni (Sample Profile)",
      role: "Senior Vedic Maths Mentor",
      qualification: "B.Tech, Certified Vedic Maths Coach",
      specialty: "Rapid Multiplication & Olympiad Problem Solving",
      initials: "RK",
      color: "#FF786B",
      photo: "https://images.pexels.com/photos/7983621/pexels-photo-7983621.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Elena Vance (Sample Profile)",
      role: "Concentration & Speed Coach",
      qualification: "M.Ed. Cognitive Learning",
      specialty: "Working Memory Games & Competition Poise",
      initials: "EV",
      color: "#FFC83D",
      photo: "https://images.pexels.com/photos/8423069/pexels-photo-8423069.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],

  testimonials: [
    {
      parent: "Priya Nair (Demo Review)",
      childInfo: "Parent of Aarav • Level 4 Abacus",
      photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "Aarav used to hesitate with simple subtraction. After two terms of MindSpark's structured bead visualization, he genuinely looks forward to math practice."
    },
    {
      parent: "David & Sarah Chen (Demo Review)",
      childInfo: "Parents of Chloe • Vedic Maths Level 2",
      photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "The weekly parent progress notes make it so easy to see what Chloe is practicing. Her focus during homework has noticeably improved."
    },
    {
      parent: "Fatima Al-Mansoor (Demo Review)",
      childInfo: "Parent of Zaid • Level 3 Abacus",
      photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "Warm instructors, small groups, and zero pressure. Zaid loved participating in his first winter demo challenge!"
    },
    {
      parent: "Marcus Bennett (Demo Review)",
      childInfo: "Parent of Liam • Foundation Abacus",
      photo: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "The interactive practice games keep learning playful without feeling noisy. Great balance of structure and encouragement."
    }
  ]
};

/* ==========================================================================
   DEMO STATE MANAGER (localStorage)
   ========================================================================== */
window.MindSparkStore = {
  KEYS: {
    THEME: "ms_theme",
    DIR: "ms_dir",
    AUTH: "ms_demo_auth",
    CHILDREN: "ms_demo_children",
    ENROLLMENTS: "ms_demo_enrollments",
    COMPETITIONS: "ms_demo_comp_regs",
    PAYMENTS: "ms_demo_payments",
    NOTIFICATIONS: "ms_demo_notifications",
    SCHEDULES: "ms_demo_schedules"
  },

  initDefaults() {
    if (!localStorage.getItem(this.KEYS.AUTH)) {
      localStorage.setItem(this.KEYS.AUTH, JSON.stringify({
        isLoggedIn: false,
        parentName: "Meera Kapoor (Demo Parent)",
        email: "parent@mindspark.demo",
        phone: "+1 (555) 234-8910",
        city: "Austin, TX (Sample)",
        joined: "Sep 2026"
      }));
    }

    if (!localStorage.getItem(this.KEYS.CHILDREN)) {
      localStorage.setItem(this.KEYS.CHILDREN, JSON.stringify([
        {
          id: "child-1",
          name: "Aarav Kapoor (Demo)",
          age: 9,
          program: "Level 4 – Intermediate Abacus",
          level: "Level 4",
          status: "Active",
          progress: 78,
          accuracy: 94,
          weeklyHours: 4.5,
          feedback: "Great improvement in 2-digit mental multiplication chains! Keep practicing 10 minutes daily."
        },
        {
          id: "child-2",
          name: "Diya Kapoor (Demo)",
          age: 7,
          program: "Level 2 – Beginner Abacus",
          level: "Level 2",
          status: "Active",
          progress: 64,
          accuracy: 91,
          weeklyHours: 3.2,
          feedback: "Very steady bead movement on small-friend complements. Ready for mental visualization drills."
        }
      ]));
    }

    if (!localStorage.getItem(this.KEYS.ENROLLMENTS)) {
      localStorage.setItem(this.KEYS.ENROLLMENTS, JSON.stringify([
        {
          ref: "ENR-2026-401",
          childName: "Aarav Kapoor (Demo)",
          programName: "Level 4 – Intermediate Abacus",
          level: "Level 4",
          mode: "Online",
          schedule: "Tue & Thu • 5:00 PM",
          fee: "$180",
          status: "Enrolled (Demo)",
          date: "Oct 02, 2026"
        },
        {
          ref: "ENR-2026-418",
          childName: "Diya Kapoor (Demo)",
          programName: "Level 2 – Beginner Abacus",
          level: "Level 2",
          mode: "Offline Center",
          schedule: "Sat & Sun • 10:30 AM",
          fee: "$150",
          status: "Enrolled (Demo)",
          date: "Oct 10, 2026"
        }
      ]));
    }

    if (!localStorage.getItem(this.KEYS.SCHEDULES)) {
      localStorage.setItem(this.KEYS.SCHEDULES, JSON.stringify([
        { id: "sch-1", title: "Intermediate Abacus – Speed Drills", child: "Aarav Kapoor (Demo)", instructor: "Ananya Deshmukh", date: "2026-11-12", time: "5:00 PM – 5:50 PM", mode: "Online Live", status: "Upcoming" },
        { id: "sch-2", title: "Beginner Abacus – 5-Complement Practice", child: "Diya Kapoor (Demo)", instructor: "Elena Vance", date: "2026-11-14", time: "10:30 AM – 11:20 AM", mode: "Center Room B", status: "Upcoming" },
        { id: "sch-3", title: "Mental Anzan Weekly Review", child: "Aarav Kapoor (Demo)", instructor: "Ananya Deshmukh", date: "2026-11-17", time: "5:00 PM – 5:50 PM", mode: "Online Live", status: "Upcoming" },
        { id: "sch-4", title: "Vedic Patterns Intro Workshop", child: "Aarav Kapoor (Demo)", instructor: "Rohan Kulkarni", date: "2026-11-07", time: "4:00 PM – 4:50 PM", mode: "Online Live", status: "Completed" },
        { id: "sch-5", title: "Bead Finger-Gym & Recall", child: "Diya Kapoor (Demo)", instructor: "Elena Vance", date: "2026-11-08", time: "10:30 AM – 11:20 AM", mode: "Center Room B", status: "Completed" }
      ]));
    }

    if (!localStorage.getItem(this.KEYS.COMPETITIONS)) {
      localStorage.setItem(this.KEYS.COMPETITIONS, JSON.stringify([
        {
          id: "creg-1",
          compId: "comp-abacus-2026",
          compName: "MindSpark Annual Abacus Championship (Demo)",
          childName: "Aarav Kapoor (Demo)",
          level: "Level 4",
          date: "Dec 14, 2026",
          status: "Registered (Demo)"
        }
      ]));
    }

    if (!localStorage.getItem(this.KEYS.PAYMENTS)) {
      localStorage.setItem(this.KEYS.PAYMENTS, JSON.stringify([
        { txId: "DEMO-TXN-8821", child: "Aarav Kapoor (Demo)", program: "Level 4 – Intermediate Abacus", date: "Oct 02, 2026", amount: 180, status: "Paid (Demo)" },
        { txId: "DEMO-TXN-8845", child: "Diya Kapoor (Demo)", program: "Level 2 – Beginner Abacus", date: "Oct 10, 2026", amount: 150, status: "Paid (Demo)" },
        { txId: "DEMO-TXN-8902", child: "Aarav Kapoor (Demo)", program: "Championship Prep Kit (Sample)", date: "Due Dec 01, 2026", amount: 35, status: "Pending (Demo)" }
      ]));
    }

    if (!localStorage.getItem(this.KEYS.NOTIFICATIONS)) {
      localStorage.setItem(this.KEYS.NOTIFICATIONS, JSON.stringify([
        { id: "n-1", type: "Class Reminder", title: "Intermediate Abacus class starts today at 5:00 PM", time: "2 hours ago", read: false },
        { id: "n-2", type: "Progress Update", title: "Aarav achieved 94% accuracy in Weekly Speed Drill #6", time: "Yesterday", read: false },
        { id: "n-3", type: "Competition", title: "Annual Abacus Championship demo registration confirmed", time: "3 days ago", read: true },
        { id: "n-4", type: "Fee Reminder", title: "Sample upcoming fee due Dec 01, 2026 ($35 Demo)", time: "5 days ago", read: true }
      ]));
    }
  },

  get(key) {
    this.initDefaults();
    try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
  },

  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }
};

window.MindSparkStore.initDefaults();

