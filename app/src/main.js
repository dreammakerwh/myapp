// 主应用逻辑
import { APPS } from './apps-data.js';
import * as i18n from './locales/index.js';
import './style.css';

// 全局状态
let currentLanguage = 'en';
let isScrolling = false;

// 初始化应用
async function initApp() {
    // 等待语言系统初始化
    await i18n.initLanguage();
    currentLanguage = i18n.currentLanguage;

    // 初始化语言切换器
    i18n.initLanguageSwitcher();

    // 渲染应用卡片
    renderApps();

    // 初始化滚动指示器
    initScrollIndicator();

    // 初始化图片懒加载
    initLazyLoading();
    
    // 监听语言变化
    window.addEventListener('languageChanged', (event) => {
        currentLanguage = event.detail.language;
        renderApps();
    });
    
    // 监听窗口大小变化
    window.addEventListener('resize', debounce(updateScrollIndicator, 150));
    
    console.log('NovaArcade Apps initialized');
}

// 渲染所有应用卡片
function renderApps() {
    const container = document.getElementById('apps-container');
    if (!container) return;
    
    container.innerHTML = APPS.map((app, index) => createAppCard(app, index)).join('');
    
    // 重新初始化懒加载
    setTimeout(initLazyLoading, 100);
    
    // 更新滚动指示器
    updateScrollIndicator();
}

// 创建单个应用卡片
function createAppCard(app, index) {
    const t = i18n.t || (key => key);
    
    // 获取翻译文本
    const title = t(app.titleKey) || app.titleKey;
    const description = t(app.descKey) || app.descKey;
    const genre = t(app.genreKey) || app.genreKey;
    const features = t(app.featuresKey) || '';
    const altText = t(app.screenshot.altKey) || t('app.screenshot.alt') || 'App screenshot';
    
    // 颜色映射
    const colorClasses = {
        indigo: 'bg-indigo-600',
        emerald: 'bg-emerald-600',
        red: 'bg-red-600',
        teal: 'bg-teal-600',
        purple: 'bg-purple-600'
    };
    
    const color = colorClasses[app.color] || 'bg-indigo-600';
    
    return `
        <section class="app-section ${color} relative" id="app-${app.id}" data-index="${index}">
            <div class="container mx-auto px-5 py-10 h-full flex flex-col justify-center">
                <!-- 应用编号 -->
                <div class="absolute top-6 left-5 opacity-20">
                    <span class="text-6xl font-bold font-orbitron">${String(index + 1).padStart(2, '0')}</span>
                </div>
                
                <div class="grid md:grid-cols-2 gap-10 items-center">
                    <!-- 应用截图 -->
                    <div class="relative z-10">
                        <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                            <img 
                                src="${app.screenshot.placeholder}" 
                                data-src="${app.screenshot.src}" 
                                alt="${altText}" 
                                class="lazy-image w-full h-auto aspect-video object-cover"
                                loading="lazy"
                            />
                            <div class="absolute top-4 right-4">
                                <span class="bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase border border-white/20">
                                    ${genre}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 应用信息 -->
                    <div class="relative z-10">
                        <!-- 应用图标和标题 -->
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-12 h-12 ${color} rounded-2xl flex items-center justify-center shadow-lg">
                                <i class="${app.icon} text-white text-xl"></i>
                            </div>
                            <h2 class="text-3xl md:text-4xl font-bold font-orbitron">${title}</h2>
                        </div>
                        
                        <!-- 应用描述 -->
                        <p class="text-lg text-white/90 mb-8 leading-relaxed">${description}</p>
                        
                        <!-- 特性列表 -->
                        ${features ? `
                        <div class="mb-8">
                            <h3 class="text-xl font-bold mb-4 text-white flex items-center gap-2">
                                <i class="fas fa-star text-yellow-400"></i>
                                <span data-i18n="app.features.title">Key Features</span>
                            </h3>
                            <div class="bg-black/20 rounded-xl p-5 border border-white/10">
                                <div class="text-white/80 space-y-2 text-sm">
                                    ${features.split('\n').map(feature => `
                                        <div class="flex items-start gap-3">
                                            <i class="fas fa-check text-green-400 mt-1"></i>
                                            <span>${feature.replace('• ', '')}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        ` : ''}
                        
                        <!-- 下载按钮 -->
                        <div class="flex flex-wrap gap-4">
                            <a href="${app.appStoreUrl}" 
                               class="download-btn ${color} text-white hover:opacity-90 border-2 border-white/30 hover:border-white/50 shadow-lg"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i class="fab fa-apple text-xl"></i>
                                <div class="flex flex-col">
                                    <span class="text-xs">Download on</span>
                                    <span class="font-bold">App Store</span>
                                </div>
                            </a>
                            
                            <a href="${app.googlePlayUrl}" 
                               class="download-btn bg-slate-800 text-white hover:bg-slate-700"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i class="fab fa-google-play text-xl"></i>
                                <div class="flex flex-col">
                                    <span class="text-xs">Get it on</span>
                                    <span class="font-bold">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- 向下滚动提示（除了最后一个应用） -->
                ${index < APPS.length - 1 ? `
                <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <button onclick="scrollToApp(${index + 1})" 
                            class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                ` : ''}
            </div>
            
            <!-- 装饰性背景元素 -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48 blur-3xl"></div>
        </section>
    `;
}

// 滚动到特定应用
function scrollToApp(index) {
    const appElement = document.getElementById(`app-${APPS[index].id}`);
    if (appElement) {
        appElement.scrollIntoView({ behavior: 'smooth' });
    }
}

// 初始化滚动指示器
function initScrollIndicator() {
    const indicator = document.getElementById('scroll-indicator');
    if (!indicator) return;
    
    // 清空现有指示点
    indicator.innerHTML = '';
    
    // 为每个应用创建指示点
    APPS.forEach((app, index) => {
        const dot = document.createElement('button');
        dot.className = 'indicator-dot';
        dot.setAttribute('aria-label', `Go to ${app.titleKey}`);
        dot.addEventListener('click', () => scrollToApp(index));
        indicator.appendChild(dot);
    });
    
    // 监听滚动事件
    window.addEventListener('scroll', throttle(updateScrollIndicator, 100));
    
    // 初始更新
    updateScrollIndicator();
}

// 更新滚动指示器状态
function updateScrollIndicator() {
    if (isScrolling) return;
    
    const appSections = document.querySelectorAll('.app-section');
    const dots = document.querySelectorAll('.indicator-dot');
    
    if (appSections.length === 0 || dots.length === 0) return;
    
    // 找到当前可见的应用
    let currentIndex = 0;
    let maxVisibility = 0;
    
    appSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const visibility = Math.min(rect.height, 
            Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));
        
        if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentIndex = index;
        }
    });
    
    // 更新指示点状态
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// 初始化图片懒加载
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // 回退方案：直接加载所有图片
        lazyImages.forEach(img => {
            const src = img.getAttribute('data-src');
            if (src) {
                img.src = src;
                img.classList.add('loaded');
            }
        });
    }
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 导出到全局作用域（用于HTML中的内联事件）
window.scrollToApp = scrollToApp;
window.updateAppData = renderApps;

// 启动应用
document.addEventListener('DOMContentLoaded', initApp);