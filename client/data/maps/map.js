var mapData = {"width":600,"height":600,"collisions":[],"lights":[],"high":[5,18,19,20,44,45,46,47,48,49,50,51,61,62,64,65,66,67,68,69,70,71,82,83,84,85,90,91,101,102,104,105,110,111,122,131,141,142,143,151,163,171,183,206,207,208,213,214,215,216,225,226,227,228,229,233,234,235,236,244,245,246,247,248,249,250,253,254,255,256,264,265,266,267,268,269,270,271,273,274,275,276,281,282,285,286,287,288,289,290,291,293,296,301,302,305,309,310,311,324,325,330,331,332,333,345,350,351,352,353,371,382,401,402,403,481,482,602,618,619,621,622,623,637,638,639,640,657,658,659,660,677,678,679,680,685,701,702,703,704,705,721,722,723,724,725,741,742,743,744,745,757,758,759,765,781,783,784,795,801,804,814,815,816,834,835,836,854,855,856,885,886,887,1102,1105,1184,1443,1444,1455,1456,1474,1475,1476,1477,1493,1494,1495,1496,1497,1498,1512,1513,1514,1515,1516,1517,1518,1519,1532,1533,1538,1539,1552,1553,1558,1559,1561,1562,1563,1572,1579,1581,1582,1583,1584,1599,1601,1602,1603,1604,1605,1619,1622,1623,1624,1627,1666,1667,1669,1670,1671,1678,1679,1680,1698,1699,1700,1718,1719,1720,1821,1822,1823,1841,1842,1843,1856,1857,1858,1859,1861,1862,1863,1864,1876,1881,1882,1883,1884,1903,1969,1970,1971,1972,1979,1989,1990,1991,1992,1997,1999,2009,2010,2011,2012,2017,2018,2019,2020,2029,2030,2031,2032,2161,2162,2181,2182,2241,2242,2243,2244,2245,2246,2247,2248,2249,2250,2251,2252,2253,2254,2255,2256,2538,2539,2540,2558,2559,2560,2568,2581,2588,2606,2608,2621,2625,2626,2627,2628,2629,2645,2646,2647,2648,2649,2650,2651,2665,2666,2667,2668,2669,2670,2671,2684,2685,2686,2687,2688,2689,2690,2691,2733,2734,2735,2736,2753,2754,2755,2756,2767,2769,2773,2774,2775,2776,2786,2787,2788,2789,2790,2793,2794,2795,2796,2801,2802,2805,2806,2807,2808,2809,2810,2821,2822,2824,2825,2826,2827,2828,2829,2841,2842,2844,2845,2846,2847,2848,2849,2850,2851,2852,2853,2871,2872,2873,2891,2901,2902,2903,2911,2921,2922,2923,3041,3042,3121,3122,3123,3141,3142,3143,3161,3162,3163,3221,3222,3223,3224,3241,3242,3243,3244,3261,3262,3263,3264,3277,3278,3279,3297,3298,3299,3315,3334,3335,3336,3339,3354,3355,3356,3357,3358,3359,3360,3375,3377,3378,3379,3380,3975,3976,3992,3993,3994,3995,3996,3997,3998,3999,4012,4013,4014,4015,4016,4017,4018,4019,4032,4033,4034,4035,4036,4037,4038,4039,4052,4053,4054,4055,4056,4057,4058,4059,4072,4073,4074,4075,4076,4077,4078,4079,4081,4082,4083,4101,4102,4103,4121,4122,4123,4141,4142,4143,4147,4161,4162,4163,4198,4199,4200,4218,4219,4220,4239,4341,4342,4343,4361,4362,4363,4381,4382,4383,4384,4385,4401,4402,4403,4404,4405,4761,4762,4763,4764,4765,4766,4767,4768,4769,4770,4771,4772,4773,4774,4775,4776,5121,5122,5123,5124,5125,5126,5127,5128,5141,5142,5143,5144,5145,5146,5147,5148,5161,5162,5163,5165,5166,5167,5168,5182,5183,5186,5187,5188,5209,5229,5249,5341,5342,5361,5362,5381,5382,5762,5763,5764,5765,5770,5771,5772,5773,5774,5775,5776,5777,5780,5782,5783,5784,5785,5790,5791,5792,5793,5794,5795,5796,5797,5802,5803,5804,5805,5810,5811,5812,5813,5814,5815,5816,5817,5822,5823,5824,5825,5830,5831,5832,5833,5834,5835,5836,5837,6236,6237,6238,6256,6257,6258,6276,6278,6296,6298,6379,6380,6413,6414,6415,6416,6417,6418,6419,6420,6433,6434,6435,6436,6437,6438,6439,6440,6459,6460,6513,6514,6533,6534,7015,7016,7017,7018,7019,7020,7035,7036,7037,7038,7039,7040,7057,7058,7059,7060,7095,7096,7097,7098,7099,7100,7115,7116,7117,7118,7119,7120,7135,7136,7137,7138,7139,7140,7229,7230,7267,7268,7269,7270,7287,7288,7289,7290,7307,7308,7309,7310,7341,7342,7343,7344,7345,7346,7347,7361,7362,7363,7364,7365,7366,7367,7368,7751,7752,7753,7754,7757,7758,7771,7772,7773,7774,7777,7778,7791,7792,7793,7794,7797,7798,7831,7832,7833,7834,7851,7852,7853,7854,7871,7872,7873,7874,7941,7942,7943,7944,7961,7962,7963,7964,7981,7982,7983,7984,8001,8002,8003,8004,8021,8022,8023,8024,8069,8070,8088,8089,8090,8091,8107,8108,8109,8110,8111,8112,8128,8131,8347,8348,8351,8352,8367,8368,8369,8370,8371,8372,8387,8388,8389,8390,8391,8392,8407,8408,8411,8412,8427,8428,8431,8432,8797,8798,8817,8818,9115,9116,9135,9136,9155,9156,9326,9327,9328,9329,9332,9333,9346,9347,9348,9349,9350,9351,9352,9353,9366,9367,9368,9369,9370,9371,9372,9373,9386,9387,9388,9389,9392,9393,9442,9443,9501,9502,9503,9504,9505,9506,9507,9508,9509,9510,9511,9512,9513,9514,9515,9521,9522,9523,9524,9525,9526,9527,9528,9529,9530,9531,9532,9533,9534,9535,9541,9542,9543,9544,9545,9546,9547,9548,9549,9550,9551,9552,9553,9554,9555,9561,9562,9563,9564,9565,9566,9567,9568,9569,9570,9571,9572,9573,9574,9575,9641,9642,9643,9644,9645,9646,9647,9648,9649,9650,9651,9652,9653,9654,9655,9661,9662,9663,9664,9665,9666,9667,9668,9669,9670,9671,9672,9673,9674,9675,9681,9682,9683,9684,9685,9686,9687,9688,9689,9690,9691,9692,9693,9694,9695,9701,9702,9703,9704,9705,9706,9707,9708,9709,9710,9711,9712,9713,9714,9715,9781,9782,9783,9784,9785,9787,9788,9792,9793,9801,9802,9803,9804,9805,9807,9808,9809,9810,9811,9812,9813,9821,9822,9823,9824,9825,9827,9828,9829,9830,9831,9832,9833,9841,9842,9843,9844,9845,9846,9847,9848,9849,9850,9851,9852,9853,9854,9855,9856,9857,9858,9875,9876,9877,9878,9895,9896,9897,9898,9932,9933,9934,9935,9936,9937,9938,9939,9940,9952,9953,9954,9955,9956,9957,9958,9959,9960,9972,9973,9974,9975,9976,9977,9978,9979,9980,10031,10032,10033,10034,10035,10036,10037,10038,10039,10051,10052,10053,10054,10055,10056,10057,10058,10059,10071,10072,10073,10074,10075,10076,10077,10078,10079,10091,10092,10093,10094,10095,10096,10097,10098,10101,10102,10103,10104,10105,10106,10107,10108,10111,10112,10113,10114,10115,10116,10117,10118,10121,10122,10123,10124,10125,10126,10127,10128,10131,10132,10133,10134,10135,10136,10137,10138,10142,10143,10147,10148,10149,10165,10166,10182,10183,10184,10185,10186,10194,10195,10201,10202,10203,10204,10205,10206,10214,10215,10217,10218,10219,10220,10221,10222,10223,10224,10225,10226,10227,10233,10234,10235,10237,10240,10241,10242,10243,10244,10245,10246,10247,10254,10255,10257,10260,10264,10277,10280,10292,10293,10294,10295,10296,10297,10298,10299,10301,10302,10303,10304,10305,10312,10313,10314,10315,10316,10317,10318,10319,10321,10322,10323,10324,10325,10331,10332,10333,10334,10335,10336,10337,10338,10339,10341,10342,10343,10344,10345,10352,10357,10358,10361,10362,10363,10364,10365,10372,10378,10381,10382,10383,10384,10385,10401,10402,10403,10404,10405,10413,10414,10415,10416,10417,10418,10421,10422,10423,10424,10425,10432,10433,10434,10435,10436,10437,10438,10452,10453,10454,10455,10456,10458,10459,10472,10473,10474,10475,10476,10477,10478,10479,10481,10482,10483,10484,10485,10486,10487,10488,10492,10497,10498,10501,10502,10503,10504,10507,10508,10527,10546,10547,10565,10566,10567,10582,10583,10584,10585,10586,10587,10588,10601,10602,10603,10604,10605,10606,10607,10608,10609,10621,10622,10628,10629,10641,10642,10649,10661,10662,10670,10671,10672,10673,10674,10675,10676,10677,10689,10690,10691,10692,10693,10694,10695,10696,10697,10708,10709,10710,10711,10712,10713,10714,10715,10716,10717,10718,10727,10728,10729,10730,10731,10732,10733,10734,10735,10736,10737,10738,10739,10740,10748,10749,10750,10751,10752,10753,10754,10755,10756,10757,10758,10759,10768,10769,10770,10771,10772,10773,10774,10775,10776,10777,10778,10779,10780,10787,10788,10789,10790,10791,10792,10793,10794,10795,10796,10797,10798,10799,10806,10807,10808,10809,10810,10811,10812,10813,10814,10815,10816,10817,10818,10828,10829,10830,10831,10832,10833,10834,10835,10836,10837,10838,10839,10851,10852,10853,10854,10855,10873,10874,10892,10893,10894,10895,10911,10912,10913,10914,10915,10931,10932,10933,10935,10952,10955,10972,10973,10975,10976,10992,10993,10995,10996,11012,11013,11014,11015,11016,11017,11032,11033,11035,11363,11368,11382,11383,11384,11385,11386,11387,11388,11389,11402,11403,11404,11405,11406,11407,11408,11409,11563,11564,11565,11566,11581,11582,11583,11584,11585,11586,11601,11602,11603,11604,11605,11746,11788,11789,11790,11791,11792,11793,11794,11795,11808,11809,11810,11811,11812,11813,11814,11815,11828,11829,11830,11831,11832,11833,11834,11835,11921,11922,11923,11924,11925,11926,11927,11941,11942,11943,11944,11945,11946,11947,12107,12121,12122,12123,12203,12204,12205,12206,12207,12208,12209,12223,12224,12225,12226,12227,12228,12229,12230,12243,12261,12262,12263,12281,12282,12283,12353,12354,12355,12356,12357,12358,12359,12360,12364,12365,12366,12368,12369,12373,12374,12375,12376,12377,12378,12379,12380,12382,12383,12384,12385,12386,12387,12388,12389,12390,12391,12393,12394,12395,12396,12397,12398,12399,12400,12413,12416,12417,12420,12474,12475,12553,12567,12568,12569,12570,12571,12572,12573,12574,12575,12576,12577,12578,12579,12587,12588,12589,12590,12591,12592,12593,12594,12595,12596,12597,12598,12599,12607,12608,12609,12610,12611,12612,12613,12614,12615,12616,12617,12618,12619,12721,12741,12764,12882,12883,12902,12903,12904,12905,12906,12907,12908,12921,12922,12923,12924,12925,12926,12927,12928,12929,12930,12931,12932,12933,12934,12935,12936,12937,12949,12950,12951,12952,12953,12954,12955,12956,12957,12958,12969,12970,12971,12972,12973,12974,12975,12976,12977,12978,12989,12993,12994,12997,12998,13053,13054,13055,13056,13073,13074,13075,13076,13093,13094,13095,13096,13113,13116,13162,13163,13166,13170,13171,13182,13183,13185,13186,13187,13188,13189,13190,13191,13201,13202,13203,13204,13205,13206,13207,13208,13209,13210,13211,13336,13389,13390,13391,13392,13782,13783,13784,13785,13786,13787,13798,13799,13800,13802,13803,13804,13805,13806,13807,13810,13811,13812,13816,13817,13818,13819,13820,13822,13823,13824,13825,13826,13829,13830,13831,13832,13833,13836,13837,13838,13839,13840,13842,13843,13844,13845,13846,13849,13850,13851,13852,13853,13856,13857,13858,13859,13860,13862,13863,13864,13865,13866,13867,13868,13869,13870,13871,13872,13873,13874,13875,13876,13877,13878,13879,13880,14021,14022,14023,14024,14025,14026,14027,14028,14029,14030,14032,14041,14042,14043,14044,14045,14046,14047,14048,14049,14095,14096,14097,14115,14116,14117,14247,14670],"animated":{"1236":{"d":200,"l":5},"1237":{"l":4},"1411":{"l":7},"1418":{"d":200,"l":3},"1428":{"l":8},"1906":{"l":8},"1914":{"l":7},"2781":{"l":3},"3931":{"l":7},"3948":{"l":8},"5049":{"d":500,"l":2},"5051":{"d":500,"l":2},"5053":{"d":500,"l":2},"5209":{"l":4},"5229":{"l":4},"5249":{"l":4},"5269":{"l":4},"5285":{"d":700,"l":8},"5305":{"d":700,"l":8},"5313":{"l":8},"5325":{"d":700,"l":8},"5333":{"l":8},"5341":{"d":500,"l":2},"5343":{"d":500,"l":2},"5345":{"d":700,"l":8},"5361":{"d":500,"l":2},"5363":{"d":500,"l":2},"5381":{"d":500,"l":2},"5383":{"d":500,"l":2},"5750":{"l":11},"7541":{"l":10},"7561":{"l":10},"7581":{"l":10},"7601":{"l":10},"7621":{"l":10},"7641":{"l":10},"9301":{"l":10},"9933":{"l":4},"9937":{"l":4},"9953":{"l":4},"9957":{"l":4},"9973":{"l":4},"9977":{"l":4},"9993":{"l":4},"9997":{"l":4}},"tilesets":[{"name":"tilesheet","firstGID":1,"lastGID":15620,"imageName":"tilesheet.png","scale":2}],"animations":{"1":[{"duration":150,"tileID":1},{"duration":150,"tileID":2},{"duration":150,"tileID":3}],"241":[{"duration":150,"tileID":241},{"duration":150,"tileID":242},{"duration":150,"tileID":243}],"606":[{"duration":450,"tileID":606},{"duration":450,"tileID":607}],"626":[{"duration":450,"tileID":626},{"duration":450,"tileID":627}],"646":[{"duration":450,"tileID":646},{"duration":450,"tileID":647}],"706":[{"duration":150,"tileID":706},{"duration":150,"tileID":707},{"duration":150,"tileID":708},{"duration":150,"tileID":709}],"726":[{"duration":150,"tileID":726},{"duration":150,"tileID":727},{"duration":150,"tileID":728},{"duration":150,"tileID":729}],"748":[{"duration":250,"tileID":748},{"duration":250,"tileID":749}],"1001":[{"duration":250,"tileID":1001},{"duration":250,"tileID":1002},{"duration":250,"tileID":1003},{"duration":250,"tileID":1004}],"1021":[{"duration":250,"tileID":1021},{"duration":250,"tileID":1022},{"duration":250,"tileID":1023},{"duration":250,"tileID":1024}],"1041":[{"duration":250,"tileID":1041},{"duration":250,"tileID":1042},{"duration":250,"tileID":1043},{"duration":250,"tileID":1044}],"1061":[{"duration":250,"tileID":1061},{"duration":250,"tileID":1062},{"duration":250,"tileID":1063},{"duration":250,"tileID":1064}],"1251":[{"duration":150,"tileID":1251},{"duration":150,"tileID":1252},{"duration":150,"tileID":1253},{"duration":150,"tileID":1254},{"duration":150,"tileID":1255},{"duration":150,"tileID":1256}],"1257":[{"duration":150,"tileID":1257},{"duration":150,"tileID":1258},{"duration":150,"tileID":1259},{"duration":150,"tileID":1260}],"1271":[{"duration":150,"tileID":1271},{"duration":150,"tileID":1272},{"duration":150,"tileID":1273},{"duration":150,"tileID":1274},{"duration":150,"tileID":1275},{"duration":150,"tileID":1276}],"1291":[{"duration":150,"tileID":1291},{"duration":150,"tileID":1292},{"duration":150,"tileID":1293},{"duration":150,"tileID":1294}],"1311":[{"duration":150,"tileID":1311},{"duration":150,"tileID":1312},{"duration":150,"tileID":1313},{"duration":150,"tileID":1314}],"1331":[{"duration":150,"tileID":1331},{"duration":150,"tileID":1332},{"duration":150,"tileID":1333},{"duration":150,"tileID":1334}],"1401":[{"duration":150,"tileID":1401},{"duration":150,"tileID":1402},{"duration":150,"tileID":1403},{"duration":150,"tileID":1404},{"duration":150,"tileID":1405},{"duration":150,"tileID":1406},{"duration":150,"tileID":1407},{"duration":150,"tileID":1408},{"duration":150,"tileID":1409},{"duration":150,"tileID":1410},{"duration":150,"tileID":1411},{"duration":150,"tileID":1412},{"duration":150,"tileID":1413},{"duration":150,"tileID":1414},{"duration":150,"tileID":1415},{"duration":150,"tileID":1416},{"duration":150,"tileID":1417}],"1421":[{"duration":150,"tileID":1421},{"duration":150,"tileID":1422},{"duration":150,"tileID":1423},{"duration":150,"tileID":1424},{"duration":150,"tileID":1425},{"duration":150,"tileID":1426},{"duration":150,"tileID":1427},{"duration":150,"tileID":1428},{"duration":150,"tileID":1429},{"duration":150,"tileID":1430},{"duration":150,"tileID":1431},{"duration":150,"tileID":1432},{"duration":150,"tileID":1433},{"duration":150,"tileID":1434},{"duration":150,"tileID":1435}],"1501":[{"duration":150,"tileID":1501},{"duration":150,"tileID":1502},{"duration":150,"tileID":1503}],"1521":[{"duration":150,"tileID":1521},{"duration":150,"tileID":1522},{"duration":150,"tileID":1523}],"1586":[{"duration":150,"tileID":1586},{"duration":150,"tileID":1587},{"duration":150,"tileID":1588},{"duration":150,"tileID":1589},{"duration":150,"tileID":1590},{"duration":150,"tileID":1591}],"1721":[{"duration":150,"tileID":1721},{"duration":150,"tileID":1722},{"duration":150,"tileID":1723}],"1741":[{"duration":150,"tileID":1741},{"duration":150,"tileID":1742},{"duration":150,"tileID":1743}],"1747":[{"duration":150,"tileID":1747},{"duration":150,"tileID":1748},{"duration":150,"tileID":1749}],"1781":[{"duration":150,"tileID":1781},{"duration":150,"tileID":1782},{"duration":150,"tileID":1783},{"duration":150,"tileID":1784},{"duration":150,"tileID":1785},{"duration":150,"tileID":1786},{"duration":150,"tileID":1787},{"duration":150,"tileID":1788},{"duration":150,"tileID":1789},{"duration":150,"tileID":1790},{"duration":150,"tileID":1791},{"duration":150,"tileID":1792},{"duration":150,"tileID":1793},{"duration":150,"tileID":1794},{"duration":150,"tileID":1795},{"duration":150,"tileID":1796},{"duration":150,"tileID":1797},{"duration":150,"tileID":1798},{"duration":150,"tileID":1799}],"1801":[{"duration":150,"tileID":1801},{"duration":150,"tileID":1802},{"duration":150,"tileID":1803},{"duration":150,"tileID":1804},{"duration":150,"tileID":1805},{"duration":150,"tileID":1806},{"duration":150,"tileID":1807},{"duration":150,"tileID":1808},{"duration":150,"tileID":1809},{"duration":150,"tileID":1810},{"duration":150,"tileID":1811},{"duration":150,"tileID":1812},{"duration":150,"tileID":1813},{"duration":150,"tileID":1814},{"duration":150,"tileID":1815},{"duration":150,"tileID":1816},{"duration":150,"tileID":1817},{"duration":150,"tileID":1818},{"duration":150,"tileID":1819}],"1921":[{"duration":150,"tileID":1921},{"duration":150,"tileID":1922},{"duration":150,"tileID":1923},{"duration":150,"tileID":1924},{"duration":150,"tileID":1925},{"duration":150,"tileID":1926},{"duration":150,"tileID":1927},{"duration":150,"tileID":1928},{"duration":150,"tileID":1929},{"duration":150,"tileID":1930},{"duration":150,"tileID":1931},{"duration":150,"tileID":1932},{"duration":150,"tileID":1933},{"duration":150,"tileID":1934},{"duration":150,"tileID":1935}],"2521":[{"duration":150,"tileID":2521},{"duration":150,"tileID":2522},{"duration":150,"tileID":2523}],"2761":[{"duration":150,"tileID":2761},{"duration":150,"tileID":2762},{"duration":150,"tileID":2763}],"3126":[{"duration":450,"tileID":3126},{"duration":450,"tileID":3127},{"duration":450,"tileID":3128}],"3146":[{"duration":450,"tileID":3146},{"duration":450,"tileID":3147}],"3166":[{"duration":450,"tileID":3166},{"duration":450,"tileID":3167}],"3226":[{"duration":150,"tileID":3226},{"duration":150,"tileID":3227},{"duration":150,"tileID":3228},{"duration":150,"tileID":3229}],"3246":[{"duration":150,"tileID":3246},{"duration":150,"tileID":3247},{"duration":150,"tileID":3248},{"duration":150,"tileID":3249}],"3268":[{"duration":150,"tileID":3268},{"duration":150,"tileID":3269}],"3521":[{"duration":150,"tileID":3521},{"duration":150,"tileID":3522},{"duration":150,"tileID":3523},{"duration":150,"tileID":3524}],"3541":[{"duration":150,"tileID":3541},{"duration":150,"tileID":3542},{"duration":150,"tileID":3543},{"duration":150,"tileID":3544}],"3561":[{"duration":150,"tileID":3561},{"duration":150,"tileID":3562},{"duration":150,"tileID":3563},{"duration":150,"tileID":3564}],"3581":[{"duration":150,"tileID":3581},{"duration":150,"tileID":3582},{"duration":150,"tileID":3583},{"duration":150,"tileID":3584}],"3777":[{"duration":150,"tileID":3777},{"duration":150,"tileID":3778},{"duration":150,"tileID":3779},{"duration":150,"tileID":3780}],"3811":[{"duration":150,"tileID":3811},{"duration":150,"tileID":3812},{"duration":150,"tileID":3813},{"duration":150,"tileID":3814}],"3831":[{"duration":150,"tileID":3831},{"duration":150,"tileID":3832},{"duration":150,"tileID":3833},{"duration":150,"tileID":3834}],"3851":[{"duration":150,"tileID":3851},{"duration":150,"tileID":3852},{"duration":150,"tileID":3853},{"duration":150,"tileID":3854}],"3921":[{"duration":150,"tileID":3921},{"duration":150,"tileID":3922},{"duration":150,"tileID":3923},{"duration":150,"tileID":3924},{"duration":150,"tileID":3925},{"duration":150,"tileID":3926},{"duration":150,"tileID":3927},{"duration":150,"tileID":3928},{"duration":150,"tileID":3929},{"duration":150,"tileID":3930},{"duration":150,"tileID":3931},{"duration":150,"tileID":3932},{"duration":150,"tileID":3933},{"duration":150,"tileID":3934},{"duration":150,"tileID":3935},{"duration":150,"tileID":3936},{"duration":150,"tileID":3937}],"3941":[{"duration":150,"tileID":3941},{"duration":150,"tileID":3942},{"duration":150,"tileID":3943},{"duration":150,"tileID":3944},{"duration":150,"tileID":3945},{"duration":150,"tileID":3946},{"duration":150,"tileID":3947},{"duration":150,"tileID":3948},{"duration":150,"tileID":3949},{"duration":150,"tileID":3950},{"duration":150,"tileID":3951},{"duration":150,"tileID":3952},{"duration":150,"tileID":3953},{"duration":150,"tileID":3954},{"duration":150,"tileID":3955}],"4021":[{"duration":150,"tileID":4021},{"duration":150,"tileID":4022},{"duration":150,"tileID":4023}],"4041":[{"duration":150,"tileID":4041},{"duration":150,"tileID":4042},{"duration":150,"tileID":4043}],"4106":[{"duration":150,"tileID":4106},{"duration":150,"tileID":4107},{"duration":150,"tileID":4108},{"duration":150,"tileID":4109},{"duration":150,"tileID":4110},{"duration":150,"tileID":4111}],"4241":[{"duration":150,"tileID":4241},{"duration":150,"tileID":4242},{"duration":150,"tileID":4243}],"4261":[{"duration":150,"tileID":4261},{"duration":150,"tileID":4262},{"duration":150,"tileID":4263}],"4267":[{"duration":150,"tileID":4267},{"duration":150,"tileID":4268},{"duration":150,"tileID":4269}],"4301":[{"duration":150,"tileID":4301},{"duration":150,"tileID":4302},{"duration":150,"tileID":4303},{"duration":150,"tileID":4304},{"duration":150,"tileID":4305},{"duration":150,"tileID":4306},{"duration":150,"tileID":4307},{"duration":150,"tileID":4308},{"duration":150,"tileID":4309},{"duration":150,"tileID":4310},{"duration":150,"tileID":4311},{"duration":150,"tileID":4312},{"duration":150,"tileID":4313},{"duration":150,"tileID":4314},{"duration":150,"tileID":4315},{"duration":150,"tileID":4316},{"duration":150,"tileID":4317},{"duration":150,"tileID":4318},{"duration":150,"tileID":4319}],"4321":[{"duration":150,"tileID":4321},{"duration":150,"tileID":4322},{"duration":150,"tileID":4323},{"duration":150,"tileID":4324},{"duration":150,"tileID":4325},{"duration":150,"tileID":4326},{"duration":150,"tileID":4327},{"duration":150,"tileID":4328},{"duration":150,"tileID":4329},{"duration":150,"tileID":4330},{"duration":150,"tileID":4331},{"duration":150,"tileID":4332},{"duration":150,"tileID":4333},{"duration":150,"tileID":4334},{"duration":150,"tileID":4335},{"duration":150,"tileID":4336},{"duration":150,"tileID":4337},{"duration":150,"tileID":4338},{"duration":150,"tileID":4339}],"4441":[{"duration":150,"tileID":4441},{"duration":150,"tileID":4442},{"duration":150,"tileID":4443},{"duration":150,"tileID":4444},{"duration":150,"tileID":4445},{"duration":150,"tileID":4446},{"duration":150,"tileID":4447},{"duration":150,"tileID":4448},{"duration":150,"tileID":4449},{"duration":150,"tileID":4450},{"duration":150,"tileID":4451},{"duration":150,"tileID":4452},{"duration":150,"tileID":4453},{"duration":150,"tileID":4454},{"duration":150,"tileID":4455}],"9334":[{"duration":150,"tileID":9334},{"duration":150,"tileID":9335},{"duration":150,"tileID":9336},{"duration":150,"tileID":9337}],"9354":[{"duration":150,"tileID":9354},{"duration":150,"tileID":9355},{"duration":150,"tileID":9356},{"duration":150,"tileID":9357}],"9374":[{"duration":150,"tileID":9374},{"duration":150,"tileID":9375},{"duration":150,"tileID":9376},{"duration":150,"tileID":9377}]},"tilesize":16}