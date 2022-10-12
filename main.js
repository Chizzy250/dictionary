const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")

btn.addEventListener("click", () => {
  const input = document.querySelector("#input").value
  fetch(`${api}${input}`)
  .then(res => res.json())
  .then(data => {
    result.innerHTML = 
    `
    <div class = "word">
    <h3>${input}</h3>
    </div>
    
    <div id = "word-details">
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p>${data[0].phonetic}</p>
    </div>
    
    <div id = "word-meaning">
    <p>${data[0].meanings[0].definitions[0].definition}</p>
    <h4 id="space">=${data[0].meanings[0].synonyms}</h4>
    </div>

    <div id = "word-example">
    ${data[0].meanings[0].definitions[0].example || ""}
    </div>
    
    <div id = "antonym">
    <p>Antonym:</p>
    <h4 id="spaceB">=${data[0].meanings[0].antonyms}</h4>
    </div>
    `
  })
  .catch((error) => {
      result.innerHTML = `<p class="err">Word not found</p>`

  })
})
