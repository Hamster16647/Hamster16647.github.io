const translations = {
  zh: {
    heroTitle: '王亦如',
    heroSubtitle: '我喜歡看小說、和朋友聊天，也愛把生活變成一段小冒險。',
    btnDiscover: '來認識我',
    btnContact: '聯絡我',
    btnResume: '下載履歷',
    visualBadge: '自我介紹',
    aboutTitle: '關於我',
    aboutIntro: '我是一名北醫臨床藥學系學生，喜歡把學術與生活設計成一場有趣的旅程。',
    aboutCard1Title: '學習旅程',
    aboutCard1Text: '從高中奮鬥到考上北醫臨床藥學系，我熱愛藥學的細節與人性關懷。',
    aboutCard2Title: '興趣節奏',
    aboutCard2Text: '閒暇時我會讀小說、聽獨立音樂，偶爾擔任朋友的心情小相談。',
    aboutCard3Title: '內向但熱情',
    aboutCard3Text: '雖然我生性害羞，但我希望透過筆與對話，讓每一次交流都更有溫度。',
    achievementTitle: '我的事蹟',
    achievementIntro: '以虛擬人物設定打造豐富而引人入勝的學習故事。',
    achievement1Title: '考上北醫',
    achievement1Text: '臨床藥學系第一志願錄取，夢想從醫療科學出發。',
    achievement2Title: '學生專題',
    achievement2Text: '參與藥物動力學研究，探索新型治療方案的可能性。',
    achievement3Title: '社群參與',
    achievement3Text: '擔任系上社團活動策劃，串連同學與講師的對話。',
    contactTitle: '聯絡我',
    contactIntro: '歡迎來信、追蹤我的 IG，或與我一起分享閱讀心得。',
    contactCard1Title: '社群平台',
    contactCard2Title: '個人座右銘',
    contactQuote: '在害羞和勇氣之間，我選擇每天都往前踏出一小步。',
    contactExtra: '如果你也喜歡故事、療癒與創意，讓我們一起把平凡的日常變成溫柔的冒險。',
  },
  en: {
    heroTitle: 'Yiru Wang',
    heroSubtitle: 'I love reading novels, chatting with friends, and turning life into a gentle adventure.',
    btnDiscover: 'Discover Me',
    btnContact: 'Contact Me',
    btnResume: 'Download Resume',
    visualBadge: 'About Me',
    aboutTitle: 'About Me',
    aboutIntro: 'I am a fictional clinical pharmacy student who enjoys creating meaningful experiences from everyday life.',
    aboutCard1Title: 'Learning Journey',
    aboutCard1Text: 'From high school effort to Taipei Medical University, I enjoy the details of pharmacy and heartfelt care.',
    aboutCard2Title: 'Interests',
    aboutCard2Text: 'In my free time I read novels, listen to indie music, and become a little emotional support for friends.',
    aboutCard3Title: 'Shy but Driven',
    aboutCard3Text: 'Although quiet by nature, I strive to make every conversation warm through writing and honest connection.',
    achievementTitle: 'Highlights',
    achievementIntro: 'A vibrant profile built around an imaginative personal story.',
    achievement1Title: 'Accepted to TMU',
    achievement1Text: 'First-choice admission to Clinical Pharmacy, with dreams rooted in medical science.',
    achievement2Title: 'Student Project',
    achievement2Text: 'Participated in pharmacokinetics research to explore innovative treatment possibilities.',
    achievement3Title: 'Community Role',
    achievement3Text: 'Organized student activities and welcomed conversations between peers and faculty.',
    contactTitle: 'Get in Touch',
    contactIntro: 'Feel free to message me, follow my IG, or share your thoughts on reading.',
    contactCard1Title: 'Social Links',
    contactCard2Title: 'Personal Motto',
    contactQuote: 'Between shy and brave, I choose a small step forward every day.',
    contactExtra: 'If you love stories, healing, and creativity too, let’s make everyday moments feel like gentle adventures.',
  }
};

const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const dataElements = document.querySelectorAll('[data-i18n]');
const body = document.body;

function setLanguage(lang) {
  const current = translations[lang] ? lang : 'zh';
  dataElements.forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[current][key]) {
      el.textContent = translations[current][key];
    }
  });
  langToggle.textContent = current === 'zh' ? 'EN' : 'ZH';
  langToggle.setAttribute('data-current', current);
  document.documentElement.lang = current === 'zh' ? 'zh-Hant' : 'en';
}

function setTheme(theme) {
  body.classList.toggle('light', theme === 'light');
  themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
  localStorage.setItem('profileTheme', theme);
}

langToggle.addEventListener('click', () => {
  const next = langToggle.getAttribute('data-current') === 'zh' ? 'en' : 'zh';
  setLanguage(next);
});

themeToggle.addEventListener('click', () => {
  const nextTheme = body.classList.contains('light') ? 'dark' : 'light';
  setTheme(nextTheme);
});

function restorePreferences() {
  const savedTheme = localStorage.getItem('profileTheme') || 'dark';
  setTheme(savedTheme);
  setLanguage('zh');
}

function initAnimations() {
  const heroElems = document.querySelectorAll('.hero-copy > *');
  gsap.from('.hero-copy h1', {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  });
  gsap.from(heroElems, {
    y: 24,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.2
  });
  gsap.from('.visual-card', {
    x: 80,
    opacity: 0,
    duration: 1.1,
    ease: 'power3.out'
  });
  gsap.utils.toArray('.info-card, .stat-card, .contact-card').forEach((card, index) => {
    gsap.from(card, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: index * 0.08,
      ease: 'power3.out'
    });
  });
}

restorePreferences();
window.addEventListener('load', initAnimations);
