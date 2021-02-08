    'use strict';
    
    
    let y_point = 0;
    let e_point = 0;
    let t_point = 0;
    let r_point = 0;
    let h_point = ['0','15','30','40','G','Ad'];
    let d_flag = 0;
    let count = 0;

    function p_point_y (){
      document.getElementById('y_point').textContent = h_point[y_point];
//      document.getElementById('y_point2').textContent = y_point;
    }
    
    function p_point_e (){
      document.getElementById('e_point').textContent = h_point[e_point];
//      document.getElementById('e_point2').textContent = e_point;
    }
    
    function ad_y_point(){
      document.getElementById('y_point').textContent = h_point[5];
//      document.getElementById('y_point2').textContent = y_point;
      document.getElementById('e_point').textContent = h_point[3];
//      document.getElementById('e_point2').textContent = e_point;
    }
    
    function ad_e_point(){
      document.getElementById('y_point').textContent = h_point[3];
//      document.getElementById('y_point2').textContent = y_point;
      document.getElementById('e_point').textContent = h_point[5];
//      document.getElementById('e_point2').textContent = e_point;
    }
    
    function g_y_point(){
      document.getElementById('y_point').textContent = h_point[4];
//      document.getElementById('y_point2').textContent = y_point;
    }
    
    function g_e_point(){
      document.getElementById('e_point').textContent = h_point[4];
//      document.getElementById('e_point2').textContent = e_point;
    }
    
    function l_y_point(){
      document.getElementById('y_point').textContent = h_point[3];
//      document.getElementById('y_point2').textContent = y_point;
    }
    
    function l_e_point(){
      document.getElementById('e_point').textContent = h_point[3];
//      document.getElementById('e_point2').textContent = e_point;
    }
    
    function d_point(){
      document.getElementById('y_point').textContent = h_point[3];
//      document.getElementById('y_point2').textContent = y_point;
      document.getElementById('e_point').textContent = h_point[3];
//      document.getElementById('e_point2').textContent = e_point;
    }
    
    function w_msg(winner){
      const win = `ゲームセット<p>勝者は${winner}</p>`;
      document.getElementById('msg').insertAdjacentHTML('afterBegin',win) ;
    }
    
    function g_name(){
      const name = document.getElementById('you').textContent;
      const enemy = document.getElementById('enemy').textContent;
      const g_name = [name,enemy];
      return g_name;
    }
    
    function y_a_image(){
      const images = ['images/nis_f.jpg','images/nis_b.jpg','images/nis_s.jpg'];
      let i = Math.floor(Math.random() * 3);
          document.getElementById('a_image').src = images[i];
    }
    
    function e_a_image(enemy){
      const images = ['images/fed_f.jpg','images/fed_b.jpg','images/fed_s.jpg','images/rafa_f.jpg','images/rafa_b.jpg','images/rafa_s.jpg','images/nadal_i.jpg','images/joco_f.jpg','images/joco_b.jpg','images/joco_s.jpg'];
      
      switch (enemy){
        case "フェデラー":
          let i = Math.floor(Math.random() * 3);
          document.getElementById('a_image').src = images[i];
          break;
        case "ナダル":
          let j = Math.floor(Math.random() * 4) + 3;
          if (j === 6){
            document.getElementById('a_image').src = images[6];
          }else{
            document.getElementById('a_image').src = images[j];
          }
          break;
        case "ジョコビッチ":
          let k = Math.floor(Math.random() * 3) + 7;
          document.getElementById('a_image').src = images[k];
          break;
      }
    }
    
    function w_image(winner){
      const images = ['images/fed_w.jpg','images/rafa_w.jpg','images/joco_w.jpg','images/nis_w.jpg'];
      switch (winner){
        case "フェデラー":
          document.getElementById('a_image').src = images[0];
          break;
        case "ナダル":
          document.getElementById('a_image').src = images[1];
          break;
        case "ジョコビッチ":
          document.getElementById('a_image').src = images[2];
          break;
        default :
          document.getElementById('a_image').src = images[3];
      }
    }
    
//    ボーダー処理
    $(document).ready(function(){
      $('label').children().on('mouseover',function(){
        $(this).addClass('border');
      })
      $('label').children().on('mouseout',function(){
        $(this).removeClass('border');
      })
    })
    
    $(document).ready(function(){
      $('label').children().on('click',function(){
        $(this).addClass('border2');
      })
    })
    
    // 名前入力処理
    document.getElementById('n_button').onclick = function (){
      const name = document.getElementById('c_name').value;
      document.getElementById('you').textContent = `${name}`;
      const enemy = document.getElementById('form1').enemy.value;
      document.getElementById('enemy').textContent = `${enemy}`;
      document.getElementById('form2').classList.remove('hidden');
    }
    
    // リセット処理
    document.getElementById('rs_button').onclick = function(){
      document.getElementById('y_point').textContent = 0;
      document.getElementById('e_point').textContent = 0;
      document.getElementById('msg').textContent = '';
      document.getElementById('a_image').src = "";
      count = 0;
//      document.location.reload();
    }

    /*サーブボタン押下処理*/
    document.getElementById('s_button').onclick = function(){
      
      /*名前を配列に格納*/
      let w_name = g_name();
      
//      初期orリセット時
      if (count === 0){
        y_point = 0;
        e_point = 0;
      }
      
//      ポイント処理
      let attack = Math.floor(Math.random() * 10) + 1;
      if (attack > 5){
        y_point += 1;
        y_a_image();
      }else {
        e_point += 1;
        e_a_image(w_name[1]);
      }
      
      t_point = y_point + e_point;
      r_point = y_point - e_point;
//      document.getElementById('total').textContent = t_point;
//      document.getElementById('rest').textContent = r_point;
      
      /*デュースにならなかった場合*/
      if (y_point > 3 && e_point < 3 && d_flag !== 1){
          g_y_point();
          w_image(w_name[0]);
          w_msg(w_name[0]);
      } else if (e_point > 3 && y_point < 3){
          g_e_point();
          w_image(w_name[1]);
          w_msg(w_name[1]);
      } else{
          p_point_y();
          p_point_e();
      }
      
      /*デュースになった場合*/
      if (y_point >= 3 && e_point >= 3){
        d_flag = 1;
        switch(r_point){
          case 2:
            g_y_point();
            l_e_point();
            w_image(w_name[0]);
            w_msg(w_name[0]);
            break;
          case -2:
            g_e_point();
            l_y_point();
            w_image(w_name[1]);
            w_msg(w_name[1]);
            break;
          case 1:
            ad_y_point();
            break;
          case -1:
            ad_e_point();
            break;
          case 0:
            d_point();
            break;
        }
      }
      count++;
    }