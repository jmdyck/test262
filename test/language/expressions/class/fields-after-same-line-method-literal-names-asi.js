// This file was procedurally generated from the following sources:
// - src/class-fields/literal-names-asi.case
// - src/class-fields/productions/cls-expr-after-same-line-method.template
/*---
description: Literal property names with ASI (field definitions after a method in the same line)
esid: prod-FieldDefinition
features: [class-fields-public, class]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PropertyName

---*/


var C = class {
  m() { return 42; } a
  b = 42;;
  
}

var c = new C();

assert.sameValue(c.m(), 42);
assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);
assert.sameValue(c.m, C.prototype.m);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "a"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "a"), false);

verifyProperty(c, "a", {
  value: undefined,
  enumerable: true,
  writable: true,
  configurable: true
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "b"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "b"), false);

verifyProperty(c, "b", {
  value: 42,
  enumerable: true,
  writable: true,
  configurable: true
});