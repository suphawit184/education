import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer.jsx';

const Sitemap = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col p-4 md:p-8">

      {/* Header และปุ่มกลับ */}
      <header className="w-full max-w-6xl mx-auto mb-8 pt-4">
        <button
          onClick={() => navigate(-1)}
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

          {/* 1. การวางแผนและโครงสร้าง (Sitemap) - ส่วนที่ถูกอัปเดต */}
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">1. การวางแผนและโครงสร้าง (Sitemap)</h2>
            <p className="mb-4">
              <strong className="text-blue-600">Sitemap (แผนผังเว็บไซต์)</strong> คือ แผนผังที่แสดงโครงสร้างทั้งหมดของเว็บไซต์ เปรียบเสมือน <strong className="font-semibold">สารบัญของหนังสือ</strong> ที่บอกว่าเว็บไซต์นั้นประกอบด้วยหน้าเพจอะไรบ้าง มีความสัมพันธ์เชื่อมโยงกันอย่างไร และสามารถเข้าถึงหน้าต่าง ๆ ได้ผ่านทางลิงก์ไหน
            </p>

            <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-2">ความสำคัญของ Sitemap:</h3>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                <strong>ช่วยในการวางแผนและพัฒนาเว็บไซต์:</strong> ทำให้ผู้พัฒนาเห็นภาพรวมและโครงสร้างทั้งหมด ก่อนที่จะเริ่มสร้างจริง, ช่วยจัดหมวดหมู่เนื้อหาและลดข้อผิดพลาดในการออกแบบโครงสร้าง
              </li>
              <li>
                <strong>เป็นประโยชน์ต่อผู้ใช้งาน (User Experience - UX):</strong> (มักเป็น <strong className="font-medium">HTML Sitemap</strong>) ทำหน้าที่เหมือนสารบัญให้ผู้เข้าชมเว็บไซต์สามารถทำความเข้าใจโครงสร้างและค้นหาหน้าเพจที่ต้องการได้อย่างง่ายดายและรวดเร็ว
              </li>
              <li>
                <strong>สำคัญต่อ Search Engine Optimization (SEO):</strong> (มักเป็น <strong className="font-medium">XML Sitemap</strong>) ช่วยนำทาง Search Engine Bot ให้ค้นพบและทำความเข้าใจโครงสร้างได้อย่างมีประสิทธิภาพ, ช่วยในการจัดทำดัชนี (Indexing) และค้นพบหน้าใหม่หรือหน้าที่อัปเดตได้เร็วขึ้น
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-2">ประเภทของ Sitemap หลัก ๆ:</h3>
            <div className="space-y-4 ml-4">
              <div className="border-l-2 border-blue-400 pl-3">
                <h4 className="font-bold text-lg text-blue-600">HTML Sitemap: (เพื่อผู้ใช้งาน)</h4>
                <p>มักจะแสดงในรูปแบบหน้าเว็บเพจปกติ (เหมือนหน้าสารบัญ) มีชื่อเรียกหน้าเพจและลิงก์ไปยังหน้านั้น ๆ ส่วนใหญ่มักจะจัดวางไว้ที่ส่วนล่าง (Footer) ของเว็บไซต์</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-3">
                <h4 className="font-bold text-lg text-blue-600">XML Sitemap: (เพื่อ Search Engine Bot)</h4>
                <p>เป็นไฟล์ที่อยู่ในรูปแบบ XML ซึ่งรวบรวมรายการ URL ทั้งหมดของเว็บไซต์ Search Engine จะอ่านไฟล์นี้เพื่อทำความเข้าใจโครงสร้างและการจัดลำดับความสำคัญของหน้าเพจ นอกจาก URL แล้ว ยังสามารถใส่ข้อมูลเพิ่มเติม เช่น วันที่อัปเดตล่าสุด (lastmod), ความถี่ในการเปลี่ยนแปลง (changefreq), หรือความสำคัญของหน้านั้น ๆ (priority) (แม้ว่า Google จะให้ความสำคัญกับ priority น้อยลงในปัจจุบัน)</p>
              </div>
            </div>
          </div>

          {/* 2. หลักการออกแบบ UI/UX เบื้องต้น - ส่วนเดิม */}
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

export default Sitemap;