diplay_name_1 = localStorage.getItem("name_1");
  diplay_name_2 = localStorage.getItem("name_2");
  document.getElementById("name_1_LBL").innerHTML=diplay_name_1;
  document.getElementById("name_2_LBL").innerHTML=diplay_name_2;
  document.getElementById("question_turn").innerHTML=diplay_name_1;
  document.getElementById("answer_turn").innerHTML=diplay_name_2;

function send(){
 number1 = document.getElementById("Number_1").value;
  number2 =document.getElementById("Number_2").value;
  actual_answer = parseInt(number1) * parseInt(number2);
  question_number = "<h3>Question : "+number1 + " X " +number2+"</h3>";
  input_box = "<br> Answer : <input type='number' id='input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row= question_number + input_box + check_button ;
  document.getElementById("output").innerHTML = row;
  document.getElementById("Number_1").value = "";
  document.getElementById("Number_2").value = "";


}

question_turn = "player_1";
answer_turn = "player_2";
player_1_score = 0;
player_2_score = 0;

function check(){
  get_answer = document.getElementById("input_check_box").value;
  if(get_answer==actual_answer)
  {
    if(answer_turn == "player_1")
    {
       player_1_score = player_1_score +1;
      document.getElementById("score_1").innerHTML = player_1_score;

    }
    else
    {
      player_2_score = player_2_score +1;
      document.getElementById("score_2").innerHTML = player_2_score;

    }
  }
  if(question_turn == "player_1")
  {
    question_turn= "player_2_"
    document.getElementById("player_question").innerHTML = "Question Turn - " + diplay_name_2;
  }
  else
  {
    question_turn= "player_1"
    document.getElementById("player_question").innerHTML = "Question Turn - " + diplay_name_1;
  }

  if(answer_turn == "player_2_")
  {
    answer_turn= "player_1"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + diplay_name_1;
  }
  else
  {
    answer_turn= "player_2"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + diplay_name_2;
  }
}





