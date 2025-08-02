"use client";

import Image from "next/image";
import { useEffect } from "react";

// IMPORTANT: WhatsApp number is set to 0524109207
// Format: Israeli phone number format

export default function Home() {
  useEffect(() => {
    // Smooth scroll animation for navbar links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar?.classList.add('navbar-scrolled');
      } else {
        navbar?.classList.remove('navbar-scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="min-h-screen text-white" 
      dir="rtl"
    >
      {/* Ultra minimal overlay for maximum brightness */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'rgba(0, 0, 0, 0.01)',
          zIndex: -1
        }}
      ></div>
      
      {/* Navigation */}
      <nav className="reference-nav fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl md:text-3xl font-bold reference-text-primary">
              🌿 GatRise
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#home" className="nav-link reference-text-secondary font-medium">
                בית
              </a>
              <a href="#benefits" className="nav-link reference-text-secondary font-medium">
                יתרונות
              </a>
              <a href="#testimonials" className="nav-link reference-text-secondary font-medium">
                המלצות
              </a>
              <a href="#order" className="nav-link reference-text-secondary font-medium">
                הזמנה
              </a>
            </div>
            
            {/* CTA Button */}
            <a 
              href="https://wa.me/972524109207?text=שלום, אני מעוניין לקבל מידע על GatRise"
              target="_blank"
              rel="noopener noreferrer"
              className="reference-button"
            >
              📱 הזמן עכשיו
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="reference-hero relative min-h-screen">        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 reference-text-primary leading-tight">
              🌿 GatRise
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <div className="reference-card mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 reference-green">
                  גת – סוד עתיק, תוצאה מודרנית
                </h3>
                <p className="text-lg md:text-xl reference-text-secondary mb-4 leading-relaxed">
                  צמח טבעי שמקורו בתימן, ידוע כבר מאות שנים כמקור לעוררות, חדות, תחושת שובע ומיקוד.
                </p>
                <p className="text-lg md:text-xl reference-text-secondary mb-4 leading-relaxed">
                  היום – בבקבוקון קטן, חכם ועוצמתי.
                </p>
                <p className="text-xl md:text-2xl font-bold reference-green">
                  GatRise – הדרך הטבעית שלך לשליטה, ריכוז ואנרגיה
                </p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 reference-text-primary">
                ירידה במשקל, פוקוס ואנרגיה בטיפה אחת
              </h2>
              <p className="text-xl md:text-2xl reference-text-secondary mb-8 leading-relaxed">
                נמאס לך מדיאטות קשות, זריקות יקרות ואימונים מתישים?<br />
                הגיע הזמן לפתרון טבעי, נעים ומדויק – שמביא תוצאות.
              </p>
              <p className="text-lg reference-text-secondary mb-8 leading-relaxed">
                <strong className="reference-green">GatRise</strong> הוא תמצית שמן גת טבעית, בבקבוקון יוקרתי של 10 מ&quot;ל,<br />
                שמדכאת תיאבון, מגבירה ריכוז, מחזקת את האנרגיה – ומעוררת את החשק המיני.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://wa.me/972524109207?text=שלום, אני מעוניין להזמין GatRise - ₪500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-button reference-hover-lift"
                >
                  🚀 הזמן עכשיו
                </a>
                <a 
                  href="#faq"
                  className="reference-button-outline reference-hover-lift"
                >
                  שאלות נפוצות
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="reference-section">
        <div className="container mx-auto px-6">
          <div className="fancy-text-container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 mx-auto">
                <span className="text-3xl">✅</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary">
                מה GatRise עושה עבורך?
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="reference-card text-center reference-hover-lift">
                  <div className="text-4xl mb-4">🔥</div>
                  <h3 className="text-lg font-semibold mb-3 reference-text-primary">מדכא תיאבון</h3>
                  <p className="reference-text-secondary text-sm leading-relaxed">
                    מפחית רעב, ונותן תחושת שובע
                  </p>
                </div>
                
                <div className="reference-card text-center reference-hover-lift">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-lg font-semibold mb-3 reference-text-primary">מעניק אנרגיה נקייה</h3>
                  <p className="reference-text-secondary text-sm leading-relaxed">
                    לאורך היום – בלי קפאין, בלי התרסקות
                  </p>
                </div>
              
              <div className="reference-card text-center reference-hover-lift">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-3 reference-text-primary">משפר ריכוז וחדות</h3>
                <p className="reference-text-secondary text-sm leading-relaxed">
                  מושלם ללמידה, נהיגה, עבודה
                </p>
              </div>
              
              <div className="reference-card text-center reference-hover-lift">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-lg font-semibold mb-3 reference-text-primary">מעורר את החשק המיני</h3>
                <p className="reference-text-secondary text-sm leading-relaxed">
                  טבעי, עדין ומורגש
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/photo1.jpeg"
                alt="GatRise - מוצר טבעי לירידה במשקל"
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-3xl shadow-2xl reference-hover-lift"
              />
            </div>
          </div>
          
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="reference-card reference-hover-lift">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-4 reference-text-primary">טבעי לחלוטין</h3>
                <p className="reference-text-secondary leading-relaxed">
                  ללא חומרים כימיים, לא ממכר
                </p>
              </div>
              
              <div className="reference-card reference-hover-lift">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-4 reference-text-primary">השפעה מיידית</h3>
                <p className="reference-text-secondary leading-relaxed">
                  מרגישים את ההשפעה תוך דקות – כבר מהשימוש הראשון!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="reference-section-alt">
        <div className="container mx-auto px-6">
          <div className="fancy-text-container-alt">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-6 mx-auto">
                <span className="text-3xl">💧</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary">
                איך משתמשים?
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="reference-card text-center reference-hover-lift">
                  <div className="text-4xl md:text-6xl mb-4">1️⃣</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4 reference-text-primary">טפטפו 5-7 טיפות</h3>
                  <p className="reference-text-secondary text-sm">
                    מתחת ללשון (אפשר גם בכוס מים)
                  </p>
                </div>
                
                <div className="reference-card text-center reference-hover-lift">
                  <div className="text-4xl md:text-6xl mb-4">2️⃣</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4 reference-text-primary">המתינו</h3>
                  <p className="reference-text-secondary text-sm">
                    1–2 דקות לספיגה מלאה
                  </p>
                </div>
                
                <div className="reference-card text-center reference-hover-lift">
                  <div className="text-4xl md:text-6xl mb-4">3️⃣</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4 reference-text-primary">הרגישו</h3>
                  <p className="reference-text-secondary text-sm">
                    שליטה, שובע, פוקוס ואנרגיה חדשה
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/photo3.jpeg"
                  alt="GatRise - שימוש נכון של המוצר"
                  width={500}
                  height={500}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl reference-hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="reference-section py-12">
        <div className="container mx-auto px-6">
          <div className="fancy-text-container max-w-4xl mx-auto text-center">
            <div className="reference-card">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">⚠️ שימו לב:</h3>
              <div className="text-lg reference-text-secondary space-y-2">
                <p>❌ לא מומלץ לחולי סוכרת, בעיות לב, או למי שנוטל תרופות מרשם</p>
                <p>✅ מומלץ להתייעץ עם רופא לפני תחילת שימוש</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="reference-section-alt">
        <div className="container mx-auto px-6">
          <div className="fancy-text-container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mb-6 mx-auto">
                <span className="text-3xl">⭐</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary">
                לקוחות ממליצים:
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              <div className="reference-card reference-hover-lift">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <blockquote className="text-lg reference-text-primary leading-relaxed mb-6 font-medium">
                  ירדתי 4 קילו תוך חודש וחצי בלי לשנות כמעט כלום. תחושת שובע משוגעת ויעילה - זה המוצר הראשון שהרגשתי ממנו שיפור אמיתי בלי רעב ובלי עצבנות.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 reference-bg-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                    מ
                  </div>
                  <div>
                    <div className="font-bold reference-text-primary">מעיין</div>
                    <div className="text-sm reference-text-muted">בת 33, תל אביב</div>
                  </div>
                </div>
              </div>
              
              <div className="reference-card reference-hover-lift">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <blockquote className="text-lg reference-text-primary leading-relaxed mb-6 font-medium">
                  אני מתרכז פי 2 בעבודה. והאמת? גם החשק המיני עלה. פשוט שקט בראש, ממליץ בחום לכל מי שעבר אוזמפיק.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 reference-bg-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                    ד
                  </div>
                  <div>
                    <div className="font-bold reference-text-primary">דניאל</div>
                    <div className="text-sm reference-text-muted">בן 39, חיפה</div>
                  </div>
                </div>
              </div>
              
              <div className="reference-card reference-hover-lift">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <blockquote className="text-lg reference-text-primary leading-relaxed mb-6 font-medium">
                  פשוט עובד. טעם טבעי, תחושה טובה, בלי כאבי ראש.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 reference-bg-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                    א
                  </div>
                  <div>
                    <div className="font-bold reference-text-primary">אור</div>
                    <div className="text-sm reference-text-muted">בן 27</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="reference-section py-16">
        <div className="container mx-auto px-6">
          <div className="reference-card max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
                ✨ גלריית פרימיום
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 reference-text-primary">
                🌿 GatRise במציאות
              </h2>
              <p className="text-lg reference-text-secondary max-w-2xl mx-auto">
                גלו את החוויה הטבעית שמשנה חיים - תמונות אמיתיות של לקוחות מרוצים
              </p>
            </div>
            
            <div className="contained-gallery premium-gallery grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            <div className="premium-gallery-item h-64">
              <Image
                src="/images/photo2.jpeg"
                alt="GatRise - תמצית טבעית איכותית"
                width={400}
                height={400}
                className="premium-gallery-image w-full h-full object-cover"
              />
              <div className="premium-gallery-overlay">
                <div className="premium-gallery-title">תמצית טבעית</div>
                <div className="premium-gallery-subtitle">איכות פרימיום</div>
              </div>
            </div>
            
            <div className="premium-gallery-item h-64">
              <Image
                src="/images/photo5.jpeg"
                alt="GatRise - שימוש יומיומי"
                width={400}
                height={400}
                className="premium-gallery-image w-full h-full object-cover"
              />
              <div className="premium-gallery-overlay">
                <div className="premium-gallery-title">שימוש יומיומי</div>
                <div className="premium-gallery-subtitle">נוח ויעיל</div>
              </div>
            </div>
            
            <div className="premium-gallery-item h-64">
              <Image
                src="/images/photo6.jpeg"
                alt="GatRise - תוצאות מרשימות"
                width={400}
                height={400}
                className="premium-gallery-image w-full h-full object-cover"
              />
              <div className="premium-gallery-overlay">
                <div className="premium-gallery-title">תוצאות מרשימות</div>
                <div className="premium-gallery-subtitle">שינוי אמיתי</div>
              </div>
            </div>
            
            <div className="premium-gallery-item h-64">
              <Image
                src="/images/photo7.jpeg"
                alt="GatRise - אנרגיה וחיוניות"
                width={400}
                height={400}
                className="premium-gallery-image w-full h-full object-cover"
              />
              <div className="premium-gallery-overlay">
                <div className="premium-gallery-title">אנרגיה וחיוניות</div>
                <div className="premium-gallery-subtitle">כל יום</div>
              </div>
            </div>
            
            <div className="premium-gallery-item h-64">
              <Image
                src="/images/photo8.jpeg"
                alt="GatRise - רכיבים טבעיים"
                width={400}
                height={400}
                className="premium-gallery-image w-full h-full object-cover"
              />
              <div className="premium-gallery-overlay">
                <div className="premium-gallery-title">רכיבים טבעיים</div>
                <div className="premium-gallery-subtitle">בטוח ויעיל</div>
              </div>
            </div>
            
            <div className="premium-gallery-item h-64">
              <Image
                src="/images/photo9.jpeg"
                alt="GatRise - מיקוד ובהירות"
                width={400}
                height={400}
                className="premium-gallery-image w-full h-full object-cover"
              />
              <div className="premium-gallery-overlay">
                <div className="premium-gallery-title">מיקוד ובהירות</div>
                <div className="premium-gallery-subtitle">ביצועים משופרים</div>
              </div>
            </div>
            
            <div className="premium-gallery-item h-64">
              <Image
                src="/images/photo10.jpeg"
                alt="GatRise - בריאות ואיכות חיים"
                width={400}
                height={400}
                className="premium-gallery-image w-full h-full object-cover"
              />
              <div className="premium-gallery-overlay">
                <div className="premium-gallery-title">בריאות ואיכות</div>
                <div className="premium-gallery-subtitle">חיים טובים יותר</div>
              </div>
            </div>
            
            <div className="premium-gallery-item h-64">
              <Image
                src="/images/photo11.jpeg"
                alt="GatRise - הצלחה ושביעות רצון"
                width={400}
                height={400}
                className="premium-gallery-image w-full h-full object-cover"
              />
              <div className="premium-gallery-overlay">
                <div className="premium-gallery-title">הצלחה ושביעות רצון</div>
                <div className="premium-gallery-subtitle">לקוחות מרוצים</div>
              </div>
            </div>
          </div>
          
            <div className="text-center">
              <a 
                href="https://wa.me/972524109207?text=שלום, ראיתי את הגלריה ואני מעוניין להזמין GatRise"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-button text-lg px-8 py-4"
              >
                💫 הזמן את החוויה שלך עכשיו
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="order" className="reference-section">
        <div className="container mx-auto px-6">
          <div className="fancy-text-container-alt">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6 mx-auto">
                <span className="text-3xl">💸</span>
              </div>
              <div className="inline-block bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full text-sm font-bold mb-6">
                🔥 מחיר השקה מוגבל
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary">
                מחיר השקה מוגבל:
              </h2>
            </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <div className="reference-card reference-hover-lift">
              <div className="text-center">
                <div className="text-4xl mb-4">🧴</div>
                <h3 className="text-2xl font-bold mb-4 reference-text-primary">בקבוקון 1</h3>
                <div className="text-4xl font-bold reference-green mb-6">₪500</div>
                <div className="reference-text-muted text-sm mb-6">משלוח חינם במרכז</div>
                <a 
                  href="https://wa.me/972524109207?text=שלום, אני מעוניין להזמין בקבוקון 1 של GatRise (500 שקל)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-button w-full"
                >
                  הזמן עכשיו
                </a>
              </div>
            </div>
            
            {/* Package 2 - Popular */}
            <div className="reference-card reference-hover-lift relative scale-105 pricing-popular">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full text-sm font-bold">
                🔥 הכי פופולרי
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🧴🧴</div>
                <h3 className="text-2xl font-bold mb-4 reference-text-primary">2 בקבוקונים</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">₪900</div>
                <div className="text-sm reference-text-muted line-through mb-4">₪1000</div>
                <div className="reference-text-muted text-sm mb-6">חסכון של ₪100</div>
                <a 
                  href="https://wa.me/972524109207?text=שלום, אני מעוניין להזמין 2 בקבוקונים של GatRise (900 שקל)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-4 rounded-lg text-lg font-bold transition-all duration-300 w-full inline-block text-center"
                >
                  הזמן עכשיו
                </a>
              </div>
            </div>
            
            {/* Package 3 */}
            <div className="reference-card reference-hover-lift">
              <div className="text-center">
                <div className="text-4xl mb-4">🧴🧴🧴</div>
                <h3 className="text-2xl font-bold mb-4 reference-text-primary">3 בקבוקונים</h3>
                <div className="text-4xl font-bold reference-green mb-2">₪1300</div>
                <div className="text-sm reference-text-muted line-through mb-4">₪1500</div>
                <div className="reference-text-muted text-sm mb-6">חסכון של ₪200</div>
                <a 
                  href="https://wa.me/972524109207?text=שלום, אני מעוניין להזמין 3 בקבוקונים של GatRise (1300 שקל)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-button w-full"
                >
                  הזמן עכשיו
                </a>
              </div>
            </div>
          </div>
          
            <div className="text-center mt-12">
              <div className="reference-card p-6 max-w-2xl mx-auto">
                <p className="text-lg reference-green mb-2">📦 המחירים כוללים משלוח במרכז</p>
                <p className="text-lg reference-green">🛡️ אחריות מלאה – לא מרוצה? החזר כספי תוך 48 שעות</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="reference-section-alt">
        <div className="container mx-auto px-6">
          <div className="fancy-text-container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6 mx-auto">
                <span className="text-3xl">❓</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary">
                שאלות נפוצות (FAQ):
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="reference-card">
                <h3 className="text-xl font-semibold mb-3 reference-text-primary">ש: זה מתאים גם אם אני לא עושה דיאטה קפדנית?</h3>
                <p className="reference-text-secondary">ת: כן. GatRise מדכא תיאבון באופן טבעי גם בלי תפריט מחמיר.</p>
              </div>
              
              <div className="reference-card">
                <h3 className="text-xl font-semibold mb-3 reference-text-primary">ש: תוך כמה זמן מרגישים שינוי?</h3>
                <p className="reference-text-secondary">ת: ברוב המקרים – תוך 10–20 דקות.</p>
              </div>
              
              <div className="reference-card">
                <h3 className="text-xl font-semibold mb-3 reference-text-primary">ש: זה חוקי ובטוח?</h3>
                <p className="reference-text-secondary">ת: 100% טבעי, ללא מרשם. אך לא מיועד לחולי לב או סוכרת.</p>
              </div>
              
              <div className="reference-card">
                <h3 className="text-xl font-semibold mb-3 reference-text-primary">ש: כמה זמן מחזיק בקבוקון?</h3>
                <p className="reference-text-secondary">ת: בממוצע – בין 2 ל-3 שבועות של שימוש יומיומי.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="reference-section">
        <div className="container mx-auto text-center px-6">
          <div className="fancy-text-container-alt max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full mb-6 mx-auto">
              <span className="text-3xl">💬</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 reference-text-primary">
              דבר אחרון…
            </h2>
            
            <div className="text-xl reference-text-secondary mb-8 leading-relaxed space-y-4">
              <p>לא צריך לסבול כדי לרדת במשקל.</p>
              <p>לא צריך לפחד מאיבוד חשק, עייפות או תסכול.</p>
              <p className="font-semibold text-2xl reference-green">עם GatRise – אתה מרגיש בשליטה, חזק, חד.</p>
              <p className="font-semibold text-xl">וטבעי לגמרי.</p>
            </div>
            
            <div className="reference-card p-6 md:p-8 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 reference-text-primary">📲 הזמן עכשיו</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/972524109207?text=שלום, אני מעוניין לקבל מידע על GatRise ולבצע הזמנה"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-button w-full reference-hover-lift"
                >
                  ✅ שלח הודעה בוואטסאפ להזמנה
                </a>
                
                <div className="text-center">
                  <p className="text-base md:text-lg reference-text-secondary mb-2">📞 או חייג ישירות:</p>
                  <a 
                    href="tel:+972524109207" 
                    className="text-xl md:text-2xl font-bold reference-green hover:text-green-400 transition-colors"
                  >
                    052-410-9207
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="reference-section py-6">
        <div className="container mx-auto text-center px-6">
          <div className="text-3xl font-bold reference-green mb-4">
            🌿 GatRise
          </div>
          <p className="reference-text-muted mb-6">ירידה במשקל, פוקוס ואנרגיה בטיפה אחת</p>
          <div className="mt-8 pt-8 border-t border-gray-800 reference-text-muted text-sm">
            © 2025 GatRise. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </div>
  );
}
