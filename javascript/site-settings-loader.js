/*
================================================================
 โหลดข้อมูล "ตั้งค่าเว็บไซต์" จากฐานข้อมูล Supabase
================================================================
 ครอบคลุม: เบอร์โทร, Line ID, อีเมล, ที่อยู่, ลิงก์โซเชียล, รายชื่อทีมงาน
 ไม่ต้องแก้ไฟล์นี้ - เพิ่ม/แก้ข้อมูลให้ทำผ่านหน้า backend.html แท็บ "ตั้งค่าเว็บไซต์" แทน
================================================================
*/
async function loadSiteSettings() {
    try {
        const { data, error } = await sbClient
            .from('site_settings')
            .select('*')
            .eq('id', 'main')
            .maybeSingle();

        if (error) {
            console.error('โหลดข้อมูลตั้งค่าเว็บไซต์ไม่สำเร็จ:', error.message);
            return null;
        }
        if (!data) return null;

        return {
            phone: data.phone || '',
            lineId: data.line_id || '',
            email: data.email || '',
            address: data.address || '',
            socialFacebook: data.social_facebook || '',
            socialYoutube: data.social_youtube || '',
            socialTiktok: data.social_tiktok || '',
            teamMembers: data.team_members || [],
        };
    } catch (err) {
        console.error('เชื่อมต่อฐานข้อมูลไม่สำเร็จ:', err);
        return null;
    }
}