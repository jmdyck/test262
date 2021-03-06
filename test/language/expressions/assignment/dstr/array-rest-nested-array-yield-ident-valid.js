// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-rest-nested-array-yield-ident-valid.case
// - src/dstr-assignment/default/assignment-expr.template
/*---
description: When a `yield` token appears within the DestructuringAssignmentTarget of a nested destructuring assignment and outside of a generator function body, it should behave as an IdentifierExpression. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [destructuring-binding]
flags: [generated, noStrict]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var yield = 'prop';
var x = {};

var result;
var vals = [86];

result = [...[x[yield]]] = vals;

assert.sameValue(x.prop, 86);

assert.sameValue(result, vals);
