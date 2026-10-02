/*
================================================================
 โหลดข้อมูล "คลังรูปภาพ" (Gallery) จากฐานข้อมูล Supabase
================================================================
 คลังรูปภาพนี้แยกต่างหากจากรูปในผลงาน (projects)
 เพิ่ม/แก้/ลบทำผ่านหน้า backend.html แท็บ "แกลเลอรี" เท่านั้น ไม่ต้องแก้ไฟล์นี้
================================================================
*/
async function loadGalleryPhotos() {
    try {
        const { data, error } = await sbClient
            .from('gallery_photos')
            .select('*')
            .order('sort_order', { ascending: true })
            .order('created_at', { ascending: true });

        if (error) {
            console.error('โหลดคลังรูปภาพไม่สำเร็จ:', error.message);
            return [];
        }

        return (data || []).map(row => ({
            id: row.id,
            src: row.image_url,
            alt: row.caption || '',
        }));
    } catch (err) {
        console.error('เชื่อมต่อฐานข้อมูลไม่สำเร็จ:', err);
        return [];
    }
}