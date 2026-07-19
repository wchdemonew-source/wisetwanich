/*
================================================================
 ระบบสลับภาษา TH/EN (ครอบคลุมเฉพาะเมนูนำทาง + หัวข้อหลักแต่ละ section)
================================================================
 วิธีเพิ่มคำแปลใหม่ในอนาคต:
   1. เพิ่ม key ใหม่ในอ็อบเจกต์ด้านล่าง (ต้องมีทั้ง th และ en)
   2. ใส่ attribute data-i18n="ชื่อ key" ที่ element ใน HTML ที่ต้องการให้เปลี่ยนคำ
   3. เก็บภาษาที่เลือกไว้ใน localStorage คีย์ 'site_lang' ใช้ร่วมกันทุกหน้า
      (สลับภาษาที่หน้า index แล้วไปหน้า project ภาษาจะจำไว้ให้)

 หมายเหตุ: ระบบนี้แปลเฉพาะข้อความคงที่ (เมนู/หัวข้อ section) เท่านั้น
 ไม่รวมข้อมูลผลงาน (ชื่อโครงการ/รายละเอียด) ที่มาจากฐานข้อมูล Supabase
================================================================
*/

// คำแปลที่ใช้ร่วมกันทุกหน้า (เมนูนำทาง + footer)
const NAV_I18N = {
    nav_home:          { th: "หน้าแรก", en: "Home" },
    nav_history:       { th: "ความเป็นมา", en: "History" },
    nav_about:         { th: "เกี่ยวกับเรา", en: "About Us" },
    nav_portfolio:     { th: "ผลงาน", en: "Portfolio" },
    nav_reviews:       { th: "รีวิว", en: "Reviews" },
    nav_cta:           { th: "ประเมินราคาฟรี", en: "Free Quote" },
    footer_quicklinks: { th: "ลิงก์ด่วน", en: "Quick Links" },
    footer_hours:      { th: "เวลาทำการ", en: "Business Hours" },
    footer_follow:     { th: "ช่องทางการติดตาม", en: "Follow Us" },
};

function getStoredLang() {
    return localStorage.getItem('site_lang') || 'th';
}

function applyTranslations(translations, lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const entry = translations[el.getAttribute('data-i18n')];
        if (entry && entry[lang]) el.textContent = entry[lang];
    });
    document.documentElement.lang = (lang === 'en') ? 'en' : 'th';
    document.querySelectorAll('.lang-toggle-label').forEach(el => {
        el.textContent = (lang === 'th') ? 'EN' : 'TH';
    });
}

function setLanguage(lang, translations) {
    localStorage.setItem('site_lang', lang);
    applyTranslations(translations, lang);
}

function toggleLanguage(translations) {
    setLanguage(getStoredLang() === 'th' ? 'en' : 'th', translations);
}

// เรียกใช้ตอนโหลดหน้า พร้อมส่งคำแปลเฉพาะของหน้านั้นเข้ามารวมกับคำแปลส่วนกลาง
function initI18n(pageTranslations) {
    const translations = { ...NAV_I18N, ...(pageTranslations || {}) };
    applyTranslations(translations, getStoredLang());
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => toggleLanguage(translations));
    });
}