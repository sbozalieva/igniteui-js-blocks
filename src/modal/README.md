# igx-dialog


`igx-dialog` is a component that opens a container on top of the app content. 
It follows the Material Design Dialog spec and will have an iOS look soon.

Alert
Dialog
Custom
Presets
API

## Usage

### Alert Dialog

Alerts are done by adding a `title` and an `action1ButtonLabel`.

You can add more detail by setting a message like that:
`message="A wall is being build next to your house!"`

To attach an event to the action1ButtonLabel use:
`(onAction1Select)="alert.close()"`

```html
<ig-modal #alert 
    title="Presidential Alert"
    message="A wall is being build next to your house!"
    action1ButtonLabel="NO, PORQUE?!"
    (onAction1Select)="alert.close()">
</ig-modal>
```
Output:

![alt text](https://raw.githubusercontent.com/sbozalieva/igniteui-js-blocks/5866229b92f9b639f96e0ba8df4bddf2f0129bb1/Alert.png)

### Dialogs

A Dialog is done by adding `action2ButtonLabel` and a corresponding event with `onAction2ButtonSelect` to an Alert Dialog.

```html
<igx-dialog #dialog 
    title="Confirmation" 
    message="Are you sure you want to delete it whatever it is?"
    action1ButtonLabel="Cancel"
    (onAction1Select)="dialog.close()"
    action2ButtonLabel="OK"
    (onAction2Select)="onDialogOKSelected($event)">
</igx-dialog>
```

Output:


### Button Presets:

You can access all properties of the button component with the following attributes:


   ⋅⋅*`action1ButtonType` Can be flat, raised, fab, disabled.

   ⋅⋅*`action1ButtonColor` Sets the color of the label.

   ⋅⋅*`action1ButtonBackgroundColor` Sets the color of the button.

   ⋅⋅*`action1ButtonRipple` Gives you the ripple effect.


## Custom Dialogs


You can customize the `igx-dialog` by adding any mark up in the ig-modal tag.
In that case `message` property is **not available**.


```HTML
<igx-dialog #custom 
    title="Sign In"
    action1ButtonLabel="Cancel"
    (onAction1Select)="custom.close()"
    action2ButtonLabel="Sign In"
    action2ButtonBackgroundColor="green"
    action2ButtonColor="white"
    backgroundClick="true">
    <div class="igx-custom-group">
        <input type="text" igInput />
        <label igLabel>Username</label>
    </div>
    <div class="igx-custom-group">
        <input type="password" igInput />
        <label igLabel>Password</label>
    </div>
</igx-dialog>
```

You can make the dialog dimissible by setting `backgroundClick="true"`




### Accessibility

ARIAARIAARIARIAR
The `igx-dialog` adds role="alert" to the main alert element and role="Button" to each button if another button is added the role is automatically switched to role="dialog". It also adds aria-hasPopup="true" to the trigger element.


## API

| Methods       | Returns       | Description      |
| ------------- |:-------------:| ----------------:|
| close()       | //////        | Opens igx-dialog |
| open()        | //////        | Closes igx-dialog |



| Events      | Returns           | Description  |
| ------------- |:-------------:| -----:|
| onClose       | //////        | ////// |
| onOpen        | //////        | ////// |
| onLeftSelect  | //////        | ////// |
| onRightSelect | //////        | ////// |


