import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import WebsiteSummaryApp from './Component/home.jsx';
import HtmlPage from "./Component/htmlpage.jsx";
import Sitemap from "./Component/sitemap.jsx";
import Crationhtmlcss from './Component/crationhtmlcss.jsx';

//  สร้าง Placeholder สำหรับหน้า About และ NotFound (หากไม่มีไฟล์จริง)
const About = () => <div className="p-8 text-center text-xl min-h-screen"><h2>เกี่ยวกับเรา</h2><p>นี่คือหน้าตัวอย่างสำหรับ /about</p></div>;
const NotFound = () => <div className="p-8 text-center text-4xl min-h-screen text-red-600"><h2>404 - ไม่พบหน้า (Not Found)</h2></div>;

function App() {
  return (
    <div>
      {/*  สามารถสร้างแถบนำทางหลักได้ที่นี่ */}
      {/*<nav className="bg-gray-800 p-4 text-white">
        <Link to="/" className="text-lg font-bold hover:text-cyan-400 mr-4">หน้าหลัก</Link>
        <Link to="/about" className="text-lg font-bold hover:text-cyan-400">เกี่ยวกับ</Link>
      </nav>*/}

      <div className="p-4">
        <Routes>
          <Route path="/" element={<WebsiteSummaryApp />} />

          {/* 2. หน้า Page Detail สำหรับแต่ละหัวข้อ (ใช้ URL ที่ชัดเจน) */}
          <Route path="/topic/1" element={<HtmlPage />} />
          <Route path="/topic/2" element={<Sitemap />} />
          <Route path="/topic/3" element={<Crationhtmlcss />} />

          {/* 3. หน้า About และเส้นทางจับคู่ที่ไม่ตรงกับรายการใด ๆ */}
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;