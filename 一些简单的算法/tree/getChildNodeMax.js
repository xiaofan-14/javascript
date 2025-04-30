const tree = {
    val: 'A',
    children: [
        {val: 'B', children: []},
        {
            val: 'C',
            children: [
                {val: 'D', children: []},
                {val: 'E', children: [{val: 'F', children: []}]}
            ]
        }
    ]
};

/**
 *
 *            a
 *           | \
 *          b   c
 *             | \
 *            d   e
 *               |
 *              f
 *
 * @param root
 * @returns {number}
 */
function getTreeMaxWidth(root) {
    if (!root) return 0
    let queue = [root]
    let maxWidth = 0
    while (queue.length > 0) {
        const levelSize = queue.length
        maxWidth = Math.max(maxWidth, levelSize)
        const nextLevel = []

        for (let i = 0; i < levelSize; i++) {
            const node = queue[i]
            if (node.children) {
                nextLevel.push(...node.children)
            }
        }

        queue = nextLevel
    }
    return maxWidth
}

console.log(getTreeMaxWidth(tree))