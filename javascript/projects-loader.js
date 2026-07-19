/*
================================================================
 โหลดข้อมูลผลงานจากฐานข้อมูล Supabase (แทน projects-data.js เดิม)
================================================================
 ไม่ต้องแก้ไฟล์นี้ - เพิ่ม/แก้/ลบผลงานให้ทำผ่านหน้า backend.html แทน
================================================================
*/
async function loadProjects() {
    try {
        const { data, error } = await sbClient
            .from('projects')
            .select('*')
            .order('sort_order', { ascending: true })
            .order('created_at', { ascending: true });

        if (error) {
            console.error('โหลดข้อมูลผลงานไม่สำเร็จ:', error.message);
            return [];
        }

        // แปลงชื่อ field จาก snake_case (ในฐานข้อมูล) เป็น camelCase (ที่หน้าเว็บใช้อยู่เดิม)
        return (data || []).map(row => ({
            id: row.id,
            category: row.category,
            badgeBg: row.badge_bg,
            badgeText: row.badge_text,
            cardTagColor: row.card_tag_color,
            title: row.title,
            location: row.location,
            image: row.image,
            placeholder: row.placeholder,
            client: row.client,
            facts: row.facts || [],
            gallery: row.gallery || [],
            tags: row.tags || [],
        }));
    } catch (err) {
        console.error('เชื่อมต่อฐานข้อมูลไม่สำเร็จ:', err);
        return [];
    }
}