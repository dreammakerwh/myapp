// 多语言系统
// 支持动态加载语言包

const SUPPORTED_LANGUAGES = ['en', 'zh'];
const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'novaarcade_apps_language';

let currentLanguage = DEFAULT_LANGUAGE;
let translations = {};

// 语言数据（通过动态导入）
const languageModules = {
    en: () => import('./en.json').then(module => module.default),
    zh: () => import('./zh.json').then(module => module.default)
};

// 加载语言文件
async function loadLanguage(langCode) {
    try {
        const loader = languageModules[langCode];
        if (!loader) {
            throw new Error(`Unsupported language: ${langCode}`);
        }
        return await loader();
    } catch (error) {
        console.warn(`Failed to load language ${langCode}:`, error);
        // 回退到默认语言
        if (langCode !== DEFAULT_LANGUAGE) {
            return await loadLanguage(DEFAULT_LANGUAGE);
        }
        return {};
    }
}

// 初始化语言
async function initLanguage() {
    // 从 localStorage 获取保存的语言
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    
    // 检测浏览器语言
    const browserLanguage = navigator.language || navigator.userLanguage;
    const browserLangCode = browserLanguage.split('-')[0];
    
    // 确定使用的语言
    let langToUse = DEFAULT_LANGUAGE;
    
    if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
        langToUse = savedLanguage;
    } else if (SUPPORTED_LANGUAGES.includes(browserLangCode)) {
        langToUse = browserLangCode;
    }
    
    // 加载语言包
    translations = await loadLanguage(langToUse);
    currentLanguage = langToUse;
    
    // 设置 HTML lang 属性
    document.documentElement.lang = currentLanguage;
    
    // 应用翻译
    applyTranslations();
    
    // 更新语言切换器状态
    updateLanguageSwitcher();
    
    return currentLanguage;
}

// 切换语言
async function switchLanguage(langCode) {
    if (!SUPPORTED_LANGUAGES.includes(langCode)) {
        console.warn(`Unsupported language: ${langCode}`);
        return false;
    }
    
    // 加载新语言包
    const newTranslations = await loadLanguage(langCode);
    if (Object.keys(newTranslations).length === 0) {
        return false;
    }
    
    // 更新状态
    translations = newTranslations;
    currentLanguage = langCode;
    localStorage.setItem(STORAGE_KEY, langCode);
    document.documentElement.lang = langCode;
    
    // 应用翻译
    applyTranslations();
    updateLanguageSwitcher();
    
    // 触发语言变化事件
    window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: langCode }
    }));
    
    return true;
}

// 应用翻译到页面
function applyTranslations() {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        
        if (translation !== null) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translation;
            } else if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else if (element.hasAttribute('title')) {
                element.title = translation;
            } else if (element.hasAttribute('alt')) {
                element.alt = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
    
    // 触发应用数据更新（如果有）
    if (window.updateAppData) {
        window.updateAppData();
    }
}

// 获取翻译文本
function getTranslation(key) {
    if (!translations || !translations[key]) {
        console.warn(`Translation key not found: ${key} for language: ${currentLanguage}`);
        return key;
    }
    
    return translations[key];
}

// 更新语言切换器按钮状态
function updateLanguageSwitcher() {
    document.querySelectorAll('[data-language-switch]').forEach(button => {
        const langCode = button.getAttribute('data-language-switch');
        if (langCode === currentLanguage) {
            button.classList.add('active', 'font-bold', 'text-indigo-400');
            button.classList.remove('text-slate-400');
        } else {
            button.classList.remove('active', 'font-bold', 'text-indigo-400');
            button.classList.add('text-slate-400');
        }
    });
    
    // 更新语言显示文本
    document.querySelectorAll('[data-current-language]').forEach(element => {
        const langText = getTranslation(`language.${currentLanguage}`);
        if (langText) {
            element.textContent = langText;
        }
    });
}

// 初始化语言切换器事件
function initLanguageSwitcher() {
    document.querySelectorAll('[data-language-switch]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const langCode = this.getAttribute('data-language-switch');
            switchLanguage(langCode);
        });
    });
}

// 便捷函数：翻译单个文本
function t(key) {
    return getTranslation(key);
}

// 导出 API
export {
    initLanguage,
    switchLanguage,
    applyTranslations,
    getTranslation,
    t,
    currentLanguage,
    SUPPORTED_LANGUAGES,
    DEFAULT_LANGUAGE
};

// 自动初始化
document.addEventListener('DOMContentLoaded', async () => {
    await initLanguage();
    initLanguageSwitcher();
});