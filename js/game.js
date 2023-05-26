window.onload = function() {
  console.log("Game Loaded");
  var writingPromptGrammar = {
    "location": [
      "a quaint seaside town with narrow, winding streets",
      "a desolate mining town nestled in the shadow of an ominous mountain range",
      "a bustling city known for its ancient architecture and cryptic sculptures",
      "a forgotten hamlet hidden deep within an eerie forest",
      "a once-thriving farming community now abandoned and overgrown",
      "a reclusive village on the edge of a bottomless lake",
      "a small town overshadowed by a perpetually dark and stormy sky",
      "a rural community plagued by bizarre weather and unexplainable occurrences"
    ],    
    "creature": ["ghastly apparition", "tentacled monstrosity", "nameless horror", "unspeakable creature", "eldritch abomination"],
    "event": ["a mysterious disappearance", "a series of unexplainable events", "strange and horrifying dreams", "an ancient prophecy coming to pass", "the awakening of something ancient"],
    "npcDisposition": ["friendly", "neutral", "suspicious", "hostile", "insane"],
    "npcProfession": ["priest", "farmer", "doctor", "scientist", "professor", "writer", "artist", "journalist", "criminal"],
    "horrorKnowledge": ["has never heard of the horror", "has heard rumors of the horror", "has read about the horror in a book", "has seen the horror with their own eyes"],
    "artifacts": ['a cryptic amulet', 'a dusty grimoire', 'an ancient statuette', 'a tarnished silver key', 'a mysterious relic'],
    "flaw": ['obsession', 'paranoia', 'madness', 'greed', 'fear'],
    "firstName": [
      "Abigail",
      "Algernon",
      "Asenath",
      "Barnabas",
      "Cornelius",
      "Desdemona",
      "Ebenezer",
      "Ezra",
      "Festus",
      "Gideon",
      "Hester",
      "Ignatius",
      "Jebediah",
      "Lavinia",
      "Mortimer",
      "Obadiah",
      "Prudence",
      "Quincy",
      "Rutherford",
      "Silas",
      "Thaddeus",
      "Ursula",
      "Virgil",
      "Winifred",
      "Xerxes",
      "Yvette",
      "Zadok"
  ],
  "lastName": [
      "Arkham",
      "Aylesbury",
      "Bishop",
      "Carter",
      "Derby",
      "Eliot",
      "Fish",
      "Gilman",
      "Harley",
      "Innsmouth",
      "Jennings",
      "Kingsport",
      "Lovecraft",
      "Marsh",
      "Nyarlathotep",
      "Orne",
      "Pickman",
      "Quinn",
      "Rlyeh",
      "Stellman",
      "Tillinghast",
      "Upton",
      "Waite",
      "Xenophon",
      "Yith",
      "Zann"
  ],
    "npc": ["You come across #firstName# #lastName#. A #npcProfession#, who appears to be #npcDisposition#."],
    "artifact": ["You find #artifacts#, which causes you to be overwhelmed by #flaw#."],
    "origin": ["In #location#, there has been #event#. A #creature# is rumored to be hiding"],
    "hideout": [
    "the old church", 
    "the crypt in the graveyard", 
    "the cellar of the town hall", 
    "the lighthouse", 
    "the ruins outside of town",
    "the basement of the suspect's house",
    "hiding in the darkness of the old factories"],
    "summonMethod": ["a forbidden ritual", "an ancient curse", "a dark pact", "a powerful artifact", "a celestial alignment"],
    "hiddenTruth": ["The creature's hideout is in #hideout#. It was summoned by #summonMethod#. The one who summoned it is the #npcProfession#."]
  };

  var promptGrammar = tracery.createGrammar(writingPromptGrammar);

  var promptButton = document.getElementById('promptButton');
  promptButton.onclick = function() {
    console.log("PromptButton Clicked");
      var message = promptGrammar.flatten('#origin#');
      document.getElementById('prompt').innerText = message;
  }

  var artifactFlawButton = document.getElementById('artifactFlawButton');
  artifactFlawButton.onclick = function() {
      var message = promptGrammar.flatten('#artifact#');
      document.getElementById('artifactFlaw').innerText = message;
  }

  var generateNPC = function() {
    var message = promptGrammar.flatten('#npc#');
    document.getElementById('npcPrompt').innerText = message;
  }

  var npcButton = document.getElementById('npcButton');
  npcButton.onclick = generateNPC;

  var truthButton = document.getElementById('truthButton');
  truthButton.onclick = function() {
    var message = promptGrammar.flatten('#hiddenTruth#');
    document.getElementById('truthPrompt').innerText = message;
  }

}
