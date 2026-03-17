// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { 
//   Calendar, 
//   History, 
//   Users, 
//   Flag, 
//   ChevronRight, 
//   Star, 
//   BookOpen,
//   ArrowRight,
//   Menu,
//   X
// } from 'lucide-react';

// const timelineEvents = [
//   {
//     year: "1920",
//     title: "Sự lựa chọn con đường cứu nước",
//     description: "Nguyễn Ái Quốc đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin, tìm thấy con đường giải phóng dân tộc.",
//     icon: <History className="w-6 h-6" />
//   },
//   {
//     year: "1925",
//     title: "Hội Việt Nam Cách mạng Thanh niên",
//     description: "Tháng 6/1925, Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (Trung Quốc), chuẩn bị về chính trị, tư tưởng và tổ chức.",
//     icon: <Users className="w-6 h-6" />
//   },
//   {
//     year: "1929",
//     title: "Sự ra đời của các tổ chức cộng sản",
//     description: "Ba tổ chức cộng sản lần lượt ra đời: Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng và Đông Dương Cộng sản Liên đoàn.",
//     icon: <BookOpen className="w-6 h-6" />
//   },
//   {
//     year: "1930",
//     title: "Hội nghị hợp nhất thành lập Đảng",
//     description: "Từ ngày 6/1 đến 7/2/1930, Hội nghị hợp nhất các tổ chức cộng sản họp tại Cửu Long (Hương Cảng, Trung Quốc) dưới sự chủ trì của Nguyễn Ái Quốc.",
//     icon: <Flag className="w-6 h-6" />
//   }
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-[#fdfaf6]/80 backdrop-blur-md border-b border-heritage-red/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-heritage-red rounded-full flex items-center justify-center shadow-lg">
//               <Star className="text-heritage-gold w-6 h-6 fill-heritage-gold" />
//             </div>
//             <span className="font-serif text-xl font-bold tracking-tight hidden sm:block">Lịch sử Đảng CSVN</span>
//           </div>
          
//           <div className="hidden md:flex items-center gap-8">
//             <a href="#home" className="text-sm font-medium hover:text-heritage-red transition-colors">Trang chủ</a>
//             <a href="#timeline" className="text-sm font-medium hover:text-heritage-red transition-colors">Tiến trình</a>
//             <a href="#founding" className="text-sm font-medium hover:text-heritage-red transition-colors">Thành lập</a>
//             <a href="#significance" className="text-sm font-medium hover:text-heritage-red transition-colors">Ý nghĩa</a>
//             <button className="bg-heritage-red text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-all shadow-md">
//               Tìm hiểu thêm
//             </button>
//           </div>

//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="p-2">
//               {isOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-[#fdfaf6] border-b border-heritage-red/10 overflow-hidden"
//           >
//             <div className="px-4 py-6 space-y-4">
//               <a href="#home" onClick={() => setIsOpen(false)} className="block text-lg font-serif">Trang chủ</a>
//               <a href="#timeline" onClick={() => setIsOpen(false)} className="block text-lg font-serif">Tiến trình</a>
//               <a href="#founding" onClick={() => setIsOpen(false)} className="block text-lg font-serif">Thành lập</a>
//               <a href="#significance" onClick={() => setIsOpen(false)} className="block text-lg font-serif">Ý nghĩa</a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default function App() {
//   return (
//     <div className="min-h-screen selection:bg-heritage-red selection:text-white">
//       <Navbar />

//       {/* Hero Section */}
//       <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
//         <div className="absolute top-0 right-0 -z-10 opacity-10">
//           <Star className="w-[600px] h-[600px] text-heritage-red fill-heritage-red rotate-12" />
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-heritage-red/10 text-heritage-red text-xs font-bold uppercase tracking-wider mb-6">
//                 <Calendar className="w-3 h-3" />
//                 <span>3 tháng 2 năm 1930</span>
//               </div>
//               <h1 className="text-6xl lg:text-8xl font-serif leading-[0.9] mb-8">
//                 Sự ra đời của <br />
//                 <span className="text-heritage-red">Đảng Cộng sản</span> <br />
//                 Việt Nam
//               </h1>
//               <p className="text-lg text-gray-600 max-w-xl mb-10 leading-relaxed">
//                 Một bước ngoặt lịch sử vĩ đại, chấm dứt cuộc khủng hoảng về đường lối cứu nước và tổ chức lãnh đạo phong trào yêu nước của nhân dân Việt Nam đầu thế kỷ XX.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <a href="#timeline" className="bg-heritage-red text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-all shadow-xl flex items-center gap-2">
//                   Khám phá lịch sử <ArrowRight className="w-4 h-4" />
//                 </a>
//                 <a href="#founding" className="border border-heritage-red/20 px-8 py-4 rounded-full font-medium hover:bg-heritage-red/5 transition-all">
//                   Hội nghị thành lập
//                 </a>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
//                 <img 
//                   src="https://picsum.photos/seed/vietnam-history/800/1000" 
//                   alt="Lịch sử Việt Nam" 
//                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
//                   referrerPolicy="no-referrer"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                 <div className="absolute bottom-8 left-8 right-8 text-white">
//                   <p className="font-serif italic text-xl">"Đảng ta là đạo đức, là văn minh."</p>
//                   <p className="text-sm opacity-80 mt-2">— Chủ tịch Hồ Chí Minh</p>
//                 </div>
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-heritage-gold rounded-full flex items-center justify-center shadow-xl rotate-12">
//                 <Star className="text-heritage-red w-16 h-16 fill-heritage-red" />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section id="timeline" className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl lg:text-5xl font-serif mb-4">Tiến trình lịch sử</h2>
//             <div className="w-24 h-1 bg-heritage-red mx-auto" />
//           </div>

//           <div className="relative">
//             <div className="absolute left-1/2 -translate-x-1/2 h-full w-px timeline-line hidden md:block" />
            
//             <div className="space-y-24">
//               {timelineEvents.map((event, index) => (
//                 <motion.div 
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//                 >
//                   <div className="flex-1 text-center md:text-right w-full">
//                     {index % 2 === 0 ? (
//                       <div>
//                         <span className="text-5xl font-serif text-heritage-red/20 mb-2 block">{event.year}</span>
//                         <h3 className="text-2xl font-serif mb-4">{event.title}</h3>
//                         <p className="text-gray-600 leading-relaxed">{event.description}</p>
//                       </div>
//                     ) : null}
//                   </div>

//                   <div className="relative z-10 w-16 h-16 bg-heritage-red rounded-full flex items-center justify-center shadow-lg text-white shrink-0">
//                     {event.icon}
//                   </div>

//                   <div className="flex-1 text-center md:text-left w-full">
//                     {index % 2 !== 0 ? (
//                       <div>
//                         <span className="text-5xl font-serif text-heritage-red/20 mb-2 block">{event.year}</span>
//                         <h3 className="text-2xl font-serif mb-4">{event.title}</h3>
//                         <p className="text-gray-600 leading-relaxed">{event.description}</p>
//                       </div>
//                     ) : null}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Founding Conference Details */}
//       <section id="founding" className="py-24 bg-[#fdfaf6]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-xl border border-heritage-red/5 overflow-hidden relative">
//             <div className="absolute top-0 right-0 p-12 opacity-5">
//               <History className="w-64 h-64" />
//             </div>
            
//             <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
//               <div>
//                 <h2 className="text-4xl lg:text-5xl font-serif mb-8">Hội nghị thành lập Đảng</h2>
//                 <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
//                   <p>
//                     Dưới sự chủ trì của đồng chí Nguyễn Ái Quốc, Hội nghị hợp nhất các tổ chức cộng sản đã họp từ ngày 6/1 đến ngày 7/2/1930 tại Cửu Long (Hương Cảng, Trung Quốc).
//                   </p>
//                   <p>
//                     Hội nghị đã nhất trí hợp nhất các tổ chức cộng sản thành một đảng duy nhất lấy tên là <strong>Đảng Cộng sản Việt Nam</strong>.
//                   </p>
//                   <p>
//                     Hội nghị thông qua Chánh cương vắn tắt, Sách lược vắn tắt, Chương trình tóm tắt và Điều lệ vắn tắt của Đảng do Nguyễn Ái Quốc soạn thảo. Đây là Cương lĩnh chính trị đầu tiên của Đảng.
//                   </p>
//                 </div>
//                 <div className="mt-10 grid grid-cols-2 gap-6">
//                   <div className="p-6 bg-[#fdfaf6] rounded-2xl">
//                     <div className="text-heritage-red font-serif text-3xl mb-1">03/02</div>
//                     <div className="text-sm uppercase tracking-wider font-bold opacity-60">Ngày thành lập</div>
//                   </div>
//                   <div className="p-6 bg-[#fdfaf6] rounded-2xl">
//                     <div className="text-heritage-red font-serif text-3xl mb-1">Cửu Long</div>
//                     <div className="text-sm uppercase tracking-wider font-bold opacity-60">Địa điểm</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <img src="https://picsum.photos/seed/vn1/400/600" className="rounded-2xl shadow-lg grayscale" referrerPolicy="no-referrer" />
//                 <div className="space-y-4">
//                   <img src="https://picsum.photos/seed/vn2/400/300" className="rounded-2xl shadow-lg grayscale" referrerPolicy="no-referrer" />
//                   <img src="https://picsum.photos/seed/vn3/400/300" className="rounded-2xl shadow-lg grayscale" referrerPolicy="no-referrer" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Significance Section */}
//       <section id="significance" className="py-24 bg-heritage-red text-white overflow-hidden relative">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-serif mb-6">Ý nghĩa lịch sử</h2>
//             <p className="text-white/80 max-w-2xl mx-auto text-lg">
//               Sự ra đời của Đảng là một bước ngoặt vô cùng quan trọng trong lịch sử cách mạng Việt Nam.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Chấm dứt khủng hoảng",
//                 desc: "Chấm dứt thời kỳ khủng hoảng sâu sắc về đường lối cứu nước và giai cấp lãnh đạo cách mạng Việt Nam."
//               },
//               {
//                 title: "Thống nhất phong trào",
//                 desc: "Quy tụ các tổ chức cộng sản thành một khối thống nhất, tạo nên sức mạnh tổng hợp của toàn dân tộc."
//               },
//               {
//                 title: "Kết nối quốc tế",
//                 desc: "Cách mạng Việt Nam trở thành một bộ phận khăng khít của cách mạng vô sản thế giới."
//               }
//             ].map((item, i) => (
//               <motion.div 
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white/20 transition-all group"
//               >
//                 <div className="w-12 h-12 bg-heritage-gold rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
//                   <Star className="text-heritage-red w-6 h-6 fill-heritage-red" />
//                 </div>
//                 <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
//                 <p className="text-white/70 leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 bg-[#fdfaf6] border-t border-heritage-red/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-heritage-red rounded-full flex items-center justify-center">
//                 <Star className="text-heritage-gold w-4 h-4 fill-heritage-gold" />
//               </div>
//               <span className="font-serif text-lg font-bold">Lịch sử Đảng CSVN</span>
//             </div>
//             <div className="flex gap-8 text-sm font-medium text-gray-500">
//               <a href="#" className="hover:text-heritage-red transition-colors">Tài liệu tham khảo</a>
//               <a href="#" className="hover:text-heritage-red transition-colors">Bản quyền</a>
//               <a href="#" className="hover:text-heritage-red transition-colors">Liên hệ</a>
//             </div>
//             <p className="text-sm text-gray-400">
//               © 2026 Website tìm hiểu lịch sử.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useParams, useNavigate, Link, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  History, 
  Users, 
  Flag, 
  ChevronRight, 
  Star, 
  BookOpen,
  ArrowRight,
  Menu,
  ExternalLink,
  X
} from 'lucide-react';
import { title } from 'process';

