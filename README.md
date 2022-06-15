# GamingTeam-HP
ゲーミングチーム「novelty」のサイト制作をしました．
###
Noveltyとはスポンサー付きの非プロゲーミングチームです．
スプラトゥーンをメインに活動し，youtubeやtiktokなどで配信をしています．
###
一部ピックアップして紹介します．

## topページ 
<img width="205" alt="novelty_top" src="https://user-images.githubusercontent.com/104476684/173810344-9c5845dd-9259-444c-a25d-a823c3fd505c.png">

## topix
<img width="200" alt="スクリーンショット 2022-06-15 19 52 01" src="https://user-images.githubusercontent.com/104476684/173810496-3af0badb-8c14-4dfc-8445-1d5d577cda9d.png">

## about
<img width="189" alt="スクリーンショット 2022-06-15 19 52 08" src="https://user-images.githubusercontent.com/104476684/173810525-af3f67b0-cdce-4b72-a8ef-58ab24ca16d0.png">

## event
###
スクロールして画面に表示された時にフワッと画像を表示させる機能を実装しました．
###
JavaScript内で，画面の高さを取得しclassを付与．
###
    const targetElement = document.querySelectorAll(".animationTarget");
    console.log("画面の高さ",window.innerHeight)
    document.addEventListener("scroll",function(){
      for  (let i = 0; i < targetElement.length; i++){
        const getElementDistance = targetElement[i].
        getBoundingClientRect().top + targetElement[i].clientHeight*.6
        if(window.innerHeight > getElementDistance){
          targetElement[i].classList.add("show");
        }
      }
    });
###
classが与えられるまで対象の画像を非表示．
###
    opacity: 0;
    transition: 1s .5s;
###
クラス付与後にトランジションでフワッと表示．
###
    transform: translate(-20px,20px);

<img width="193" alt="スクリーンショット 2022-06-15 19 52 26" src="https://user-images.githubusercontent.com/104476684/173810529-0cb1451c-e312-4fcc-b6fb-335c39fa65b7.png">


