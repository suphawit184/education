import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer.jsx';

const HtmlPage = () => {
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
          1. ความรู้พื้นฐานและโครงสร้าง (HTML, CSS, JS)
        </h1>

        <section className="space-y-6 text-gray-700 text-lg">

          {/* ------------------------------------------------------------------ */}
          <p>
            <strong>HTML (HyperText Markup Language)</strong> ทำหน้าที่เป็นโครงกระดูกของเว็บไซต์ โดยใช้แท็ก (Tags) ต่าง ๆ
            ในการกำหนดองค์ประกอบของเนื้อหา เช่น หัวข้อ ย่อหน้า รูปภาพ และลิงก์
          </p>
          
          {/* ... เนื้อหา HTML ส่วนแรก ... */}

          <h4 className="text-xl font-semibold text-gray-600">
            องค์ประกอบสำคัญของโครงสร้าง HTML
          </h4>
          <p>
            HTML จะเริ่มต้นด้วยการประกาศประเภทของเอกสาร (Document Type Declaration) และมีองค์ประกอบพื้นฐานที่ครอบคลุมการจัดหน้าเว็บเพจในส่วนต่างๆ ดังนี้:
          </p>

          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>
              <strong>DOCTYPE Declaration</strong>
              <p className="mt-1"><code>&lt;!DOCTYPE html&gt;</code> เป็นการบอกเบราว์เซอร์ว่าเอกสารนี้ใช้ HTML5</p>
            </li>
            <li>
              <strong>องค์ประกอบหลักของ HTML</strong>
              <p className="mt-1">HTML แบ่งโครงสร้างเป็นสองส่วนใหญ่ ๆ คือ ส่วนหัว (Head) และส่วนเนื้อหา (Body) ซึ่งครอบคลุมใน <code>&lt;html&gt;...&lt;/html&gt;</code> แท็ก</p>
            </li>
          </ol>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            ตัวอย่างโครงสร้างพื้นฐานของ HTML
          </h4>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto text-gray-800">
            {`<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ชื่อเว็บเพจ</title>
</head>
<body>
    <h1>หัวข้อหลักของหน้า</h1>
    <p>นี่คือย่อหน้าของเนื้อหา</p>
</body>
</html>`}
          </pre>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            รายละเอียดขององค์ประกอบหลักในโครงสร้าง HTML
          </h4>
          <ul className="list-disc list-outside ml-6 space-y-4">
            <li>
              <strong><code>&lt;html&gt;</code>:</strong>
              <p className="mt-1">แท็ก <code>&lt;html&gt;</code> เป็นองค์ประกอบหลักที่ครอบคลุมเนื้อหาทั้งหมดของเอกสาร HTML และมีสองส่วนหลัก คือส่วน <code>&lt;head&gt;</code> และ <code>&lt;body&gt;</code></p>
            </li>
            <li>
              <strong><code>&lt;head&gt;</code>:</strong>
              <p className="mt-1">ส่วนหัวของเอกสาร ซึ่งเป็นที่รวมของข้อมูลที่ไม่แสดงบนหน้าจอ แต่มีความสำคัญสำหรับการทำงานของเว็บเพจ เช่น เมตาแท็ก (Meta Tags), ชื่อของหน้าเว็บ (Title), และการอ้างอิงถึงไฟล์ CSS หรือ JavaScript ภายนอก</p>
              <p className="mt-1 ml-4 italic">
                - <strong><code>&lt;meta&gt;</code>:</strong> ใช้เพื่อให้ข้อมูลเพิ่มเติมเกี่ยวกับเอกสาร เช่น การตั้งค่าตัวอักษร (charset) หรือคำสั่งสำหรับขนาดหน้าจอ (viewport)<br/>
                - <strong><code>&lt;title&gt;</code>:</strong> กำหนดชื่อของหน้าเว็บ ซึ่งจะแสดงในแถบเบราว์เซอร์และมีผลต่อ SEO
              </p>
            </li>
            <li>
              <strong><code>&lt;body&gt;</code>:</strong>
              <p className="mt-1">ส่วนเนื้อหาที่ผู้ใช้จะเห็นและโต้ตอบได้ ซึ่งประกอบด้วยข้อความ รูปภาพ ลิงก์ ฟอร์ม ฯลฯ เนื้อหาหลักทั้งหมดจะอยู่ใน <code>&lt;body&gt;</code></p>
              <p className="mt-1 ml-4 italic">
                - <strong><code>&lt;h1&gt;</code> ถึง <code>&lt;h6&gt;</code>:</strong> แท็กสำหรับแสดงหัวข้อ โดย <code>&lt;h1&gt;</code> คือหัวข้อหลัก<br/>
                - <strong><code>&lt;p&gt;</code>:</strong> แท็กสำหรับแสดงย่อหน้าของข้อความ<br/>
                - <strong><code>&lt;a&gt;</code>:</strong> แท็กลิงก์ที่ใช้เชื่อมโยงไปยังหน้าอื่น<br/>
                - <strong><code>&lt;img&gt;</code>:</strong> ใช้สำหรับแสดงรูปภาพ
              </p>
            </li>
          </ul>
          
          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            Block-level Elements และ Inline Elements
          </h4>
          <p>
            องค์ประกอบใน HTML แบ่งออกเป็นสองประเภทหลัก:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              <strong>Block-level Elements:</strong> ครอบคลุมเนื้อหาเต็มบรรทัด เช่น <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;-&lt;h6&gt;</code>
            </li>
            <li>
              <strong>Inline Elements:</strong> องค์ประกอบที่ไม่ทำให้เกิดบรรทัดใหม่ เช่น <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;span&gt;</code>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            โครงสร้างเพิ่มเติมที่นิยมใช้
          </h4>
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              <strong><code>&lt;div&gt;</code>:</strong> ใช้สำหรับการจัดกลุ่มเนื้อหาต่าง ๆ เป็นบล็อก (Block-level)
            </li>
            <li>
              <strong><code>&lt;span&gt;</code>:</strong> ใช้เพื่อจัดกลุ่มเนื้อหาในบรรทัด (Inline)
            </li>
            <li>
              <strong><code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>:</strong> เป็นแท็กเชิงความหมาย (Semantic Tags) สำหรับกำหนดส่วนหัว, เมนูนำทาง, กลุ่มเนื้อหา, บทความ และส่วนท้ายของหน้าเว็บ
            </li>
          </ul>
          {/* ------------------------------------------------------------------ */}
          <h2 className="text-3xl font-bold text-teal-600 pt-8 border-t mt-8">การจัดรูปแบบ (CSS)</h2>
          <p>
            <strong>CSS (Cascading Style Sheets)</strong> ทำหน้าที่เป็นผิวหนังและเสื้อผ้า ใช้เพื่อกำหนดรูปลักษณ์ภายนอก
            เช่น สี ขนาด ฟอนต์ การจัดวาง และการตอบสนองต่อหน้าจออุปกรณ์ต่าง ๆ
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-700 pt-4  mt-4">
            โครงสร้างของ CSS
          </h3>
          <p>
            โครงสร้างพื้นฐานของ CSS ประกอบด้วย 2 ส่วนหลัก คือ <strong>Selector</strong> และ <strong>Declaration</strong>
            ในรูปแบบ: <code>{'Selector { Declaration }'}</code> 
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              <strong>Selector:</strong> คือ แท็ก HTML, ID, หรือ Class ที่ต้องการกำหนดรูปแบบ
            </li>
            <li>
              <strong>Declaration:</strong> คือ การกำหนดค่าให้กับ Selector โดยประกอบด้วย **Property** (คุณสมบัติ) และ **Value** (ค่า) คั่นด้วยเครื่องหมาย colon (:) และหากมีหลายคุณสมบัติจะคั่นด้วย semi-colon (;)
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">
                {`Selector { 
    property : value; 
    property : value; 
}`}
              </pre>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            รูปแบบของ Selector
          </h4>
          <p>
            Selector คือ แท็ก HTML, ID และ Class ที่ต้องการกำหนดคุณสมบัติ แบ่งออกเป็นหลายรูปแบบ:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              <strong>Element Selector:</strong> กำหนด Style ให้แท็ก HTML โดยตรง เช่น <code>{'p { color: red; }'}</code>
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">{`<p>kongruksiam</p>\n\np {\n    color: red;\n    text-align:center;\n    padding: 10px;\n}`}</pre>
            </li>
            <li>
              <strong>Class Selector:</strong> กำหนด Style โดยใช้ชื่อ Class นำหน้าด้วยเครื่องหมายจุด (<code>.</code>) และสามารถใช้ซ้ำกันได้
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">{`<h2 class=”title”>kong</h2>\n<p class=”title”>ruksiam</p>\n\n.title{\n    color: pink;\n    text-align:center;\n    padding: 10px;\n}`}</pre>
            </li>
            <li>
              <strong>ID Selector:</strong> กำหนด Style โดยใช้ชื่อ ID นำหน้าด้วยเครื่องหมายชาร์ป (<code>#</code>) และ ID ต้องไม่ซ้ำกัน
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">{`<h2 id=”title”>kong</h2>\n<p id=”message”>ruksiam</p>\n\n#message{\n    color: green;\n    text-align:center;\n    padding: 10px;\n}`}</pre>
            </li>
            <li>
              <strong>Union Selector:</strong> การเลือกหลาย Selector พร้อมกัน โดยคั่นด้วยเครื่องหมายจุลภาค (<code>,</code>)
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">{`.title , #message , #box{\n    color: green;\n    text-align:center;\n    font-size : 18px;\n}`}</pre>
            </li>
            <li>
              <strong>Tag.Class Selector:</strong> การกำหนด Style โดยระบุแท็ก HTML และ Class คู่กัน เช่น <code>{'p.error'}</code>
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">{`p.error{\n    color: red;\n}\n\np.success{\n    color: green;\n}`}</pre>
            </li>
            <li>
              <strong>Universal Selector:</strong> กำหนด Style ให้มีผลต่อทุกแท็กของเว็บเพจ โดยใช้เครื่องหมายดอกจัน (<code>*</code>)
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">{`*{\n  color:red;\n}`}</pre>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            รูปแบบการประกาศใช้ CSS
          </h4>
          <p>
            มี 3 รูปแบบหลักในการนำ CSS มาใช้งาน: 
          </p>
          <ul className="list-disc list-outside ml-6 space-y-3">
            <li>
              <strong>Inline:</strong> แทรก <code>attribute style</code> ลงในแท็ก HTML โดยตรง (สำหรับ Element นั้นๆ เท่านั้น)
              <p className="mt-1 ml-4 italic">ตัวอย่าง: <code>&lt;p style="color:green"&gt;kong ruksiam.&lt;/p&gt;</code></p>
            </li>
            <li>
              <strong>Embeded (Internal):</strong> กำหนดรูปแบบ Style Sheet ภายในไฟล์ HTML เดียวกัน โดยเขียนภายใต้แท็ก <code>&lt;style&gt;...&lt;/style&gt;</code> ในส่วน <code>&lt;head&gt;</code>
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">{`<style>\n  p{\n    color:red;\n    text-align:center;\n  }\n</style>`}</pre>
            </li>
            <li>
              <strong>External:</strong> กำหนดไฟล์ Style Sheet แยกเป็นไฟล์นามสกุล <code>.css</code> แล้วเชื่อมโยงเข้ามาใช้ใน HTML ด้วยแท็ก <code>&lt;link&gt;</code> (เหมาะสำหรับการใช้ Style ร่วมกันหลายหน้าเว็บ)
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">
                {`\n<head>\n  <link rel=“stylesheet”href=“style.css”>\n</head>\n\n/* style.css */\np{\n  color:red;\n  text-align:center;\n}`}
              </pre>
            </li>
          </ul>
          <p className="pt-2">
            **Comment ใน CSS:** ใช้ <code>{'/* ข้อความอธิบายโค้ด */'}</code> เพื่ออธิบายโค้ดและจะไม่แสดงผลบนเว็บเพจ
          </p>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            หน่วย (Unit) ใน CSS
          </h4>
          <p>
            หน่วยวัดใน CSS แบ่งออกเป็น 2 ประเภทหลัก:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              <strong>Absolute Units (หน่วยตายตัว):</strong> เช่น <strong>px</strong> (pixel - สัมพันธ์กับรายละเอียดหน้าจอ), **pt** (point - ใช้ในงานสิ่งพิมพ์), **cm**, **mm**, **in**
            </li>
            <li>
              <strong>Relative Units (หน่วยอัตราส่วน):</strong> เช่น <strong>%</strong> (เปอร์เซ็นต์), **em** (อ้างอิงขนาดกับ parent element), **rem** (อ้างอิงขนาดกับ root element), **vw** (viewport width) และ **vh** (viewport height), **vmin**, **vmax**
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            คุณสมบัติการจัดรูปแบบที่สำคัญ
          </h4>
          <ul className="list-disc list-outside ml-6 space-y-4">
            <li>
              <strong>การกำหนดชนิดฟอนต์ (Font):</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>font-family</code>:** กำหนดชนิดของฟอนต์ (สามารถกำหนดได้มากกว่า 1 เพื่อให้มีฟอนต์สำรอง)<br/>
                - **<code>font-size</code>:** กำหนดขนาดข้อความ (เช่น 10px, medium)<br/>
                - **<code>font-weight</code>:** กำหนดความหนาของข้อความ (เช่น bold, 100-900)
              </p>
            </li>
            <li>
              <strong>การกำหนดสี (Colors):</strong>
              <p className="mt-1 ml-4 italic">
                - ใช้ **ชื่อสี** (green, red) , **RGB** (rgb(red, green, blue)), **Hexadecimal** (#000, #FFF) หรือ **HSL** (hue, saturation, lightness)
              </p>
            </li>
            <li>
              <strong>การกำหนดลักษณะข้อความ:</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>text-decoration</code>:** เช่น none, underline, line-through<br/>
                - **<code>text-align</code>:** การจัดแนวข้อความ เช่น left, right, center, justify
              </p>
            </li>
            <li>
              <strong>ความกว้างและความสูง:</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>width</code> / <code>height</code>:** กำหนดความกว้างและความสูง (เป็น auto, length, หรือ %)<br/>
                - **<code>min-width</code> / <code>max-width</code>, <code>min-height</code> / <code>max-height</code>:** กำหนดค่าต่ำสุดและสูงสุด
              </p>
            </li>
            <li>
              <strong>Border:</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>border</code>:** รูปแบบสั้น (เช่น <code>solid 1px black</code>)<br/>
                - **<code>border-width</code>:** กำหนดขนาดเส้นขอบ (เช่น thin, medium, 1px)<br/>
                - **<code>border-radius</code>:** กำหนดความโค้งของเส้นขอบ
              </p>
            </li>
            <li>
              <strong>การกำหนดสีพื้นหลัง:</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>background-color</code>:** กำหนดสีพื้นหลัง (หรือ transparent)<br/>
                - **<code>background-image</code>:** กำหนดภาพพื้นหลัง (url(รูปภาพ))<br/>
                - **<code>background-repeat</code>:** ควบคุมการซ้ำของภาพพื้นหลัง (repeat, no-repeat, repeat-x, repeat-y)
              </p>
            </li>
            <li>
              <strong>กำหนดตำแหน่งด้วย <code>float</code> และ <code>clear</code>:</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>float</code>:** กำหนดให้อิลิเมนต์ลอยอยู่ด้านใดด้านหนึ่ง (left, right, none)<br/>
                - **<code>clear</code>:** ไม่อนุญาตให้มีการลอยของอิลิเมนต์ที่อยู่ถัดไป (left, right, both)
              </p>
            </li>
            <li>
              <strong>กำหนด Style ให้กับ Link:</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>a:link</code>** (ยังไม่ถูกคลิก), **<code>a:hover</code>** (เมาส์อยู่เหนือ), **<code>a:visited</code>** (ถูกคลิกแล้ว), **<code>a:active</code>** (ขณะถูกคลิก)
              </p>
            </li>
            <li>
              <strong>การจัดรูปแบบการแสดงผลข้อมูล:</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>display</code>:** ควบคุมการแสดงผล (block, inline, inline-block, none)<br/>
                - **<code>visibility</code>:** ซ่อนหรือแสดงวัตถุโดยไม่กระทบ layout (hidden, visible)
              </p>
            </li>
            <li>
              <strong>การจัดตำแหน่งด้วย Position:</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>position</code>:** static, relative, absolute, fixed, sticky
              </p>
            </li>
            <li>
              <strong>จำกัดการแสดงผลข้อมูลด้วย Overflow:</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>overflow</code>:** ควบคุมเมื่อเนื้อหาเกินขอบเขต (visible, hidden, scroll, auto)
              </p>
            </li>
            <li>
              <strong>กำหนดเงาให้วัตถุด้วย Box-shadow:</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>box-shadow</code>:** รูปแบบ <code>x y blur spread color</code>
              </p>
            </li>
            <li>
              <strong>กำหนดค่าความทึบ (Opacity):</strong>
              <p className="mt-1 ml-4 italic">
                - **<code>opacity</code>:** ค่าอยู่ระหว่าง 0.0 (จางสุด) ถึง 1.0 (ทึบสุด)
              </p>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            Box Model (รูปแบบกล่อง)
          </h4>
          <p>
            Box Model คือการกำหนดพื้นที่รอบ Element ซึ่งประกอบด้วย 4 ส่วนหลักจากภายในสู่ภายนอก: 

[Image of Box Model]

          </p>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>
              <strong>Content:</strong> เนื้อหาจริง
            </li>
            <li>
              <strong>Padding:</strong> พื้นที่ว่างภายในของ Element (ช่องว่างข้างใน)
            </li>
            <li>
              <strong>Border:</strong> เส้นขอบของ Element
            </li>
            <li>
              <strong>Margin:</strong> ระยะห่างจากเส้นขอบหรือพื้นที่ภายนอกของ Element เทียบกับวัตถุอื่นๆ (ช่องว่างข้างนอก)
            </li>
          </ol>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            Responsive Web Design & Media Query
          </h4>
          <p>
            การออกแบบเว็บที่ตอบสนอง (**Responsive Web Design**) คือการทำให้เว็บแสดงผลได้ดีบนขนาดหน้าจอที่หลากหลาย 

[Image of Responsive Web Design]
 โดยใช้ **Media Query** ซึ่งเป็นรูปแบบการเขียน Style ให้แสดงผลตามขนาดหน้าจอที่แตกต่างกัน เช่น:
          </p>
          <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">
            {`@media screen and (max-width: 480px) { 
  /* styles สำหรับ Mobile devices */ 
}`}
          </pre>
          <p className="pt-2">
            **Viewport Units** (vw, vh, vmin, vmax) เป็นหน่วยวัดแบบอัตราส่วนที่อ้างอิงกับขนาดของ Viewport (พื้นที่แสดงผลของเบราว์เซอร์) ซึ่งช่วยในการสร้าง Responsive Web Design
          </p>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            Flexbox และ Grid Layout
          </h4>
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              <strong>Flexbox:</strong> เครื่องมือในการจัดการ Element แบบ **1 มิติ** (ทิศทางเดียว) มีความยืดหยุ่นสูง
              <p className="mt-1 ml-4 italic">
                - **<code>flex-direction</code>:** กำหนดทิศทาง (row, column, row-reverse, column-reverse)<br/>
                - **<code>justify-content</code>:** จัดวาง Item ตามแกนหลัก<br/>
                - **<code>align-items</code> / <code>align-self</code>:** จัดวาง Item ตามแกนตรงข้าม
              </p>
            </li>
            <li>
              <strong>Grid Layout:</strong> ถูกออกแบบมาเพื่อจัดการ Layout แบบ **2 มิติ** (มีทั้งแนวนอนและแนวตั้งพร้อมกัน) คล้ายกับการสร้างตาราง
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">
                {`display: grid;
grid-template-rows: ...; /* ความสูงแถว */
grid-template-columns: ...; /* ความกว้างคอลัมน์ */`}
              </pre>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            CSS Variable
          </h4>
          <p>
            การสร้างตัวแปรใน CSS (**Custom Properties**) โดยขึ้นต้นด้วยเครื่องหมาย <code>--</code> ตามด้วยชื่อตัวแปร เพื่อช่วยอำนวยความสะดวกในการกำหนด style ที่ใช้ซ้ำ ๆ เช่น สี หรือขนาด (ใช้เรียกด้วย <code>var(--ชื่อตัวแปร)</code>)
          </p>
          {/* ------------------------------------------------------------------ */}
          <h2 className="text-3xl font-bold text-yellow-600 pt-8 border-t mt-8">พฤติกรรม (JavaScript)</h2>
          <p>
            <strong>JavaScript (JS)</strong> ทำหน้าที่เป็นสมอง ใช้เพื่อเพิ่มปฏิสัมพันธ์ (Interactivity) และการทำงานแบบไดนามิกให้กับเว็บไซต์ เช่น
            การตอบสนองต่อการคลิก (ดังที่คุณทำเพื่อเข้าสู่หน้านี้) การจัดการฟอร์ม และการเรียกข้อมูลจากเซิร์ฟเวอร์
          </p>
          
          {/* === ส่วนที่เพิ่มเข้ามา: รายละเอียด JavaScript === */}
          <h3 className="text-2xl font-semibold text-gray-700 pt-4  mt-4">
            การใช้งาน JavaScript
          </h3>
          <p>
            การใช้งาน JavaScript ทำโดยการใส่โค้ดไว้ระหว่างแท็ก <code>&lt;script&gt;</code> และ <code>&lt;/script&gt;</code> ซึ่งสามารถวางได้ทั้งในส่วน <code>&lt;head&gt;</code> และส่วน <code>&lt;body&gt;</code> ของเอกสาร HTML
          </p>
          <p className="pt-2">
            ตัวอย่างการใช้งานในส่วน <code>&lt;body&gt;</code>:
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto text-gray-800">
            {`<body>
  ... เนื้อหา HTML ...
  <script>
    // โค้ด JavaScript
    console.log("Hello JavaScript!");
  </script>
</body>`}
          </pre>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            รู้จักกับตัวแปร (Variables) ใน JavaScript
          </h4>
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              <strong>Global Variable:</strong> เป็นตัวแปรที่ประกาศไว้นอกฟังก์ชัน และสามารถเรียกใช้ได้ทุกที่ในโปรแกรม
            </li>
            <li>
              <strong>Local Variable:</strong> เป็นตัวแปรที่ประกาศไว้ภายในฟังก์ชันใดฟังก์ชันหนึ่งเท่านั้น และสามารถเรียกใช้ได้เฉพาะในฟังก์ชันนั้น
            </li>
          </ul>
          
          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            การประกาศตัวแปร: var, let, และ const
          </h4>
          <ol className="list-decimal list-inside ml-4 space-y-4">
            <li>
              <strong>var:</strong> เป็นการประกาศตัวแปรแบบ **global scope** (หรือ function scope) คือประกาศค่าและใช้ค่าร่วมกันได้
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">
                {`var test = 123;
if (true) {
   var test = 456;
}
console.log(test); // ผลลัพธ์: 456 (ค่าถูกเปลี่ยนแปลงจากภายใน if)`}
              </pre>
            </li>
            <li>
              <strong>let:</strong> เป็นการประกาศตัวแปรแบบ **block scope** (ใช้งานได้เฉพาะในบล็อก <code>{}</code> ที่ถูกประกาศเท่านั้น)
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">
                {`let test = 123;
if (true) {
   let test = 456; // ประกาศตัวแปรใหม่ใน block
}
console.log(test); // ผลลัพธ์: 123 (ค่าภายนอก block ไม่ถูกเปลี่ยน)`}
              </pre>
            </li>
            <li>
              <strong>const:</strong> เป็นการประกาศตัวแปรแบบ **block scope** และไม่สามารถเปลี่ยนแปลงค่าได้หลังการประกาศ (ต้องกำหนดค่าตั้งแต่ต้น)
              <p className="mt-1">
                **ข้อควรระวัง:** แม้จะเปลี่ยนค่าหลักไม่ได้ แต่สามารถเปลี่ยนแปลงค่าภายใน **Object** หรือ **Array** ที่ถูกประกาศด้วย <code>const</code> ได้
              </p>
              <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">
                {`const PI = 3.14;
// PI = 1; // Error: "PI" is read-only
const obj = { a: 1 };
obj.a = 2; 
console.log(obj); // ผลลัพธ์: { a: 2 }`}
              </pre>
            </li>
          </ol>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            Array (ชุดของข้อมูล)
          </h4>
          <p>
            Array เป็นตัวแปรพิเศษที่สามารถเก็บค่าได้มากกว่าหนึ่งค่าในคราวเดียว โดยแต่ละค่าจะถูกเข้าถึงผ่าน **Index** ซึ่งเริ่มต้นที่ค่า **0** เสมอ
          </p>
          <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">
            {`var cars = ["Saab", "Volvo", "BMW"];
// การเข้าถึง:
console.log(cars[0]); // ผลลัพธ์: "Saab"
// cars[0] = Saab, cars[1] = Volvo, cars[2] = BMW`}
          </pre>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            Function (ฟังก์ชัน)
          </h4>
          <p>
            ฟังก์ชันคือชุดคำสั่งที่รวม Statement การทำงานเอาไว้ ซึ่งสามารถเรียกชื่อมาใช้งานซ้ำได้ตามที่เราต้องการ
          </p>
          <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">
            {`function ชื่อฟังก์ชั่น(ตัวแปรพารามิเตอร์ถ้ามี) {
  Statement ที่ต้องการให้ทำงาน
  return ค่าที่ต้องการส่งกลับ (ถ้ามี)
}

// ตัวอย่างการเรียกใช้:
function hello() {
  console.log("Hello!");
}
hello(); // เรียกใช้งานฟังก์ชัน`}
          </pre>

          <h4 className="text-xl font-semibold text-gray-600 pt-4">
            Loop (การทำซ้ำ)
          </h4>
          <p>
            Loop ใช้สำหรับทำซ้ำชุดคำสั่งตามเงื่อนไขที่กำหนด เช่น **Loop for**
          </p>
          <pre className="bg-gray-100 p-2 rounded-lg text-sm mt-2">
            {`// รูปแบบ Loop for
for (ตัวแปรเริ่มต้น; เงื่อนไข (Condition); เพิ่มค่าตัวแปร) {
  Statement ที่ต้องการให้ทำงาน ถ้าเงื่อนไขยังเป็นจริงอยู่
}

// ตัวอย่างการทำงาน Loop for
for (var i = 1; i < 5 ; i++ ){
  console.log(i);
}
/*
ผลลัพธ์: 1 2 3 4 
(เมื่อ i เป็น 5 เงื่อนไข i < 5 เป็นเท็จ จึงหยุด loop)
*/`}
          </pre>
          {/* === สิ้นสุดส่วนที่เพิ่มเข้ามา: รายละเอียด JavaScript === */}

        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HtmlPage;