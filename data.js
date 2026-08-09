/* ============================================================
   แก้ไขข้อมูลของคุณตรงนี้ที่เดียว แล้ว commit + push ขึ้น GitHub
   เว็บจะอัปเดตให้อัตโนมัติ (ไม่ต้อง build หรือติดตั้งอะไรเพิ่ม)

   จุดที่มีคอมเมนต์ "⚠" คือจุดที่ควรตรวจสอบ/เติมเองก่อนเผยแพร่จริง
   ============================================================ */

const PORTFOLIO_DATA = {

  // ---------- ข้อมูลส่วนตัว ----------
  profile: {
    name: "นภวิท", // ยืนยันแล้วว่าไม่มีนามสกุล
    title: "นักศึกษาสาขานวัตกรรมธุรกิจดิจิทัล | มองหาโอกาสฝึกงาน/สหกิจศึกษา Data Engineer",
    bio: "นักศึกษาชั้นปีที่ 4 สาขานวัตกรรมธุรกิจดิจิทัล (หลักสูตร 2 ปี) มีความชื่นชอบด้าน Data และกำลังมองหาโอกาสฝึกงาน/สหกิจศึกษาตำแหน่ง Data Engineer เพื่อนำความรู้ด้าน Python และ SQL มาประยุกต์ใช้กับข้อมูลธุรกิจจริง และพร้อมเรียนรู้เทคโนโลยีใหม่ ๆ",
    photoUrl: "", // ⚠ ใส่ลิงก์รูปโปรไฟล์ (เช่น อัปโหลดใส่โฟลเดอร์ images/ ในโปรเจกต์นี้แล้วใช้ path แบบเดียวกับรูปเกียรติบัตรด้านล่าง)
    resumeUrl: "", // ใส่ลิงก์ไฟล์ PDF เรซูเม่ของคุณ (เช่น อัปโหลดขึ้น Google Drive แบบเปิดดูได้ แล้ววางลิงก์ตรงนี้)
    location: "เชียงใหม่", // ตั้งใจใส่แค่จังหวัด ไม่ใส่ที่อยู่เต็มเพื่อความเป็นส่วนตัว
    email: "noppawitsaelao@gmail.com",
    phone: "061-315-2693",
    // ข้อความที่จะพิมพ์วนไปเรื่อย ๆ แบบเทอร์มินัลใต้ตำแหน่งงาน แก้/เพิ่ม/ลบได้ตามใจ
    taglines: [
      'console.log("Hello, Recruiter 👋");',
      'SELECT * FROM skills WHERE domain = "data";',
      "แปลงข้อมูลดิบให้กลายเป็น insight ด้วย Python + SQL",
    ],
  },

  // ---------- ทักษะ ----------
  // category ที่รองรับ: "ทักษะเทคนิค", "เครื่องมือ", "ภาษา", "ทักษะทางสังคม"
  // level ที่รองรับ: "เริ่มต้น", "ปานกลาง", "ชำนาญ", "เชี่ยวชาญ"
  // ⚠ ระดับ (level) ของทักษะเทคนิค/เครื่องมือ/ทักษะทางสังคม ผมตั้งเป็น "ปานกลาง" ให้เป็นค่าเริ่มต้นทั้งหมด
  //    เพราะในเรซูเม่ไม่ได้ระบุระดับความชำนาญแต่ละอย่างไว้ — กรุณาปรับให้ตรงกับความสามารถจริงของคุณ
  skills: [
    // Core Programming
    { name: "Python", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "SQL", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "Java", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "C++", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "C#", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "JavaScript", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "React.js", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "Node.js", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "Dart", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    { name: "Flutter", category: "ทักษะเทคนิค", level: "ปานกลาง" },
    // Databases, Automation, Dev tools
    { name: "Supabase (PostgreSQL)", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "MySQL (XAMPP)", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "Airtable", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "n8n", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "Make.com", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "Postman", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "Git / GitHub", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "Vercel", category: "เครื่องมือ", level: "ปานกลาง" },
    { name: "Visual Studio Code", category: "เครื่องมือ", level: "ปานกลาง" },
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
      school: "วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่",
      degree: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
      field: "เทคโนโลยีสารสนเทศ",
      startDate: "2567",
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
    {
      school: "มหาวิทยาลัยแม่โจ้",
      degree: "ปริญญาตรี (ต่อเนื่อง 2 ปี)",
      field: "นวัตกรรมธุรกิจดิจิทัล (คณะบริหารธุรกิจ)",
      startDate: "2568", // ⚠ ปีที่เริ่มเรียนเป็นการประมาณจากบริบท (ต่อเนื่องจากปวส.ที่จบปี 2568) กรุณายืนยันปีจริงอีกครั้ง
      endDate: "ปัจจุบัน (กำลังศึกษาอยู่)",
      gpa: "3.67",
      logoUrl: "images/logos/maejo-university.png",
      description: "",
    },
  ],

  // ---------- ประวัติการทำงาน / ฝึกงาน ----------
  experience: [
    {
      // ⚠ แก้ปีจาก 2568 (ตามเรซูเม่เดิม) เป็น 2567 แล้ว เพราะเกียรติบัตรที่แนบมาระบุชัดเจนว่าฝึกงานช่วง 1 ก.ค. - 31 ส.ค. 2567
      //    ถ้าปีที่ถูกต้องจริง ๆ คือ 2568 ให้แก้กลับตรงนี้
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
      // ⚠ ชื่อบริษัทนี้ตัวอักษรในไฟล์ resume ไม่ชัดเจน (OCR อ่านได้ไม่แน่นอน) กรุณาตรวจสอบการสะกดชื่อบริษัทให้ถูกต้องอีกครั้ง
      position: "IT Support",
      company: "บริษัท วิริชา คอมพิวเมท จำกัด",
      type: "ฝึกงาน",
      location: "เชียงใหม่",
      startDate: "2566",
      endDate: "2566 (ระยะเวลา 2 เดือน)",
      description: "ซ่อมบำรุงอุปกรณ์คอมพิวเตอร์และอิเล็กทรอนิกส์ • เชื่อมต่อและติดตั้งอุปกรณ์เครือข่าย",
    },
  ],

  // ---------- ผลงาน ----------
  // ⚠ ในเรซูเม่ไม่มีส่วนแสดงผลงาน/โปรเจกต์ไว้ กรุณาเพิ่มผลงานของคุณเองตรงนี้
  //    (แนะนำอย่างยิ่งให้ใส่ เพราะทักษะ React.js, Flutter, Node.js ที่มีอยู่ควรมีผลงานโชว์ประกอบ)
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
      // ⚠ ในภาพต้นฉบับตัวอักษรเลือนอ่านเป็น "ท8ท" — น่าจะหมายถึงโปรแกรม n8n (ตรงกับทักษะที่มีอยู่แล้วในหน้าเว็บ) กรุณายืนยันอีกครั้ง
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
  // platform ที่รองรับ: facebook, instagram, line, github, linkedin, email, phone, youtube, tiktok, twitter, website
  contacts: [
    { platform: "email", label: "", url: "mailto:noppawitsaelao@gmail.com" },
    { platform: "phone", label: "เบอร์หลัก", url: "tel:0613152693" },
    { platform: "phone", label: "เบอร์สำรอง", url: "tel:0623924608" },
    { platform: "line", label: "noppawti", url: "https://line.me/ti/p/~noppawti" },
    { platform: "instagram", label: "@wit_1480", url: "https://instagram.com/wit_1480" },
    // ⚠ Facebook: มีแค่ชื่อที่แสดง "Wit Noppawit" ไม่มีลิงก์โปรไฟล์ ทำให้กดแล้วอาจไม่พาไปหน้าคุณโดยตรง
    //    วิธีหาลิงก์จริง: เปิดโปรไฟล์ Facebook ของคุณ แล้วคัดลอก URL จากแถบที่อยู่เบราว์เซอร์มาแทนตรงนี้
    { platform: "facebook", label: "Wit Noppawit", url: "https://facebook.com/" },
    // ⚠ แนะนำให้เพิ่มลิงก์ GitHub เป็นอย่างน้อย เพราะมีทักษะเขียนโปรแกรมและ Git/GitHub อยู่แล้ว
    // { platform: "github", label: "@username", url: "https://github.com/username" },
    // { platform: "linkedin", label: "", url: "https://linkedin.com/in/username" },
  ],
};

// ห้ามลบบรรทัดนี้ — เชื่อมข้อมูลด้านบนเข้ากับตัวเว็บ
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
