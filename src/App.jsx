import React, { useState } from 'react'; // 👈 เพิ่ม useState
// import html from './html'; // 👈 บรรทัดนี้ถูกคอมเมนต์/ลบออก
import HtmlPage from "./Component/HtmlPage.jsx";
import DesignPage from "./Component/sitemap.jsx";
import Footer from './Component/footer.jsx';

const topics = [
  {
    id: 1,
    title: "1. ความรู้พื้นฐานและโครงสร้าง",
    description: "ทำความเข้าใจว่าเว็บไซต์ทำงานอย่างไร, โครงสร้างของเว็บ, และภาษาพื้นฐาน (HTML/CSS/JS)",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
    borderColor: "border-blue-500"
  },
  {
    id: 2,
    title: "2. การออกแบบเว็บไซต์",
    description: "การวางแผน, ออกแบบโครงสร้าง (Sitemap), และหลักการออกแบบ UI/UX เบื้องต้น",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    borderColor: "border-green-500"
  },
  {
    id: 3,
    title: "3. การสร้างด้วยโปรแกรมภาษา",
    description: "การใช้โค้ด HTML และ CSS สร้างองค์ประกอบจริงของหน้าเว็บ (หัวใจหลักของการสร้าง)",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-800",
    borderColor: "border-indigo-500"
  },
  {
    id: 4,
    title: "4. การใช้งานอนิเมชั่นหรือเอฟเฟกด้วย javascript",
    description: "การใช้งาน javascript ",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-800",
    borderColor: "border-indigo-500"
  },
  {
    id: 5,
    title: "5. การใช้เครื่องมือสำเร็จรูป/CMS",
    description: "เรียนรู้วิธีสร้างเว็บด้วยโปรแกรมสำเร็จรูป (เช่น Dreamweaver) หรือระบบจัดการเนื้อหา (CMS)",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
    borderColor: "border-purple-500"
  },
  {
    id: 6,
    title: "6. การเผยแพร่และทดสอบ",
    description: "การติดตั้ง Web Server จำลอง และการอัพโหลดเว็บไซต์สู่โลกออนไลน์",
    bgColor: "bg-pink-100",
    textColor: "text-pink-800",
    borderColor: "border-pink-500"
  },
];


const TopicCard = ({ title, description, bgColor, textColor, borderColor, onClick }) => {
  return (
    <article 
      onClick={onClick} // 👈 ผูก event คลิก
      className={`
        p-6 rounded-xl shadow-lg 
        transition duration-300 transform hover:scale-[1.03] 
        ${bgColor} border-b-4 ${borderColor}
        cursor-pointer // 👈 เพิ่มเพื่อให้ผู้ใช้รู้ว่าคลิกได้
      `}
    >
      <h3 className={`text-xl font-bold mb-2 ${textColor}`}>
        {title}
      </h3>
      <p className="text-gray-700">
        {description}
      </p>
    </article>
  );
};


// 3. คอมโพเนนต์หลักของแอปพลิเคชัน
const WebsiteSummaryApp = () => {
  // 👈 1. สร้าง State เพื่อเก็บว่ากำลังดู Topic ID ไหนอยู่
  // null = หน้าหลัก
  // 1 = กำลังดู Topic ID 1
  const [activeTopicId, setActiveTopicId] = useState(null); 

  // 👈 2. ใช้เงื่อนไขเพื่อสลับ Component ที่แสดงผล
  if (activeTopicId === 1) {
    // ถ้า State เป็น 1 ให้แสดง Detail Component 
    return (
      <HtmlPage 
        onBack={() => setActiveTopicId(null)} // ส่งฟังก์ชันสำหรับกดกลับหน้าหลัก
      />
    );
  }
  if (activeTopicId === 2) {
    return (
      <DesignPage 
        onBack={() => setActiveTopicId(null)} 
      />
    );
  }
  
  // 3. ถ้า State เป็น null (หน้าหลัก) ให้แสดงรายการหัวข้อ
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-8 text-center shadow-xl">
        <h1 className="text-4xl font-extrabold mb-1">
          📖 สรุปเนื้อหาหนังสือ: การสร้างเว็บไซต์ (Website Creation)
        </h1>
        <p className="text-lg opacity-90 mt-2">
          อ.จุฑาวุฒิ จันทรมาลี และ อ.ทินกร ชุณหภัทรกุล
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-8 flex-grow">
        
        {/* Summary Section */}
        <section id="summary" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-cyan-500 pb-2 mb-8">
            หัวข้อสำคัญ 6 อย่าง
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* การวนซ้ำข้อมูลหัวข้อเพื่อสร้าง Card */}
            {topics.map(topic => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                description={topic.description}
                bgColor={topic.bgColor}
                textColor={topic.textColor}
                borderColor={topic.borderColor}
                // 👈 ผูก onClick เฉพาะ Topic ID 1
                onClick={topic.id === 1 || topic.id === 2
                  ? () => setActiveTopicId(topic.id) : undefined} 
              />
            ))}
          </div>
        </section>

        {/* Practice Area Section */}
        <section id="practice-area" className="mt-10 p-8 bg-yellow-50 border-l-8 border-yellow-400 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-yellow-800 mb-3">
            💻 ส่วนทดลองเขียนโค้ด (React & Tailwind)
          </h2>
          <p className="text-lg text-yellow-700">
            ตอนนี้เว็บไซต์กำลังแสดงผลจากโค้ด React + Tailwind แล้ว! คุณสามารถลองแก้ไขคลาส Tailwind ในโค้ด **`TopicCard`** เพื่อดูการเปลี่ยนแปลงได้เลย
            <br/>
            <span className='font-bold'>***ลองคลิกที่หัวข้อ "1. ความรู้พื้นฐานและโครงสร้าง" เพื่อดูการเปลี่ยนหน้า***</span>
          </p>
        </section>
        
      </main>
      
      <Footer />
    </div>
  );
};

export default WebsiteSummaryApp;