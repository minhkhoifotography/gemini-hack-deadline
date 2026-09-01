// File: database.js
const promptDB = [
    // --- KHỐI KINH TẾ & QUẢN TRỊ ---
    {
        id: "biz-1", mainKey: "Kinh tế & Quản trị", subKey: "Digital Marketing", time: "2h",
        content: {
            vi: { title: "Chiến lược Launching 5A", prompt: "Đóng vai CMO, thiết kế chiến lược ra mắt [Sản phẩm] theo mô hình 5A (Kotler). Đề xuất 3 touchpoints trên TikTok, lập ngân sách 70-20-10." },
            en: { title: "5A Launching Strategy", prompt: "Act as a CMO. Design a launching strategy for [Product] using Kotler's 5A model. Propose 3 touchpoints on TikTok and plan a 70-20-10 budget." },
            zh: { title: "5A 发布策略", prompt: "扮演 CMO。使用科特勒 5A 模型为 [产品] 设计发布策略。在 TikTok 上提出 3 个接触点，并制定 70-20-10 预算计划。" },
            de: { title: "5A Einführungsstrategie", prompt: "Agiere als CMO. Entwirf eine Einführungsstrategie für [Produkt] nach dem 5A-Modell. Schlage 3 Touchpoints auf TikTok vor und plane ein 70-20-10 Budget." },
            fr: { title: "Stratégie de Lancement 5A", prompt: "Agissez en tant que CMO. Concevez une stratégie de lancement pour [Produit] utilisant le modèle 5A. Proposez 3 points de contact sur TikTok et planifiez un budget 70-20-10." }
        }
    },
    {
        id: "biz-2", mainKey: "Kinh tế & Quản trị", subKey: "Kinh tế Quốc tế", time: "3h",
        content: {
            vi: { title: "Phân tích Rủi ro Chuỗi cung ứng", prompt: "Phân tích tác động của [Sự kiện địa chính trị] đến chuỗi cung ứng toàn cầu ngành [Ngành]. Lập 3 kịch bản dự báo vĩ mô và chiến lược phòng ngừa rủi ro tỷ giá." },
            en: { title: "Supply Chain Risk Analysis", prompt: "Analyze the impact of [Geopolitical Event] on the global supply chain of [Industry]. Create 3 macro forecasting scenarios and an exchange rate hedging strategy." },
            zh: { title: "供应链风险分析", prompt: "分析 [地缘政治事件] 对 [行业] 全球供应链的影响。创建 3 个宏观预测情景和汇率对冲策略。" },
            de: { title: "Lieferketten-Risikoanalyse", prompt: "Analysieren Sie die Auswirkungen von [Geopolitisches Ereignis] auf die globale Lieferkette von [Branche]. Erstellen Sie 3 Makroszenarien." },
            fr: { title: "Analyse des Risques Supply Chain", prompt: "Analysez l'impact de [Événement géopolitique] sur la chaîne d'approvisionnement mondiale de [Industrie]. Créez 3 scénarios macroéconomiques." }
        }
    },
    {
        id: "biz-3", mainKey: "Kinh tế & Quản trị", subKey: "Khởi nghiệp & Đổi mới (Innovation)", time: "4h",
        content: {
            vi: { title: "Lập Business Model Canvas", prompt: "Xây dựng Business Model Canvas cho startup [Ý tưởng]. Chỉ rõ USP, dòng doanh thu (Revenue Streams) và cơ cấu chi phí tối thiểu để đạt điểm hòa vốn (Break-even)." },
            en: { title: "Business Model Canvas", prompt: "Build a Business Model Canvas for the startup [Idea]. Specify the USP, Revenue Streams, and minimum cost structure to reach break-even." },
            zh: { title: "商业模式画布", prompt: "为初创公司 [想法] 构建商业模式画布。明确 USP、收入流和达到盈亏平衡的最低成本结构。" },
            de: { title: "Business Model Canvas", prompt: "Erstellen Sie ein Business Model Canvas für das Startup [Idee]. Spezifizieren Sie USP, Einnahmequellen und Kostenstruktur." },
            fr: { title: "Business Model Canvas", prompt: "Construisez un Business Model Canvas pour la startup [Idée]. Spécifiez l'USP, les flux de revenus et la structure de coûts." }
        }
    },
    {
        id: "biz-4", mainKey: "Kinh tế & Quản trị", subKey: "Tài chính & Kế toán", time: "2.5h",
        content: {
            vi: { title: "Định giá & WACC", prompt: "Đóng vai CFA. Định giá cổ phiếu [Mã CK] bằng mô hình DCF. Tính toán WACC, dự phóng dòng tiền FCFF 5 năm và phân tích độ nhạy." },
            en: { title: "Valuation & WACC", prompt: "Act as a CFA. Value [Ticker] stock using the DCF model. Calculate WACC, project 5-year FCFF, and conduct sensitivity analysis." },
            zh: { title: "估值与 WACC", prompt: "扮演 CFA。使用 DCF 模型对 [股票代码] 股票进行估值。计算 WACC，预测 5 年 FCFF，并进行敏感性分析。" },
            de: { title: "Bewertung & WACC", prompt: "Agiere als CFA. Bewerte die [Ticker] Aktie mit dem DCF-Modell. Berechne WACC, projiziere 5-Jahres-FCFF." },
            fr: { title: "Valorisation & WACC", prompt: "Agissez comme CFA. Valorisez l'action [Ticker] avec le modèle DCF. Calculez le WACC, projetez le FCFF sur 5 ans." }
        }
    },
    // --- KHỐI CÔNG NGHỆ THÔNG TIN & KỸ THUẬT ---
    {
        id: "tech-1", mainKey: "CNTT & Kỹ thuật", subKey: "Khoa học Máy tính", time: "2h",
        content: {
            vi: { title: "Debug & Tối ưu Big O", prompt: "Đóng vai Senior Dev. Phân tích đoạn code [Ngôn ngữ]: [Dán Code]. Tìm 'bottleneck' gây Time Limit Exceeded. Tái cấu trúc và tối ưu độ phức tạp thuật toán." },
            en: { title: "Debug & Big O Optimization", prompt: "Act as a Senior Dev. Analyze this [Language] code: [Paste Code]. Find the 'bottleneck' causing TLE. Refactor and optimize algorithm complexity." },
            zh: { title: "调试与 Big O 优化", prompt: "扮演高级开发人员。分析此 [语言] 代码：[粘贴代码]。找到导致 TLE 的瓶颈。重构代码，优化算法复杂度。" },
            de: { title: "Debug & Big O Optimierung", prompt: "Agiere als Senior Dev. Analysiere diesen [Sprache] Code: [Code]. Finde den TLE-Flaschenhals. Optimiere die Algorithmuskomplexität." },
            fr: { title: "Débogage et Optimisation Big O", prompt: "Agissez comme un Senior Dev. Analysez ce code [Langage] : [Code]. Trouvez le goulot d'étranglement causant le TLE. Refactorez et optimisez." }
        }
    },
    {
        id: "tech-2", mainKey: "CNTT & Kỹ thuật", subKey: "Trí tuệ Nhân tạo (AI)", time: "3.5h",
        content: {
            vi: { title: "Thiết kế Mạng Neural", prompt: "Thiết kế kiến trúc mạng Neural (CNN/Transformer) cho bài toán [Phân loại ảnh/NLP]. Chọn hàm Loss, Optimizer và chiến thuật chống Overfitting." },
            en: { title: "Neural Network Design", prompt: "Design a Neural Network architecture for [Image Classification/NLP]. Choose Loss function, Optimizer, and Anti-overfitting strategies." },
            zh: { title: "神经网络设计", prompt: "为 [图像分类/NLP] 问题设计神经网络架构。选择损失函数、优化器和抗过拟合策略。" },
            de: { title: "Neuronales Netzwerk Design", prompt: "Entwerfen Sie eine Architektur für [Bildklassifizierung/NLP]. Wählen Sie Loss-Funktion, Optimizer und Anti-Overfitting-Strategien." },
            fr: { title: "Conception de Réseau Neuronal", prompt: "Concevez une architecture de réseau pour [Classification d'image/NLP]. Choisissez la fonction de perte et l'optimiseur." }
        }
    },
    {
        id: "tech-3", mainKey: "CNTT & Kỹ thuật", subKey: "An toàn Thông tin", time: "3h",
        content: {
            vi: { title: "Kịch bản Pentest OWASP", prompt: "Đóng vai Ethical Hacker. Lập kịch bản Pentest Hộp xám theo chuẩn OWASP Top 10 cho ứng dụng [Tên/Loại]. Liệt kê các payload test XSS, SQLi." },
            en: { title: "OWASP Pentest Scenario", prompt: "Act as an Ethical Hacker. Create a Gray-box Pentest scenario based on OWASP Top 10 for [App Type]. List XSS and SQLi payloads." },
            zh: { title: "OWASP 渗透测试方案", prompt: "扮演道德黑客。根据 OWASP Top 10 为 [应用类型] 创建灰盒渗透测试方案。列出 XSS 和 SQLi 有效负载。" },
            de: { title: "OWASP Pentest-Szenario", prompt: "Agiere als Ethical Hacker. Erstelle ein Gray-Box Pentest-Szenario nach OWASP Top 10 für [App-Typ]." },
            fr: { title: "Scénario Pentest OWASP", prompt: "Agissez comme un Hacker Éthique. Créez un scénario Pentest Gray-box basé sur OWASP Top 10 pour [Type d'App]." }
        }
    },
    {
        id: "tech-4", mainKey: "CNTT & Kỹ thuật", subKey: "Điện tử & Viễn thông", time: "4h",
        content: {
            vi: { title: "Thiết kế Mạch IoT & RTOS", prompt: "Viết cấu trúc code C/C++ sử dụng FreeRTOS cho vi điều khiển [STM32]. Thiết lập 3 Tasks có ưu tiên khác nhau, sử dụng Mutex/Semaphore để tránh Race Condition." },
            en: { title: "IoT Circuit & RTOS Design", prompt: "Write C/C++ code structure using FreeRTOS for [STM32]. Setup 3 prioritized Tasks, use Mutex/Semaphore to prevent Race Conditions." },
            zh: { title: "物联网电路与 RTOS 设计", prompt: "使用 FreeRTOS 为 [STM32] 编写 C/C++ 代码结构。设置 3 个优先级任务，使用 Mutex 避免竞争条件。" },
            de: { title: "IoT Schaltung & RTOS", prompt: "Schreibe C/C++ Code mit FreeRTOS für [STM32]. Richte 3 Tasks ein, nutze Mutex/Semaphore." },
            fr: { title: "Circuit IoT & RTOS", prompt: "Écrivez le code C/C++ avec FreeRTOS pour [STM32]. Configurez 3 tâches priorisées avec Mutex/Semaphore." }
        }
    },
    // --- KHỐI Y DƯỢC & KHOA HỌC TỰ NHIÊN ---
    {
        id: "sci-1", mainKey: "Y Dược & KHTN", subKey: "Y khoa Lâm sàng", time: "2h",
        content: {
            vi: { title: "Chẩn đoán Phân biệt Y Khoa", prompt: "Phân tích Case lâm sàng: Bệnh nhân [Tuổi], triệu chứng [Mô tả]. Đưa ra 3 chẩn đoán phân biệt, chỉ định cận lâm sàng và biện luận y khoa." },
            en: { title: "Medical Differential Diagnosis", prompt: "Analyze clinical case: Patient [Age], symptoms [Describe]. Provide 3 differential diagnoses, order tests, and give medical reasoning." },
            zh: { title: "医学鉴别诊断", prompt: "分析临床病例：患者 [年龄]，症状 [描述]。提供 3 个鉴别诊断，指示辅助检查，并进行论证。" },
            de: { title: "Medizinische Differentialdiagnose", prompt: "Analysiere Fall: Patient [Alter], Symptome [Beschreiben]. Stelle 3 Differentialdiagnosen und ordne Tests an." },
            fr: { title: "Diagnostic Différentiel Médical", prompt: "Analysez le cas : Patient [Âge], symptômes [Décrire]. Donnez 3 diagnostics différentiels et justifiez médicalement." }
        }
    },
    {
        id: "sci-2", mainKey: "Y Dược & KHTN", subKey: "Dược học & Bào chế", time: "2.5h",
        content: {
            vi: { title: "Tương tác Thuốc (DDI)", prompt: "Đánh giá tương tác thuốc trong đơn sau: [Liệt kê]. Giải thích cơ chế (CYP450), mức độ nghiêm trọng và tư vấn điều chỉnh liều an toàn." },
            en: { title: "Drug-Drug Interaction (DDI)", prompt: "Assess drug interactions in this prescription: [List]. Explain CYP450 mechanism, severity, and advise safe dosage adjustments." },
            zh: { title: "药物相互作用 (DDI)", prompt: "评估处方中的药物相互作用：[列出]。解释 CYP450 机制、严重程度，并建议安全的剂量调整。" },
            de: { title: "Arzneimittelwechselwirkungen", prompt: "Bewerte Wechselwirkungen im Rezept: [Liste]. Erkläre CYP450-Mechanismus und berate zur Dosisanpassung." },
            fr: { title: "Interactions Médicamenteuses", prompt: "Évaluez les interactions dans l'ordonnance : [Liste]. Expliquez le mécanisme CYP450 et conseillez sur le dosage." }
        }
    },
    {
        id: "sci-3", mainKey: "Y Dược & KHTN", subKey: "Công nghệ Sinh học", time: "3h",
        content: {
            vi: { title: "Thiết kế mồi CRISPR/Cas9", prompt: "Thiết kế trình tự sgRNA để Knock-out gen [Tên gen] trên tế bào bằng hệ thống CRISPR/Cas9. Đánh giá rủi ro Off-target và phương pháp kiểm chứng đột biến." },
            en: { title: "CRISPR/Cas9 sgRNA Design", prompt: "Design sgRNA sequence to Knock-out [Gene Name] using CRISPR/Cas9. Evaluate Off-target risks and mutation verification methods." },
            zh: { title: "CRISPR/Cas9 sgRNA 设计", prompt: "设计 sgRNA 序列以使用 CRISPR/Cas9 敲除 [基因名称]。评估脱靶风险和突变验证方法。" },
            de: { title: "CRISPR/Cas9 sgRNA Design", prompt: "Entwerfe sgRNA-Sequenz zum Knock-out von [Gen-Name] mittels CRISPR/Cas9. Bewerte Off-Target-Risiken." },
            fr: { title: "Conception sgRNA CRISPR/Cas9", prompt: "Concevez la séquence sgRNA pour désactiver [Nom du gène] avec CRISPR/Cas9. Évaluez les risques Off-target." }
        }
    },
    // --- KHỐI XÃ HỘI NHÂN VĂN, LUẬT & GIÁO DỤC ---
    {
        id: "soc-1", mainKey: "XHNV, Luật & Giáo dục", subKey: "Luật Thương mại", time: "1.5h",
        content: {
            vi: { title: "Thẩm định Rủi ro Hợp đồng", prompt: "Đóng vai Luật sư. Thẩm định pháp lý hợp đồng [Loại]: [Dán nội dung]. Xác định 3 lỗ hổng pháp lý rủi ro nhất và soạn lại các điều khoản để bảo vệ bên [Tên bên]." },
            en: { title: "Contract Risk Assessment", prompt: "Act as a Corporate Lawyer. Assess the legal risks of this contract: [Paste Content]. Identify top 3 loopholes and redraft clauses for [Party Name]." },
            zh: { title: "合同风险评估", prompt: "扮演公司律师。评估此合同的法律风险：[粘贴内容]。识别前 3 大漏洞，并为 [当事方] 起草修正条款。" },
            de: { title: "Vertragsrisikobewertung", prompt: "Agiere als Anwalt. Bewerte die rechtlichen Risiken dieses Vertrags: [Inhalt]. Identifiziere die 3 größten Gesetzeslücken." },
            fr: { title: "Évaluation des Risques Contractuels", prompt: "Agissez comme avocat. Évaluez les risques juridiques de ce contrat : [Contenu]. Identifiez les 3 principales failles." }
        }
    },
    {
        id: "soc-2", mainKey: "XHNV, Luật & Giáo dục", subKey: "Tâm lý học", time: "2.5h",
        content: {
            vi: { title: "Kế hoạch Can thiệp CBT", prompt: "Phân tích thân chủ có triệu chứng [Trầm cảm/Rối loạn âu lo]. Nhận diện 'Niềm tin cốt lõi' sai lệch. Lên kế hoạch can thiệp 5 phiên bằng Liệu pháp Nhận thức Hành vi (CBT)." },
            en: { title: "CBT Intervention Plan", prompt: "Analyze client with [Depression/Anxiety]. Identify distorted 'Core beliefs'. Create a 5-session intervention plan using Cognitive Behavioral Therapy (CBT)." },
            zh: { title: "CBT 干预计划", prompt: "分析患有 [抑郁/焦虑] 的客户。识别扭曲的“核心信念”。使用认知行为疗法 (CBT) 创建 5 次干预计划。" },
            de: { title: "CBT-Interventionsplan", prompt: "Analysiere Klienten mit [Depression]. Identifiziere verzerrte Kernüberzeugungen. Erstelle einen 5-Sitzungs-Plan (KVT)." },
            fr: { title: "Plan d'Intervention TCC", prompt: "Analysez le client souffrant de [Dépression]. Identifiez les croyances fondamentales faussées. Créez un plan de 5 séances (TCC)." }
        }
    },
    {
        id: "soc-3", mainKey: "XHNV, Luật & Giáo dục", subKey: "Ngôn ngữ & Dịch thuật", time: "1h",
        content: {
            vi: { title: "Bản địa hóa (Localization)", prompt: "Dịch và bản địa hóa đoạn hội thoại game/app sau sang tiếng Việt: [Dán text]. Yêu cầu: Bắt trend Gen Z, dùng từ lóng (Slang) tự nhiên, không dịch Word-by-Word." },
            en: { title: "Content Localization", prompt: "Translate and localize this game/app dialogue into English: [Paste text]. Use Gen Z trends and natural slang. Do not translate word-by-word." },
            zh: { title: "内容本地化", prompt: "将此游戏/应用对话翻译并本地化为中文：[粘贴文本]。要求：符合 Z 世代趋势，使用自然俚语，不要逐字翻译。" },
            de: { title: "Content-Lokalisierung", prompt: "Übersetze und lokalisiere diesen Dialog: [Text]. Nutze Gen Z Slang und vermeide wörtliche Übersetzungen." },
            fr: { title: "Localisation de Contenu", prompt: "Traduisez et localisez ce dialogue : [Texte]. Utilisez l'argot de la Gen Z et évitez le mot à mot." }
        }
    },
    // --- KHỐI NGHỆ THUẬT, KIẾN TRÚC & NÔNG LÂM MÔI TRƯỜNG ---
    {
        id: "art-1", mainKey: "Kiến trúc & Nghệ thuật", subKey: "Thiết kế Đồ họa (UI/UX)", time: "2h",
        content: {
            vi: { title: "Quy trình Thiết kế UX", prompt: "Thiết kế luồng người dùng (User Flow) và Cấu trúc thông tin (Information Architecture) cho ứng dụng [Tên/Loại App]. Đề xuất các nguyên tắc UX/UI (Gestalt, Heuristics)." },
            en: { title: "UX Design Process", prompt: "Design the User Flow and Information Architecture for [App Type]. Propose UX/UI principles (Gestalt, Heuristics) to optimize experience." },
            zh: { title: "UX 设计流程", prompt: "为 [应用类型] 设计用户流程和信息架构。提出 UX/UI 原则（格式塔、启发式）以优化体验。" },
            de: { title: "UX Design Prozess", prompt: "Entwerfe User Flow und Informationsarchitektur für [App-Typ]. Schlage UX/UI-Prinzipien vor (Gestalt, Heuristiken)." },
            fr: { title: "Processus de Conception UX", prompt: "Concevez le User Flow et l'Architecture de l'Information pour [Type d'App]. Proposez des principes UX/UI (Gestalt)." }
        }
    },
    {
        id: "art-2", mainKey: "Kiến trúc & Nghệ thuật", subKey: "Kiến trúc & Nội thất", time: "4h",
        content: {
            vi: { title: "Tổ chức Không gian (Space Planning)", prompt: "Lập phương án phân khu chức năng và tổ chức không gian nội thất cho [Loại công trình] diện tích [X m2] phong cách [Tên phong cách]. Tối ưu luồng giao thông (Circulation)." },
            en: { title: "Space Planning", prompt: "Create a functional zoning and interior space planning for [Building Type], size [X sqm] in [Style] style. Optimize circulation flow." },
            zh: { title: "空间规划", prompt: "为面积为 [X 平方米] 的 [建筑类型] 制定功能分区和室内空间规划方案，风格为 [风格]。优化交通流线。" },
            de: { title: "Raumplanung", prompt: "Erstelle ein Raumplanungskonzept für [Gebäudetyp], Größe [X qm] im [Stil]-Design. Optimiere die Verkehrswege." },
            fr: { title: "Aménagement de l'Espace", prompt: "Créez un zonage fonctionnel et un aménagement intérieur pour [Type de bâtiment], [X m2] de style [Style]. Optimisez la circulation." }
        }
    },
    {
        id: "art-3", mainKey: "Nông - Lâm - Môi trường", subKey: "Nông nghiệp & Thú y", time: "3h",
        content: {
            vi: { title: "Thiết kế Nông nghiệp IoT", prompt: "Thiết kế hệ thống tưới nhỏ giọt kết hợp châm phân (Fertigation) tự động bằng IoT cho vườn [Tên cây]. Tính toán EC/pH, lượng nước theo từng giai đoạn sinh trưởng." },
            en: { title: "IoT Agriculture Design", prompt: "Design an automated IoT drip fertigation system for a [Plant Name] farm. Calculate EC/pH and water volume for each growth stage." },
            zh: { title: "物联网农业设计", prompt: "为 [植物名称] 农场设计自动物联网滴灌施肥系统。计算每个生长阶段的 EC/pH 和水量。" },
            de: { title: "IoT Landwirtschaft", prompt: "Entwerfe ein automatisiertes IoT-Tropfbewässerungssystem für [Pflanzenname]. Berechne EC/pH und Wasservolumen." },
            fr: { title: "Agriculture IoT", prompt: "Concevez un système d'irrigation IoT automatisé pour [Plante]. Calculez EC/pH et le volume d'eau par étape de croissance." }
        }
    }
];