// --- DỮ LIỆU ĐƯỢC CẤU TRÚC LẠI ---
const timelineData = [
  {
    id: "chuong-1-khoi-dau",
    period: "1920 - 1930",
    title: "Sự ra đời của Đảng Cộng sản Việt Nam",
    description: "Quá trình chuẩn bị và bước ngoặt thành lập Đảng.",
    imageUrl: "https://imgcdn.tapchicongthuong.vn/thumb/w_1000/tcct-media/23/9/1/1945_64f20633006a6.jpg",
    events: [
      { year: "1920", title: "Tìm thấy con đường cứu nước tại Pháp", description: "Nguyễn Ái Quốc đọc Sơ thảo Luận cương của Lênin, xác định con đường giải phóng dân tộc theo cách mạng vô sản.", link: "https://baotanglichsu.vn/vi/Articles/3097/15553/25-12-1920-nguyen-ai-quoc-tham-du-djai-hoi-lan-thu-xviii-djang-xa-hoi-phap.html" },
      { year: "1925", title: "Chuẩn bị về tổ chức", description: "Thành lập Hội Việt Nam Cách mạng Thanh niên, đào tạo cán bộ nòng cốt tại Quảng Châu." , link: "https://tapchilichsudang.vn/nguyen-ai-quoc-sang-lap-hoi-viet-nam-cach-mang-thanh-nien-va-to-bao-thanh-nien.html"},
      { year: "1927", title: "Trang bị lý luận cách mạng", description: "Xuất bản tác phẩm 'Đường Kách mệnh'.Đây là sự tổng kết kinh nghiệm các cuộc cách mạng thế giới và vạch ra những vấn đề cơ bản về chiến lược, sách lược cho cách mạng Việt Nam, là 'kim chỉ nam' cho phong trào yêu nước lúc bấy giờ." , link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_K%C3%A1ch_m%E1%BB%87nh"},
      { year: "1928", title: "Phong trào 'Vô sản hóa'", description: "Đảng viên, hội viên Hội Việt Nam Cách mạng Thanh niên đi sâu vào các hầm mỏ, nhà máy để cùng sống, cùng làm việc với công nhân. Qua đó rèn luyện ý chí và đẩy mạnh việc truyền bá lý luận cách mạng vào giai cấp tiên phong.", link: ""},
      { year: "1929", title: "Sự ra đời của 3 tổ chức Cộng sản", description: "Đông Dương CS Đảng, An Nam CS Đảng và Đông Dương CS Liên đoàn ra đời, khẳng định nhu cầu cấp thiết phải hợp nhất.", link: "" },
      { year: "1930", title: "Hội nghị hợp nhất thành lập Đảng", description: "Từ 6/1 đến 7/2/1930, thành lập Đảng Cộng sản Việt Nam và thông qua Cương lĩnh chính trị đầu tiên." , link: ""}
    ]
  },
  {
    id: "chuong-1-dau-tranh",
    period: "1930 - 1945",
    title: "Đấu tranh giành chính quyền",
    description: "Các cao trào cách mạng dẫn tới thắng lợi của Cách mạng Tháng Tám.",
    imageUrl: "https://vnanet.vn/Data/Articles/2020/01/07/4355495/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_dau_tranh_gianh_chinh_quyen_1930_%E2%80%93_1945_151221030_stand.jpg",
    events: [
      { year: "1930-1931", title: "Phong trào Xô viết Nghệ Tĩnh", description: "Cuộc tổng diễn tập đầu tiên, khẳng định quyền lãnh đạo của giai cấp công nhân và liên minh công - nông." , link: ""},
      { year: "1932-1935", title: "Phục hồi lực lượng", description: "Đại hội lần thứ I của Đảng tại Ma Cao (Trung Quốc), đánh dấu sự phục hồi hệ thống tổ chức của Đảng từ Trung ương đến địa phương.", link: ""},
      { year: "1936", title: "Cao trào Dân chủ", description: "Đảng chủ trương đấu tranh đòi dân sinh, dân chủ, cơm áo, hòa bình; kết hợp đấu tranh công khai và bí mật." , link: ""},
      { year: "1941", title: "Hội nghị Trung ương 8", description: "Nguyễn Ái Quốc về nước, thành lập mặt trận Việt Minh, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu." , link: ""},
      { year: "1944", title: "Thành lập Đội VN Tuyên truyền Giải phóng quân", description: "Ngày 22/12, tiền thân của Quân đội nhân dân Việt Nam chính thức được thành lập." , link: ""},
      { year: "1945", title: "Cách mạng Tháng Tám", description: "Tổng khởi nghĩa giành chính quyền. Ngày 2/9, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.", link: "" }
    ]
  },
  {
    id: "chuong-2-phap",
    period: "1945 - 1954",
    title: "Kháng chiến chống Pháp",
    description: "Xây dựng chính quyền và kháng chiến trường kỳ.",
    imageUrl: "https://bvhttdl.gov.vn/uploads/oldscontents/20211216150107452/o-chi-minh-trong-mot-bua-com-cung-dong-bao-chien-sy-tai-chien-khu-viet-bac-thoi-ky-khang-chien-chong.jpg",
    events: [
      { year: "1945 - 1946", title: "Bảo vệ chính quyền non trẻ", description: "1945, chính phủ lâm thời đối mặt với 'Thù trong, giặc ngoài'. 1946, tổng tuyển cử bầu Quốc hội khóa I, khẳng định tính hợp hiến của chính quyền cách mạng. Ký Hiệp định Sơ bộ, thực hiện sách lược 'Hòa để tiến' nhằm đẩy quân Tưởng về nước, kéo dài thời gian chuẩn bị kháng chiến.", link: ""},
      { year: "1946", title: "Lời kêu gọi toàn quốc kháng chiến", description: "Ngày 19/12, phát động kháng chiến toàn quốc sau những nỗ lực hòa bình bất thành với Pháp." , link: ""},
      { year: "1947", title: "Chiến dịch Việt Bắc Thu - Đông", description: "Ta đập tan kế hoạch 'Đánh nhanh thắng nhanh' của Pháp, bảo vệ an toàn cơ quan đầu não kháng chiến.", link: ""},
      { year: "1950", title: "Bước ngoặt chiến lược", description: "Tiêu diệt sinh lực địch, khai thông biên giới Việt - Trung, giành quyền chủ động trên chiến trường chính.Pháp chuyển sang kế hoạch 'Phòng ngự'." , link: ""},
      { year: "1951", title: "Đại hội đại biểu toàn quốc lần thứ II", description: "Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam, kiện toàn đường lối kháng chiến." , link: ""},
      { year: "1953-1954", title: "Cuộc tiến công chiến lược Đông Xuân", description: "Cuối năm 1953: Bộ Chính trị thông qua kế hoạch tác chiến, tập trung lực lượng tiến công vào những hướng chiến lược trọng yếu mà địch tương đối yếu (Lai Châu, Trung Lào, Hạ Lào...). Tháng 12/1953: Pháp tăng cường lực lượng xây dựng Điện Biên Phủ thành 'pháo đài bất khả xâm phạm' để thách thức quân ta.", link: ""},
      { year: "1954", title: "Thắng lợi hoàn toàn", description: "Đánh bại hoàn toàn thực dân Pháp trong Chiến dịch Điện Biên Phủ, buộc địch ký Hiệp định Giơ-ne-vơ chấm dứt chiến tranh và ách thống trị của thực dân Pháp tại Việt Nam.", link: "" }
    ]
  },
  {
    id: "chuong-2-my",
    period: "1954 - 1975",
    title: "Kháng chiến chống Mỹ",
    description: "Xây dựng Miền Bắc, giải phóng Miền Nam.",
    imageUrl: "https://media.baovanhoa.vn/zoom/1000/uploaded/nguyenthithutrang/2025_04_30/a_wfzy.jpg",
    events: [
      { year: "1959", title: "Nghị quyết Trung ương 15", description: "Xác định con đường cách mạng miền Nam là bạo lực cách mạng, dẫn tới phong trào Đồng Khởi 1960." , link: ""},
      { year: "1961-1965", title: "Mỹ thực hiện chiến lược Chiến tranh đặc biệt, tuy nhiên, dưới sự đấu tranh mạnh mẽ và quyết liệt của quân và dân miền Nam thì chiến lước này đã thất bại hoàn toàn.", link: ""},
      { year: "1965", title: "Sau thất bại của chiến lược Chiến tranh cục bộ.", description: "Mỹ chuyển sang chiến lược Chiến tranh cục bộ, đồng thời tiến hành phá hoại bằng không quân và hải quân đối với miền Bắc.", link: ""},
      { year: "1968", title: "Tổng tiến công Tết Mậu Thân", description: "Làm lung lay ý chí xâm lược của Mỹ, buộc Mỹ phải tuyên bố phi Mỹ hóa chiến tranh." , link: ""},
      { year: "1969", title: "Đối phó với chiến lược Việt Nam hóa chiến tranh", description: "Lúc này, tổng thống Mỹ mới lên là Richard Nixon đã đề xuất và tiến hành triển khai chiến lược Việt Nam hóa chiến tranh, mục đích là rút dần quân đội nhưng vẫn giữ được chính quyền ở Miền Nam.", link: ""},
      { year: "1971", title: "Chiến dịch đường 9-Nam Lào", description: "Quân và dân ta phối hợp với quân dân Lào giành thắng lợi trong chiến dịch Đường 9-Nam Lào, đánh bại cuộc hành quân Lam Sơn 719 của Mỹ và quân đội Sài Gòn, từ đó bảo vệ vững chắc con đường tiếp tế chiến lược.", link: ""},
      { year: "1972", title: "Điện Biên Phủ trên không", description: "Đánh bại cuộc tập kích 12 ngày đêm bằng B-52 của Mỹ vào Hà Nội, Hải Phòng (18-30/12/1972)." , link: ""},
      { year: "1973", title: "Hiệp định Paris-Thắng lợi trên mặt trận ngoại giao", description: "Kết quả tất yếu của những nỗ lực quân sự trước đó chính là việc kí kết Hiệp định Paris ngày 27-1-1973.", link: ""},
      { year: "1975", title: "Chiến dịch Hồ Chí Minh", description: "Ngày 30/4, giải phóng hoàn toàn miền Nam, thống nhất đất nước." , link: ""}
    ]
  },
  {
    id: "chuong-3-doi-moi",
    period: "1975 - Nay",
    title: "Xây dựng CNXH & Đổi mới",
    description: "Đưa đất nước thoát khỏi khủng hoảng và hội nhập quốc tế.",
    imageUrl: "https://file3.qdnd.vn/data/images/0/2025/01/29/upload_2176/dhvi.jpg?dpi=150&quality=100&w=870",
    events: [
      { year: "1975 - 1976", title: "Thống nhất đất nước về mặt Nhà nước", description: "Quốc hội quyết định tên nước là Cộng hòa Xã hội Chủ nghĩa Việt Nam, thủ đô là Hà Nội và đổi tên Sài Gòn thành Thành phố Hồ Chí Minh.", link: ""},
      { year: "1976 - 1981", title: "Xây dựng CNXH và Chiến tranh biên giới", description: "Đất nước rơi vào khủng hoảng kinh tế - xã hội nghiêm trọng do hậu quả chiến tranh và mô hình quản lý tập trung quan liêu, bao cấp.", link: ""},
      { year: "1982 - 1986", title: "Tìm tòi đường lối Đổi mới", description: "Đại hội V của Đảng xác định nông nghiệp là mặt trận hàng đầu.Chỉ thị 100 (Khoán sản phẩm trong nông nghiệp), Nghị quyết Hội nghị TW 8 khóa V (xóa bỏ bao cấp qua giá), tạo tiền đề cho công cuộc Đổi mới.", link: ""},
      { year: "1986", title: "Đại hội VI - Bước ngoặt Đổi mới", description: "Xóa bỏ cơ chế bao cấp, phát triển kinh tế nhiều thành phần, mở ra thời kỳ đổi mới toàn diện." , link: ""},
      { year: "1991", title: "Cương lĩnh xây dựng đất nước", description: "Đại hội VII thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH.", link: ""},
      { year: "1995", title: "Hội nhập quốc tế", description: "Việt Nam chính thức gia nhập ASEAN và bình thường hóa quan hệ với Hoa Kỳ.", link: "" },
      { year: "1996", title: "Thoát khỏi khủng hoảng", description: "Đại hội VIII khẳng định nước ta đã ra khỏi khủng hoảng kinh tế - xã hội, bắt đầu đẩy mạnh Công nghiệp hóa - Hiện đại hóa (CNH-HĐH).", link: ""},
      { year: "2006", title: "Gia nhập WTO", description: "Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO).", link: ""},
      { year: "2007", title: "Gia nhập WTO", description: "Bước tiến quan trọng trong hội nhập kinh tế thế giới, đẩy mạnh công nghiệp hóa, hiện đại hóa.", link: ""},
      { year: "2011", title: "Xác định mục tiêu", description: "Đại hội XI thông qua Cương lĩnh bổ sung và phát triển, xác định mục tiêu đưa Việt Nam trở thành nước công nghiệp theo hướng hiện đại.", link: ""},
      { year: "2016 - Nay", title: "Hội nhập sâu rộng và Cách mạng 4.0", description: "Đảng tập trung vào xây dựng, chỉnh đốn Đảng, phòng chống tham nhũng và thúc đẩy kinh tế số, đổi mới sáng tạo trong bối cảnh cuộc Cách mạng công nghiệp lần thứ tư.", link: "" }
    ]
  }
];

// // --- COMPONENT TRANG CHI TIẾT GIAI ĐOẠN ---
// const PhaseDetailPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const phase = timelineData.find(p => p.id === id);

//   if (!phase) return <div className="pt-32 text-center font-serif text-2xl">Không tìm thấy dữ liệu</div>;

//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 max-w-4xl mx-auto px-6 min-h-screen">
//       <button onClick={() => navigate('/')} className="flex items-center gap-2 text-heritage-red font-bold mb-8 hover:gap-3 transition-all">
//         <ArrowLeft className="w-4 h-4" /> QUAY LẠI TRANG CHỦ
//       </button>

//       <div className="mb-12 border-b border-heritage-red/10 pb-8">
//         <span className="text-heritage-red font-bold tracking-[0.2em] uppercase text-sm">{phase.period}</span>
//         <h1 className="text-4xl font-serif font-bold mt-2 text-gray-900 leading-tight">{phase.title}</h1>
//       </div>

//       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-heritage-red/5">
//         <img src={phase.imageUrl} alt={phase.title} className="w-full h-80 object-cover" />
//       </motion.div>

//       <div className="space-y-6">
//         {phase.events.map((event, idx) => (
//           <motion.div 
//             key={idx} 
//             initial={{ opacity: 0, x: -20 }} 
//             animate={{ opacity: 1, x: 0 }} 
//             transition={{ delay: idx * 0.1 }}
//             className="p-6 bg-white rounded-xl border border-heritage-red/5 shadow-sm hover:shadow-md transition-shadow"
//           >
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="md:w-24 shrink-0 font-bold text-heritage-red text-lg border-b md:border-b-0 md:border-r border-heritage-red/10 pb-2 md:pb-0">
//                 {event.year}
//               </div>
//               <div className="md:pl-4">
//                 <h4 className="font-bold text-lg text-gray-900">{event.title}</h4>
//                 <p className="text-gray-600 mt-1 leading-relaxed">{event.description}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// --- COMPONENT TRANG CHI TIẾT GIAI ĐOẠN ---
const PhaseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const phase = timelineData.find(p => p.id === id);

  if (!phase) return <div className="pt-32 text-center font-serif text-2xl">Không tìm thấy dữ liệu</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 max-w-5xl mx-auto px-6 min-h-screen">
      <button 
        onClick={() => navigate('/')} 
        className="flex items-center gap-2 font-black mb-10 hover:gap-4 transition-all"
        style={{ color: '#E66F6E' }}
      >
        <ArrowLeft className="w-5 h-5" /> QUAY LẠI TRANG CHỦ
      </button>

      {/* Header Giai đoạn */}
      <div className="mb-12 border-b-2 border-[#E66F6E]/10 pb-10">
        <span 
          style={{ color: '#E66F6E' }}
          className="font-black tracking-[0.3em] uppercase text-sm md:text-base"
        >
          {phase.period}
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mt-4 text-gray-900 leading-tight">
          {phase.title}
        </h1>
      </div>

      {/* Banner Hình ảnh */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="mb-16 rounded-[2rem] overflow-hidden shadow-2xl border border-[#E66F6E]/10"
      >
        <img src={phase.imageUrl} alt={phase.title} className="w-full h-[450px] object-cover" />
      </motion.div>

      {/* Danh sách sự kiện chi tiết */}
      <div className="space-y-10">
        {phase.events.map((event, idx) => (
          <motion.a 
            key={idx} 
            href={event.link} // Đường dẫn đến trang báo
            target="_blank"   // Mở trong tab mới
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: idx * 0.1 }}
            className="block p-8 bg-white rounded-3xl border border-[#E66F6E]/5 shadow-sm hover:shadow-xl hover:border-[#E66F6E]/30 transition-all group cursor-pointer"
            //className="p-8 bg-white rounded-3xl border border-[#E66F6E]/5 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Cột Năm: To và Đậm */}
              <div 
                style={{ color: '#E66F6E' }}
                className="md:w-32 shrink-0 font-black text-2xl md:text-3xl border-b-2 md:border-b-0 md:border-r-2 border-[#E66F6E]/10 pb-4 md:pb-0 md:pr-4"
              >
                {event.year}
              </div>

              {/* Cột Nội dung */}
              {/* <div className="md:pl-2">
                <h4 className="font-bold text-2xl md:text-3xl text-gray-900 leading-tight mb-4">
                  {event.title}
                </h4>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                  {event.description}
                </p>
              </div> */}

              {/* Cột Nội dung */}
              <div className="md:pl-2 flex-grow">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-2xl md:text-3xl text-gray-900 leading-tight mb-4 group-hover:text-[#E66F6E] transition-colors">
                    {event.title}
                  </h4>
                  {/* Icon báo hiệu link ngoài */}
                  <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-[#E66F6E] mt-1" />
                </div>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                  {event.description}
                </p>
                <div className="mt-4 text-sm font-bold text-[#E66F6E]/60 uppercase tracking-widest group-hover:text-[#E66F6E]">
                  Click để đọc tư liệu chi tiết →
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

// --- COMPONENT TRANG CHỦ ---
const MainLanding = () => {
  const navigate = useNavigate();

  return (
  <main>
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1599708153386-62bf3f03328d?q=80" 
          className="w-full h-full object-cover" 
          alt="Background"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CỘT TRÁI: VĂN BẢN */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8">
              Lịch sử Đảng <br/>
              <span className="text-heritage-red">Việt Nam</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 max-w-xl">
              Khám phá hành trình vĩ đại của Đảng Cộng sản Việt Nam qua các thời kỳ lịch sử, 
              từ những ngày đầu thành lập đến những mốc son chói lọi.
            </p>
            <a href="#timeline" className="px-8 py-4 bg-heritage-red text-white font-bold rounded-lg shadow-xl inline-block hover:bg-red-700 transition-colors">
              BẮT ĐẦU TÌM HIỂU
            </a>
          </motion.div>

          {/* CỘT PHẢI: HÌNH ẢNH MỚI ADD */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.2 }} 
            animate={{ opacity: 1, scale: 1.3 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="aspect-[4/5] max-w-[450px] ml-auto rounded-[2rem] overflow-hidden shadow-2xl relative group border border-white/10">
              <img 
                src="https://picsum.photos/seed/vietnam-history/800/1000" 
                alt="Lịch sử Việt Nam" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif italic text-2xl leading-relaxed">
                  "Đảng ta là đạo đức, là văn minh."
                </p>
                <div className="h-0.5 w-12 bg-heritage-red my-4" />
                <p className="text-sm font-bold tracking-widest uppercase opacity-80">
                  — Chủ tịch Hồ Chí Minh
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>


    {/* PHẦN TIMELINE GIỮ NGUYÊN */}

    {/* PHẦN TIMELINE VỚI BACKGROUND MỚI */}
      <section 
        id="timeline" 
        className="py-32 bg-[#fdfaf6] relative overflow-hidden"
        style={{
          backgroundImage: `url(https://i.pinimg.com/736x/d4/59/e1/d459e1858147fc18eda423f77f5c75f3.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* LỚP PHỦ OVERLAY ĐỂ CHỮ DỄ ĐỌC HƠN */}
        <div className="absolute inset-0 bg-black/35 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif font-bold mb-6 text-white">Tiến Trình Lịch Sử</h2>
            <div 
              className="h-1 w-24 mx-auto" 
              style={{ backgroundColor: '#E66F6E' }}
            />
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 md:before:mx-auto">
            {/* ĐƯỜNG KẺ DỌC - ĐỔI MÀU TRẮNG VỚI ĐỘ MỜ */}
            <div className="absolute inset-0 ml-5 md:ml-0 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-white/30 z-0" />

            {timelineData.map((phase) => (
              <motion.div key={phase.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* ICON LỊCH - GIỮ MÀU CHỦ ĐẠO ĐỂ NỔI BẬT TRÊN NỀN ĐEN */}
                <div 
                  style={{ borderColor: '#E66F6E', color: '#E66F6E' }}
                  className="flex items-center justify-center w-10 h-10 rounded-full border bg-white/90 shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"
                >
                  <Calendar className="w-5 h-5" />
                </div>
                
                {/* KHUNG NỘI DUNG - GIỮ NỀN TRẮNG ĐỂ ĐỌC CHỮ DỄ NHẤT */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-2xl border bg-white shadow-xl hover:shadow-2xl transition-all">
                  <span style={{ color: '#E66F6E' }}className="font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
                    {phase.period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mt-3 text-gray-900 leading-tight">{phase.title}</h3>
                  <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed line-clamp-3">{phase.description}</p>
                  <button 
                    style={{ color: '#E66F6E' }}
                    onClick={() => navigate(`/phase/${phase.id}`)} 
                    className="mt-6 flex items-center gap-2 text-sm md:text-base font-black hover:gap-4 transition-all"
                  >
                    XEM CHI TIẾT <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/*     
    <section id="timeline" className="py-32 bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif font-bold mb-6">Tiến Trình Lịch Sử</h2>
          <div className="h-1 w-24 bg-heritage-red mx-auto" />
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-heritage-red/20 md:before:mx-auto">
          {timelineData.map((phase) => (
            <motion.div key={phase.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-heritage-red/20 bg-[#fdfaf6] text-heritage-red shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Calendar className="w-5 h-5" />
              </div>
              

              <div style={{ borderColor: '#E66F6E' }} className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all">
                <span style={{ color: '#E66F6E' }} className="font-bold text-sm tracking-widest">
                  {phase.period}
                </span>
                <h3 className="text-2xl font-serif font-bold mt-2 text-gray-900">{phase.title}</h3>
                <p className="mt-3 text-gray-600 line-clamp-2">{phase.description}</p>
                <button style={{ color: '#E66F6E' }} className="mt-6 flex items-center gap-2 text-sm font-bold hover:gap-4 transition-all">
                  XEM CHI TIẾT <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              
            </motion.div>
          ))}
        </div>
      </div>
    </section> */}

    <section id="significance" className="py-24 bg-heritage-red text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif mb-6">Ý nghĩa lịch sử</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                Sự ra đời của Đảng là một bước ngoặt vô cùng quan trọng, chấm dứt thời kỳ khủng hoảng về đường lối cứu nước trong lịch sử cách mạng Việt Nam.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Chấm dứt khủng hoảng",
                desc: "Chấm dứt thời kỳ khủng hoảng sâu sắc về đường lối cứu nước và giai cấp lãnh đạo cách mạng Việt Nam."
              },
              {
                title: "Thống nhất phong trào",
                desc: "Quy tụ các tổ chức cộng sản thành một khối thống nhất, tạo nên sức mạnh tổng hợp của toàn dân tộc."
              },
              {
                title: "Kết nối quốc tế",
                desc: "Cách mạng Việt Nam trở thành một bộ phận khăng khít của cách mạng vô sản thế giới, tranh thủ được sự ủng hộ quốc tế."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <Star className="text-heritage-red w-6 h-6 fill-heritage-red" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 font-bold text-white leading-tight">{item.title}</h3>
                <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  </main>
);
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#1a1a1a]">
      <nav className="fixed top-0 w-full z-50 bg-[#fdfaf6]/80 backdrop-blur-md border-b border-heritage-red/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-heritage-red rounded-lg flex items-center justify-center">
              <Star className="text-heritage-gold w-6 h-6 fill-heritage-gold" />
            </div>
            <span className="font-serif text-xl font-bold uppercase">Lịch sử Đảng</span>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/phase/:id" element={<PhaseDetailPage />} />
      </Routes>

      <footer className="py-20 bg-[#1a1a1a] text-white text-center">
        <p className="text-gray-400">© 2026 Lịch sử Đảng Việt Nam. Thiết kế cho mục đích giáo dục.</p>
      </footer>
    </div>
  );
}






