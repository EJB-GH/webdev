## Code Review Exercise

Write your code review here in markdown format.

### Issue 1: Form Submission button

It appears that the form and the submission button associated with the form are not properly connected. The form itself closes before the submit button is even written, so the submission button does nothing, the same goes for the reset button. They do nothing. To fix this we would need to just extend the form out to include the elements

Original Code

```html
</form>
      <div
        class="form space-evenly-distributed-row-container form-buttons-container"
      >
        <input class="form-button" type="submit" value="submit" />
        <input class="form-button" type="reset" value="reset" />
      </div>
    </div>
```

Updated Code

```html
        <div
          class="form space-evenly-distributed-row-container form-buttons-container"
        >
          <input class="form-button" type="submit" value="submit" />
          <input class="form-button" type="reset" value="reset" />
        </div>
      </form>
```

### Issue 2: Loading gif for cat facts

Upon trying to use the 'load new cat facts' button on the cat facts page, the information/container is no longer displayed. The loading gif shown in the javascript is also not shown. Firstly, the source for the gif goes up too far into the directory structure, index.js is in the same dir as images so you can access local.

Then, the container load.
I believe the issue is that the setAttribute function sets the loading container to display-none. So on the reload, the container starts as a display-none. I believe this issue may be outside this class scope, and I dont atually know how to handle it

#### on review I noticed the loader gif does play when you refresh the page so this perhaps is not an issue

Original Code

```javascript
loader.src = "../../images/loader.gif";
```

Updated Code

```javascript
loader.src = "/images/loader.gif";
```

### Issue 3: Missing Fieldset/improper div use?

The section of checkboxes for varying cat breeds are improperly using a div/p structure despite leading with a form-fieldset class at the start of the div. The fix involves using the proper fieldset + legend structure we saw early on in form creation

Original Code

```html
<div class="form-fieldset form-element-container">
  <p class="form-label">What breeds would you like to learn?</p>
  <div>
    <input type="checkbox" id="siamese" name="breed1" value="siamese" />
    <label for="siamese">Siamese Cat</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="british-shorthair"
      name="breed2"
      value="british-shorthair"
    />
    <label for="british-shorthair">British Shorthair</label>
  </div>
  <div>
    <input type="checkbox" id="maine-coon" name="breed3" value="maine-coon" />
    <label for="maine-coon">Maine Coon</label>
  </div>
  <div>
    <input type="checkbox" id="persian-cat" name="breed4" value="persian-cat" />
    <label for="persian-cat">Persian Cat</label>
  </div>
</div>
```

Updated Code

```html
<fieldset class="form-element-container">
  <legend class="form-label">What breeds would you like to learn?</legend>
  <div>
    <input type="checkbox" id="siamese" name="breed1" value="siamese" />
    <label for="siamese">Siamese Cat</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="british-shorthair"
      name="breed2"
      value="british-shorthair"
    />
    <label for="british-shorthair">British Shorthair</label>
  </div>
  <div>
    <input type="checkbox" id="maine-coon" name="breed3" value="maine-coon" />
    <label for="maine-coon">Maine Coon</label>
  </div>
  <div>
    <input type="checkbox" id="persian-cat" name="breed4" value="persian-cat" />
    <label for="persian-cat">Persian Cat</label>
  </div>
</fieldset>
```
