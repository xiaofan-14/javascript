function FeatureXYZ() {
  console.log('feat: xyz')
}
function doSomethingCool(FeatureXYZ) {
  var helper = FeatureXYZ || function() {
    console.log('private feature') };
  helper();
}

doSomethingCool(FeatureXYZ)
doSomethingCool()