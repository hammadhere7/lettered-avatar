# Lettered Avatar

> Lettered avatar is a small react component that generates profile avatars based on name of the person. Avatars are generated via HTML5 canvas API and converted to dataURI for image source. The user can also specify profile avatar's path if that exists. In that case lettered avatar is not generated rather image is used. Currently it creates a consistent colored avatar for English Alphabets A to Z and digits from 0-9. For any other  letter apart from these the generated avatar will be in default color.  
    
[![NPM](https://img.shields.io/npm/v/lettered-avatar.svg)](https://www.npmjs.com/package/lettered-avatar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features  
  
* Lettered avatar with first letter of given name by default  
* Support for creating two letters avatar by taking first letter of given name and surname  
* Support for specifying background color of avatar of your choice  
* Support for making the avatar clickable by passing href value  
* Fallback for creating letter avatar when profile image does not exist. So you don't have to manage that in your application.  
* Support for rounded or square avatar  
* Setting the size of the generated avatar with props  

## Install

```bash
npm install --save lettered-avatar
```

## Usage  
  
**Basic**
```  
<LetteredAvatar name={'Hammad'}/>  
```  
Specifying the name prop will generate the avatar from first letter of name as follows:  

![Generated Avatar](img/avatar.png)  
```  
<LetteredAvatar name={'Hammad'} imgSrc={'https://avatars2.githubusercontent.com/u/4178933'}/>  
```  
If imgSrc prop is passed then avatar will not be generated and original image will be shown with default options as follows:

![User Avatar](img/user_avatar.png)  

**Advanced**  
```  
<LetteredAvatar name={'Hammad'} options={{  
  
    size: 100, 
    twoLetter: true,
    shape: 'square',
    bgColor: '', 
    href: '', 
    target: '_blank',
    tooltip: false, 
    tooltipTitle: 'CEO Avatar', 
    imgClass: 'image-responsive user-image', 
    imgWidth: 150, 
    imgHeight: 100  
}}/>  
```
## API  
  
#### Props  
<table class="table table-bordered table-striped">  
    <thead>  
    <tr>  
        <th style="width: 100px;">name</th>  
        <th style="width: 50px;">type</th>  
        <th style="width: 50px;">default</th>  
        <th>description</th>  
    </tr>  
    </thead>  
    <tbody>  
        <tr>  
          <td>name</td>  
          <td>String</td>  
          <td></td>  
          <td>The name comprising given name and surname. First letter of each name will be used to create avatar</td>  
        </tr>  
        <tr>  
          <td>imgSrc</td>  
          <td>String</td>  
          <td></td>  
          <td>The URL of the image to show instead of avatar. If this prop is set then no avatar will be generated and imgSrc will be shown as avatar. This must be a valid image URL.</td>  
        </tr>  
        <tr>  
          <td>options</td>  
          <td>Object</td>  
          <td></td>  
          <td>Additional props to configure avatar properties</td>  
        </tr>  
    </tbody>  
</table>  
  
### options prop  
  
<table class="table table-bordered table-striped">  
    <thead>  
    <tr>  
        <th style="width: 100px;">name</th>  
        <th style="width: 50px;">type</th>  
        <th style="width: 50px;">default</th>  
        <th>description</th>  
    </tr>  
    </thead>  
    <tbody>  
        <tr>  
          <td>size</td>  
          <td>Integer</td>  
          <td>60</td>  
          <td>Width and height of generated avatar</td>  
        </tr>  
        <tr>  
          <td>twoLetter</td>  
          <td>Boolean</td>  
          <td>false</td>  
          <td>Whether to make avatar of first letter of given name to include surname's first letter too.</td>  
        </tr>  
        <tr>  
          <td>shape</td>  
          <td>String ('round','square')</td>  
          <td>round</td>  
          <td>The shape of avatar or given users image.</td>  
        </tr>  
         <tr>  
                  <td>bgColor</td>  
                  <td>String</td>  
                  <td></td>  
                  <td>Background color of the avatar. The component assigns particular color to each letter. If you want to override the color then set this property.</td>  
                </tr>  
                <tr>  
                                  <td>letterColor</td>  
                                  <td>String</td>  
                                  <td>#FFFF</td>  
                                  <td>The color of letter in avatar.</td>  
                                </tr>  
         <tr>  
                  <td>href</td>  
                  <td>String</td>  
                  <td></td>  
                  <td>Whether to make avatar clickable. If this property is set then upon click of avatar user will be taken this this prop</td>  
         </tr>  
         <tr>  
                           <td>target</td>  
                           <td>String ('_blank','_parent','_self','_top')</td>  
                           <td>_self</td>  
                           <td>Where to open the href link when clicked on avatar. Works only when href property is set</td>  
                  </tr>  
 <tr>  
	   <td>tooltip</td>  
       <td>Boolean</td>  
       <td>true</td>  
       <td>Shows tooltip on hover on avatar</td>  
      </tr>     
                         <tr>  
                   <td>tooltipTitle</td>  
                   <td>String</td>  
                   <td>name</td>  
                   <td>Text to show when avatar or image is hovered. By default it shows full text passed in name prop</td>  
</tr>   
                         <tr>  
                   <td>imgClass</td>  
                   <td>String</td>  
                   <td></td>  
                   <td>The class you want image tag to take</td>  
                 </tr>                       
   <tr>  
                   <td>imgWidth</td>  
                   <td>Integer</td>  
                   <td>size</td>  
                   <td>The width of the image you want to set. This works only imgHeight is set as well and path property is valid image.</td>  
                 </tr>                       
                   <tr>  
                   <td>imgHeight</td>  
                   <td>Integer</td>  
                   <td>size</td>  
                   <td>The height of the image you want to set. This works only imgWidth is set as well and path property is valid image.</td>  
                 </tr>                       
 </tbody></table>

## License
Lettered Avatar is released under MIT license
MIT © [hammadhere7](https://github.com/hammadhere7)
