// NovaArcade 多语言支持
// 语言数据文件

const locales = {
    en: {
        // 通用
        'site.title': 'NovaArcade - Premium Mobile Gaming Center',
        'nav.home': 'Home',
        'nav.privacy': 'Privacy Policy',
        'nav.terms': 'Terms of Service',
        'nav.about': 'About Us',
        'nav.contact': 'Customer Support',
        'language.en': 'English',
        'language.zh': '中文',
        'language.switch': 'Language',
        'back.home': 'Back to Home',
        
        // 首页 - 头部
        'home.title': 'NOVA<span class="text-indigo-500">ARCADE</span>',
        'home.hero.title': 'Premium Game Recommendations',
        'home.hero.subtitle': 'Discover your next adventure',
        
        // 首页 - 游戏
        'games.title': 'Games',
        'game.genre.action_rpg': 'Action RPG',
        'game.genre.adventure': 'Adventure',
        'game.genre.racing': 'Racing',
        'game.genre.puzzle': 'Puzzle',
        'game.genre.retro_rpg': 'Retro RPG',
        'game.download.app_store': 'App Store',
        'game.download.google_play': 'Google Play',
        
        // 首页 - 隐私声明
        'privacy.section.title': 'Privacy Protection Statement',
        'privacy.section.content': 'We highly value the protection of your personal information. Our platform and games are committed to following the principle of minimal data collection:',
        'privacy.data_storage.title': 'Data Storage:',
        'privacy.data_storage.content': 'Game progress and preference settings are by default saved only on your local device to ensure data security.',
        'privacy.info_collection.title': 'Information Collection:',
        'privacy.info_collection.content': 'We promise not to actively collect sensitive privacy information such as your location, contacts, SMS records, etc.',
        'privacy.third_party.title': 'Third-party Services:',
        'privacy.third_party.content': 'Encrypted transmission of the minimum necessary data occurs only when you use "Cloud Sync" or "Social Sharing" features.',
        
        // 首页 - 权限说明
        'permissions.title': 'Application Permission Instructions',
        'permission.storage.title': 'Storage Permission',
        'permission.storage.desc': 'Used for writing game saves, caching high-definition map data and offline resource packs to ensure smooth experience.',
        'permission.network.title': 'Network Permission',
        'permission.network.desc': 'Only used for verifying genuine licenses, syncing cloud achievements, and obtaining seasonal update content.',
        'permission.notification.title': 'Notification Permission',
        'permission.notification.desc': '(Optional) Used for receiving friend invitations, stamina recovery reminders, and limited-time event notifications.',
        'permission.device_state.title': 'Device State',
        'permission.device_state.desc': 'Automatically pauses games during incoming calls to prevent game audio from interfering with call quality.',
        
        // 页脚
        'footer.copyright': '© 2024 NovaArcade Studios. All Rights Reserved.',
        
        // 游戏描述
         'game.cyber_odyssey.desc': 'Immersive cyberpunk world, experience ultimate action combat and character customization.',
         'game.mystic_realms.desc': 'Explore mysterious floating islands, uncover forbidden magic hidden in ancient ruins.',
         'game.speed_velocity.desc': 'High-stakes urban street racing, customize your exclusive battle car, dominate midnight tracks.',
         'game.zen_garden.desc': 'Find inner peace through exquisite puzzles in a serene zen garden.',
         'game.pixel_quest.desc': 'Classic 8-bit pixel dungeon adventure, hone skills, slay monsters, collect epic equipment.',
         
         // 隐私政策页面
         'privacy.page.title': 'Privacy Policy - NovaArcade',
         'privacy.page.heading': 'Privacy Policy Terms',
         'privacy.page.effective': 'Effective Date: January 1, 2024',
         'privacy.intro': 'Welcome to NovaArcade. We highly value your privacy. This privacy policy details how we collect, use, and protect your information when you use our services.',
         'privacy.section1.title': '1. Information Collection',
         'privacy.section1.content': 'We follow the "minimum necessary" principle. Unless you voluntarily provide it (such as registering an account), we do not collect your personal identification information. Automatically collected information is limited to technical data such as device model and operating system version used to optimize game performance.',
         'privacy.section2.title': '2. Data Usage',
         'privacy.section2.content': 'Collected data is only used for: (a) providing and maintaining services; (b) improving game experience; (c) detecting and preventing fraudulent activities. We will never sell your personal data to third parties.',
         'privacy.section3.title': '3. Permission Requests',
         'privacy.section3.content': 'Specific features may require access to your device permissions (such as storage for save files, network for leaderboards). You can revoke these permissions at any time in your device settings.',
         'privacy.section4.title': '4. Data Security',
         'privacy.section4.content': 'We employ industry-standard encryption technologies (such as SSL/TLS) to protect your data transmission and storage security.',
         'privacy.permissions.title': 'Application Permission Instructions',
         'privacy.permission.storage.title': 'Storage Permission',
         'privacy.permission.storage.desc': 'Used for writing game saves, caching high-definition map data and offline resource packs to ensure smooth experience.',
         'privacy.permission.network.title': 'Network Permission',
         'privacy.permission.network.desc': 'Only used for verifying genuine licenses, syncing cloud achievements, and obtaining seasonal update content.',
         'privacy.permission.notification.title': 'Notification Permission',
         'privacy.permission.notification.desc': '(Optional) Used for receiving friend invitations, stamina recovery reminders, and limited-time event notifications.',
         'privacy.permission.device_state.title': 'Device State',
         'privacy.permission.device_state.desc': 'Automatically pauses games during incoming calls to prevent game audio from interfering with call quality.',
         
         // 服务协议页面
         'terms.page.title': 'Terms of Service - NovaArcade',
         'terms.page.heading': 'User Service Agreement',
         'terms.page.version': 'Version: 1.0',
         'terms.intro': 'Please read this service agreement carefully. Using any games or services provided by NovaArcade indicates that you agree to be bound by the terms of this agreement.',
         'terms.section1.title': '1. License Grant',
         'terms.section1.content': 'NovaArcade grants you a personal, non-exclusive, non-transferable license to use our game software solely for your personal non-commercial use.',
         'terms.section2.title': '2. User Conduct Guidelines',
         'terms.section2.content': 'You agree not to engage in the following behaviors: (a) using cheats or cheating software; (b) interfering with game server operations; (c) publishing illegal content or content that infringes on the rights of others.',
         'terms.section3.title': '3. Intellectual Property',
         'terms.section3.content': 'All content within the game (including but not limited to art assets, code, music) is owned by NovaArcade or its licensors and is protected by copyright law.',
         'terms.section4.title': '4. Disclaimer',
         'terms.section4.content': 'Services are provided "as is" without any express or implied warranties. We do not guarantee that services will be uninterrupted or error-free.',
         'terms.important.title': 'Important Notes',
         'terms.note1.title': 'Agreement Updates',
         'terms.note1.content': 'We may update this agreement from time to time. Continued use of our services indicates your acceptance of the updated agreement.',
         'terms.note2.title': 'Legal Application',
         'terms.note2.content': 'This agreement is governed by the laws of the People\'s Republic of China. Any disputes shall be resolved through friendly negotiation; if negotiation fails, they shall be submitted to the competent people\'s court for litigation.',
         'terms.note3.title': 'Language Version',
         'terms.note3.content': 'If there is any conflict between the Chinese version and the English version of this agreement, the Chinese version shall prevail.',
     },
     zh: {
        // 通用
        'site.title': 'NovaArcade - 精品移动游戏中心',
        'nav.home': '首页',
        'nav.privacy': '隐私条款',
        'nav.terms': '服务协议',
        'nav.about': '关于我们',
        'nav.contact': '联系客服',
        'language.en': 'English',
        'language.zh': '中文',
        'language.switch': '语言',
        'back.home': '返回首页',
        
        // 首页 - 头部
        'home.title': 'NOVA<span class="text-indigo-500">ARCADE</span>',
        'home.hero.title': '精品游戏推荐',
        'home.hero.subtitle': '发现属于你的下一场冒险',
        
        // 首页 - 游戏
        'games.title': '游戏',
        'game.genre.action_rpg': 'Action RPG',
        'game.genre.adventure': 'Adventure',
        'game.genre.racing': 'Racing',
        'game.genre.puzzle': 'Puzzle',
        'game.genre.retro_rpg': 'Retro RPG',
        'game.download.app_store': 'App Store',
        'game.download.google_play': 'Google Play',
        
        // 首页 - 隐私声明
        'privacy.section.title': '隐私保护声明',
        'privacy.section.content': '我们高度重视您的个人信息保护。本平台及旗下游戏致力于遵循最小化数据收集原则：',
        'privacy.data_storage.title': '数据存储：',
        'privacy.data_storage.content': '游戏进度与偏好设置默认仅保存在您的本地设备上，保障数据安全。',
        'privacy.info_collection.title': '信息收集：',
        'privacy.info_collection.content': '我们承诺不主动收集您的地理位置、通讯录、短信记录等敏感隐私信息。',
        'privacy.third_party.title': '第三方服务：',
        'privacy.third_party.content': '仅在您使用"云同步"或"社交分享"功能时，才会通过加密通道传输必要的最少数据。',
        
        // 首页 - 权限说明
        'permissions.title': '应用权限申请说明',
        'permission.storage.title': '存储权限',
        'permission.storage.desc': '用于写入游戏存档、缓存高清地图数据及离线资源包，确保流畅体验。',
        'permission.network.title': '网络权限',
        'permission.network.desc': '仅用于验证正版授权、同步云端成就及获取赛季更新内容。',
        'permission.notification.title': '通知权限',
        'permission.notification.desc': '（可选）用于接收好友邀请、体力恢复提醒及限时活动通知。',
        'permission.device_state.title': '设备状态',
        'permission.device_state.desc': '在来电时自动暂停游戏，防止游戏音效干扰通话，保障通话质量。',
        
        // 页脚
        'footer.copyright': '© 2024 NovaArcade Studios. All Rights Reserved.',
        
        // 游戏描述
         'game.cyber_odyssey.desc': '身临其境的赛博朋克世界，体验极致的动作战斗与角色定制。',
         'game.mystic_realms.desc': '探索神秘的浮空岛屿，揭开远古遗迹中隐藏的禁忌魔法。',
         'game.speed_velocity.desc': '高风险的城市街头赛车，定制你的专属战车，统治午夜赛道。',
         'game.zen_garden.desc': '在宁静的禅意花园中通过精妙的解谜寻找内心的平静。',
         'game.pixel_quest.desc': '经典的8位像素地牢冒险，磨练技能，斩妖除魔，收集史诗装备。',
         
         // 隐私政策页面
         'privacy.page.title': '隐私政策 - NovaArcade',
         'privacy.page.heading': '隐私政策条款',
         'privacy.page.effective': '生效日期：2024年1月1日',
         'privacy.intro': '欢迎使用 NovaArcade。我们非常重视您的隐私。本隐私政策详细说明了我们在您使用我们的服务时如何收集、使用和保护您的信息。',
         'privacy.section1.title': '1. 信息收集',
         'privacy.section1.content': '我们遵循"最小必要"原则。除非您自愿提供（如注册账号），否则我们不会收集您的个人身份信息。自动收集的信息仅限于设备型号、操作系统版本等用于优化游戏性能的技术数据。',
         'privacy.section2.title': '2. 数据使用',
         'privacy.section2.content': '收集的数据仅用于：(a) 提供和维护服务；(b) 改进游戏体验；(c) 检测和防止欺诈行为。我们绝不会向第三方出售您的个人数据。',
         'privacy.section3.title': '3. 权限调用',
         'privacy.section3.content': '特定功能可能需要访问您的设备权限（如存储用于存档，网络用于排行榜）。您可以在设备设置中随时撤销这些权限。',
         'privacy.section4.title': '4. 数据安全',
         'privacy.section4.content': '我们采用行业标准的加密技术（如 SSL/TLS）来保护您的数据传输和存储安全。',
         'privacy.permissions.title': '应用权限申请说明',
         'privacy.permission.storage.title': '存储权限',
         'privacy.permission.storage.desc': '用于写入游戏存档、缓存高清地图数据及离线资源包，确保流畅体验。',
         'privacy.permission.network.title': '网络权限',
         'privacy.permission.network.desc': '仅用于验证正版授权、同步云端成就及获取赛季更新内容。',
         'privacy.permission.notification.title': '通知权限',
         'privacy.permission.notification.desc': '（可选）用于接收好友邀请、体力恢复提醒及限时活动通知。',
         'privacy.permission.device_state.title': '设备状态',
         'privacy.permission.device_state.desc': '在来电时自动暂停游戏，防止游戏音效干扰通话，保障通话质量。',
         
         // 服务协议页面
         'terms.page.title': '服务协议 - NovaArcade',
         'terms.page.heading': '用户服务协议',
         'terms.page.version': '版本：1.0',
         'terms.intro': '请仔细阅读本服务协议。使用 NovaArcade 提供的任何游戏或服务，即表示您同意受本协议条款的约束。',
         'terms.section1.title': '1. 许可授权',
         'terms.section1.content': 'NovaArcade 授予您一项个人的、非独占的、不可转让的许可，仅供您个人非商业用途使用我们的游戏软件。',
         'terms.section2.title': '2. 用户行为规范',
         'terms.section2.content': '您同意不进行以下行为：(a) 使用外挂或作弊软件；(b) 干扰游戏服务器运行；(c) 发布违法或侵犯他人权益的内容。',
         'terms.section3.title': '3. 知识产权',
         'terms.section3.content': '游戏内的所有内容（包括但不限于美术资源、代码、音乐）均归 NovaArcade 或其许可方所有，受版权法保护。',
         'terms.section4.title': '4. 免责声明',
         'terms.section4.content': '服务按"现状"提供，不包含任何明示或暗示的保证。我们不保证服务不会中断或没有错误。',
         'terms.important.title': '重要提示',
         'terms.note1.title': '协议更新',
         'terms.note1.content': '我们可能会不时更新本协议。继续使用我们的服务即表示您接受更新后的协议。',
         'terms.note2.title': '法律适用',
         'terms.note2.content': '本协议受中华人民共和国法律管辖。任何争议应通过友好协商解决，协商不成的，提交有管辖权的人民法院诉讼解决。',
         'terms.note3.title': '语言版本',
         'terms.note3.content': '如本协议的中文版本与英文版本存在冲突，以中文版本为准。',
     }
};

// 导出供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { locales };
}