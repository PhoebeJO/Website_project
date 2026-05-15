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
    'Malawi': {
        title: '馬拉威 (Malawi)',
        flagUrl: 'https://flagcdn.com/w160/mw.png',
        subtitle: '包含馬拉威的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '基礎設施落後損害經濟成長',
        descParagraphs: [
            '馬拉威擁有約 2,340 萬的快速成長人口，受惠於豐富的農業資源、蓬勃發展的服務業，以及在採礦、能源、交通與資訊科技領域的巨大潛力。',
            '在邁向經濟成長與穩定的道路上，馬拉威面臨著諸多挑戰，包含基礎設施網路不足、法律與商業架構不發達、普遍缺乏透明度與腐敗問題，以及缺乏技術與半技術勞工。'
        ],
        table: {
            gov: '總統制共和國',
            capital: '里朗威',
            ratings: 'S&P: 未評級<br>Moody\'s: 未評級<br>Fitch: 觀察中評級',
            pop: '2,340 萬人',
            age: '17.5 歲',
            income: '3,468.43 美元',
            gdp: '112 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18707456/embed#?secret=ODdifeh6yB" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18605836/embed#?secret=Ulia6KQZ01" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '18 億美元 (2023)',
            leadingExports: '菸草<br>黃金<br>大豆<br>原糖<br>茶葉<br>乾豆與堅果',
            imports: '11 億美元 (2022)',
            leadingImports: '郵票<br>精煉石油<br>包裝藥品<br>肥料<br>辦公室機械與零件',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/18692566/embed#?secret=vYJt7P3YOU" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'National Bank of Malawi', sector: '金融業' },
            { name: 'FDH Banks', sector: '金融業' },
            { name: 'Press Corporation', sector: '綜合企業、金融業、房地產、電信服務' },
            { name: 'Illovo Sugar', sector: '民生必需品、食品' },
            { name: 'Malawi Telecommunications', sector: '電信服務' },
            { name: 'Escom', sector: '公用事業' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '18%' },
                { country: '南非', percent: '18%' },
                { country: '阿拉伯聯合大公國', percent: '9%' },
                { country: '印度', percent: '7%' },
                { country: '尚比亞', percent: '3%' }
            ],
            export: [
                { country: '比利時', percent: '14%' },
                { country: '印度', percent: '8%' },
                { country: '坦尚尼亞', percent: '7%' },
                { country: '南非', percent: '7%' },
                { country: '阿拉伯聯合大公國', percent: '5%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
    },
    'Democratic Republic of the Congo': {
        title: '剛果民主共和國 (Democratic Republic of the Congo)',
        flagUrl: 'https://flagcdn.com/w160/cd.png',
        subtitle: '包含剛果民主共和國的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '戰爭與政治動盪阻礙經濟潛力',
        descParagraphs: [
            '剛果民主共和國（DRC）是撒哈拉以南非洲第二大國，人口超過 1 億且快速成長。該國擁有得天獨厚的自然資源，包含銅、鈷、鑽石與黃金等礦物蘊藏；巨大的水力發電潛能；廣闊的肥沃土地；豐富的生物多樣性，以及世界第二大熱帶雨林。其位於非洲心臟地帶的戰略位置，使其成為對外國投資者深具吸引力的潛在目的地。',
            '儘管具備這些優勢，該國仍處於 1990 年代爆發並奪走多達 600 萬人生命的連串內戰後的復原期。不穩定、暴力與薄弱的法治持續阻礙其經濟發展。交通、能源與電信基礎設施不足，加上世界上名列前茅的高貧窮率，進一步限制了該國發揮其全面的社經潛力。'
        ],
        table: {
            gov: '半總統制共和國',
            capital: '金夏沙',
            ratings: 'S&P: B–<br>Moody\'s: B3<br>Fitch: 未評級',
            pop: '1 億 320 萬人',
            age: '15.6 歲',
            income: '3,050.40 美元',
            gdp: '738 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18716638/embed#?secret=1j26i3l2MV" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18592469/embed#?secret=jhrqNQ5zyC" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '133 億美元 (2023)',
            leadingExports: '銅<br>鈷<br>原油<br>錫<br>鑽石',
            imports: '225 億美元 (2022)',
            leadingImports: '包裝藥品<br>精煉石油<br>硫酸<br>石材加工機械<br>送貨卡車',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/18691606/embed#?secret=9e1G2PPkI7" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'Rawbank', sector: '金融業' },
            { name: 'Kibali Gold Mine', sector: '原物料、金屬與採礦' },
            { name: 'Gécamines', sector: '原物料、金屬與採礦' },
            { name: 'Altech Group', sector: '公用事業' },
            { name: 'Equity Banque Commerciale du Congo', sector: '金融業' },
            { name: 'Cohydro', sector: '綜合石油與天然氣' },
            { name: 'Feronia', sector: '民生必需品、食品生產' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '27%' },
                { country: '南非', percent: '13%' },
                { country: '美國', percent: '9%' },
                { country: '印度', percent: '7%' },
                { country: '阿拉伯聯合大公國', percent: '4%' }
            ],
            export: [
                { country: '中國', percent: '47%' },
                { country: '坦尚尼亞', percent: '9%' },
                { country: '南非', percent: '9%' },
                { country: '新加坡', percent: '9%' },
                { country: '尚比亞', percent: '6%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
    },
    'Somalia': {
        title: '索馬利亞 (Somalia)',
        flagUrl: 'https://flagcdn.com/w160/so.png',
        subtitle: '包含索馬利亞的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '動盪損害經濟發展潛能',
        descParagraphs: [
            '索馬利亞自1960年獨立以來，面臨了重大的動盪，包含1991年政府遭推翻，導致長達數十年的內戰與無政府狀態。在政治分裂、持續的衝突、人道主義危機以及該國南部青年黨 (Al-Shabab) 叛亂份子的挑戰下，促進社會與治理穩定的努力至今仍在持續。農業、畜牧業與漁業依然是經濟的支柱。',
            '儘管在能源、數位科技、教育與健康等各個領域具備發展潛力，其商業環境卻不利於吸引投資與促進創新。該國的生活水準在全球名列最低的國家之一，許多索馬利亞人仰賴匯款與國際援助來維持生計。'
        ],
        table: {
            gov: '聯邦議會共和國',
            capital: '摩加迪休',
            ratings: 'S&P: 未評級<br>Moody\'s: 未評級<br>Fitch: 未評級',
            pop: '1,650 萬人',
            age: '15.3 歲',
            income: '3,343.25 美元',
            gdp: '128 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18609766/embed#?secret=qYmGDGH7zM" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '40 億美元 (2023)',
            leadingExports: '黃金<br>綿羊<br>山羊<br>芝麻<br>昆蟲樹脂<br>牛',
            imports: '7 億美元 (2022)',
            leadingImports: '香菸<br>原糖<br>稻米<br>廣播設備<br>紡織品',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/18702567/embed#?secret=Uay71vReUJ" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'International Bank of Somalia', sector: '金融業' },
            { name: 'Salaam Somali Bank', sector: '金融業' },
            { name: 'Premier Bank', sector: '金融業' },
            { name: 'Hormuud', sector: '電信服務' },
            { name: 'Trans-National Industrial Electricity and Gas Company', sector: '公用事業' },
            { name: 'Somaliland Beverage Industries', sector: '民生必需品、飲料' }
        ]
    },
    'Liberia': {
        title: '賴比瑞亞 (Liberia)',
        flagUrl: 'https://flagcdn.com/w160/lr.png',
        subtitle: '包含賴比瑞亞的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '仰賴匯款與豐富自然資源驅動的經濟',
        descParagraphs: [
            '賴比瑞亞的經濟正從2003年結束、長達十多年的毀滅性內戰中緩慢復甦。 儘管面臨諸多挑戰，該國仍擁有豐富的自然資源，如礦業、農業、漁業與林業。 賴比瑞亞亦受惠於大量的海外僑民匯款，以及身為西非國家經濟共同體（ECOWAS）成員的優勢，這促進了區域貿易與合作。 然而，賴比瑞亞近期且脆弱的民主政體尚未達到戰前的發展水準。',
            '此外，賴比瑞亞以大宗商品為主的經濟體系，在滿足服飾、燃料與重要主食稻米等基本需求上，嚴重仰賴進口。 供電不穩、道路條件惡劣以及缺乏可靠的網際網路存取，也對賴比瑞亞轉型為現代化市場經濟構成重大挑戰。'
        ],
        table: {
            gov: '總統制共和國',
            capital: '蒙羅維亞',
            ratings: 'S&P: 未評級<br>Moody\'s: 未評級<br>Fitch: 未評級',
            pop: '560 萬人',
            age: '18.5 歲',
            income: '3,382.10 美元',
            gdp: '48 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18822605/embed#?secret=v21S4L4fAk" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18595742/embed#?secret=IqnErycINu" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '263 億美元 (2023)',
            leadingExports: '黃金<br>船舶<br>鐵<br>橡膠<br>可可豆<br>棕櫚油',
            imports: '20 億美元 (2022)',
            leadingImports: '船舶<br>精煉石油<br>鐵製結構<br>船用螺旋槳<br>離心機',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/18692431/embed#?secret=06uj5RXUiz" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        }
    },
    //亞洲
    'Taiwan': {
        title: '台灣 (Taiwan)',
        ranking: '178',
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
    'China': {
        title: '中國 (China)',
        flagUrl: 'https://flagcdn.com/w160/cn.png',
        subtitle: '包含中國的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '世界第二大經濟體',
        descParagraphs: [
            '憑藉龐大的勞動力市場，中國幾十年來一直是全球經濟格局中的關鍵角色。自 1970 年代末以來，中國的年平均國內生產毛額 (GDP) 成長率超過 9%。在同一時期，超過 8 億人擺脫了貧困，並享有更好的醫療、教育和就業機會。近年來，中國透過「一帶一路」倡議 (BRI) 等舉措，不斷擴大其在新興與開發中國家的影響力。',
            '同時，中國通常是僅次於美國的全球第二大外國直接投資 (FDI) 目的地。作為一個中高所得國家，中國正迅速從低成本製造業經濟轉型為高附加價值、創新驅動的經濟體。人口老化、與美國的貿易及科技競爭、經濟成長放緩，以及全球供應鏈動態的轉變，是中國目前面臨的部分挑戰。'
        ],
        table: {
            gov: '一黨專政',
            capital: '北京',
            ratings: 'S&P: A+<br>Moody\'s: A1<br>Fitch: A+',
            pop: '14 億人',
            age: '40 歲',
            income: '27,582 美元',
            gdp: '19.4 兆美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17491692/embed#?secret=8ctSNJrP1B" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17492860/embed#?secret=hLn5M8paFA" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '3.58 兆美元 (2024)',
            leadingExports: '廣播設備<br>電腦<br>積體電路<br>服飾與成衣<br>機器零件',
            imports: '2.59 兆美元 (2024)',
            leadingImports: '原油<br>積體電路<br>鐵礦砂<br>天然氣<br>黃金',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/17489934/embed#?secret=QUHGrCFDGW" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: '中國工商銀行 (ICBC)', sector: '金融業' },
            { name: '中國石化 (Sinopec)', sector: '能源、綜合石油與天然氣' },
            { name: '騰訊控股 (Tencent Holdings)', sector: '科技、通訊服務' },
            { name: '阿里巴巴 (Alibaba)', sector: '非必需消費品' },
            { name: '中國移動 (China Mobile)', sector: '電信服務' },
            { name: '中國平安保險集團 (Ping An Insurance Group)', sector: '金融業、保險業' },
            { name: '中國石油 (PetroChina)', sector: '能源、勘探與生產' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '其他亞洲地區', percent: '7.8%' },
                { country: '美國', percent: '6.46%' },
                { country: '南韓', percent: '6.33%' },
                { country: '日本', percent: '6.28%' },
                { country: '澳洲', percent: '6.09%' }
            ],
            export: [
                { country: '美國', percent: '14.83%' },
                { country: '香港特別行政區', percent: '8.12%' },
                { country: '日本', percent: '4.66%' },
                { country: '南韓', percent: '4.41%' },
                { country: '越南', percent: '4.07%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
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
    'Bangladesh': {
        title: '孟加拉 (Bangladesh)',
        flagUrl: 'https://flagcdn.com/w160/bd.png',
        subtitle: '包含孟加拉的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '經濟繁榮但挑戰依然存在',
descParagraphs: [
            '孟加拉的經濟格局展現了優勢與挑戰的交織。這個擁有約 1.7 億人口的國家取得了顯著的進步，從 1971 年建國之初世界上最貧窮的國家之一，在 2015 年躍升為中低收入國家。主要的優勢包含有利的人口結構、強勁的服飾出口、大量的匯款流入，以及透過微型金融與行動服務促進了普惠金融的發展。',
            '然而，從繁雜的行政程序與腐敗，到落後的基礎設施與氣候脆弱性等種種挑戰，持續阻礙著外國投資，並削弱了政府致力於在 2031 年實現中高收入地位的努力。'
        ],
        table: {
            gov: '議會制共和國',
            capital: '達卡',
            ratings: 'S&P: B+<br>Moody\'s: B2<br>Fitch: B+',
            pop: '1 億 7,370 萬人',
            age: '25.98 歲',
            income: '14,621.11 美元',
            gdp: '4,750 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17488208/embed#?secret=dJX1WAbhrB" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17492084/embed#?secret=ZnuGPagROS" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '414 億美元 (2024)',
            leadingExports: '服飾<br>鞋類<br>布料<br>紡織品<br>行李箱與旅行箱',
            imports: '630 億美元 (2024)',
            leadingImports: '精煉石油<br>棉布<br>天然氣',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/17489864/embed#?secret=v2SDAXq3Ks" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'Sonali Bank', sector: '金融業' },
            { name: 'Square Pharmaceuticals', sector: '醫療保健' },
            { name: 'Petrobangla', sector: '能源、探勘與生產' },
            { name: 'Bangladesh Steel Corporation', sector: '原物料' },
            { name: 'Walton Hi-Tech Industries', sector: '消費性電子產品與家電' },
            { name: 'Janata Bank Limited', sector: '金融業' },
            { name: 'Grameenphone Bangladesh', sector: '電信服務' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '21.5%' },
                { country: '印度', percent: '12.2%' },
                { country: '新加坡', percent: '9.19%' },
                { country: '香港特別行政區', percent: '5.5%' },
                { country: '印尼', percent: '4.6%' }
            ],
            export: [
                { country: '美國', percent: '19.3%' },
                { country: '德國', percent: '14.7%' },
                { country: '英國', percent: '11%' },
                { country: '西班牙', percent: '5.8%' },
                { country: '法國', percent: '5.5%' }
            ],
            source: 'Source: IMF, CIA The World Factbook'
        }
    },
    'India': {
        title: '印度 (India)',
        flagUrl: 'https://flagcdn.com/w160/in.png',
        subtitle: '包含印度的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '崛起中的經濟強權',
descParagraphs: [
            '預計在本年代末成為僅次於美國和中國的世界第三大經濟體，印度從龐大且日益熟練的勞動力、快速的工業化以及全球供應鏈動態的有利轉變中獲益。儘管其監管框架仍然繁瑣，但近期的改革透過減少外國投資限制與簡化稅收條款，改善了商業環境。',
            '雖然印度擁有高度多元化的經濟，出口產品涵蓋石油產品、農業及製藥，但其約 70% 的發電需求仍依賴煤炭，這對追求永續發展構成了重大挑戰。'
        ],
        table: {
            gov: '議會制共和國',
            capital: '新德里',
            ratings: 'S&P: BBB–<br>Moody\'s: Baa3<br>Fitch: BBB–',
            pop: '14 億人',
            age: '28.8 歲',
            income: '13,656.82 美元',
            gdp: '4.1 兆美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17488208/embed#?secret=Bpd3UlIjEe" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17505804/embed#?secret=boz5NEl5n4" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '4,425 億美元 (2024)',
            leadingExports: '精煉石油<br>鑽石<br>包裝藥品<br>廣播設備<br>服飾與成衣',
            imports: '7,179 億美元 (2024)',
            leadingImports: '原油<br>黃金<br>煤炭<br>天然氣<br>積體電路',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/17501898/embed#?secret=qmQYZicpDB" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'Reliance Industries Limited', sector: '能源、勘探與生產' },
            { name: 'Infosys', sector: '科技、IT 服務' },
            { name: 'Tata Steel', sector: '原物料' },
            { name: 'Tata Motors', sector: '工業、汽車' },
            { name: 'Adani Enterprises', sector: '多元化工業' },
            { name: 'State Bank of India', sector: '金融業' },
            { name: 'HDFC Bank', sector: '金融業' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '18.2%' },
                { country: '俄羅斯', percent: '9.98%' },
                { country: '美國', percent: '6.27%' },
                { country: '阿拉伯聯合大公國', percent: '5.59%' },
                { country: '沙烏地阿拉伯', percent: '5.15%' }
            ],
            export: [
                { country: '美國', percent: '17.57%' },
                { country: '阿拉伯聯合大公國', percent: '7.65%' },
                { country: '荷蘭', percent: '5.36%' },
                { country: '中國', percent: '3.77%' },
                { country: '英國', percent: '2.89%' }
            ],
            source: 'Source: IMF, CIA The World Factbook'
        }
    },
    'Japan': {
        title: '日本 (Japan)',
        flagUrl: 'https://flagcdn.com/w160/jp.png',
        subtitle: '包含日本的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '應對人口老化的先進經濟體',
        descParagraphs: [
            '身為全球第四大經濟體，日本以其高度發達的製造業、科技創新及強大的出口導向型經濟而聞名。儘管缺乏豐富的自然資源，但憑藉高素質的勞動力與先進的技術，日本在汽車、電子產品、機器人與精密設備等領域處於全球領先地位。',
            '然而，日本經濟長期面臨人口快速老化與少子化的嚴峻挑戰，這導致勞動力短缺並對社會福利體系帶來巨大壓力。經過多年的通貨緊縮與低度經濟成長，日本央行近期已開始逐步調整其歷史性的寬鬆貨幣政策。儘管面臨這些內部結構性挑戰及全球供應鏈波動的影響，日本依然保持著高度穩定的經商環境與全球重要外資目的地的地位。'
        ],
        table: {
            gov: '議會制君主立憲制',
            capital: '東京',
            ratings: 'S&P: A+<br>Moody\'s: A1<br>Fitch: A',
            pop: '1.24 億人',
            age: '49.5 歲',
            income: '33,800 美元',
            gdp: '4.2 兆美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17521134/embed#?secret=cXwBoubCPZ" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17506887/embed#?secret=GDj5AteruR" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '7,170 億美元 (2023)',
            leadingExports: '汽車<br>車輛零件<br>積體電路<br>半導體製造設備<br>客船',
            imports: '7,560 億美元 (2023)',
            leadingImports: '原油<br>石油氣<br>煤炭<br>廣播設備<br>積體電路',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/17703638/embed#?secret=SyLsdv3ovi" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: '豐田汽車 (Toyota Motor)', sector: '非必需消費品、汽車' },
            { name: '索尼 (Sony)', sector: '非必需消費品、科技' },
            { name: '三菱UFJ金融集團 (Mitsubishi UFJ Financial Group)', sector: '金融業' },
            { name: '本田汽車 (Honda Motor)', sector: '非必需消費品、汽車' },
            { name: '軟銀集團 (SoftBank Group)', sector: '通訊服務、投資' },
            { name: '日立 (Hitachi)', sector: '工業、科技' },
            { name: '三井住友金融集團 (Sumitomo Mitsui Financial Group)', sector: '金融業' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '21.0%' },
                { country: '美國', percent: '10.3%' },
                { country: '澳洲', percent: '9.8%' },
                { country: '南韓', percent: '4.6%' },
                { country: '阿拉伯聯合大公國', percent: '4.3%' }
            ],
            export: [
                { country: '美國', percent: '20.1%' },
                { country: '中國', percent: '17.6%' },
                { country: '南韓', percent: '7.1%' },
                { country: '台灣', percent: '5.6%' },
                { country: '香港特別行政區', percent: '4.6%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
    },
    'Saudi Arabia': {
        title: '沙烏地阿拉伯 (Saudi Arabia)',
        flagUrl: 'https://flagcdn.com/w160/sa.png',
        subtitle: '包含沙烏地阿拉伯的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '目前經濟仍由碳氫化合物驅動',
        descParagraphs: [
            '作為擁有全球超過 15% 已探明儲量的重要產油國，沙烏地阿拉伯正在其「2030 年願景」計畫下經歷重大的經濟轉型。該計畫旨在實現經濟多元化，擺脫對石油的依賴；目前石油佔其公共收入約三分之二，並佔出口的 75%。因此，政府的重點是提高人力資本素質、提升公共行政效率並吸引外資。',
            '該國是連接亞洲、歐洲和非洲的蓬勃發展的運輸和物流樞紐，然而外國投資者對於透明度、政治風險以及國家干預經濟等問題仍存有疑慮。'
        ],
        table: {
            gov: '絕對君主制',
            capital: '利雅德',
            ratings: 'S&P: A+<br>Moody\'s: Aa3<br>Fitch: A+',
            pop: '3,600 萬人',
            age: '29.6 歲',
            income: '81,848.10 美元',
            gdp: '1.268 兆美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/23375173/embed#?secret=BvbuCRiIdE" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/19583232/embed#?secret=WF4E4D1OPA" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '3,055 億美元 (2024)',
            leadingExports: '原油<br>精煉石油<br>乙烯聚合物<br>塑膠<br>肥料',
            imports: '2,328.1 億美元 (2024)',
            leadingImports: '汽車<br>廣播設備<br>服飾與成衣<br>黃金<br>精煉石油',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/19581892/embed#?secret=qqr1arO1RH" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: '沙烏地阿美 (Saudi Aramco)', sector: '能源、勘探與生產' },
            { name: '沙烏地國家銀行 (The Saudi National Bank)', sector: '金融業' },
            { name: '拉吉希銀行 (Al Rajhi Bank)', sector: '金融業' },
            { name: '利雅德銀行 (Riyad Bank)', sector: '金融業' },
            { name: '國際水務及電力公司 (ACWA Power)', sector: '公用事業' },
            { name: '沙烏地電信 (Saudi Telecom)', sector: '電信服務' },
            { name: '沙烏地阿拉伯礦業公司 (Saudi Arabian Mining)', sector: '原物料、金屬與採礦' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '20%' },
                { country: '美國', percent: '11%' },
                { country: '阿拉伯聯合大公國', percent: '8%' },
                { country: '印度', percent: '5%' },
                { country: '德國', percent: '5%' }
            ],
            export: [
                { country: '未指定', percent: '60%' },
                { country: '阿拉伯聯合大公國', percent: '5%' },
                { country: '中國', percent: '4%' },
                { country: '印度', percent: '3%' },
                { country: '埃及', percent: '3%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
    },
    //美洲
    'Brazil': {
        title: '巴西 (Brazil)',
        flagUrl: 'https://flagcdn.com/w160/br.png',
        subtitle: '包含巴西的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '以大宗商品出口為導向的經濟',
descParagraphs: [
            '巴西是拉丁美洲的經濟強國，也是全球依國內生產毛額排名的前十大經濟體之一。其經濟實力主要建立在大豆、甘蔗、咖啡、鐵與原油等原物料商品的出口上。',
            '除了金融、房地產與服務業之外，其他關鍵產業還包含汽車製造、再生能源以及建築業。在多數經濟領域中，外國投資者享有與國內投資者同等的法律權利。因此，近年來該國吸收了拉丁美洲超過一半的外國直接投資總額。然而，其經濟弱點包含國家對許多經濟領域的干預、高水準的公共債務以及繁雜的行政程序。'
        ],
        table: {
            gov: '聯邦總統制共和國',
            capital: '巴西利亞',
            ratings: 'S&P: CCC+<br>Moody\'s: Caa1<br>Fitch: CCC',
            pop: '2 億 540 萬人',
            age: '34.0 歲',
            income: '22,707.10 美元',
            gdp: '2.3 兆美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18009771/embed#?secret=pRH3MicFw6" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17991478/embed#?secret=R6PQdKXbjx" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '2,417 億美元 (2023)',
            leadingExports: '鐵<br>大豆<br>原油<br>糖<br>家禽肉類',
            imports: '3,744 億美元 (2022)',
            leadingImports: '精煉石油<br>汽車零件<br>原油<br>積體電路<br>農藥',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/18044181/embed#?secret=7z07cWGM3C" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'Petrobras', sector: '石油與天然氣探勘與生產' },
            { name: 'Vale', sector: '原物料、金屬與採礦' },
            { name: 'Ambev', sector: '民生必需品、啤酒釀造' },
            { name: 'JBS Foods', sector: '民生必需品、肉類加工' },
            { name: 'Cielo', sector: '金融業' },
            { name: 'Itaú Unibanco', sector: '金融業' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '23%' },
                { country: '美國', percent: '18%' },
                { country: '阿根廷', percent: '5%' },
                { country: '德國', percent: '5%' },
                { country: '印度', percent: '3%' }
            ],
            export: [
                { country: '中國', percent: '31%' },
                { country: '美國', percent: '11%' },
                { country: '阿根廷', percent: '4%' },
                { country: '荷蘭', percent: '3%' },
                { country: '智利', percent: '3%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
    },
    //大洋洲
    'New Zealand': {
        title: '紐西蘭 (New Zealand)',
        flagUrl: 'https://flagcdn.com/w160/nz.png',
        subtitle: '包含紐西蘭的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '從農業邁向現代化、科技驅動的經濟',
        descParagraphs: [
            '在過去的五十年裡，紐西蘭成功地從農業經濟轉型為更多元化、更具全球競爭力的自由市場體系，並在服務業、科技業和旅遊業中擁抱創新與投資。如今，紐西蘭充滿韌性的經濟以強大的法治、透明且穩定的投資環境，以及培育了充滿活力的勞動力市場的靈活法規為特徵。此外，憑藉其鄰近亞洲和澳洲的地理優勢、有限的公共債務以及優越的生活水準，該國成為外國投資的絕佳目的地。',
            '儘管具備這些優勢，紐西蘭在邁向永續成長的道路上仍面臨諸多挑戰，包含其身為島國的地位、過度依賴中國的需求、技術勞工短缺，以及地方性的社會經濟不平等問題。'
        ],
        table: {
            gov: '君主立憲制下的議會民主制；大英國協王國',
            capital: '威靈頓',
            ratings: 'S&P: AA+<br>Moody\'s: Aaa<br>Fitch: AAA',
            pop: '530 萬人',
            age: '37.7 歲',
            income: '59,065.59 美元',
            gdp: '2,629 億美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17521146/embed#?secret=UFTJ0jRVQB" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17517351/embed#?secret=Y2gECcvYMo" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '429 億美元 (2024)',
            leadingExports: '牛奶<br>木材<br>牛肉<br>奶油<br>羊肉',
            imports: '475 億美元 (2024)',
            leadingImports: '汽車<br>精煉石油<br>燃氣輪機<br>廣播設備<br>卡車',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/17502099/embed#?secret=CLXHRXYc3E" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'ANZ Bank New Zealand', sector: '金融業' },
            { name: 'Kiwi Group Holdings Ltd', sector: '金融業' },
            { name: 'Fonterra Co-operative Group', sector: '民生必需品、食品' },
            { name: 'Spark New Zealand', sector: '電信服務' },
            { name: 'Fletcher Building Limited', sector: '綜合企業、金融業、消費性電子產品、飯店、餐廳與休閒' },
            { name: 'Air New Zealand Limited', sector: '交通運輸、航空業' },
            { name: 'Sky Network Television', sector: '通訊服務、媒體' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '26.9%' },
                { country: '澳洲', percent: '12.9%' },
                { country: '美國', percent: '12%' },
                { country: '日本', percent: '5.53%' },
                { country: '南韓', percent: '3.47%' }
            ],
            export: [
                { country: '中國', percent: '20.73%' },
                { country: '澳洲', percent: '10.81%' },
                { country: '美國', percent: '9.71%' },
                { country: '南韓', percent: '7.52%' },
                { country: '日本', percent: '6.82%' }
            ],
            source: 'Source: IMF, CIA The World Factbook'
        }
    },
    'Australia': {
        title: '澳洲 (Australia)',
        flagUrl: 'https://flagcdn.com/w160/au.png',
        subtitle: '包含澳洲的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '繁榮源於鄰近亞洲經濟體',
        descParagraphs: [
            '澳洲經濟受惠於開放市場原則、對法治的堅定承諾以及透明的法規而蓬勃發展。憑藉與所有全球主要合作夥伴簽署的自由貿易協定，以及現代化銀行體系的支持，澳洲對外國投資持歡迎態度，並在金融服務、科技與高附加價值製造業等領域保持競爭優勢。配合其淨零排放目標，澳洲亦鼓勵推動潔淨科技。此外，澳洲具備鄰近快速成長的亞洲市場之戰略地理位置，加上豐富的礦產資源，進一步鞏固了其經濟優勢。',
            '然而，其弱點包括勞動力市場緊縮導致技能短缺、易受大宗商品價格波動影響，以及氣候變遷帶來的不確定性。此外，該國經濟高度依賴中國的需求，且因國土遼闊而面臨基礎設施不足的困境。'
        ],
        table: {
            gov: '君主立憲制下的聯邦議會民主制；大英國協王國',
            capital: '坎培拉',
            ratings: 'S&P: AAA<br>Moody\'s: Aaa<br>Fitch: AAA',
            pop: '2,774 萬人',
            age: '38.26 歲',
            income: '77,543.33 美元',
            gdp: '1.83 兆美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17491692/embed#?secret=VRTAjzaqUX" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17492008/embed#?secret=vI8VCyHZjL" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '3,416 億美元 (2024)',
            leadingExports: '鐵礦砂<br>煤炭<br>天然氣<br>黃金<br>礦物',
            imports: '3,009 億美元 (2024)',
            leadingImports: '精煉石油<br>汽車<br>送貨卡車<br>廣播設備<br>服飾',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/17489811/embed#?secret=sr7PbrWimI" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: 'Commonwealth Bank of Australia', sector: '金融業' },
            { name: 'Macquarie Group', sector: '金融業' },
            { name: 'Westpac Banking Corporation', sector: '金融業' },
            { name: 'Rio Tinto', sector: '金屬與採礦' },
            { name: 'Woolworths Group', sector: '民生必需品經銷與零售' },
            { name: 'Telstra', sector: '電信服務' },
            { name: 'Wesfarmers', sector: '非必需消費品經銷與零售、肥料與農業化學品' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '25%' },
                { country: '美國', percent: '11.3%' },
                { country: '日本', percent: '6.29%' },
                { country: '南韓', percent: '6.29%' },
                { country: '泰國', percent: '4.54%' }
            ],
            export: [
                { country: '中國', percent: '32.56%' },
                { country: '未指定', percent: '17.3%' },
                { country: '日本', percent: '9.8%' },
                { country: '南韓', percent: '5.66%' },
                { country: '印度', percent: '4.38%' }
            ],
            source: 'Source: IMF, CIA The World Factbook'
        }
    },
    //歐洲
    'Germany': {
        title: '德國 (Germany)',
        flagUrl: 'https://flagcdn.com/w160/de.png',
        subtitle: '包含德國的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
        descTitle: '歐洲的工業強國',
        descParagraphs: [
            '作為歐洲最大的經濟體，德國擁有成熟的金融部門、高技能的勞動力、穩定的監管環境、可靠的基礎設施以及尖端的研發資源。德國在政治和經濟上都具有全球影響力，其外國直接投資（FDI）的流入與流出及出口額均位居世界前列。汽車、機械、化學和電子工業是其經濟支柱。',
            '然而，其弱點包括對中國貿易與國際能源進口過度依賴、經濟高度仰賴少數產業，以及複雜的法規與會計制度可能拖慢創業活動並阻礙更強勁的經濟成長。'
        ],
        table: {
            gov: '聯邦議會制共和國',
            capital: '柏林',
            ratings: 'S&P: AAA<br>Moody\'s: Aaa<br>Fitch: AAA',
            pop: '8,460 萬人',
            age: '45.0 歲',
            income: '64,297.95 美元',
            gdp: '4.6 兆美元'
        },
        
        //GDP & Economic Overview圖表 折線圖
        charts: {
            left: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18497769/embed#?secret=9SrVbvT9fR" class="w-full h-full border-none" scrolling="no"></iframe>`
            },
            right: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18470391/embed#?secret=TV9yoIuoyW" class="w-full h-full border-none" scrolling="no"></iframe>`
            }
        },
        //Banking & Finance
        //Trade & Investment表格
        tradeAndInvestment: {
            exports: '1.5 兆美元 (2023)',
            leadingExports: '汽車與車輛零件<br>包裝藥品<br>醫療培養物與疫苗<br>航空器<br>工業機械<br>醫療儀器',
            imports: '1.7 兆美元 (2022)',
            leadingImports: '汽車與車輛零件<br>包裝藥品<br>廣播設備<br>醫療培養物與疫苗<br>電腦',
        },
        //Investments長條圖
        fdiChart: {
            html: `<iframe src="https://flo.uri.sh/visualisation/18499704/embed#?secret=SIo5gdhyi7" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
        },
        //Leading Companies表格
        leadingCompanies: [
            { name: '安聯 (Allianz)', sector: '金融業' },
            { name: '德國商業銀行 (Commerzbank)', sector: '金融業' },
            { name: '福斯集團 (Volkswagen Group)', sector: '汽車與零組件' },
            { name: '戴姆勒 (Daimler)', sector: '汽車與零組件' },
            { name: '德國電信 (Deutsche Telekom)', sector: '媒體與通訊' },
            { name: '拜耳 (Bayer)', sector: '製藥' },
            { name: '西門子 (Siemens)', sector: '科技' }
        ],
        //Major Trade Partners表格 Import&Export
        tradePartners: {
            import: [
                { country: '中國', percent: '12%' },
                { country: '荷蘭', percent: '8%' },
                { country: '美國', percent: '6%' },
                { country: '波蘭', percent: '6%' },
                { country: '義大利', percent: '5%' }
            ],
            export: [
                { country: '美國', percent: '9%' },
                { country: '中國', percent: '8%' },
                { country: '法國', percent: '7%' },
                { country: '荷蘭', percent: '7%' },
                { country: '波蘭', percent: '6%' }
            ],
            source: 'Source: World Integrated Trade Solution'
        }
    },
};
