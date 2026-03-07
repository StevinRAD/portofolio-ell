// Language Translations
const translations = {
    id: {
        // Navigation
        nav_home: 'Beranda',
        nav_about: 'Tentang',
        nav_resume: 'Riwayat',
        nav_portfolio: 'Portfolio',
        nav_blog: 'Blog',
        nav_contact: 'Kontak',
        copyright: 'Copyright © 2026 elloe, Semua hak dilindungi undang-undang.',
        
        // Home Section
        role1: 'Web Developer',
        role2: 'Web Designer',
        role3: 'UI/UX Designer',
        role4: 'FotoGrapher',
        role5: 'VideoGrapher',
        
        // About Section
        about_title: 'Tentang',
        about_heading: 'Web Designer & Developer',
        about_intro: 'Hai! Saya <strong>Stevin</strong>. Saya adalah seorang pengembang Web dengan beberapa keahlian di bidang <strong>HTML5, CSS3, JavaScript, jQuery, Angular JS</strong>. Saya memiliki Tujuan untuk mencoba hal baru yang belum pernah saya lakukan.',
        about_name_label: 'Nama',
        about_name_value: 'Stevin R.A.D Sianturi',
        about_age_label: 'Umur',
        about_age_value: '22 Tahun',
        about_email_label: 'Email',
        about_email_value: 'sstepin3rd@gmail.com',
        about_phone_label: 'Phone',
        about_phone_value: '+6282268426070',
        about_address_label: 'Alamat',
        about_address_value: 'Medan',
        about_job_label: 'Pekerjaan',
        about_job_value: 'Teknisi IT',
        about_skills_title: 'Keahlian',
        about_cv_btn: 'Download CV',
        
        // Services
        service_dev_title: 'Pengembang Web',
        service_dev_desc: 'Saya adalah Web Developer yang fokus pada pembuatan situs web responsif, cepat, dan fungsional. Saya berkomitmen mengubah ide kreatif menjadi solusi digital yang memberikan pengalaman terbaik bagi pengguna.',
        service_fg_title: 'FG | VG',
        service_fg_desc: 'Menangkap momen dan merangkainya menjadi cerita visual yang bermakna. Saya berdedikasi menciptakan konten foto dan video dengan estetika tinggi untuk mengabadikan setiap pesan secara autentik.',
        service_design_title: 'Graphics Design',
        service_design_desc: 'Sebagai Graphic Designer, saya fokus menciptakan identitas visual yang kuat dan berkarakter. Saya percaya bahwa desain yang baik bukan sekadar estetika, melainkan cara efektif untuk menyampaikan pesan dan solusi.',
        service_it_title: 'Dukungan IT',
        service_it_desc: 'Menyediakan solusi teknis yang andal untuk memastikan seluruh infrastruktur digital berjalan tanpa hambatan. Saya berfokus pada pemecahan masalah yang cepat, pemeliharaan sistem, dan memberikan dukungan teknis yang efisien bagi pengguna.',
        
        // Resume Section
        resume_title: 'Riwayat Hidup',
        experience_title: 'Pengalaman',
        experience_1_job: 'Teknisi IT',
        experience_1_date: '2025-Sampai Saat ini',
        experience_1_company: 'Hero Komputer, Medan, Indonesia',
        experience_1_desc: 'Sebagai Teknisi IT dengan pengalaman satu tahun di toko komputer, saya ahli dalam mendiagnosa kerusakan perangkat keras, optimasi sistem (seperti upgrade SSD/RAM), serta pemeliharaan menyeluruh. Fokus utama saya adalah memberikan solusi yang tepat guna sesuai kebutuhan spesifik pengguna—baik untuk meningkatkan produktivitas harian maupun performa perangkat yang maksimal—dengan tetap mengedepankan efisiensi dan keandalan sistem.',
        experience_2_job: 'Founder',
        experience_2_date: '2023-Sampai Saat ini',
        experience_2_company: 'Sianturi IT, Medan, Indonesia',
        experience_2_desc: 'Saya juga memiliki Startup Company sebagai awal karir saya mengembangkan skill dan minat saya dalam memenuhi kebutuhan pengguna dibidang IT',
        experience_3_job: 'Kerani Produksi',
        experience_3_date: '2022-2023',
        experience_3_company: 'PT Putra Agro Niaga, Indragiri Hilir, Indonesia',
        experience_3_desc: 'Memiliki pengalaman selama satu tahun sebagai Kerani Produksi, di mana saya bertanggung jawab dalam mengelola data harian, memantau alur stok, serta menyusun laporan administrasi secara akurat. Pengalaman ini mengasah ketelitian dan disiplin saya dalam bekerja di bawah target, serta memperkuat kemampuan koordinasi tim untuk memastikan kelancaran operasional di lapangan.',
        experience_4_job: 'Teknisi Komputer',
        experience_4_date: '2021-2022',
        experience_4_company: 'SSD Computer, Sibolga, Indonesia',
        experience_4_desc: 'Memiliki pengalaman selama satu tahun sebagai Teknisi Komputer di SSD Computer, di mana saya bertanggung jawab dalam menangani berbagai perbaikan perangkat keras dan optimasi sistem. Pengalaman ini membentuk ketelitian saya dalam mendiagnosa masalah teknis dan memberikan solusi perangkat yang efisien bagi pelanggan.',
        education_title: 'Pendidikan',
        education_1_school: 'Management Information Systems',
        education_1_date: '2023-Saat Ini (2026)',
        education_1_place: 'Budi Darma University, Medan, Indonesia',
        education_1_desc: 'Melanjutkan studi di jenjang pendidikan tinggi pada program studi Sistem Informasi di Universitas Budi Darma. Fokus utama saya adalah mempelajari integrasi teknologi dengan kebutuhan bisnis, mulai dari pengembangan perangkat lunak hingga manajemen basis data. Pendidikan ini memperdalam landasan teoritis dan praktis saya dalam membangun solusi digital yang efisien.',
        education_2_school: 'TKJ (Teknologi Komputer & Jaringan)',
        education_2_date: '2019-2022',
        education_2_place: 'Yapim Taruna Pandan, Pandan-Sibolga, Indonesia',
        education_2_desc: 'Lulusan Teknik Komputer dan Jaringan (TKJ) dari SMK Yapim Taruna Pandan. Selama masa pendidikan, saya mendalami infrastruktur jaringan, perakitan komputer, dan dasar-dasar sistem operasi. Latar belakang pendidikan ini memberikan saya pemahaman teknis yang mendalam dalam mendukung karier saya di bidang teknologi informasi dan pengembangan web.',
        design_skills_title: 'Design Skills',
        coding_skills_title: 'Coding Skills',
        
        // Portfolio Section
        portfolio_title: 'Portfolio',
        portfolio_all: 'All',
        portfolio_brand: 'Brand',
        portfolio_design: 'Design',
        portfolio_graphic: 'Graphic',
        portfolio_view_more: 'View More',
        
        // Blog Section
        blog_title: 'Blog',
        blog_cat1: 'Website Bussines',
        blog_title1: 'Tentang Usaha saya',
        blog_cat2: 'Website Personal',
        blog_title2: 'Hanya Website Percobaan',
        blog_cat3: 'Website News',
        blog_title3: 'Blogspot Website',
        
        // Contact Section
        contact_title: 'Kontak',
        contact_info_heading: 'Hubungi Kami',
        contact_info_text: 'Jika anda ada pertanyaan maupun Saran Bisa hubungi Di bawah.',
        contact_phone: 'Phone',
        contact_address: 'Alamat',
        contact_email: 'E-mail',
        contact_follow: 'Follow',
        contact_form_name: 'Masukkan Nama',
        contact_form_email: 'Masukkan Email',
        contact_form_message: 'Masukkan Pesan',
        contact_form_send: 'Kirim Pesan',
        
        // Chat Widget
        chat_greeting: 'Halo! Ada yang bisa saya bantu? Silakan ketik pesan atau pilih opsi cepat di bawah.',
        chat_reply1: 'Saya tertarik dengan portfolio Anda!',
        chat_reply2: 'Bagaimana saya bisa menghubungi Anda?',
        chat_reply3: 'Mari diskusi untuk kerja sama.',
        chat_placeholder: 'Ketik pesan...',
        chat_header: 'Chat Live'
    },
    en: {
        // Navigation
        nav_home: 'Home',
        nav_about: 'About',
        nav_resume: 'Resume',
        nav_portfolio: 'Portfolio',
        nav_blog: 'Blog',
        nav_contact: 'Contact',
        copyright: 'Copyright © 2026 elloe, All rights reserved.',
        
        // Home Section
        role1: 'Web Developer',
        role2: 'Web Designer',
        role3: 'UI/UX Designer',
        role4: 'Photographer',
        role5: 'Videographer',
        
        // About Section
        about_title: 'About',
        about_heading: 'Web Designer & Developer',
        about_intro: 'Hi! I am <strong>Stevin</strong>. I am a Web developer with expertise in <strong>HTML5, CSS3, JavaScript, jQuery, Angular JS</strong>. I have the goal to try new things I have never done before.',
        about_name_label: 'Name',
        about_name_value: 'Stevin R.A.D Sianturi',
        about_age_label: 'Age',
        about_age_value: '22 Years',
        about_email_label: 'Email',
        about_email_value: 'sstepin3rd@gmail.com',
        about_phone_label: 'Phone',
        about_phone_value: '+6282268426070',
        about_address_label: 'Address',
        about_address_value: 'Medan',
        about_job_label: 'Job',
        about_job_value: 'IT Technician',
        about_skills_title: 'Skills',
        about_cv_btn: 'Download CV',
        
        // Services
        service_dev_title: 'Web Developer',
        service_dev_desc: 'I am a Web Developer focused on creating responsive, fast, and functional websites. I am committed to turning creative ideas into digital solutions that provide the best experience for users.',
        service_fg_title: 'FG | VG',
        service_fg_desc: 'Capturing moments and arranging them into meaningful visual stories. I am dedicated to creating high-aesthetic photography and video content to authentically preserve every message.',
        service_design_title: 'Graphics Design',
        service_design_desc: 'As a Graphic Designer, I focus on creating strong and distinctive visual identities. I believe that good design is not just aesthetics, but an effective way to convey messages and solutions.',
        service_it_title: 'IT Support',
        service_it_desc: 'Providing reliable technical solutions to ensure all digital infrastructure runs smoothly. I focus on quick problem solving, system maintenance, and providing efficient technical support to users.',
        
        // Resume Section
        resume_title: 'Resume',
        experience_title: 'Experience',
        experience_1_job: 'IT Technician',
        experience_1_date: '2025-Present',
        experience_1_company: 'Hero Computer, Medan, Indonesia',
        experience_1_desc: 'As an IT Technician with one year of experience in a computer store, I am skilled in diagnosing hardware failures, system optimization (such as SSD/RAM upgrades), and overall maintenance. My main focus is providing tailor-made solutions according to specific user needs—whether to increase daily productivity or maximize device performance—while emphasizing system efficiency and reliability.',
        experience_2_job: 'Founder',
        experience_2_date: '2023-Present',
        experience_2_company: 'Sianturi IT, Medan, Indonesia',
        experience_2_desc: 'I also have a Startup Company as the beginning of my career to develop my skills and interests in meeting user needs in the IT field',
        experience_3_job: 'Production Clerk',
        experience_3_date: '2022-2023',
        experience_3_company: 'PT Putra Agro Niaga, Indragiri Hilir, Indonesia',
        experience_3_desc: 'I have one year of experience as a Production Clerk, where I was responsible for managing daily data, monitoring inventory flows, and preparing accurate administrative reports. This experience honed my accuracy and discipline in working under pressure, and strengthened my team coordination skills to ensure smooth field operations.',
        experience_4_job: 'Computer Technician',
        experience_4_date: '2021-2022',
        experience_4_company: 'SSD Computer, Sibolga, Indonesia',
        experience_4_desc: 'I have one year of experience as a Computer Technician at SSD Computer, where I was responsible for handling various hardware repairs and system optimization. This experience shaped my attention to detail in diagnosing technical issues and providing efficient device solutions to customers.',
        education_title: 'Education',
        education_1_school: 'Management Information Systems',
        education_1_date: '2023-Present (2026)',
        education_1_place: 'Budi Darma University, Medan, Indonesia',
        education_1_desc: 'Continuing studies at the higher education level in the Information Systems study program at Budi Darma University. My main focus is learning the integration of technology with business needs, ranging from software development to database management. This education deepens my theoretical and practical foundation in building efficient digital solutions.',
        education_2_school: 'TKJ (Computer Technology & Network)',
        education_2_date: '2019-2022',
        education_2_place: 'Yapim Taruna Pandan, Pandan-Sibolga, Indonesia',
        education_2_desc: 'Graduate of Computer Technology and Network (TKJ) from Yapim Taruna Pandan Vocational School. During my studies, I studied network infrastructure, computer assembly, and basic operating systems. This educational background gave me deep technical understanding in supporting my career in information technology and web development.',
        design_skills_title: 'Design Skills',
        coding_skills_title: 'Coding Skills',
        
        // Portfolio Section
        portfolio_title: 'Portfolio',
        portfolio_all: 'All',
        portfolio_brand: 'Brand',
        portfolio_design: 'Design',
        portfolio_graphic: 'Graphic',
        portfolio_view_more: 'View More',
        
        // Blog Section
        blog_title: 'Blog',
        blog_cat1: 'Website Business',
        blog_title1: 'About My Business',
        blog_cat2: 'Personal Website',
        blog_title2: 'Just A Trial Website',
        blog_cat3: 'Website News',
        blog_title3: 'Blogspot Website',
        
        // Contact Section
        contact_title: 'Contact',
        contact_info_heading: 'Contact Us',
        contact_info_text: 'If you have any questions or suggestions, you can contact me below.',
        contact_phone: 'Phone',
        contact_address: 'Address',
        contact_email: 'E-mail',
        contact_follow: 'Follow',
        contact_form_name: 'Enter Name',
        contact_form_email: 'Enter Email',
        contact_form_message: 'Enter Message',
        contact_form_send: 'Send Message',
        
        // Chat Widget
        chat_greeting: 'Hello! How can I help you? Please type a message or select a quick option below.',
        chat_reply1: 'I\'m interested in your portfolio!',
        chat_reply2: 'How can I contact you?',
        chat_reply3: 'Let\'s discuss a collaboration.',
        chat_placeholder: 'Type message...',
        chat_header: 'Live Chat'
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'id';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLanguage);
});

// Set language function
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update logo text
    document.querySelector('.logo span').textContent = lang.toUpperCase();
    
    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // Update placeholder for inputs and textareas
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'A' && element.classList.contains('logo')) {
                // Skip logo update here, handled above
            } else {
                // Update innerHTML for other elements
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Toggle language function
function toggleLanguage() {
    const newLang = currentLanguage === 'id' ? 'en' : 'id';
    setLanguage(newLang);
}

// Make functions globally available
window.setLanguage = setLanguage;
window.toggleLanguage = toggleLanguage;
