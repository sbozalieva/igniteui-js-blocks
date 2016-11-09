# ig-modal


`ig-modal` is a component that opens a dialog on top of the app content. It follows the Material Design Dialog spec and will have an iOS look soon.

By default you have an alert dialog. You can create a confirmation dialog by adding an `action2ButtonLabel` button. 

## Usage

### Alert Dialog

Basic alerts are done by adding a `title` and an `action1ButtonLabel`. 

You can add more detail by setting a message like that: `message="A wall is being build next to your house!"`

To attach an event to the action1ButtonLabel use: `(onAction1Select)="alert.close()"`

```html
<ig-modal #alert 
    title="Presidential Alert"
    message="A wall is being build next to your house!"
    action1ButtonLabel="NO, PORQUE?!" (onAction1Select)="alert.close()">
</ig-modal>
```
Output:
![alt text](https://raw.githubusercontent.com/sbozalieva/igniteui-js-blocks/5866229b92f9b639f96e0ba8df4bddf2f0129bb1/Alert.png)

### Dialogs

A confirmation dialog is done by adding `action2ButtonLabel` and a corresponding event with `onAction2ButtonSelect`

```html
<ig-modal #dialog 
    title="Confirmation" 
    message="Are you sure you want to delete it whatever it is?"
    action1ButtonLabel="Cancel"
    (onAction1Select)="dialog.close()"
    action2ButtonLabel="OK"
    (onAction2Select)="onDialogOKSelected($event)">
</ig-modal>
```

### Presets:

You can access all properties of the button component with the following attributes:

  `action1ButtonLabel`

  `action1ButtonType` can be a flat, raised, fab, disabled

  `action1ButtonColor` sets the color of the label

  `action1ButtonBackgroundColor` sets the color of the button

  `action1ButtonRipple` gives you the ripple


## Custom Dialogs

You can customize the dialog by adding any mark up in the ig-modal tag.

`message` property is not available.

```HTML
<ig-modal #form 
    title="Sign In"
    action1ButtonLabel="Cancel"
    (onAction1Select)="form.close()"
    action2ButtonLabel="Sign In"
    action2ButtonBackgroundColor="green"
    action2ButtonColor="white"
    backgroundClick="true">
    <div class="ig-form-group">
        <input type="text" igInput />
        <label igLabel>Username</label>
    </div>
    <div class="ig-form-group">
        <input type="password" igInput />
        <label igLabel>Password</label>
    </div>
</ig-modal>
```

You can make the dialog dimissible `backgroundClick="true"``
