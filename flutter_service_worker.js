'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "59d0d19fc45ca69230d858f60a5557f8",
".git/config": "705431bc71607af45d947917bc53cf02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7f0cee984ea215132e189cfc08e14904",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "71da89188da311310debfc7479ce99b0",
".git/logs/refs/heads/main": "111d6ad2aa262167369837a07c41b4db",
".git/logs/refs/remotes/origin/main": "dcb261edb9146391d2ab4678d3d4fcb0",
".git/objects/00/cef64f70b953392a2b2cde4a9cbb3e5a262ec5": "f728bfd19313cc1e5714dcfe7ce2653a",
".git/objects/07/10a568da6d3c993ec94578a80822a8b9a24775": "53f4766b9fde864e667dc7af2b4d9b95",
".git/objects/0f/3a164f134b9ca136c71c55b14dc1cb7b9751e1": "a22624025af6de9a5aa5c38e5a77ce8a",
".git/objects/0f/b75ef4a4b3eb1311c1bbcd6bf0f25653ae112d": "5c97d3c4382450b995fd2bf0b10b6c42",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/d925529f0f3db4b51665764c3cadac9be75219": "843f2c49ed5ab02ef2d879c7f342ee4f",
".git/objects/14/0ac15bc7dec74bc383c51799562acacd342e7c": "3b653e8d4f5b0b2636f18dd77c7721ec",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/2503e299f041738f2415aa8faf16d1cb22db53": "7deb302a1e6b4e70e1119ddec48d33bb",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1e/adb9329241e98a07a76fb205eab670ca85da18": "d8733a9018f37ec5c1684470178f0a62",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/628fe0bd1f4f26b5674559eb626c01ff11e44a": "ff1c607af86386f7cbf077efcd0de451",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/0299d58b2109e6221812d55d810d170f5a8229": "3ea507739fce71e90ded573f2ef292c0",
".git/objects/29/200b49f0dc32a9a8b9b934bf98e6834718b71a": "0410f51a1b872b20d4b4b136ef8ad893",
".git/objects/29/f93b28c83845a13125d30a12c2bf1d87260e16": "baf2da8f4ee49824b98a86228d8c2732",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/71aaed1474792a10199812e4fc787cbd0226bb": "510a0964a967146a5d3b12c0bff6af84",
".git/objects/3d/dfae911227cd29da250c96518d99c5580f95e0": "023c47d227aec046d4de0c40e02ab7b5",
".git/objects/3d/fd43d4315b45316834fb48985e5067de07b113": "3772f9ed575088dc680d1f7d73f08a23",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/42/24d8b0c663f1e3a855cd90adfd1dd6c8c6ef94": "d2e56499f5f0c22d107b1df9fa315292",
".git/objects/45/9031930ad8ab52d6ae2912fe9fa0cff704fe71": "9b75286bacd186ef611b487c037e5361",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/867528eba65e92f498bdb3ff9884a834fc4b55": "c163198bb56deb7159198a80f6577c01",
".git/objects/55/0223f41491433a507eb23b858a56d9c847e8be": "125a13c6c8cc82b6364748c6a423db4c",
".git/objects/55/72fc2ef18b8575086bb6b3cce6ef053bd022e7": "6c657152f3bff79f8fd031801fd33085",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/0bc4c973f9762a875940f56383bf2505632105": "bc5a8df8b13fbba1961c37b11e3f2f1f",
".git/objects/5c/3f131f46dd6161e2d4eac5d47c8e8c08ba03ee": "5eed8a39d567db3a399effda92b2ee05",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5f/e9d8fe15be931fad3788ff03dacc1f22e5dd9b": "bddb853d35c500e677e304095eeb8150",
".git/objects/61/3d9ddb1e00a25cc3612aa86555ffe176c7e255": "7c69cd7cd65d45aedbf65b8e79f9d2ef",
".git/objects/61/ada5aa1adec62238b0bc3c9293e901fe368a19": "355c46e9b26aaaf3b85aa87d2c6b4349",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/0b5e847ccc8778e07ff8cbab1d95a3f20bda23": "b2e789eee8647222ba3c758acd018f1f",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/930a1047120bf40ff7e12ec2fc2e68c84fb44c": "9246d5eb06533b91f5f5486f8376024d",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/b5aa1a4bf6967ac15e12b68b004b0e93f45572": "5fa21104c5094590a6c3db3a6005d9e3",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/73/91462034511f0437b8495b47bae746cc8c9b1d": "2f035f0e6688589b575a822d48a3714a",
".git/objects/7a/5a3e183341b18f4b513ff2ca46f43935f881f4": "6ea629b2c7bb2ece519cb298ad52b725",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/dccf06a8d312acfd22037beacb818c09b8ee97": "c9e34fb5e9634e9b31c607c5f5fd5af5",
".git/objects/7d/e64e318437baf12ec4555937813043f4587fbe": "c817bd54933c5bac2ef4444d8b71f262",
".git/objects/7e/c9b2f44737353c003d367bcd0516bfc8c679f6": "8cc1c60256476a63eb15848d47b5526e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/98c299d9eec09a9ce53493126b454192318567": "c571549dca54e20d96c4e8f5f02419ff",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/75f07ceceea4915a190d07918f4152e82f7928": "3ca9f4963e9c57dd7611b59d2880342e",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a5/dfa3e8067131aa46b74716ff10fc0b7e4446f4": "fe02368386b7631460d50a9f177541f4",
".git/objects/a9/bc22db5c501dae67d46b86192e460c080eaf9e": "1d1f1c4bbf42a6652ecb2361fb556fc4",
".git/objects/ab/6bded116fe3d14e29c5d3f5d6cb6addc7be45f": "9907e74b083fc5b1b03560f2ccbd61c8",
".git/objects/af/d808647a5439d940ba231a146bbc69edc6b4e3": "70a8807b5eafd21e869c95fec8ef924c",
".git/objects/b2/65ed4d1aeed8cefebd1168b81a6ffb368b0cdb": "1bb905c1172188cf1c3a2e9fa123dccf",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/7f71fb1ab89fa1d24c56d90e8c515b7a9177ed": "b40ff7370624416c4178ddb8cd1462f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f3492df2246ac74a35c1cf49ec8590c46f0c37": "89496a3087b2c3dbecc6c6bc2f6dfa53",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/e2c6166663db3d8da0d7586d705444422d67c2": "18df136230e6301db2ff1fc6482c1795",
".git/objects/bb/cdbc96775cb6b343fbd1fd3c45ef63d4404c95": "bcb13615a93d9bf33ffd493b2649dde1",
".git/objects/be/eb777e0c651645670df9f1948288bcca69ca35": "a4c4a0aaa8207bbb44e941b1fa6ff593",
".git/objects/c0/09a01c471e8007ff86053d562054a9c5c89da1": "7586337d5d212fe15b039cd6c2b316e8",
".git/objects/c3/1becde885e72d39258d39c057d2613b9a08d72": "a56410e0d9ad6add1d199e116e1f4ce3",
".git/objects/c4/777765db93c8b3be089b01542c78c1ec3b1fd4": "e8d3fc3e6412bc6abd306ba53698fd47",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/ba78621ac140952b2f16ff32748bab6c6c36bb": "a49b82a1b918a7fec44401f27025cc02",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/ea/a2957d4b4d8c00b22e0e83d9de3802ad9216c2": "6134ffa376e08273dbcec28f3108dc47",
".git/objects/eb/31537b9280242c439a95c132145c0a0ad70553": "ddf99e57dae32be440624b795c10fd30",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7529d3af0c21521f7c89c0b236c493d5051014": "70e64eb00a770eceb7d7345494ad7279",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/fb/85203996382f9fd7e711b2ae6abf0636b727d4": "8f180ef57a662bff1ac9bf2f03b36a33",
".git/objects/ff/2fca846e4c3c2520285653ee674d97a128a7ca": "840367eeb9d696efb8268545a44e51e2",
".git/objects/ff/f11c9f318f0ca5166f3a40233519fb40010397": "d24d56e26d28b2824e9fb40c41be927d",
".git/refs/heads/main": "364c08951602848e1c033b3469b0ff3a",
".git/refs/remotes/origin/main": "364c08951602848e1c033b3469b0ff3a",
"assets/asset/images/ashik_skyscan.pdf": "539b596cb26d974b2c6b1b3f0e3123be",
"assets/asset/images/certificate/c.jpeg": "9b13f3f6b94df91947823297e66426f8",
"assets/asset/images/certificate/codechef_intermediate_sql.jpg": "37186112f4bf0d0354bccde40c14e466",
"assets/asset/images/certificate/codechef_mysql.jpg": "842fe4e8f508b87ed22ba8ca5dcc3c46",
"assets/asset/images/certificate/codechef_python.jpg": "b4fb2cc608ea02d29ec9aa97c2851664",
"assets/asset/images/certificate/joyofcomputing.jpg": "c2ff648522595a574333a0ce554aba21",
"assets/asset/images/certificate/python_hackerrank.jpg": "8dfdb3120f8bfd800c6b3f069f0c4b60",
"assets/asset/images/certificate/simplilearn_flutter.jpg": "ad12ea0b8c1c64073bb30e5c008f2b1f",
"assets/asset/images/chat.png": "8b8fe1797322a44700104d3d04ff4013",
"assets/asset/images/ecommerce.png": "86efc01bcb46d00bf9f99823807d2dda",
"assets/asset/images/fuelease.jpeg": "cfe6af7d46cffe3835d6e173e25dfe91",
"assets/asset/images/news.png": "f1d4a0bbd746c593f51033ea85d90aca",
"assets/asset/images/nptel-cloud.jpeg": "9cbea12b35481899ece91cd6a27988a5",
"assets/asset/images/nptel.jpeg": "40b641072cb190d1041b5d7f0f7c662b",
"assets/asset/images/profile-image.png": "950332b3cc804250050aad066c0324be",
"assets/asset/images/quiz.png": "b50bd6d8629067621e1b1e00f6ac5b12",
"assets/asset/images/simililearn.jpeg": "73e3f3230fd4e3ac98123af171d93f1d",
"assets/asset/images/stylegen.png": "b439fd03be764e9226984d6a22879894",
"assets/asset/images/tmdb.png": "f770e71634bf832426bdddf10de7f447",
"assets/asset/images/weather.png": "bc8f1a2e2d1226ec034a02f4d131f80b",
"assets/asset/images/weatherapp.png": "c213d15f9e68f2f98962ca15ae04ba63",
"assets/AssetManifest.bin": "12c31af2d2f3fe8a608bd29c73ae7097",
"assets/AssetManifest.bin.json": "e668fad20eccb84e2a4157943cdc6bb3",
"assets/AssetManifest.json": "09407a8c0be9f53638a62d2427162f94",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/fonts/MaterialIcons-Regular.otf": "7e8d2f3f03b55fdff7a207bf867a7261",
"assets/NOTICES": "a9b26e08e750edbc7b2c9a1e035cbc04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4c2db3b0ac204d881d85c76845128657",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f3a3172c295b62e098417d6708083352",
"/": "f3a3172c295b62e098417d6708083352",
"main.dart.js": "5a02b0d3f2225574179b20f38ccf0328",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
