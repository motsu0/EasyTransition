# EasyTransition
insert transition example fade-in slide-in etc...

## Usage
### 1.Include Files
Include Script and HTML right before `</body>`
```
<script src="path/to/EasyTransition.min.js"></script>
```
### 2.Add HTML
Example
```
<span class="easy_transition from_right">from_right</span>
<span class="easy_transition from_left">from_left</span>
<div class="easy_transition zoom">zoom</div>
<div class="easy_transition fade">fade</div>

<div class="easy_transition spin zoom">spin<br>zoom</div>
<div class="easy_transition from_right zoom">from_right<br>zoom</div>
<div class="easy_transition from_right zoom fade spin">from_right<br>zoom<br>fade<br>spin</div>
```
### 3.Fire Plugin
#### Default
```
window.addEventListener('load',function(){
  var ET = new EasyTransition();
},false);
```
#### Change class-name or transition duration(ms) 
```
window.addEventListener('load',function(){
  var ET = new EasyTransition('your-class-name',2000);
},false);
```
#### Another way ( When you use jQuery )
```
$(document).ready(function(){
  var ET = new EasyTransition('easy_transition',500);
});
```

### ※ Edit HTML ( If Necessary )
When you change class name "easy_transition" to "example", you must change others as below.
#### HTML
```
<span class="example from_right">from_right</span>
<span class="example from_left">from_left</span>
<div class="example zoom">zoom</div>
<div class="example fade">fade</div>

<div class="example spin zoom">spin<br>zoom</div>
<div class="example from_right zoom">from_right<br>zoom</div>
<div class="example from_right zoom fade spin">from_right<br>zoom<br>fade<br>spin</div>
```
#### Script
```
window.addEventListener('load',function(){
  var ET = new EasyTransition('example',1000);
},false);
```
## DEMO
[DEMO FILE]()
[DEMO PAGE](https://mo2nabe.com/?p=375)
