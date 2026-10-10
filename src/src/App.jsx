import React, { useState, useEffect, useRef, useMemo } from 'react';

// --- مكونات الأيقونات المدمجة (تحل مشكلة عدم وجود lucide-react وتعمل فوراً بدون أي تثبيت) ---
const IconWrapper = ({ children, className = 'w-5 h-5', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

const Edit3 = (p) => (
  <IconWrapper {...p}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </IconWrapper>
);
const Eye = (p) => (
  <IconWrapper {...p}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </IconWrapper>
);
const EyeOff = (p) => (
  <IconWrapper {...p}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </IconWrapper>
);
const Save = (p) => (
  <IconWrapper {...p}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </IconWrapper>
);
const Plus = (p) => (
  <IconWrapper {...p}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </IconWrapper>
);
const Trash2 = (p) => (
  <IconWrapper {...p}>
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </IconWrapper>
);
const ImageIcon = (p) => (
  <IconWrapper {...p}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </IconWrapper>
);
const Mail = (p) => (
  <IconWrapper {...p}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconWrapper>
);
const MapPin = (p) => (
  <IconWrapper {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconWrapper>
);
const Phone = (p) => (
  <IconWrapper {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </IconWrapper>
);
const X = (p) => (
  <IconWrapper {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </IconWrapper>
);
const Settings = (p) => (
  <IconWrapper {...p}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </IconWrapper>
);
const Upload = (p) => (
  <IconWrapper {...p}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </IconWrapper>
);
const Type = (p) => (
  <IconWrapper {...p}>
    <polyline points="4 7 4 4 20 4 20 7" />
    <line x1="9" y1="20" x2="15" y2="20" />
    <line x1="12" y1="4" x2="12" y2="20" />
  </IconWrapper>
);
const Droplet = (p) => (
  <IconWrapper {...p}>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </IconWrapper>
);
const LayoutTemplate = (p) => (
  <IconWrapper {...p}>
    <rect width="18" height="7" x="3" y="3" rx="1" />
    <rect width="9" height="7" x="3" y="14" rx="1" />
    <rect width="5" height="7" x="16" y="14" rx="1" />
  </IconWrapper>
);
const AlertTriangle = (p) => (
  <IconWrapper {...p}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </IconWrapper>
);
const Check = (p) => (
  <IconWrapper {...p}>
    <polyline points="20 6 9 17 4 12" />
  </IconWrapper>
);
const Bold = (p) => (
  <IconWrapper {...p}>
    <path d="M6 12h9a4 4 0 0 1 0 8H6v-8zm0 0h8a3.5 3.5 0 0 0 0-7H6v7z" />
  </IconWrapper>
);
const Italic = (p) => (
  <IconWrapper {...p}>
    <line x1="19" y1="4" x2="10" y2="4" />
    <line x1="14" y1="20" x2="5" y2="20" />
    <line x1="15" y1="4" x2="9" y2="20" />
  </IconWrapper>
);
const Underline = (p) => (
  <IconWrapper {...p}>
    <path d="M6 3v7a6 6 0 0 0 12 0V3" />
    <line x1="4" y1="21" x2="20" y2="21" />
  </IconWrapper>
);
const Palette = (p) => (
  <IconWrapper {...p}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
  </IconWrapper>
);
const Filter = (p) => (
  <IconWrapper {...p}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </IconWrapper>
);
const MessageCircle = (p) => (
  <IconWrapper {...p}>
    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
  </IconWrapper>
);
const Download = (p) => (
  <IconWrapper {...p}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </IconWrapper>
);

// --- البيانات الافتراضية ---
const DEFAULT_DATA = {
  profile: {
    name: "باسل <span style='color: var(--accent);'>للتصميم</span>",
    title: 'مصمم جرافيك وخبير هوية بصرية',
    bio: "أصنع تجارب بصرية فريدة تجمع بين البساطة والفخامة. أؤمن بأن التصميم العظيم لا يقتصر على الشكل الجميل، بل هو <span style='color: var(--accent); font-weight: bold;'>لغة صامتة</span> تروي قصة علامتك التجارية وتترك انطباعاً لا يُنسى.",
    email: 'hello@basel-design.com',
    phone: '+966 50 123 4567',
    location: 'الرياض، المملكة العربية السعودية',
  },
  settings: {
    fontFamily: 'Cairo',
    accentColor: '#d4af37',
    textColor: '#e5e5e5',
    heroBgImage: null,
    whatsappNumber: '966501234567',
    sections: {
      hero: true,
      portfolio: true,
      contact: true,
    },
  },
  social: [
    {
      id: 1,
      platform: 'Behance',
      url: 'https://behance.net',
      iconClass: 'fa-brands fa-behance',
    },
    {
      id: 2,
      platform: 'X',
      url: 'https://x.com',
      iconClass: 'fa-brands fa-x-twitter',
    },
    {
      id: 3,
      platform: 'TikTok',
      url: 'https://tiktok.com',
      iconClass: 'fa-brands fa-tiktok',
    },
    {
      id: 4,
      platform: 'Snapchat',
      url: 'https://snapchat.com',
      iconClass: 'fa-brands fa-snapchat',
    },
  ],
  projects: [
    {
      id: '1',
      title: 'علامة أورينت للعطور',
      category: 'هوية بصرية',
      description:
        'تصميم هوية بصرية كاملة لعلامة عطور فاخرة تستهدف السوق الخليجي. تم التركيز على الخطوط العربية الأصيلة والألوان الملكية لتعكس فخامة المنتج.',
      thumbnail:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
      ],
    },
    {
      id: '2',
      title: 'حملة سوشيال ميديا',
      category: 'سوشيال ميديا',
      description: 'تصاميم إبداعية لحملة تسويقية عبر منصات التواصل الاجتماعي.',
      thumbnail:
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
      gallery: [],
    },
  ],
};

const SOCIAL_OPTIONS = [
  { key: 'x-twitter', class: 'fa-brands fa-x-twitter', name: 'X (Twitter)' },
  { key: 'tiktok', class: 'fa-brands fa-tiktok', name: 'TikTok' },
  { key: 'snapchat', class: 'fa-brands fa-snapchat', name: 'Snapchat' },
  { key: 'instagram', class: 'fa-brands fa-instagram', name: 'Instagram' },
  { key: 'behance', class: 'fa-brands fa-behance', name: 'Behance' },
  { key: 'linkedin', class: 'fa-brands fa-linkedin', name: 'LinkedIn' },
  { key: 'youtube', class: 'fa-brands fa-youtube', name: 'YouTube' },
  { key: 'link', class: 'fa-solid fa-link', name: 'رابط خارجي' },
];

const compressImage = (file, maxWidth, maxHeight, callback) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (event) => {
    const img = new Image();
    img.src = event.target.result;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height *= maxWidth / width));
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width *= maxHeight / height));
          height = maxHeight;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      callback(canvas.toDataURL('image/jpeg', 0.8));
    };
  };
};

