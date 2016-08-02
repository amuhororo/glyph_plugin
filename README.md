# glyph_plugin_bata
グリフボタンテスト  
  
##パラメーター  
必須のパラメーターはありません。  
###デフォルト
* line　 ： glyph画像。無ければデフォルトの「nextpage.gif」を使う
* fix　　： trueを指定すると、left、及び、topを指定した位置に表示されます。
* top　　： fix=true 時のみ有効。指定なしの場合0
* left　 ： fix=true 時のみ有効。指定なしの場合0  
  
###アニメーション
* anime　： trueを指定すると、アニメーションになります。
* width　： 1コマ分の横サイズ。*anime=true 時は必須
* height ： 1コマ分の縦サイズ。*anime=true 時は必須
* cut　　： コマ数。*anime=true 時は必須
* sec　　： アニメーションの速度。指定なしの場合は1秒。
* alt　　： trueを指定すると、アニメーションを往復にする。
* leng　 ： 縦方向の画像を使う。（ウディタ用メッセージボタン素材など）  
  
##インラインで使う場合  
make.ks にも同じ glyph タグを記載する。わかりにくいな。
