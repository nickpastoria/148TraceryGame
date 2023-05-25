window.onload = function() {
  console.log("Game Loaded");
  var promptGrammar = tracery.createGrammar(writingPromptGrammar);

  var artifactFlawGrammar = {
    "artifact": ["a cryptic amulet", "a dusty grimoire", "an ancient statuette", "a tarnished silver key", "a mysterious relic"],
    "flaw": ["obsession", "paranoia", "madness", "greed", "fear"],
    "origin": ["The protagonist finds #artifact#, which triggers their #flaw#."]
  };

  var promptButton = document.getElementById('promptButton');
  promptButton.onclick = function() {
    console.log("PromptButton Clicked");
      var message = promptGrammar.flatten('#origin#');
      document.getElementById('prompt').innerText = message;
  }

  var artifactFlawGrammar = tracery.createGrammar(artifactFlawGrammar);
  var artifactFlawButton = document.getElementById('artifactFlawButton');
  artifactFlawButton.onclick = function() {
      var message = artifactFlawGrammar.flatten('#origin#');
      document.getElementById('artifactFlaw').innerText = message;
  }
}
