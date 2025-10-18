import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer.jsx';

const Crationhtmlcss = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col p-4 md:p-8">

      {/* Header และปุ่มกลับ */}
      <header className="w-full max-w-6xl mx-auto mb-8 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="text-lg font-medium text-indigo-600 hover:text-indigo-800 transition duration-150 flex items-center p-2 rounded-lg hover:bg-indigo-50"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          กลับสู่หน้าสรุปหัวข้อ
        </button>
      </header>

      {/* เนื้อหาหลัก */}
      <main className="container mx-auto max-w-6xl flex-grow bg-white p-6 md:p-10 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 border-b pb-2">
          3. การสร้างด้วยโปรแกรมภาษา (HTML & CSS)
        </h1>

        <section className="space-y-8 text-gray-700 text-lg">
          <p>
            ไฟล์นี้จำลองหน้ารายละเอียดสำหรับหัวข้อที่ 3 ครับ การสร้างเว็บไซต์จริงต้องอาศัยการเขียนโค้ด
            <strong>HTML</strong> เพื่อวางโครงสร้าง และ <strong>CSS</strong> เพื่อจัดรูปแบบ
          </p>

          <hr className="border-t border-gray-200" />

          {/* ส่วนเนื้อหา HTML ที่เพิ่ม Tag Code และตัวอย่างการใช้ */}
          <h2 className="text-3xl font-bold text-indigo-600 pt-4">การใช้ HTML</h2>
          <p>
            เน้นการใช้ <strong>Semantic HTML</strong> เพื่อให้โครงสร้างเว็บมีความหมายและเป็นมิตรต่อ Search Engine
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">โครงสร้างพื้นฐานของเอกสาร HTML (Boilerplate)</h3>
          <p>โค้ดพื้นฐานที่พร้อมเริ่มต้นใช้งาน:</p>
          <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre><code>
              {`<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ชื่อเว็บไซต์ของคุณ</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <h1>ยินดีต้อนรับสู่เว็บไซต์</h1>
    </body>
</html>
`}
            </code></pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">HTML Tags ที่สำคัญและตัวอย่างการใช้งาน</h3>

          <h4 className="font-bold text-xl text-indigo-700">1. Semantic & Structure Tags</h4>
          <p>แท็กที่ให้ความหมายกับโครงสร้างของหน้าเว็บ:</p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-300">
            <pre><code>
              {`<header>...</header> 

<nav> 
  <a href="/">หน้าแรก</a>
  <a href="/about">เกี่ยวกับเรา</a>
</nav>

<main> 
  <section>
    <h2>หัวข้อของเนื้อหาย่อย</h2>
    <article>...</article>
  </section>
</main>

<footer>
  <p>&copy; 2025 เว็บไซต์ของฉัน</p>
</footer>
`}
            </code></pre>
          </div>

          <h4 className="font-bold text-xl text-indigo-700 mt-4">2. Text & Content Tags</h4>
          <p>แท็กที่ใช้สร้างเนื้อหาและข้อความ:</p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-300">
            <pre><code>
              {`<h1>หัวข้อใหญ่สุด</h1>
<p>ย่อหน้าข้อความธรรมดา</p>
<a href="https://example.com">ลิงก์ไปยังเว็บไซต์ภายนอก</a>
<img src="image.jpg" alt="คำอธิบายรูปภาพ" /> 
<button type="submit">ส่งข้อมูล</button>
`}
            </code></pre>
          </div>


          <hr className="border-t border-gray-200" />

          {/* ส่วนเนื้อหา CSS ที่มีการจัดรูปแบบตัวอย่างโค้ด */}
          <h2 className="text-3xl font-bold text-teal-600 pt-4">การใช้ CSS (Cascading Style Sheets)</h2>

          <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">คุณสมบัติ (Properties) CSS ที่สำคัญ</h3>
          <p>
            คุณสมบัติหลักที่ใช้ในการควบคุมรูปลักษณ์และเลย์เอาต์ของเว็บไซต์:
          </p>
          <div className="space-y-2">
            <h4 className="font-bold text-xl text-teal-700">1. การจัดวาง (Layout & Positioning)</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><code>display</code>: กำหนดรูปแบบการแสดงผล (เช่น <code>flex</code>, <code>grid</code>)</li>
              <li><code>position</code>: กำหนดวิธีการจัดตำแหน่ง (เช่น <code>relative</code>, <code>absolute</code>)</li>
              <li><code>margin</code>, <code>padding</code>: กำหนดระยะห่างภายนอกและภายใน</li>
            </ul>
          </div>

          <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">ตัวอย่างโค้ด CSS พื้นฐาน</h4>
          <p>โค้ด CSS ที่กำหนดรูปแบบให้กับปุ่ม:</p>
          <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre><code>
              {`/* กำหนดรูปแบบให้กับปุ่มที่มีคลาส .primary-btn */
.primary-btn {
  background-color: #4f46e5; /* สีพื้นหลัง */
  color: white; /* สีข้อความ */
  padding: 10px 20px; /* ระยะห่างภายใน */
  border: none;
  border-radius: 8px; /* ความโค้งมน */
  font-weight: bold;
}
`}
            </code></pre>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Crationhtmlcss;