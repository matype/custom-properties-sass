var postcss = require('postcss')

module.exports = function () {
    return function (root) {
        root.walkRules(function (rule) {
            if (rule.selector === ':root') {
                rule.walkDecls(function (decl) {
                    var raws = decl.raws
                    var sassVal
                    if (isCustomProperties(decl)) {
                        sassVal = decl.prop.replace(/^\-\-/, '$')
                    }
                    if (sassVal) {
                        root.append(sassVal + ': ' + decl.value + ';\n')
                    }
                })
                rule.remove()
            }
        })

        root.walkDecls(function (decl) {
            if (decl.raws.before === undefined) {
                decl.raws.before = '\n'
            }
            decl.parent.raws.semicolon = true
        })
    }
    
    return root
}

function isCustomProperties (decl) {
    if (decl.prop.match(/^\-\-/)) {
        return true
    }

    return false
}
