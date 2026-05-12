// ----------------------------------------------------
// 建立「國家資料庫」 (新增國家只需在這裡加資料就好，不需改 HTML)
// ----------------------------------------------------
const countryDatabase = {
    
    //非洲
    'Madagascar': {
        title: '馬達加斯加 (Madagascar)',
        flagUrl: 'https://flagcdn.com/w160/mg.png', //  (mg 是馬達加斯加代碼)
        subtitle: '包含馬達加斯加的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '管理失當損害經濟發展潛能',
        descParagraphs: [
            '馬達加斯加位於非洲南部海岸外的印度洋上，是世界第五大島。該國擁有豐富的礦產、農業及海洋資源，並以蓬勃發展的旅遊業著稱。憑藉與美國、歐盟簽署的多項貿易協定，以及多個區域共同體的成員身份，馬達加斯加對商業合作夥伴關係與外國投資持歡迎態度。',
            '然而，由於長期的政治動盪以及對國家財政與資源的管理不善，該國人民面臨著持續的高貧窮率與普遍的糧食不安全問題。儘管法律規定外國投資者享有與國內投資者同等的待遇，但他們仍面臨額外的審查與不明原因的延誤。此外，繁雜的行政程序、腐敗以及過時的勞工法規也損害了自由經濟活動。基礎設施不足，加上易受大宗商品價格波動與氣候災害的影響，更使該國的困境雪上加霜。'
        ],
        table: {
            gov: '半總統制共和國',
            capital: '安塔那那利佛',
            ratings: 'S&P: 未評級<br>Moody\'s: 未評級<br>Fitch: 未評級',
            pop: '3,060 萬人',
            age: '19.5 歲',
            income: '3,352.96 美元',
            gdp: '165 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18716499/embed#?secret=D8JaCD9M0j" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18596139/embed#?secret=FSIBNCbzcH" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '42 億美元 (2023)',
            leadingExports: '香草<br>鎳<br>服飾與成衣<br>鈦<br>黃金<br>丁香',
            imports: '48 億美元 (2022)',
            leadingImports: '精煉石油<br>稻米<br>汽車<br>包裝藥品<br>服飾與成衣',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/18692455/embed" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'BNI Madagascar', sector: '金融業' },
            { name: 'Axian Group', sector: '綜合企業、能源、房地產、電信服務' },
            { name: 'Jirama', sector: '公用事業' },
            { name: 'Telma', sector: '電信服務' },
            { name: 'Socolait', sector: '民生必需品、食品' },
            { name: 'Ambatovy', sector: '原物料、金屬與採礦' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '19%' },
                { country: '法國', percent: '10%' },
                { country: '阿曼', percent: '10%' },
                { country: '印度', percent: '8%' },
                { country: '阿拉伯聯合大公國', percent: '6%' }
            ],
            export: [
                { country: '法國', percent: '19%' },
                { country: '美國', percent: '18%' },
                { country: '中國', percent: '13%' },
                { country: '日本', percent: '9%' },
                { country: '荷蘭', percent: '5%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
    },
    'South Sudan': {
        title: '南蘇丹 (South Sudan)',
        flagUrl: 'https://flagcdn.com/w160/ss.png',
        subtitle: '包含南蘇丹的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '戰後動盪損害經濟發展潛能',
        descParagraphs: [
            '在經歷長達數十年的殘酷內戰後，南蘇丹於 2011 年脫離蘇丹獨立，成為最新獲國際承認的國家及聯合國成員國。然而，獨立並未為這個位於東北非的內陸國家帶來和平，該國依然深陷政治動盪與部族衝突之中，其人均國內生產毛額持續位居世界最貧窮國家之列。',
            '該國經濟嚴重依賴石油與自給農業，而治理不善與普遍的貪腐阻礙了經濟進步、多元化發展以及利益的公平分配。龐大的非正規部門是重要的就業來源。此外，南蘇丹面臨著氣候變遷與自然災害加劇的挑戰，使得人道危機日益嚴重，並阻礙了各項發展計畫。'
        ],
        table: {
            gov: '總統制共和國',
            capital: '朱巴',
            ratings: 'S&P: 未評級<br>Moody\'s: 未評級<br>Fitch: 未評級',
            pop: '1,550 萬人',
            age: '17.1 歲',
            income: '1,689.61 美元',
            gdp: '65 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18717132/embed#?secret=QcFgKtZMOL" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18609848/embed#?secret=AYElEPYeCI" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '12 億美元 (2023)',
            leadingExports: '原油<br>黃金<br>飼料作物<br>木材<br>昆蟲樹脂',
            imports: '6 億美元 (2022)',
            leadingImports: '汽車<br>貨車<br>包裝藥品<br>食品<br>服飾與成衣',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/18702592/embed#?secret=rATPzkrt02" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'Nile Commercial Bank', sector: '金融業' },
            { name: 'Ivory Bank', sector: '金融業' },
            { name: 'Nile Petroleum Corporation', sector: '綜合石油與天然氣' },
            { name: 'Akon Refinery Company', sector: '石油與天然氣煉製及行銷' },
            { name: 'South Sudan Electricity Corporation', sector: '公用事業' },
            { name: 'Green Horizon', sector: '民生必需品、食品' }
        ]
    },
    'Burundi': {
        title: '蒲隆地 (Burundi)',
        flagUrl: 'https://flagcdn.com/w160/bi.png',
        subtitle: '包含蒲隆地的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '政治動盪加劇經濟疲軟',
        descParagraphs: [
            '蒲隆地位於中非，這個擁有約 1,300 萬人口的內陸國家是世界上最貧窮的國家之一。身為東非共同體 (EAC) 的成員國，蒲隆地近年來已採取措施改善其政治與經濟治理，並致力於在主要採礦業和農業之外，為其年輕且快速增長的人口提供就業機會。政府特別將重點放在基礎設施發展上，包含發電廠、道路工程，以及港口、機場和鐵路的升級。然而，外國直接投資 (FDI) 面臨著巨大的阻礙，包括低效的監管環境、官僚障礙以及不發達的金融體系。腐敗、勞動力技能低下以及不可靠的電力供應是其他的問題。',
            '如今，蒲隆地仍嚴重依賴雙邊及多邊捐助者的援助。種族爭端、未遂政變以及軍方對民主機構的干預，使局勢進一步複雜化。'
        ],
        table: {
            gov: '總統制共和國',
            capital: '吉特加',
            ratings: 'S&P: 未評級<br>Moody\'s: 未評級<br>Fitch: 未評級',
            pop: '1,370 萬人',
            age: '16.2 歲',
            income: '1,667.37 美元',
            gdp: '31 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18706734/embed#?secret=ef3Uc0Fik1" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18581970/embed#?secret=klNOStEDlo" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '8.718 億美元 (2023)',
            leadingExports: '黃金<br>咖啡<br>茶葉<br>稀土金屬礦<br>啤酒',
            imports: '1.272 億美元 (2022)',
            leadingImports: '精煉石油<br>包裝藥品<br>水泥<br>原糖<br>汽車',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/18690489/embed#?secret=vzqHy4L4uP" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'Banque de Gestion et de Financement', sector: '金融業' },
            { name: 'Interbank', sector: '金融業' },
            { name: 'Brarudi', sector: '民生必需品、飲料' },
            { name: 'Burundi National Radio and Television', sector: '媒體、廣播' },
            { name: 'Régie de Distribution d\'Eau et d\'Electricité', sector: '公用事業' },
            { name: 'Econet Wireless Burundi', sector: '電信服務' },
            { name: 'Socabu', sector: '金融業、保險' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '18%' },
                { country: '沙烏地阿拉伯', percent: '12%' },
                { country: '坦尚尼亞', percent: '10%' },
                { country: '印度', percent: '9%' },
                { country: '阿拉伯聯合大公國', percent: '7%' }
            ],
            export: [
                { country: '阿拉伯聯合大公國', percent: '28%' },
                { country: '剛果民主共和國', percent: '21%' },
                { country: '比利時', percent: '8%' },
                { country: '巴基斯坦', percent: '6%' },
                { country: '坦尚尼亞', percent: '5%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
    },
    'Central African Republic': {
        title: '中非共和國 (Central African Republic)',
        flagUrl: 'https://flagcdn.com/w160/cf.png',
        subtitle: '包含中非共和國的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門領導層的相關資訊。',
        descTitle: '戰略位置與政治穩定帶來經濟效益',
        descParagraphs: [
            '自1960年脫離法國獨立以來，中非共和國（CAR）一直深陷政治動盪與教派暴力的泥淖。儘管擁有巨大的經濟潛力，該國約500萬人口仍是世界上最貧窮的人群之一。該國擁有豐富的農業與林業資源，同時蘊藏大量的鑽石、黃金、石油與鈾礦。2016年，中非共和國舉行了自獨立以來的首次民主總統選舉，這是一個歷史性的時刻，也是邁向國家重建的重要一步。然而，儘管取得了這些進展，該國大部分地區仍由爭奪國家龐大資源控制權的反政府派系與民兵組織所控制。',
            '阻礙該國經濟成長與發展的額外挑戰包括薄弱的交通基礎設施與地理上的孤立、有限的能源生產能力，以及普遍的貪腐問題。中非共和國還面臨技術勞工短缺以及世界上最嚴重的性別差距之一等困境。'
        ],
        table: {
            gov: '總統制共和國',
            capital: '雅溫德',
            ratings: 'S&P: 未評級<br>Moody\'s: 未評級<br>Fitch: 未評級',
            pop: '520 萬人',
            age: '14.9 歲',
            income: '2,327.42 美元',
            gdp: '28 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18717172/embed#?secret=Fi25TKoQi4" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18590677/embed#?secret=2Wm7FHuBHh" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '4.531 億美元 (2023)',
            leadingExports: '黃金<br>木材<br>鑽石<br>大型工程車輛<br>蘭姆酒',
            imports: '1.809 億美元 (2022)',
            leadingImports: '精煉石油<br>包裝藥品<br>天然氣<br>廣播設備<br>二手衣物',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/18691310/embed#?secret=gUnWQ8vOxw" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'Banque Internationale pour la Centrafrique (BICA)', sector: '金融業' },
            { name: 'Commercial Bank Centrafrique (CBCA)', sector: '金融業' },
            { name: 'Société Nationale des Hydrocarbures', sector: '石油與天然氣探勘與生產' },
            { name: 'Enerca', sector: '公用事業' },
            { name: 'Groupe Kamach', sector: '綜合企業、民生必需品零售、林業產品、採礦業' },
            { name: 'Socatel', sector: '電信服務' },
            { name: 'Société Centrafricaine de Distribution', sector: '民生必需品分銷與零售' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '喀麥隆', percent: '26%' },
                { country: '中國', percent: '17%' },
                { country: '法國', percent: '14%' },
                { country: '比利時', percent: '7%' },
                { country: '義大利', percent: '5%' }
            ],
            export: [
                { country: '阿拉伯聯合大公國', percent: '25%' },
                { country: '瑞典', percent: '15%' },
                { country: '法國', percent: '10%' },
                { country: '瑞士', percent: '8%' },
                { country: '烏干達', percent: '7%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
    },
    'Mozambique': {
        title: '莫三比克 (Mozambique)',
        flagUrl: 'https://flagcdn.com/w160/mz.png',
        subtitle: '包含莫三比克的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '經濟快速成長，但面臨結構性與環境挑戰',
        descParagraphs: [
            '莫三比克於1992年擺脫長達15年的內戰後，在市場改革、政府對基礎設施的大量支出以及大量外國投資的推動下，已從世界上最貧窮的國家之一迅速轉變為經濟成長令人矚目的國家。該國還受惠於漫長的海岸線、鄰近南非市場的優勢，以及豐富的自然資源（包含大量的農業、礦產與碳氫化合物資源）。',
            '然而，在約3,490萬的人口中，仍有一半以上生活在貧窮之中，農村家庭尤其容易受到與氣候相關的災害影響。儘管具有巨大的經濟潛力，其商業環境依然充滿挑戰。莫三比克面臨著不穩定的政治與安全局勢、前後不一的財政政策、腐敗、基礎設施落後，且勞動力缺乏進階技能等問題。此外，該國經濟的多元化程度仍然不足，且過度依賴全球需求及其大宗商品價格的波動。'
        ],
        table: {
            gov: '總統制共和國',
            capital: '馬布多',
            ratings: 'S&P: CCC+<br>Moody\'s: Caa2<br>Fitch: CCC',
            pop: '3,490 萬人',
            age: '17.1 歲',
            income: '2,941.88 美元',
            gdp: '230 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18707456/embed#?secret=y9GLffxPP3" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18608585/embed#?secret=t6Lpw0i8fj" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '184 億美元 (2023)',
            leadingExports: '煤炭<br>鋁<br>黃金<br>天然氣<br>電力<br>鈦',
            imports: '115 億美元 (2022)',
            leadingImports: '精煉石油<br>鉻<br>鐵<br>鋁土礦<br>電力',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/18693285/embed#?secret=UBCmhGCY2y" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'Banco Internacional de Moçambique', sector: '金融業' },
            { name: 'Petróleos de Moçambique', sector: '石油與天然氣分銷及行銷' },
            { name: 'Mozal', sector: '原物料、金屬與採礦' },
            { name: 'Electricidade de Moçambique', sector: '公用事業' },
            { name: 'Hidroeléctrica de Cahora Bassa', sector: '公用事業' },
            { name: 'Moçambique Telecom Celular', sector: '電信服務' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '南非', percent: '26%' },
                { country: '中國', percent: '11%' },
                { country: '印度', percent: '9%' },
                { country: '阿拉伯聯合大公國', percent: '8%' },
                { country: '新加坡', percent: '6%' }
            ],
            export: [
                { country: '南非', percent: '17%' },
                { country: '印度', percent: '16%' },
                { country: '荷蘭', percent: '11%' },
                { country: '中國', percent: '10%' },
                { country: '英國', percent: '7%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
    },
    //亞洲
    'Taiwan': {
        title: '台灣 (Taiwan)',
        subtitle: '包含台灣的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '主導全球半導體產業',
        descParagraphs: [
            '台灣是全球國內生產毛額 (GDP) 前二十大經濟體之一，也是全球半導體製造的領導者，貢獻了全球超過 60% 的基礎半導體，以及超過 90% 的最先進半導體。',
            '作為區域及全球貿易與投資的重要樞紐，台灣擁有約 2,300 萬人口，其中約一半為高技能勞動力；此外，台灣還擁有完善的體制框架、廣泛的金融服務，以及對外國投資者具吸引力的激勵措施。面臨的挑戰則包含過度依賴科技產業與中國大陸的需求、人口老化，以及脆弱的外交地位。'
        ],
        table: {
            gov: '民主體制',
            capital: '台北',
            ratings: 'S&P: AA+<br>Moody\'s: Aa3<br>Fitch: AA-',
            pop: '2,330 萬人',
            age: '44.79 歲',
            income: '86,794.95 美元',
            gdp: '8,844 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17521134/embed#?secret=SrZT1yDxHi" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17519060/embed#?secret=VqDmQkZxkT" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '無資料 (2024)',
            leadingExports: '積體電路<br>機械零件<br>電腦<br>廣播設備<br>塑膠',
            imports: '無資料 (2024)',
            leadingImports: '積體電路<br>原油<br>機械<br>天然氣<br>煤炭',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/17502464/embed#?secret=b13w6KJwSe" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'Bank of Taiwan', sector: '金融業' },
            { name: 'Taiwan Semiconductor Manufacturing Company', sector: '科技業、半導體' },
            { name: 'MediaTek', sector: '科技業、半導體' },
            { name: 'Hon Hai Precision Industry', sector: '科技業、電子製造服務' },
            { name: 'Quanta Computer Inc.', sector: '科技業、硬體與設備' },
            { name: 'Cathay Financial Holding', sector: '綜合企業、金融業、保險' },
            { name: 'Evergreen Marine Corp.', sector: '交通運輸、航運與港口' }
        ]
    },
    'Yemen': {
        title: '葉門 (Yemen)',
        flagUrl: 'https://flagcdn.com/w160/ye.png',
        subtitle: '包含葉門的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門領導層的相關資訊。',
        descTitle: '戰爭摧毀經濟潛能',
        descParagraphs: [
            '這個擁有超過 4,000 萬人口的國家是阿拉伯半島上最貧窮的國家之一，自 2014 年底以來，由於受沙烏地阿拉伯支持的政府與叛軍胡塞武裝組織之間的權力鬥爭，以及隨後多個武裝團體之間權力分散，該國一直深陷衝突之中。這場戰爭引發了毀滅性的人道危機，摧毀了經濟並破壞了關鍵的基礎設施。甚至在衝突爆發之前，貪腐問題就已十分普遍，貧窮與失業率長期居高不下，水電供應以及教育和醫療資源都受到嚴重限制。',
            '儘管如此，世界銀行仍看到了一條潛在的成長道路，儘管這條道路極其狹窄。葉門擁有豐富但大部分尚未開發的石油資源：交戰各方之間若能達成持久停火，並輔以重新開放主要運輸路線以及改善與區域和全球貿易市場的整合，將有助於重新點燃經濟的發展與穩定。'
        ],
        table: {
            gov: '議會制共和國',
            capital: '沙那',
            ratings: 'S&P: 未評級<br>Moody\'s: 未評級<br>Fitch Ratings: 未評級',
            pop: '4,180 萬人',
            age: '18.3 歲',
            income: '2,197.88 美元',
            gdp: '174 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/23375173/embed#?secret=Lbg6scp9eW" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/19627397/embed#?secret=gAU3Nmcj2I" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '2.29 億美元 (2024)',
            leadingExports: '原油<br>廢鐵<br>黃金<br>魚類<br>貝類',
            imports: '43.5 億美元 (2024)',
            leadingImports: '小麥<br>生鐵條<br>稻米<br>服飾<br>牛奶',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/19628027/embed#?secret=MW2KhJt2M7" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'Tadhamon Bank', sector: '金融業' },
            { name: 'Yemen Mobile', sector: '電信服務' },
            { name: 'Felix Airway', sector: '航空業' },
            { name: 'Safer E&P Operations', sector: '綜合石油與天然氣' },
            { name: 'National Cement Company', sector: '原物料、建築產品' },
            { name: 'Hayel Saeed Anam Group', sector: '綜合企業、房地產、食品、貿易' },
            { name: 'Yemen TV', sector: '媒體、廣播' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '阿拉伯聯合大公國', percent: '24%' },
                { country: '中國', percent: '10%' },
                { country: '沙烏地阿拉伯', percent: '6%' },
                { country: '未指定', percent: '6%' },
                { country: '阿曼', percent: '5%' }
            ],
            export: [
                { country: '埃及', percent: '50%' },
                { country: '土耳其', percent: '28%' },
                { country: '阿曼', percent: '11%' },
                { country: '蘇丹', percent: '9%' },
                { country: '厄利垂亞', percent: '1%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
    },
    //美洲
    'Brazil': {
        title: '巴西 (Brazil)',
        subtitle: '南美洲最大經濟體，展示其債務變化、貧富差距指數及社會福利發放歷史數據。',
        descTitle: '龐大經濟體背後的嚴重貧富懸殊',
        descParagraphs: [
            '巴西擁有豐富的自然資源與廣大的農業出口，是金磚五國(BRICS)之一。然而，歷史遺留的土地分配問題與區域發展失衡，導致了世界上最嚴重的貧富差距之一。',
            '儘管政府曾推行「家庭補助金 (Bolsa Família)」等大型社會福利計畫，成功使數百萬人脫離極端貧窮，但近年的經濟波動與高通貨膨脹，再次對底層民眾的生活造成了巨大衝擊。'
        ],
        table: {
            gov: '聯邦總統制',
            capital: '巴西利亞',
            ratings: 'S&P: BB<br>Moody\'s: Ba2<br>Fitch: BB',
            pop: '2.14 億人',
            age: '33.5 歲',
            income: '約 17,821 美元 (PPP)',
            gdp: '1.92 兆美元'
        },
        chartHtml: `
            <div class="bg-green-50 p-6 rounded-lg text-center border border-green-200">
                <h4 class="font-bold text-green-800 mb-2">巴西貧富差距指數 (示意圖表 HTML)</h4>
                <div class="h-32 bg-green-200 flex items-center justify-center text-green-600">[外部圖表 HTML 嵌入區]</div>
            </div>
        `
    }
    //大洋洲
    
    //歐洲
    
};
