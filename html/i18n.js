// NovaArcade 国际化工具
// 多语言支持核心功能

// 语言配置
const I18N_CONFIG = {
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'zh'],
    storageKey: 'novaarcade_language',
    attribute: 'data-i18n'
};

// 当前语言
let currentLanguage = I18N_CONFIG.defaultLanguage;

// 初始化语言
function initLanguage() {
    // 从localStorage获取用户偏好
    const savedLanguage = localStorage.getItem(I18N_CONFIG.storageKey);
    
    // 从浏览器语言检测
    const browserLanguage = navigator.language || navigator.userLanguage;
    const browserLangCode = browserLanguage.split('-')[0];
    
    // 确定使用的语言
    if (savedLanguage && I18N_CONFIG.supportedLanguages.includes(savedLanguage)) {
        currentLanguage = savedLanguage;
    } else if (I18N_CONFIG.supportedLanguages.includes(browserLangCode)) {
        currentLanguage = browserLangCode;
    } else {
        currentLanguage = I18N_CONFIG.defaultLanguage;
    }
    
    // 设置HTML lang属性
    document.documentElement.lang = currentLanguage;
    
    // 应用语言
    applyLanguage();
    
    // 更新语言切换按钮状态
    updateLanguageSwitcher();
}

// 切换语言
function switchLanguage(langCode) {
    if (!I18N_CONFIG.supportedLanguages.includes(langCode)) {
        console.warn(`Unsupported language: ${langCode}`);
        return;
    }
    
    currentLanguage = langCode;
    localStorage.setItem(I18N_CONFIG.storageKey, langCode);
    document.documentElement.lang = langCode;
    
    applyLanguage();
    updateLanguageSwitcher();
    
    // 触发自定义事件，以便其他组件可以响应语言变化
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: langCode } }));
}

// 应用当前语言到页面
function applyLanguage() {
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll(`[${I18N_CONFIG.attribute}]`).forEach(element => {
        const key = element.getAttribute(I18N_CONFIG.attribute);
        const translation = getTranslation(key);
        
        if (translation !== null) {
            // 检查元素类型，处理不同的内容设置方式
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
    
    // 特殊处理：更新游戏数据
    updateGameData();
}

// 获取翻译文本
function getTranslation(key) {
    if (!window.locales || !window.locales[currentLanguage]) {
        console.warn(`Locale data not found for language: ${currentLanguage}`);
        return key;
    }
    
    const translation = window.locales[currentLanguage][key];
    
    if (translation === undefined) {
        console.warn(`Translation key not found: ${key} for language: ${currentLanguage}`);
        return key;
    }
    
    return translation;
}

// 更新游戏数据（特殊处理，因为游戏数据在单独的数组中）
function updateGameData() {
    if (typeof window.GAMES === 'undefined') {
        return;
    }
    
    // 更新游戏描述（如果存在）
    if (window.GAMES && window.GAMES.length > 0) {
        // 游戏描述键名映射
        const gameDescKeys = {
            'Cyber Odyssey': 'game.cyber_odyssey.desc',
            'Mystic Realms': 'game.mystic_realms.desc',
            'Speed Velocity': 'game.speed_velocity.desc',
            'Zen Garden': 'game.zen_garden.desc',
            'Pixel Quest': 'game.pixel_quest.desc'
        };
        
        // 更新游戏数组中的描述
        window.GAMES.forEach(game => {
            const descKey = gameDescKeys[game.title];
            if (descKey) {
                game.description = getTranslation(descKey);
            }
        });
        
        // 如果游戏渲染函数存在，重新渲染
        if (typeof renderGames === 'function') {
            renderGames();
        }
    }
}

// 更新语言切换按钮状态
function updateLanguageSwitcher() {
    // 更新所有语言切换按钮
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
        element.textContent = getTranslation(`language.${currentLanguage}`);
    });
}

// 初始化语言切换按钮事件
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

// 便捷函数：设置元素翻译
function setElementTranslation(elementId, key) {
    const element = document.getElementById(elementId);
    if (element) {
        element.setAttribute(I18N_CONFIG.attribute, key);
        const translation = getTranslation(key);
        if (translation !== null) {
            element.innerHTML = translation;
        }
    }
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保语言数据已加载
    if (typeof window.locales === 'undefined') {
        console.error('Locales data not loaded. Make sure locales.js is loaded before i18n.js');
        return;
    }
    
    initLanguage();
    initLanguageSwitcher();
    
    // 监听自定义事件，允许其他组件在语言变化时更新
    window.addEventListener('languageChanged', function(event) {
        console.log(`Language changed to: ${event.detail.language}`);
    });
});

// 导出API
window.I18N = {
    initLanguage,
    switchLanguage,
    applyLanguage,
    getTranslation: t,
    t,
    setElementTranslation,
    currentLanguage: () => currentLanguage,
    config: I18N_CONFIG
};