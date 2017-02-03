'use strict'

function visitTextChildren (callback) {
  return function visitor (parent) {
    var children
    var child
    var index

    /* Check that there is parent and that the parent has children prop */
    children = parent && parent.children

    if (!children) {
      throw new Error(
        'Missing children in `parent` for `visitor`'
      )
    }

    /* Check that a callback was supplied to the function */
    if (!callback) {
      throw new Error(
        'Missing callback to be called for each `child` in `parent`'
      )
    }

    /* 
     * Loop through each child node only calling the callback on text nodes.
     * Logic from https://github.com/syntax-tree/unist-util-visit-children by
     * wooorm
     */

    index = -1

    while (++index in children) {
      child = children[index]

      if (child.type === 'text') {
        callback(child, index, parent)
      }
    }
  }
}

module.exports = function (callback) {
  return function () {

    var visit = visitTextChildren(callback)
    return function (tree) {
      visit(tree.children[0])
    }
  }
}

module.exports.visitTextChildren = visitTextChildren
