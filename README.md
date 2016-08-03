# glyph_plugin_bata
グリフボタンテスト  
  
##機能  
* クリック待ち画像の表示タイミングを、[p][l]のタイミングに変更します。
* パラメーター指定で、パラパラアニメを表示できます。
  
##パラメーター  
必須パラメーターはありません。  
例えば、[glyph] と指定すると、画像はデフォルトのまま表示タイミングだけ変更できます。  

###デフォルト
* line　 ： glyph画像。無ければデフォルトの「nextpage.gif」を使う
* fix　　： trueを指定すると、left、及び、topを指定した位置に表示されます。
* top　　： fix=true 時のみ有効。指定なしの場合0
* left　 ： fix=true 時のみ有効。指定なしの場合0  
  
###アニメーション用
* anime　： trueを指定すると、アニメーションになります。
* width　： 1コマ分の横サイズ。*anime=true 時は必須
* height ： 1コマ分の縦サイズ。*anime=true 時は必須
* cut　　： コマ数。*anime=true 時は必須
* sec　　： アニメーションの速度。指定なしの場合は1秒。
* alt　　： trueを指定すると、アニメーションを往復にする。
* leng　 ： trueを指定すると、縦方向に連結した画像を使う。（ウディタ用メッセージボタン素材など）  
  
##使い方  
first.ksにて、glyph.ksを呼び出してください。  
[call storage="glyph/glyph.ks"]  
  
タグの書きかたは、通常通りです。デフォルトのパラメータもそのまま使えます。  
例：[glyph line="glyph.png" anime=true cut=16 width=24 height=24 alt=true sec=1 fix=true top= top=550 left=880]  

###fix=true を指定**しない**場合
make.ks にも同じ glyph タグを記載する必要があります。  
記載しないと、ロード後にグリフボタンが現れません。  
※逆に、fix-true時はmake.ksには記載しないでください。  
