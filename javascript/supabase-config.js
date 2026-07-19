 /*
================================================================
 ตั้งค่าการเชื่อมต่อฐานข้อมูล Supabase (ใช้ร่วมกันทั้งเว็บ)
================================================================
 แก้ 2 ค่านี้เป็นของโปรเจกต์คุณเอง (ค่าเดียวกับที่กรอกใน backend.html)
   - หาได้ที่ Supabase Dashboard > Settings > API
   - SUPABASE_ANON_KEY เป็นคีย์ "public" ใส่ในเว็บที่ทุกคนเห็นได้ ปลอดภัย
     เพราะสิทธิ์การอ่าน/เขียนถูกควบคุมด้วย Row Level Security (RLS) ฝั่งฐานข้อมูลอยู่แล้ว
================================================================
*/
const SUPABASE_URL = "https://dxomlcgewgiezvsgwrbz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4b21sY2dld2dpZXp2c2d3cmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNTgwNzAsImV4cCI6MjA5OTYzNDA3MH0.PkCNzHx_jeBlnX8G8uWrh527azZGQty0LK7dUl5kjFw";
 
// รหัสผ่านสำหรับเข้าหน้า backend.html (ปุ่มลับที่ footer ของ index.html)
const ADMIN_PASSWORD = "wch2026";
 
const sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);