    'use strict';

    let y_point = 0;
    let e_point = 0;
    let t_point = 0;
    let r_point = 0;
    let h_point = ['0','15','30','40','G','Ad'];
    let d_flag = 0;
    let count = 0;

    function p_point_y_s(){
      document.getElementById('y_point').textContent = h_point[y_point];
    }

    function p_point_y (){
      setTimeout(p_point_y_s,2000);
//      document.getElementById('y_point2').textContent = y_point;
    }
    
    function p_point_e_s(){
      document.getElementById('e_point').textContent = h_point[e_point];
    }

    function p_point_e (){
      setTimeout(p_point_e_s,2000);
//      document.getElementById('e_point2').textContent = e_point;
    }
    
    function ad_y_point_s(){
      document.getElementById('y_point').textContent = h_point[5];
//      document.getElementById('y_point2').textContent = y_point;
      document.getElementById('e_point').textContent = h_point[3];
//      document.getElementById('e_point2').textContent = e_point;
    }

    function ad_y_point(){
      setTimeout(ad_y_point_s,2000);
    }
    
    function ad_e_point_s(){
      document.getElementById('y_point').textContent = h_point[3];
//      document.getElementById('y_point2').textContent = y_point;
      document.getElementById('e_point').textContent = h_point[5];
//      document.getElementById('e_point2').textContent = e_point;
    }

    function ad_e_point(){
      setTimeout(ad_e_point_s,2000);
    }
    
    function g_y_point_s(){
      document.getElementById('y_point').textContent = h_point[4];
//      document.getElementById('y_point2').textContent = y_point;
    }

    function g_y_point(){
      setTimeout(g_y_point_s,2000);
    }
    
    function g_e_point_s(){
      document.getElementById('e_point').textContent = h_point[4];
//      document.getElementById('e_point2').textContent = e_point;
    }

    function g_e_point(){
      setTimeout(g_e_point_s,2000);
    }
    
    function l_y_point_s(){
      document.getElementById('y_point').textContent = h_point[3];
//      document.getElementById('y_point2').textContent = y_point;
    }

    function l_y_point(){
      setTimeout(l_y_point_s,2000);
    }
    
    function l_e_point_s(){
      document.getElementById('e_point').textContent = h_point[3];
//      document.getElementById('e_point2').textContent = e_point;
    }

    function l_e_point(){
      setTimeout(l_e_point_s,2000);
    }
    
    function d_point_s(){
      document.getElementById('y_point').textContent = h_point[3];
//      document.getElementById('y_point2').textContent = y_point;
      document.getElementById('e_point').textContent = h_point[3];
//      document.getElementById('e_point2').textContent = e_point;
    }

    function d_point(){
      setTimeout(d_point_s,2000);
    }
    
    function w_msg(winner){
      const win = `GAME SET !!<p>勝者は${winner}</p>`;
      document.getElementById('msg').insertAdjacentHTML('afterBegin',win) ;
      document.getElementById('s_button').classList.add('hidden');
    }


    
    function g_name(){
      const name = document.getElementById('you').textContent;
      const enemy = document.getElementById('enemy').textContent;
      const g_name = [name,enemy];
      return g_name;
    }
    
    function anime(){
      document.getElementById('anime').classList.remove('hidden');
    }

    function start_anime(){
      remove_image();
      anime();
      setTimeout(remove_anime,2000);
      function remove_anime(){
        document.getElementById('anime').classList.add('hidden');
      }
    }

    function buru(){
      document.getElementById('a_image').classList.add('buruburu');
    }

    function remove_image(){
      document.getElementById('a_image').classList.add('hidden');
    }

    function show_image(){
      document.getElementById('a_image').classList.remove('hidden');
      buru();
    }

    function y_a_image(){
      const images = ['images/nis_f.jpg','images/nis_b.jpg','images/nis_s.jpg'];
      let i = Math.floor(Math.random() * 3);
      document.getElementById('a_image').src = images[i];
      show_image();
    }

    function y_a_image_timer(){
      setTimeout(y_a_image,2000);
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
      show_image();
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
      document.getElementById('a_image').classList.add('delayed-image');
    }

    function reload (){
      document.location.reload();
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
      // document.getElementById('y_point').textContent = 0;
      // document.getElementById('e_point').textContent = 0;
      // document.getElementById('msg').textContent = '';
      // // document.getElementById('a_image').src = "";
      // remove_image();
      // count = 0;
      reload();  
    }

    /*サーブボタン押下処理*/
    document.getElementById('s_button').onclick = function(){

      /*名前を配列に格納*/
      let w_name = g_name();
      
//      初期orリセット時
      if (count === 0){
        y_point = 0;
        e_point = 0;
      // }else if(count === 'gs'){
      //   document.location.reload();
      }
      
//      ポイント処理
      let attack = Math.floor(Math.random() * 10) + 1;
      if (attack > 5){
        y_point += 1;
        start_anime();
        y_a_image_timer();
      }else {
        e_point += 1;
        start_anime();
        setTimeout(function(){e_a_image(w_name[1])}, 2000);
      }
      
      t_point = y_point + e_point;
      r_point = y_point - e_point;

      // document.getElementById('y_point2').textContent = y_point;
      // document.getElementById('e_point2').textContent = e_point;
      // document.getElementById('total').textContent = t_point;
      // document.getElementById('rest').textContent = r_point;
            
      /*デュースにならなかった場合*/
      if (y_point > 3 && e_point < 3 && d_flag !== 1){
          g_y_point();
          setTimeout(function(){w_image(w_name[0])},2000);
          setTimeout(function(){w_msg(w_name[0])},2000);
      } else if (e_point > 3 && y_point < 3){
          g_e_point();
          setTimeout(function(){w_image(w_name[1])},2000);
          setTimeout(function(){w_msg(w_name[1])},2000);
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
            setTimeout(function(){w_image(w_name[0])},2000);
            setTimeout(function(){w_msg(w_name[0])},2000);
            break;
          case -2:
            g_e_point();
            l_y_point();
            setTimeout(function(){w_image(w_name[1])},2000);
            setTimeout(function(){w_msg(w_name[1])},2000);
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
