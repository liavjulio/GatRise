import Image from "next/image";

// IMPORTANT: WhatsApp number is set to 0524109207
// Format: Israeli phone number format

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
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
              <a href="#home" className="reference-text-secondary hover:reference-text-primary transition-colors duration-300 font-medium">
                בית
              </a>
              <a href="#benefits" className="reference-text-secondary hover:reference-text-primary transition-colors duration-300 font-medium">
                יתרונות
              </a>
              <a href="#testimonials" className="reference-text-secondary hover:reference-text-primary transition-colors duration-300 font-medium">
                המלצות
              </a>
              <a href="#order" className="reference-text-secondary hover:reference-text-primary transition-colors duration-300 font-medium">
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
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/photo1.jpeg"
            alt="GatRise Background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 reference-text-primary leading-tight reference-fade-in">
              🌿 GatRise
            </h1>
            
            <div className="max-w-4xl mx-auto reference-slide-up">
              <div className="reference-card p-8 mb-8">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary reference-fade-in">
              ✅ מה GatRise עושה עבורך?
            </h2>
          </div>
          
          {/* Benefits with integrated photos */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="reference-card text-center reference-hover-lift">
                <div className="text-3xl mb-3">🔥</div>
                <h3 className="text-lg font-semibold mb-3 reference-text-primary">מדכא תיאבון</h3>
                <p className="reference-text-secondary text-sm leading-relaxed">
                  מפחית רעב, ונותן תחושת שובע
                </p>
              </div>
              
              <div className="reference-card text-center reference-hover-lift">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold mb-3 reference-text-primary">מעניק אנרגיה נקייה</h3>
                <p className="reference-text-secondary text-sm leading-relaxed">
                  לאורך היום – בלי קפאין, בלי התרסקות
                </p>
              </div>
              
              <div className="reference-card text-center reference-hover-lift">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold mb-3 reference-text-primary">משפר ריכוז וחדות</h3>
                <p className="reference-text-secondary text-sm leading-relaxed">
                  מושלם ללמידה, נהיגה, עבודה
                </p>
              </div>
              
              <div className="reference-card text-center reference-hover-lift">
                <div className="text-3xl mb-3">💚</div>
                <h3 className="text-lg font-semibold mb-3 reference-text-primary">מעורר את החשק המיני</h3>
                <p className="reference-text-secondary text-sm leading-relaxed">
                  טבעי, עדין ומורגש
                </p>
              </div>
            </div>
            
            <div className="relative reference-slide-up">
              <Image
                src="/images/photo2.jpeg"
                alt="GatRise - מוצר טבעי לירידה במשקל"
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl reference-hover-lift"
              />
            </div>
          </div>
          
          {/* Additional benefits */}
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
      </section>

      {/* Usage Section */}
      <section className="reference-section-alt">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary">
              💧 איך משתמשים?
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
      </section>

      {/* Warning Section */}
      <section className="reference-section py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">⚠️ שימו לב:</h3>
            <div className="text-lg reference-text-secondary space-y-2">
              <p>❌ לא מומלץ לחולי סוכרת, בעיות לב, או למי שנוטל תרופות מרשם</p>
              <p>✅ מומלץ להתייעץ עם רופא לפני תחילת שימוש</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="reference-section-alt">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary">
              ⭐ לקוחות ממליצים:
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
      </section>

      {/* Pricing Section */}
      <section id="order" className="reference-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full text-sm font-bold mb-6">
              🔥 מחיר השקה מוגבל
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary">
              💸 מחיר השקה מוגבל:
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
            <div className="reference-card reference-hover-lift relative scale-105">
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
      </section>

      {/* FAQ Section */}
      <section id="faq" className="reference-section-alt">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary">
              ❓ שאלות נפוצות (FAQ):
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
      </section>

      {/* Target Audience Section */}
      <section className="reference-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary">
              🎯 למי זה מתאים?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="reference-card text-center reference-hover-lift">
              <div className="text-4xl mb-4">👫</div>
              <p className="text-lg reference-text-primary">גברים ונשים שרוצים לרדת במשקל בלי סבל</p>
            </div>
            
            <div className="reference-card text-center reference-hover-lift">
              <div className="text-4xl mb-4">⚡</div>
              <p className="text-lg reference-text-primary">מי שמחפש יותר אנרגיה, חיוניות, ריכוז</p>
            </div>
            
            <div className="reference-card text-center reference-hover-lift">
              <div className="text-4xl mb-4">❤️</div>
              <p className="text-lg reference-text-primary">זוגות שמעוניינים להחזיר את התשוקה</p>
            </div>
            
            <div className="reference-card text-center reference-hover-lift">
              <div className="text-4xl mb-4">🌿</div>
              <p className="text-lg reference-text-primary">כל מי שרוצה פתרון פשוט, טבעי – שעובד</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="reference-section-alt">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reference-text-primary">
              📸 גלריית תמונות
            </h2>
            <p className="text-xl reference-text-secondary mb-8">
              צפו במוצר GatRise מכל הזוויות - איכות פרימיום שאתם יכולים לראות
            </p>
          </div>
          
          {/* Featured promotional images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            <div className="relative group overflow-hidden rounded-3xl shadow-xl reference-hover-lift">
              <Image
                src="/images/photo4.jpeg"
                alt="GatRise - מוצר איכותי"
                width={400}
                height={500}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">איכות פרימיום</h3>
                <p className="text-sm opacity-90">בקבוק זכוכית יוקרתי</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl shadow-xl reference-hover-lift">
              <Image
                src="/images/photo5.jpeg"
                alt="GatRise - תמצית טבעית"
                width={400}
                height={500}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">תמצית טבעית</h3>
                <p className="text-sm opacity-90">100% GAT טבעי</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl shadow-xl reference-hover-lift">
              <Image
                src="/images/photo6.jpeg"
                alt="GatRise - קל לשימוש"
                width={400}
                height={500}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">קל לשימוש</h3>
                <p className="text-sm opacity-90">מינון מדויק</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl shadow-xl reference-hover-lift">
              <Image
                src="/images/photo7.jpeg"
                alt="GatRise - תוצאות מהירות"
                width={400}
                height={500}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">תוצאות מהירות</h3>
                <p className="text-sm opacity-90">השפעה תוך דקות</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://wa.me/972524109207?text=שלום, אני רוצה לראות עוד תמונות של המוצר GatRise"
              target="_blank"
              rel="noopener noreferrer"
              className="reference-button reference-hover-lift"
            >
              📱 למידע נוסף ותמונות
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="reference-section">
        <div className="container mx-auto text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 reference-text-primary">
              💬 דבר אחרון…
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
