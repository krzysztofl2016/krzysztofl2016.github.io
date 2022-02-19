'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a7aaaffb7cc2b692afcea5361dc2b5f7",
"index.html": "9b13f3904260a3d8c54b0829ad741319",
"/": "161bde79253588b79e599dfcd46a81ac",
"main.dart.js": "677bb6c005536bce29ffe18abf4e0d86",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "04a1fb5078b4ded06ceb721d831873a2",
".git/version.json": "a7aaaffb7cc2b692afcea5361dc2b5f7",
".git/index.html": "161bde79253588b79e599dfcd46a81ac",
".git/ORIG_HEAD": "38d34c12a5226ea9b8b4264f37799b70",
".git/config": "0fc3838c6a97aee595ee930799161fe9",
".git/main.dart.js": "8bbb29d2121ae860a053de3c14299709",
".git/objects/0d/80e8a97f71b8d297031958afeebfc7bfd49410": "64a7ceb01a99a2df86880ad2faa3875d",
".git/objects/0d/e9eddb09cee7fe8f20d608f7689c36872e4727": "fdbb3e45ee24a838ccbf8cb3504e22c4",
".git/objects/95/74d9543cda537e7f7e4931268babe33614850e": "27b6c8062091a2df4849537fdee1cf73",
".git/objects/95/6d343563142510af7db9139029d9c320b5fd7e": "6a3a270cd02f3d136a62090063aefb70",
".git/objects/95/2c1f70b37e107d2f9526c53164ca187f98110a": "0acd7d7688a5947ffae50ddf6d4c182e",
".git/objects/59/044fb6ce42532c27d7f847092b9586ff3ba8a0": "6e4b97b5e9d5768dc832ebd539d6db5a",
".git/objects/0c/b904d5c099d78f50a563f414f146e413e8bf03": "423a89a7b8ed7a04fa5d48e34cea9e09",
".git/objects/0c/176ed24138db010d15ae2f654a02b02c4f8724": "e08cdaf2ea4ef2d22674b87c24e7e4b1",
".git/objects/66/8d77fd5bb3fd546012ac847016cc3c5e55b32f": "feb7ae52122e0f464032ef1a2f5a287c",
".git/objects/3e/ceb5affab2dbf13e933eeb58d72a94a29ecf89": "ec441627940b5cefe8020ebff6b67e61",
".git/objects/3e/506f9939dcca73013be634748b7c84fe9f90d4": "8f20c83dbd53afe693961ab28f649bf5",
".git/objects/3e/649284b2b218e64be8003e4ebe5f50e006f967": "684c08a8240af3f42472f9ac25a018ba",
".git/objects/50/603fac348c10ea81da27c06952084d7d56c282": "6b97435ab8606f59bc4b46408cc80cc6",
".git/objects/68/43d43a6f8b977eb69d56103ed80325d5050ebd": "59c4e3037ce79d3ee0040aa706500868",
".git/objects/68/0e48f5d459d11ebb0c95da0306a3988832fc09": "66bf571481c84c7b6583b4303b3ac538",
".git/objects/68/3eb2774218b2b9d29886692a48db43d4e88533": "caa0e20259b4b388d1f8375559098ee1",
".git/objects/57/3f23d4d6ecaa5b4e61f28a8b2b9d5cb7218888": "05806ed3c430b761e7dd9cf4cae53917",
".git/objects/6f/873cf390626a53a0cce12db81a56464fe671df": "e358041f9556c2115640e64e67944993",
".git/objects/9b/ad2f7f8cf938a3acfc49ccb89fc3a562b1133b": "7062495c8b7960f073ae82fec5f22b24",
".git/objects/9b/24a96cde9971118678d61da8914a1ede4ed977": "8783530b55fce7477b5ac5c09c42252a",
".git/objects/9e/aceb4cfdda92f2f98baf4c54c0b0fe190aa84e": "60d25c0f70fa59404276ab2a89d730d7",
".git/objects/9e/c08cd29339f644d8b0220d5aadde83a1517d1d": "eb02c8a240e0932901bf9501710d3d6d",
".git/objects/6a/266e8e0647e12af488f15b1e786cd2b05dce6a": "1b0cfe3076298b9196cbe5fc5100dfbb",
".git/objects/6a/201d87163d357dcd8b66649c0ea800db66dc1f": "c163247e248bb2432765e5527604d311",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/b8b3c8645dafb4dd0bc4ef04a004ba49699602": "873525dfdde5bcde79e90574857cc837",
".git/objects/69/1db5b0eb8408535c13490b39614df52110d995": "9b839319f78872248086f1123f294a39",
".git/objects/69/b01b810dda5ef7deff9fe353e580b7bfc64c11": "087d6499879a8045b524f718149be052",
".git/objects/56/b76dcaae73a079e4de666a6b2616e0ddc46495": "6e1310c07656690a991bf3336e3f5e7e",
".git/objects/3d/f62eaacbfd1b9949d3ba331ea6ede085a7f536": "6e29c8a9cc9c3055264a4c212e2c9980",
".git/objects/3d/3ab2d8e3f7d2a038f7794c05f34cc554e6b448": "4b89cdf63e46db46afca3306494d8f9d",
".git/objects/67/b1c9030d4e9f2cf87b45a4c1da1779afc8a045": "8ab378e1316fcfba81b58b24704f51f7",
".git/objects/0b/841c8df9c4c3925a56693f18dcf8c1ab23d218": "6fb1b411e1fb1d7a28fc82b5cb6abe6f",
".git/objects/93/4e988ec15942876a1c6bd9239d4ae56b882965": "2795ddd6e6ab65d647972da215f5a420",
".git/objects/93/42fc5eb834c719366e9acf778f6b75f673b737": "d07b72bfceea0fdcbe87a7e4939c9f8b",
".git/objects/94/080b683d162754bbdf6060c5d7c05017f5768b": "a01b5021b304459df110740e20ef0697",
".git/objects/0e/1a78d40fa44757e81925b7c600416cb92bdf14": "0d1bfb64efd883b1a22dcf4cad1eb053",
".git/objects/60/353ec4066836b902dad74479f62df28c97665c": "c548b6cbf6a1f85324ce0439e78bb0fc",
".git/objects/5a/1bc02b8fb42bec2135ab862f0ab871439e2485": "b8b66098bdb02d66b14ee343e93b2c2f",
".git/objects/5a/c5a47e6f9f4a91c9bcd2cfc8d8de8bd3cb2379": "cc8cc319ed06544407aac20f3fc0cdba",
".git/objects/33/3444eb39301a1b5215e0ccdc467a914e2627c9": "337b85074b52081073acfdbef0b381a0",
".git/objects/9d/027bb53026f6ee1867020f195b60c61bab8539": "a09759d39087794a1d64dfd02b958e2c",
".git/objects/9c/5517664913d08005fe0a0ecc79a858cc02a5a4": "687094079a343f6467f5b20cd7cd34b6",
".git/objects/02/1c92d2824257afb46de9e683c348a694845c8e": "d2f2f118acc1478967c88ac9d2543b43",
".git/objects/02/ffd2e8a5b787e21abf5685737bf1bb00b08e92": "06f3318a179e6f8ef6a64893a70b4c19",
".git/objects/b2/5b0bb5480824376a3d76c7991248b287fcbd53": "8692edc06abccb63929b8525b1596d7c",
".git/objects/d9/c4ec947097d72ae0a89974b93a2a66acc61cf2": "885b8864bf94fc73db5bf4b15e80ed89",
".git/objects/d9/6bf5987b544729518e5a76e265433bfbea5d1c": "3bf0898b0a4ba804e05154b533c20622",
".git/objects/d9/64ac4b15da326cf2888db8143107cfde3f03f6": "b6c0909b5e86a4981a24152e5176dc3a",
".git/objects/ac/21e6c256c0e0b9c4f519e11caf1f8059cbbd4d": "345cc01f2851aa7c146e9526d47f5873",
".git/objects/ac/0f13560f8942fb1238ac1c767febcbb8a998d9": "577b047ed4ac50289ec3d94ffab74dca",
".git/objects/ac/76b0ca689181376e0b3b95d4886b80c184d50e": "3c773b785e4310b7fb1102e2efa88b4c",
".git/objects/ad/d483f3d089381233b22d7250e2be1a9dc5537b": "b87c999d4687a8fc3f46fe21d6cb8941",
".git/objects/d7/72ed9f80d91070a2a56bd3803c66f427efe4fd": "c25539089fb36331b3beb55d29104e64",
".git/objects/d0/0ec0001b09fa9b28d0e92478633e8155d41441": "ac24cbc6126d078ca6e9ac5a2f964903",
".git/objects/df/8b3a6cc54535241e89b4bb782e59f9e826befc": "0303b9a6f22476bfc2062226cbfaff30",
".git/objects/a2/6e5e1fc2cd7ade1ce31e41032febfa3f14e612": "7aa30e3814b6b0551f3807d0adcc79ac",
".git/objects/a2/ad0cd23b04e798bd5211b300493013469e3694": "eb4a78c84ddd4ca11a37e54ae2ebe632",
".git/objects/a5/f1c4b7b9479ddefccc5d04527c68a3baf53698": "f0005d4f17818b49781bc9242196a809",
".git/objects/bd/3e8bb5a3b17f4b3d12d77ef8fd503d669d2e8a": "0da6c910be0fe07285cd2fa1e4431980",
".git/objects/bd/29c624e23cd65bbe2e5f99e7b667b5de369e27": "30cbdaf2faca5b4ffe42fca567fd27b9",
".git/objects/bd/36ad4a5baa566cb84b90b1148c5894fb83c986": "c4f950d19baba1f0e387fa5e6e40d6b2",
".git/objects/bd/5edf4446cc6baf5a79e305675292c6fc262a7d": "0534632045ee4030440f1d6222a8a391",
".git/objects/d6/29e653a36fd1c5179d5bb071baa67f4bd6bcb4": "bd78dd9b387054fec07cdbab54256d6d",
".git/objects/d6/5335e7acce67dfd125617dddf78befdf793871": "6f68839a69ed73fdfd6a11f4554a8e79",
".git/objects/d6/5ef7a9c8f741f4d35f8bb05014529689b48f5a": "b74cc2f33e8002ce0488efdee55833bf",
".git/objects/bc/309610e0c66ad129290e1c83bc8634c2971a26": "06a96dbd75205c98f55e5b6338ef45c4",
".git/objects/ae/37f0972a45685f98435ae5db196f6eea115cf5": "2fe0b5f779322ea513c333be8ed80d88",
".git/objects/d8/86f89fe5396e0ef8b8ba332bb4ddc0663a7a36": "2160a6f7dd7c08e455733aaf81df50fe",
".git/objects/ab/5f0129ebe376a8cefeefb24cb6aa8309bb41cc": "d94a48021ebcdae9bfa78a79b0fd299e",
".git/objects/ab/86cf9ea44da4f2c2a38dd5ff3a5dbaafa9b382": "a29f83ab1ee0d8e46f23610504fa81af",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/d597154bf003b943f523dd6bb6e242e6a0be5a": "a4b6c54238980f5019d1b68692d1fca8",
".git/objects/e2/b7dd22453f755367c597ae28b70e5c27b59631": "ba59449a2dba6ba377b5fec0594e9cfc",
".git/objects/e2/263a318a69882adefc5ad75fba6768435c80ee": "5b8db9e6aa9652442da156b8e55d5d4f",
".git/objects/f3/f1ee3c0610eb4b2bddc2aaa116a01226611580": "6808b5bda4e915ff9dde079ab7628198",
".git/objects/c0/c95d85b5d9e3aaed95fb41fa3e9d106b340c54": "81a0a37d792819cb891d91e91c17239c",
".git/objects/f2/36f4c3f8e8a6e4828d065d3624237d275eace0": "f4fd693b7246fd5c30a45ef9590101fa",
".git/objects/f5/e95755a4cdb5c24fdbc4732f83d18ca9bf7297": "a227ba1b3df38fb6df381f2e4efaee7e",
".git/objects/f5/d231d4fb46a24fa0d8567a9dfaba6c726dfc12": "b99f6fa0adbeabf21da2ac7945ee1c22",
".git/objects/e3/a5d9b1465d97533afab42adb6c82c18b7aeecb": "9a4c6d5f5ddfffdf66c59da9fcf4e62e",
".git/objects/e3/287d004e1a927415a06d6de64270349e4084e8": "8e92abfe2ecb2ffc9a61e863dee16fb1",
".git/objects/e3/778c2f2e3c04106d0faef451903e29a93d7079": "7adf7b97d802e47d501c83dd1cbec6ec",
".git/objects/cf/9c59f91413576a915f98edd2f3924b6ceb87e9": "2502eee45d36eb255f91a4f388d9fd52",
".git/objects/ca/f5b4daee341bedb6a93a0cd6b13e5ca3fb3db7": "cd5650d81c54e6e6f636b89095f9fd36",
".git/objects/ca/053e8e7504a01763022eccefb5cdc628517492": "d816319f3cc81beeaa6e04757b238ca6",
".git/objects/ca/9f9b7f00312b477fc5d03cbdd5e84416ecc277": "323b39bb8ca97ca88500f970a25528f1",
".git/objects/e4/89beab9cb132fdac29e786eb51334af1885bb6": "0c807427e5bc4737e2122f5dc10cb5e2",
".git/objects/fe/25f67700dd9463a63e347bfad31b63c0a53089": "9467948272ad9a056a38cc22227c89ad",
".git/objects/ed/7b7a8419df65eb5cf5efa5215817ec91682161": "2469d5479842f0fe50a53bbc3aa23578",
".git/objects/c6/218fccb9847b1b4a2ad22126b546b38273126e": "c58085998eadab0dfe7579cc2b660cc9",
".git/objects/c6/716b98074ff1b594002bbc0e67eaf23c442838": "c779182f542fde47a859226a4abe70cb",
".git/objects/4e/309ca1a734f779e2111d8ee3cebc13374022cb": "127e1e0a4cc87d07ff2ad49f288272ac",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/1d82ee24387ef2b6ce8cd6687b1e139854115b": "571840f1696d08281bc26c880c2beb18",
".git/objects/27/676eb344eddd31b96b01149a749ee4a605b935": "6d4646b65248838ea05af3b9a3183426",
".git/objects/27/3688f3ce00aa60c90613e7d0c37c7609a59583": "f295cb8c6c81cfa5f9d7c41c8cbbf908",
".git/objects/4b/4b09b2e937ff6edad61503c14aa7b738047554": "14852a8e8ce85e9cd780bf010e1500c3",
".git/objects/7d/40d2ba499d1af7411040816cab8440524ce092": "efcbe11cab017fe233f94bbdfb7ffbf0",
".git/objects/7d/f7ea0ed0da05ca2bfb2f762be0c01503634137": "752ddb2e59fec75a422f1ac7b2c9ca99",
".git/objects/7d/9718be76fc400a973ef5477011e49f40e528e2": "d265d8fde82554386e4e7422024c7cf5",
".git/objects/29/0423b283f1cd5d6f520cfc0c6cf06566489884": "cb34438be0da6f8748151d03cca9259a",
".git/objects/29/b68b0c86298758372fccba96714297db97311d": "dbd1a8780be12d6b8627da9a1a657169",
".git/objects/29/deca887306db2c33738f8a9fe4ec40ba87dde5": "d9ad9ad80f4e2d3ff086aa2f40145079",
".git/objects/7c/8ad56d936fe55819b02acb0f008bb2dbaa54a6": "e0d6aa9586ebeb6db08924b7a011e268",
".git/objects/7c/dc6178fdbb00d5f6a2b909f795fb11fc610bce": "8bfc2bbc6932925fecb9e2c05bf5b62b",
".git/objects/89/bd7c74b7b3d28d2efe79e3b3902531ed6b4105": "5e65d56f36edf1f9d834403298d4e691",
".git/objects/45/b203ee2c7c70115a4a3e78f2d47da94a5948cc": "5f490abbf1c662296c6d72d2e6965205",
".git/objects/1f/4644aef70b2924ae83f5311fe03b318851be2b": "6420d82f0bab922264846888b5c75574",
".git/objects/73/f2f34423e687b5f98f6d72c8b77516aa94e01c": "f242d869d3466a709bb199be55c163e7",
".git/objects/73/73a2fba9d3a9e9eab54631fa6082edea7ba58a": "e93419fd041799093f72ada9ada565c0",
".git/objects/87/77c2f6fc348214dac2a638d349010b53280651": "1612e4c347b6c003a02749e9e072a937",
".git/objects/74/614e354d2c8a2a31256e02ca2fef4ec775fb16": "9861e0d372128056062f61fccf39060a",
".git/objects/74/d812fc3f0e4b5f2443adffd66a09118be5ab71": "c55a153374c56d690e843fefa38288b5",
".git/objects/74/689a857a7852edad93dd571cf1a7cec66d0c9b": "bc79bcd24e80583f801eb83dfcd85109",
".git/objects/1a/0da08be4c4ea08ce2f20bda3d8313771501a5e": "c8dae9b6e6bf1faf17019a86f35d96ff",
".git/objects/28/43d24695b048d23740958e22dd0afdbc005bd5": "a0a170fad47b45ddba2133f5ae22fa70",
".git/objects/17/45b2e603930f97e875b07db9eceb2dd216e201": "2ffe935739d4015f59c1d4f597ec9b5d",
".git/objects/17/b7866c533b43dea2e98754639c25bae6b013ed": "78ea89b828705b05f16bc2a607b7f64e",
".git/objects/17/392e1b0635865e0c5090fb4c4aa397ff032b88": "663a72392f058874b52b7ee5a716ed64",
".git/objects/8f/4230b6a1a72b4146b94a78e6c49cff6de53994": "9f171b5a32e4c88fdbdf6e8e4468cdbb",
".git/objects/8f/ec598dbe30916cfcdb4fe72151ac3c2d616811": "0cabc2c3675c1b07788ddc37ee2da5d5",
".git/objects/8a/b96e6a2d434e61f7eb8c002094f7e77da3e785": "2708747767a2eb2dd166c11273cb4d32",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/865758847863544ab8502a1b5827ff8c153528": "e6e920bf62b97c6506e91d30b2cd8e99",
".git/objects/10/de2a224d90f1cf350eeb74a013d066e1e46eef": "ac07ac340de1d653a6840b2f860c1c48",
".git/objects/10/909e62654b2da95f5f47842cb5a237cb2d2fab": "0aeb872ad4ae7a38d76e3c8ce435fbd6",
".git/objects/4c/4a6acd20d613c38ad331f25209de0864ac9a4d": "1dfa455ff98446a880c3670624b9f404",
".git/objects/26/18f2c9e22102d109fd5ae5c3c1115ab3039c73": "50a41c40438d2158682e99bd3a955666",
".git/objects/21/a7a29f5feb895cb4a5d461082a3388277b2084": "761764c15d0141a159e6140c668e813f",
".git/objects/21/8b06b359a74c21cdd2d71ac773c323aa0601eb": "38e891e0f5d5e021139950c0ed186753",
".git/objects/4d/b4dea7bc3ae3a9c306ae220477fb5f50db0c33": "0086eb0ce84b2ba055d04f67fd2cd7d4",
".git/objects/75/78d695efa6d6014a64ecfe46eafcd325476671": "fc820859f0deeb2f3b96d065157a472c",
".git/objects/75/4e39db72920e1e302a8e72db498a4ce45e7d93": "63d92e98cda333ae13fd04830758249b",
".git/objects/75/7259807302815df6053d83ce7adfeccdf70313": "b08af7cb94804d35901ec0c02424d533",
".git/objects/81/9dd2271926b5adff000c99a140fd2f905d31f3": "1f826d74b445e3c1e941912ed050797b",
".git/objects/81/71d1d191e3e0e019a741bb545326bb65b02bca": "d5ac88f085f8f37d6bca0bed4a5132dd",
".git/objects/86/4b3e05d294211f7d2fb111f423228a7d2f87cc": "774984dad4a15e417db49bd9adb975fa",
".git/objects/86/74e5ca23670119e6335c3f4bb7960903c55f50": "55cdeb3a6509937974bf08ac8b952fed",
".git/objects/2a/765636b532e9ae4e59ccf6b900077abbd01505": "d5903aa56f0509b845c9c7e65c1daa3b",
".git/objects/2f/68b33655c462f433bf5247c410152e42fedf6a": "2a0de30283fbcc43386208d4a4b4e7cd",
".git/objects/2f/c372d77e66d30144c458608347e82c0b774234": "de5bb0a1a8515951ae27d79b3e28de16",
".git/objects/2f/d267aec3452dcea1fa177fc0da8f69d0106816": "6dd233a6da01ede756b468ddbd6cfc81",
".git/objects/2f/7dd5fd8e4659c847d5b23b6ff839ee041cbb87": "46c8ec65966fd320e9ff231fcc35df03",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/be46d91255885f9c1a5c4a6cd626f14ea13e5d": "2c440f63fafda27e0bfbb1a26f860519",
".git/objects/6b/2ee69f1d8ef07cd170d6cd8a8f9e339d634084": "8675cdd8c6694bd8402bdee58030300f",
".git/objects/6b/e84606e28c2e176c51718ffeae400e9c7e0c55": "1f4c970eb5cdb1f6e9b8fd22fc15b52b",
".git/objects/07/7a6ab64fa121e251f38a23210b3eed65314825": "58a8758374767ec50f9c33ce140fe3b7",
".git/objects/07/05ede16926ce235978e5fb16743a37ae68c42f": "705aba85a06b3a281eb8ea9f629e3875",
".git/objects/07/ad5f7b3cada61ce36c659d83051cff44f5dd8c": "82106c52294291726eca493bf0be9547",
".git/objects/38/e1fb1a4970a46ab4423c589b77a478a2467462": "7e37896e5f471c5552abcc828d5ed8a5",
".git/objects/00/d46a2d5f70b34ccd10e69d9b7c19ba16006bd9": "53512ed900f74078b44d9bb6fa1b305a",
".git/objects/00/933bb0877adb431d96d0780ba53ce03bfe7641": "cb287143a3431ce1eb4bbe2e2eb9d812",
".git/objects/6e/5f60f2f29f349ddf612ccda814b6bec359fa1d": "b663cdf240f65823f7593231e017b74f",
".git/objects/6e/7a59d0a3f31c0a09094ed268529876541eafb5": "c5e6b491e04aee6d7cb201bfa53c409d",
".git/objects/9a/eb7839b8f9e23796af36a20f0fd978fec6c467": "d6e199a9dee69d8bdfcefe8bf8f3077d",
".git/objects/9a/cf11bd86d0a292e1fd907c7fb96cfd11e35b7e": "ae1f1a8a0e131c27946188f408d1b747",
".git/objects/9a/9d20c41707216029a7cf197a8ce4ead3837104": "025aafc505be83bd077503e2823a9d18",
".git/objects/36/b8efe5c5f7f9c34541e17cebad10c0b99f2f50": "dafafc8590bdf0d83cb8e5dc53199202",
".git/objects/36/082cef092c6ee3700bc5488b98b562ef2e57a4": "ce2173a989192a743128041f64167901",
".git/objects/5c/0f074a82af617c05a33be2a9085fd327e809da": "730d9b1beb5742e8ee4d387759fe83a1",
".git/objects/5c/3250383935f8b5d67be42dac6050b5d0ff2224": "0a9446d7f34d851598914fda86dffae4",
".git/objects/5d/744ce57bb204212e726f5ad308826756132f63": "40a9e5645c8931ccc5104ca3ed2fed5c",
".git/objects/5d/b938f5709e89db4db93d4353ef75de48f824d2": "2d63bd3d0e2f9a95979fbe851f35db76",
".git/objects/91/6b7aa54bf668852dade2d71c03344d353be2b2": "b1b344ff3786465abc060683b7166f2c",
".git/objects/54/ab05ddf29c1d5ecada53867912b143f85c1a43": "60635f01b08aa97c8a252e3a880d2966",
".git/objects/98/ec33d77b3d36b14933c688a3a5ae2997446167": "eb49fde1b7cb075f51164a2af5a59d1b",
".git/objects/98/40dc8ca61350693620ba3e040a1b152348a67b": "635cdf6ca9a7926b0a43ac1ccc8420cf",
".git/objects/53/d5f12e0650d5fc29e708ead28025f4448529f9": "f4c48b74f34cc3aa7b43bec8c9675945",
".git/objects/53/ebfa5f6248fe5de11a22f4b32c6ca20459c6fd": "981b952187c0e95f2d582a7a299ccffb",
".git/objects/3f/5eaeb9fde9a84f5bff2825add277b6e3f55b24": "9a70085c022befb85d7db37494565765",
".git/objects/30/aaab14cf4359a89da345701a4078ade72c0d9f": "1338e85cd9081e8f462293e3fd60a9d9",
".git/objects/5e/55d25480dfdc9cf077166b12e79ba93ef6a025": "0e1034659a6f750f82109b717515a5c2",
".git/objects/5e/9497d91675ac760ac3a2916ea732129f4ab996": "f16c0e42c894165667761d4c72734f42",
".git/objects/37/2d9cdc1eccce71493d40a0aedae0e278b222e0": "38eaea4e108d53860a6f450ae7fa0bfb",
".git/objects/6d/8a9f10f1e1f37b4a01e30a5e6211a20509ee33": "c9d2335f4a2d9217703195b783c98920",
".git/objects/01/5f3d79e5546cf2644db18f30cb251c8c7745db": "727b9e5818b1e5b3de2117bf1b1e3c84",
".git/objects/06/be5ac4ab51e4525218fc4aeefb144b099df0b3": "22c33907f22cd437c106c6bf0f687408",
".git/objects/39/5fe7fe9d4cd54262a390dcce68d68e0a1fa9b8": "d7f1cd8739f1c8b04ae6377a7ca58f21",
".git/objects/99/72ad550d44dc040580ced1447ac9b76b105904": "44f88f49ed1c92d64ec8f03d3a56eeeb",
".git/objects/52/e35f7de95031719b8c0d8ac35d12e2b1e3fcfe": "5d9b9ba576e48eda90fcf413c1d0c666",
".git/objects/52/e70235661598d8a7ea081912a433ec175fcbf6": "6b2649d290a6effaac84e4cdc465cec4",
".git/objects/55/456295b3f19915380fa8d5c4c99db2b034bbc9": "08214898a93bbc3eefc8f47fb838b857",
".git/objects/55/bc8899dc8e29b375570a2e8c034b4b2adbb8ff": "0a8645312eea8816bf939be8b0b71522",
".git/objects/55/839b05a3e7f2b056132c4e304cd525310cad14": "6d833029f99581d232599ea0260e9e2d",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/97/dd3e50c02e71a2d9b08cbd27f0351687355f06": "e668688502696714765f061ac1d7fffb",
".git/objects/63/ae91781b27ac492da799ae4010e2a6bd0c1183": "5fb3a33e244995a80bc868ba08d2ca4b",
".git/objects/0f/c60ac25300b591f1dd01397c0a8565731e9bc0": "4cdd83ac07b3cd1b064be06a6ca7caf0",
".git/objects/0f/c301b12eb646a8254e2c27784eb188513dd6c4": "5aca5f4c61982076d96a495cd8561899",
".git/objects/0a/9d762b376170adc6400d81ac7db49951567023": "369eb6a4de51cd2a8e11577588ce77f0",
".git/objects/0a/325582e9177cc41eb8cfef97e3f588a326a33d": "d2da9e22b3ec12271c810f416b36b373",
".git/objects/90/67eb83e0d59691fb1c9292e1b49f5d9d1afa7e": "03e017d5eb962e9ff590eeed52f5b17d",
".git/objects/90/0715385d45f7433c4ad2eead01ee5fb9c0ddb4": "922ce1b5fda000e646e96145b84cc841",
".git/objects/bf/513597de57b1e83c5dc58d84803fb5024a7450": "6fd4b9428fa8849836dfe05e9f1ca7db",
".git/objects/d4/5395899a57a264efe5e8e999ddba5bbdbc10d2": "a709d19d93229969c188435886121393",
".git/objects/ba/1fa38422ec634490c2cbf9c3b5f5bd63fca8ec": "ca53b3621849b4366c128f55cb22c494",
".git/objects/a0/05ce375b3e6682e6805bb59c22781272c7dd3e": "70a2a16a3899aa674d7b5ac60203bd78",
".git/objects/a7/633d05523a090b51917b1e2dae4ea8d5d079b6": "ab73db6fcb88c518f4e23f15a58fc8dc",
".git/objects/a7/d21c7b78a77904e50e89a5cb6265f138787244": "d4b4d098138e4a13140426f731356fb6",
".git/objects/b8/fe332ad76cc69d6eea3399da5c144e45e3c665": "c66206c559d06af944c08dd9d4b8a6e4",
".git/objects/dd/b9eb3c3a618a515de91b1ba9dd57291208bb3c": "e48d954cb6c0fbfacb77872368b447dc",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/dd/69fd19a7d31d6e18754cfc687183c48d7fa673": "5a354eea3fb606baf71309e3bd04b6b2",
".git/objects/b6/97791f9a887c46b18aafac73383879461c1e40": "fbf50bd663aad1221890ada426a1c343",
".git/objects/b6/12aa5e679eef39bff9b77f4697f029c7bf4c2b": "2711241d2fcdcb14e0b5c223ca5b3fe5",
".git/objects/a9/190e327bc20a4b95be3b578d9b72afebabc89f": "84d5b480e2f9eccff9c3c202907b27a2",
".git/objects/a9/c3bf069227d4dc5983ffab06e3c0a9f2ca1ba4": "059cecb6891698bca796fa9255e89fad",
".git/objects/d5/76d517ab4cd71dd3c0aebb6623dac8bdf968ab": "8839bc0fc0c1f0dd74eb5f9814878ddb",
".git/objects/d5/7d3cc86e9ed7a0ab8bb8220ee2dac6a02091fb": "0d1734cda612a93d6ee8b41d172cfe60",
".git/objects/b7/27856a55432ed7860baf35119ca3592fc35c70": "ebea30199c393b75612d8a6d0b68e31c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5788e5e4695f1da47b25a52b3c862989ec7760": "bd491113a8e64c153706d20c4c6b0927",
".git/objects/db/b392118529875fe88971542eba0b285ab93fd1": "5171b57a991350f7d0cae5004392e74d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/abeea0954202bdd4f0751be422014bad6a1e12": "7dcbbbfecabba2c87f74bb74b952ce64",
".git/objects/a8/b0c027af3e9bd09919405fb143e89c7a6efc66": "29cc12cbd5b66b78ad6f5d60b43f4e75",
".git/objects/de/aca9a314d838fda38d9d25abb478524b11f36c": "7513427ca5223a7cd32e4c5e47e5545c",
".git/objects/de/30baa8fabaa5111937ab16ec79dccfcde25f63": "437404fc7c1e1b8bb0d39702f2d4726d",
".git/objects/b0/8a09d955ec7f4227b236e407fff10ae261a5f4": "40adda6a39e4afe551b0b6505af1bc8d",
".git/objects/b0/bbdd5e3b73346561b8a5afc82ede3a89145170": "47d9ce20cd41ac012f0686c2ba861fbc",
".git/objects/b0/4e1227b4e803c8b302ad0a80e597f38719c7c1": "8d29572e02d1c658270867b830b7eb7e",
".git/objects/a6/129da607ca4fee68e04a7ac40bde35c562dd2e": "1ae193da176b9797ed3ae7b463911938",
".git/objects/a1/fee191c84bf154e0cb97b627d5d3d8ea2d6745": "19b07d7c4e9373f34834998c4874cb08",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/dd8868445a2463eb45f4e8c3ec9121d3710ccb": "43066a00accf886642d4b80902a3859e",
".git/objects/ef/26cf31d317d9db260dab9a813c4cae22551744": "a37f33ec9707a030b5f555eba3c48be0",
".git/objects/c3/c2d367b81b9c37783b9c47b71ee08f7479690b": "5df0b7d606525bfa3c04f31c49897b34",
".git/objects/c4/31fdf22c5c105f6c8aff0401428910b48f3ae2": "a0cc45449a4935ca47bc91ebb484f2e3",
".git/objects/c4/e479b8647ac1016739e17c760e1008f90df761": "b676fc01dfbc0c0ed6319d3c9963e494",
".git/objects/c4/2ab57d682f245ec3b7f6a3286a68961b87cc02": "b8ff1057e73543dc172d01218567e5a0",
".git/objects/e1/e0e01c9cfc01219b9e55680da1e6e1342d19fb": "11ce2fd01bf2535468930e0db32d643d",
".git/objects/cd/6a33a0a9bcf2ac67d0d3b5a6ef580dc9a42121": "74308759ee96929ed8d900ccb994eb90",
".git/objects/cd/d9f2384ac4a5a4e5cd69f8b43fee5d5d3b0e73": "03d29ef5aa0600df9d4f27c58f43123a",
".git/objects/cc/d66a9793fae1e51f22e4f5eb2e92fa3072b945": "bc2e31a1e4cf22a8f368559a6b6d17fc",
".git/objects/cc/40c5b662e6088074902075e2738bc390b82e65": "d4330e37c0c372d83e45644abcb7b84d",
".git/objects/e6/c58c6144a78adb58fe0c61216ab449e9100017": "411efbe24582486635c920d6bc275033",
".git/objects/f9/2c676d433fd07fe55c8cd46fce6088c428605f": "fb7dc5102f72d1f40e56c891d1db6f9d",
".git/objects/f7/e5fce992639ab4ea0c390ed441a2a04b3ae26b": "1dcf1cd773fd7290750a58df4dd9c857",
".git/objects/e8/613b1ed8fa9d26e5f7ee0099fbbc9316ba64b4": "09a94f0912e4c0d0f951f5587ac6d1ff",
".git/objects/fa/a6b0ee90c9876081ccf90ddaaeb9a71add1efd": "43ab4553ee508e9dfa20d07b2d360baa",
".git/objects/c2/2e70aa5681d63ade5c200ebb85861c945d2222": "ece82b9b6b1e06b47de728e299776341",
".git/objects/c2/a06db32ea36fab11840683be54c969bac9086f": "aef6e751f7efa425e549bace925b1de0",
".git/objects/c2/f960e82ad8da922a77aee8a542b0888fa93043": "4ee727bf1ac7f93cfe25545271e3aa12",
".git/objects/f6/63ced6abb686d561d365afeec8a9748e143c53": "eef63c1694a90c24498e3a7294d2de1c",
".git/objects/e9/843d0cd4661595c846e21f78fd86e8b3070965": "cdf793b21184d6868db13b842ae01b45",
".git/objects/f1/9ff2840e9d57d2608b04e39326899976eb6946": "28c5fc291242d6fe14b4a4f3881281f7",
".git/objects/e7/ec2ce6010f95a42becc7c22c0befc5597965a2": "9157ed01b94e1735b751734216083e58",
".git/objects/f8/f7006162d0895a686efcbddb64034254c3dcae": "d9064919122d6fab3c3471d600be7acf",
".git/objects/e0/f99f012dfe058f3629f2aa7db4214dc3067023": "325781d7310c18135499ec0f7d1b79e7",
".git/objects/e0/01d03df578258f3d2a020b2c84f33440072af5": "3fba06d3e703c3671dbe6dae5a3f9ee5",
".git/objects/46/e3d85e63a6a59ba1d8a34832bdf227507e5896": "a1f43f47f1f35aded5e58c8b07f51a59",
".git/objects/46/089ef6d66e9d56e196d226fba589df8289ded3": "5ef193d727fc0e3f313b0e772523f62f",
".git/objects/2c/9dfa0ac717252e59c6b6c457ef257b5b06c5fa": "1de38e5f436727725b1020a1dc49925b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/6754ee3c2879a4175c5dda623f15266d5ad940": "3749ccb703de5649eff7cb64c70d2327",
".git/objects/83/3207b30adf5e2d90aed24e02538637860d810f": "ade926f973d711558648e88026770fef",
".git/objects/83/001cd636fac62bd365aa8557978070445a00aa": "90b6a7fbd8e8c67ebda62f1900fe1004",
".git/objects/83/ed1a3b5d600f969b6da523dbbb1be20ef0bdc8": "698ca89f8d8616fe1866197abb2f9102",
".git/objects/1b/7436d57b2b4b7b8701ddb9e1befe16cc236b57": "e573d1b8392909ffb5c7ef791b78c3c5",
".git/objects/1b/5ffef9353e86dad8f317e2cc9c32bb8a1de27c": "520b86b003623fc164af0dfd1b7ee4db",
".git/objects/1b/5db187ab52a8ef90b94b22c6dbb790bf936af1": "37a89340ae6eceb90cbbb1f322760571",
".git/objects/77/d543d6aaa1c3a6d8d3eaa65447f6fa13e7ba0f": "9cee1486b809d7014dcdd857355bfbf9",
".git/objects/48/739f14249f8b7ef12be8d5ea31c1c86a1f43f3": "8f02ac57a819a1873c25dc94572e976a",
".git/objects/70/91731250e4da2f3c07f1a9240d09a07d304bf3": "b6489392a293debad8efad9e23a1ac7f",
".git/objects/70/b5d3e854d5953b02816bd20c356b492dbad962": "9972f9ea84d0d6c9e5d3e4a150d3a9f7",
".git/objects/70/1ca3c3a93b65fe96339341cf123517047c7609": "d401b9263ea46f7b824c4d4b65177349",
".git/objects/1e/a82890007a7ac1b747ad8c0e13b3fca244b46d": "52fc2b733786b6a44df5d4064c533d4f",
".git/objects/1e/c52bc2cdec9ce1300fa8ff4210dda0af182f55": "cd48ac381143ead16a91980fad99f781",
".git/objects/84/49ccff202f114f3f900de4e4eacecb7f787b1e": "d0c13d1d0e3a2c0c73c9d254e0388343",
".git/objects/4a/6b166455b7ac82ba5bf52c9dc50f0622c2c91b": "c4a2b5a02355f4461a5a439fa49448fb",
".git/objects/24/bb37661cc62b1381e37624dd8e664e4ddae18f": "634e79502a7516b3ebe56f1d6b0ee624",
".git/objects/24/a43d5992f70c74a339eb67629845df40a5ba3a": "fc43227566939a58e7ce060ddc4ec5c5",
".git/objects/24/d98acdd787f9ec26081eae5a3a652d4e28c3e4": "c5f54713edfd388808d14a85913cba67",
".git/objects/8d/727205f04983b3f3335de5e489d85a76a7e095": "ba89e71a1c729d2965549303e2c9fe2a",
".git/objects/8d/39fd27aacae392c52c9b4794f9988e83176356": "84a3b4e3f6b9a6b87acd3ade061219b2",
".git/objects/15/eb8015a5d4f909631310d0f8cc6ca4d38d917b": "cdf52c8b60016cf3c91b0219abe5636a",
".git/objects/12/285b1aeb95326deb3e114caaca1b7c433a2406": "fac0768742dbdfb6ed86f64df87c2b07",
".git/objects/8c/3132ed97bb4d32a07a8a4bba728249776c9849": "05825b53cced7cb713282944c17ffeee",
".git/objects/71/e9d08b465574d1208f9d80434dba5051a1ee06": "24177fde8705976eb24362d744280f24",
".git/objects/71/79d93ddfc0f26d10d0d258dd99759a1fea2439": "59e6686da034bfd492490e0c5e6670e8",
".git/objects/71/3eb69bb2cf6a11d492d53a0ac4e718e77f7a07": "67bd58c25fd9b669ed817c75d2e13573",
".git/objects/71/7984faab1a846370c02098e7c3b69b35cc013c": "e7b9ec1a25a9a1995854278a083a849a",
".git/objects/76/13fa36dac5c9e96867ae028b40b7065932c35e": "0eac1bbde4d580daa1f7b2804e9dce51",
".git/objects/76/755a1c3a5c9123369773f934c7a956a1542875": "34126db1cfebb5577920bf5a899c83bb",
".git/objects/82/410e3cc28b49d030287ec2dafa616e07a905f2": "c78dfb576fa32740e803127cdfab7848",
".git/objects/82/92cc4dffc9a39a2599b0690d95198ff9a001b0": "037f2f8cf2be4da91be2e2977e852711",
".git/objects/82/59cfd3d56708232a897f846cad780568bd6c97": "3335d78a41b11d05b4260d1b7142f7b8",
".git/objects/49/23845e26255d7e521f610d898f4d4f55e7127f": "7c2ec94a5340957e672f7828d6dc4590",
".git/objects/40/12d35ec07c02d6e21f82f7b91dcc40c91b8eca": "eaa63a66caa34a31f885b363d2fb4245",
".git/objects/2e/78be91cf3914976dc1a14794771f6f58a4c6b9": "ae682aca8316c8a437c4774cb3bcf0d7",
".git/objects/78/4a9e98f9be6fc6af9699d7ccd1ae7075e07cc2": "212c8082baacee0af8e2b393a47465d3",
".git/objects/8b/f9c08b96340828120bade4fef1ab43c03cc157": "5d97911a78583beb95cad2fdf0bfb00c",
".git/objects/13/51d6cc001b33b243707a98908c88cb75bd7b2b": "94c02f5c899eba999a3cfa7123365261",
".git/objects/13/23870984c124c3da916eaa0f213e733ff5a394": "b35766dd53637e09c81d0f5871bfb40f",
".git/objects/13/7050300f2349a7c85cf4a6912aa520bd389809": "b9ad52e1e5a5f07b8303de4831443fda",
".git/objects/7f/566045b516044515b112027943410c0d4ceb0d": "53feb487f1808f0defa18881668b71e2",
".git/objects/7f/340476ef56b816f4f3067df2afd6d6a29d424d": "f5288ee313f7d476b2843b1232b06c41",
".git/objects/14/d21ac93f5503362d42f941bfd9bf2f2ca79135": "880d3b014a0707861fdb3eff3a00c02d",
".git/objects/14/acdb82e36ebc68f70280eef40085c8598934f3": "f0c02246699de5e6e2211dca3fa6b009",
".git/objects/8e/5464ce87769e7d57947c850849b91e8f3da366": "70a853f8932d3e8341255e86e6b60742",
".git/objects/8e/e5e5f2c4b81643cfb91485abb6ff69569040d6": "11e887b32135b12c7f7d0acd228a8d51",
".git/objects/22/e5feb7eee3fc9b5e2d0c7c48915aaab63c4645": "60d7d888ed5759bd1413d8060d66a0c5",
".git/objects/25/8d73c4d36a23ae793b7a852ee7684aa55c81b6": "e33e3d0a721bfc103ca80e8230b4a4c0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/logs/HEAD": "262854242bcda522a7a318b84c597171",
".git/logs/refs/heads/main": "19fc94d6391f2fd450609d49603727fa",
".git/logs/refs/remotes/origin/HEAD": "f1d52afac9d267a2834b0f9d32512c6d",
".git/logs/refs/remotes/origin/main": "325106a65747ae44535d2fc33a31e265",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".git/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/refs/heads/main": "941794f2308347bae25fff854ae3634f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "941794f2308347bae25fff854ae3634f",
".git/manifest.json": "04a1fb5078b4ded06ceb721d831873a2",
".git/index": "b94a2c126a4e50867a6692e12ad77c98",
".git/packed-refs": "13899506f6a0780095dedfd345c0e79c",
".git/COMMIT_EDITMSG": "4d4ef0a32ecfd307bf2bc5b005a8bd49",
".git/assets/AssetManifest.json": "86808c9798c3248b05658aad83cde108",
".git/assets/NOTICES": "976392eb95bbcfde69c717dcd56f2faf",
".git/assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
".git/assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
".git/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
".git/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
".git/assets/assets/images/planbudynku.jpg": "19ebd3553148b02ca987c6e2f92ba441",
".git/assets/assets/images/logachem.png": "061d853d35c100fb4bef08bb19d0c972",
".git/assets/assets/images/tr41.png": "07fe9c9391c1b5e99f404c258468150c",
".git/assets/assets/sounds/266455__infinitelifespan__notify.wav": "d9f97f6ad8181b8404ffeac6c8812b46",
".git/FETCH_HEAD": "bb197e35a63dbf7c60bacf4dd70bffa7",
".git/gitk.cache": "6c20e1a56fb6c94de9c3d478e4082e94",
"assets/AssetManifest.json": "69f9313dc3cb27f2c50cf06a19a0d8ec",
"assets/NOTICES": "376344b44d26d736393548795b06fb09",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/planbudynku.jpg": "19ebd3553148b02ca987c6e2f92ba441",
"assets/assets/images/logachem.png": "061d853d35c100fb4bef08bb19d0c972",
"assets/assets/images/tr41.png": "07fe9c9391c1b5e99f404c258468150c",
"assets/assets/sounds/266455__infinitelifespan__notify.wav": "d9f97f6ad8181b8404ffeac6c8812b46",
"assets/assets/sounds/266455_infinitelifespan_notify.mp3": "08c760713b0fb28ccafc265e27b95a18"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
