function showAnswer(response) {  
  let quote = response.data.answer;
  let quoteElement = document.querySelector("#quoteDisplay");
  quoteElement.innerHTML = `${quote}`; 
  
  new Typewriter("#quoteDisplay", {
    strings: `${quote}`,
    autoStart: true,
    cursor: null,
    });
}
function generatedQuote(event) {
  event.preventDefault();
  let quoteElement = document.querySelector("#quoteDisplay");
  quoteElement.innerHTML = "⏳Please wait...";
  let keyword = document.querySelector("#keyword").value; 
  let prompt = `write a quote about the ${keyword}`;
  let context =
    "quote instructions: it should be short, each time generate a unique quote, it should be positive and motivating,make sure to follow the quote instructions";
  let key = "ef6e0a4b30090aob6a88ad3faec013at";
  let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios.get(apiurl).then(showAnswer);
}

let form = document.querySelector("#quoteForm");
form.addEventListener("submit", generatedQuote);
