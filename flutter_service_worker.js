'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "8cc0840472a804f64a48f3fc25720992",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.json": "3a30ce991dcb1ae674a9574dcf7b7759",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/icons/ic_promotion.png": "9dc0bc8c99fdac2799aadcb95f78e816",
"assets/assets/icons/Spar-logo.svg.png": "aa28ee09786d8df2fe88b19ee49bbd96",
"assets/assets/icons/low.png": "6655be703a77276869229dcc119a96ce",
"assets/assets/icons/heart%2520(copy%25201).svg": "bb6dbdef095c56cb2fa2357c15a93b76",
"assets/assets/icons/Spar-logo.svg": "aa28ee09786d8df2fe88b19ee49bbd96",
"assets/assets/icons/admin/cutted.png": "50af26b98a2bebc6db45e7fd652a3f61",
"assets/assets/icons/admin/sadin_icon.jpg": "5d768e84e1128907d751434e2a802d05",
"assets/assets/icons/admin/saidin_3.jpg": "603dc55436edae738faddae768730505",
"assets/assets/icons/Spar-logo.svg%2520(copy%2520).png": "aa28ee09786d8df2fe88b19ee49bbd96",
"assets/assets/icons/spar-1.svg": "0b4183a6d15b79d3c1306d43d6b79edd",
"assets/assets/icons/transparent_spar_logo.png": "9cfd313527fd71a8ab11cee5c7dd10f9",
"assets/assets/icons/spar-1%2520(copy%25201).svg": "0b4183a6d15b79d3c1306d43d6b79edd",
"assets/assets/icons/heart.svg": "bb6dbdef095c56cb2fa2357c15a93b76",
"assets/assets/ic_launcher(1).zip": "610ecb3c0100f852d2ef9bcade58fb76",
"assets/assets/spar_round.png": "9746515c2267636e88a2159f2ede95a9",
"assets/assets/dataset/fruits.json": "f512b05b434c5726b35ffa1312a42589",
"assets/assets/images/pets/cat.png": "de037ba647104ab27de665d37979cf98",
"assets/assets/images/pets/parrot.png": "19f50eff9c17ae0e89e431e8b7531f06",
"assets/assets/images/pets/horse.png": "7bb1013d927d4b9e653ef407342891ce",
"assets/assets/images/pets/dog.png": "fa1e64cd80b270d2bfa497f6b3a746ee",
"assets/assets/images/pets/pet-cat2.png": "76b65e1994eb8ebad952c4de4c6f9862",
"assets/assets/images/pets/pet-cat1.png": "8d0a7de6f2fa896fbcb0748e1f53a0e7",
"assets/assets/images/pets/rabbit.png": "0df473885bfe8166e28f4d682be123fd",
"assets/assets/images/sprite.png": "a1798902e15c44724476440d9b43bc35",
"assets/assets/images/higiene_beleza/perfumaria/25101-480x480.jpg": "a0b9d15a897033280a31c665e1c065b7",
"assets/assets/images/higiene_beleza/perfumaria/11815-480x480.jpg": "23ec6ee9f0f8ac90ba63c697a3676f97",
"assets/assets/images/higiene_beleza/perfumaria/13812-480x480.jpg": "aaa01694085c899bf20b4e93e2174ce6",
"assets/assets/images/higiene_beleza/perfumaria/25131-480x480.jpg": "bd10de01897ba81e208f656ca01ec065",
"assets/assets/images/higiene_beleza/perfumaria/25042-480x480.jpg": "0f554c2ea5b46b1c7cb270ca4025b7a5",
"assets/assets/images/higiene_beleza/perfumaria/24137-480x480.jpg": "8b8ac7965f4c09edfe12bdef3f11d571",
"assets/assets/images/higiene_beleza/perfumaria/25074-480x480.jpg": "1cd9a82e8196011fc3430eec561baac8",
"assets/assets/images/higiene_beleza/perfumaria/25257-480x480.jpg": "e3b01cf129e49fd4cfe741609619752e",
"assets/assets/images/higiene_beleza/perfumaria/13823-480x480.jpg": "bc1fae4771f978c22f7def2375f1fd54",
"assets/assets/images/higiene_beleza/perfumaria/25089-480x480.jpg": "a6fe1448350e495d6f41bb13257f0f25",
"assets/assets/images/higiene_beleza/perfumaria/25200-480x480.jpg": "9d7f9a20d07ebe39977f4ae473b3f3bd",
"assets/assets/images/higiene_beleza/perfumaria/25130-480x480.jpg": "a8fc8230c17e1b5fa4f0439160317d55",
"assets/assets/images/higiene_beleza/perfumaria/25151-480x480.jpg": "8e07b25c6aaa7eeb0765ea06ba32f9f8",
"assets/assets/images/higiene_beleza/perfumaria/25063-480x480.jpg": "e1948bd892932e7a2acf75459aae4ca1",
"assets/assets/images/higiene_beleza/perfumaria/25497-480x480.jpg": "621992faf7cef792869d67506a4da156",
"assets/assets/images/higiene_beleza/perfumaria/25202-480x480.jpg": "c63ca434139c3d0b1fa518ca3c594389",
"assets/assets/images/higiene_beleza/perfumaria/25261-480x480.jpg": "f7380dd47e27c92a4f46117c3cd6ab90",
"assets/assets/images/higiene_beleza/perfumaria/25198-480x480.jpg": "296c6ca5be38054fea6dfb4f7bfe64a7",
"assets/assets/images/higiene_beleza/perfumaria/13825-480x480.jpg": "2bc25048aa8050c672ccfb1b2611bc29",
"assets/assets/images/higiene_beleza/perfumaria/25122-480x480.jpg": "03d36b6f5676e37cf1bf101fb7af4293",
"assets/assets/images/higiene_beleza/perfumaria/25139-480x480.jpg": "d23761eff168e90d0a98a29ff4cb95d4",
"assets/assets/images/higiene_beleza/perfumaria/25058-480x480.jpg": "338f420e1b1f51b92fed876617f5d7a9",
"assets/assets/images/higiene_beleza/perfumaria/25348-480x480.jpg": "004fa91da3c28f0166c2717db28941a3",
"assets/assets/images/higiene_beleza/perfumaria/11967-480x480.jpg": "fd26a71eadaccb2723039bd898d4351c",
"assets/assets/images/higiene_beleza/perfumaria/25281-480x480.jpg": "8a53b9ab74d2b3a4e75ad7784f4bea4c",
"assets/assets/images/higiene_beleza/perfumaria/25083-1-480x480.jpg": "a3c30686ead9d359a656bef49c117853",
"assets/assets/images/higiene_beleza/perfumaria/25032-480x480.jpg": "4e7be70479f823068d537b45bccd9b9b",
"assets/assets/images/higiene_beleza/perfumaria/25135-480x480.jpg": "02e2afb7665b9f0dcdea4f6ce8b0469c",
"assets/assets/images/higiene_beleza/perfumaria/25127-480x480.jpg": "4993dc2c999a4f92481a4982c4513078",
"assets/assets/images/higiene_beleza/perfumaria/11873-480x480.jpg": "5e83a35cd4a7532d6bb1126cadd2d851",
"assets/assets/images/higiene_beleza/perfumaria/13336-480x480.jpg": "ec0f8b412ea7bb9642b84a70ab0942ea",
"assets/assets/images/higiene_beleza/perfumaria/25357-480x480.jpg": "dc603a11442a7d8ddb4271e93f4c5d5c",
"assets/assets/images/higiene_beleza/perfumaria/25062-480x480.jpg": "593ee643c2474b820005964d6cc57cf1",
"assets/assets/images/higiene_beleza/perfumaria/25132-480x480.jpg": "54237dbb05dcb9679647a0ab1f07e335",
"assets/assets/images/higiene_beleza/perfumaria/25087-480x480.jpg": "581df16ef39398bfc9e53f0a683464ec",
"assets/assets/images/higiene_beleza/perfumaria/25138-480x480.jpg": "b4362fe50cf7fc11d847e82ff2ca2277",
"assets/assets/images/higiene_beleza/perfumaria/11966-480x480.jpg": "aea659c4fca8dd56011dbb18160f8403",
"assets/assets/images/higiene_beleza/perfumaria/11886-480x480.jpg": "21aca0bfe307f5d824b84c3321e84a54",
"assets/assets/images/higiene_beleza/perfumaria/11874-480x480.jpg": "e133b7d7be46c433cad8f450d37c63c0",
"assets/assets/images/higiene_beleza/perfumaria/25102-480x480.jpg": "ea79a55657e48503b4dab07fb7b23db9",
"assets/assets/images/higiene_beleza/perfumaria/25275-480x480.jpg": "ffe0e960490776ca6597abb57641ed42",
"assets/assets/images/higiene_beleza/perfumaria/25282-480x480.jpg": "1344c54a97b239fb50fbec2cc858b244",
"assets/assets/images/higiene_beleza/perfumaria/11866-480x480.jpg": "f057b463b2caf072c0387b690b365aa9",
"assets/assets/images/higiene_beleza/perfumaria/25116-480x480.jpg": "559ff30b0eaf407cfe8767b4f6fe3eb1",
"assets/assets/images/higiene_beleza/perfumaria/25035-480x480.jpg": "f74f87f89d62c2360332b52dcc570192",
"assets/assets/images/higiene_beleza/perfumaria/25059-1-480x480.jpg": "382eba7f830f409679e9ed03f97f5281",
"assets/assets/images/higiene_beleza/perfumaria/25283-480x480.jpg": "bae077b52b944293a0f022f69024f400",
"assets/assets/images/higiene_beleza/perfumaria/25343-1-480x480.jpg": "d74e5a34a3c209c62dc03af6bf9293c6",
"assets/assets/images/higiene_beleza/perfumaria/25031-480x480.jpg": "5e1e7539273023af00ae99b32294add8",
"assets/assets/images/higiene_beleza/perfumaria/11158-480x480.jpg": "8329fba60ebe85146d9e793fac6a6e3b",
"assets/assets/images/img_2.png": "818846b3ee152c1b8bb9f69243c14206",
"assets/assets/images/bg.png": "8a8000687d5aa217a4cb84c49a2b752f",
"assets/assets/images/peesi.png": "b7724c62d03669478716917fffd559e3",
"assets/assets/images/saidin_profile.png": "a1bc6019e562e3569cf4a9cd402da4d4",
"assets/assets/images/fresh_fruits.png": "7d00635a4100bd04f49fc3cb6a3cc8ec",
"assets/assets/images/meat_fish.png": "9bb79b50c0b0c64b09164393ced9ffd7",
"assets/assets/images/chicken.png": "5ebfe96c9ab40e888cf17661ebb85344",
"assets/assets/images/pepper.png": "2b758c950a2b1688549a883f20ed6066",
"assets/assets/images/pulses.png": "ff5aca1c68606fcc611d3a0cce5d1530",
"assets/assets/images/egg_red.png": "22c13a82cf5f39e6c54b1b7c3389b530",
"assets/assets/images/diary.png": "fea093b33432da9cbf6ca106d152e963",
"assets/assets/images/pasta.png": "3aff64cdc34fbe5b34d12dd9c6d0f808",
"assets/assets/images/profile.png": "bf02ea76c938720dd28292ad88899633",
"assets/assets/images/beef_bone.png": "aad3b90f0379af947e0927f36437b8c2",
"assets/assets/images/img_4.png": "7008bf7f6c57a8726dd3bcd4a0545a3a",
"assets/assets/images/bananas.png": "c15d44669a1e8674bbf8694bdc6fb190",
"assets/assets/images/mayonnais.png": "e6262f49577314f7a354479d39a8d563",
"assets/assets/images/img_1.png": "5dd4787378a6abe4e53813ff97102638",
"assets/assets/images/juice_apple.png": "fffeed069f65c6feb2aed10e8eed29e3",
"assets/assets/images/noodles.png": "b39925576ca19925cbef773f870eba43",
"assets/assets/images/sadin_icon.jpg": "5d768e84e1128907d751434e2a802d05",
"assets/assets/images/rice.png": "c772fdae2432734db4cc044e731ef512",
"assets/assets/images/noodles1.png": "ed2ffbd316357dc1647a075f3b6dc28b",
"assets/assets/images/juice_orange.png": "d8e066b06ff3a39e92b03c9a1c6c3474",
"assets/assets/images/beverages.png": "9328674316ba887e78bfd0db2145c042",
"assets/assets/images/done.png": "14a2c7f8ea08c7a4cdaafcd114a2aa5f",
"assets/assets/images/coca_cola.png": "8a8c0a9ba3c1ef6bfa6305fbde1be32e",
"assets/assets/images/vegs_banner.png": "974b3ae2fa486c615fad412a8d892112",
"assets/assets/images/cola_diet.png": "28c507c90f7218d09219f15c5bc7ce32",
"assets/assets/images/profile_2.png": "ce59444308b98a2e2e9f9f8a2d0e330b",
"assets/assets/images/egg_white.png": "c987309c1ec53794d2f3a2fb35c91447",
"assets/assets/images/img_3.png": "fb4d68d52862f9a07ef280c8b8b22881",
"assets/assets/images/ginger.png": "e41280dfcdfdff22b51189052ccfa9ab",
"assets/assets/images/oils.png": "dbc0dd78b8e1924851455b3b244ab41e",
"assets/assets/images/bakery.png": "aa9b3a0fb6bc2b26a4981361c0c82537",
"assets/assets/images/apples.png": "73ce4652bbc71dc18954ec304326df15",
"assets/assets/ic_launcher.zip": "7b0a9710a2f34121dbcbb42c54673275",
"assets/assets/tg.png": "dea7b94370ed5a1eea88a259657f3bf5",
"assets/assets/bg-404.jpg": "689243624422b85cba0b8cc337d8f3bf",
"assets/assets/saidino_icon.png": "58d98c5fa9ab702ad4be3772078cf897",
"assets/assets/fonts/CircularStd-Bold.ttf": "ce2a6c4154de87815e8971d21a987403",
"assets/assets/fonts/CircularAir-Light.ttf": "809eb889c78777517a6d252fd1f76eac",
"assets/assets/fonts/CircularStd-Medium.ttf": "46d551dfd0caa61f1332d7c477f584c2",
"assets/NOTICES": "49ddb352bff58fb8a3799d9088e3c086",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "4110b61c461a378009e99e3fd74fc270",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/packed-refs": "90233e454b7fd241cc4523d849cfde6f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "d2a695f87ff714e2b92d17db501cbd3a",
".git/logs/HEAD": "db1527fecd84c311afc398825da5fc37",
".git/logs/refs/remotes/origin/HEAD": "9acf3e120c7effb8640e55f1716b19ee",
".git/logs/refs/remotes/origin/main": "82abc0fc3a8056453d449265694dac2e",
".git/logs/refs/heads/main": "db1527fecd84c311afc398825da5fc37",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a616d1dd6cb7840198a6b226ec36056e",
".git/refs/heads/main": "a616d1dd6cb7840198a6b226ec36056e",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/objects/51/81124961c370a86cafd1d3f5c47e5bb41fc56b": "44037a923d30c834dc1b6cda6649dfde",
".git/objects/db/eb8ebbd3465f53f1918aa2bb799da00c791f90": "5a4493960b8d405c5ed90d358bf0ba81",
".git/objects/e5/e9c782dfcf3f7202bd7fa011f6dd3097fc24ba": "2bd962db03706f6f1c4f2667be339ead",
".git/objects/01/bd69f70d00314b03c15186f6894bc246b9c0a7": "beaedb033b7a044ee6ddb1cc44a7b126",
".git/objects/27/7584e8b50e4e117216ed0d6a2d0e6d6d3cf89e": "b06091a84b64cf91ff640bd96f62c9bf",
".git/objects/49/bf563ca1e851a05a72529538a55cf4e74747ae": "6accb6238aee05cb277cf7bd52656640",
".git/objects/96/ea9234bf89ded3d318fd21845ea4a60557e7cf": "39486cbdb39abf4b4bceb449d62063b2",
".git/objects/b8/a4045b27c1e8eece226fc6833c7c12c7c1ae92": "a1933a889f2732e9d09009d54bd72a17",
".git/objects/0e/29239bde69dccbcf2f05d2ce29fc67b6ac1887": "a5dab7762bf39d30eec3a31decef7239",
".git/objects/55/0e80ea3b2dfd52a5179f3d7d4152df5057b9ca": "399004e6ce82d1c186e0a46dc5c8e626",
".git/objects/92/f3598fd4a3639bd25ec25ae7dde6f6da8a9b72": "d6d0ce0e5f660c5c11b2daff44446a20",
".git/objects/79/5c9ab4c3c85148778210e47edcbe766e18a276": "5583b939ca9d99eacc2cc9fcd0388610",
".git/objects/29/d024f48f24375e7fe55740becaf573450bc59d": "dd8dc6a407caa8c8220d8390b8d6bb16",
".git/objects/29/1e4d274be1ab2f14833a6414a285ed445ac58a": "5f85ee593276a1dd06cdaa8ba9b5d6cd",
".git/objects/29/57e9d290dd7cc70b6f5bb7f02224353a817b53": "cdb4a81d25894d836e57b10d0b7a3bff",
".git/objects/7e/41cead18eb97599de79ced9d437adc19abd4e0": "6b6eeab41616232652f4682ca4406c41",
".git/objects/d8/8be33c72e00f5e757e02258c57773d7da3d1c7": "4c1a958e1c21c06821d7fd9488382bfa",
".git/objects/24/f4e7ac69728dddf9f956b4fc9d2a4b44d66f69": "f7abc3e4d808d3ed6ee2acf9b5e715a3",
".git/objects/99/cc112fa4702797380a147b65a3ea25e833d248": "b4626cb4db905f160f6d63314daf6d45",
".git/objects/1b/85b7c98ff1a40e2a5785cda359d3e12b270c65": "ea58df631f9147d186880d1515f870e0",
".git/objects/bc/c38e225182bedf6c82569d9faed772ea8472c7": "05d5b7133df5a6df71ca94a210449631",
".git/objects/df/6e28cd7751a012e6e2cea9c8aee97a31489263": "e6be7731df12b1c72bdf5e765fd79ddc",
".git/objects/77/5962634e4f31733b896297794e176d3a650e0a": "22844886a2744bedf4919eec46303fa0",
".git/objects/pack/pack-02f8d9126cd33a0086b44f4eac31ba6ce8846391.pack": "d31e65f2a243521e59dd8219ff284ed1",
".git/objects/pack/pack-02f8d9126cd33a0086b44f4eac31ba6ce8846391.idx": "33e317e0099cc282061fcca8567bdaa7",
".git/objects/1f/b779dc3e7628f41e1b3dd08fdf25a3b96bbae5": "d83ad4b3d7cc3755fe70b787f75aee0a",
".git/objects/1f/d22104f38070959378494b5bd6146dee3e3899": "5b33ba94e825f25fc5f3f8338cb474ca",
".git/objects/91/4328d05434ed22edda65f0935b72da74af7639": "c588f78fd627ef92dce0cd3afe54a38e",
".git/objects/97/3af8e52c5581e6cb7060fc9f596ecd77535330": "4842c9bb7baf669f829ca1c43f7d7da2",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/a1/fdb58cdb780ab2cc123297675323fbf06080cc": "b37bcb8803beac082f5a88c5f7ae1e65",
".git/objects/ea/23e3f035eeee929d477aac27c1f465bd05d942": "8818ceb65e73731197aa74b4b3f63e5a",
".git/objects/ea/dcc8940c74a6c406a20deab523cb957d7de74f": "1ce140ce6a13d9e3175972a355dcf008",
".git/objects/ea/3b8a614621dcf80996f0781f584d9f838dd54a": "1e7552dcd371312575f1b9ecd068337e",
".git/objects/75/1795df470c3877722d37c5f1d24db3eb79038e": "78689dec6e190a940eeb7456d11aa169",
".git/objects/74/0a8415357c40654b24edeff28235c7748ef9d0": "96302e5bc5d1c35e9317f7e2b476edd4",
".git/objects/da/4e39197f5672ad84c3b8813ef420b83ade02dc": "5c185c1e2a784bec4328f37eee6c4f23",
".git/objects/fe/f57bb7809c9f70a7b1b211a57057b5cd1a4b01": "1a13b752647ebdaf1c3d1ecd8cbb1bdf",
".git/objects/fe/3a8395424477f0ce540fb55d584cafec365551": "f56e24dc5b56222c09a8d01bf3f52280",
".git/objects/c3/355693276eb487f53250e71e62d06cf0dec778": "c8ab84e97a407eb3b4e017695b452ec9",
".git/objects/a3/454c1c7092d4fe69d0da8542064da4e3b4c162": "675289a0b592912e79cdb4b49c02dd80",
".git/objects/8a/d3caa3b168061523b48d097888fa33b9403024": "3f14215aeff8ea449c83ee73afb8478e",
".git/objects/8a/0288d2c76e1ec0b3fe0a373f42fff20c9c934f": "7c7bd375227d2131c115edee0ed95ba2",
".git/objects/9d/565fcffbdb21bcc631196b83414cf173872b55": "2107c5e2845371d55085e4f71dd843f2",
".git/objects/9d/cdf198ff3fdda4f9ed069978790cecee71ba3e": "de314cab56fe17171720930de59aec30",
".git/objects/d2/bbe87152282520cfe87a490bbb95d19f75fe00": "eeb755817901088732dc51362be3ff89",
".git/objects/a8/7a17b583aafc5cc938f532a0e85072848f3527": "63f65d3caf1d7ffca2dbbf6b0e9c02d0",
".git/objects/b7/b2a03dbc0b7a9d19dfc0b76fec1655c549f68d": "343de3a4ab4836b5529ca217770c1259",
".git/objects/b7/2571d8211e82a1827b8bf16a7e24a011281df2": "61be10799467c38a0950a218e00fd0f2",
".git/objects/12/ef5764a74cc956d8fe8b9ad7887ba56f8395e7": "f47a28db07e8ea676694e802737cc117",
".git/objects/33/d443ccafb59d72a656251ae55a915be351e9bd": "fe84503379979840e9e070a417b58083",
".git/objects/8c/0bd2adbe530a7cde5e5ba306d728de95d0ff82": "dfcb6371881aeb65bb89b6286b16d51f",
".git/objects/5e/a225faa35cd8f2d3027ac52ce72c08ef86616f": "b4ed2020a5b449d2b4552dda4ebd3e0c",
".git/objects/5e/354146572edd4ec28956cc52e8d00435f4b4ce": "88afc0e0a8fb9b1ecf54b50daea4c754",
".git/objects/5c/04c72e4b711567a6553e2cf510fc75f15991eb": "646cfc600c0357e5a2b97904648f6c49",
".git/objects/c2/a0b0d188c425c9602e1627c33408bff42ae57f": "53fdd651b374fa0851b8278dffa010cb",
".git/objects/c2/95040370dfd25f63657116037980efb105fb4a": "a10a11a10e2352e5cc679415d3e51956",
".git/objects/63/cda5c4f3ecd041b8854c9b95578444d1e9799a": "7bb0fe185932d51f13469c3881cf3ea2",
".git/objects/fb/c96556a688e7934f63590978609e2af0a04756": "eae684ab16c2da959aca154006de31e3",
".git/objects/fb/83f40ab96311567e9556f18754ef03fbc699be": "be5fc0c3c97014eba4b7bde65c9880cd",
".git/objects/26/f577d9a11cd8190d233dfc2689cdb8be5002a9": "5b932fb1e4c596d3223066d953fc44e2",
".git/objects/a2/e8e06676a05f426dbc0d68a02efc9f19b1ef9c": "0cb0f4c90b6221233b14795340aee063",
".git/objects/a2/010e376f1ac3093b9f482509b303a6ccf24921": "c535c03cf6d326c00e6302d05d1e4df5",
".git/objects/4b/50d1ef9b3c01504a6ef5c75a6d0c1164630339": "eda8653aeebda52a59b00f433b02722b",
".git/objects/4e/5e5524f6642a4fccf348599d74284bdd6be78f": "6fd9c67ce9d5537f988f82a129c97913",
".git/objects/8b/4b8743f22a4f9518940e7895b585ff50ca2c50": "a9497dff639dab326da95b4748e45292",
".git/objects/05/e67511b783050d7c5ab41bf5a294edca538bb9": "664eada5da38ae6b5d95706b5a4c1541",
".git/objects/1a/b1dc276d42bde8dd14974b5b9404ffe1f5b546": "c24767943bbc2977d5f9c1cc1110d743",
".git/objects/e7/3b7b529f83e1e43bb45431e66d3efbfa6b84c1": "0a6afdaffe93750039ba94316fbb831d",
".git/objects/d5/6e3b426c2003ace62a4abc8765e335d51f8c32": "52c3d11f39eb786d66a122826ca500e2",
".git/objects/2f/ece6b1cd5e83dfceb63f07d8b34d905153df0a": "a43c0c53bf9a38f42844f81db390d526",
".git/objects/f9/d84ccddc90b84ee7ae1566cc9449349f3a5081": "09dbdda1fc4a5e5307e994e759a78863",
".git/objects/fa/e1f9d60be050f5c62cf49dc94373f53c6e43b8": "9458c32b6dbbf8138fc3438c19a20522",
".git/objects/e9/ec02596a43f71d70a22fd1f4bb450dff40327a": "c3feef949aea5a01d80b60960ca74f4a",
".git/objects/d1/9d4a43c25e213af0043dfe159b77e4d6b409e7": "ca80615ea9f2894758734fb102de8f6c",
".git/objects/16/bd729eb3666f49d5f85c62201eae7bd3fa4519": "74656a70efcc2963345c9c1a0bae5d6d",
".git/objects/6a/5c64c5bc9f7b907c93300cdf715d218b4681b2": "086dc68d59c8010b66e1a6154f3349cf",
".git/objects/be/19664b9212314c2693107e34122c4c85425f30": "3805325ea71080cae311ce5ddce4f051",
".git/objects/be/7a6ca3cc501881f324052578e8e7dcb84c1512": "8e25b3130f8316c775e34a8a4578c42f",
".git/objects/2b/9f0770d63e55237297d436ee786b63a7054cc3": "f8d52040fb54c8227820002cab0dd536",
".git/objects/2b/4229d62277438d0ae78ce5e24cb0a3054dc5fb": "f0e10472fb74d68a2c76be5bfa488a20",
".git/objects/3a/a334a3cd90defaf55dbb3f443c099bdfe7236d": "74ba8770f98b9d24b77bec3b31ef3d0c",
".git/objects/0d/add7728d2600ecb3402250436e68d1ddf648d6": "1b17dd1950356756f749abea4b61fb7b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "c7405a1b8c4804de2e85bb4f042cd39d",
".git/config": "d6bc818d5a216629cb2d2bddabd605c1",
"README.md": "3525a318f12a2b3e42161cbf8654c32b",
"version.json": "dd3aaf28b5109a7d767bcb269ab236dd",
"index.html": "f77237a82f61f81888f623b9dc5173a0",
"/": "f77237a82f61f81888f623b9dc5173a0",
"splash/img/light-background.png": "9746515c2267636e88a2159f2ede95a9",
"splash/style.css": "f38b46f4946aa7c41b459ed0f982f1a6",
"main.dart.js": "acedf8d8d4ad10db12ccd3e36b997a9c"
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
