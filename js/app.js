function loadGrammar() {
$("#content").html("");

var grammar = tracery.createGrammar(MYRULE);
$("#grammar").html(grammar.toText());

    var s = grammar.flatten("#origin#");
    var div = $("<div/>", {
        class : "outputSample",
        html : s
    });

    $("#content").append(div);

}