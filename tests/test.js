
QUnit.test("test renderQuestions", function(assert){
  // test blank
  var listElement = document.getElementById('questionsList');
  assert.equal(listElement.innerHTML,"","list element is empty");

  // run function
  requestModule.renderQuestions(mockData);

  //test populate
  var expected  = 'http://stackoverflow.com/questions/42629219/how-to-upload-image-files-to-an-existing-database';
  assert.equal(listElement.innerHTML,expected,'list element has populated');
});
