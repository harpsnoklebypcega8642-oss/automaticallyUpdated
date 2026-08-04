'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "06aa5cda7d2e029081d55b1f6a4f6e02",
"assets/AssetManifest.bin.json": "716f521fa8db713ad24591d67de4c1f8",
"assets/assets/icons/login_brand_mark.svg": "f06ad3a7be16e30b29c7d182f08b853f",
"assets/assets/icons/logo.jpg": "9ccea5e1d993858e38656c1285fcc21e",
"assets/assets/icons/play.png": "e719edc97e1df1d69ddd520a02a5e855",
"assets/assets/icons/pwa_install_add.svg": "f9672be77d9cccbdeeefe100ec90b947",
"assets/assets/icons/pwa_install_phone.svg": "e1cfc220382bf3906a97d3568a7df322",
"assets/assets/icons/pwa_install_share.svg": "36a3509ad08f3131b220be53dabe3649",
"assets/assets/icons/rtc_call_video.svg": "166cb4fdd634c74251d5151b1b1b1501",
"assets/assets/icons/rtc_call_voice.svg": "7c5c08a610b01712b20700735fb5ca47",
"assets/assets/icons/splash.svg": "682821c96052a5635318c2cb66f67009",
"assets/assets/icons/splash2.svg": "4a108965468213f2e5d83eebeecdaf3d",
"assets/assets/icons/url.svg": "8b471b0bc5a3b92099bc00fb5f20ac59",
"assets/assets/images/explore/close.svg": "12007d1ecdea13b9cd08ffc6ed3609fb",
"assets/assets/images/explore/medical_services_stack.svg": "3a85c3e4dea2ec8f11d6ca0d8f2e6d3d",
"assets/assets/images/explore/patient_recommendation_banner.png": "775cdd07937c4a7d912dd708fff0a31f",
"assets/assets/images/logo.png": "a55e447484961eeac5c0b598cd7d3d65",
"assets/assets/images/message/chat_message_read.svg": "4b00076c6d14d596fcfa5edd9037c411",
"assets/assets/images/message/chat_message_unread.svg": "02f70ec06e38383066f482965517d4b6",
"assets/assets/images/message/group_message_readers_placeholder.svg": "403d9bd2944bcd49d87b2fdd2c325b62",
"assets/assets/images/message/group_message_read_frame.svg": "af08990d7c6dde74ba9d6aae065a2f9b",
"assets/assets/images/message/group_message_read_overflow.svg": "b8b6546f4c38a83a880a1e3fd8f7442f",
"assets/assets/images/message/network_error_placeholder.svg": "b1dee8269ee2d30e65dc9dc649ad7277",
"assets/assets/images/message/notice.svg": "a59d3642756c4295e2b5bc919d860491",
"assets/assets/images/message/notice_center_chevron.svg": "afd4246a84d990979267588f991016a7",
"assets/assets/images/profile/account_eye_open.svg": "5f639faff454e8870268ffddf9c2758c",
"assets/assets/images/profile/account_eye_outline.svg": "a55bf5162f03aca4905cdb8da82c95e8",
"assets/assets/images/profile/account_eye_pupil.svg": "384190d7765c34d1ab845efbc8d9e0fa",
"assets/assets/images/profile/change_account_nav_back.svg": "e93aff3b379241fdbd275938d10b7f20",
"assets/assets/images/profile/icon_forgot_code.svg": "197629c26fce0cb1d3ad9e5e34feeee5",
"assets/assets/images/profile/icon_forgot_email.svg": "fde345fd1d83abebb7d873b90fba42a2",
"assets/assets/images/profile/icon_forgot_lock_body.svg": "5f298c0495d53652ce3141b2bbf99d63",
"assets/assets/images/profile/icon_forgot_lock_keyhole.svg": "c7ddcc403c9c757f7a93a50749bdbd22",
"assets/assets/images/profile/invite.png": "75bda822b220a38e8059f0b8cda3e2bd",
"assets/assets/images/profile/my_account_hero.svg": "9f0ced0d904b76eb734cf416128dcfa2",
"assets/assets/images/xhjPlaylet.png": "adf5682f39062862d40b6e36ccdb61d8",
"assets/assets/images/xhjVideo.png": "02d4c40505f6673c294191914f9c66e5",
"assets/assets/sounds/notice.mp3": "17ccc6b78388c9e0733f49653ab6f6dc",
"assets/FontManifest.json": "df7941d7f1471ba664695d864ca1b139",
"assets/fonts/MaterialIcons-Regular.otf": "5f195aca8e4854350a2032bc07bfcf35",
"assets/fonts/Roboto-Bold.ttf": "a0dfeb5d15101b6933df056d25bf1f3d",
"assets/fonts/Roboto-Regular.ttf": "c967730c06373ac1b27c087a3b3a0d06",
"assets/NOTICES": "c77b2bac5e01a74b16b539572a524f0c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/tencent_calls_uikit/assets/audios/phone_dialing.mp3": "a3fc546bc9fd7d3053a9933fe0e30daf",
"assets/packages/tencent_calls_uikit/assets/audios/phone_hangup.mp3": "33490500b8169668f5074bb8cb2547a1",
"assets/packages/tencent_calls_uikit/assets/audios/phone_ringing.mp3": "baff2a79b59f40e66459ad9eeefb59f1",
"assets/packages/tencent_calls_uikit/assets/images/add_user.png": "6399e534e247f0d895a87e91363b7403",
"assets/packages/tencent_calls_uikit/assets/images/arrow.png": "7d7d20720b1b2f5e0b4e17e051bf39c8",
"assets/packages/tencent_calls_uikit/assets/images/audio_unavailable.png": "7e7cc8cb37653b04efc36fbd1a848bcf",
"assets/packages/tencent_calls_uikit/assets/images/audio_unavailable_grey.png": "d70c279dc70fab3dd2c702748ad9d5d1",
"assets/packages/tencent_calls_uikit/assets/images/blur_background_accept.png": "31ecd85968337e6d61c023c013402146",
"assets/packages/tencent_calls_uikit/assets/images/blur_background_waiting_disable.png": "dead9ae533d46a55c212f70f6d7f65f1",
"assets/packages/tencent_calls_uikit/assets/images/blur_background_waiting_enable.png": "e43613472fd314813956fda352d3f3ec",
"assets/packages/tencent_calls_uikit/assets/images/camera_off.png": "36990b162868f5a9dac47cd7ab8108cd",
"assets/packages/tencent_calls_uikit/assets/images/camera_on.png": "caf4d0fa5f5ebb2c9fc998ee03ea636d",
"assets/packages/tencent_calls_uikit/assets/images/check_box_group_selected.png": "79316096f767602ddb7ac68c018a687d",
"assets/packages/tencent_calls_uikit/assets/images/check_box_group_unselected.png": "bb4fc328e70273945feb37713816fda5",
"assets/packages/tencent_calls_uikit/assets/images/dialing.png": "ed23abfde97d28036502095c071264e6",
"assets/packages/tencent_calls_uikit/assets/images/floating_button.png": "9b81c3741ca4c1dad47864b58c2cc72c",
"assets/packages/tencent_calls_uikit/assets/images/handsfree.png": "577d6fe7390f9d26d36e31fb01070145",
"assets/packages/tencent_calls_uikit/assets/images/handsfree_on.png": "b55e9b0ddbe7c607f6b725154e8f927e",
"assets/packages/tencent_calls_uikit/assets/images/hangup.png": "e2ca6c0b7a35174efde6e3ec7eaf1609",
"assets/packages/tencent_calls_uikit/assets/images/join_group_call.png": "bb2459d3663e870b697a3c40096f86a5",
"assets/packages/tencent_calls_uikit/assets/images/join_group_compress.png": "a36ff6076967c72cfc7bafb40c2e44d8",
"assets/packages/tencent_calls_uikit/assets/images/join_group_expand.png": "44b028813d7da2597f24eac4ad46e72d",
"assets/packages/tencent_calls_uikit/assets/images/loading.gif": "9d0e89898974f657af212ed26eeebb34",
"assets/packages/tencent_calls_uikit/assets/images/mute.png": "ea4f5db8c4872e65f5a6aa69a8d72316",
"assets/packages/tencent_calls_uikit/assets/images/mute_on.png": "79a93858c66ca0d1d6bad3c85706e261",
"assets/packages/tencent_calls_uikit/assets/images/network_bad.png": "3783ff89a0caabaaf7d1248bf11b0d70",
"assets/packages/tencent_calls_uikit/assets/images/speaking.png": "fe2fbcb3497786015a580c723d3a6241",
"assets/packages/tencent_calls_uikit/assets/images/switch_camera.png": "f681ce8fdc32689ef5a491a80c8eeefc",
"assets/packages/tencent_calls_uikit/assets/images/switch_camera_group.png": "d4a16408abd38d2f1320753548a49ee2",
"assets/packages/tencent_calls_uikit/assets/images/user_icon.png": "23f8841079dceeb9ae7babc308d704bd",
"assets/packages/tencent_calls_uikit/assets/images/virtual_background.png": "6bfd8bf190926c17649d606fe20dc723",
"assets/packages/tuikit_atomic_x/call_assets/add_user.png": "6399e534e247f0d895a87e91363b7403",
"assets/packages/tuikit_atomic_x/call_assets/ai_transcriber_close.png": "70a6cc660caa3fefcb35e4d6bf8dcfbb",
"assets/packages/tuikit_atomic_x/call_assets/ai_transcriber_open.png": "c06a72703eb823f35b118f9bebc656c3",
"assets/packages/tuikit_atomic_x/call_assets/arrow.png": "7d7d20720b1b2f5e0b4e17e051bf39c8",
"assets/packages/tuikit_atomic_x/call_assets/audio_unavailable.png": "0bfc9bba82adb04635d2def2642ec476",
"assets/packages/tuikit_atomic_x/call_assets/audio_unavailable_grey.png": "d70c279dc70fab3dd2c702748ad9d5d1",
"assets/packages/tuikit_atomic_x/call_assets/blur_background_accept.png": "31ecd85968337e6d61c023c013402146",
"assets/packages/tuikit_atomic_x/call_assets/blur_background_waiting_disable.png": "dead9ae533d46a55c212f70f6d7f65f1",
"assets/packages/tuikit_atomic_x/call_assets/blur_background_waiting_enable.png": "e43613472fd314813956fda352d3f3ec",
"assets/packages/tuikit_atomic_x/call_assets/camera_off.png": "36990b162868f5a9dac47cd7ab8108cd",
"assets/packages/tuikit_atomic_x/call_assets/camera_on.png": "caf4d0fa5f5ebb2c9fc998ee03ea636d",
"assets/packages/tuikit_atomic_x/call_assets/check_box_group_selected.png": "79316096f767602ddb7ac68c018a687d",
"assets/packages/tuikit_atomic_x/call_assets/check_box_group_unselected.png": "bb4fc328e70273945feb37713816fda5",
"assets/packages/tuikit_atomic_x/call_assets/dialing.png": "ed23abfde97d28036502095c071264e6",
"assets/packages/tuikit_atomic_x/call_assets/floating_button.png": "9b81c3741ca4c1dad47864b58c2cc72c",
"assets/packages/tuikit_atomic_x/call_assets/handsfree.png": "577d6fe7390f9d26d36e31fb01070145",
"assets/packages/tuikit_atomic_x/call_assets/handsfree_on.png": "b55e9b0ddbe7c607f6b725154e8f927e",
"assets/packages/tuikit_atomic_x/call_assets/hangup.png": "e2ca6c0b7a35174efde6e3ec7eaf1609",
"assets/packages/tuikit_atomic_x/call_assets/join_group_call.png": "bb2459d3663e870b697a3c40096f86a5",
"assets/packages/tuikit_atomic_x/call_assets/join_group_compress.png": "a36ff6076967c72cfc7bafb40c2e44d8",
"assets/packages/tuikit_atomic_x/call_assets/join_group_expand.png": "44b028813d7da2597f24eac4ad46e72d",
"assets/packages/tuikit_atomic_x/call_assets/loading.gif": "c8f75a52bcab5ef82b03dc9cc7f04236",
"assets/packages/tuikit_atomic_x/call_assets/mute.png": "ea4f5db8c4872e65f5a6aa69a8d72316",
"assets/packages/tuikit_atomic_x/call_assets/mute_on.png": "79a93858c66ca0d1d6bad3c85706e261",
"assets/packages/tuikit_atomic_x/call_assets/network_bad.png": "3783ff89a0caabaaf7d1248bf11b0d70",
"assets/packages/tuikit_atomic_x/call_assets/speaking.png": "fe2fbcb3497786015a580c723d3a6241",
"assets/packages/tuikit_atomic_x/call_assets/switch_camera.png": "f681ce8fdc32689ef5a491a80c8eeefc",
"assets/packages/tuikit_atomic_x/call_assets/switch_camera_group.png": "d4a16408abd38d2f1320753548a49ee2",
"assets/packages/tuikit_atomic_x/call_assets/user_icon.png": "23f8841079dceeb9ae7babc308d704bd",
"assets/packages/tuikit_atomic_x/call_assets/virtual_background.png": "6bfd8bf190926c17649d606fe20dc723",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_0.png": "541ea3c008c65b7a636d61b0dc54fbc2",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_1.png": "62b63a08ff275506026873026036aee8",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_10.png": "c1e5928a19e7d1ff4ae2b2a6940cd004",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_11.png": "75f0006078d276c9ce6e41654579d2eb",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_12.png": "9bd567e65894ec6bdf1c119b4a7daf23",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_13.png": "b5f6fb27f47d2a571db541b03e21ef4c",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_14.png": "fee2411db7add2a4c0d3c990c0beac36",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_15.png": "649ec58dd96847bf5ef3285e15c9d6e7",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_16.png": "75da58ee1fc2fcaea0b68f50c2ab928f",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_17.png": "f51c1d73d41f4e1b73f914ee6198202c",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_18.png": "39fdefbd75316a92559905b4a776e7e6",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_19.png": "05e8d2c3b2f25ce5a0e23f6683651764",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_2.png": "3e9c9e9da9f0e664c9227c73cfdb969a",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_20.png": "bd0ba10dfa9bac7a41c86e9424496f13",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_21.png": "db8f12318b488b7ab99eb427112381e4",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_22.png": "b65952d037699f6122e949fc61f11a02",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_23.png": "e16444b274e87068311500c770f1b403",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_24.png": "73636ed666b3e3eb8ab4768f5dfb7303",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_25.png": "5dc3114e94952b1d140e9331acad7e15",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_26.png": "31a38caf38e6f18c20edace14fb33ce5",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_27.png": "89e1f5c590d3d4d3dc4dddbcab27f85e",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_28.png": "5e190ec6b30a4dee2ea73263a2d58702",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_29.png": "64a20230639fb90ee4f38578eb061dda",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_3.png": "42949c1c249dc9b3c2160fcebb843aa6",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_30.png": "ee83fa3a246ab94dcec1414481d48911",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_31.png": "024d28ca0dd3898f1fbca673a0717ca3",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_32.png": "f7f09cb422b504c60a71fa4f2577c158",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_33.png": "c30358df1d58813426ea6595c20243f0",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_34.png": "6069cd71a9b54ba678a62b8832580f1c",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_35.png": "ce552b1a4d4cf252562844b75b792797",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_36.png": "59ff2f3bf522585b54a9c9c89739e61c",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_37.png": "d230398225c86068605e1967fa68404b",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_38.png": "55d318b6e435a704adfc9db294c58017",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_39.png": "06b4ba2af687eb004ee2b477bd92aaa5",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_4.png": "129d0901afb290fb0c1a3b23f0bb7967",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_40.png": "37e47a7af320b527ff0d3b427d11d5a0",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_41.png": "71d8d68886644e301c280b6b56313407",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_42.png": "db1bbb793898d5c3e7fb294343d6dc80",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_43.png": "e694ad6f4facf65dc3c19e18c4193836",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_44.png": "f57dfdca466456a3b2e8b2478b27d6fa",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_45.png": "07de5fd278902b8d245049bacaf7efed",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_46.png": "31594229c559496eb2dcc76b2941d2da",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_47.png": "207bb16c6c6762ce27d09c9d298198a8",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_48.png": "0510f333a408a37274433ec703d17ba0",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_49.png": "4fcebba0c007effb6b7dbc1d31b21cba",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_5.png": "63b3039c2e0766c30abbe7addaa32d70",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_50.png": "e44d66f3c8f016775dc6871c4378a10b",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_51.png": "58a1ae299a523049a87c8cd7cdf74990",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_52.png": "5c6f9357e57a96d2ea70cc15f9238a86",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_53.png": "c965ee0cf4b8e11e2c764f4e4468a1b2",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_54.png": "ca6f339b9106e6a75754ec5702ec39b2",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_55.png": "dd07ba5675cf8cb0999089b065270c32",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_56.png": "73bc3822362cc56436474553234c14fe",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_57.png": "fc8c9701b4a71dd1e331db5c1ca5b293",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_58.png": "89d665b0917d44c9bc83e8a63c0b6735",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_59.png": "2852d5159a555b5de78348f12c1537c6",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_6.png": "f668c01d5df5bb6f2ce1e14e69213027",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_60.png": "42326a9a8b8dd6819d922547f923666a",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_61.png": "8b5121b03411a6c452634b92a7a1a5a3",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_7.png": "f8ead9f19a2de9b95269aa0c84e9636d",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_8.png": "3fe0b69cf7a18c6824b799b216848504",
"assets/packages/tuikit_atomic_x/chat_assets/emoji/emoji_9.png": "21c70343179aff53869279458822a815",
"assets/packages/tuikit_atomic_x/chat_assets/icon/add.svg": "9dee7802f0b96405173b7cc767019dff",
"assets/packages/tuikit_atomic_x/chat_assets/icon/back_arrow.svg": "e3c4cb265758fd7f7df4d71f6fdcaa98",
"assets/packages/tuikit_atomic_x/chat_assets/icon/camera.svg": "2781fdc288fb2934321ea22944f4bf4b",
"assets/packages/tuikit_atomic_x/chat_assets/icon/camera_action.svg": "e1e5dfd22e2a08b86e876e9c34dd5763",
"assets/packages/tuikit_atomic_x/chat_assets/icon/check-circle-filled.svg": "306f3073ac9fbc289ad93830d2cf5cbc",
"assets/packages/tuikit_atomic_x/chat_assets/icon/check_all.svg": "d40fa854c0ff8fb09ce2d64cc2e38673",
"assets/packages/tuikit_atomic_x/chat_assets/icon/chevron_right.svg": "4a627c650503b5400c95a6248a49a9fe",
"assets/packages/tuikit_atomic_x/chat_assets/icon/close.svg": "a04010bd04914da7bb27c87eaaab6d8e",
"assets/packages/tuikit_atomic_x/chat_assets/icon/copy.svg": "6c24c6adf467d9c84d7a61146a38b99c",
"assets/packages/tuikit_atomic_x/chat_assets/icon/delete.svg": "32c028cb3eac0afe8a9623ab78ca6b6d",
"assets/packages/tuikit_atomic_x/chat_assets/icon/emoji.svg": "5a1871b02fc7310bb2fa6af27f93144b",
"assets/packages/tuikit_atomic_x/chat_assets/icon/error-circle-filled.svg": "f063200755c90821c6de1d1d574c5f22",
"assets/packages/tuikit_atomic_x/chat_assets/icon/file_action.svg": "0746c20b19e53fdf207ea4da44a86bca",
"assets/packages/tuikit_atomic_x/chat_assets/icon/forward.svg": "f44f26ed50f6020c6eca6dbe73498785",
"assets/packages/tuikit_atomic_x/chat_assets/icon/help-circle-filled.svg": "ed4609b8d0b26c8776e6ed1187c7e179",
"assets/packages/tuikit_atomic_x/chat_assets/icon/hide.svg": "e464809b3a78653655acca5acfb11f23",
"assets/packages/tuikit_atomic_x/chat_assets/icon/ic_mute.svg": "d4cd05306b8e09dd231542ddbf2a3bcc",
"assets/packages/tuikit_atomic_x/chat_assets/icon/image.svg": "175cf3f543e0ec5a5e67c409ee1d5484",
"assets/packages/tuikit_atomic_x/chat_assets/icon/image_action.svg": "da62805606ebdd3930268dc04a6e3fea",
"assets/packages/tuikit_atomic_x/chat_assets/icon/info-circle-filled.svg": "e778c9c4967fb4b0f9f70f10efd80dca",
"assets/packages/tuikit_atomic_x/chat_assets/icon/keyboard.svg": "c2cb7a016bdf8044687e3e2a49a814af",
"assets/packages/tuikit_atomic_x/chat_assets/icon/loading-blue.png": "de126871c7d35df146f3641fb5c1b4c0",
"assets/packages/tuikit_atomic_x/chat_assets/icon/message_read_status.svg": "27972e2ba1f4f3e7ff179e3f0ef9be14",
"assets/packages/tuikit_atomic_x/chat_assets/icon/message_unread_status.svg": "ca27fcfb423a49f35bb4bfe2619e8f80",
"assets/packages/tuikit_atomic_x/chat_assets/icon/mic.svg": "992b70963fb77444a2c40e131ab62396",
"assets/packages/tuikit_atomic_x/chat_assets/icon/multi_select.svg": "030938ab2ad546bae34648835d3abf3c",
"assets/packages/tuikit_atomic_x/chat_assets/icon/name_edit.svg": "30feb5a2376f16494a8260cafa7d2a8e",
"assets/packages/tuikit_atomic_x/chat_assets/icon/record_action.svg": "ab72cbd2e576eb43807cced5a289c469",
"assets/packages/tuikit_atomic_x/chat_assets/icon/reply.svg": "5fc8b8374b34373c87e46844bb5640a8",
"assets/packages/tuikit_atomic_x/chat_assets/icon/video_call.png": "5fb4729032e88fe51cf8861cd3ac7b05",
"assets/packages/tuikit_atomic_x/chat_assets/icon/video_call_self.png": "b59e594f992162af2068eda3d94c6905",
"assets/packages/tuikit_atomic_x/chat_assets/icon/voice_call.png": "8f9d6b91741dfa56ddd120f1e330dbac",
"assets/packages/wakelock_plus/assets/no_sleep.js": "74499cf34f37daae14b51e3a23cd9f7a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"device_code_bridge.js": "c34926276da3fb7efc591349f5413c02",
"favicon.png": "d91237e87c23368ba999c4ee14bb1aab",
"fingerprintjs.iife.min.js": "762eb7650c78302191ed5f6fd95ada4d",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "4f3c35c7996a53a911a0fdf53aef2d1f",
"icons/Icon-192.png": "b621b43203e72be1a1b657f17707b94e",
"icons/Icon-512.png": "fd63c6a9cbb864911424dd5e021fad52",
"icons/Icon-maskable-192.png": "b621b43203e72be1a1b657f17707b94e",
"icons/Icon-maskable-512.png": "fd63c6a9cbb864911424dd5e021fad52",
"index.html": "fe69ee9e97304dae920b56aa60b81833",
"/": "fe69ee9e97304dae920b56aa60b81833",
"logo.png": "e6656ba073ce3649fec1e6f735f0b5d0",
"main.dart.js": "44f47db949d808c7bf18506b94a18046",
"manifest.json": "94d13eb1b576640bc82292eaa5be2e71",
"popop_client_shell.html": "60cdbb3254b10f1dfabb9a35407ef05e",
"pwa_install_bridge.js": "048d6e153ad188c2efae7a98b2fa930d",
"version.json": "c9597d78e9ec563509525b43fcbad6ab"};
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
