// src/components/features/display-lab/data.ts
import type { TComparisonItem, TDimensionOption, TFact, TFaqItem, TNavItem, TPrincipleCard, TRecommendationQuestion, TScenarioCard, TSummaryTag } from './types'

export const navItems = [
  { label: '工作原理', href: '#principle' },
  { label: '核心差异', href: '#comparison' },
  { label: '使用场景', href: '#scenarios' },
  { label: '如何选择', href: '#recommendation' },
] satisfies readonly TNavItem[]

export const heroFacts = [
  {
    title: '发光方式',
    body: 'LCD 依赖背光，OLED 像素自发光',
  },
  {
    title: '黑色表现',
    body: 'OLED 可以关闭单个像素',
  },
  {
    title: '选择逻辑',
    body: '使用场景比参数排名更重要',
  },
] satisfies readonly TFact[]

export const principleCards = [
  {
    technology: 'lcd',
    title: 'LCD：用液晶控制背光',
    body: 'LCD 面板本身不会发光。屏幕后方的背光层持续提供光线，液晶层负责控制光线是否通过，再经过彩色滤光片形成最终画面。',
    flow: ['背光层', '液晶层', '彩色滤光片', '人眼'],
    features: ['背光通常覆盖整个屏幕或多个分区', '黑色画面仍可能有少量光线通过', '技术成熟，成本和供应链相对稳定'],
    icons: ['lightbulb', 'layers', 'panel'],
  },
  {
    technology: 'oled',
    title: 'OLED：每个像素自己发光',
    body: 'OLED 不需要独立背光层。每个像素都可以单独发光、调节亮度或彻底关闭，因此可以获得接近纯黑的画面和极高的明暗对比。',
    flow: ['电流', '有机发光材料', '像素直接发光', '人眼'],
    features: ['每个像素可以独立控制', '显示黑色时可直接关闭像素', '面板可以做得更薄，也更容易实现柔性形态'],
    icons: ['sparkles', 'grid', 'zap'],
  },
] satisfies readonly TPrincipleCard[]

export const comparisonItems = [
  {
    item: '发光方式',
    lcd: '统一背光经过液晶层调制',
    oled: '每个像素独立发光',
  },
  {
    item: '黑色与对比度',
    lcd: '黑色通常会受到背光影响',
    oled: '像素关闭后可呈现接近纯黑的效果',
  },
  {
    item: '全屏亮度',
    lcd: '高亮画面下通常更容易维持稳定亮度',
    oled: '高亮面积增加时，部分设备会主动限制亮度',
  },
  {
    item: 'HDR 表现',
    lcd: '高端分区背光产品可以获得较强亮度',
    oled: '暗部控制和局部对比更突出',
  },
  {
    item: '响应速度',
    lcd: '通常较慢，快速运动时更容易出现拖影',
    oled: '像素响应通常更快',
  },
  {
    item: '可视角度',
    lcd: '不同面板类型差异较大',
    oled: '通常拥有较宽的可视角度',
  },
  {
    item: '功耗',
    lcd: '功耗与背光亮度关系更直接',
    oled: '功耗会明显受到画面内容影响，深色界面通常更省电',
  },
  {
    item: '烧屏风险',
    lcd: '基本没有 OLED 式永久残影问题',
    oled: '长期显示固定高亮元素时存在老化不均风险',
  },
  {
    item: '频闪与调光',
    lcd: '部分产品使用 PWM，也有 DC 调光产品',
    oled: '低亮度下常见 PWM 调光，但不同设备差异很大',
  },
  {
    item: '厚度与形态',
    lcd: '结构层数较多',
    oled: '更薄，更容易制作柔性或折叠面板',
  },
  {
    item: '文本显示',
    lcd: '标准 RGB 子像素排列通常适合文本显示',
    oled: '文本清晰度会受到像素密度和子像素排列影响',
  },
  {
    item: '成本',
    lcd: '成熟且价格跨度较大',
    oled: '同等级尺寸下通常更昂贵，但价格正在逐渐下降',
  },
] satisfies readonly TComparisonItem[]