const ContentEditable = ({
  html,
  onChange,
  isEditMode,
  className,
  tagName: Tag = 'div',
  placeholder = '',
}) => {
  const contentEditableRef = useRef(null);

  useEffect(() => {
    if (
      contentEditableRef.current &&
      contentEditableRef.current.innerHTML !== html
    ) {
      contentEditableRef.current.innerHTML = html;
    }
  }, [html]);

  const handleInput = () => {
    if (onChange && contentEditableRef.current) {
      onChange(contentEditableRef.current.innerHTML);
    }
  };

  return (
    <Tag
      ref={contentEditableRef}
      contentEditable={isEditMode}
      onInput={handleInput}
      onBlur={handleInput}
      className={`${className} ${
        isEditMode
          ? 'border border-dashed border-white/30 hover:border-[var(--accent)] focus:outline-none focus:bg-black/40 rounded-lg px-3 py-2 cursor-text transition-all min-w-[50px] min-h-[1.5em]'
          : 'border border-transparent'
      }`}
      dangerouslySetInnerHTML={{ __html: html }}
      data-placeholder={placeholder}
    />
  );
};

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('basel_portfolio_master');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error loading data', e);
      }
    }
    return DEFAULT_DATA;
  });

  const [isEditMode, setIsEditMode] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formState, setFormState] = useState({});
  const [toastMessage, setToastMessage] = useState(null);
  const [confirmDialog, setConfirmDialog] = useState(null);
  const [customColor, setCustomColor] = useState(data.settings.accentColor);
  const [activeCategory, setActiveCategory] = useState('الكل');
  const importFileRef = useRef(null);

  const categories = useMemo(() => {
    const cats = new Set(data.projects.map((p) => p.category).filter(Boolean));
    return ['الكل', ...Array.from(cats)];
  }, [data.projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'الكل') return data.projects;
    return data.projects.filter((p) => p.category === activeCategory);
  }, [data.projects, activeCategory]);

  useEffect(() => {
    try {
      localStorage.setItem('basel_portfolio_master', JSON.stringify(data));
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        showToast('مساحة التخزين ممتلئة. يرجى مسح بعض الصور القديمة.', 'error');
      }
    }
  }, [data]);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  const confirmAction = (message, action) => {
    setConfirmDialog({ message, action });
  };

  const handleFileUpload = (e, callback, maxWidth = 1200, maxHeight = 1200) => {
    const file = e.target.files[0];
    if (file) {
      compressImage(file, maxWidth, maxHeight, callback);
    }
  };

  const updateProfile = (field, value) =>
    setData((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value },
    }));
  const updateSettings = (field, value) =>
    setData((prev) => ({
      ...prev,
      settings: { ...prev.settings, [field]: value },
    }));

  const toggleSection = (sectionKey) => {
    setData((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        sections: {
          ...prev.settings.sections,
          [sectionKey]: !prev.settings.sections[sectionKey],
        },
      },
    }));
  };

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  // تصدير البيانات إلى ملف JSON
  const handleExportData = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute(
      'download',
      `portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('تم تنزيل النسخة الاحتياطية بنجاح');
  };

  // استيراد البيانات
  const handleImportData = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        setData(importedData);
        showToast('تم استيراد كافة البيانات بنجاح!');
      } catch (err) {
        showToast('حدث خطأ في قراءة الملف.', 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const saveProject = () => {
    if (!selectedProject.title)
      return showToast('يرجى إدخال عنوان للمشروع', 'warning');
    setData((prev) => {
      const exists = prev.projects.find((p) => p.id === selectedProject.id);
      if (exists) {
        return {
          ...prev,
          projects: prev.projects.map((p) =>
            p.id === selectedProject.id ? selectedProject : p
          ),
        };
      }
      return { ...prev, projects: [selectedProject, ...prev.projects] };
    });
    showToast('تم حفظ المشروع بنجاح');
    setActiveModal(null);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#070707] transition-colors duration-500 selection:bg-[var(--accent)] selection:text-black"
    >
      {/* Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&family=Readex+Pro:wght@300;400;600;700&family=Tajawal:wght@300;400;500;700;800&display=swap');
        
        * { 
          font-family: '${data.settings.fontFamily}', sans-serif; 
          scrollbar-width: thin;
          scrollbar-color: var(--accent) #111;
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 4px; }
        
        :root {
          --accent: ${data.settings.accentColor};
          --text-main: ${data.settings.textColor};
        }
        
        body { color: var(--text-main); }
        .text-accent { color: var(--accent); }
        .bg-accent { background-color: var(--accent); }
        .border-accent { border-color: var(--accent); }
        
        .section-hidden { opacity: 0.3; border: 1px dashed red; position: relative; }
        .section-hidden::after {
          content: "هذا القسم مخفي ولن يظهر للزوار";
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          background: rgba(220, 38, 38, 0.9); color: white; padding: 8px 16px;
          border-radius: 8px; font-weight: bold; pointer-events: none; z-index: 10;
        }
        
        .hover-lift { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 15px 35px -10px var(--accent); }
      `,
        }}
      />

      {/* الزر العائم أسفل يسار الشاشة للتبديل بين التعديل والمعاينة */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <button
          onClick={() => {
            setIsEditMode(!isEditMode);
            setIsSettingsOpen(false);
          }}
          className={`flex items-center justify-center w-12 h-12 rounded-full shadow-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-110 ${
            isEditMode
              ? 'bg-red-500/90 border-red-400 text-white'
              : 'bg-black/50 border-white/10 text-white/50 hover:text-white'
          }`}
          title={
            isEditMode
              ? 'إغلاق وضع التحرير ومُعاينة الموقع'
              : 'تفعيل وضع التحرير'
          }
        >
          {isEditMode ? (
            <Eye className="w-5 h-5" />
          ) : (
            <Edit3 className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* زر الواتساب العائم */}
      {!isEditMode && data.settings.whatsappNumber && (
        <a
          href={`https://wa.me/${data.settings.whatsappNumber.replace(
            /[^0-9]/g,
            ''
          )}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
          title="تواصل عبر واتساب"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      )}

      {/* شريط أدوات التحرير وتلوين النصوص */}
      {isEditMode && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3 w-[90%] md:w-auto">
          <div className="bg-[#111]/95 backdrop-blur-xl border border-white/20 p-2 md:p-3 rounded-2xl flex flex-wrap items-center justify-center gap-2 md:gap-4 shadow-2xl">
            <span className="text-xs font-bold text-accent px-2 border-l border-white/10 hidden md:block">
              أدوات التحرير:
            </span>

            <div className="flex items-center gap-1">
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  formatText('bold');
                }}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <Bold className="w-4 h-4" />
              </button>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  formatText('italic');
                }}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <Italic className="w-4 h-4" />
              </button>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  formatText('underline');
                }}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <Underline className="w-4 h-4" />
              </button>
            </div>

            <div className="h-6 w-[1px] bg-white/20"></div>

            <div className="flex items-center gap-2">
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  formatText('foreColor', data.settings.accentColor);
                }}
                className="w-7 h-7 rounded-full shadow-inner border border-white/20 hover:scale-110 transition-transform"
                style={{ backgroundColor: data.settings.accentColor }}
                title="لون ذهبي (أساسي)"
              ></button>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  formatText('foreColor', '#ffffff');
                }}
                className="w-7 h-7 rounded-full shadow-inner border border-white/20 bg-white hover:scale-110 transition-transform"
                title="أبيض"
              ></button>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  formatText('foreColor', '#888888');
                }}
                className="w-7 h-7 rounded-full shadow-inner border border-white/20 bg-neutral-500 hover:scale-110 transition-transform"
                title="رمادي"
              ></button>

              <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/20 overflow-hidden hover:opacity-80">
                <input
                  type="color"
                  value={customColor}
                  onChange={(e) => setCustomColor(e.target.value)}
                  onBlur={() => formatText('foreColor', customColor)}
                  className="absolute inset-[-10px] w-[50px] h-[50px] cursor-pointer"
                />
                <Palette className="w-3 h-3 text-white pointer-events-none drop-shadow-md mix-blend-difference" />
              </div>
            </div>

            <div className="h-6 w-[1px] bg-white/20"></div>

            <button
              onClick={() => setIsSettingsOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-black bg-accent font-bold hover:brightness-110 transition-all"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">إعدادات الموقع</span>
            </button>
          </div>
        </div>
      )}

      {/* القائمة الجانبية للإعدادات */}
      {isSettingsOpen && isEditMode && (
        <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-[#111] border-l border-white/10 shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/50 sticky top-0 backdrop-blur-md z-10">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-accent" /> إعدادات الموقع
            </h2>
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="text-neutral-400 hover:text-white bg-white/5 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-8 flex-1 overflow-y-auto custom-scrollbar pb-24">
            {/* Colors */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-neutral-400 flex items-center gap-2">
                <Droplet className="w-4 h-4" /> الألوان
              </h3>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                <span className="text-white font-medium">اللون الأساسي</span>
                <input
                  type="color"
                  value={data.settings.accentColor}
                  onChange={(e) =>
                    updateSettings('accentColor', e.target.value)
                  }
                  className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                />
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-neutral-400 flex items-center gap-2">
                <Type className="w-4 h-4" /> الخطوط (Typography)
              </h3>
              <div className="grid grid-cols-1 gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                {['Cairo', 'Tajawal', 'Readex Pro'].map((font) => (
                  <button
                    key={font}
                    onClick={() => updateSettings('fontFamily', font)}
                    className={`p-3 rounded-lg text-right font-medium transition-all ${
                      data.settings.fontFamily === font
                        ? 'bg-accent text-black'
                        : 'text-white hover:bg-white/10'
                    }`}
                    style={{ fontFamily: font }}
                  >
                    خط {font}{' '}
                    {data.settings.fontFamily === font && (
                      <Check className="w-4 h-4 inline mr-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Background */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-neutral-400 flex items-center gap-2">
                <LayoutTemplate className="w-4 h-4" /> خلفية القسم الأول
              </h3>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                {data.settings.heroBgImage && (
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4 group border border-white/10">
                    <img
                      src={data.settings.heroBgImage}
                      className="w-full h-full object-cover"
                      alt="Hero bg"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => updateSettings('heroBgImage', null)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                )}
                <label className="flex items-center justify-center gap-2 w-full p-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg cursor-pointer transition-colors border border-dashed border-white/20">
                  <Upload className="w-4 h-4" />{' '}
                  <span className="text-sm font-bold">رفع صورة خلفية</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleFileUpload(
                        e,
                        (base64) => updateSettings('heroBgImage', base64),
                        1920,
                        1080
                      )
                    }
                  />
                </label>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-neutral-400 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> رقم الواتساب (للتواصل)
              </h3>
              <input
                type="text"
                value={data.settings.whatsappNumber || ''}
                onChange={(e) =>
                  updateSettings('whatsappNumber', e.target.value)
                }
                placeholder="مثال: 966500000000"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-left focus:border-accent outline-none"
                dir="ltr"
              />
              <p className="text-xs text-neutral-500">
                اكتب الرقم بالصيغة الدولية بدون أصفار أو علامة +
              </p>
            </div>

            {/* إدارة النسخ الاحتياطية (Export / Import) */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-sm font-semibold text-neutral-400 flex items-center gap-2">
                <Download className="w-4 h-4" /> إدارة النسخ الاحتياطية
              </h3>

              <button
                onClick={handleExportData}
                className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-white/10 transition"
              >
                <Download className="w-4 h-4 text-accent" />
                تصدير البيانات (حفظ نسخة لجهازك)
              </button>

              <button
                onClick={() => importFileRef.current?.click()}
                className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-white/10 transition"
              >
                <Upload className="w-4 h-4 text-sky-400" />
                استيراد البيانات من ملف
              </button>

              <input
                type="file"
                ref={importFileRef}
                onChange={handleImportData}
                accept=".json"
                className="hidden"
              />
            </div>
          </div>
        </div>
      )}

      {/* المحتوى الرئيسي */}
      <main className="pb-24">
        {(data.settings.sections.hero || isEditMode) && (
          <section
            className={`relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20 ${
              !data.settings.sections.hero ? 'section-hidden' : ''
            }`}
          >
            {data.settings.heroBgImage ? (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${data.settings.heroBgImage})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-[#070707]/80 backdrop-blur-sm"></div>
              </>
            ) : (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-accent opacity-[0.04] blur-[150px] rounded-full pointer-events-none"></div>
            )}

            {isEditMode && (
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => toggleSection('hero')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border ${
                    data.settings.sections.hero
                      ? 'bg-neutral-900/80 text-white border-white/20'
                      : 'bg-red-500 text-white border-red-400'
                  }`}
                >
                  {data.settings.sections.hero ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}{' '}
                  {data.settings.sections.hero ? 'إخفاء' : 'إظهار'} القسم
                </button>
              </div>
            )}

            <div className="relative z-10 max-w-5xl mx-auto space-y-6 md:space-y-8 mt-10 md:mt-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-2 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <ContentEditable
                  tagName="span"
                  html={data.profile.title}
                  onChange={(val) => updateProfile('title', val)}
                  isEditMode={isEditMode}
                  placeholder="المسمى الوظيفي"
                  className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase inline-block min-w-[120px]"
                />
              </div>

              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tight leading-tight py-2">
                <ContentEditable
                  tagName="div"
                  html={data.profile.name}
                  onChange={(val) => updateProfile('name', val)}
                  isEditMode={isEditMode}
                  placeholder="الاسم هنا"
                  className="inline-block w-full text-center rounded-xl min-h-[1.2em]"
                />
              </h1>

              <div className="text-base md:text-2xl opacity-80 max-w-3xl mx-auto leading-relaxed font-light mt-6 px-4">
                <ContentEditable
                  tagName="div"
                  html={data.profile.bio}
                  onChange={(val) => updateProfile('bio', val)}
                  isEditMode={isEditMode}
                  placeholder="اكتب نبذة تعريفية عنك..."
                  className="min-h-[3em]"
                />
              </div>
            </div>
          </section>
        )}

        {/* معرض الأعمال */}
        {(data.settings.sections.portfolio || isEditMode) && (
          <section
            className={`py-16 md:py-24 px-6 relative z-10 bg-[#070707] ${
              !data.settings.sections.portfolio ? 'section-hidden' : ''
            }`}
          >
            {isEditMode && (
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => toggleSection('portfolio')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border ${
                    data.settings.sections.portfolio
                      ? 'bg-neutral-900/80 text-white border-white/20'
                      : 'bg-red-500 text-white border-red-400'
                  }`}
                >
                  {data.settings.sections.portfolio ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}{' '}
                  القسم
                </button>
              </div>
            )}

            <div className="container mx-auto max-w-7xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 border-b border-white/5 pb-8">
                <div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
                    معرض{' '}
                    <span
                      className="text-accent italic"
                      style={{ color: 'var(--accent)' }}
                    >
                      الأعمال
                    </span>
                  </h2>
                  <p className="text-base md:text-lg opacity-60 max-w-xl">
                    تصفح أحدث المشاريع والتصاميم التي تعكس رؤيتي وتفاصيلي
                    الدقيقة.
                  </p>
                </div>

                {isEditMode && (
                  <button
                    onClick={() => {
                      setSelectedProject({
                        id: Date.now().toString(),
                        title: '',
                        category: '',
                        description: '',
                        thumbnail: null,
                        gallery: [],
                      });
                      setActiveModal('project_edit');
                    }}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-accent text-black hover:bg-white rounded-xl font-bold transition-all shadow-lg hover:shadow-accent/20 w-full md:w-auto"
                  >
                    <Plus className="w-5 h-5" /> <span>إضافة مشروع جديد</span>
                  </button>
                )}
              </div>

              {/* أزرار الفلاتر */}
              {categories.length > 1 && (
                <div className="flex flex-wrap gap-2 mb-10">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                        activeCategory === cat
                          ? 'bg-accent text-black border-accent'
                          : 'bg-[#111] text-white/70 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              {/* شبكة الأعمال */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setActiveModal(`project_view_${project.id}`)}
                    className="group relative overflow-hidden rounded-[2rem] bg-[#111] border border-white/5 aspect-[4/3] md:aspect-[16/10] hover-lift cursor-pointer shadow-xl"
                  >
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-neutral-600">
                        <ImageIcon className="w-16 h-16 opacity-20" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.category && (
                        <span className="inline-block px-3 py-1 bg-accent/20 text-accent backdrop-blur-sm rounded-full text-xs font-bold tracking-wider mb-3 border border-accent/20">
                          {project.category}
                        </span>
                      )}
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight drop-shadow-lg">
                        {project.title}
                      </h3>
                      <p className="text-white/80 line-clamp-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm md:text-base">
                        {project.description}
                      </p>
                    </div>

                    {isEditMode && (
                      <div
                        className="absolute top-4 right-4 z-20 flex gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => {
                            setSelectedProject(project);
                            setActiveModal('project_edit');
                          }}
                          className="p-3 bg-black/80 backdrop-blur-md text-white rounded-full hover:bg-accent hover:text-black transition-colors border border-white/10 shadow-lg"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            confirmAction('حذف المشروع؟', () =>
                              setData((prev) => ({
                                ...prev,
                                projects: prev.projects.filter(
                                  (p) => p.id !== project.id
                                ),
                              }))
                            )
                          }
                          className="p-3 bg-red-500/90 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                {filteredProjects.length === 0 && (
                  <div className="col-span-full py-20 text-center border-2 border-dashed border-white/10 rounded-3xl bg-[#111]">
                    <Filter className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <p className="text-xl opacity-50">
                      لا توجد مشاريع في هذا التصنيف.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* قسم التواصل */}
        {(data.settings.sections.contact || isEditMode) && (
          <section
            className={`py-16 md:py-24 px-6 border-t border-white/5 relative bg-gradient-to-b from-[#070707] to-[#111] ${
              !data.settings.sections.contact ? 'section-hidden' : ''
            }`}
          >
            {isEditMode && (
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => toggleSection('contact')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border ${
                    data.settings.sections.contact
                      ? 'bg-neutral-900/80 text-white border-white/20'
                      : 'bg-red-500 text-white border-red-400'
                  }`}
                >
                  {data.settings.sections.contact ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}{' '}
                  القسم
                </button>
              </div>
            )}

            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <div className="space-y-10">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                      دعنا نصنع{' '}
                      <span
                        className="text-accent italic"
                        style={{ color: 'var(--accent)' }}
                      >
                        التميز
                      </span>
                    </h2>
                    <p className="text-base md:text-lg opacity-60">
                      مستعد للتعاون في مشروعك القادم؟ تواصل معي الآن لتحديد موعد
                      استشارة.
                    </p>
                  </div>

                  <div className="space-y-6 md:space-y-8 bg-[#151515] p-6 md:p-10 rounded-[2rem] border border-white/5 shadow-2xl">
                    <div className="flex items-center gap-4 md:gap-6 group">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-black flex items-center justify-center text-accent border border-white/5 group-hover:border-accent transition-colors shadow-inner flex-shrink-0">
                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-xs md:text-sm opacity-50 font-semibold mb-1">
                          البريد الإلكتروني
                        </p>
                        <ContentEditable
                          html={data.profile.email}
                          onChange={(val) => updateProfile('email', val)}
                          isEditMode={isEditMode}
                          className="text-lg md:text-xl font-bold truncate"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6 group">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-black flex items-center justify-center text-accent border border-white/5 group-hover:border-accent transition-colors shadow-inner flex-shrink-0">
                        <Phone className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-xs md:text-sm opacity-50 font-semibold mb-1">
                          رقم الهاتف
                        </p>
                        <div dir="ltr" className="text-right">
                          <ContentEditable
                            html={data.profile.phone}
                            onChange={(val) => updateProfile('phone', val)}
                            isEditMode={isEditMode}
                            className="text-lg md:text-xl font-bold inline-block"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6 group">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-black flex items-center justify-center text-accent border border-white/5 group-hover:border-accent transition-colors shadow-inner flex-shrink-0">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-xs md:text-sm opacity-50 font-semibold mb-1">
                          الموقع
                        </p>
                        <ContentEditable
                          html={data.profile.location}
                          onChange={(val) => updateProfile('location', val)}
                          isEditMode={isEditMode}
                          className="text-lg md:text-xl font-bold truncate"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-accent"></span> تابعني عبر
                    المنصات
                  </h3>

                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {data.social.map((link) => (
                      <div
                        key={link.id}
                        className="relative group/social w-full sm:w-auto"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center sm:justify-start gap-3 px-6 py-4 rounded-2xl bg-[#151515] border border-white/5 hover:border-accent hover:-translate-y-1 transition-all shadow-lg hover:shadow-accent/20 w-full"
                        >
                          <i
                            className={`${link.iconClass} text-xl md:text-2xl text-accent group-hover/social:scale-110 transition-transform`}
                          ></i>
                          <span className="font-bold text-base md:text-lg">
                            {link.platform}
                          </span>
                        </a>

                        {isEditMode && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              confirmAction('حذف الرابط؟', () =>
                                setData((prev) => ({
                                  ...prev,
                                  social: prev.social.filter(
                                    (s) => s.id !== link.id
                                  ),
                                }))
                              );
                            }}
                            className="absolute -top-2 -right-2 p-2 bg-red-500 text-white rounded-full opacity-100 sm:opacity-0 group-hover/social:opacity-100 transition-opacity shadow-lg z-10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}

                    {isEditMode && (
                      <button
                        onClick={() => {
                          setFormState({
                            platform: '',
                            iconClass: 'fa-solid fa-link',
                            url: '',
                          });
                          setActiveModal('social_add');
                        }}
                        className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-black border border-dashed border-white/20 text-neutral-400 hover:text-white hover:border-white transition-all w-full sm:w-auto"
                      >
                        <Plus className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="font-bold text-base md:text-lg">
                          إضافة منصة
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* 1. نافذة استعراض العمل للزائر */}
      {activeModal?.startsWith('project_view_') && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in">
          {(() => {
            const proj = data.projects.find(
              (p) => p.id === activeModal.replace('project_view_', '')
            );
            if (!proj) return null;
            return (
              <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-6xl bg-[#0a0a0a] md:border border-white/10 md:rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 left-4 md:top-6 md:left-6 z-50 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors border border-white/10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex-1 overflow-y-auto custom-scrollbar relative">
                  {proj.thumbnail && (
                    <div className="w-full h-[40vh] md:h-[50vh] relative">
                      <img
                        src={proj.thumbnail}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                    </div>
                  )}

                  <div
                    className={`px-6 md:px-16 pb-16 ${
                      proj.thumbnail ? '-mt-24 relative z-10' : 'pt-24'
                    }`}
                  >
                    {proj.category && (
                      <span className="inline-block px-4 py-2 bg-accent/20 text-accent backdrop-blur-md rounded-full text-sm font-bold tracking-wider mb-6 border border-accent/20">
                        {proj.category}
                      </span>
                    )}
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                      {proj.title}
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-4xl whitespace-pre-wrap">
                      {proj.description}
                    </p>

                    {proj.gallery && proj.gallery.length > 0 && (
                      <div className="mt-16 space-y-6">
                        <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">
                          معرض الصور
                        </h3>
                        <div className="columns-1 md:columns-2 gap-6 space-y-6">
                          {proj.gallery.map((img, idx) => (
                            <div
                              key={idx}
                              className="break-inside-avoid rounded-2xl overflow-hidden border border-white/5 bg-[#111]"
                            >
                              <img
                                src={img}
                                alt={`Gallery ${idx}`}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* 2. نافذة تعديل بيانات المشروع */}
      {activeModal === 'project_edit' && selectedProject && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-0 md:p-6 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full h-full md:h-auto md:max-h-[90vh] max-w-4xl bg-[#0a0a0a] md:border border-white/10 md:rounded-[2rem] flex flex-col overflow-hidden animate-in zoom-in-95">
            <div className="flex justify-between items-center p-4 md:p-6 border-b border-white/10 bg-black/50 sticky top-0 z-10">
              <h3 className="text-xl md:text-2xl font-black">
                {selectedProject.title ? 'تعديل المشروع' : 'إضافة مشروع جديد'}
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={saveProject}
                  className="px-4 py-2 md:px-6 md:py-2.5 bg-accent text-black font-bold rounded-xl hover:brightness-110 transition-colors text-sm md:text-base"
                >
                  حفظ
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-neutral-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-neutral-400">
                    عنوان المشروع *
                  </label>
                  <input
                    type="text"
                    value={selectedProject.title}
                    onChange={(e) =>
                      setSelectedProject({
                        ...selectedProject,
                        title: e.target.value,
                      })
                    }
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none"
                    placeholder="مثال: هوية بصرية..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-neutral-400">
                    التصنيف
                  </label>
                  <input
                    type="text"
                    value={selectedProject.category}
                    onChange={(e) =>
                      setSelectedProject({
                        ...selectedProject,
                        category: e.target.value,
                      })
                    }
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none"
                    placeholder="مثال: سوشيال ميديا"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-neutral-400">
                  الوصف
                </label>
                <textarea
                  value={selectedProject.description}
                  onChange={(e) =>
                    setSelectedProject({
                      ...selectedProject,
                      description: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none resize-none"
                  placeholder="اكتب تفاصيل المشروع..."
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-bold text-neutral-400">
                  صورة الغلاف (Thumbnail)
                </label>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  {selectedProject.thumbnail ? (
                    <div className="relative w-full md:w-64 aspect-video rounded-xl overflow-hidden border border-white/10 group">
                      <img
                        src={selectedProject.thumbnail}
                        className="w-full h-full object-cover"
                        alt="Thumb"
                      />
                      <button
                        onClick={() =>
                          setSelectedProject({
                            ...selectedProject,
                            thumbnail: null,
                          })
                        }
                        className="absolute inset-0 bg-red-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold"
                      >
                        حذف الغلاف
                      </button>
                    </div>
                  ) : (
                    <div className="w-full md:w-64 aspect-video rounded-xl border border-dashed border-white/20 bg-[#111] flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-neutral-600" />
                    </div>
                  )}
                  <label className="flex-1 w-full flex flex-col items-center justify-center p-6 bg-[#111] hover:bg-[#151515] border-2 border-dashed border-white/10 hover:border-accent rounded-xl cursor-pointer transition-colors h-auto md:h-[144px]">
                    <Upload className="w-6 h-6 mb-2 text-accent" />
                    <span className="font-bold text-sm">
                      اختر صورة من جهازك
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFileUpload(
                          e,
                          (b64) =>
                            setSelectedProject({
                              ...selectedProject,
                              thumbnail: b64,
                            }),
                          800,
                          800
                        )
                      }
                    />
                  </label>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <label className="block text-lg font-bold text-white">
                    معرض الصور الداخلي
                  </label>
                  <label className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg cursor-pointer transition-colors border border-white/5 w-full md:w-auto">
                    <Plus className="w-4 h-4" />{' '}
                    <span className="text-sm font-bold">إضافة صورة للمعرض</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFileUpload(
                          e,
                          (b64) =>
                            setSelectedProject({
                              ...selectedProject,
                              gallery: [
                                ...(selectedProject.gallery || []),
                                b64,
                              ],
                            }),
                          1200,
                          1200
                        )
                      }
                    />
                  </label>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {(selectedProject.gallery || []).map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-xl overflow-hidden border border-white/10 group"
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt="Gallery"
                      />
                      <button
                        onClick={() =>
                          setSelectedProject({
                            ...selectedProject,
                            gallery: selectedProject.gallery.filter(
                              (_, i) => i !== idx
                            ),
                          })
                        }
                        className="absolute inset-0 bg-red-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                      >
                        <Trash2 className="w-6 h-6" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. نافذة إضافة منصة تواصل */}
      {activeModal === 'social_add' && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111] border border-white/10 rounded-[2rem] w-full max-w-md p-6 md:p-8 shadow-2xl animate-in zoom-in">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white">إضافة منصة تواصل</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-neutral-400 hover:text-white bg-white/5 p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setData((prev) => ({
                  ...prev,
                  social: [
                    ...prev.social,
                    {
                      id: Date.now().toString(),
                      platform: formState.platform || 'رابط',
                      url: formState.url,
                      iconClass: formState.iconClass || 'fa-solid fa-link',
                    },
                  ],
                }));
                setActiveModal(null);
                showToast('تمت الإضافة');
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-bold text-neutral-400 mb-2">
                  اسم المنصة
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none"
                  placeholder="مثال: انستقرام"
                  onChange={(e) =>
                    setFormState({ ...formState, platform: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-400 mb-2">
                  اختر الأيقونة
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {SOCIAL_OPTIONS.map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() =>
                        setFormState({ ...formState, iconClass: opt.class })
                      }
                      className={`flex justify-center p-3 rounded-xl border transition-all ${
                        formState.iconClass === opt.class
                          ? 'bg-accent/20 border-accent text-accent'
                          : 'bg-black border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <i className={`${opt.class} text-xl`}></i>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-400 mb-2">
                  الرابط (URL)
                </label>
                <input
                  required
                  type="url"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white text-left focus:border-accent outline-none"
                  placeholder="https://..."
                  onChange={(e) =>
                    setFormState({ ...formState, url: e.target.value })
                  }
                  dir="ltr"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-accent text-black font-black text-lg rounded-xl hover:brightness-110 transition-colors"
              >
                إضافة
              </button>
            </form>
          </div>
        </div>
      )}

      {/* التنبيهات والإشعارات */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-[200] animate-in slide-in-from-top-5 fade-in duration-300">
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-bold border ${
              toastMessage.type === 'error'
                ? 'bg-red-500/90 text-white border-red-400'
                : toastMessage.type === 'warning'
                ? 'bg-orange-500/90 text-white border-orange-400'
                : 'bg-green-500/90 text-white border-green-400'
            } backdrop-blur-md`}
          >
            {toastMessage.type === 'error' ||
            toastMessage.type === 'warning' ? (
              <AlertTriangle className="w-5 h-5" />
            ) : (
              <Check className="w-5 h-5" />
            )}
            {toastMessage.message}
          </div>
        </div>
      )}

      {/* نافذة تأكيد الحذف */}
      {confirmDialog && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
            <AlertTriangle className="w-12 h-12 text-accent mx-auto mb-4" />
            <p className="text-xl font-bold text-white mb-8">
              {confirmDialog.message}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setConfirmDialog(null)}
                className="flex-1 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
              >
                إلغاء
              </button>
              <button
                onClick={() => {
                  confirmDialog.action();
                  setConfirmDialog(null);
                }}
                className="flex-1 py-3 bg-accent text-black font-bold rounded-xl hover:brightness-110 transition-colors"
              >
                تأكيد
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
