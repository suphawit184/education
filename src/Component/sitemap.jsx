import React from 'react';
import Footer from './footer.jsx';
// Component สำหรับแสดงหน้ารายละเอียดหัวข้อที่ 2
const DesignPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col p-4 md:p-8">
      
      {/* Header และปุ่มกลับ */}
      <header className="w-full max-w-6xl mx-auto mb-8 pt-4">
        <button 
          onClick={onBack} // ฟังก์ชันกลับหน้าหลัก
          className="text-lg font-medium text-green-600 hover:text-green-800 transition duration-150 flex items-center p-2 rounded-lg hover:bg-green-50"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          กลับสู่หน้าสรุปหัวข้อ
        </button>
      </header>
      
      {/* เนื้อหาหลัก */}
      <main className="container mx-auto max-w-6xl flex-grow bg-white p-6 md:p-10 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 border-b pb-2">
          2. การออกแบบเว็บไซต์ (Planning & UI/UX)
        </h1>
        
        <section className="space-y-8 text-gray-700 text-lg">
          <p>
            ขั้นตอนการออกแบบเป็นรากฐานที่กำหนดว่าเว็บไซต์ของคุณจะบรรลุเป้าหมายและใช้งานง่ายเพียงใด 
            การวางแผนที่ดีช่วยลดความผิดพลาดในการเขียนโค้ดและช่วยให้ผู้ใช้ได้รับประสบการณ์ที่ดีที่สุด
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">1. การวางแผนและโครงสร้าง (Sitemap)</h2>
            <p className="mb-2">
              คือการสร้างแผนผังหรือแผนที่ของเว็บไซต์ (Sitemap) เพื่อแสดงความสัมพันธ์และลำดับชั้นของหน้าต่างๆ 
              เปรียบเสมือนสารบัญของเว็บไซต์ที่ช่วยให้เห็นภาพรวมของเนื้อหาทั้งหมด 
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h2 className="text-2xl font-bold text-green-700 mb-2">2. หลักการออกแบบ UI/UX เบื้องต้น</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>UX (User Experience):</strong> เน้นประสบการณ์ของผู้ใช้โดยรวม ความรู้สึกในการใช้งาน และความง่ายในการเข้าถึงข้อมูล
              </li>
              <li>
                <strong>UI (User Interface):</strong> เน้นที่องค์ประกอบที่ผู้ใช้มองเห็นและโต้ตอบด้วย (รูปลักษณ์, ปุ่ม, สี, ฟอนต์) ต้องสวยงามและน่าใช้
              </li>
              <li>
                <strong>Responsive Design:</strong> ออกแบบให้เว็บไซต์ปรับเปลี่ยนหน้าตาได้เหมาะสมกับทุกขนาดหน้าจอ (Desktop, Tablet, Mobile)
              </li>
            </ul>
          </div>
          
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DesignPage;