const PORTFOLIO_DATA = {

  // ---------- ข้อมูลส่วนตัว ----------
  profile: {
    name: "นภวิท",
    title: "นักศึกษาสาขานวัตกรรมธุรกิจดิจิทัล",
    bio: "นักศึกษาชั้นปีที่ 4 สาขานวัตกรรมธุรกิจดิจิทัล (หลักสูตร 2 ปี) สนใจงานสาย Backend Development เป็นพิเศษ มีพื้นฐาน Node.js, Python และ SQL ทั้งการออกแบบฐานข้อมูล (MySQL) และการเชื่อมต่อ API กำลังมองหาโอกาสฝึกงานตำแหน่ง Backend Developer เพื่อฝึกฝนการสร้างระบบหลังบ้านจริงในสภาพแวดล้อมการทำงานจริง และพร้อมเรียนรู้เทคโนโลยีใหม่ ๆ อยู่เสมอ",
    photoUrl: "images/profile/img01.jpg",
    resumeUrl: "https://drive.google.com/file/d/1Sa3UOhYh7-IH_01sBbq-bmWW-D6Ub79T/view?usp=sharing",
    location: "อำเภอสันทราย จังหวัดเชียงใหม่",
    email: "noppawitsaelao@gmail.com",
    phone: "061-315-2693",

    taglines: [
      'const role = "Backend Developer Intern";',
      "พัฒนาระบบหลังบ้าน เปลี่ยนข้อมูลให้กลายเป็น API ที่มีประสิทธิภาพ",
      'SELECT * FROM developer WHERE role = "Backend Intern";',
      "ออกแบบฐานข้อมูลและ API ด้วย Node.js, SQL",
      '{"status": 200, "message": "Ready to handle your data"}',
      "ออกแบบโครงสร้างฐานข้อมูล SQL และจัดการข้อมูลอย่างเป็นระบบ",
      'await connectDatabase({ scalable: true, secure: true });',
      "จัดการ Data และสร้างระบบ Automate Workflows อย่างไร้รอยต่อ",
      'def optimize_backend(): return "Fast & Reliable"',
      "สร้างรากฐานระบบที่มั่นคงด้วย Node.js และ Python",
      'app.listen(port, () => console.log("Backend is running..."));',
      "พร้อมเรียนรู้การจัดการ Cloud Database และการทำงานกับระบบจริง",
    ],
  },
  skills: [
    // Core Programming (เรียงให้ทักษะที่เกี่ยวกับ Backend ขึ้นก่อน)
    { name: "Node.js", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "Python", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "SQL", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "JavaScript", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "Java", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "C++", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "C#", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "React.js", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "Dart", category: "ทักษะเทคนิค", level: "เริ่มต้น" },
    { name: "Flutter", category: "ทักษะเทคนิค", level: "เริ่มต้น" },
    // Databases, API, Dev tools (เรียงให้เครื่องมือที่เกี่ยวกับ Backend ขึ้นก่อน)
    { name: "Supabase (PostgreSQL)", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "MySQL (XAMPP)", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "Postman", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "Git / GitHub", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "Vercel", category: "เครื่องมือ", level: "เริ่มต้น" },
    { name: "Visual Studio Code", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "n8n", category: "เครื่องมือ", level: "เริ่มต้น" },
    { name: "Make.com", category: "เครื่องมือ", level: "เริ่มต้น" },
    { name: "Airtable", category: "เครื่องมือ", level: "เริ่มต้น" },
    { name: "Figma", category: "เครื่องมือ", level: "ปานกลาง" },
    // Languages
    { name: "ภาษาไทย", category: "ภาษา", level: "เชี่ยวชาญ" },
    { name: "ภาษาอังกฤษ", category: "ภาษา", level: "เริ่มต้น" },
    { name: "ภาษาจีนกลาง", category: "ภาษา", level: "เริ่มต้น" },
    // Soft skills
    { name: "Fast Learner", category: "ทักษะทางสังคม", level: "ปานกลาง" },
    { name: "Adaptability", category: "ทักษะทางสังคม", level: "ปานกลาง" },
    { name: "Problem-Solving", category: "ทักษะทางสังคม", level: "ปานกลาง" },
    { name: "Teamwork", category: "ทักษะทางสังคม", level: "ปานกลาง" },
  ],

  // ---------- ประวัติการศึกษา ----------
  education: [
    {
      school: "มหาวิทยาลัยแม่โจ้",
      degree: "ปริญญาตรี (ต่อเนื่อง 2 ปี)",
      field: "นวัตกรรมธุรกิจดิจิทัล (คณะบริหารธุรกิจ)",
      startDate: "2568",
      endDate: "ปัจจุบัน (กำลังศึกษาอยู่)",
      gpa: "3.67",
      logoUrl: "images/logos/maejo-university.png",
      description: "",
    },
    {
      school: "วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่",
      degree: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
      field: "เทคโนโลยีสารสนเทศ",
      startDate: "2566",
      endDate: "2568",
      gpa: "4.00",
      logoUrl: "images/logos/lanna-polytechnic.png",
      description: "",
    },
    {
      school: "วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่",
      degree: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
      field: "เทคโนโลยีสารสนเทศ",
      startDate: "2563",
      endDate: "2566",
      gpa: "3.93",
      logoUrl: "images/logos/lanna-polytechnic.png",
      description: "",
    },
  ],

  // ---------- ประวัติการทำงาน / ฝึกงาน ----------
  experience: [
    {
      position: "IT Support",
      company: "สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต 1",
      type: "ฝึกงาน",
      location: "เชียงใหม่",
      startDate: "1 ก.ค. 2567",
      endDate: "31 ส.ค. 2567",
      description: "ซ่อมบำรุงอุปกรณ์คอมพิวเตอร์และอิเล็กทรอนิกส์ • พัฒนาระบบแจ้งซ่อมคอมพิวเตอร์และเครือข่าย (Report Repair) • ผลการฝึกงานอยู่ในระดับดีเยี่ยม",
    },
    {
      position: "IT Support",
      company: "บริษัท เคเค ซัพพลาย การวิศวกรรม จำกัด",
      type: "ฝึกงาน",
      location: "เชียงใหม่",
      startDate: "2567",
      endDate: "2567 (ระยะเวลา 2 เดือน)",
      description: "ซ่อมบำรุงอุปกรณ์มอเตอร์ไฟฟ้าและอิเล็กทรอนิกส์ • ดูแลเว็บไซต์ • เชื่อมต่อและติดตั้งอุปกรณ์เครือข่ายและ IOT",
    },
    {
      position: "IT Support",
      company: "บริษัท วิรชา คอมพิวเมท จำกัด",
      type: "ฝึกงาน",
      location: "เชียงใหม่",
      startDate: "2566",
      endDate: "2566 (ระยะเวลา 2 เดือน)",
      description: "ซ่อมบำรุงอุปกรณ์คอมพิวเตอร์และอิเล็กทรอนิกส์ • เชื่อมต่อและติดตั้งอุปกรณ์เครือข่าย",
    },
  ],
  // {
  //   title: "",
  //   imageUrl: "",
  //   repoUrl: "",
  //   demoUrl: "",
  //   tags: ["", "", ""],
  //   description: "",
  // },
  projects: [],

  // ---------- เกียรติบัตร / รางวัล ----------
  // type: "certificate" (เกียรติบัตร) หรือ "award" (รางวัล)
  certificates: [
    {
      title: "ผ่านการฝึกประสบการณ์วิชาชีพ ระดับดีเยี่ยม",
      type: "certificate",
      issuer: "สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต 1",
      date: "31 ส.ค. 2567",
      imageUrl: "images/certificates/cert-internship-excellent.jpg",
      link: "",
    },
    {
      title: "ผู้พัฒนาระบบแจ้งซ่อมคอมพิวเตอร์และเครือข่าย (Report Repair)",
      type: "certificate",
      issuer: "สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต 1",
      date: "31 ส.ค. 2567",
      imageUrl: "images/certificates/cert-report-repair-system.jpg",
      link: "",
    },
    {
      title: "อบรมหลักสูตร AI Automation โดยโปรแกรม n8n",
      type: "certificate",
      issuer: "บริษัท สเปราติง เทค (ประเทศไทย) จำกัด ร่วมกับ สำนักบริหารและพัฒนาวิชาการ มหาวิทยาลัยแม่โจ้",
      date: "18 ม.ค. 2569",
      imageUrl: "images/certificates/cert-ai-automation-n8n.jpg",
      link: "",
    },
    {
      title: "อบรมหลักสูตร AI Automation โดยโปรแกรม Make.com",
      type: "certificate",
      issuer: "บริษัท สเปราติง เทค (ประเทศไทย) จำกัด ร่วมกับ สำนักบริหารและพัฒนาวิชาการ มหาวิทยาลัยแม่โจ้",
      date: "17 ม.ค. 2569",
      imageUrl: "images/certificates/cert-ai-automation-make.jpg",
      link: "",
    },
  ],

  // ---------- ช่องทางติดต่อ ----------
  contacts: [
    { platform: "email", label: "email", url: "mailto:noppawitsaelao@gmail.com" },
    { platform: "phone", label: "0613152693", url: "tel:0613152693" },
    { platform: "phone", label: "0623924608", url: "tel:0623924608" },
    { platform: "line", label: "noppawti", url: "https://line.me/ti/p/~noppawti" },
    { platform: "instagram", label: "@wit_1480", url: "https://instagram.com/wit_1480" },
    { platform: "facebook", label: "Wit Noppawit", url: "https://www.facebook.com/wit1480/?locale=th_TH" },
    { platform: "github", label: "noppawit1480", url: "https://github.com/noppawit1480-byte" },
  ],
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;