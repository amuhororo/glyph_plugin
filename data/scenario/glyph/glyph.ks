;【glyphプラグイン Ver.1】2016/8/3
; by hororo http://hororo.wp.xdomain.jp/
;
; ＜機能＞
;　　・クリック待ち画像の表示タイミングを、[p][l]のタイミングに変更します。
;　　・パラメーター指定で、パラパラアニメを表示できます。
;
; ＜注意点＞
;　　ティラノスクリプトVer422 で動作確認。
;
;　　スクリプトのエンジン本体を改造していますので、Ver変更には対応できない可能性があります。
;　　ブラウザによっては反映されない可能性があります。
;
; ＜使い方＞
;  　最初にglyph.ksファイルを読み込んでください。
;  　[call storage="glyph/glyph.ks"]
;
;　　画像は、デフォルトの「nextpage.gif」と同じ、「/tyrano/images/kag/」内に保存してください。
;
;　　タグの書きかたは、通常通りです。デフォルトのパラメータもそのまま使えます。
;　　例：[glyph line="glyph.png" anime=true cut=16 width=24 height=24 alt=true sec=1]
;
;　　fix=true を指定しない場合は、make.ksにも、同じ[glyph]タグを記述してください。
;　　記述しないと、ロード後にグリフボタンが現れません。
;
; ＜追加パラメーター＞※デフォルト分は省略
;　　anime　： trueを指定すると、アニメーションになります。
;　　width　： 1コマ分の横サイズ。*anime=true 時は必須
;　　height ： 1コマ分の縦サイズ。*anime=true 時は必須
;　　cut　　： コマ数。*anime=true 時は必須
;　　sec　　： アニメーションの速度。指定なしの場合は1秒。
;　　alt　　： trueを指定すると、アニメーションの動きを往復にします。
;　　leng　 ： 縦方向に連結したの画像を使う場合は、trueを指定します。（ウディタ用メッセージボタン素材など）
;
[iscript]
$('head link:last').after('<style>div#glyph_image{display:inline-block;}img#glyph_image{display:inline;}</style>');
[endscript]
[loadjs storage="glyph/glyph.js"]
[return]
