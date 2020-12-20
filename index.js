var round =0;
    var i=-1;
    var dis=" Web Developer ";
    var app = setInterval(appear,300);

    function appear(){
          i++;
          if(i==dis.length)
          {
            round++;
            if(round%2==0)
            {
             i=0;
             dis = " ";
             document.getElementById("st_dy").innerHTML = dis;
             dis=" Web Developer ";
            }
            else
            {
            i=0;
             dis = " ";
             document.getElementById("st_dy").innerHTML = dis;
             dis=" Competative Programmer ";
            }
             
          } 
         document.getElementById("st_dy").innerHTML += dis[i];

     }
    
    function menu(value)
    {
        if(value==1)
        {
            document.getElementById("menu_btn").style.display="none";
            document.getElementById("menu_cross").style.display="inline";
            document.getElementById("menu_block_item").style.display="block";
        }
        else if(value==2)
        {
            document.getElementById("menu_block_item").style.display="none";
            document.getElementById("menu_btn").style.display="inline";
            document.getElementById("menu_cross").style.display="none";
        }
    }    