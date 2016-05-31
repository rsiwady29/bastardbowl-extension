traverse(document.body);

function traverse(node)
{
  var child, next;

  switch(node.nodeType)
  {
    case 1:
    case 9:
    case 11:
      child = node.firstChild;
      while(child)
      {
        next = child.nextSibling;
        traverse(child);
        child = next;
      }
      break;

    case 3:
      replaceText(node);
      break;
  }
}

function replaceText(node)
{
  var ocurrences = [/battle of bastards/i,
                    /battle of the bastards/i];
  var bastardBowlText = "BastardBowl";

  var text = node.nodeValue;

  for (var index = 0; index < ocurrences.length; index++) {
    var occurence = ocurrences[index];
    text = text.replace(occurence, bastardBowlText);
  }

  node.nodeValue = text;
}
