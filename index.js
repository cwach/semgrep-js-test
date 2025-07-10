alert('Hello world');
eval("2 + 2");           // sollte als Sicherheitsproblem erkannt werden
document.write("Hello"); // auch kritisch
alert("This is unsafe"); // manchmal erkannt, je nach Regel
