
import Footer from './footer.jsx';

// Component นี้รับ prop 'onBack' ซึ่งเป็นฟังก์ชันสำหรับเปลี่ยน State กลับไปหน้าหลัก
const HtmlPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col p-4 md:p-8">
      
      {/* Header และปุ่มกลับ */}
      <header className="w-full max-w-6xl mx-auto mb-8 pt-4">
        <button 
          onClick={onBack} // เมื่อคลิก จะเรียกใช้ฟังก์ชันที่ส่งมาจาก App.jsx เพื่อกลับหน้าหลัก
          className="text-lg font-medium text-indigo-600 hover:text-indigo-800 transition duration-150 flex items-center p-2 rounded-lg hover:bg-indigo-50"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          กลับสู่หน้าสรุปหัวข้อ
        </button>
      </header>
      
      {/* เนื้อหาหลัก */}
      <main className="container mx-auto max-w-6xl flex-grow bg-white p-6 md:p-10 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 border-b pb-2">
          1. ความรู้พื้นฐานและโครงสร้าง (HTML, CSS, JS)
        </h1>
        
        <section className="space-y-6 text-gray-700 text-lg">
          <p>
            ไฟล์นี้จำลองหน้ารายละเอียดสำหรับหัวข้อที่ 1 ครับ 
            หลักการสร้างเว็บไซต์เริ่มต้นจากการทำความเข้าใจบทบาทของภาษาหลักทั้งสาม:
          </p>

          <h2 className="text-3xl font-bold text-indigo-600 pt-4">โครงสร้าง (HTML)</h2>
          <p>
            <strong>HTML (HyperText Markup Language)</strong> ทำหน้าที่เป็นโครงกระดูกของเว็บไซต์ โดยใช้แท็ก (Tags) ต่าง ๆ 
            ในการกำหนดองค์ประกอบของเนื้อหา เช่น หัวข้อ ย่อหน้า รูปภาพ และลิงก์
          </p>

          <h2 className="text-3xl font-bold text-teal-600 pt-4">การจัดรูปแบบ (CSS)</h2>
          <p>
            <strong>CSS (Cascading Style Sheets)</strong> ทำหน้าที่เป็นผิวหนังและเสื้อผ้า ใช้เพื่อกำหนดรูปลักษณ์ภายนอก 
            เช่น สี ขนาด ฟอนต์ การจัดวาง และการตอบสนองต่อหน้าจออุปกรณ์ต่าง ๆ 
            ในโปรเจกต์นี้ เราใช้ Tailwind CSS เป็นเครื่องมือหลักในการเขียน CSS
          </p>

          <h2 className="text-3xl font-bold text-yellow-600 pt-4">พฤติกรรม (JavaScript)</h2>
          <p>
            <strong>JavaScript (JS)</strong> ทำหน้าที่เป็นสมอง ใช้เพื่อเพิ่มปฏิสัมพันธ์ (Interactivity) และการทำงานแบบไดนามิกให้กับเว็บไซต์ เช่น 
            การตอบสนองต่อการคลิก (ดังที่คุณทำเพื่อเข้าสู่หน้านี้) การจัดการฟอร์ม และการเรียกข้อมูลจากเซิร์ฟเวอร์
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HtmlPage;