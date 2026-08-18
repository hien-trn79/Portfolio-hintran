import imgGIS from '../imports/DesktopLightBottom/mapGIS-NLCS.png'
import imgEcommerce from '../imports/DesktopLightBottom/ReGreenBg.png'
// import imgPortfolio from '../imports/DesktopLightBottom/fa115285f62613e20e83edac812574abf3c4c112.png'

// ─── Project data ──────────────────────────────────────────────────────────
const projects = [
  {
    img: imgGIS,
    tags: [
      'Node.js',
      'TypeScript',
      'React',
      'MapLibre GL JS',
      'PostgreSQL',
      'PostGIS',
      'QGIS',
      'OpenStreetMap',
      'Tailwind CSS',
    ],
    github: 'https://github.com/hien-trn79/CTUCampus',
    content: {
      en: {
        title: 'CTU Campus 3D Map',
        role: 'WebGIS & Back-End Lead Developer',
        desc: 'Interactive 3D WebGIS platform for indoor/outdoor shortest-path navigation across the CTU CICT building, built from converted AutoCAD architectural blueprints.',
        status: 'Completed',
        team: '1 member',
        period: 'Oct 2025 – Apr 2026',
        overview:
          'A WebGIS application that brings indoor and outdoor campus navigation into a single interactive 3D map. Complex AutoCAD architectural blueprints of the CTU CICT building were converted into structured GIS layers in QGIS, then rendered as a multi-story, explorable 3D map in the browser — letting students and visitors find classrooms and plan routes without relying on paper maps or static signage.',
        features: [
          'Interactive 3D map rendering multi-story indoor floor plans with room-level metadata',
          'Combined indoor/outdoor shortest-path routing between any two points on campus',
          '"Locate Me" personal positioning to show the user\'s current position on the map',
          'Outdoor road and path data sourced live from OpenStreetMap via Overpass Turbo',
          'Real-time route recalculation powered by A* pathfinding on spatial indexes',
          'Layered map controls for switching between floors and outdoor/indoor views',
        ],
        responsibilities: [
          'Converted AutoCAD architectural blueprints into structured, georeferenced GIS layers using QGIS',
          'Designed the PostgreSQL/PostGIS spatial schema for indoor floor plans, rooms, and pathway networks',
          'Built the interactive 3D map front-end with MapLibre GL JS and React/TypeScript',
          'Implemented the Node.js back-end and REST APIs serving spatial data to the client',
          'Integrated OpenStreetMap data via Overpass Turbo for outdoor road and path networks',
          'Implemented A* pathfinding integrated with PostGIS/GeoServer for real-time optimal route updates',
        ],
        challenges: [
          {
            problem:
              'Converting non-georeferenced AutoCAD architectural drawings into usable GIS data',
            solution:
              'Digitized and georeferenced the CAD blueprints in QGIS, restructuring rooms, corridors, and stairwells into topologically clean vector layers ready for spatial querying',
          },
          {
            problem: 'Computing fast, accurate routes across combined indoor and outdoor networks',
            solution:
              'Modeled indoor and outdoor pathways as a unified routing graph in PostGIS and applied the A* algorithm to return optimal routes with low latency, even as floors and connectors were queried on demand',
          },
        ],
      },
      vi: {
        title: 'Bản đồ 3D Khuôn viên ĐHCT',
        role: 'Trưởng nhóm phát triển WebGIS & Back-End',
        desc: 'Nền tảng WebGIS 3D tương tác hỗ trợ tìm đường đi ngắn nhất trong/ngoài nhà tại tòa nhà CICT - Trường ĐHCT, được xây dựng từ bản vẽ kiến trúc AutoCAD.',
        status: 'Đã hoàn thành',
        team: '1 thành viên',
        period: '10/2025 – 4/2026',
        overview:
          'Ứng dụng WebGIS tích hợp định vị và tìm đường trong lẫn ngoài khuôn viên trường vào một bản đồ 3D tương tác duy nhất. Các bản vẽ kiến trúc AutoCAD phức tạp của tòa nhà CICT - ĐHCT được chuyển đổi thành các lớp dữ liệu GIS có cấu trúc bằng QGIS, sau đó hiển thị dưới dạng bản đồ 3D nhiều tầng, có thể khám phá ngay trên trình duyệt — giúp sinh viên và khách tham quan tìm phòng học, lên lộ trình mà không cần dùng bản đồ giấy hay bảng chỉ dẫn tĩnh.',
        features: [
          'Bản đồ 3D tương tác hiển thị mặt bằng nhiều tầng kèm thông tin chi tiết từng phòng',
          'Tìm đường đi ngắn nhất kết hợp trong nhà và ngoài trời giữa hai điểm bất kỳ trong khuôn viên',
          'Định vị cá nhân "Locate Me" hiển thị vị trí hiện tại của người dùng trên bản đồ',
          'Dữ liệu đường đi ngoài trời được lấy trực tiếp từ OpenStreetMap qua Overpass Turbo',
          'Tính toán lại lộ trình theo thời gian thực nhờ thuật toán tìm đường A* trên chỉ mục không gian',
          'Điều khiển lớp bản đồ cho phép chuyển đổi giữa các tầng và chế độ trong nhà/ngoài trời',
        ],
        responsibilities: [
          'Chuyển đổi bản vẽ kiến trúc AutoCAD thành các lớp dữ liệu GIS có cấu trúc, có tọa độ địa lý bằng QGIS',
          'Thiết kế cơ sở dữ liệu không gian PostgreSQL/PostGIS cho mặt bằng, phòng và mạng lưới đường đi trong nhà',
          'Xây dựng giao diện bản đồ 3D tương tác bằng MapLibre GL JS và React/TypeScript',
          'Triển khai back-end Node.js và các REST API cung cấp dữ liệu không gian cho client',
          'Tích hợp dữ liệu OpenStreetMap qua Overpass Turbo cho mạng lưới đường đi ngoài trời',
          'Triển khai thuật toán tìm đường A* kết hợp PostGIS/GeoServer để cập nhật lộ trình tối ưu theo thời gian thực',
        ],
        challenges: [
          {
            problem:
              'Chuyển đổi bản vẽ kiến trúc AutoCAD chưa có tọa độ địa lý thành dữ liệu GIS sử dụng được',
            solution:
              'Số hóa và gán tọa độ địa lý cho bản vẽ CAD trong QGIS, tái cấu trúc phòng, hành lang và cầu thang thành các lớp vector có cấu trúc tô-pô sạch, sẵn sàng cho truy vấn không gian',
          },
          {
            problem:
              'Tính toán lộ trình nhanh và chính xác trên mạng lưới kết hợp cả trong nhà và ngoài trời',
            solution:
              'Mô hình hóa đường đi trong nhà và ngoài trời thành một đồ thị định tuyến thống nhất trong PostGIS, áp dụng thuật toán A* để trả về lộ trình tối ưu với độ trễ thấp, kể cả khi truy vấn tầng và điểm kết nối theo yêu cầu',
          },
        ],
      },
    },
  },
  {
    img: imgEcommerce,
    tags: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'Spring AI',
      'React 19',
      'TypeScript',
      'PostgreSQL',
      'pgvector',
      'Gemini 2.5 Flash',
      'PayOS API',
      'Cloudinary',
      'Tailwind CSS',
    ],
    github: 'github.com/nhutit05/sustainable-products-system',
    content: {
      en: {
        title: 'ReGreen – AI-Powered Sustainable E-Commerce Platform',
        role: 'Fullstack Developer',
        desc: 'Full-stack sustainable e-commerce system combining traditional online shopping with an AI chatbot for eco-friendly product recommendations and carbon footprint tracking.',
        status: 'Completed',
        team: '2 members',
        period: 'May 2026 – Now',
        overview:
          "A sustainable e-commerce platform that pairs conventional online shopping with an AI-driven advisor. Shoppers browse and buy eco-friendly products as usual, while a retrieval-augmented chatbot answers questions with citation-backed, zero-hallucination guidance on green living, and the platform tracks each user's eco-points and carbon footprint over time.",
        features: [
          'Full product catalog, cart, and checkout flow with PayOS payment integration',
          'AI chatbot (RAG) delivering citation-backed, eco-friendly product and lifestyle recommendations',
          'Automated payment webhooks with scheduled auto-cancellation of unpaid orders',
          'Eco-point tracking and carbon footprint index calculated per user',
          '50+ RESTful APIs backing ~40 database tables',
          'Secure authentication via JWT and OAuth 2.0',
        ],
        responsibilities: [
          'Built a scalable MVC backend with 50+ RESTful APIs across ~40 tables using Java 21 and Spring Boot',
          'Implemented authentication and authorization with Spring Security, JWT, and OAuth 2.0',
          'Built a dynamic product comparison feature based on custom criteria and implemented an automated recommendation system for suitable products.',
          'Managed project roadmap and progress; designed system architecture and maintained comprehensive technical documentation throughout the development lifecycle.',
          'Built responsive React 19/TypeScript UIs for eco-point tracking and carbon index visualization',
          'Handled image uploads and storage via the Cloudinary API',
        ],
        challenges: [
          {
            problem: 'AI chatbot responses risked hallucinating inaccurate sustainability claims',
            solution:
              'Grounded every response in a retrieval-augmented pipeline using pgvector similarity search over a curated knowledge base, with Gemini 2.5 Flash required to cite its sources — eliminating unsupported claims',
          },
          {
            problem:
              'Unpaid orders could hold inventory indefinitely, blocking stock for other buyers',
            solution:
              'Combined PayOS webhook events with a Spring Scheduler job to automatically detect and cancel unpaid orders after a timeout, releasing reserved inventory back to the catalog',
          },
        ],
      },
      vi: {
        title: 'ReGreen – Nền tảng Thương mại Điện tử Bền vững tích hợp AI',
        role: 'Fullstack Developer',
        desc: 'Hệ thống thương mại điện tử bền vững full-stack, kết hợp mua sắm trực tuyến truyền thống với chatbot AI gợi ý sản phẩm thân thiện môi trường và theo dõi dấu chân carbon.',
        status: 'Đã hoàn thành',
        team: '2 thành viên',
        period: '5/2026 – Hiện tại',
        overview:
          'Nền tảng thương mại điện tử bền vững kết hợp mua sắm trực tuyến thông thường với một trợ lý AI. Người dùng duyệt và mua sản phẩm thân thiện môi trường như bình thường, trong khi chatbot theo mô hình truy xuất tăng cường (RAG) trả lời câu hỏi kèm trích dẫn nguồn, không bịa đặt thông tin về lối sống xanh; nền tảng cũng theo dõi điểm sinh thái và chỉ số carbon của từng người dùng theo thời gian.',
        features: [
          'Luồng mua sắm đầy đủ: danh mục sản phẩm, giỏ hàng, thanh toán tích hợp PayOS',
          'Chatbot AI (RAG) đưa ra gợi ý sản phẩm và lối sống thân thiện môi trường kèm trích dẫn nguồn',
          'Webhook thanh toán tự động cùng cơ chế tự hủy đơn hàng chưa thanh toán theo lịch',
          'Theo dõi điểm sinh thái và chỉ số dấu chân carbon tính riêng cho từng người dùng',
          'Hơn 50 RESTful API phục vụ khoảng 40 bảng dữ liệu',
          'Xác thực bảo mật bằng JWT và OAuth 2.0',
        ],
        responsibilities: [
          'Xây dựng backend MVC có khả năng mở rộng với hơn 50 RESTful API trên khoảng 40 bảng dữ liệu bằng Java 21 và Spring Boot',
          'Triển khai xác thực và phân quyền với Spring Security, JWT và OAuth 2.0',
          'Xây dựng tính năng so sánh sản phẩm theo nhiều tiêu chí đa dạng và phát triển hệ thống gợi ý sản phẩm phù hợp dựa trên nhu cầu người dùng.',
          'Quản lý tiến độ dự án, thiết kế kiến trúc hệ thống và xây dựng/lưu trữ toàn bộ tài liệu kỹ thuật trong suốt quá trình phát triển.',
          'Xây dựng giao diện React 19/TypeScript responsive cho theo dõi điểm sinh thái và chỉ số carbon',
          'Xử lý tải lên và lưu trữ hình ảnh qua Cloudinary API',
        ],
        challenges: [
          {
            problem:
              'Chatbot AI có nguy cơ đưa ra thông tin sai lệch về tính bền vững (ảo giác AI)',
            solution:
              'Đảm bảo mọi câu trả lời đều dựa trên pipeline truy xuất tăng cường, sử dụng tìm kiếm tương đồng pgvector trên kho tri thức được tuyển chọn, yêu cầu Gemini 2.5 Flash phải trích dẫn nguồn — loại bỏ các khẳng định không có căn cứ',
          },
          {
            problem:
              'Đơn hàng chưa thanh toán có thể giữ hàng tồn kho vô thời hạn, chặn nguồn hàng cho người mua khác',
            solution:
              'Kết hợp sự kiện webhook từ PayOS với job Spring Scheduler để tự động phát hiện và hủy đơn hàng chưa thanh toán sau một khoảng thời gian, giải phóng hàng tồn kho đã giữ trở lại danh mục',
          },
        ],
      },
    },
  },
]

export default projects
