import Image from "next/image";

// IMPORTANT: WhatsApp number is set to 0524109207
// Format: Israeli phone number format

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200/30 z-50 shadow-lg shadow-green-100/20">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              🌿 GatRise
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 space-x-reverse">
              <a 
                href="#home" 
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-lg group px-2"
              >
                בית
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#benefits" 
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-lg group px-2"
              >
                יתרונות
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#testimonials" 
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-lg group px-2"
              >
                המלצות
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#order" 
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-lg group px-2"
              >
                הזמנה
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            
            {/* CTA Button */}
            <a 
              href="https://wa.me/972524109207?text=שלום, אני מעוניין לקבל מידע על GatRise"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 md:px-8 py-2 md:py-3 rounded-full hover:shadow-xl hover:shadow-green-200/50 transition-all duration-300 text-sm md:text-base font-semibold transform hover:scale-105 hover:from-green-700 hover:to-emerald-700"
            >
              <span className="hidden md:inline">📱 הזמן עכשיו</span>
              <span className="md:hidden">הזמן</span>
            </a>
          </div>
          
          {/* Mobile Navigation Menu (Hidden by default, can be toggled) */}
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200/30">
            <div className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium text-lg py-2 hover:bg-green-50 rounded-lg px-3"
              >
                בית
              </a>
              <a 
                href="#benefits" 
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium text-lg py-2 hover:bg-green-50 rounded-lg px-3"
              >
                יתרונות
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium text-lg py-2 hover:bg-green-50 rounded-lg px-3"
              >
                המלצות
              </a>
              <a 
                href="#order" 
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium text-lg py-2 hover:bg-green-50 rounded-lg px-3"
              >
                הזמנה
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-right">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-800 via-emerald-700 to-green-600 bg-clip-text text-transparent leading-tight">
                🌿 GatRise
              </h1>
              
              {/* GAT Ancient Origins */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200 mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-green-800">
                  גת – סוד עתיק, תוצאה מודרנית
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                  צמח טבעי שמקורו בתימן, ידוע כבר מאות שנים כמקור לעוררות, חדות, תחושת שובע ומיקוד.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                  היום – בבקבוקון קטן, חכם ועוצמתי.
                </p>
                <p className="text-lg md:text-xl font-semibold text-green-700">
                  GatRise – הדרך הטבעית שלך לשליטה, ריכוז ואנרגיה
                </p>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                ירידה במשקל, פוקוס ואנרגיה בטיפה אחת
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                נמאס לך מדיאטות קשות, זריקות יקרות ואימונים מתישים?<br />
                הגיע הזמן לפתרון טבעי, נעים ומדויק – שמביא תוצאות.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>GatRise</strong> הוא תמצית שמן גת טבעית, בבקבוקון יוקרתי של 10 מ"ל,<br />
                שמדכאת תיאבון, מגבירה ריכוז, מחזקת את האנרגיה – ומעוררת את החשק המיני.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center">
                <a 
                  href="https://wa.me/972524109207?text=שלום, אני מעוניין להזמין GatRise - ₪500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  הזמן עכשיו
                </a>
                <a 
                  href="#faq"
                  className="border-2 border-green-300 text-green-700 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:border-green-400 transition-all duration-300 text-center"
                >
                  שאלות נפוצות
                </a>
              </div>
            </div>
            
            {/* Product Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <Image
                  src="/images/photo1.jpeg"
                  alt="GatRise - תמצית שמן גת טבעית"
                  width={400}
                  height={400}
                  className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              ✅ מה GatRise עושה עבורך?
            </h2>
          </div>
          
          {/* Benefits with integrated photos */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl border border-red-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3">🔥</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">מדכא תיאבון</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  מפחית רעב, ונותן תחושת שובע
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">מעניק אנרגיה נקייה</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  לאורך היום – בלי קפאין, בלי התרסקות
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">משפר ריכוז וחדות</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  מושלם ללמידה, נהיגה, עבודה
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3">💚</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">מעורר את החשק המיני</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  טבעי, עדין ומורגש
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/photo2.jpeg"
                alt="GatRise - מוצר טבעי לירידה במשקל"
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          
          {/* Additional benefits */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">טבעי לחלוטין</h3>
              <p className="text-gray-600 leading-relaxed">
                ללא חומרים כימיים, לא ממכר
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">השפעה מיידית</h3>
              <p className="text-gray-600 leading-relaxed">
                מרגישים את ההשפעה תוך דקות – כבר מהשימוש הראשון!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              💧 איך משתמשים?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-6xl mb-4">1️⃣</div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">טפטפו 5-7 טיפות</h3>
                <p className="text-gray-600 text-sm">
                  מתחת ללשון (אפשר גם בכוס מים)
                </p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-6xl mb-4">2️⃣</div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">המתינו</h3>
                <p className="text-gray-600 text-sm">
                  1–2 דקות לספיגה מלאה
                </p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-6xl mb-4">3️⃣</div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">הרגישו</h3>
                <p className="text-gray-600 text-sm">
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
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 px-6 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-yellow-800">⚠️ שימו לב:</h3>
            <div className="text-lg text-yellow-700 space-y-2">
              <p>❌ לא מומלץ לחולי סוכרת, בעיות לב, או למי שנוטל תרופות מרשם</p>
              <p>✅ מומלץ להתייעץ עם רופא לפני תחילת שימוש</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              ⭐ לקוחות ממליצים:
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300">
                <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "ירדתי 4 קילו תוך חודש וחצי בלי לשנות כמעט כלום. תחושת שובע משוגעת ויעילה"
                </p>
                <div className="font-semibold text-gray-900">מעיין, בת 33</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "אני מתרכז פי 2 בעבודה. והאמת? גם החשק המיני עלה."
                </p>
                <div className="font-semibold text-gray-900">דניאל, בן 39</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "פשוט עובד. טעם טבעי, תחושה טובה, בלי כאבי ראש."
                </p>
                <div className="font-semibold text-gray-900">אור, בן 27</div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/photo10.jpeg"
                alt="GatRise - לקוחות מרוצים"
                width={500}
                height={600}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="order" className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              💸 מחיר השקה מוגבל:
            </h2>
          </div>
          
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200">
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-4">🧴</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">בקבוקון 1</h3>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-6">₪500</div>
                <a 
                  href="https://wa.me/972524109207?text=שלום, אני מעוניין להזמין בקבוקון 1 של GatRise (500 שקל)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 md:px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
                >
                  הזמן עכשיו
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-4 border-green-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold">
                הכי פופולרי
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-4">🧴🧴</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">2 בקבוקונים</h3>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">₪900</div>
                <div className="text-sm text-gray-500 line-through mb-4">₪1000</div>
                <a 
                  href="https://wa.me/972524109207?text=שלום, אני מעוניין להזמין 2 בקבוקונים של GatRise (900 שקל)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 md:px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
                >
                  הזמן עכשיו
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200">
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-4">🧴🧴🧴</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">3 בקבוקונים</h3>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">₪1300</div>
                <div className="text-sm text-gray-500 line-through mb-4">₪1500</div>
                <a 
                  href="https://wa.me/972524109207?text=שלום, אני מעוניין להזמין 3 בקבוקונים של GatRise (1300 שקל)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 md:px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
                >
                  הזמן עכשיו
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-4">📦 המחירים כוללים משלוח במרכז</p>
            <p className="text-lg text-gray-700">🛡️ אחריות מלאה – לא מרוצה? קבל החזר כספי תוך 48 שעות</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              ❓ שאלות נפוצות (FAQ):
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">ש: זה מתאים גם אם אני לא עושה דיאטה קפדנית?</h3>
              <p className="text-gray-700">ת: כן. GatRise מדכא תיאבון באופן טבעי גם בלי תפריט מחמיר.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">ש: תוך כמה זמן מרגישים שינוי?</h3>
              <p className="text-gray-700">ת: ברוב המקרים – תוך 10–20 דקות.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">ש: זה חוקי ובטוח?</h3>
              <p className="text-gray-700">ת: 100% טבעי, ללא מרשם. אך לא מיועד לחולי לב או סוכרת.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">ש: כמה זמן מחזיק בקבוקון?</h3>
              <p className="text-gray-700">ת: בממוצע – בין 2 ל-3 שבועות של שימוש יומיומי.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              🎯 למי זה מתאים?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">👫</div>
              <p className="text-lg text-gray-700">גברים ונשים שרוצים לרדת במשקל בלי סבל</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <p className="text-lg text-gray-700">מי שמחפש יותר אנרגיה, חיוניות, ריכוז</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">❤️</div>
              <p className="text-lg text-gray-700">זוגות שמעוניינים להחזיר את התשוקה</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🌿</div>
              <p className="text-lg text-gray-700">כל מי שרוצה פתרון פשוט, טבעי – שעובד</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              📸 גלריית תמונות
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              צפו במוצר GatRise מכל הזוויות - איכות פרימיום שאתם יכולים לראות
            </p>
          </div>
          
          {/* Featured promotional images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <Image
                src="/images/photo4.jpeg"
                alt="GatRise - מוצר איכותי"
                width={400}
                height={500}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">איכות פרימיום</h3>
                <p className="text-sm opacity-90">בקבוק זכוכית יוקרתי</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <Image
                src="/images/photo5.jpeg"
                alt="GatRise - תמצית טבעית"
                width={400}
                height={500}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">תמצית טבעית</h3>
                <p className="text-sm opacity-90">100% GAT טבעי</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <Image
                src="/images/photo6.jpeg"
                alt="GatRise - קל לשימוש"
                width={400}
                height={500}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">קל לשימוש</h3>
                <p className="text-sm opacity-90">מינון מדויק</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <Image
                src="/images/photo7.jpeg"
                alt="GatRise - תוצאות מהירות"
                width={400}
                height={500}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">תוצאות מהירות</h3>
                <p className="text-sm opacity-90">השפעה תוך דקות</p>
              </div>
            </div>
          </div>
          
          {/* Additional product photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/photo8.jpeg"
                alt="GatRise פרט"
                width={300}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/photo9.jpeg"
                alt="GatRise פרט"
                width={300}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/photo1.jpeg"
                alt="GatRise פרט"
                width={300}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/photo2.jpeg"
                alt="GatRise פרט"
                width={300}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://wa.me/972524109207?text=שלום, אני רוצה לראות עוד תמונות של המוצר GatRise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>📱</span>
              <span>למידע נוסף ותמונות</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              💬 דבר אחרון…
            </h2>
            <div className="text-xl text-gray-700 mb-8 leading-relaxed space-y-4">
              <p>לא צריך לסבול כדי לרדת במשקל.</p>
              <p>לא צריך לפחד מאיבוד חשק, עייפות או תסכול.</p>
              <p className="font-semibold text-2xl text-green-700">עם GatRise – אתה מרגיש בשליטה, חזק, חד.</p>
              <p className="font-semibold text-xl">וטבעי לגמרי.</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 md:p-8 rounded-2xl mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">📲 הזמן עכשיו</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/972524109207?text=שלום, אני מעוניין לקבל מידע על GatRise ולבצע הזמנה"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 md:px-8 py-4 rounded-full text-lg md:text-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  ✅ שלח הודעה בוואטסאפ להזמנה
                </a>
                
                <div className="text-center">
                  <p className="text-base md:text-lg text-gray-600 mb-2">📞 או חייג ישירות:</p>
                  <a 
                    href="tel:+972524109207" 
                    className="text-xl md:text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
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
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              🌿 GatRise
            </div>
            <p className="text-gray-400 mb-6">ירידה במשקל, פוקוס ואנרגיה בטיפה אחת</p>
            <div className="flex justify-center items-center gap-8">
              <button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-sm">תנאי שימוש</button>
              <span className="text-gray-600">•</span>
              <button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-sm">מדיניות פרטיות</button>
              <span className="text-gray-600">•</span>
              <button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-sm">יצירת קשר</button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              © 2025 GatRise. כל הזכויות שמורות.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
