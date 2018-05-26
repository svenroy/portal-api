const getQuestionsByCaseId = (caseId) => {
    return {
        groups: {
            activeGroup: "Business details",
            "LC": {
                "Business details": [
                    "A140",
                    "A127",
                    "A118",
                    "A121",
                    "A133",
                    "A123",
                    "A248",
                    "physical_presence",
                    "A240",
                    "A244",
                    "sic_code",
                    "acceptance"
                ],
                "Financial overview": [
                    "A232",
                    "A203",
                    "A215"
                ],
                "Transaction review": [
                    "related_transactions"
                ],
                "Key principals": [
                    "key_principals"
                ],
                "Documents": [
                    "required_documents",
                    "upload_documents_now",
                    "documents"
                ],
                "Summary": []
            },
            "ST": {
                "Business details": [
                    "A127",
                    "A121",
                    "A123",
                    "A248",
                    "physical_presence",
                    "A240",
                    "A244",
                    "sic_code",
                    "acceptance"
                ],
                "Financial overview": [
                    "A232",
                    "A203",
                    "A215"
                ],
                "Transaction review": [
                    "related_transactions"
                ],
                "Key principals": [
                    "key_principals"
                ],
                "Documents": [
                    "required_documents",
                    "upload_documents_now",
                    "documents"
                ],
                "Summary": []
            }
        },
        lookups: {
            "product_service": ["Debit card", "Credit card", "Cheques", "Bank transfer"],
            "yes_no": ["Yes", "No"],
            "yes_confirm_nature_of_business": ["Yes, the nature of business and percentages are correct", "No"],
            "individual_organisation": ["Individual", "Organisation"],
            "title": [
                "Dr",
                "Miss",
                "Mr",
                "Ms",
                "Mrs",
                "Sir",
                "Other"
            ],
            "country": [
                "Afghanistan",
                "Aland Islands",
                "Albania",
                "Algeria",
                "American Samoa",
                "Andorra",
                "Angola",
                "Anguilla",
                "Antarctica",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bermuda",
                "Bhutan",
                "Bolivia, Plurinational State of",
                "Bonaire, Sint Eustatius and Saba",
                "Bosnia and Herzegovina",
                "Botswana",
                "Bouvet Islands",
                "Brazil",
                "British Indian Ocean Territory",
                "British Virgin Islands",
                "Brunei Darussalam",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cabo Verde",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Canton and Enderbury Islands",
                "Cayman Islands",
                "Central African Republic",
                "Chad",
                "Chile",
                "China",
                "Christmas Island",
                "Cocos (Keeling) Islands",
                "Colombia",
                "Comoros",
                "Congo",
                "Congo, Democratic Republic of the",
                "Cook Islands",
                "Costa Rica",
                "Cote D'Ivoire",
                "Croatia",
                "Cuba",
                "Curacao",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic",
                "East Timor",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Ethiopia",
                "Falkland Islands (Malvinas)",
                "Faroe Islands",
                "Fiji",
                "Finland",
                "France",
                "French Guiana",
                "French Polynesia",
                "French Southern Territories",
                "Gabon",
                "Gambia",
                "Georgia",
                "Germany",
                "Ghana",
                "Gibraltar",
                "Greece",
                "Greenland",
                "Grenada",
                "Guadeloupe",
                "Guam",
                "Guatemala",
                "Guernsey",
                "Guinea Bissau",
                "Guinea",
                "Guyana",
                "Haiti",
                "Heard and Mcdonald Islands",
                "Holy See (Vatican City State)",
                "Honduras",
                "Hong Kong",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran, Islamic Republic Of",
                "Iraq",
                "Ireland",
                "Isle Of Man",
                "Israel",
                "Italy",
                "Jamaica",
                "Japan",
                "Jersey",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Korea, Dem Peoples Rep Of (North)",
                "Korea, Republic Of (South)",
                "Kosovo",
                "Kuwait",
                "Kyrgyzstan",
                "Lao Peoples Democratic Republic",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macao",
                "Macedonia, Former Yugoslav Rep",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands",
                "Martinique",
                "Mauritania",
                "Mauritius",
                "Mayotte",
                "Mexico",
                "Micronesia, Federated States Of",
                "Moldova, Republic Of",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Montserrat",
                "Morocco",
                "Mozambique",
                "Myanmar",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands Antilles",
                "Netherlands",
                "New Caledonia",
                "New Zealand",
                "Nicaragua",
                "Niger",
                "Nigeria",
                "Niue",
                "Norfolk Island",
                "Northern Mariana Islands",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Palestine, State of",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines",
                "Pitcairn",
                "Poland",
                "Portugal",
                "Puerto Rico",
                "Qatar",
                "Reunion",
                "Romania",
                "Russian Federation",
                "Rwanda",
                "Saint Barthelemy",
                "Saint Helena, Ascencion and Tristan da Cunha",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Martin (French part)",
                "Saint Pierre and Miquelon",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia and Montenegro",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Sint Maarten (Dutch part)",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Georgia and South Sandwich Islands",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "Sudan",
                "Suriname",
                "Svalbard and Jan Mayen",
                "Swaziland",
                "Sweden",
                "Switzerland",
                "Syrian Arab Republic",
                "Taiwan",
                "Tajikistan",
                "Tanzania, United Republic Of",
                "Thailand",
                "Timor-Leste",
                "Togo",
                "Tokelau",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Turks and Caicos Islands",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates",
                "United Kingdom",
                "United States Of America",
                "Uruguay",
                "US Minor Outlying Islands",
                "US Virgin Islands",
                "USSR, Former",
                "Uzbekistan",
                "Vanuatu",
                "Venezuela, Bolivarian Republic of",
                "Viet Nam",
                "Wallis and Futuna",
                "Western Sahara",
                "Yemen",
                "Yugoslavia",
                "Zambia",
                "Zimbabwe",
            ],
            "interval": [
                "Daily",
                "Weekly",
                "Monthly",
                "Yearly"
            ],
            "transaction_type": [
                "Cash transactions",
                "International payments",
                "Other"
            ],
            "funds_source": [
                "Cash flow generated directly from the company operations",
                "Loan/bank funding",
                "Injection of funds from owner/parent company",
                "Injection of funds from associated entity",
                "Injection of funds from an external source"
            ],
            "sole_trader_key_principal_capacity": [
                "Sole trader - individual",
                "Significant controller",
                "Signatory"
            ],
            "trust_key_principal_capacity": [
                "Beneficary",
                "Settlor",
                "Signatory",
                "Significant controller",
                "Trust controller",
                "Trustee"
            ],
            "unlisted_company_key_principal_capacity": [
                "Beneficial owner",
                "Director",
                "Partner",
                "Signatory",
                "Significant controller"
            ],
            "document_type": [
                "Bank statement",
                "Memorandum of association",
                "Passport"
            ],
            "sic_code": {
                "Accommodation and food service activities": [
                    "[55100] Hotels and similar accommodation",
                    "[55201] Holiday centres and villages",
                    "[55202] Youth hostels",
                    "[55209] Other holiday and other collective accommodation",
                    "[55300] Recreational vehicle parks, trailer parks and camping grounds",
                    "[55900] Other accommodation",
                    "[56101] Licensed restaurants",
                    "[56102] Unlicensed restaurants and cafes",
                    "[56103] Take-away food shops and mobile food stands",
                    "[56210] Event catering activities",
                    "[56290] Other food services",
                    "[56301] Licensed clubs",
                    "[56302] Public houses and bars",
                ],
                "Activities of extraterritorial organisations and bodies": [
                    "[99000] Activities of extraterritorial organizations and bodies",
                    "[99999] Dormant Company",
                ],
                "Activities of households as employers; undifferentiated goods and services-producing activities of households for own use": [
                    "[97000] Activities of households as employers of domestic personnel",
                    "[98000] Residents property management",
                    "[98100] Undifferentiated goods-producing activities of private households for own use",
                    "[98200] Undifferentiated service-producing activities of private households for own use",
                ],
                "Administrative and support service activities": [
                    "[75000] Veterinary activities",
                    "[77110] Renting and leasing of cars and light motor vehicles",
                    "[77120] Renting and leasing of trucks and other heavy vehicles",
                    "[77210] Renting and leasing of recreational and sports goods",
                    "[77220] Renting of video tapes and disks",
                    "[77291] Renting and leasing of media entertainment equipment",
                    "[77299] Renting and leasing of other personal and household goods",
                    "[77310] Renting and leasing of agricultural machinery and equipment",
                    "[77320] Renting and leasing of construction and civil engineering machinery and equipment",
                    "[77330] Renting and leasing of office machinery and equipment (including computers)",
                    "[77341] Renting and leasing of passenger water transport equipment",
                    "[77342] Renting and leasing of freight water transport equipment",
                    "[77351] Renting and leasing of air passenger transport equipment",
                    "[77352] Renting and leasing of freight air transport equipment",
                    "[77390] Renting and leasing of other machinery, equipment and tangible goods n.e.c.",
                    "[77400] Leasing of intellectual property and similar products, except copyright works",
                    "[78101] Motion picture, television and other theatrical casting activities",
                    "[78109] Other activities of employment placement agencies",
                    "[78200] Temporary employment agency activities",
                    "[78300] Human resources provision and management of human resources functions",
                    "[79110] Travel agency activities",
                    "[79120] Tour operator activities",
                    "[79901] Activities of tourist guides",
                    "[79909] Other reservation service activities n.e.c.",
                    "[80100] Private security activities",
                    "[80200] Security systems service activities",
                    "[80300] Investigation activities",
                    "[81100] Combined facilities support activities",
                    "[81210] General cleaning of buildings",
                    "[81221] Window cleaning services",
                    "[81222] Specialised cleaning services",
                    "[81223] Furnace and chimney cleaning services",
                    "[81229] Other building and industrial cleaning activities",
                    "[81291] Disinfecting and exterminating services",
                    "[81299] Other cleaning services",
                    "[81300] Landscape service activities",
                    "[82110] Combined office administrative service activities",
                    "[82190] Photocopying, document preparation and other specialised office support activities",
                    "[82200] Activities of call centres",
                    "[82301] Activities of exhibition and fair organisers",
                    "[82302] Activities of conference organisers",
                    "[82911] Activities of collection agencies",
                    "[82912] Activities of credit bureaus",
                    "[82920] Packaging activities",
                    "[82990] Other business support service activities n.e.c.",
                ],
                "Agriculture, forestry and fishing": [
                    "[1110] Growing of cereals (except rice), leguminous crops and oil seeds",
                    "[1120] Growing of rice",
                    "[1130] Growing of vegetables and melons, roots and tubers",
                    "[1140] Growing of sugar cane",
                    "[1150] Growing of tobacco",
                    "[1160] Growing of fibre crops",
                    "[1190] Growing of other non-perennial crops",
                    "[1210] Growing of grapes",
                    "[1220] Growing of tropical and subtropical fruits",
                    "[1230] Growing of citrus fruits",
                    "[1240] Growing of pome fruits and stone fruits",
                    "[1250] Growing of other tree and bush fruits and nuts",
                    "[1260] Growing of oleaginous fruits",
                    "[1270] Growing of beverage crops",
                    "[1280] Growing of spices, aromatic, drug and pharmaceutical crops",
                    "[1290] Growing of other perennial crops",
                    "[1300] Plant propagation",
                    "[1410] Raising of dairy cattle",
                    "[1420] Raising of other cattle and buffaloes",
                    "[1430] Raising of horses and other equines",
                    "[1440] Raising of camels and camelids",
                    "[1450] Raising of sheep and  goats",
                    "[1460] Raising of swine/pigs",
                    "[1470] Raising of poultry",
                    "[1490] Raising of other animals",
                    "[1500] Mixed farming",
                    "[1610] Support activities for crop production",
                    "[1621] Farm animal boarding and care",
                    "[1629] Support activities for animal production (other than farm animal boarding and care) n.e.c.",
                    "[1630] Post-harvest crop activities",
                    "[1640] Seed processing for propagation",
                    "[1700] Hunting, trapping and related service activities",
                    "[2100] Silviculture and other forestry activities",
                    "[2200] Logging",
                    "[2300] Gathering of wild growing non-wood products",
                    "[2400] Support services to forestry",
                    "[3110] Marine fishing",
                    "[3120] Freshwater fishing",
                    "[3210] Marine aquaculture",
                    "[3220] Freshwater aquaculture",
                ],
                "Arts, entertainment and recreation": [
                    "[90010] Performing arts",
                    "[90020] Support activities to performing arts",
                    "[90030] Artistic creation",
                    "[90040] Operation of arts facilities",
                    "[91011] Library activities",
                    "[91012] Archives activities",
                    "[91020] Museums activities",
                    "[91030] Operation of historical sites and buildings and similar visitor attractions",
                    "[91040] Botanical and zoological gardens and nature reserves activities",
                    "[92000] Gambling and betting activities",
                    "[93110] Operation of sports facilities",
                    "[93120] Activities of sport clubs",
                    "[93130] Fitness facilities",
                    "[93191] Activities of racehorse owners",
                    "[93199] Other sports activities",
                    "[93210] Activities of amusement parks and theme parks",
                    "[93290] Other amusement and recreation activities n.e.c.",
                ],
                "Construction": [
                    "[41100] Development of building projects",
                    "[41201] Construction of commercial buildings",
                    "[41202] Construction of domestic buildings",
                    "[42110] Construction of roads and motorways",
                    "[42120] Construction of railways and underground railways",
                    "[42130] Construction of bridges and tunnels",
                    "[42210] Construction of utility projects for fluids",
                    "[42220] Construction of utility projects for electricity and telecommunications",
                    "[42910] Construction of water projects",
                    "[42990] Construction of other civil engineering projects n.e.c.",
                    "[43110] Demolition",
                    "[43120] Site preparation",
                    "[43130] Test drilling and boring",
                    "[43210] Electrical installation",
                    "[43220] Plumbing, heat and air-conditioning installation",
                    "[43290] Other construction installation",
                    "[43310] Plastering",
                    "[43320] Joinery installation",
                    "[43330] Floor and wall covering",
                    "[43341] Painting",
                    "[43342] Glazing",
                    "[43390] Other building completion and finishing",
                    "[43910] Roofing activities",
                    "[43991] Scaffold erection",
                    "[43999] Other specialised construction activities n.e.c.",
                ],
                "Education": [
                    "[85100] Pre-primary education",
                    "[85200] Primary education",
                    "[85310] General secondary education",
                    "[85320] Technical and vocational secondary education",
                    "[85410] Post-secondary non-tertiary education",
                    "[85421] First-degree level higher education",
                    "[85422] Post-graduate level higher education",
                    "[85510] Sports and recreation education",
                    "[85520] Cultural education",
                    "[85530] Driving school activities",
                    "[85590] Other education n.e.c.",
                    "[85600] Educational support services",
                ],
                "Electricity, gas, steam and air conditioning supply": [
                    "[33110] Repair of fabricated metal products",
                    "[33120] Repair of machinery",
                    "[33130] Repair of electronic and optical equipment",
                    "[33140] Repair of electrical equipment",
                    "[33150] Repair and maintenance of ships and boats",
                    "[33160] Repair and maintenance of aircraft and spacecraft",
                    "[33170] Repair and maintenance of other transport equipment n.e.c.",
                    "[33190] Repair of other equipment",
                    "[33200] Installation of industrial machinery and equipment",
                    "[35110] Production of electricity",
                    "[35120] Transmission of electricity",
                    "[35130] Distribution of electricity",
                    "[35140] Trade of electricity",
                    "[35210] Manufacture of gas",
                    "[35220] Distribution of gaseous fuels through mains",
                    "[35230] Trade of gas through mains",
                    "[35300] Steam and air conditioning supply",
                ],
                "Financial and insurance": [
                    "[64110] Central banking",
                    "[64191] Banks",
                    "[64192] Building societies",
                    "[64201] Activities of agricultural holding companies",
                    "[64202] Activities of production holding companies",
                    "[64203] Activities of construction holding companies",
                    "[64204] Activities of distribution holding companies",
                    "[64205] Activities of financial services holding companies",
                    "[64209] Activities of other holding companies n.e.c.",
                    "[64301] Activities of investment trusts",
                    "[64302] Activities of unit trusts",
                    "[64303] Activities of venture and development capital companies",
                    "[64304] Activities of open-ended investment companies",
                    "[64305] Activities of property unit trusts",
                    "[64306] Activities of real estate investment trusts",
                    "[64910] Financial leasing",
                    "[64921] Credit granting by non-deposit taking finance houses and other specialist consumer credit grantors",
                    "[64922] Activities of mortgage finance companies",
                    "[64929] Other credit granting n.e.c.",
                    "[64991] Security dealing on own account",
                    "[64992] Factoring",
                    "[64999] Financial intermediation not elsewhere classified",
                    "[65110] Life insurance",
                    "[65120] Non-life insurance",
                    "[65201] Life reinsurance",
                    "[65202] Non-life reinsurance",
                    "[65300] Pension funding",
                    "[66110] Administration of financial markets",
                    "[66120] Security and commodity contracts dealing activities",
                    "[66190] Activities auxiliary to financial intermediation n.e.c.",
                    "[66210] Risk and damage evaluation",
                    "[66220] Activities of insurance agents and brokers",
                    "[66290] Other activities auxiliary to insurance and pension funding",
                    "[66300] Fund management activities",
                    "[67130] Bureaux de change activities",
                ],
                "Human health and social work activities": [
                    "[86101] Hospital activities",
                    "[86102] Medical nursing home activities",
                    "[86210] General medical practice activities",
                    "[86220] Specialists medical practice activities",
                    "[86230] Dental practice activities",
                    "[86900] Other human health activities",
                    "[87100] Residential nursing care facilities",
                    "[87200] Residential care activities for learning difficulties, mental health and substance abuse",
                    "[87300] Residential care activities for the elderly and disabled",
                    "[87900] Other residential care activities n.e.c.",
                    "[88100] Social work activities without accommodation for the elderly and disabled",
                    "[88910] Child day-care activities",
                    "[88990] Other social work activities without accommodation n.e.c.",
                ],
                "Information and communication": [
                    "[58110] Book publishing",
                    "[58120] Publishing of directories and mailing lists",
                    "[58130] Publishing of newspapers",
                    "[58141] Publishing of learned journals",
                    "[58142] Publishing of  consumer and business journals and periodicals",
                    "[58190] Other publishing activities",
                    "[58210] Publishing of computer games",
                    "[58290] Other software publishing",
                    "[59111] Motion picture production activities",
                    "[59112] Video production activities",
                    "[59113] Television programme production activities",
                    "[59120] Motion picture, video and television programme post-production activities",
                    "[59131] Motion picture distribution activities",
                    "[59132] Video distribution activities",
                    "[59133] Television programme distribution activities",
                    "[59140] Motion picture projection activities",
                    "[59200] Sound recording and music publishing activities",
                    "[60100] Radio broadcasting",
                    "[60200] Television programming and broadcasting activities",
                    "[61100] Wired telecommunications activities",
                    "[61200] Wireless telecommunications activities",
                    "[61300] Satellite telecommunications activities",
                    "[61900] Other telecommunications activities",
                    "[62011] Ready-made interactive leisure and entertainment software development",
                    "[62012] Business and domestic software development",
                    "[62020] Information technology consultancy activities",
                    "[62030] Computer facilities management activities",
                    "[62090] Other information technology service activities",
                    "[63110] Data processing, hosting and related activities",
                    "[63120] Web portals",
                    "[63910] News agency activities",
                    "[63990] Other information service activities n.e.c.",
                ],
                "Manufacturing": [
                    "[10110] Processing and preserving of meat",
                    "[10120] Processing and preserving of poultry meat",
                    "[10130] Production of meat and poultry meat products",
                    "[10200] Processing and preserving of fish, crustaceans and molluscs",
                    "[10310] Processing and preserving of potatoes",
                    "[10320] Manufacture of fruit and vegetable juice",
                    "[10390] Other processing and preserving of fruit and vegetables",
                    "[10410] Manufacture of oils and fats",
                    "[10420] Manufacture of margarine and similar edible fats",
                    "[10511] Liquid milk and cream production",
                    "[10512] Butter and cheese production",
                    "[10519] Manufacture of other milk products",
                    "[10520] Manufacture of ice cream",
                    "[10611] Grain milling",
                    "[10612] Manufacture of breakfast cereals and cereals-based food",
                    "[10620] Manufacture of starches and starch products",
                    "[10710] Manufacture of bread; manufacture of fresh pastry goods and cakes",
                    "[10720] Manufacture of rusks and biscuits; manufacture of preserved pastry goods and cakes",
                    "[10730] Manufacture of macaroni, noodles, couscous and similar farinaceous products",
                    "[10810] Manufacture of sugar",
                    "[10821] Manufacture of cocoa and chocolate confectionery",
                    "[10822] Manufacture of sugar confectionery",
                    "[10831] Tea processing",
                    "[10832] Production of coffee and coffee substitutes",
                    "[29201] Manufacture of bodies (coachwork) for motor vehicles (except caravans)",
                    "[29202] Manufacture of trailers and semi-trailers",
                    "[29203] Manufacture of caravans",
                    "[29310] Manufacture of electrical and electronic equipment for motor vehicles and their engines",
                    "[29320] Manufacture of other parts and accessories for motor vehicles",
                    "[30110] Building of ships and floating structures",
                    "[30120] Building of pleasure and sporting boats",
                    "[30200] Manufacture of railway locomotives and rolling stock",
                    "[30300] Manufacture of air and spacecraft and related machinery",
                    "[30400] Manufacture of military fighting vehicles",
                    "[30910] Manufacture of motorcycles",
                    "[30920] Manufacture of bicycles and invalid carriages",
                    "[30990] Manufacture of other transport equipment n.e.c.",
                    "[31010] Manufacture of office and shop furniture",
                    "[31020] Manufacture of kitchen furniture",
                    "[31030] Manufacture of mattresses",
                    "[31090] Manufacture of other furniture",
                    "[32110] Striking of coins",
                    "[32120] Manufacture of jewellery and related articles",
                    "[32130] Manufacture of imitation jewellery and related articles",
                    "[32200] Manufacture of musical instruments",
                    "[32300] Manufacture of sports goods",
                    "[32401] Manufacture of professional and arcade games and toys",
                    "[32409] Manufacture of other games and toys, n.e.c.",
                    "[32500] Manufacture of medical and dental instruments and supplies",
                    "[32910] Manufacture of brooms and brushes",
                    "[32990] Other manufacturing n.e.c.",
                ],
                "Mining and quarrying": [
                    "[5101] Deep coal mines",
                    "[5102] Open cast coal working",
                    "[5200] Mining of lignite",
                    "[6100] Extraction of crude petroleum",
                    "[6200] Extraction of natural gas",
                    "[7100] Mining of iron ores",
                    "[7210] Mining of uranium and thorium ores",
                    "[7290] Mining of other non-ferrous metal ores",
                    "[8110] Quarrying of ornamental and building stone, limestone, gypsum, chalk and slate",
                    "[8120] Operation of gravel and sand pits; mining of clays and kaolin",
                    "[8910] Mining of chemical and fertilizer minerals",
                    "[8920] Extraction of peat",
                    "[8930] Extraction of salt",
                    "[8990] Other mining and quarrying n.e.c.",
                    "[9100] Support activities for petroleum and natural gas extraction",
                    "[9900] Support activities for other mining and quarrying",
                ],
                "Other service activities": [
                    "[94110] Activities of business and employers membership organizations",
                    "[94120] Activities of professional membership organizations",
                    "[94200] Activities of trade unions",
                    "[94910] Activities of religious organizations",
                    "[94920] Activities of political organizations",
                    "[94990] Activities of other membership organizations n.e.c.",
                    "[95110] Repair of computers and peripheral equipment",
                    "[95120] Repair of communication equipment",
                    "[95210] Repair of consumer electronics",
                    "[95220] Repair of household appliances and home and garden equipment",
                    "[95230] Repair of footwear and leather goods",
                    "[95240] Repair of furniture and home furnishings",
                    "[95250] Repair of watches, clocks and jewellery",
                    "[95290] Repair of personal and household goods n.e.c.",
                    "[96010] Washing and (dry-)cleaning of textile and fur products",
                    "[96020] Hairdressing and other beauty treatment",
                    "[96030] Funeral and related activities",
                    "[96040] Physical well-being activities",
                    "[96090] Other service activities n.e.c.",
                ],
                "Professional, scientific and technical activities": [
                    "[69101] Barristers at law",
                    "[69102] Solicitors",
                    "[69109] Activities of patent and copyright agents; other legal activities n.e.c.",
                    "[69201] Accounting and auditing activities",
                    "[69202] Bookkeeping activities",
                    "[69203] Tax consultancy",
                    "[70100] Activities of head offices",
                    "[70210] Public relations and communications activities",
                    "[70221] Financial management",
                    "[70229] Management consultancy activities other than financial management",
                    "[71111] Architectural activities",
                    "[71112] Urban planning and landscape architectural activities",
                    "[71121] Engineering design activities for industrial process and production",
                    "[71122] Engineering related scientific and technical consulting activities",
                    "[71129] Other engineering activities",
                    "[71200] Technical testing and analysis",
                    "[72110] Research and experimental development on biotechnology",
                    "[72190] Other research and experimental development on natural sciences and engineering",
                    "[72200] Research and experimental development on social sciences and humanities",
                    "[73110] Advertising agencies",
                    "[73120] Media representation services",
                    "[73200] Market research and public opinion polling",
                    "[74100] specialised design activities",
                    "[74201] Portrait photographic activities",
                    "[74202] Other specialist photography",
                    "[74203] Film processing",
                    "[74209] Photographic activities not elsewhere classified",
                    "[74300] Translation and interpretation activities",
                    "[74901] Environmental consulting activities",
                    "[74902] Quantity surveying activities",
                    "[74909] Other professional, scientific and technical activities n.e.c.",
                    "[74990] Non-trading company",
                ],
                "Public administration and defence; compulsory social security": [
                    "[84110] General public administration activities",
                    "[84120] Regulation of health care, education, cultural and other social services, not incl. social security",
                    "[84130] Regulation of and contribution to more efficient operation of businesses",
                    "[84210] Foreign affairs",
                    "[84220] Defence activities",
                    "[84230] Justice and judicial activities",
                    "[84240] Public order and safety activities",
                    "[84250] Fire service activities",
                    "[84300] Compulsory social security activities",
                ],
                "Real estate activities": [
                    "[68100] Buying and selling of own real estate",
                    "[68201] Renting and operating of Housing Association real estate",
                    "[68202] Letting and operating of conference and exhibition centres",
                    "[68209] Other letting and operating of own or leased real estate",
                    "[68310] Real estate agencies",
                    "[68320] Management of real estate on a fee or contract basis",
                ],
                "Transport and storage": [
                    "[49100] Passenger rail transport, interurban",
                    "[49200] Freight rail transport",
                    "[49311] Urban and suburban passenger railway transportation by underground, metro and similar systems",
                    "[49319] Other urban, suburban or metropolitan passenger land transport (not underground, metro or similar)",
                    "[49320] Taxi operation",
                    "[49390] Other passenger land transport",
                    "[49410] Freight transport by road",
                    "[49420] Removal services",
                    "[49500] Transport via pipeline",
                    "[50100] Sea and coastal passenger water transport",
                    "[50200] Sea and coastal freight water transport",
                    "[50300] Inland passenger water transport",
                    "[50400] Inland freight water transport",
                    "[51101] Scheduled passenger air transport",
                    "[51102] Non-scheduled passenger air transport",
                    "[51210] Freight air transport",
                    "[51220] Space transport",
                    "[52101] Operation of warehousing and storage facilities for water transport activities",
                    "[52102] Operation of warehousing and storage facilities for air transport activities",
                    "[52103] Operation of warehousing and storage facilities for land transport activities",
                    "[52211] Operation of rail freight terminals",
                    "[52212] Operation of rail passenger facilities at railway stations",
                    "[52213] Operation of bus and coach passenger facilities at bus and coach stations",
                    "[52219] Other service activities incidental to land transportation, n.e.c.",
                    "[52220] Service activities incidental to water transportation",
                    "[52230] Service activities incidental to air transportation",
                    "[52241] Cargo handling for water transport activities",
                    "[52242] Cargo handling for air transport activities",
                    "[52243] Cargo handling for land transport activities",
                    "[52290] Other transportation support activities",
                    "[53100] Postal activities under universal service obligation",
                    "[53201] Licensed carriers",
                    "[53202] Unlicensed carrier",
                ],
                "Water supply; sewerage, waste management and remediation activities": [
                    "[36000] Water collection, treatment and supply",
                    "[37000] Sewerage",
                    "[38110] Collection of non-hazardous waste",
                    "[38120] Collection of hazardous waste",
                    "[38210] Treatment and disposal of non-hazardous waste",
                    "[38220] Treatment and disposal of hazardous waste",
                    "[38310] Dismantling of wrecks",
                    "[38320] Recovery of sorted materials",
                    "[39000] Remediation activities and other waste management services",
                ],
                "Wholesale and retail trade; repair of motor vehicles and motorcycles": [
                    "[45111] Sale of new cars and light motor vehicles",
                    "[45112] Sale of used cars and light motor vehicles",
                    "[45190] Sale of other motor vehicles",
                    "[45200] Maintenance and repair of motor vehicles",
                    "[45310] Wholesale trade of motor vehicle parts and accessories",
                    "[45320] Retail trade of motor vehicle parts and accessories",
                    "[45400] Sale, maintenance and repair of motorcycles and related parts and accessories",
                    "[46110] Agents selling agricultural raw materials, livestock, textile raw materials and semi-finished goods",
                    "[46120] Agents involved in the sale of fuels, ores, metals and industrial chemicals",
                    "[46130] Agents involved in the sale of timber and building materials",
                    "[46140] Agents involved in the sale of machinery, industrial equipment, ships and aircraft",
                    "[46150] Agents involved in the sale of furniture, household goods, hardware and ironmongery",
                    "[46160] Agents involved in the sale of textiles, clothing, fur, footwear and leather goods",
                    "[46170] Agents involved in the sale of food, beverages and tobacco",
                    "[46180] Agents specialized in the sale of other particular products",
                    "[46190] Agents involved in the sale of a variety of goods",
                    "[46210] Wholesale of grain, unmanufactured tobacco, seeds and animal feeds",
                    "[46220] Wholesale of flowers and plants",
                    "[46230] Wholesale of live animals",
                    "[46240] Wholesale of hides, skins and leather",
                    "[46310] Wholesale of fruit and vegetables",
                    "[46320] Wholesale of meat and meat products",
                    "[46330] Wholesale of dairy products, eggs and edible oils and fats",
                    "[46341] Wholesale of fruit and vegetable juices, mineral water and soft drinks",
                    "[46342] Wholesale of wine, beer, spirits and other alcoholic beverages",
                    "[46350] Wholesale of tobacco products",
                    "[46360] Wholesale of sugar and chocolate and sugar confectionery",
                    "[46370] Wholesale of coffee, tea, cocoa and spices",
                    "[46380] Wholesale of other food, including fish, crustaceans and molluscs",
                    "[46390] Non-specialised wholesale of food, beverages and tobacco",
                    "[46410] Wholesale of textiles",
                    "[46420] Wholesale of clothing and footwear",
                    "[46431] Wholesale of audio tapes, records, CDs and video tapes and the equipment on which these are played",
                    "[46439] Wholesale of radio, television goods & electrical household appliances (other than records, tapes, CD's & video tapes and the equipment used for playing them)",
                    "[46440] Wholesale of china and glassware and cleaning materials",
                    "[46450] Wholesale of perfume and cosmetics",
                    "[46460] Wholesale of pharmaceutical goods",
                    "[47240] Retail sale of bread, cakes, flour confectionery and sugar confectionery in specialised stores",
                    "[47730] Dispensing chemist in specialised stores",
                    "[47741] Retail sale of hearing aids",
                    "[47749] Retail sale of medical and orthopaedic goods in specialised stores (not incl. hearing aids) n.e.c.",
                    "[47750] Retail sale of cosmetic and toilet articles in specialised stores",
                    "[47760] Retail sale of flowers, plants, seeds, fertilizers, pet animals and pet food in specialised stores",
                    "[47770] Retail sale of watches and jewellery in specialised stores",
                    "[47781] Retail sale in commercial art galleries",
                    "[47782] Retail sale by opticians",
                    "[47789] Other retail sale of new goods in specialised stores (not commercial art galleries and opticians)",
                    "[47791] Retail sale of antiques including antique books in stores",
                    "[47799] Retail sale of other second-hand goods in stores (not incl. antiques)",
                    "[47810] Retail sale via stalls and markets of food, beverages and tobacco products",
                    "[47820] Retail sale via stalls and markets of textiles, clothing and footwear",
                    "[47890] Retail sale via stalls and markets of other goods",
                    "[47910] Retail sale via mail order houses or via Internet",
                    "[47990] Other retail sale not in stores, stalls or markets",
                ]
            },
            "entity_type": [
                "ST",
                "LC"
            ]
        },
        models: {
            "physical_presence": {
                "A204": {
                    text: "Country",
                    type: "lookup",
                    lookup: "country",
                    required: true
                },
                "A247": {
                    text: "Reason for presence in this region",
                    type: "text",
                    required: true
                }
            },
            "address": {
                "line1": {
                    text: "Address line 1",
                    type: "text",
                    required: true
                },
                "line2": {
                    text: "Address line 2",
                    type: "text"
                },
                "line3": {
                    text: "Address line 3",
                    type: "text"
                },
                "line4": {
                    text: "Address line 4",
                    type: "text"
                },
                "country": {
                    text: "Country",
                    type: "lookup",
                    lookup: "country",
                    required: true
                }
            },
            "sic_code": {
                "A245": {
                    text: "Nature of business",
                    helpText: "Select from the dropdown the category that describes your business activities, or if known, your SIC code.",
                    type: "grouped_lookup",
                    lookup: "sic_code",
                    required: true,
                },
                "A246": {
                    text: "Percentage",
                    type: "number",
                    helpText: "Provide the percentage of your business activities which relate to this nature of business.",
                    required: true,
                    format: {
                        min: 1,
                        max: 100,
                        maximumFractionDigits: 0
                    }
                },
            },
            "document_upload": {
                "file": {
                    text: "Upload document",
                    type: "file",
                    required: true
                },
                "type": {
                    text: "Select document type",
                    type: "lookup",
                    lookup: "document_type",
                    required: true
                },
                "true_copy": {
                    text: "Confirm that the document is a true copy",
                    type: "lookup",
                    lookup: "yes_no",
                    helpText: "Certify this document is a true copy by having it signed and dated by an appropriate third party.",
                    display: {
                        key: "^.type",
                        operator: "not_equal_to",
                        type: "value",
                        value: "Ownership structure chart"
                    },
                    required: true
                }
            },
            "related_transaction": {
                "A214": {
                    text: "Transaction type",
                    type: "lookup",
                    lookup: "transaction_type",
                    required: true
                },
                "A213": {
                    text: "State the expected interval between cash transactions",
                    type: "lookup",
                    lookup: "interval",
                    display: "when_transaction_is_cash",
                    required: true
                },
                "A205": {
                    text: "State the value of cash expected to go through the account",
                    type: "number",
                    format: {
                        min: 0
                    },
                    display: "when_transaction_is_cash",
                    required: true
                },
                "A217": {
                    text: "Provide an explanation for cash transactions",
                    type: "text",
                    display: "when_transaction_is_cash",
                    required: true,
                    format: {
                        multiline: true
                    }
                },
                "A241": {
                    text: "State the value for international payments expected through the account",
                    type: "number",
                    format: {
                        min: 0
                    },
                    display: "when_transaction_is_international_payments",
                    required: true
                },
                "A206": {
                    text: "State the expected interval between international payments",
                    type: "lookup",
                    lookup: "interval",
                    display: "when_transaction_is_international_payments",
                    required: true
                },
                "A207": {
                    text: "Provide the countries through which international payments are made",
                    type: "multiselect",
                    lookup: "country",
                    display: "when_transaction_is_international_payments",
                    required: true
                },
                "A218": {
                    text: "Provide an explanation for international payments",
                    type: "text",
                    display: "when_transaction_is_international_payments",
                    required: true,
                    format: {
                        multiline: true
                    }
                },
                "A243": {
                    text: "Define other transactions expected through your accounts",
                    type: "text",
                    display: {
                        key: "^.A214",
                        operator: "equal_to",
                        type: "value",
                        value: "Other"
                    },
                    required: true,
                    format: {
                        multiline: true
                    }
                }
            },
            "key_principal": {
                "A125": {
                    text: "Select whether the key principal is an individual or an organisation",
                    type: "lookup",
                    lookup: "individual_organisation",
                    required: true,
                    display: {
                        key: "_entity.type",
                        operator: "not_equal_to",
                        type: "value",
                        value: "ST"
                    }
                },
                "A102": {
                    text: "Title",
                    type: "lookup",
                    lookup: "title",
                    display: "when_key_principal_is_individual",
                    required: true
                },
                "A103": {
                    text: "If other, please specify",
                    type: "text",
                    display: {
                        operator: "and",
                        conditions: [
                            "when_key_principal_is_individual",
                            {
                                key: "^.A102",
                                operator: "equal_to",
                                type: "value",
                                value: "Other"
                            }]
                    },
                    required: true
                },
                "A104": {
                    text: "Forename(s) / given name(s)",
                    type: "text",
                    display: "when_key_principal_is_individual",
                    required: true
                },
                "A105": {
                    text: "Middle name(s)",
                    type: "text",
                    display: "when_key_principal_is_individual"
                },
                "A106": {
                    text: "Surname / family name",
                    type: "text",
                    display: "when_key_principal_is_individual",
                    required: true
                },
                "A107": {
                    text: "Previous names (if applicable)",
                    type: "text",
                    display: "when_key_principal_is_individual"
                },
                "A110": {
                    text: "Current residential address",
                    type: "model",
                    model: "address",
                    display: "when_key_principal_is_individual",
                    required: true
                },
                "A108": {
                    text: "Date of birth",
                    type: "date",
                    display: "when_key_principal_is_individual",
                    required: true
                },
                "A111": {
                    text: "Nationality(ies)",
                    type: "multiselect",
                    lookup: "country",
                    display: "when_key_principal_is_individual",
                    required: true
                },
                "A153": {
                    text: "Full name",
                    type: "text",
                    display: "when_key_principal_is_organisation",
                    required: true
                },
                "A253": {
                    text: "Trading as name",
                    type: "text",
                    display: "when_key_principal_is_organisation",
                    required: true
                },
                "A252": {
                    text: "Registered address in country of incorporation",
                    type: "lookup",
                    lookup: "country",
                    display: "when_key_principal_is_organisation",
                    required: true
                },
                "A254": {
                    text: "Main business address / trading address",
                    type: "model",
                    model: "address",
                    display: "when_key_principal_is_organisation",
                    required: true
                },
                "A155": {
                    text: "Date of establishment",
                    type: "date",
                    display: "when_key_principal_is_organisation",
                    required: true
                },
                "A156": {
                    text: "Official identification number",
                    type: "text",
                    display: "when_key_principal_is_organisation",
                    required: true
                },
                "A239": {
                    text: "Capacity of the key principal",
                    type: "multiselect",
                    lookup: "sole_trader_key_principal_capacity",
                    display: "when_entity_is_sole_trader",
                    required: true
                },
                "A255": {
                    text: "Capacity of the key principal",
                    type: "multiselect",
                    lookup: "unlisted_company_key_principal_capacity",
                    display: "when_entity_is_unlisted_company",
                    required: true
                },
                "A255a": {
                    text: "Percentage of ownership",
                    type: "number",
                    required: true,
                    display: {
                        operator: "and",
                        conditions: [
                            "when_entity_is_unlisted_company",
                            {
                                key: "^.A255",
                                operator: "contains",
                                type: "value",
                                value: "Beneficial owner"
                            }
                        ]
                    },
                    format: {
                        min: 1,
                        max: 100,
                        maximumFractionDigits: 0
                    }
                }
            }
        },
        conditions: {
            "when_transaction_is_cash": {
                key: "^.A214",
                operator: "equal_to",
                type: "value",
                value: "Cash transactions"
            },
            "when_transaction_is_international_payments": {
                key: "^.A214",
                operator: "equal_to",
                type: "value",
                value: "International payments"
            },
            "when_key_principal_is_individual": {
                operator: "or",
                conditions: [{
                    key: "^.A125",
                    operator: "equal_to",
                    type: "value",
                    value: "Individual"
                }, {
                    key: "_entity.type",
                    operator: "equal_to",
                    type: "value",
                    value: "ST"
                }]
            },
            "when_key_principal_is_organisation": {
                operator: "and",
                conditions: [{
                    key: "^.A125",
                    operator: "equal_to",
                    type: "value",
                    value: "Organisation"
                }, {
                    key: "_entity.type",
                    operator: "not_equal_to",
                    type: "value",
                    value: "ST"
                }]
            },
            "when_entity_is_sole_trader": {
                key: "_entity.type",
                operator: "equal_to",
                type: "value",
                value: "ST"
            },
            "when_entity_is_unlisted_company": {
                key: "_entity.type",
                operator: "equal_to",
                type: "value",
                value: "LC"
            }
        },
        questions: {
            "_entity": {
                type: {
                    text: "type",
                    type: "lookup",
                    lookup: "entity_type"
                }
            },
            "key_principals": {
                text: "Provide the key principals for this account",
                type: "array",
                model: "key_principal",
                validation: [{
                    condition: {
                        key: "count:key_principals.*",
                        operator: "equal_to",
                        type: "value",
                        value: 0
                    },
                    message: "At least one key principal must be provided"
                }, {
                    condition: {
                        key: "sum:key_principals.*.A255a",
                        operator: "greater_than",
                        type: "value",
                        value: 100
                    },
                    message: "The sum of ownership percentage must not exceed 100"
                }]
            },
            "related_transactions": {
                text: "Provide the types of transactions that go through this account",
                type: "array",
                model: "related_transaction"
            },
            "A116": {
                text: "Issuing Authority ID number or equivalent",
                type: "text"
            },
            "A118": {
                text: "Previous names of the trading as name (if applicable)",
                type: "text"
            },
            "A121": {
                text: "Date of incorporation / establishment / formation",
                type: "date",
                required: true
            },
            "A123": {
                text: "Main business address / trading address",
                type: "model",
                model: "address"
            },
            "A127": {
                text: "Trading as name",
                type: "text",
                required: true,
                helpText: "Provide any names under which you / the company do business. Leave this field blank if not applicable."
            },
            "A133": {
                text: "Identification number or registration number",
                type: "text",
                helpText: "This is the unique number provided by Companies House, found on your Certificate of Incorporation and all correspondence from Companies House.",
                required: true
            },
            "A140": {
                text: "Full legal name",
                type: "text",
                required: true
            },
            "A153": {
                text: "Full legal name",
                type: "text"
            },
            "A154": {
                text: "Country of establishment",
                type: "lookup",
                lookup: "country"
            },
            "A155": {
                text: "Date of establishment",
                type: "date"
            },
            "A156": {
                text: "Official identification number",
                type: "text"
            },
            "A203": {
                text: "State the source of the funds",
                type: "lookup",
                lookup: "funds_source",
                required: true
            },
            "physical_presence": {
                text: "Provide the countries in which you have a physical presence",
                type: "array",
                model: "physical_presence",
                display: {
                    key: "A248",
                    operator: "equal_to",
                    type: "value",
                    value: "Yes"
                }
            },
            "A215": {
                text: "Provide details of the activities which generated the source of funds",
                type: "text",
                required: true,
                format: {
                    multiline: true
                }
            },
            "A232": {
                text: "Annual turnover of the business in the past 12 months",
                helpText: "Turnover refers to the total amount of revenue of the business.",
                required: true,
                type: "number",
                format: {
                    min: 0
                },
            },
            "A237": {
                text: "Define the purpose of the payments being made through the business",
                required: true,
                type: "text"
            },
            "A240": {
                text: "Provide a full list of all products and services which will be going through your account",
                type: "multiselect",
                lookup: "product_service",
                required: true,
                helpText: "Describe the key products / services being used in your account. (e.g. debit cards, credit cards, cheques etc.)"
            },
            "A244": {
                text: "Describe the principal business activities of the organisation",
                type: "text",
                required: true,
                format: {
                    multiline: true
                }
            },
            "sic_code": {
                text: "State the nature of your business",
                type: "array",
                model: "sic_code",
                validation: [{
                    condition: {
                        key: "count:sic_code.*",
                        operator: "equal_to",
                        type: "value",
                        value: 0
                    },
                    message: "At least one SIC code must be provided"
                },
                {
                    condition: {
                        key: "sum:sic_code.*.A246",
                        operator: "not_equal_to",
                        type: "value",
                        value: 100
                    },
                    message: "Percentages must sum to 100"
                }]
            },
            "acceptance": {
                text: "Confirm that nature of business and related percentages have been reviewed and are accurate",
                type: "boolean",
                lookup: "yes_confirm_nature_of_business",
                validation: [{
                    condition: {
                        key: "^.acceptance",
                        operator: "not_equal_to",
                        type: "value",
                        value: true
                    },
                    message: "Please correct any incorrect information and confirm"
                }]
            },
            "A248": {
                text: "Confirm whether you have a physical presence outside of your country of incorporation",
                type: "lookup",
                lookup: "yes_no",
                required: true
            },
            "A250": {
                text: "Registered address of the trust",
                type: "model",
                model: "address"
            },
            "A252": {
                text: "Registered address in country of incorporation",
                type: "model",
                model: "address"
            },
            "A253": {
                text: "Trading as name",
                type: "text",
                required: true
            },
            "A254": {
                text: "Main business address / trading address",
                type: "model",
                model: "address"
            },
            "required_documents": {
                text: "Summary of required documents",
                type: "document_summary"
            },
            "upload_documents_now": {
                text: "Would you like to include documents upload as part of your business information declaration form submission?",
                type: "lookup",
                lookup: "yes_no",
                required: true
            },
            "documents": {
                text: "Documents",
                type: "array",
                model: "document_upload",
                display: {
                    key: "upload_documents_now",
                    operator: "equal_to",
                    type: "value",
                    value: "Yes"
                },
                validation: [{
                    condition: {
                        key: "count:documents.*",
                        operator: "equal_to",
                        type: "value",
                        value: 0
                    },
                    message: "At least one document must be provided"
                }]
            }
        }
    };
}

export {
    getQuestionsByCaseId
}