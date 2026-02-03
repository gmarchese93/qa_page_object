src/pageObject.test.js
  }

  clickOnLogo() {
    return 'Click on the' + this.header.logo;
@mateacademy-ai-mentor
mateacademy-ai-mentor
now
The concatenated string is missing a space between 'Click on the' and the logo text. This will result in 'Click on theConduit logo'. Consider adding a space to the string literal to make the sentence readable.

@gmarchese93	Reply...
src/pageObject.test.js
  }

  clickOnCommentButton() {
    return 'Click on the' + this.commentButton;
@mateacademy-ai-mentor
mateacademy-ai-mentor
now
Similar to the clickOnLogo method, this string is missing a space. The output will be 'Click on the[Publish comment] button', which is not a properly formed sentence.

@gmarchese93	Reply...
src/pageObject.test.js
  }

  assertPageOpened() {
    return 'The ' + this.url + 'is opened';
@mateacademy-ai-mentor
mateacademy-ai-mentor
now
There's a missing space between the url property and the word 'is'. The current implementation will produce a string like 'The your/urlis opened'. A space should be added before 'is opened'.