export const dimensionOptions = [
  {
    id: 'movie',
    label: '电影',
    lcd: '高端 Mini LED LCD 可以提供较高峰值亮度，但暗场仍可能受到光晕影响。',
    oled: '纯黑和像素级控光适合暗场电影，字幕周围也不容易出现背光光晕。',
    note: '明亮客厅中，还应关注实际全屏亮度和屏幕反射率。',
    lcdStrength: '68%',
    oledStrength: '88%',
  },
  {
    id: 'game',
    label: '游戏',
    lcd: '高刷新率产品选择丰富，长时间显示固定 HUD 的心理负担较低。',
    oled: '响应速度快，运动画面清晰，暗部场景的对比度更突出。',
    note: '刷新率、输入延迟和调校质量通常比面板名称本身更重要。',
    lcdStrength: '78%',
    oledStrength: '84%',
  },
  {
    id: 'work',
    label: '办公',
    lcd: '标准 RGB 排列、稳定的静态界面表现和较低成本，使其依然适合长期办公。',
    oled: '高对比度和轻薄设计体验优秀，但需要注意子像素排列与固定界面。',
    note: '阅读文字时，应重点观察字体边缘、亮度舒适度和调光方式。',
    lcdStrength: '86%',
    oledStrength: '64%',
  },
  {
    id: 'outdoor',
    label: '户外',
    lcd: '部分高亮 LCD 可以持续维持较高亮度。',
    oled: '高端 OLED 峰值亮度很强，但持续亮度取决于设备的温控和亮度策略。',
    note: '屏幕反射率有时比实验室峰值亮度更影响户外可读性。',
    lcdStrength: '80%',
    oledStrength: '76%',
  },
  {
    id: 'long-term',
    label: '长期使用',
    lcd: '面对固定工具栏、表格和监控界面时更加省心。',
    oled: '现代设备拥有像素位移和亮度保护机制，但有机材料仍会随使用逐渐老化。',
    note: '烧屏不是短时间必然发生，也不应被描述为完全不存在。',
    lcdStrength: '88%',
    oledStrength: '62%',
  },
] satisfies readonly TDimensionOption[]

export const scenarioCards = [
  {
    title: '长时间办公与编程',
    tendency: 'LCD',
    body: '每天长时间显示编辑器、浏览器标签栏、菜单栏和固定工具栏时，LCD 通常更加省心。文字表现还应关注分辨率和子像素排列。',
    tags: ['静态界面', '文字阅读', '长期使用'],
    icon: 'code',
    accent: 'lcd',
  },
  {
    title: '电影与暗场内容',
    tendency: 'OLED',
    body: '关闭环境光观看电影时，OLED 的纯黑和像素级控光能够明显提升暗场层次和沉浸感。',
    tags: ['纯黑', '高对比度', '暗场'],
    icon: 'film',
    accent: 'oled',
  },
  {
    title: '高频游戏',
    tendency: '根据具体产品选择',
    body: 'OLED 通常拥有更快响应速度，但高刷新率 LCD 也可能拥有优秀的输入延迟、亮度和价格表现。',
    tags: ['高刷新率', '响应速度', '输入延迟'],
    icon: 'gamepad',
    accent: 'neutral',
  },
  {
    title: '户外或高亮环境',
    tendency: '比较实际设备',
    body: '不要只看 OLED 或 LCD 标签。持续亮度、屏幕反射率、自动亮度策略和设备温控都会影响实际可读性。',
    tags: ['持续亮度', '反射率', '温控'],
    icon: 'sun',
    accent: 'neutral',
  },
] satisfies readonly TScenarioCard[]

export const recommendationQuestions = [
  { id: 'static', question: '你是否经常长时间显示固定界面？' },
  { id: 'black', question: '你是否特别在意纯黑和暗场表现？' },
  { id: 'bright', question: '你是否经常在明亮环境中使用屏幕？' },
  { id: 'price', question: '你是否愿意为更好的对比度支付更高价格？' },
] satisfies readonly TRecommendationQuestion[]

export const faqItems = [
  {
    question: 'OLED 一定比 LCD 更护眼吗？',
    answer: '不能仅根据面板类型判断。观看舒适度还会受到亮度、环境光、色温、反射率、PWM 频率、调光深度和个人敏感程度影响。OLED 可能拥有更好的对比度，但部分产品在低亮度下的 PWM 调光也可能让敏感用户感到不适。',
  },
  {
    question: 'OLED 一定会烧屏吗？',
    answer: 'OLED 像素会随使用逐渐老化，长期显示固定且高亮的内容可能造成老化不均。但是否出现明显烧屏，与累计使用时间、亮度、内容类型、散热和保护机制都有关系，不能简单理解为短时间必然损坏。',
  },
  {
    question: 'Mini LED 是不是 OLED？',
    answer: '不是。Mini LED 通常仍然属于 LCD，它使用尺寸更小、数量更多的 LED 作为背光，从而实现更多局部调光分区。它改善了 LCD 的亮度和控光能力，但并没有改变 LCD 依赖背光的基本结构。',
  },
  {
    question: 'OLED 显示黑色真的不耗电吗？',
    answer: '黑色像素可以关闭或接近关闭，因此这部分像素的发光功耗很低。但屏幕控制电路和设备其他部分仍然需要耗电，所以不能理解为整块屏幕完全不耗电。',
  },
  {
    question: '只看 OLED 或 LCD 标签就能判断屏幕质量吗？',
    answer: '不能。同一种面板技术内部仍有巨大差异。分辨率、像素密度、色彩调校、亮度、刷新率、反射率、调光方式和面板均匀性都会影响实际体验。',
  },
] satisfies readonly TFaqItem[]

export const summaryTags = [
  {
    title: '暗场与响应',
    body: 'OLED 更有优势',
  },
  {
    title: '静态办公与成本',
    body: 'LCD 更加稳妥',
  },
  {
    title: '高端产品',
    body: '需要逐台比较',
  },
  {
    title: '护眼体验',
    body: '不能只看面板类型',
  },
] satisfies readonly TSummaryTag[]
