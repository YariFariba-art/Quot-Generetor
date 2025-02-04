function showAnswer(response) {
    let quote = response.data.answer;
    let quoteElement = document.querySelector("#quoteDisplay");
    quoteElement.innerHTML = `${quote}`; 
    
    new Typewriter("#quoteDisplay", {
      strings: `${quote}`,
      autoStart: true,
      cursor: null,
      delay: 100,
    });
  }
  
  function generatedQuote(event) {
    event.preventDefault();
    let keyword = document.querySelector("#keyword").value; 
    let prompt = `please write a quote about the ${keyword}`;
    let context =
      "it should be polite, each time unique quote, write the quote straightforward without saying words like sure!";
    let key = "ef6e0a4b30090aob6a88ad3faec013at";
  let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

    axios.get(apiurl).then(showAnswer);
  }
  
  let form = document.querySelector("#quoteForm");
  form.addEventListener("submit", generatedQuote); 
  