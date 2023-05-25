console.log("Grammar Loaded");
var writingPromptGrammar = {
    "location": ["the ancient manor", "the abandoned lighthouse", "the eerie town", "the forgotten graveyard", "the cursed forest"],
    "creature": ["ghastly apparition", "tentacled monstrosity", "nameless horror", "unspeakable creature", "eldritch abomination"],
    "event": ["a mysterious disappearance", "a series of unexplainable events", "strange and horrifying dreams", "an ancient prophecy coming to pass", "the awakening of something ancient"],
    "origin": ["In #location#, there has been #event#. A #creature# is rumored to be involved."]
};

var artifactFlawGrammar = {
    "artifact": ["a cryptic amulet", "a dusty grimoire", "an ancient statuette", "a tarnished silver key", "a mysterious relic"],
    "flaw": ["obsession", "paranoia", "madness", "greed", "fear"],
    "origin": ["The protagonist finds #artifact#, which triggers their #flaw#."]
};

