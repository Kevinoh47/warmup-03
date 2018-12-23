const treeTraversal1222 = (tree, myMethod) => {
  let results = [];

  switch (myMethod) 
   {
    case 'inOrder':
      results = tree.inOrder();
      break;
    case 'preOrder':
      results = tree.preOrder();
      break;
    case 'postOrder':
      results = tree.postOrder();
      break;
    case 'levelOrder':
      results = tree.levelOrder();
      break;
    default:
      results = null;
      break;
   }
  
  return results;
}

const treeTraversal = (tree, myMethod) => {
  let results = [];

  if (myMethod === 'inOrder') {
    results = tree.inOrder();
  }
  else if (myMethod === 'preOrder') {
    results = tree.preOrder();
  } 
  else if (myMethod === 'postOrder') {
    results = tree.postOrder();
  } 
  else if (myMethod === 'levelOrder') {
    results = tree.levelOrder();
  } 
  else {
    return null;
  }
  return results;
}

module.exports = {treeTraversal1222, treeTraversal};