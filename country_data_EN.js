// ----------------------------------------------------
// 建立「國家資料庫」 (中英雙語版 - 完整 29 國)
// ----------------------------------------------------
const countryDatabase = {
    // ================= 非洲 =================
    'Madagascar': {
        ranking: '10',
        flagUrl: 'https://flagcdn.com/w160/mg.png',
        zh: {
            title: '馬達加斯加 (Madagascar)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18716499/embed#?secret=D8JaCD9M0j" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18596139/embed#?secret=FSIBNCbzcH" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '42 億美元 (2023)',
                leadingExports: '香草<br>鎳<br>服飾與成衣<br>鈦<br>黃金<br>丁香',
                imports: '48 億美元 (2022)',
                leadingImports: '精煉石油<br>稻米<br>汽車<br>包裝藥品<br>服飾與成衣',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18692455/embed" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'BNI Madagascar', sector: '金融業' },
                { name: 'Axian Group', sector: '綜合企業、能源、房地產、電信服務' },
                { name: 'Jirama', sector: '公用事業' },
                { name: 'Telma', sector: '電信服務' },
                { name: 'Socolait', sector: '民生必需品、食品' },
                { name: 'Ambatovy', sector: '原物料、金屬與採礦' }
            ],
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
        en: {
            title: 'Madagascar',
            subtitle: 'Includes historical data for Madagascar\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Mismanagement Undermines Economic Potential',
            descParagraphs: [
                'Situated in the Indian Ocean off the coast of southern Africa, Madagascar—the world\'s fifth-largest island—is endowed with abundant mineral, agricultural and marine resources, and boasts a burgeoning tourism industry. With several trade agreements with the United States and the EU, in addition to memberships in various regional communities, Madagascar welcomes commercial partnerships and foreign investment.',
                'Still, due to chronic political instability and mismanagement of the country\'s finances and resources, the population faces persistently high poverty rates and widespread food insecurity. Foreign investors, despite laws granting them the same treatment as domestic investors, face additional scrutiny and unexplained delays. Additionally, convoluted administrative procedures, corruption and outdated labor laws undermine free economic activity. Inadequate infrastructure, as well as vulnerability to fluctuations in commodity prices and climatic hazards, compound the country\'s woes.'
            ],
            table: {
                gov: 'Semi-presidential republic',
                capital: 'Antananarivo',
                ratings: 'S&P: Unrated<br>Moody\'s: Unrated<br>Fitch: Unrated',
                pop: '30.6 million',
                age: '19.5',
                income: '3,352.96',
                gdp: '16.5 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18716499/embed#?secret=D8JaCD9M0j" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18596139/embed#?secret=FSIBNCbzcH" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$4.2 billion (2023)',
                leadingExports: 'Vanilla<br>Nickel<br>Apparel and Clothing<br>Titanium<br>Gold<br>Cloves',
                imports: '$4.8 billion (2022)',
                leadingImports: 'Refined Petroleum<br>Rice<br>Cars<br>Packaged Medicaments<br>Apparel and Clothing',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18692455/embed" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'BNI Madagascar', sector: 'Financials' },
                { name: 'Axian Group', sector: 'Conglomerates, Energy, Real Estate, Telecom Services' },
                { name: 'Jirama', sector: 'Utilities' },
                { name: 'Telma', sector: 'Telecom Services' },
                { name: 'Socolait', sector: 'Consumer Staples, Food' },
                { name: 'Ambatovy', sector: 'Materials, Metals & Mining' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '19%' },
                    { country: 'France', percent: '10%' },
                    { country: 'Oman', percent: '10%' },
                    { country: 'India', percent: '8%' },
                    { country: 'United Arab Emirates', percent: '6%' }
                ],
                export: [
                    { country: 'France', percent: '19%' },
                    { country: 'United States', percent: '18%' },
                    { country: 'China', percent: '13%' },
                    { country: 'Japan', percent: '9%' },
                    { country: 'Netherlands', percent: '5%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'South Sudan': {
        ranking: '1',
        flagUrl: 'https://flagcdn.com/w160/ss.png',
        zh: {
            title: '南蘇丹 (South Sudan)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18717132/embed#?secret=QcFgKtZMOL" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18609848/embed#?secret=AYElEPYeCI" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '12 億美元 (2023)',
                leadingExports: '原油<br>黃金<br>飼料作物<br>木材<br>昆蟲樹脂',
                imports: '6 億美元 (2022)',
                leadingImports: '汽車<br>貨車<br>包裝藥品<br>食品<br>服飾與成衣',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18702592/embed#?secret=rATPzkrt02" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Nile Commercial Bank', sector: '金融業' },
                { name: 'Ivory Bank', sector: '金融業' },
                { name: 'Nile Petroleum Corporation', sector: '綜合石油與天然氣' },
                { name: 'Akon Refinery Company', sector: '石油與天然氣煉製及行銷' },
                { name: 'South Sudan Electricity Corporation', sector: '公用事業' },
                { name: 'Green Horizon', sector: '民生必需品、食品' }
            ]
        },
        en: {
            title: 'South Sudan',
            subtitle: 'Includes historical data for South Sudan\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Post-War Instability Undermines Economic Potential',
            descParagraphs: [
                'Following decades of brutal civil war, South Sudan gained independence from Sudan in 2011, becoming the newest internationally recognized country and UN member state. However, independence has not brought peace to this landlocked nation in northeastern Africa, which remains mired in political turmoil and ethnic conflict, with its GDP per capita consistently ranking among the lowest in the world.',
                'The economy relies heavily on oil and subsistence agriculture, while poor governance and pervasive corruption hinder economic progress, diversification, and the equitable distribution of benefits. A massive informal sector serves as a crucial source of employment. Furthermore, South Sudan faces the challenges of climate change and intensifying natural disasters, compounding an escalating humanitarian crisis and hindering development programs.'
            ],
            table: {
                gov: 'Presidential republic',
                capital: 'Juba',
                ratings: 'S&P: Unrated<br>Moody\'s: Unrated<br>Fitch: Unrated',
                pop: '15.5 million',
                age: '17.1',
                income: '1,689.61',
                gdp: '6.5 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18717132/embed#?secret=QcFgKtZMOL" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18609848/embed#?secret=AYElEPYeCI" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$1.2 billion (2023)',
                leadingExports: 'Crude Petroleum<br>Gold<br>Forage Crops<br>Wood<br>Insect Resins',
                imports: '$600 million (2022)',
                leadingImports: 'Cars<br>Delivery Trucks<br>Packaged Medicaments<br>Food<br>Apparel and Clothing',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18702592/embed#?secret=rATPzkrt02" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Nile Commercial Bank', sector: 'Financials' },
                { name: 'Ivory Bank', sector: 'Financials' },
                { name: 'Nile Petroleum Corporation', sector: 'Integrated Oil & Gas' },
                { name: 'Akon Refinery Company', sector: 'Oil & Gas Refining and Marketing' },
                { name: 'South Sudan Electricity Corporation', sector: 'Utilities' },
                { name: 'Green Horizon', sector: 'Consumer Staples, Food' }
            ]
        }
    },
    'Burundi': {
        ranking: '2',
        flagUrl: 'https://flagcdn.com/w160/bi.png',
        zh: {
            title: '蒲隆地 (Burundi)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18706734/embed#?secret=ef3Uc0Fik1" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18581970/embed#?secret=klNOStEDlo" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '8.718 億美元 (2023)',
                leadingExports: '黃金<br>咖啡<br>茶葉<br>稀土金屬礦<br>啤酒',
                imports: '1.272 億美元 (2022)',
                leadingImports: '精煉石油<br>包裝藥品<br>水泥<br>原糖<br>汽車',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18690489/embed#?secret=vzqHy4L4uP" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Banque de Gestion et de Financement', sector: '金融業' },
                { name: 'Interbank', sector: '金融業' },
                { name: 'Brarudi', sector: '民生必需品、飲料' },
                { name: 'Burundi National Radio and Television', sector: '媒體、廣播' },
                { name: 'Régie de Distribution d\'Eau et d\'Electricité', sector: '公用事業' },
                { name: 'Econet Wireless Burundi', sector: '電信服務' },
                { name: 'Socabu', sector: '金融業、保險' }
            ],
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
        en: {
            title: 'Burundi',
            subtitle: 'Includes historical data for Burundi\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Political Instability Exacerbates Economic Weakness',
            descParagraphs: [
                'Located in Central Africa, Burundi is a landlocked country with a population of around 13 million and is one of the world\'s poorest nations. As a member of the East African Community (EAC), Burundi has taken steps in recent years to improve its political and economic governance, aiming to provide employment opportunities for its young and rapidly growing population beyond the primary mining and agriculture sectors. The government has placed particular emphasis on infrastructure development, including power plants, roadworks, and upgrades to ports, airports, and railways. However, foreign direct investment (FDI) faces massive hurdles, including an inefficient regulatory environment, bureaucratic obstacles, and an underdeveloped financial system. Corruption, low labor skills, and unreliable power supply are other issues.',
                'Today, Burundi remains heavily reliant on bilateral and multilateral donor aid. Ethnic disputes, attempted coups, and military interference in democratic institutions further complicate the situation.'
            ],
            table: {
                gov: 'Presidential republic',
                capital: 'Gitega',
                ratings: 'S&P: Unrated<br>Moody\'s: Unrated<br>Fitch: Unrated',
                pop: '13.7 million',
                age: '16.2',
                income: '1,667.37',
                gdp: '3.1 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18706734/embed#?secret=ef3Uc0Fik1" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18581970/embed#?secret=klNOStEDlo" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$871.8 million (2023)',
                leadingExports: 'Gold<br>Coffee<br>Tea<br>Rare-Earth Metal Ores<br>Beer',
                imports: '$127.2 million (2022)',
                leadingImports: 'Refined Petroleum<br>Packaged Medicaments<br>Cement<br>Raw Sugar<br>Cars',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18690489/embed#?secret=vzqHy4L4uP" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Banque de Gestion et de Financement', sector: 'Financials' },
                { name: 'Interbank', sector: 'Financials' },
                { name: 'Brarudi', sector: 'Consumer Staples, Beverages' },
                { name: 'Burundi National Radio and Television', sector: 'Media, Broadcasting' },
                { name: 'Régie de Distribution d\'Eau et d\'Electricité', sector: 'Utilities' },
                { name: 'Econet Wireless Burundi', sector: 'Telecom Services' },
                { name: 'Socabu', sector: 'Financials, Insurance' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '18%' },
                    { country: 'Saudi Arabia', percent: '12%' },
                    { country: 'Tanzania', percent: '10%' },
                    { country: 'India', percent: '9%' },
                    { country: 'United Arab Emirates', percent: '7%' }
                ],
                export: [
                    { country: 'United Arab Emirates', percent: '28%' },
                    { country: 'Democratic Republic of the Congo', percent: '21%' },
                    { country: 'Belgium', percent: '8%' },
                    { country: 'Pakistan', percent: '6%' },
                    { country: 'Tanzania', percent: '5%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'Central African Republic': {
        ranking: '3',
        flagUrl: 'https://flagcdn.com/w160/cf.png',
        zh: {
            title: '中非共和國 (Central African Republic)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18717172/embed#?secret=Fi25TKoQi4" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18590677/embed#?secret=2Wm7FHuBHh" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '4.531 億美元 (2023)',
                leadingExports: '黃金<br>木材<br>鑽石<br>大型工程車輛<br>蘭姆酒',
                imports: '1.809 億美元 (2022)',
                leadingImports: '精煉石油<br>包裝藥品<br>天然氣<br>廣播設備<br>二手衣物',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18691310/embed#?secret=gUnWQ8vOxw" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Banque Internationale pour la Centrafrique (BICA)', sector: '金融業' },
                { name: 'Commercial Bank Centrafrique (CBCA)', sector: '金融業' },
                { name: 'Société Nationale des Hydrocarbures', sector: '石油與天然氣探勘與生產' },
                { name: 'Enerca', sector: '公用事業' },
                { name: 'Groupe Kamach', sector: '綜合企業、民生必需品零售、林業產品、採礦業' },
                { name: 'Socatel', sector: '電信服務' },
                { name: 'Société Centrafricaine de Distribution', sector: '民生必需品分銷與零售' }
            ],
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
        en: {
            title: 'Central African Republic',
            subtitle: 'Includes historical data for the Central African Republic\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Strategic Location and Political Stability Bring Economic Benefits',
            descParagraphs: [
                'Since gaining independence from France in 1960, the Central African Republic (CAR) has been mired in political instability and sectarian violence. Despite possessing massive economic potential, its population of around 5 million remains among the poorest in the world. The country boasts rich agricultural and forestry resources, alongside significant deposits of diamonds, gold, oil, and uranium. In 2016, CAR held its first democratic presidential elections since independence—a historic moment and a crucial step toward national reconstruction. However, despite this progress, large swathes of the country remain controlled by anti-government factions and militias fighting for control over its vast resources.',
                'Additional challenges impeding economic growth and development include weak transportation infrastructure and geographic isolation, limited energy production capacity, and widespread corruption. CAR also faces a shortage of skilled labor and one of the world\'s most severe gender gaps.'
            ],
            table: {
                gov: 'Presidential republic',
                capital: 'Yaoundé',
                ratings: 'S&P: Unrated<br>Moody\'s: Unrated<br>Fitch: Unrated',
                pop: '5.2 million',
                age: '14.9',
                income: '2,327.42',
                gdp: '2.8 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18717172/embed#?secret=Fi25TKoQi4" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18590677/embed#?secret=2Wm7FHuBHh" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$453.1 million (2023)',
                leadingExports: 'Gold<br>Wood<br>Diamonds<br>Large Construction Vehicles<br>Rum',
                imports: '$180.9 million (2022)',
                leadingImports: 'Refined Petroleum<br>Packaged Medicaments<br>Natural Gas<br>Broadcasting Equipment<br>Used Clothing',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18691310/embed#?secret=gUnWQ8vOxw" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Banque Internationale pour la Centrafrique (BICA)', sector: 'Financials' },
                { name: 'Commercial Bank Centrafrique (CBCA)', sector: 'Financials' },
                { name: 'Société Nationale des Hydrocarbures', sector: 'Oil & Gas Exploration & Production' },
                { name: 'Enerca', sector: 'Utilities' },
                { name: 'Groupe Kamach', sector: 'Conglomerates, Consumer Staples Retail, Forestry Products, Mining' },
                { name: 'Socatel', sector: 'Telecom Services' },
                { name: 'Société Centrafricaine de Distribution', sector: 'Consumer Staples Distribution & Retail' }
            ],
            tradePartners: {
                import: [
                    { country: 'Cameroon', percent: '26%' },
                    { country: 'China', percent: '17%' },
                    { country: 'France', percent: '14%' },
                    { country: 'Belgium', percent: '7%' },
                    { country: 'Italy', percent: '5%' }
                ],
                export: [
                    { country: 'United Arab Emirates', percent: '25%' },
                    { country: 'Sweden', percent: '15%' },
                    { country: 'France', percent: '10%' },
                    { country: 'Switzerland', percent: '8%' },
                    { country: 'Uganda', percent: '7%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'Mozambique': {
        ranking: '5',
        flagUrl: 'https://flagcdn.com/w160/mz.png',
        zh: {
            title: '莫三比克 (Mozambique)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18707456/embed#?secret=y9GLffxPP3" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18608585/embed#?secret=t6Lpw0i8fj" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '184 億美元 (2023)',
                leadingExports: '煤炭<br>鋁<br>黃金<br>天然氣<br>電力<br>鈦',
                imports: '115 億美元 (2022)',
                leadingImports: '精煉石油<br>鉻<br>鐵<br>鋁土礦<br>電力',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18693285/embed#?secret=UBCmhGCY2y" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Banco Internacional de Moçambique', sector: '金融業' },
                { name: 'Petróleos de Moçambique', sector: '石油與天然氣分銷及行銷' },
                { name: 'Mozal', sector: '原物料、金屬與採礦' },
                { name: 'Electricidade de Moçambique', sector: '公用事業' },
                { name: 'Hidroeléctrica de Cahora Bassa', sector: '公用事業' },
                { name: 'Moçambique Telecom Celular', sector: '電信服務' }
            ],
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
        en: {
            title: 'Mozambique',
            subtitle: 'Includes historical data for Mozambique\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Rapid Economic Growth, but Structural and Environmental Challenges Remain',
            descParagraphs: [
                'Emerging from a 15-year civil war in 1992, Mozambique has rapidly transitioned from one of the world\'s poorest nations into an economy with impressive growth, driven by market reforms, substantial government spending on infrastructure, and large inflows of foreign investment. The country also benefits from a long coastline, proximity to the South African market, and abundant natural resources (including massive agricultural, mineral, and hydrocarbon reserves).',
                'However, out of a population of around 34.9 million, more than half still live in poverty, with rural households particularly vulnerable to climate-related disasters. Despite its enormous economic potential, its business environment remains challenging. Mozambique faces unstable political and security situations, inconsistent fiscal policies, corruption, poor infrastructure, and a workforce lacking advanced skills. Furthermore, the economy remains insufficiently diversified and overly reliant on global demand and the volatility of its commodity prices.'
            ],
            table: {
                gov: 'Presidential republic',
                capital: 'Maputo',
                ratings: 'S&P: CCC+<br>Moody\'s: Caa2<br>Fitch: CCC',
                pop: '34.9 million',
                age: '17.1',
                income: '2,941.88',
                gdp: '23.0 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18707456/embed#?secret=y9GLffxPP3" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18608585/embed#?secret=t6Lpw0i8fj" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$18.4 billion (2023)',
                leadingExports: 'Coal<br>Aluminum<br>Gold<br>Natural Gas<br>Electricity<br>Titanium',
                imports: '$11.5 billion (2022)',
                leadingImports: 'Refined Petroleum<br>Chromium<br>Iron<br>Bauxite<br>Electricity',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18693285/embed#?secret=UBCmhGCY2y" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Banco Internacional de Moçambique', sector: 'Financials' },
                { name: 'Petróleos de Moçambique', sector: 'Oil & Gas Distribution and Marketing' },
                { name: 'Mozal', sector: 'Materials, Metals & Mining' },
                { name: 'Electricidade de Moçambique', sector: 'Utilities' },
                { name: 'Hidroeléctrica de Cahora Bassa', sector: 'Utilities' },
                { name: 'Moçambique Telecom Celular', sector: 'Telecom Services' }
            ],
            tradePartners: {
                import: [
                    { country: 'South Africa', percent: '26%' },
                    { country: 'China', percent: '11%' },
                    { country: 'India', percent: '9%' },
                    { country: 'United Arab Emirates', percent: '8%' },
                    { country: 'Singapore', percent: '6%' }
                ],
                export: [
                    { country: 'South Africa', percent: '17%' },
                    { country: 'India', percent: '16%' },
                    { country: 'Netherlands', percent: '11%' },
                    { country: 'China', percent: '10%' },
                    { country: 'United Kingdom', percent: '7%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'Malawi': {
        ranking: '6',
        flagUrl: 'https://flagcdn.com/w160/mw.png',
        zh: {
            title: '馬拉威 (Malawi)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18707456/embed#?secret=ODdifeh6yB" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18605836/embed#?secret=Ulia6KQZ01" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '18 億美元 (2023)',
                leadingExports: '菸草<br>黃金<br>大豆<br>原糖<br>茶葉<br>乾豆與堅果',
                imports: '11 億美元 (2022)',
                leadingImports: '郵票<br>精煉石油<br>包裝藥品<br>肥料<br>辦公室機械與零件',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18692566/embed#?secret=vYJt7P3YOU" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'National Bank of Malawi', sector: '金融業' },
                { name: 'FDH Banks', sector: '金融業' },
                { name: 'Press Corporation', sector: '綜合企業、金融業、房地產、電信服務' },
                { name: 'Illovo Sugar', sector: '民生必需品、食品' },
                { name: 'Malawi Telecommunications', sector: '電信服務' },
                { name: 'Escom', sector: '公用事業' }
            ],
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
        en: {
            title: 'Malawi',
            subtitle: 'Includes historical data for Malawi\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Poor Infrastructure Undermines Economic Growth',
            descParagraphs: [
                'With a rapidly growing population of around 23.4 million, Malawi benefits from abundant agricultural resources, a thriving services sector, and tremendous potential in mining, energy, transportation, and information technology.',
                'On its path toward economic growth and stability, Malawi faces numerous challenges, including inadequate infrastructure networks, underdeveloped legal and business frameworks, a pervasive lack of transparency and corruption, and a shortage of skilled and semi-skilled labor.'
            ],
            table: {
                gov: 'Presidential republic',
                capital: 'Lilongwe',
                ratings: 'S&P: Unrated<br>Moody\'s: Unrated<br>Fitch: Rating Watch',
                pop: '23.4 million',
                age: '17.5',
                income: '3,468.43',
                gdp: '11.2 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18707456/embed#?secret=ODdifeh6yB" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18605836/embed#?secret=Ulia6KQZ01" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$1.8 billion (2023)',
                leadingExports: 'Tobacco<br>Gold<br>Soybeans<br>Raw Sugar<br>Tea<br>Dried Legumes and Nuts',
                imports: '$1.1 billion (2022)',
                leadingImports: 'Postage Stamps<br>Refined Petroleum<br>Packaged Medicaments<br>Fertilizers<br>Office Machinery and Parts',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18692566/embed#?secret=vYJt7P3YOU" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'National Bank of Malawi', sector: 'Financials' },
                { name: 'FDH Banks', sector: 'Financials' },
                { name: 'Press Corporation', sector: 'Conglomerates, Financials, Real Estate, Telecom Services' },
                { name: 'Illovo Sugar', sector: 'Consumer Staples, Food' },
                { name: 'Malawi Telecommunications', sector: 'Telecom Services' },
                { name: 'Escom', sector: 'Utilities' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '18%' },
                    { country: 'South Africa', percent: '18%' },
                    { country: 'United Arab Emirates', percent: '9%' },
                    { country: 'India', percent: '7%' },
                    { country: 'Zambia', percent: '3%' }
                ],
                export: [
                    { country: 'Belgium', percent: '14%' },
                    { country: 'India', percent: '8%' },
                    { country: 'Tanzania', percent: '7%' },
                    { country: 'South Africa', percent: '7%' },
                    { country: 'United Arab Emirates', percent: '5%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'Democratic Republic of the Congo': {
        ranking: '7',
        flagUrl: 'https://flagcdn.com/w160/cd.png',
        zh: {
            title: '剛果民主共和國 (Democratic Republic of the Congo)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18716638/embed#?secret=1j26i3l2MV" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18592469/embed#?secret=jhrqNQ5zyC" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '133 億美元 (2023)',
                leadingExports: '銅<br>鈷<br>原油<br>錫<br>鑽石',
                imports: '225 億美元 (2022)',
                leadingImports: '包裝藥品<br>精煉石油<br>硫酸<br>石材加工機械<br>送貨卡車',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18691606/embed#?secret=9e1G2PPkI7" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Rawbank', sector: '金融業' },
                { name: 'Kibali Gold Mine', sector: '原物料、金屬與採礦' },
                { name: 'Gécamines', sector: '原物料、金屬與採礦' },
                { name: 'Altech Group', sector: '公用事業' },
                { name: 'Equity Banque Commerciale du Congo', sector: '金融業' },
                { name: 'Cohydro', sector: '綜合石油與天然氣' },
                { name: 'Feronia', sector: '民生必需品、食品生產' }
            ],
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
        en: {
            title: 'Democratic Republic of the Congo',
            subtitle: 'Includes historical data for the Democratic Republic of the Congo\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'War and Political Instability Hinder Economic Potential',
            descParagraphs: [
                'The Democratic Republic of the Congo (DRC) is the second-largest country in Sub-Saharan Africa, with a rapidly growing population of over 100 million. The nation is endowed with exceptional natural resources, including vast deposits of copper, cobalt, diamonds, and gold; enormous hydroelectric potential; expansive fertile lands; rich biodiversity, and the world\'s second-largest tropical rainforest. Its strategic location in the heart of Africa makes it an attractive potential destination for foreign investors.',
                'Despite these advantages, the country is still recovering from a series of civil wars that erupted in the 1990s and claimed up to 6 million lives. Instability, violence, and weak rule of law continue to hinder its economic development. Inadequate transport, energy, and telecom infrastructure, combined with some of the highest poverty rates in the world, further constrain the nation from realizing its full socio-economic potential.'
            ],
            table: {
                gov: 'Semi-presidential republic',
                capital: 'Kinshasa',
                ratings: 'S&P: B–<br>Moody\'s: B3<br>Fitch: Unrated',
                pop: '103.2 million',
                age: '15.6',
                income: '3,050.40',
                gdp: '73.8 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18716638/embed#?secret=1j26i3l2MV" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18592469/embed#?secret=jhrqNQ5zyC" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$13.3 billion (2023)',
                leadingExports: 'Copper<br>Cobalt<br>Crude Petroleum<br>Tin<br>Diamonds',
                imports: '$22.5 billion (2022)',
                leadingImports: 'Packaged Medicaments<br>Refined Petroleum<br>Sulfuric Acid<br>Stone Processing Machines<br>Delivery Trucks',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18691606/embed#?secret=9e1G2PPkI7" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Rawbank', sector: 'Financials' },
                { name: 'Kibali Gold Mine', sector: 'Materials, Metals & Mining' },
                { name: 'Gécamines', sector: 'Materials, Metals & Mining' },
                { name: 'Altech Group', sector: 'Utilities' },
                { name: 'Equity Banque Commerciale du Congo', sector: 'Financials' },
                { name: 'Cohydro', sector: 'Integrated Oil & Gas' },
                { name: 'Feronia', sector: 'Consumer Staples, Food Production' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '27%' },
                    { country: 'South Africa', percent: '13%' },
                    { country: 'United States', percent: '9%' },
                    { country: 'India', percent: '7%' },
                    { country: 'United Arab Emirates', percent: '4%' }
                ],
                export: [
                    { country: 'China', percent: '47%' },
                    { country: 'Tanzania', percent: '9%' },
                    { country: 'South Africa', percent: '9%' },
                    { country: 'Singapore', percent: '9%' },
                    { country: 'Zambia', percent: '6%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'Somalia': {
        ranking: '8',
        flagUrl: 'https://flagcdn.com/w160/so.png',
        zh: {
            title: '索馬利亞 (Somalia)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18609766/embed#?secret=qYmGDGH7zM" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '40 億美元 (2023)',
                leadingExports: '黃金<br>綿羊<br>山羊<br>芝麻<br>昆蟲樹脂<br>牛',
                imports: '7 億美元 (2022)',
                leadingImports: '香菸<br>原糖<br>稻米<br>廣播設備<br>紡織品',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18702567/embed#?secret=Uay71vReUJ" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'International Bank of Somalia', sector: '金融業' },
                { name: 'Salaam Somali Bank', sector: '金融業' },
                { name: 'Premier Bank', sector: '金融業' },
                { name: 'Hormuud', sector: '電信服務' },
                { name: 'Trans-National Industrial Electricity and Gas Company', sector: '公用事業' },
                { name: 'Somaliland Beverage Industries', sector: '民生必需品、飲料' }
            ]
        },
        en: {
            title: 'Somalia',
            subtitle: 'Includes historical data for Somalia\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Instability Undermines Economic Potential',
            descParagraphs: [
                'Since gaining independence in 1960, Somalia has faced profound turbulence, including the overthrow of its government in 1991, which led to decades of civil war and anarchy. Amid political fragmentation, ongoing conflict, a humanitarian crisis, and challenges from Al-Shabab insurgents in the south, efforts to foster social and governance stability are still ongoing. Agriculture, livestock, and fishing remain the backbone of the economy.',
                'Despite growth potential across various sectors, such as energy, digital technology, education, and health, the business environment is unconducive to attracting investment and fostering innovation. The country\'s living standards rank among the lowest globally, with many Somalis relying on remittances and international aid to sustain their livelihoods.'
            ],
            table: {
                gov: 'Federal parliamentary republic',
                capital: 'Mogadishu',
                ratings: 'S&P: Unrated<br>Moody\'s: Unrated<br>Fitch: Unrated',
                pop: '16.5 million',
                age: '15.3',
                income: '3,343.25',
                gdp: '12.8 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18609766/embed#?secret=qYmGDGH7zM" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$4.0 billion (2023)',
                leadingExports: 'Gold<br>Sheep<br>Goats<br>Sesame<br>Insect Resins<br>Cattle',
                imports: '$700 million (2022)',
                leadingImports: 'Cigarettes<br>Raw Sugar<br>Rice<br>Broadcasting Equipment<br>Textiles',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18702567/embed#?secret=Uay71vReUJ" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'International Bank of Somalia', sector: 'Financials' },
                { name: 'Salaam Somali Bank', sector: 'Financials' },
                { name: 'Premier Bank', sector: 'Financials' },
                { name: 'Hormuud', sector: 'Telecom Services' },
                { name: 'Trans-National Industrial Electricity and Gas Company', sector: 'Utilities' },
                { name: 'Somaliland Beverage Industries', sector: 'Consumer Staples, Beverages' }
            ]
        }
    },
    'Liberia': {
        ranking: '9',
        flagUrl: 'https://flagcdn.com/w160/lr.png',
        zh: {
            title: '賴比瑞亞 (Liberia)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18822605/embed#?secret=v21S4L4fAk" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18595742/embed#?secret=IqnErycINu" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '263 億美元 (2023)',
                leadingExports: '黃金<br>船舶<br>鐵<br>橡膠<br>可可豆<br>棕櫚油',
                imports: '20 億美元 (2022)',
                leadingImports: '船舶<br>精煉石油<br>鐵製結構<br>船用螺旋槳<br>離心機',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18692431/embed#?secret=06uj5RXUiz" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            }
        },
        en: {
            title: 'Liberia',
            subtitle: 'Includes historical data for Liberia\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'An Economy Driven by Remittances and Abundant Natural Resources',
            descParagraphs: [
                'Liberia\'s economy is slowly recovering from a devastating civil war that spanned over a decade and ended in 2003. Despite numerous challenges, the country is rich in natural resources, including mining, agriculture, fishing, and forestry. Liberia also benefits from massive remittances from its diaspora and its membership in the Economic Community of West African States (ECOWAS), which promotes regional trade and cooperation. However, its recent and fragile democracy has yet to reach pre-war development levels.',
                'Moreover, Liberia\'s commodity-based economy relies heavily on imports to meet basic needs such as clothing, fuel, and its primary staple, rice. Unreliable power supply, poor road conditions, and a lack of reliable internet access pose significant hurdles to its transition into a modernized market economy.'
            ],
            table: {
                gov: 'Presidential republic',
                capital: 'Monrovia',
                ratings: 'S&P: Unrated<br>Moody\'s: Unrated<br>Fitch: Unrated',
                pop: '5.6 million',
                age: '18.5',
                income: '3,382.10',
                gdp: '4.8 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18822605/embed#?secret=v21S4L4fAk" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18595742/embed#?secret=IqnErycINu" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$26.3 billion (2023)',
                leadingExports: 'Gold<br>Ships<br>Iron<br>Rubber<br>Cocoa Beans<br>Palm Oil',
                imports: '$2.0 billion (2022)',
                leadingImports: 'Ships<br>Refined Petroleum<br>Iron Structures<br>Marine Propellers<br>Centrifuges',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18692431/embed#?secret=06uj5RXUiz" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            }
        }
    },
    // ================= 亞洲 =================
    'Taiwan': {
        ranking: '178',
        flagUrl: 'https://flagcdn.com/w160/tw.png',
        zh: {
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17521134/embed#?secret=SrZT1yDxHi" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17519060/embed#?secret=VqDmQkZxkT" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '無資料 (2024)',
                leadingExports: '積體電路<br>機械零件<br>電腦<br>廣播設備<br>塑膠',
                imports: '無資料 (2024)',
                leadingImports: '積體電路<br>原油<br>機械<br>天然氣<br>煤炭',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17502464/embed#?secret=b13w6KJwSe" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
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
        en: {
            title: 'Taiwan',
            subtitle: 'Includes historical data for Taiwan\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Dominating The Global Semiconductor Industry',
            descParagraphs: [
                'Taiwan is one of the world\'s top 20 economies in terms of GDP and the global leader in semiconductor manufacturing, contributing over 60% of the world\'s raw semiconductors and more than 90% of the most advanced ones.',
                'A crucial locus for regional and global trade and investment, Taiwan, with a population of around 23 million and a highly skilled labor force of roughly half that, boasts a well-developed institutional framework, a wide range of financial services, and attractive incentives for foreign investors. Challenges include over-reliance on the technology sector and mainland Chinese demand, an aging population and tenuous diplomatic status.'
            ],
            table: {
                gov: 'Democracy',
                capital: 'Taipei',
                ratings: 'S&P: AA+<br>Moody\'s: Aa3<br>Fitch: AA-',
                pop: '23.3 million',
                age: '44.79',
                income: '86,794.95',
                gdp: '884.4 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17521134/embed#?secret=SrZT1yDxHi" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17519060/embed#?secret=VqDmQkZxkT" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: 'n/a (2024)',
                leadingExports: 'Integrated Circuits<br>Machine Parts<br>Computers<br>Broadcasting Equipment<br>Plastics',
                imports: 'n/a (2024)',
                leadingImports: 'Integrated Circuits<br>Crude Petroleum<br>Machinery<br>Natural Gas<br>Coal',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17502464/embed#?secret=b13w6KJwSe" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Bank of Taiwan', sector: 'Financials' },
                { name: 'Taiwan Semiconductor Manufacturing Company', sector: 'Technology, Semiconductors' },
                { name: 'MediaTek', sector: 'Technology, Semiconductors' },
                { name: 'Hon Hai Precision Industry', sector: 'Technology, Electronics Manufacturing Services' },
                { name: 'Quanta Computer Inc.', sector: 'Technology, Hardware & Equipment' },
                { name: 'Cathay Financial Holding', sector: 'Conglomerates, Financials, Insurance' },
                { name: 'Evergreen Marine Corp.', sector: 'Transportation, Shipping & Ports' }
            ]
        }
    },
    'China': {
        ranking: '114',
        flagUrl: 'https://flagcdn.com/w160/cn.png',
        zh: {
            title: '中國 (China)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17491692/embed#?secret=8ctSNJrP1B" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17492860/embed#?secret=hLn5M8paFA" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '3.58 兆美元 (2024)',
                leadingExports: '廣播設備<br>電腦<br>積體電路<br>服飾與成衣<br>機器零件',
                imports: '2.59 兆美元 (2024)',
                leadingImports: '原油<br>積體電路<br>鐵礦砂<br>天然氣<br>黃金',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17489934/embed#?secret=QUHGrCFDGW" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: '中國工商銀行 (ICBC)', sector: '金融業' },
                { name: '中國石化 (Sinopec)', sector: '能源、綜合石油與天然氣' },
                { name: '騰訊控股 (Tencent Holdings)', sector: '科技、通訊服務' },
                { name: '阿里巴巴 (Alibaba)', sector: '非必需消費品' },
                { name: '中國移動 (China Mobile)', sector: '電信服務' },
                { name: '中國平安保險集團 (Ping An Insurance Group)', sector: '金融業、保險業' },
                { name: '中國石油 (PetroChina)', sector: '能源、勘探與生產' }
            ],
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
        en: {
            title: 'China',
            subtitle: 'Includes historical data for China\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'The World\'s Second Largest Economy',
            descParagraphs: [
                'Backed by a massive labor market, China has been a key player in the global economic landscape for decades. Since the late 1970s, China has experienced an average annual Gross Domestic Product (GDP) growth rate of over 9%. During this period, more than 800 million people have been lifted out of poverty and enjoy better access to health, education, and employment. In recent years, China has continually expanded its influence in emerging and developing nations through initiatives like the Belt and Road Initiative (BRI).',
                'Meanwhile, China is typically the world\'s second-largest destination for foreign direct investment (FDI), trailing only the US. As an upper-middle-income country, China is rapidly transitioning from a low-cost manufacturing economy to a high value-added, innovation-driven economy. An aging population, trade and tech rivalry with the US, slowing economic growth, and shifting global supply chain dynamics are some of the challenges China currently faces.'
            ],
            table: {
                gov: 'One-party state',
                capital: 'Beijing',
                ratings: 'S&P: A+<br>Moody\'s: A1<br>Fitch: A+',
                pop: '1.4 billion',
                age: '40',
                income: '27,582',
                gdp: '19.4 trillion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17491692/embed#?secret=8ctSNJrP1B" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17492860/embed#?secret=hLn5M8paFA" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$3.58 trillion (2024)',
                leadingExports: 'Broadcasting Equipment<br>Computers<br>Integrated Circuits<br>Apparel and Clothing<br>Machine Parts',
                imports: '$2.59 trillion (2024)',
                leadingImports: 'Crude Petroleum<br>Integrated Circuits<br>Iron Ore<br>Natural Gas<br>Gold',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17489934/embed#?secret=QUHGrCFDGW" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Industrial and Commercial Bank of China (ICBC)', sector: 'Financials' },
                { name: 'Sinopec', sector: 'Energy, Integrated Oil & Gas' },
                { name: 'Tencent Holdings', sector: 'Technology, Communication Services' },
                { name: 'Alibaba', sector: 'Consumer Discretionary' },
                { name: 'China Mobile', sector: 'Telecom Services' },
                { name: 'Ping An Insurance Group', sector: 'Financials, Insurance' },
                { name: 'PetroChina', sector: 'Energy, Exploration & Production' }
            ],
            tradePartners: {
                import: [
                    { country: 'Other Asia', percent: '7.8%' },
                    { country: 'United States', percent: '6.46%' },
                    { country: 'South Korea', percent: '6.33%' },
                    { country: 'Japan', percent: '6.28%' },
                    { country: 'Australia', percent: '6.09%' }
                ],
                export: [
                    { country: 'United States', percent: '14.83%' },
                    { country: 'Hong Kong SAR', percent: '8.12%' },
                    { country: 'Japan', percent: '4.66%' },
                    { country: 'South Korea', percent: '4.41%' },
                    { country: 'Vietnam', percent: '4.07%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'Yemen': {
        ranking: '4',
        flagUrl: 'https://flagcdn.com/w160/ye.png',
        zh: {
            title: '葉門 (Yemen)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/23375173/embed#?secret=Lbg6scp9eW" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/19627397/embed#?secret=gAU3Nmcj2I" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '2.29 億美元 (2024)',
                leadingExports: '原油<br>廢鐵<br>黃金<br>魚類<br>貝類',
                imports: '43.5 億美元 (2024)',
                leadingImports: '小麥<br>生鐵條<br>稻米<br>服飾<br>牛奶',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/19628027/embed#?secret=MW2KhJt2M7" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Tadhamon Bank', sector: '金融業' },
                { name: 'Yemen Mobile', sector: '電信服務' },
                { name: 'Felix Airway', sector: '航空業' },
                { name: 'Safer E&P Operations', sector: '綜合石油與天然氣' },
                { name: 'National Cement Company', sector: '原物料、建築產品' },
                { name: 'Hayel Saeed Anam Group', sector: '綜合企業、房地產、食品、貿易' },
                { name: 'Yemen TV', sector: '媒體、廣播' }
            ],
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
        en: {
            title: 'Yemen',
            subtitle: 'Includes historical data for Yemen\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'War Destroys Economic Potential',
            descParagraphs: [
                'This nation of over 40 million people is one of the poorest on the Arabian Peninsula and has been deeply embroiled in conflict since late 2014, owing to a power struggle between the Saudi-backed government and Houthi rebels, and the subsequent fragmentation of power among multiple armed groups. The war has triggered a devastating humanitarian crisis, decimated the economy, and destroyed critical infrastructure. Even before the conflict erupted, corruption was widespread, poverty and unemployment rates were chronically high, and access to electricity, water, education, and healthcare was severely limited.',
                'Despite this, the World Bank sees a potential path to growth, albeit an extremely narrow one. Yemen possesses rich but largely untapped oil resources: if a lasting ceasefire can be reached among the warring parties, coupled with the reopening of major transport routes and improved integration with regional and global trade markets, it would help reignite economic development and stability.'
            ],
            table: {
                gov: 'Parliamentary republic',
                capital: 'Sanaa',
                ratings: 'S&P: Unrated<br>Moody\'s: Unrated<br>Fitch Ratings: Unrated',
                pop: '41.8 million',
                age: '18.3',
                income: '2,197.88',
                gdp: '17.4 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/23375173/embed#?secret=Lbg6scp9eW" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/19627397/embed#?secret=gAU3Nmcj2I" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$229 million (2024)',
                leadingExports: 'Crude Petroleum<br>Scrap Iron<br>Gold<br>Fish<br>Molluscs',
                imports: '$4.35 billion (2024)',
                leadingImports: 'Wheat<br>Pig Iron Bars<br>Rice<br>Apparel<br>Milk',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/19628027/embed#?secret=MW2KhJt2M7" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Tadhamon Bank', sector: 'Financials' },
                { name: 'Yemen Mobile', sector: 'Telecom Services' },
                { name: 'Felix Airway', sector: 'Aviation' },
                { name: 'Safer E&P Operations', sector: 'Integrated Oil & Gas' },
                { name: 'National Cement Company', sector: 'Materials, Building Products' },
                { name: 'Hayel Saeed Anam Group', sector: 'Conglomerates, Real Estate, Food, Trade' },
                { name: 'Yemen TV', sector: 'Media, Broadcasting' }
            ],
            tradePartners: {
                import: [
                    { country: 'United Arab Emirates', percent: '24%' },
                    { country: 'China', percent: '10%' },
                    { country: 'Saudi Arabia', percent: '6%' },
                    { country: 'Unspecified', percent: '6%' },
                    { country: 'Oman', percent: '5%' }
                ],
                export: [
                    { country: 'Egypt', percent: '50%' },
                    { country: 'Turkey', percent: '28%' },
                    { country: 'Oman', percent: '11%' },
                    { country: 'Sudan', percent: '9%' },
                    { country: 'Eritrea', percent: '1%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'Bangladesh': {
        ranking: '62',
        flagUrl: 'https://flagcdn.com/w160/bd.png',
        zh: {
            title: '孟加拉 (Bangladesh)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17488208/embed#?secret=dJX1WAbhrB" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17492084/embed#?secret=ZnuGPagROS" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '414 億美元 (2024)',
                leadingExports: '服飾<br>鞋類<br>布料<br>紡織品<br>行李箱與旅行箱',
                imports: '630 億美元 (2024)',
                leadingImports: '精煉石油<br>棉布<br>天然氣',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17489864/embed#?secret=v2SDAXq3Ks" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Sonali Bank', sector: '金融業' },
                { name: 'Square Pharmaceuticals', sector: '醫療保健' },
                { name: 'Petrobangla', sector: '能源、探勘與生產' },
                { name: 'Bangladesh Steel Corporation', sector: '原物料' },
                { name: 'Walton Hi-Tech Industries', sector: '消費性電子產品與家電' },
                { name: 'Janata Bank Limited', sector: '金融業' },
                { name: 'Grameenphone Bangladesh', sector: '電信服務' }
            ],
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
        en: {
            title: 'Bangladesh',
            subtitle: 'Includes historical data for Bangladesh\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Booming Economy but Challenges Remain',
            descParagraphs: [
                'Bangladesh\'s economic landscape presents an interplay of strengths and challenges. The nation of roughly 170 million people has made remarkable progress, leaping from one of the world\'s poorest countries at its founding in 1971 to lower-middle-income status in 2015. Key strengths include favorable demographics, robust apparel exports, massive remittance inflows, and the promotion of financial inclusion through microfinance and mobile services.',
                'However, myriad challenges—from cumbersome administrative procedures and corruption to poor infrastructure and climate vulnerability—continue to deter foreign investment and undermine the government\'s efforts to achieve upper-middle-income status by 2031.'
            ],
            table: {
                gov: 'Parliamentary republic',
                capital: 'Dhaka',
                ratings: 'S&P: B+<br>Moody\'s: B2<br>Fitch: B+',
                pop: '173.7 million',
                age: '25.98',
                income: '14,621.11',
                gdp: '475.0 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17488208/embed#?secret=dJX1WAbhrB" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17492084/embed#?secret=ZnuGPagROS" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$41.4 billion (2024)',
                leadingExports: 'Apparel<br>Footwear<br>Fabric<br>Textiles<br>Luggage and Trunks',
                imports: '$63.0 billion (2024)',
                leadingImports: 'Refined Petroleum<br>Cotton Fabric<br>Natural Gas',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17489864/embed#?secret=v2SDAXq3Ks" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Sonali Bank', sector: 'Financials' },
                { name: 'Square Pharmaceuticals', sector: 'Healthcare' },
                { name: 'Petrobangla', sector: 'Energy, Exploration & Production' },
                { name: 'Bangladesh Steel Corporation', sector: 'Materials' },
                { name: 'Walton Hi-Tech Industries', sector: 'Consumer Electronics & Appliances' },
                { name: 'Janata Bank Limited', sector: 'Financials' },
                { name: 'Grameenphone Bangladesh', sector: 'Telecom Services' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '21.5%' },
                    { country: 'India', percent: '12.2%' },
                    { country: 'Singapore', percent: '9.19%' },
                    { country: 'Hong Kong SAR', percent: '5.5%' },
                    { country: 'Indonesia', percent: '4.6%' }
                ],
                export: [
                    { country: 'United States', percent: '19.3%' },
                    { country: 'Germany', percent: '14.7%' },
                    { country: 'United Kingdom', percent: '11%' },
                    { country: 'Spain', percent: '5.8%' },
                    { country: 'France', percent: '5.5%' }
                ],
                source: 'Source: IMF, CIA The World Factbook'
            }
        }
    },
    'India': {
        ranking: '67',
        flagUrl: 'https://flagcdn.com/w160/in.png',
        zh: {
            title: '印度 (India)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17488208/embed#?secret=Bpd3UlIjEe" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17505804/embed#?secret=boz5NEl5n4" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '4,425 億美元 (2024)',
                leadingExports: '精煉石油<br>鑽石<br>包裝藥品<br>廣播設備<br>服飾與成衣',
                imports: '7,179 億美元 (2024)',
                leadingImports: '原油<br>黃金<br>煤炭<br>天然氣<br>積體電路',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17501898/embed#?secret=qmQYZicpDB" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Reliance Industries Limited', sector: '能源、勘探與生產' },
                { name: 'Infosys', sector: '科技、IT 服務' },
                { name: 'Tata Steel', sector: '原物料' },
                { name: 'Tata Motors', sector: '工業、汽車' },
                { name: 'Adani Enterprises', sector: '多元化工業' },
                { name: 'State Bank of India', sector: '金融業' },
                { name: 'HDFC Bank', sector: '金融業' }
            ],
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
        en: {
            title: 'India',
            subtitle: 'Includes historical data for India\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'A Rising Economic Powerhouse',
            descParagraphs: [
                'Projected to become the world\'s third-largest economy by the end of the decade, trailing only the US and China, India benefits from a massive and increasingly skilled workforce, rapid industrialization, and favorable shifts in global supply chain dynamics. While its regulatory framework remains cumbersome, recent reforms have improved the business environment by easing foreign investment restrictions and simplifying tax provisions.',
                'Although India boasts a highly diversified economy with exports ranging from petroleum products and agriculture to pharmaceuticals, it still relies on coal for about 70% of its electricity generation needs, posing a major challenge to its pursuit of sustainable development.'
            ],
            table: {
                gov: 'Parliamentary republic',
                capital: 'New Delhi',
                ratings: 'S&P: BBB–<br>Moody\'s: Baa3<br>Fitch: BBB–',
                pop: '1.4 billion',
                age: '28.8',
                income: '13,656.82',
                gdp: '4.1 trillion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17488208/embed#?secret=Bpd3UlIjEe" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17505804/embed#?secret=boz5NEl5n4" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$442.5 billion (2024)',
                leadingExports: 'Refined Petroleum<br>Diamonds<br>Packaged Medicaments<br>Broadcasting Equipment<br>Apparel and Clothing',
                imports: '$717.9 billion (2024)',
                leadingImports: 'Crude Petroleum<br>Gold<br>Coal<br>Natural Gas<br>Integrated Circuits',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17501898/embed#?secret=qmQYZicpDB" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Reliance Industries Limited', sector: 'Energy, Exploration & Production' },
                { name: 'Infosys', sector: 'Technology, IT Services' },
                { name: 'Tata Steel', sector: 'Materials' },
                { name: 'Tata Motors', sector: 'Industrials, Automobiles' },
                { name: 'Adani Enterprises', sector: 'Diversified Industrials' },
                { name: 'State Bank of India', sector: 'Financials' },
                { name: 'HDFC Bank', sector: 'Financials' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '18.2%' },
                    { country: 'Russia', percent: '9.98%' },
                    { country: 'United States', percent: '6.27%' },
                    { country: 'United Arab Emirates', percent: '5.59%' },
                    { country: 'Saudi Arabia', percent: '5.15%' }
                ],
                export: [
                    { country: 'United States', percent: '17.57%' },
                    { country: 'United Arab Emirates', percent: '7.65%' },
                    { country: 'Netherlands', percent: '5.36%' },
                    { country: 'China', percent: '3.77%' },
                    { country: 'United Kingdom', percent: '2.89%' }
                ],
                source: 'Source: IMF, CIA The World Factbook'
            }
        }
    },
    'Japan': {
        ranking: '150',
        flagUrl: 'https://flagcdn.com/w160/jp.png',
        zh: {
            title: '日本 (Japan)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17521134/embed#?secret=cXwBoubCPZ" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17506887/embed#?secret=GDj5AteruR" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '7,170 億美元 (2023)',
                leadingExports: '汽車<br>車輛零件<br>積體電路<br>半導體製造設備<br>客船',
                imports: '7,560 億美元 (2023)',
                leadingImports: '原油<br>石油氣<br>煤炭<br>廣播設備<br>積體電路',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17703638/embed#?secret=SyLsdv3ovi" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: '豐田汽車 (Toyota Motor)', sector: '非必需消費品、汽車' },
                { name: '索尼 (Sony)', sector: '非必需消費品、科技' },
                { name: '三菱UFJ金融集團 (Mitsubishi UFJ Financial Group)', sector: '金融業' },
                { name: '本田汽車 (Honda Motor)', sector: '非必需消費品、汽車' },
                { name: '軟銀集團 (SoftBank Group)', sector: '通訊服務、投資' },
                { name: '日立 (Hitachi)', sector: '工業、科技' },
                { name: '三井住友金融集團 (Sumitomo Mitsui Financial Group)', sector: '金融業' }
            ],
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
        en: {
            title: 'Japan',
            subtitle: 'Includes historical data for Japan\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Advanced Economy Navigating an Aging Population',
            descParagraphs: [
                'As the world\'s fourth-largest economy, Japan is renowned for its highly developed manufacturing sector, technological innovation, and strong export-oriented economy. Despite lacking abundant natural resources, Japan leverages a highly skilled workforce and advanced technology to maintain global leadership in industries such as automobiles, electronics, robotics, and precision equipment.',
                'However, the Japanese economy has long faced the severe challenge of a rapidly aging population and declining birth rate, leading to labor shortages and immense pressure on its social welfare system. After years of deflation and low economic growth, the Bank of Japan has recently begun to gradually adjust its historic accommodative monetary policy. Despite these internal structural challenges and the impact of volatile global supply chains, Japan maintains a highly stable business environment and its status as a premier destination for foreign investment globally.'
            ],
            table: {
                gov: 'Parliamentary constitutional monarchy',
                capital: 'Tokyo',
                ratings: 'S&P: A+<br>Moody\'s: A1<br>Fitch: A',
                pop: '124 million',
                age: '49.5',
                income: '33,800',
                gdp: '4.2 trillion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17521134/embed#?secret=cXwBoubCPZ" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17506887/embed#?secret=GDj5AteruR" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$717.0 billion (2023)',
                leadingExports: 'Cars<br>Vehicle Parts<br>Integrated Circuits<br>Semiconductor Manufacturing Equipment<br>Passenger Ships',
                imports: '$756.0 billion (2023)',
                leadingImports: 'Crude Petroleum<br>Petroleum Gas<br>Coal<br>Broadcasting Equipment<br>Integrated Circuits',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17703638/embed#?secret=SyLsdv3ovi" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Toyota Motor', sector: 'Consumer Discretionary, Automobiles' },
                { name: 'Sony', sector: 'Consumer Discretionary, Technology' },
                { name: 'Mitsubishi UFJ Financial Group', sector: 'Financials' },
                { name: 'Honda Motor', sector: 'Consumer Discretionary, Automobiles' },
                { name: 'SoftBank Group', sector: 'Communication Services, Investments' },
                { name: 'Hitachi', sector: 'Industrials, Technology' },
                { name: 'Sumitomo Mitsui Financial Group', sector: 'Financials' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '21.0%' },
                    { country: 'United States', percent: '10.3%' },
                    { country: 'Australia', percent: '9.8%' },
                    { country: 'South Korea', percent: '4.6%' },
                    { country: 'United Arab Emirates', percent: '4.3%' }
                ],
                export: [
                    { country: 'United States', percent: '20.1%' },
                    { country: 'China', percent: '17.6%' },
                    { country: 'South Korea', percent: '7.1%' },
                    { country: 'Taiwan', percent: '5.6%' },
                    { country: 'Hong Kong SAR', percent: '4.6%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'Saudi Arabia': {
        ranking: '158',
        flagUrl: 'https://flagcdn.com/w160/sa.png',
        zh: {
            title: '沙烏地阿拉伯 (Saudi Arabia)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/23375173/embed#?secret=BvbuCRiIdE" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/19583232/embed#?secret=WF4E4D1OPA" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '3,055 億美元 (2024)',
                leadingExports: '原油<br>精煉石油<br>乙烯聚合物<br>塑膠<br>肥料',
                imports: '2,328.1 億美元 (2024)',
                leadingImports: '汽車<br>廣播設備<br>服飾與成衣<br>黃金<br>精煉石油',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/19581892/embed#?secret=qqr1arO1RH" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: '沙烏地阿美 (Saudi Aramco)', sector: '能源、勘探與生產' },
                { name: '沙烏地國家銀行 (The Saudi National Bank)', sector: '金融業' },
                { name: '拉吉希銀行 (Al Rajhi Bank)', sector: '金融業' },
                { name: '利雅德銀行 (Riyad Bank)', sector: '金融業' },
                { name: '國際水務及電力公司 (ACWA Power)', sector: '公用事業' },
                { name: '沙烏地電信 (Saudi Telecom)', sector: '電信服務' },
                { name: '沙烏地阿拉伯礦業公司 (Saudi Arabian Mining)', sector: '原物料、金屬與採礦' }
            ],
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
        en: {
            title: 'Saudi Arabia',
            subtitle: 'Includes historical data for Saudi Arabia\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Economy Still Driven by Hydrocarbons',
            descParagraphs: [
                'As a major oil producer holding more than 15% of the world\'s proven reserves, Saudi Arabia is undergoing a major economic transformation under its "Vision 2030" plan. The initiative aims to diversify the economy and reduce dependence on oil, which currently accounts for about two-thirds of public revenues and 75% of exports. Consequently, the government\'s focus is on enhancing the quality of human capital, improving public administration efficiency, and attracting foreign investment.',
                'The country is a booming transport and logistics hub connecting Asia, Europe, and Africa; however, foreign investors still harbor concerns regarding transparency, political risks, and state intervention in the economy.'
            ],
            table: {
                gov: 'Absolute monarchy',
                capital: 'Riyadh',
                ratings: 'S&P: A+<br>Moody\'s: Aa3<br>Fitch: A+',
                pop: '36.0 million',
                age: '29.6',
                income: '81,848.10',
                gdp: '1.268 trillion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/23375173/embed#?secret=BvbuCRiIdE" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/19583232/embed#?secret=WF4E4D1OPA" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$305.5 billion (2024)',
                leadingExports: 'Crude Petroleum<br>Refined Petroleum<br>Ethylene Polymers<br>Plastics<br>Fertilizers',
                imports: '$232.81 billion (2024)',
                leadingImports: 'Cars<br>Broadcasting Equipment<br>Apparel and Clothing<br>Gold<br>Refined Petroleum',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/19581892/embed#?secret=qqr1arO1RH" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Saudi Aramco', sector: 'Energy, Exploration & Production' },
                { name: 'The Saudi National Bank', sector: 'Financials' },
                { name: 'Al Rajhi Bank', sector: 'Financials' },
                { name: 'Riyad Bank', sector: 'Financials' },
                { name: 'ACWA Power', sector: 'Utilities' },
                { name: 'Saudi Telecom', sector: 'Telecom Services' },
                { name: 'Saudi Arabian Mining', sector: 'Materials, Metals & Mining' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '20%' },
                    { country: 'United States', percent: '11%' },
                    { country: 'United Arab Emirates', percent: '8%' },
                    { country: 'India', percent: '5%' },
                    { country: 'Germany', percent: '5%' }
                ],
                export: [
                    { country: 'Unspecified', percent: '60%' },
                    { country: 'United Arab Emirates', percent: '5%' },
                    { country: 'China', percent: '4%' },
                    { country: 'India', percent: '3%' },
                    { country: 'Egypt', percent: '3%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    // ================= 美洲 =================
    'Brazil': {
        ranking: '104',
        flagUrl: 'https://flagcdn.com/w160/br.png',
        zh: {
            title: '巴西 (Brazil)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18009771/embed#?secret=pRH3MicFw6" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17991478/embed#?secret=R6PQdKXbjx" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '2,417 億美元 (2023)',
                leadingExports: '鐵<br>大豆<br>原油<br>糖<br>家禽肉類',
                imports: '3,744 億美元 (2022)',
                leadingImports: '精煉石油<br>汽車零件<br>原油<br>積體電路<br>農藥',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18044181/embed#?secret=7z07cWGM3C" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Petrobras', sector: '石油與天然氣探勘與生產' },
                { name: 'Vale', sector: '原物料、金屬與採礦' },
                { name: 'Ambev', sector: '民生必需品、啤酒釀造' },
                { name: 'JBS Foods', sector: '民生必需品、肉類加工' },
                { name: 'Cielo', sector: '金融業' },
                { name: 'Itaú Unibanco', sector: '金融業' }
            ],
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
        en: {
            title: 'Brazil',
            subtitle: 'Includes historical data for Brazil\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'A Commodity Export-Oriented Economy',
            descParagraphs: [
                'Brazil is a Latin American economic powerhouse and one of the world\'s top 10 economies by GDP. Its economic strength is built largely on the export of commodities such as soybeans, sugarcane, coffee, iron, and crude oil.',
                'Beyond finance, real estate, and services, other key sectors include automobile manufacturing, renewable energy, and construction. In most economic sectors, foreign investors enjoy the same legal rights as domestic ones. Consequently, the country has absorbed more than half of Latin America\'s total foreign direct investment in recent years. However, its economic weaknesses include state intervention in many economic areas, high levels of public debt, and cumbersome administrative procedures.'
            ],
            table: {
                gov: 'Federal presidential republic',
                capital: 'Brasília',
                ratings: 'S&P: CCC+<br>Moody\'s: Caa1<br>Fitch: CCC',
                pop: '205.4 million',
                age: '34.0',
                income: '22,707.10',
                gdp: '2.3 trillion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18009771/embed#?secret=pRH3MicFw6" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17991478/embed#?secret=R6PQdKXbjx" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$241.7 billion (2023)',
                leadingExports: 'Iron<br>Soybeans<br>Crude Petroleum<br>Sugar<br>Poultry Meat',
                imports: '$374.4 billion (2022)',
                leadingImports: 'Refined Petroleum<br>Vehicle Parts<br>Crude Petroleum<br>Integrated Circuits<br>Pesticides',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18044181/embed#?secret=7z07cWGM3C" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Petrobras', sector: 'Oil & Gas Exploration & Production' },
                { name: 'Vale', sector: 'Materials, Metals & Mining' },
                { name: 'Ambev', sector: 'Consumer Staples, Breweries' },
                { name: 'JBS Foods', sector: 'Consumer Staples, Meat Processing' },
                { name: 'Cielo', sector: 'Financials' },
                { name: 'Itaú Unibanco', sector: 'Financials' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '23%' },
                    { country: 'United States', percent: '18%' },
                    { country: 'Argentina', percent: '5%' },
                    { country: 'Germany', percent: '5%' },
                    { country: 'India', percent: '3%' }
                ],
                export: [
                    { country: 'China', percent: '31%' },
                    { country: 'United States', percent: '11%' },
                    { country: 'Argentina', percent: '4%' },
                    { country: 'Netherlands', percent: '3%' },
                    { country: 'Chile', percent: '3%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'Bolivia': {
        ranking: '66',
        flagUrl: 'https://flagcdn.com/w160/bo.png',
        zh: {
            title: '玻利維亞 (Bolivia)',
            subtitle: '包含玻利維亞的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
            descTitle: '旅遊、餐旅與房地產驅動經濟',
            descParagraphs: [
                '玻利維亞擁有豐富的礦產與農業資源，包括天然氣、黃金、鋅、白銀與鋰礦蘊藏，以及大豆與藜麥等農作物。身為自由貿易集團安第斯共同體（Andean Community）的成員，並即將成為南方共同市場（Mercosur）的正式成員，玻利維亞將其貨幣與美元掛鉤，促進了貨幣穩定。此外，該國在旅遊業、製造業與再生能源領域也具備龐大潛力。',
                '儘管具備這些優勢，玻利維亞仍面臨重大挑戰。該國經濟的多元化程度依然不足，且易受大宗商品價格波動的影響。高昂的公共債務，以及包含脆弱的司法體系與薄弱的法治在內的結構性與制度性挑戰，阻礙了經濟自由並讓外國直接投資（FDI）卻步。國家在經濟活動中日益擴張的角色、過時的勞工法規，以及童工問題，也帶來了額外的隱憂。'
            ],
            table: {
                gov: '總統制共和國',
                capital: '拉巴斯 (行政首都)；蘇克雷 (憲法首都)',
                ratings: 'S&P: B–<br>Moody\'s: Caa2<br>Fitch: 未評級',
                pop: '1,230 萬人',
                age: '24.7 歲',
                income: '15,146.02 美元',
                gdp: '493 億美元'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18070363/embed#?secret=jsUiP7hb24" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17980067/embed#?secret=LfBoxT6gv5" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '78 億美元 (2023)',
                leadingExports: '黃金<br>天然氣<br>鋅<br>白銀<br>大豆產品<br>錫',
                imports: '141 億美元 (2022)',
                leadingImports: '汽車<br>精煉石油<br>貨車<br>鐵<br>公車',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18039340/embed#?secret=BfSWyxiNGg" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            }
        },
        en: {
            title: 'Bolivia',
            subtitle: 'Includes historical data for Bolivia\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Economy Driven by Tourism, Hospitality and Real Estate',
            descParagraphs: [
                'Bolivia boasts rich mineral and agricultural resources, including reserves of natural gas, gold, zinc, silver, and lithium, as well as crops like soybeans and quinoa. As a member of the Andean Community free trade bloc, and soon to be a full member of Mercosur, Bolivia pegs its currency to the US dollar, promoting monetary stability. Furthermore, the country possesses massive potential in tourism, manufacturing, and renewable energy.',
                'Despite these advantages, Bolivia faces significant challenges. The economy remains insufficiently diversified and vulnerable to commodity price volatility. High public debt, along with structural and institutional challenges—including a fragile judicial system and weak rule of law—hinder economic freedom and deter foreign direct investment (FDI). The state\'s expanding role in economic activities, outdated labor laws, and child labor issues present additional concerns.'
            ],
            table: {
                gov: 'Presidential republic',
                capital: 'La Paz (administrative); Sucre (constitutional)',
                ratings: 'S&P: B–<br>Moody\'s: Caa2<br>Fitch: Unrated',
                pop: '12.3 million',
                age: '24.7',
                income: '15,146.02',
                gdp: '49.3 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18070363/embed#?secret=jsUiP7hb24" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17980067/embed#?secret=LfBoxT6gv5" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$7.8 billion (2023)',
                leadingExports: 'Gold<br>Natural Gas<br>Zinc<br>Silver<br>Soybean Products<br>Tin',
                imports: '$14.1 billion (2022)',
                leadingImports: 'Cars<br>Refined Petroleum<br>Delivery Trucks<br>Iron<br>Buses',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18039340/embed#?secret=BfSWyxiNGg" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            }
        }
    },
    'Haiti': {
        ranking: '18',
        flagUrl: 'https://flagcdn.com/w160/ht.png',
        zh: {
            title: '海地 (Haiti)',
            subtitle: '包含海地的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
            descTitle: '貪腐與暴力摧毀經濟發展潛能',
            descParagraphs: [
                '海地與多明尼加共和國共同位於伊斯帕尼奧拉島（Hispaniola）上，是拉丁美洲及加勒比海地區城市化程度最高的國家之一。海地經濟傳統上仰賴農業、商業與建築業，以及蓬勃發展的成衣加工業。然而，這個擁有約 1,200 萬人口的國家，如今卻面臨日益嚴重的政治動盪、貪腐與黑幫暴力問題。',
                '因此，儘管海地憑藉著年輕的人口結構及鄰近美國的戰略位置，在旅遊業、再生能源與近岸外包活動方面具備龐大潛力，但當地與外國投資者面臨的挑戰依然嚴峻。這些挑戰包含高通膨、基礎設施匱乏、官僚體系不透明、普遍的不平等現象以及技術勞工外流。此外，海地也容易遭受自然災害的侵襲。'
            ],
            table: {
                gov: '半總統制共和國',
                capital: '太子港',
                ratings: 'S&P: 未評級<br>Moody\'s: 未評級<br>Fitch: 未評級',
                pop: '1,240 萬人',
                age: '23.7 歲',
                income: '5,788.87 美元',
                gdp: '240 億美元'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18008968/embed#?secret=jfa8qpHyi2" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18008199/embed#?secret=1HW5KP3xwR" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '40 億美元 (2023)',
                leadingExports: '服飾與成衣<br>精油<br>鰻魚<br>芒果<br>廢鐵',
                imports: '13 億美元 (2022)',
                leadingImports: '精煉石油<br>稻米<br>服飾與成衣<br>家禽<br>棕櫚油',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18044290/embed#?secret=hbP7Z1oUqr" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Unibank', sector: '金融業' },
                { name: 'Natcom', sector: '電信服務' },
                { name: 'GB Group', sector: '綜合企業、原物料、民生必需品、能源' },
                { name: 'La Compagnie d\'Assurance d\'Haïti', sector: '金融業、保險業' },
                { name: 'Brasserie Nationale d\'Haïti', sector: '民生必需品、啤酒廠' },
                { name: 'Compagnie des Tabacs Comme il Faut', sector: '民生必需品、菸草' }
            ]
        },
        en: {
            title: 'Haiti',
            subtitle: 'Includes historical data for Haiti\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Corruption and Violence Destroy Economic Potential',
            descParagraphs: [
                'Sharing the island of Hispaniola with the Dominican Republic, Haiti is one of the most urbanized countries in the Latin America and Caribbean region. The Haitian economy has traditionally relied on agriculture, commerce, and construction, as well as a thriving apparel manufacturing sector. However, this nation of around 12 million people is currently facing increasingly severe political instability, corruption, and gang violence.',
                'Consequently, while Haiti holds massive potential in tourism, renewable energy, and nearshoring activities—thanks to its young demographic and strategic proximity to the US—the challenges facing local and foreign investors remain daunting. These hurdles include high inflation, poor infrastructure, an opaque bureaucracy, pervasive inequality, and an exodus of skilled labor. Furthermore, Haiti is highly susceptible to natural disasters.'
            ],
            table: {
                gov: 'Semi-presidential republic',
                capital: 'Port-au-Prince',
                ratings: 'S&P: Unrated<br>Moody\'s: Unrated<br>Fitch: Unrated',
                pop: '12.4 million',
                age: '23.7',
                income: '5,788.87',
                gdp: '24.0 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18008968/embed#?secret=jfa8qpHyi2" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18008199/embed#?secret=1HW5KP3xwR" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$4.0 billion (2023)',
                leadingExports: 'Apparel and Clothing<br>Essential Oils<br>Eels<br>Mangoes<br>Scrap Iron',
                imports: '$1.3 billion (2022)',
                leadingImports: 'Refined Petroleum<br>Rice<br>Apparel and Clothing<br>Poultry<br>Palm Oil',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18044290/embed#?secret=hbP7Z1oUqr" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Unibank', sector: 'Financials' },
                { name: 'Natcom', sector: 'Telecom Services' },
                { name: 'GB Group', sector: 'Conglomerates, Materials, Consumer Staples, Energy' },
                { name: 'La Compagnie d\'Assurance d\'Haïti', sector: 'Financials, Insurance' },
                { name: 'Brasserie Nationale d\'Haïti', sector: 'Consumer Staples, Breweries' },
                { name: 'Compagnie des Tabacs Comme il Faut', sector: 'Consumer Staples, Tobacco' }
            ]
        }
    },
    'Mexico': {
        ranking: '109',
        flagUrl: 'https://flagcdn.com/w160/mx.png',
        zh: {
            title: '墨西哥 (Mexico)',
            subtitle: '包含墨西哥的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
            descTitle: 'FDI的頂尖新興市場',
            descParagraphs: [
                '墨西哥為全球第 11 大經濟體，受惠於其戰略地理位置以及進入美國市場的優惠待遇，並擁有龐大的國內市場與日益熟練、低廉的勞動力。作為吸引外國投資者的目的地，墨西哥是新興市場中外國直接投資（FDI）的頂尖受惠國之一。政府審慎的財政政策以及作為《美墨加協定》（USMCA）的成員國身份，更提升了該國的吸引力。',
                '然而，挑戰依然存在。高度不平等、法治薄弱與安全隱患等結構性問題，加上非正規經濟的普遍存在，都阻礙了經濟發展。墨西哥還面臨高度依賴美國經濟的隱憂，且交通、醫療與教育基礎設施不足；此外，稅基狹窄，稅收佔國內生產毛額（GDP）的比例不到 20%。'
            ],
            table: {
                gov: '聯邦總統制共和國',
                capital: '墨西哥城',
                ratings: 'S&P: BBB<br>Moody\'s: Baa2<br>Fitch: BBB–',
                pop: '1 億 3,230 萬人',
                age: '30.2 歲',
                income: '27,671.79 美元',
                gdp: '2 兆美元'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18009626/embed#?secret=ALLj2I36akk" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18008319/embed#?secret=78NZDgfeSl" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '5,556 億美元 (2023)',
                leadingExports: '汽車與車輛零件<br>電腦<br>貨車<br>原油<br>影片顯示器<br>絕緣電線',
                imports: '6,058 億美元 (2022)',
                leadingImports: '積體電路<br>精煉石油<br>汽車與車輛零件<br>辦公室機械/零件<br>電話機',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18051970/embed#?secret=gQSsRmWlcs" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Grupo Financiero Banorte', sector: '金融業' },
                { name: 'Banco Mercantil del Norte', sector: '金融業' },
                { name: 'Banco Nacional de Obras y Servicios Públicos (Banobras)', sector: '金融業' },
                { name: 'América Móvil', sector: '通訊服務' },
                { name: 'Cemex', sector: '原物料、水泥' },
                { name: 'Pemex', sector: '石油與天然氣探勘及生產' }
            ],
            tradePartners: {
                import: [
                    { country: '美國', percent: '44%' },
                    { country: '中國', percent: '20%' },
                    { country: '南韓', percent: '4%' },
                    { country: '德國', percent: '3%' },
                    { country: '日本', percent: '3%' }
                ],
                export: [
                    { country: '美國', percent: '78%' },
                    { country: '未指定', percent: '5%' },
                    { country: '加拿大', percent: '3%' },
                    { country: '中國', percent: '2%' },
                    { country: '其他亞洲地區 (未指定)', percent: '2%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        },
        en: {
            title: 'Mexico',
            subtitle: 'Includes historical data for Mexico\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'A Top Emerging Market for FDI',
            descParagraphs: [
                'As the world\'s 11th largest economy, Mexico benefits from its strategic geographic location and preferential access to the US market, along with a massive domestic market and an increasingly skilled, low-cost labor force. As a destination for foreign investors, Mexico is one of the top recipients of foreign direct investment (FDI) among emerging markets. The government\'s prudent fiscal policies and its membership in the United States-Mexico-Canada Agreement (USMCA) further enhance the country\'s appeal.',
                'However, challenges remain. Structural issues such as high inequality, weak rule of law, and security concerns, combined with a pervasive informal economy, continue to hinder economic development. Mexico also faces concerns over its heavy reliance on the US economy, as well as inadequate transport, healthcare, and education infrastructure; moreover, the tax base is narrow, with tax revenues accounting for less than 20% of GDP.'
            ],
            table: {
                gov: 'Federal presidential republic',
                capital: 'Mexico City',
                ratings: 'S&P: BBB<br>Moody\'s: Baa2<br>Fitch: BBB–',
                pop: '132.3 million',
                age: '30.2',
                income: '27,671.79',
                gdp: '2.0 trillion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18009626/embed#?secret=ALLj2I36akk" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18008319/embed#?secret=78NZDgfeSl" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$555.6 billion (2023)',
                leadingExports: 'Cars and Vehicle Parts<br>Computers<br>Delivery Trucks<br>Crude Petroleum<br>Video Displays<br>Insulated Wiring',
                imports: '$605.8 billion (2022)',
                leadingImports: 'Integrated Circuits<br>Refined Petroleum<br>Cars and Vehicle Parts<br>Office Machinery/Parts<br>Telephones',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18051970/embed#?secret=gQSsRmWlcs" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Grupo Financiero Banorte', sector: 'Financials' },
                { name: 'Banco Mercantil del Norte', sector: 'Financials' },
                { name: 'Banco Nacional de Obras y Servicios Públicos (Banobras)', sector: 'Financials' },
                { name: 'América Móvil', sector: 'Communication Services' },
                { name: 'Cemex', sector: 'Materials, Cement' },
                { name: 'Pemex', sector: 'Oil & Gas Exploration & Production' }
            ],
            tradePartners: {
                import: [
                    { country: 'United States', percent: '44%' },
                    { country: 'China', percent: '20%' },
                    { country: 'South Korea', percent: '4%' },
                    { country: 'Germany', percent: '3%' },
                    { country: 'Japan', percent: '3%' }
                ],
                export: [
                    { country: 'United States', percent: '78%' },
                    { country: 'Unspecified', percent: '5%' },
                    { country: 'Canada', percent: '3%' },
                    { country: 'China', percent: '2%' },
                    { country: 'Other Asia (Unspecified)', percent: '2%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'The United States': {
        ranking: '181',
        flagUrl: 'https://flagcdn.com/w160/us.png',
        zh: {
            title: '美國 (The United States)',
            subtitle: '包含美國的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
            descTitle: '全球最具活力、最多元化的經濟體',
            descParagraphs: [
                '美國多元化且充滿活力的經濟使其成為石油、天然氣與其他礦產資源的領先生產國，研究與創新的先驅，以及農業與工業的龐然大物，同時也是頂尖的旅遊勝地。',
                '然而，該國也面臨著高昂的公共債務、兩極化的政治格局、人口老化與所得不平等等挑戰，以及在貿易、科技與全球政治影響力方面與中國的競爭。'
            ],
            table: {
                gov: '聯邦民主共和國',
                capital: '華盛頓哥倫比亞特區',
                ratings: 'S&P: AA+<br>Moody\'s: Aa1<br>Fitch: AA+',
                pop: '3 億 4,237 萬人',
                age: '38.9 歲',
                income: '89,110 美元',
                gdp: '29.18 兆美元'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/19237096/embed#?secret=h43FksQHPa" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/19236680/embed#?secret=xzPrDtsMXq" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '3.1 兆美元 (2023)',
                leadingExports: '精煉石油<br>原油<br>天然氣<br>汽車<br>積體電路',
                imports: '2.1 兆美元 (2022)',
                leadingImports: '原油<br>汽車<br>廣播設備<br>服飾與成衣<br>電腦',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/19236755/embed#?secret=aX91cdWxOq" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            }
        },
        en: {
            title: 'The United States',
            subtitle: 'Includes historical data for the United States\' Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'The World\'s Most Dynamic and Diverse Economy',
            descParagraphs: [
                'The diverse and dynamic economy of the United States makes it a leading producer of oil, gas, and other mineral resources, a pioneer in research and innovation, an agricultural and industrial behemoth, and a top tourism destination.',
                'However, the country also faces challenges such as high public debt, a polarized political landscape, an aging population, and income inequality, alongside competition with China in trade, technology, and global political influence.'
            ],
            table: {
                gov: 'Federal democratic republic',
                capital: 'Washington, D.C.',
                ratings: 'S&P: AA+<br>Moody\'s: Aa1<br>Fitch: AA+',
                pop: '342.37 million',
                age: '38.9',
                income: '89,110',
                gdp: '29.18 trillion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/19237096/embed#?secret=h43FksQHPa" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/19236680/embed#?secret=xzPrDtsMXq" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$3.1 trillion (2023)',
                leadingExports: 'Refined Petroleum<br>Crude Petroleum<br>Natural Gas<br>Cars<br>Integrated Circuits',
                imports: '$2.1 trillion (2022)',
                leadingImports: 'Crude Petroleum<br>Cars<br>Broadcasting Equipment<br>Apparel and Clothing<br>Computers',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/19236755/embed#?secret=aX91cdWxOq" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            }
        }
    },
    // ================= 大洋洲 =================
    'New Zealand': {
        ranking: '152',
        flagUrl: 'https://flagcdn.com/w160/nz.png',
        zh: {
            title: '紐西蘭 (New Zealand)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17521146/embed#?secret=UFTJ0jRVQB" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17517351/embed#?secret=Y2gECcvYMo" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '429 億美元 (2024)',
                leadingExports: '牛奶<br>木材<br>牛肉<br>奶油<br>羊肉',
                imports: '475 億美元 (2024)',
                leadingImports: '汽車<br>精煉石油<br>燃氣輪機<br>廣播設備<br>卡車',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17502099/embed#?secret=CLXHRXYc3E" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'ANZ Bank New Zealand', sector: '金融業' },
                { name: 'Kiwi Group Holdings Ltd', sector: '金融業' },
                { name: 'Fonterra Co-operative Group', sector: '民生必需品、食品' },
                { name: 'Spark New Zealand', sector: '電信服務' },
                { name: 'Fletcher Building Limited', sector: '綜合企業、金融業、消費性電子產品、飯店、餐廳與休閒' },
                { name: 'Air New Zealand Limited', sector: '交通運輸、航空業' },
                { name: 'Sky Network Television', sector: '通訊服務、媒體' }
            ],
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
        en: {
            title: 'New Zealand',
            subtitle: 'Includes historical data for New Zealand\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'From Agriculture to a Modern, Tech-Driven Economy',
            descParagraphs: [
                'Over the past fifty years, New Zealand has successfully transitioned from an agrarian economy into a more diversified, globally competitive free-market system, embracing innovation and investment in services, technology, and tourism. Today, New Zealand\'s resilient economy is characterized by a strong rule of law, a transparent and stable investment environment, and flexible regulations that foster a vibrant labor market. Additionally, with its strategic proximity to Asia and Australia, limited public debt, and excellent living standards, the country is a superb destination for foreign investment.',
                'Despite these strengths, New Zealand faces several challenges on its path toward sustainable growth, including its geographic isolation as an island nation, over-reliance on demand from China, skilled labor shortages, and endemic socioeconomic inequalities.'
            ],
            table: {
                gov: 'Parliamentary democracy under a constitutional monarchy; Commonwealth realm',
                capital: 'Wellington',
                ratings: 'S&P: AA+<br>Moody\'s: Aaa<br>Fitch: AAA',
                pop: '5.3 million',
                age: '37.7',
                income: '59,065.59',
                gdp: '262.9 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17521146/embed#?secret=UFTJ0jRVQB" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17517351/embed#?secret=Y2gECcvYMo" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$42.9 billion (2024)',
                leadingExports: 'Milk<br>Wood<br>Beef<br>Butter<br>Sheep Meat',
                imports: '$47.5 billion (2024)',
                leadingImports: 'Cars<br>Refined Petroleum<br>Gas Turbines<br>Broadcasting Equipment<br>Trucks',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17502099/embed#?secret=CLXHRXYc3E" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'ANZ Bank New Zealand', sector: 'Financials' },
                { name: 'Kiwi Group Holdings Ltd', sector: 'Financials' },
                { name: 'Fonterra Co-operative Group', sector: 'Consumer Staples, Food' },
                { name: 'Spark New Zealand', sector: 'Telecom Services' },
                { name: 'Fletcher Building Limited', sector: 'Conglomerates, Financials, Consumer Electronics, Hotels, Restaurants & Leisure' },
                { name: 'Air New Zealand Limited', sector: 'Transportation, Aviation' },
                { name: 'Sky Network Television', sector: 'Communication Services, Media' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '26.9%' },
                    { country: 'Australia', percent: '12.9%' },
                    { country: 'United States', percent: '12%' },
                    { country: 'Japan', percent: '5.53%' },
                    { country: 'South Korea', percent: '3.47%' }
                ],
                export: [
                    { country: 'China', percent: '20.73%' },
                    { country: 'Australia', percent: '10.81%' },
                    { country: 'United States', percent: '9.71%' },
                    { country: 'South Korea', percent: '7.52%' },
                    { country: 'Japan', percent: '6.82%' }
                ],
                source: 'Source: IMF, CIA The World Factbook'
            }
        }
    },
    'Australia': {
        ranking: '168',
        flagUrl: 'https://flagcdn.com/w160/au.png',
        zh: {
            title: '澳洲 (Australia)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17491692/embed#?secret=VRTAjzaqUX" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17492008/embed#?secret=vI8VCyHZjL" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '3,416 億美元 (2024)',
                leadingExports: '鐵礦砂<br>煤炭<br>天然氣<br>黃金<br>礦物',
                imports: '3,009 億美元 (2024)',
                leadingImports: '精煉石油<br>汽車<br>送貨卡車<br>廣播設備<br>服飾',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17489811/embed#?secret=sr7PbrWimI" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Commonwealth Bank of Australia', sector: '金融業' },
                { name: 'Macquarie Group', sector: '金融業' },
                { name: 'Westpac Banking Corporation', sector: '金融業' },
                { name: 'Rio Tinto', sector: '金屬與採礦' },
                { name: 'Woolworths Group', sector: '民生必需品經銷與零售' },
                { name: 'Telstra', sector: '電信服務' },
                { name: 'Wesfarmers', sector: '非必需消費品經銷與零售、肥料與農業化學品' }
            ],
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
        en: {
            title: 'Australia',
            subtitle: 'Includes historical data for Australia\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Prosperity Rooted in Proximity to Asian Economies',
            descParagraphs: [
                'Australia\'s economy thrives on open-market principles, a firm commitment to the rule of law, and transparent regulations. Bolstered by free trade agreements with all major global partners and supported by a modern banking system, Australia is welcoming to foreign investment and maintains a competitive edge in sectors like financial services, technology, and high value-added manufacturing. Aligning with its net-zero emissions targets, Australia also encourages clean technology initiatives. Furthermore, its strategic geographic proximity to rapidly growing Asian markets, coupled with abundant mineral resources, further solidifies its economic advantage.',
                'However, its weaknesses include labor market tightness leading to skill shortages, vulnerability to commodity price volatility, and uncertainties brought by climate change. Additionally, the economy is highly dependent on Chinese demand and faces inadequate infrastructure due to its vast territorial size.'
            ],
            table: {
                gov: 'Federal parliamentary democracy under a constitutional monarchy; Commonwealth realm',
                capital: 'Canberra',
                ratings: 'S&P: AAA<br>Moody\'s: Aaa<br>Fitch: AAA',
                pop: '27.74 million',
                age: '38.26',
                income: '77,543.33',
                gdp: '1.83 trillion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17491692/embed#?secret=VRTAjzaqUX" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17492008/embed#?secret=vI8VCyHZjL" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$341.6 billion (2024)',
                leadingExports: 'Iron Ore<br>Coal<br>Natural Gas<br>Gold<br>Minerals',
                imports: '$300.9 billion (2024)',
                leadingImports: 'Refined Petroleum<br>Cars<br>Delivery Trucks<br>Broadcasting Equipment<br>Apparel',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17489811/embed#?secret=sr7PbrWimI" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Commonwealth Bank of Australia', sector: 'Financials' },
                { name: 'Macquarie Group', sector: 'Financials' },
                { name: 'Westpac Banking Corporation', sector: 'Financials' },
                { name: 'Rio Tinto', sector: 'Metals & Mining' },
                { name: 'Woolworths Group', sector: 'Consumer Staples Distribution & Retail' },
                { name: 'Telstra', sector: 'Telecom Services' },
                { name: 'Wesfarmers', sector: 'Consumer Discretionary Distribution & Retail, Fertilizers & Agricultural Chemicals' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '25%' },
                    { country: 'United States', percent: '11.3%' },
                    { country: 'Japan', percent: '6.29%' },
                    { country: 'South Korea', percent: '6.29%' },
                    { country: 'Thailand', percent: '4.54%' }
                ],
                export: [
                    { country: 'China', percent: '32.56%' },
                    { country: 'Unspecified', percent: '17.3%' },
                    { country: 'Japan', percent: '9.8%' },
                    { country: 'South Korea', percent: '5.66%' },
                    { country: 'India', percent: '4.38%' }
                ],
                source: 'Source: IMF, CIA The World Factbook'
            }
        }
    },
    'Solomon Islands': {
        ranking: '13',
        flagUrl: 'https://flagcdn.com/w160/sb.png',
        zh: {
            title: '索羅門群島 (Solomon Islands)',
            subtitle: '包含索羅門群島的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
            descTitle: '農業、漁業與礦業驅動經濟',
            descParagraphs: [
                '索羅門群島曾是英國的保護國，現為大英國協王國的一員，實行議會民主制。該群島位於西南太平洋，地形涵蓋崎嶇的山峰與風景如畫的珊瑚環礁，使其成為日益受歡迎的旅遊勝地。人口約 80 萬，主要出口產品包括礦產、木材、魚類、棕櫚油與可可。政府提供優惠政策以吸引外國投資者，並聚焦於農業、礦業、漁業、旅遊業與服務業等關鍵領域。',
                '然而，該國也面臨著官僚效率低落、法規不一致、勞動力市場發展不足以及信貸取得受限等問題，這些都扼殺了商業發展的動力。此外，雖然 2022 年簽署的《中索安全合作框架協定》可能帶來經濟利益，但也引發了美國及其盟友的批評。'
            ],
            table: {
                gov: '議會民主制與君主立憲制 (大英國協王國)',
                capital: '荷尼阿拉',
                ratings: 'S&P: 未評級<br>Moody\'s: B3<br>Fitch: 未評級',
                pop: '79.8 萬人',
                age: '20.7 歲',
                income: '4,889.31 美元',
                gdp: '19 億美元'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17521146/embed#?secret=9gP8VaxQz6" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17518957/embed#?secret=jP3QL6zZQX" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '4.546 億美元 (2024)',
                leadingExports: '木材<br>魚類<br>黃金<br>貴金屬礦石<br>棕櫚油',
                imports: '6.695 億美元 (2024)',
                leadingImports: '精煉石油<br>塑膠製品<br>魚類<br>廣播設備<br>鋼鐵結構',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17502344/embed#?secret=9sg4fT7P06" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'National Provident Fund (NPF)', sector: '金融業' },
                { name: 'Solomon Islands Telekom Company', sector: '電信服務' },
                { name: 'Solomon Islands Broadcasting Authority', sector: '通訊服務、媒體' },
                { name: 'Solomon Breweries', sector: '非必需消費品' },
                { name: 'Solomon Islands Tobacco Company', sector: '民生必需品、菸草' },
                { name: 'Solomon Airlines Limited (SAL)', sector: '運輸業、航空業' }
            ],
            tradePartners: {
                import: [
                    { country: '澳洲', percent: '18.2%' },
                    { country: '新加坡', percent: '16.3%' },
                    { country: '中國', percent: '14.9%' },
                    { country: '馬來西亞', percent: '12.9%' },
                    { country: '其他亞洲國家', percent: '7.2%' }
                ],
                export: [
                    { country: '中國', percent: '66.8%' },
                    { country: '義大利', percent: '7.2%' },
                    { country: '印度', percent: '5.1%' },
                    { country: '瑞士', percent: '2.4%' },
                    { country: '泰國', percent: '2.1%' }
                ],
                source: 'Source: IMF, CIA The World Factbook'
            }
        },
        en: {
            title: 'Solomon Islands',
            subtitle: 'Includes historical data for the Solomon Islands\' Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Economy Driven by Agriculture, Fishing and Mining',
            descParagraphs: [
                'Formerly a British protectorate, the Solomon Islands is now a member of the Commonwealth realms, operating as a parliamentary democracy. Located in the southwestern Pacific, the archipelago features rugged peaks and picturesque coral atolls, making it an increasingly popular tourist destination. With a population of about 800,000, its main exports include minerals, timber, fish, palm oil, and cocoa. The government provides incentives to attract foreign investors and focuses on key sectors like agriculture, mining, fishing, tourism, and services.',
                'However, the country also faces bureaucratic inefficiencies, inconsistent regulations, an underdeveloped labor market, and limited access to credit, all of which stifle business momentum. Furthermore, while the security pact signed with China in 2022 could bring economic benefits, it has also sparked criticism from the US and its allies.'
            ],
            table: {
                gov: 'Parliamentary democracy and constitutional monarchy (Commonwealth realm)',
                capital: 'Honiara',
                ratings: 'S&P: Unrated<br>Moody\'s: B3<br>Fitch: Unrated',
                pop: '798,000',
                age: '20.7',
                income: '4,889.31',
                gdp: '1.9 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/17521146/embed#?secret=9gP8VaxQz6" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/17518957/embed#?secret=jP3QL6zZQX" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$454.6 million (2024)',
                leadingExports: 'Timber<br>Fish<br>Gold<br>Precious Metal Ores<br>Palm Oil',
                imports: '$669.5 million (2024)',
                leadingImports: 'Refined Petroleum<br>Plastic Products<br>Fish<br>Broadcasting Equipment<br>Iron/Steel Structures',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/17502344/embed#?secret=9sg4fT7P06" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'National Provident Fund (NPF)', sector: 'Financials' },
                { name: 'Solomon Islands Telekom Company', sector: 'Telecom Services' },
                { name: 'Solomon Islands Broadcasting Authority', sector: 'Communication Services, Media' },
                { name: 'Solomon Breweries', sector: 'Consumer Discretionary' },
                { name: 'Solomon Islands Tobacco Company', sector: 'Consumer Staples, Tobacco' },
                { name: 'Solomon Airlines Limited (SAL)', sector: 'Transportation, Aviation' }
            ],
            tradePartners: {
                import: [
                    { country: 'Australia', percent: '18.2%' },
                    { country: 'Singapore', percent: '16.3%' },
                    { country: 'China', percent: '14.9%' },
                    { country: 'Malaysia', percent: '12.9%' },
                    { country: 'Other Asian Countries', percent: '7.2%' }
                ],
                export: [
                    { country: 'China', percent: '66.8%' },
                    { country: 'Italy', percent: '7.2%' },
                    { country: 'India', percent: '5.1%' },
                    { country: 'Switzerland', percent: '2.4%' },
                    { country: 'Thailand', percent: '2.1%' }
                ],
                source: 'Source: IMF, CIA The World Factbook'
            }
        }
    },
    // ================= 歐洲 =================
    'Germany': {
        ranking: '169',
        flagUrl: 'https://flagcdn.com/w160/de.png',
        zh: {
            title: '德國 (Germany)',
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
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18497769/embed#?secret=9SrVbvT9fR" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18470391/embed#?secret=TV9yoIuoyW" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '1.5 兆美元 (2023)',
                leadingExports: '汽車與車輛零件<br>包裝藥品<br>醫療培養物與疫苗<br>航空器<br>工業機械<br>醫療儀器',
                imports: '1.7 兆美元 (2022)',
                leadingImports: '汽車與車輛零件<br>包裝藥品<br>廣播設備<br>醫療培養物與疫苗<br>電腦',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18499704/embed#?secret=SIo5gdhyi7" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: '安聯 (Allianz)', sector: '金融業' },
                { name: '德國商業銀行 (Commerzbank)', sector: '金融業' },
                { name: '福斯集團 (Volkswagen Group)', sector: '汽車與零組件' },
                { name: '戴姆勒 (Daimler)', sector: '汽車與零組件' },
                { name: '德國電信 (Deutsche Telekom)', sector: '媒體與通訊' },
                { name: '拜耳 (Bayer)', sector: '製藥' },
                { name: '西門子 (Siemens)', sector: '科技' }
            ],
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
        en: {
            title: 'Germany',
            subtitle: 'Includes historical data for Germany\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Europe\'s Industrial Powerhouse',
            descParagraphs: [
                'As Europe\'s largest economy, Germany boasts a mature financial sector, a highly skilled workforce, a stable regulatory environment, reliable infrastructure, and cutting-edge R&D resources. Germany wields global influence both politically and economically, consistently ranking among the world\'s top nations for foreign direct investment (FDI) inflows and outflows, as well as exports. The automotive, machinery, chemical, and electronics industries are its economic pillars.',
                'However, its weaknesses include over-reliance on trade with China and international energy imports, a heavy dependence on a narrow range of industries, and complex regulations and accounting systems that can slow down entrepreneurial activities and hinder more robust economic growth.'
            ],
            table: {
                gov: 'Federal parliamentary republic',
                capital: 'Berlin',
                ratings: 'S&P: AAA<br>Moody\'s: Aaa<br>Fitch: AAA',
                pop: '84.6 million',
                age: '45.0',
                income: '64,297.95',
                gdp: '4.6 trillion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18497769/embed#?secret=9SrVbvT9fR" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18470391/embed#?secret=TV9yoIuoyW" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$1.5 trillion (2023)',
                leadingExports: 'Cars and Vehicle Parts<br>Packaged Medicaments<br>Medical Cultures and Vaccines<br>Aircraft<br>Industrial Machinery<br>Medical Instruments',
                imports: '$1.7 trillion (2022)',
                leadingImports: 'Cars and Vehicle Parts<br>Packaged Medicaments<br>Broadcasting Equipment<br>Medical Cultures and Vaccines<br>Computers',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18499704/embed#?secret=SIo5gdhyi7" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Allianz', sector: 'Financials' },
                { name: 'Commerzbank', sector: 'Financials' },
                { name: 'Volkswagen Group', sector: 'Automobiles and Components' },
                { name: 'Daimler', sector: 'Automobiles and Components' },
                { name: 'Deutsche Telekom', sector: 'Media & Communications' },
                { name: 'Bayer', sector: 'Pharmaceuticals' },
                { name: 'Siemens', sector: 'Technology' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '12%' },
                    { country: 'Netherlands', percent: '8%' },
                    { country: 'United States', percent: '6%' },
                    { country: 'Poland', percent: '6%' },
                    { country: 'Italy', percent: '5%' }
                ],
                export: [
                    { country: 'United States', percent: '9%' },
                    { country: 'China', percent: '8%' },
                    { country: 'France', percent: '7%' },
                    { country: 'Netherlands', percent: '7%' },
                    { country: 'Poland', percent: '6%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'United Kingdom': {
        ranking: '160',
        flagUrl: 'https://flagcdn.com/w160/gb.png',
        zh: {
            title: '英國 (United Kingdom)',
            subtitle: '包含英國的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
            descTitle: '完善的銀行體系',
            descParagraphs: [
                '英國作為繁榮的商業中心，提供了有利於貿易與投資的良好環境。該國擁有開放的經濟體、龐大且高消費能力的消費市場，以及豐富的技術專業人才；同時更具備完善的銀行與保險服務、穩健的基礎設施、透明的稅制，以及在航空、製藥與汽車領域的頂尖企業。',
                '然而，英國也面臨著諸多挑戰。其中包括高昂的公共與家庭債務、通膨壓力、貿易中斷，以及英國脫歐所帶來的經濟不確定性。'
            ],
            table: {
                gov: '議會制君主立憲制；大英國協王國',
                capital: '倫敦',
                ratings: 'S&P: AA<br>Moody\'s: Aa3<br>Fitch: AA–',
                pop: '6,840 萬人',
                age: '40.3 歲',
                income: '49,463 美元',
                gdp: '3.5 兆美元'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18499004/embed#?secret=ru3bEYYleW" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18471546/embed#?secret=qp6QbBuFdR" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '7,230 億美元 (2023)',
                leadingExports: '汽車<br>黃金<br>燃氣渦輪機<br>原油<br>包裝藥品',
                imports: '4,625 億美元 (2022)',
                leadingImports: '黃金<br>汽車<br>天然氣<br>原油<br>包裝藥品',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18499950/embed#?secret=jtgiXcpDc0" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            tradePartners: {
                import: [
                    { country: '中國', percent: '13%' },
                    { country: '德國', percent: '11%' },
                    { country: '美國', percent: '9%' },
                    { country: '荷蘭', percent: '6%' },
                    { country: '挪威', percent: '5%' }
                ],
                export: [
                    { country: '美國', percent: '13%' },
                    { country: '德國', percent: '9%' },
                    { country: '瑞士', percent: '8%' },
                    { country: '荷蘭', percent: '8%' },
                    { country: '愛爾蘭', percent: '6%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        },
        en: {
            title: 'United Kingdom',
            subtitle: 'Includes historical data for the United Kingdom\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'A Well-Developed Banking System',
            descParagraphs: [
                'As a prosperous commercial hub, the United Kingdom offers an excellent environment for trade and investment. It boasts an open economy, a massive consumer market with high purchasing power, and a wealth of skilled professionals. It also features well-developed banking and insurance services, robust infrastructure, a transparent tax system, and top-tier companies in aviation, pharmaceuticals, and automobiles.',
                'However, the UK also faces numerous challenges. These include high public and household debt levels, inflationary pressures, trade disruptions, and the economic uncertainties brought about by Brexit.'
            ],
            table: {
                gov: 'Parliamentary constitutional monarchy; Commonwealth realm',
                capital: 'London',
                ratings: 'S&P: AA<br>Moody\'s: Aa3<br>Fitch: AA–',
                pop: '68.4 million',
                age: '40.3',
                income: '49,463',
                gdp: '3.5 trillion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18499004/embed#?secret=ru3bEYYleW" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18471546/embed#?secret=qp6QbBuFdR" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$723.0 billion (2023)',
                leadingExports: 'Cars<br>Gold<br>Gas Turbines<br>Crude Petroleum<br>Packaged Medicaments',
                imports: '$462.5 billion (2022)',
                leadingImports: 'Gold<br>Cars<br>Natural Gas<br>Crude Petroleum<br>Packaged Medicaments',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18499950/embed#?secret=jtgiXcpDc0" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            tradePartners: {
                import: [
                    { country: 'China', percent: '13%' },
                    { country: 'Germany', percent: '11%' },
                    { country: 'United States', percent: '9%' },
                    { country: 'Netherlands', percent: '6%' },
                    { country: 'Norway', percent: '5%' }
                ],
                export: [
                    { country: 'United States', percent: '13%' },
                    { country: 'Germany', percent: '9%' },
                    { country: 'Switzerland', percent: '8%' },
                    { country: 'Netherlands', percent: '8%' },
                    { country: 'Ireland', percent: '6%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'Greece': {
        ranking: '139',
        flagUrl: 'https://flagcdn.com/w160/gr.png',
        zh: {
            title: '希臘 (Greece)',
            subtitle: '包含希臘的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
            descTitle: '經濟復甦與結構性挑戰並存',
            descParagraphs: [
                '希臘位於歐洲東南部，地處歐洲、亞洲與非洲的交界，擁有豐富的歷史文化與壯麗的地中海風光。該國經濟主要由服務業驅動，其中旅遊業與航運業為最重要的支柱產業。身為歐洲聯盟與歐元區的成員，希臘受惠於區域經濟整合與自由貿易，並積極吸引外國直接投資（FDI）投入再生能源、基礎設施、物流與房地產等領域。',
                '在經歷長達十年的嚴重主權債務危機後，希臘實施了多項艱難的經濟改革，成功恢復經濟成長，並於近期重新獲得部分信評機構的投資等級評等。然而，挑戰依然存在。該國的公共債務佔國內生產毛額（GDP）的比例雖然呈現下降趨勢，但依舊居高不下。此外，人口老化、相對較高的失業率、持續存在的逃漏稅問題，以及龐大且有時效率不彰的官僚體系，仍持續阻礙其長期的經濟發展潛能。'
            ],
            table: {
                gov: '議會制共和國',
                capital: '雅典',
                ratings: 'S&P: BBB-<br>Moody\'s: Ba1<br>Fitch: BBB-',
                pop: '1,040 萬人',
                age: '42.7 歲',
                income: '22,595 美元',
                gdp: '2,382 億美元'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18497797/embed#?secret=xnZpLxfcpc" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18470713/embed#?secret=dTkXr2M5AD" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '550 億美元 (2022)',
                leadingExports: '精煉石油<br>包裝藥品<br>鋁塊<br>橄欖油<br>電腦',
                imports: '970 億美元 (2022)',
                leadingImports: '原油<br>精煉石油<br>汽車<br>包裝藥品<br>客運與貨運船舶',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18499710/embed#?secret=1ZYe3ckjbh" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'National Bank of Greece', sector: '金融業' },
                { name: 'Alpha Bank', sector: '金融業' },
                { name: 'Hellenic Petroleum', sector: '能源、石油與天然氣' },
                { name: 'OTE Group', sector: '電信服務' },
                { name: 'Mytilineos Holdings', sector: '綜合企業、原物料、能源' },
                { name: 'Public Power Corporation (PPC)', sector: '公用事業' }
            ],
            tradePartners: {
                import: [
                    { country: '德國', percent: '11%' },
                    { country: '義大利', percent: '8%' },
                    { country: '中國', percent: '7%' },
                    { country: '俄羅斯', percent: '7%' },
                    { country: '伊拉克', percent: '6%' }
                ],
                export: [
                    { country: '義大利', percent: '11%' },
                    { country: '德國', percent: '8%' },
                    { country: '保加利亞', percent: '6%' },
                    { country: '賽普勒斯', percent: '6%' },
                    { country: '土耳其', percent: '5%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        },
        en: {
            title: 'Greece',
            subtitle: 'Includes historical data for Greece\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Economic Recovery Coexists with Structural Challenges',
            descParagraphs: [
                'Located in southeastern Europe at the crossroads of Europe, Asia, and Africa, Greece boasts a rich historical heritage and stunning Mediterranean landscapes. The economy is primarily driven by the services sector, with tourism and shipping acting as its most vital pillars. As a member of the European Union and the Eurozone, Greece benefits from regional economic integration and free trade, actively attracting foreign direct investment (FDI) into areas like renewable energy, infrastructure, logistics, and real estate.',
                'After enduring a severe, decade-long sovereign debt crisis, Greece implemented numerous difficult economic reforms, successfully restoring growth and recently regaining investment-grade ratings from some agencies. Challenges remain, however. Although declining, its public debt-to-GDP ratio stays stubbornly high. Furthermore, an aging population, relatively high unemployment rates, persistent tax evasion, and a large, sometimes inefficient bureaucracy continue to hinder its long-term economic potential.'
            ],
            table: {
                gov: 'Parliamentary republic',
                capital: 'Athens',
                ratings: 'S&P: BBB-<br>Moody\'s: Ba1<br>Fitch: BBB-',
                pop: '10.4 million',
                age: '42.7',
                income: '22,595',
                gdp: '238.2 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18497797/embed#?secret=xnZpLxfcpc" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18470713/embed#?secret=dTkXr2M5AD" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$55.0 billion (2022)',
                leadingExports: 'Refined Petroleum<br>Packaged Medicaments<br>Aluminum Blocks<br>Olive Oil<br>Computers',
                imports: '$97.0 billion (2022)',
                leadingImports: 'Crude Petroleum<br>Refined Petroleum<br>Cars<br>Packaged Medicaments<br>Passenger and Cargo Ships',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18499710/embed#?secret=1ZYe3ckjbh" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'National Bank of Greece', sector: 'Financials' },
                { name: 'Alpha Bank', sector: 'Financials' },
                { name: 'Hellenic Petroleum', sector: 'Energy, Oil & Gas' },
                { name: 'OTE Group', sector: 'Telecom Services' },
                { name: 'Mytilineos Holdings', sector: 'Conglomerates, Materials, Energy' },
                { name: 'Public Power Corporation (PPC)', sector: 'Utilities' }
            ],
            tradePartners: {
                import: [
                    { country: 'Germany', percent: '11%' },
                    { country: 'Italy', percent: '8%' },
                    { country: 'China', percent: '7%' },
                    { country: 'Russia', percent: '7%' },
                    { country: 'Iraq', percent: '6%' }
                ],
                export: [
                    { country: 'Italy', percent: '11%' },
                    { country: 'Germany', percent: '8%' },
                    { country: 'Bulgaria', percent: '6%' },
                    { country: 'Cyprus', percent: '6%' },
                    { country: 'Turkey', percent: '5%' }
                ],
                source: 'Source: World Integrated Trade Solution'
            }
        }
    },
    'Norway': {
        ranking: '185',
        flagUrl: 'https://flagcdn.com/w160/no.png',
        zh: {
            title: '挪威 (Norway)',
            subtitle: '包含挪威的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
            descTitle: '奠基於石油與多元產業的經濟實力',
            descParagraphs: [
                '挪威是一個現代化且高度開發的國家，擁有蓬勃發展的私營部門、龐大的國家經濟參與以及廣泛的社會安全網。由於 1960 年代發現了近海石油與天然氣，這個人口不到 600 萬的國家在人均國內生產毛額 (GDP) 方面名列世界最富有的國家之一。如今，挪威的經濟高度多元化，涵蓋從海鮮、林業與礦業等多種產業，到包含金融與金融科技、資訊科技、醫療科技與生物科技，以及再生能源等先進的服務業。這種經濟活力更得益於挪威擁有全球最大的主權財富基金，加上高效率的法律框架、對全球商業的開放態度，以及進入歐盟市場的優惠待遇。',
                '儘管具備這些優勢，劣勢依然存在，包括私人家庭債務水準偏高，以及嚴重的高昂勞動力成本所加劇的技術勞工短缺問題。此外，面臨氣候相關風險與相對較高的所得稅率也帶來了額外的挑戰。'
            ],
            table: {
                gov: '議會制君主立憲制',
                capital: '奧斯陸',
                ratings: 'S&P: AAA<br>Moody\'s: Aaa<br>Fitch: AAA',
                pop: '560 萬人',
                age: '40.0 歲',
                income: '99,923.05 美元',
                gdp: '5,270 億美元'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18497904/embed#?secret=VPL1WQQBsn" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18471259/embed#?secret=DE1w6yiCYd" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '939 億美元 (2023)',
                leadingExports: '天然氣<br>原油<br>鮭魚<br>精煉石油<br>鋁',
                imports: '2,590 億美元 (2022)',
                leadingImports: '汽車<br>精煉石油<br>廣播設備<br>電腦<br>船舶<br>鎳',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18499907/embed#?secret=t747CNsS5o" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            }
        },
        en: {
            title: 'Norway',
            subtitle: 'Includes historical data for Norway\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'Economic Strength Built on Oil and Diversified Industries',
            descParagraphs: [
                'Norway is a modern, highly developed country featuring a thriving private sector, substantial state economic participation, and an extensive social safety net. Thanks to the discovery of offshore oil and natural gas in the 1960s, this nation of fewer than 6 million people ranks among the wealthiest in the world in terms of GDP per capita. Today, Norway\'s economy is highly diversified, ranging from industries like seafood, forestry, and mining, to advanced services encompassing finance and fintech, IT, medtech and biotech, as well as renewable energy. This economic dynamism is further bolstered by Norway possessing the world\'s largest sovereign wealth fund, coupled with efficient legal frameworks, an openness to global business, and preferential access to the EU market.',
                'Despite these advantages, weaknesses remain, including elevated levels of private household debt and a skilled labor shortage exacerbated by exceptionally high labor costs. Furthermore, facing climate-related risks and relatively high income tax rates pose additional challenges.'
            ],
            table: {
                gov: 'Parliamentary constitutional monarchy',
                capital: 'Oslo',
                ratings: 'S&P: AAA<br>Moody\'s: Aaa<br>Fitch: AAA',
                pop: '5.6 million',
                age: '40.0',
                income: '99,923.05',
                gdp: '527.0 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18497904/embed#?secret=VPL1WQQBsn" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18471259/embed#?secret=DE1w6yiCYd" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$93.9 billion (2023)',
                leadingExports: 'Natural Gas<br>Crude Petroleum<br>Salmon<br>Refined Petroleum<br>Aluminum',
                imports: '$259.0 billion (2022)',
                leadingImports: 'Cars<br>Refined Petroleum<br>Broadcasting Equipment<br>Computers<br>Ships<br>Nickel',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18499907/embed#?secret=t747CNsS5o" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            }
        }
    },
    'Ukraine': {
        ranking: '97',
        flagUrl: 'https://flagcdn.com/w160/ua.png',
        zh: {
            title: '烏克蘭 (Ukraine)',
            subtitle: '包含烏克蘭的國內生產毛額成長、債務佔GDP比率等歷史數據，以及貿易、銀行和金融部門的相關資訊。',
            descTitle: '戰爭重創經濟，復甦之路漫長',
            descParagraphs: [
                '烏克蘭位於東歐，是歐洲面積第二大的國家，擁有肥沃的農業用地和豐富的自然資源，被譽為「歐洲糧倉」。在戰爭爆發前，烏克蘭是全球主要的穀物、葵花籽油和鐵礦石出口國之一。該國擁有發達的工業基礎和IT產業，並致力於深化與歐盟的經濟一體化。',
                '然而，自2022年俄羅斯全面入侵以來，烏克蘭經濟遭受了毀滅性的打擊。關鍵基礎設施遭到嚴重破壞，數百萬人流離失所，外國投資大幅減少，並面臨著龐大的國防支出壓力。儘管在國際金融援助和黑海糧食走廊的恢復下，該國經濟在近年出現了初步復甦的跡象，但公共債務高企，國家主權信用評等多次被下調至違約或接近違約級別。烏克蘭的長期經濟前景高度依賴於戰爭的演變、國際社會的持續支持以及戰後的重建進程。'
            ],
            table: {
                gov: '半總統制共和國',
                capital: '基輔',
                ratings: 'S&P: CCC+<br>Moody\'s: Ca<br>Fitch: RD',
                pop: '約 3,700 萬人',
                age: '41.2 歲',
                income: '約 4,500 美元',
                gdp: '約 1,700 億美元'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18381492/embed#?secret=Oj6MC42VWM" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18368769/embed#?secret=Eo9R6Zuk3k" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '417 億美元 (2024)',
                leadingExports: '穀物 (小麥、玉米)<br>葵花籽油<br>鐵礦石<br>鋼鐵<br>機械',
                imports: '707 億美元 (2024)',
                leadingImports: '礦物燃料與精煉石油<br>機械<br>車輛<br>電機設備<br>藥品',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18370247/embed#?secret=ntQjmpqgUR" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Naftogaz', sector: '能源' },
                { name: 'PrivatBank', sector: '金融業' },
                { name: 'Metinvest', sector: '原物料、金屬與採礦' },
                { name: 'DTEK', sector: '能源、公用事業' },
                { name: 'Oschadbank', sector: '金融業' },
                { name: 'Kernel', sector: '民生必需品、農業' }
            ],
            tradePartners: {
                import: [
                    { country: '中國', percent: '20.0%' },
                    { country: '波蘭', percent: '9.9%' },
                    { country: '德國', percent: '7.6%' },
                    { country: '土耳其', percent: '6.0%' },
                    { country: '美國', percent: '4.9%' }
                ],
                export: [
                    { country: '波蘭', percent: '11.3%' },
                    { country: '西班牙', percent: '7.0%' },
                    { country: '德國', percent: '6.7%' }
                ],
                source: 'Source: State Customs Service of Ukraine'
            }
        },
        en: {
            title: 'Ukraine',
            subtitle: 'Includes historical data for Ukraine\'s Gross Domestic Product growth, debt-to-GDP ratio and more, as well as information on trade, banking and financial sector leadership.',
            descTitle: 'War Devastates Economy, Long Road to Recovery',
            descParagraphs: [
                'Located in Eastern Europe, Ukraine is the second-largest country by area in Europe. Endowed with fertile agricultural land and rich natural resources, it has long been known as the "breadbasket of Europe." Prior to the outbreak of war, Ukraine was one of the world\'s leading exporters of grain, sunflower oil, and iron ore. The country boasts a well-developed industrial base and IT sector, and is committed to deepening its economic integration with the EU.',
                'However, since the full-scale Russian invasion in 2022, Ukraine\'s economy has suffered a devastating blow. Critical infrastructure has been severely damaged, millions have been displaced, foreign investment has sharply declined, and the nation faces massive pressures from defense spending. Although the economy has shown initial signs of recovery in recent years—buoyed by international financial aid and the restoration of the Black Sea grain corridor—public debt remains extremely high, and the country\'s sovereign credit ratings have been downgraded multiple times to default or near-default levels. Ukraine\'s long-term economic outlook is highly dependent on the evolution of the war, continued support from the international community, and the post-war reconstruction process.'
            ],
            table: {
                gov: 'Semi-presidential republic',
                capital: 'Kyiv',
                ratings: 'S&P: CCC+<br>Moody\'s: Ca<br>Fitch: RD',
                pop: 'Approx. 37.0 million',
                age: '41.2',
                income: 'Approx. 4,500',
                gdp: 'Approx. 170.0 billion'
            },
            charts: {
                left: { html: `<iframe src="https://flo.uri.sh/visualisation/18381492/embed#?secret=Oj6MC42VWM" class="w-full h-full border-none" scrolling="no"></iframe>` },
                right: { html: `<iframe src="https://flo.uri.sh/visualisation/18368769/embed#?secret=Eo9R6Zuk3k" class="w-full h-full border-none" scrolling="no"></iframe>` }
            },
            tradeAndInvestment: {
                exports: '$41.7 billion (2024)',
                leadingExports: 'Grains (Wheat, Corn)<br>Sunflower Oil<br>Iron Ore<br>Iron and Steel<br>Machinery',
                imports: '$70.7 billion (2024)',
                leadingImports: 'Mineral Fuels and Refined Petroleum<br>Machinery<br>Vehicles<br>Electrical Equipment<br>Medicaments',
            },
            fdiChart: {
                html: `<iframe src="https://flo.uri.sh/visualisation/18370247/embed#?secret=ntQjmpqgUR" class="w-full h-[400px] border-none" scrolling="no"></iframe>`
            },
            leadingCompanies: [
                { name: 'Naftogaz', sector: 'Energy' },
                { name: 'PrivatBank', sector: 'Financials' },
                { name: 'Metinvest', sector: 'Materials, Metals & Mining' },
                { name: 'DTEK', sector: 'Energy, Utilities' },
                { name: 'Oschadbank', sector: 'Financials' },
                { name: 'Kernel', sector: 'Consumer Staples, Agriculture' }
            ],
            tradePartners: {
                import: [
                    { country: 'China', percent: '20.0%' },
                    { country: 'Poland', percent: '9.9%' },
                    { country: 'Germany', percent: '7.6%' },
                    { country: 'Turkey', percent: '6.0%' },
                    { country: 'United States', percent: '4.9%' }
                ],
                export: [
                    { country: 'Poland', percent: '11.3%' },
                    { country: 'Spain', percent: '7.0%' },
                    { country: 'Germany', percent: '6.7%' }
                ],
                source: 'Source: State Customs Service of Ukraine'
            }
        }
    }
};