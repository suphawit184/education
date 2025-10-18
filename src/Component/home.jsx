import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer.jsx';

const topics = [
    {
        id: 1,
        title: "1. ความรู้พื้นฐานและโครงสร้าง",
        description: "ทำความเข้าใจว่าเว็บไซต์ทำงานอย่างไร, โครงสร้างของเว็บ, และภาษาพื้นฐาน (HTML/CSS/JS)",
        bgColor: "bg-blue-100",
        textColor: "text-blue-800",
        borderColor: "border-blue-500",
        path: "/topic/1"
    },
    {
        id: 2,
        title: "2. การออกแบบเว็บไซต์",
        description: "การวางแผน, ออกแบบโครงสร้าง (Sitemap), และหลักการออกแบบ UI/UX เบื้องต้น",
        bgColor: "bg-green-100",
        textColor: "text-green-800",
        borderColor: "border-green-500",
        path: "/topic/2"
    },
    {
        id: 3,
        title: "3. การสร้างด้วยโปรแกรมภาษา",
        description: "การใช้โค้ด HTML และ CSS สร้างองค์ประกอบจริงของหน้าเว็บ (หัวใจหลักของการสร้าง)",
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-800",
        borderColor: "border-indigo-500",
        path: "/topic/3"
    },
    {
        id: 4,
        title: "4. การใช้งานอนิเมชั่นหรือเอฟเฟกด้วย javascript",
        description: "การใช้งาน javascript ",
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-800",
        borderColor: "border-indigo-500",
        path: "/topic/4"
    },
    {
        id: 5,
        title: "5. การใช้เครื่องมือสำเร็จรูป/CMS",
        description: "เรียนรู้วิธีสร้างเว็บด้วยโปรแกรมสำเร็จรูป (เช่น Dreamweaver) หรือระบบจัดการเนื้อหา (CMS)",
        bgColor: "bg-purple-100",
        textColor: "text-purple-800",
        borderColor: "border-purple-500",
        path: "/topic/5"
    },
    {
        id: 6,
        title: "6. การเผยแพร่และทดสอบ",
        description: "การติดตั้ง Web Server จำลอง และการอัพโหลดเว็บไซต์สู่โลกออนไลน์",
        bgColor: "bg-pink-100",
        textColor: "text-pink-800",
        borderColor: "border-pink-500",
        path: "/topic/6"
    },
];



const TopicCard = ({ title, description, bgColor, textColor, borderColor, path }) => {
    return (
        <Link
            to={path}
            className={`
        p-6 rounded-xl shadow-lg 
        transition duration-300 transform hover:scale-[1.03] 
        ${bgColor} border-b-4 ${borderColor}
        cursor-pointer block
      `}
        >
            <h3 className={`text-xl font-bold mb-2 ${textColor}`}>
                {title}
            </h3>
            <p className="text-gray-700">
                {description}
            </p>
        </Link>
    );
};


const WebsiteSummaryApp = () => {

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
                <section id="summary" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-cyan-500 pb-2 mb-8">
                        หัวข้อสำคัญ 6 อย่าง
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map(topic => (
                            <TopicCard
                                key={topic.id}
                                title={topic.title}
                                description={topic.description}
                                bgColor={topic.bgColor}
                                textColor={topic.textColor}
                                borderColor={topic.borderColor}
                                path={topic.path}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default WebsiteSummaryApp;