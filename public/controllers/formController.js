

function ui_reply(result) {
  $("#spinner").hide();
  $("#submit").hide();
  $("#text-group").hide();
  $("#tags-group").hide();
  $("#submit").html(
    '<div id="spinner" class="spinner-grow spinner-grow-sm text-light " role="status"></div> Thinking ..'
  );
  $(
    '<label for="result" class="fw-bold m-1">Result</label><br><div class="input-group mb-3"><span class="input-group-text bg-success text-light border-success" id="basic-addon2">What I think</span><input id="result" type="text" class="form-control" placeholder="Answer" aria-label="Answer"  aria-describedby="basic-addon2"></div>'
  ).appendTo("#form");
  $(
    '<button class="btn btn-primary mt-5 text-center" id="reset" type="reset" onclick="location.reload() ">Ask me again ?</button>'
  )
    .appendTo("#form")
    .appendTo("#form");
  console.log(
    "hello from client side form \n sent \n \t :",
    $("#Text").val()
  );
  $('#result').val(result);
}


$(".submit").click(function () {
  const Text = $("#Text").val();
  const Tags = $("#Tags").val();
  
  $("#spinner").removeClass("d-none");
  $("#submit").html(
    '<div id="spinner" class="spinner-grow spinner-grow-sm text-light " role="status"></div> Thinking ..'
  );
  $("#submit").attr("disabled", true);

  $("#Text").attr("disabled", true);
  $("#Tags").attr("disabled", true);
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "Text": Text,
    "Tags": Tags
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  

  url="http://127.0.0.1:8001/flask/cat";
  fetch(url,requestOptions).then((response) => {
    if (response.ok) {
      return response.json();

    }else if(window. onerror()){
      throw new Error('console error')
    }
    throw new Error('Something went wrong');
  })
  .then((responseJson) => {
    ui_reply(responseJson)
  })
  .catch((error) => {
    console.log(error)
  });
})


