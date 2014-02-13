/* TO DO
- Refactor to use YUI app module
- Text certain inputs like adInk descriptions to have a remaining character countdown
- Dark Mode backing the background dark grey and the icons light grey
- Design report
- Design space
- Design help
- Design edit
- Calendar features for new adInk period page
- Help Tolltips
- Settings Options
- Navigation
- Fix History
- Fix page Names
- Have Page name come from adink name
- Add graffle/svg lines to the rest of the pages
*/

YUI().use('node','calendar', 'datatype-date','node-menunav', function (Y) {

    var appEl = Y.one('#wrapper');
    var pageName = Y.one('.pageName');
   // var pageTitle = Y.one('title');
    var username = Y.one('.username');
    username.setHTML('Mikeumus');

    var userdrop_mouseover_handler = function(){
        Y.one('.userdrop').setStyle('opacity','1');
    };

    var userdrop_mouseout_handler = function(){
        Y.one('.userdrop').setStyle('opacity','0');
    };

    Y.one('.settings-panel').hide();
    
    var settings_click_handler = function(){
        Y.one('.settings-panel').show();
        Y.one('#wrapper').setStyle('cursor','pointer');
    };

    var header_click_handler = function(){
        Y.one('.settings-panel').hide();
    };
    appEl.delegate('click',header_click_handler,'header');

    function valSwap(sele, valu){
        sele.on('focus',function(){
            if (this.get('value') === valu) this.set('value', '');
        });
        sele.on('blur',function(){
            if (this.get('value') === "") this.set('value',valu);
        });
    }

// inkwhy Dashboard
    function inkwhyDashboard(){
        console.log('inkwhyDashboard(); Hit.');
        Y.one('#boxtip').hide();
        Y.one('#holder').hide();
        //Y.one('#logo').set('className','inkwhyLogo');
        Y.one('#wrapper').set('className','Inkwhy-dashboard');
//#box1
        Y.one('.box1title').setHTML('');
        Y.one('#box1').set('className','box squareFill editBox');
        Y.one('#box1copy')
            .set('text', 'Edit')
            .removeAttribute('class');
        Y.one('#box1Icon')
            .removeAttribute('class')
            .setHTML('');
//#box2
        Y.one('.box2title').setHTML('');
        Y.one('#box2').set('className','box boxBorder adInkDash');
        Y.one('#box2Icon').set('className', 'editRowIcon adInkIcon');
        Y.one('#box2copy').setHTML('<span class="orange"> ad</span>ink');
//#box3
        Y.one('.box3title').setHTML('');
        Y.one('#box3').set('className','box boxBorder credBox');
        Y.one('#box3Icon')
            .set('className','editRowIcon creditIcon')
            .setHTML('');
        Y.one('#box3copy').set('text', 'credit');
//#box4
        Y.one('.box4title').setHTML('');
        Y.one('#box4').set('className','box boxBorder createBox');
        Y.one('#box4Icon')
            .set('className', 'editRowIcon editIcon')
            .setHTML('');
        Y.one('#box4copy')
            .set('className', 'smallFont')
            .set('text', 'adCreator 2');
//clear #content.
        Y.one('#content').setHTML('');
    }


    inkwhyDashboard();


    var adInkDash_click_handler = function(){
        adInkDashboard();
    };

// click to new adInk Dashboard
    function adInkDashboard(){
        Y.one('#wrapper').set('className','adInk-dashboard');
        Y.one('#boxtip').hide();
        Y.one('#holder').hide();
// adInk logo
        Y.one('#logo').set('className','adInkLogo');
//#box1
        Y.one('.box1title').setHTML('');
        Y.one('#box1')
            .set('className', 'box boxBorder newadInk')
            .set('href','new-adInk');
        Y.one('#box1Icon')
            .set('className','editRowIcon newAdInkIcon')
            .setHTML('');
        Y.one('#box1copy').removeAttribute('class');
        // Y.one('#box1').set('href', '#new-adInk');
//#box2
        Y.one('.box2title').setHTML('');
        Y.one('#box2').set('className', 'box boxBorder reportDash');
        Y.one('#box2Icon').set('className','editRowIcon reportIcon');
//#box3
        Y.one('.box3title').setHTML('');
        Y.one('#box3').set('className', 'box boxBorder editAds');
        Y.one('#box3Icon')
            .set('className','editRowIcon editIcon')
            .setHTML('');
        Y.one('#box3').show();
//#box4
        Y.one('.box4title').setHTML('');
        Y.one('#box4').set('className', 'box boxBorder spaceBox');
        Y.one('#box4Icon').set('className','editRowIcon spaceIcon')
            .setHTML('<span class="greenCheckIcon"> </span>');
//copy
        Y.one('#box1copy')
            .set('text', 'new')
            .addClass('green');
        Y.one('#box2copy').set('text', 'report');
        Y.one('#box3copy').set('text', 'edit');
        Y.one('#box4copy')
            .removeClass('smallFont')
            .set('text', 'space');
//clear #content
        Y.one('#content').setHTML('');
        shaping = {};
        connections = [];
    }


    var newadInk_click_handler = function(){
        newadInk();
    };

// click to choose new adInk Type
    var newadInk = function(){

        Y.one('#boxtip').show();
        Y.one('#wrapper').set('className','newadInkDash');
// adInk logo
        Y.one('#logo').set('className','adInkLogo');
//#box1
        Y.one('.box1title').setHTML('');
        Y.one('#box1').set('className', 'box squareFill typeBox')
            .removeAttribute('href');
        Y.one('#box1Icon')
            .set('className', '')
            .setHTML('');
        Y.one('#box1copy').removeAttribute('class');
//box2
        Y.one('.box2title').setHTML('Pay Per Period');
        Y.one('#box2').set('href','info-P3')
            .set('className','box boxBorder newP3');
        Y.one('#box2Icon').set('className','editRowIcon P3Icon');
//box3
        Y.one('.box3title').setHTML('sell / bid');
        Y.one('#box3').set('href','info-sell')
            .set('className','box boxBorder newSell');
        Y.one('#box3Icon')
            .set('className','editRowIcon sellIcon')
            .setHTML('<span class="blockicon">$</span>');
//box4
        Y.one('.box4title').setHTML('image / html');
        Y.one('#box4').set('href','info-basic')
            .set('className','box boxBorder newBasic');
        Y.one('#box4Icon')
            .set('className','editRowIcon basicIcon')
            .setHTML('<span class="blockicon">b</span>');
//copy
        Y.one('#box1copy').set('text', 'Type')
            .removeClass('green');
        Y.one('#box2copy').set('text', 'PPP');
        Y.one('#box3copy').set('text', 'sell');
        Y.one('#box4copy').set('text', 'basic');
// #content html
        Y.one('#content').setHTML('<div class="chooseadInkLines"><h2 class="chooseadInkCopy">Pick adInk Type</h2></div>');

        var boxtipW = Y.one('#boxtip').get('offsetWidth');
        var boxtipH = Y.one('#boxtip').get('offsetHeight');
        var boxtip = Y.one('#boxtip').get('region');
        var boxW = Y.one('#box2').get('offsetWidth');
        var offset = boxW*4;
// This shape is no go. Don't know why. 8(
        /*shapes.push(r.path('M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z').attr({fill: "#000", stroke: "none"}));*/

        var boxtip_mouseover_handler = function(){
            Y.one('.closeTip').show();
         };
        var boxtip_mouseout_handler = function(){
            Y.one('.closeTip').hide();
        };
        var closeTip_click_handler = function(){
            Y.one('#boxtip').setStyle('display','none');
            Y.one('#holder svg').setHTML('');
            shaping = {};
            connections = [];
            Y.one('#holder').hide();
        };

        var newP3_mouseover_handler = function(){
            Y.one('#boxtip')
                .setStyle('fontSize','16px')
                .setHTML('<span class="closeTip">X</span><i>Pay Per Period</i> - A model of online advertising, akin to CPM(Cost Per 1000 iMpressions) &amp; CPC(Cost Per Click) except where a user bids for a period of time for the advertisement to show in the specific online space that is being bid for.');
            Y.one('.closeTip').hide();
            Y.one('#holder svg').setHTML('');
            var box2 = Y.one('#box2').get('region');
            shaping = {};
            connections = [];
            shaping = {box2Shape: r.rect(box2.left - offset/2, box2.top-19, boxW+offset, 1), boxtipShape: r.rect(boxtip.left,boxtip.top,boxtipW,boxtipH)};
            connections.push(r.connection(shaping.box2Shape,shaping.boxtipShape,'#777'));
            for (var i in shaping) {
                shaping[i].attr({fill: 'transparent', stroke: 'transparent', "fill-opacity": 0, "stroke-width": 2});
            }
        };

        var newSell_mouseover_handler = function(){
            Y.one('#boxtip')
                .setStyle('fontSize','16px')
                .setHTML('<span class="closeTip">X</span><i>adInk S (sell)</i> - The adInk mode designed to sell and/or auction products/services.');
            Y.one('#holder svg').setHTML('');
            var box3 = Y.one('#box3').get('region');
            var shaping = {};
            connections = [];
            shaping = {box3Shape: r.rect(box3.left - offset/2, box3.top-19, boxW+offset, 1), boxtipShape: r.rect(boxtip.left,boxtip.top,boxtipW,boxtipH)};
            connections.push(r.connection(shaping.box3Shape,shaping.boxtipShape,'#777'));
            for (var i in shaping) {
                shaping[i].attr({fill: 'transparent', stroke: 'transparent', "fill-opacity": 0, "stroke-width": 2});
            }
        };

        var newBasic_mouseover_handler = function(){
            Y.one('#boxtip')
                .setStyle('fontSize','16px')
                .setHTML('<span class="closeTip">X</span><i>adInk b (basic)</i> - The adInk mode designed for ads consisting of images, text and/or HTML( as well as CSS & JavaScript). This adInk mode does not have the ability to sell a product/service directly inside the ad, however you can still setup a action for the adInk space.');
            Y.one('#holder svg').setHTML('');
            var box4 = Y.one('#box4').get('region');
            var shaping = {};
            connections = [];
            shaping = {box4Shape: r.rect(box4.left - offset/2, box4.top-19, boxW+offset, 1), boxtipShape: r.rect(boxtip.left,boxtip.top,boxtipW,boxtipH)};
            connections.push(r.connection(shaping.box4Shape,shaping.boxtipShape,'#777'));
            for (var i in shaping) {
                shaping[i].attr({fill: 'transparent', stroke: 'transparent', "fill-opacity": 0, "stroke-width": 2});
            }
        };

        var box5_mouseover_handler = function(){
            Y.one('#boxtip')
                .setStyle('fontSize','14px')
                .setHTML('<strong>help</strong> - On this page you\'ll find a choice of three adInk modes to choose from to create your new adInk from. <br/> A "adInk" is a embedable advertisment that <i>you</i> create to either sell/auction a product/service or to setup a auction for the advertiment space that the adInk represents whereever <i>you</i> paste it. Please be sure that <i>you</i> do have permission to sell/auction in the space where you are embeding.');
            Y.one('#holder svg').setHTML('');
            var box5 = Y.one('#box5').get('region');
            var shaping = {};
            connections = [];
            shaping = {box5Shape: r.rect(box5.left - offset/2, box5.top, boxW+offset, 1), boxtipShape: r.rect(boxtip.left,boxtip.top,boxtipW,boxtipH)};
            connections.push(r.connection(shaping.box5Shape,shaping.boxtipShape,'#777'));
            for (var i in shaping) {
                shaping[i].attr({fill: 'transparent', stroke: 'transparent', "fill-opacity": 0, "stroke-width": 2});
            }
        };
        
        appEl.delegate('click',closeTip_click_handler, '.closeTip');
        appEl.delegate('mouseover',boxtip_mouseover_handler, '#boxtip');
        appEl.delegate('mouseout',boxtip_mouseout_handler, '#boxtip');
        appEl.delegate('mouseover',newP3_mouseover_handler, '.newP3');
        appEl.delegate('mouseover',newSell_mouseover_handler, '.newSell');
        appEl.delegate('mouseover',newBasic_mouseover_handler, '.newBasic');
        appEl.delegate('mouseover',box5_mouseover_handler, '#box5');

    };


    var newP3_click_handler = function(){
        infoP3();
    };

// click to new adInk P3 Type
    function infoP3(){
        Y.one('#boxtip').hide();
        Y.one('#wrapper').set('className','P3 P3-info');
// adInk logo
        Y.one('#logo').set('className','adInkLogo');
//#box1
        Y.one('.box1title').setHTML('');
        Y.one('#box1').set('className','box squareFill P3box')
            .removeAttribute('href');
        Y.one('#box1Icon')
            .set('className','editRowIcon P3Icon')
            .setHTML('');
        Y.one('#box1copy').removeAttribute('class');
//#box2
        Y.one('.box2title').setHTML('');
        Y.one('#box2').set('className', 'box blackBorder P3Info')
            .removeAttribute('href');
        Y.one('#box2Icon').set('className', 'editRowIcon infoIcon');
//#box3
        Y.one('.box3title').setHTML('');
        Y.one('#box3').set('href','period-P3')
            .set('className','box boxBorder boxoff P3period');
        Y.one('#box3Icon')
            .set('className','editRowIcon periodIcon')
            .setHTML('');
//#box4
        Y.one('.box4title').setHTML('');
        Y.one('#box4').set('href','play-P3')
            .set('className','box boxBorder boxoff playP3');
        Y.one('#box4Icon')
            .set('className','editRowIcon playIcon')
            .setHTML('');
//copy
        Y.one('#box1copy').set('text', '');
        Y.one('#box2copy').set('text', 'info');
        Y.one('#box3copy').set('text', 'period');
        Y.one('#box4copy').set('text', 'play');
//#content html
        Y.one('#content').setHTML('<div class="newP3fields"><div class="leftField"> <span id="newP3nameCopy" class="penIcon">NAME</span> <input class="radius2" type="text" id="newP3name" name="newP3name" value="Enter adInk Name"> </div>' +
            '<div class="rightField"> <span id="newP3descriptionCopy" class="penIcon">DESCRIPTION</span> <textarea rows="4" class="radius2" type="text" id="newP3descriptionInput" name="newP3descriptionName">' +
            'Enter adInk Description. How much traffic does your website get? What keywords is the website focused on? ect... </textarea></div>' +
            '<div class="leftField"> <span id="newP3nameCopy" class="picIcon">IMAGE</span> <input class="radius2" type="file" id="P3ImgName" name="P3ImgName"> </div>' +
            '<div class="rightField creditField"> <span id="newP3descriptionCopy" class="creditIconSmall">BID RATE</span> <input class="radius2" type="text" id="newP3creditInput" name="newP3credit" value="9.99 example"></div>' +
            '</div>');
//fields
        valSwap(Y.one('#newP3name'),Y.one('#newP3name').get('value'));
        valSwap(Y.one('#newP3descriptionInput'),Y.one('#newP3descriptionInput').get('text'));
        valSwap(Y.one('#newP3creditInput'),Y.one('#newP3creditInput').get('value'));

        Y.one('#holder svg').setHTML('');
        shaping = {};
        connections = [];
    }


    var P3period_click_handler = function(){
        periodP3();
    };

// click to new adInk P3 Type
    function periodP3(){
        Y.one('#boxtip').hide();
        Y.one('#wrapper').set('className','P3 period-P3');
        pageName.setHTML('Dashboard');
//adInk logo
        Y.one('#logo').set('className','adInkLogo');
//#box1
        Y.one('.box1title').setHTML('');
        Y.one('#box1')
            .set('className','box squareFill')
            .removeAttribute('href');
        Y.one('#box1Icon')
            .set('className','editRowIcon P3Icon')
            .setHTML('');
        Y.one('#box1copy').removeAttribute('class');
//#box2
        Y.one('.box2title').setHTML('');
        Y.one('#box2')
            .set('className', 'boxBorder box boxoff P3Info')
            .set('href','P3-Info');
        Y.one('#box2Icon').set('className', 'editRowIcon infoIcon');
//#box3
        Y.one('.box3title').setHTML('');
        Y.one('#box3')
            .set('className', 'box blackBorder')
            .removeAttribute('href');
        Y.one('#box3Icon')
            .set('className','editRowIcon periodIcon')
            .setHTML('');
//#box4
        Y.one('.box4title').setHTML('');
        Y.one('#box4').set('className', 'boxBorder box boxoff playP3');
        Y.one('#box4Icon')
            .set('className','editRowIcon playIcon')
            .setHTML('');
//copy
        Y.one('#box1copy').set('text', '');
        Y.one('#box2copy').set('text', 'info');
        Y.one('#box3copy').set('text', 'period');
        Y.one('#box4copy').set('text', 'play');
//#content html
        Y.one('#content').setHTML('<div class="newPeriodFields"><div class="leftField"> <span id="newPeriodNameCopy" >Bid Start</span> <input class="radius2" type="text" id="bidStartField" name="bidStartName" value="mm/dd/year">' +
            '<span id="backupAd"><input type="checkbox" value="backupAd" name="backupAd" id="backupAdCheck"> Backup Ad for in-between times.</span> </div>' +
            '<div class="rightField"> <span id="newPeriodDescriptionCopy" >Bid End</span> <input class="radius2" type="text" id="bidStartField" name="bidEndName" value="mm/dd/year"> </div> <div class="clear"> </div>' +
            '<div class="leftField"> <span id="newPeriodNameCopy">adInk Start</span> <input class="radius2" type="text" id="adInkStartField" name="adInkStartName" value="mm/dd/year"> </div>' +
            '<div class="rightField"> <span id="newPeriodDescriptionCopy" >adInk End</span> <input class="radius2" type="text" id="adInkEndField" name="adInkEndName" value="mm/dd/year">' +
            '<span id="repeatSched"><input type="checkbox" value="repeatSched" name="repeatSched" id="repeatSchedCheck"> Repeat Schedule.</span> </div> </div>' +
            '<div class="clear"> </div> <div id="adInkCalendar"> </div>');

//Calendar Starts
        // Create a new instance of calendar, placing it in
        // #mycalendar container, setting its width to 340px,
        // the flags for showing previous and next month's
        // dates in available empty cells to true, and setting
        // the date to today's date.
        var calendar = new Y.Calendar({
            contentBox: "#adInkCalendar",
            width:'840px',
            showPrevMonth: true,
            showNextMonth: true,
            date: new Date()}).render();

        // Get a reference to Y.DataType.Date
        var dtdate = Y.DataType.Date;

        // Listen to calendar's selectionChange event.
        calendar.on("selectionChange", function (ev) {

            // Get the date from the list of selected
            // dates returned with the event (since only
            // single selection is enabled by default,
            // we expect there to be only one date)
            var newDate = ev.newSelection[0];

        });
//Calendar Ends

    }


    var P3play_click_handler = function(){
        playP3();
    };

// click to Play new adInk P3 Type
    function playP3(){
        Y.one('#boxtip').hide();
        Y.one('#wrapper').set('className','P3 play-P3');
//adInk logo
        Y.one('#logo').set('className','adInkLogo');
//#box1
        Y.one('.box1title').setHTML('');
        Y.one('#box1')
            .set('className','box squareFill iconP3')
            .removeAttribute('href');
        Y.one('#box1Icon')
            .set('className','editRowIcon P3Icon')
            .setHTML('');
//box2
        Y.one('.box2title').setHTML('');
        Y.one('#box2').set('className', 'box boxBorder boxoff P3Info');
        Y.one('#box2Icon').set('className', 'editRowIcon infoIcon');
        Y.one('#box1copy').removeAttribute('class');
//box3
        Y.one('.box3title').setHTML('');
        Y.one('#box3').set('href','period-P3')
            .set('className','box boxBorder boxoff P3period');
        Y.one('#box3Icon')
            .set('className','editRowIcon periodIcon')
            .setHTML('');
//#box4
        Y.one('.box4title').setHTML('');
        Y.one('#box4')
            .set('className', 'box blackBorder playP3')
            .removeAttribute('href');
        Y.one('#box4Icon')
            .set('className','editRowIcon playIcon')
            .setHTML('');
//copy
        Y.one('#box1copy').set('text', '');
        Y.one('#box2copy').set('text', 'info');
        Y.one('#box3copy').set('text', 'period');
        Y.one('#box4copy').set('text', 'play');
//#content html
        Y.one('#content').setHTML('<div class="newP3fields"> <span id="newP3nameCopy" ><strong>\< \/ \></strong> CODE</span> <div class="clear"> </div> <input class="radius2" type="text" id="scriptP3" name="scriptP3name" value="\<SCRIPT\>123\<\\SCRIPT\>"> </div>');
    }


    var newSell_click_handler = function(){
        sellInfo();
    };

// click to new adInk Sell Type
    function sellInfo(){
        Y.one('#boxtip').hide();
        Y.one('#wrapper').set('className','Sell sell-Info');
// adInk logo
        Y.one('#logo').set('className','adInkLogo');
//#box1
        Y.one('.box1title').setHTML('');
        Y.one('#box1')
            .set('className','box squareFill iconSell')
            .removeAttribute('href');
        Y.one('#box1Icon')
            .set('className','editRowIcon sellIcon')
            .setHTML('<span class="blockicon">$</span>');
        Y.one('#box1copy').removeAttribute('class');
//#box2
        Y.one('.box2title').setHTML('');
        Y.one('#box2').set('className', 'box blackBorder infoSell')
            .removeAttribute('href');
        Y.one('#box2Icon')
            .set('className', 'editRowIcon infoIcon')
            .setHTML('');
//#box3
        Y.one('#box3').hide();
//#box4
        Y.one('.box4title').setHTML('');
        Y.one('#box4').set('className', 'box boxBorder boxoff playSell')
            .set('href','play-sell');
        Y.one('#box4Icon')
            .set('className','editRowIcon playIcon')
            .setHTML('');
//copy
        Y.one('#box1copy').set('text', 'Sell');
        Y.one('#box2copy').set('text', 'info');
        Y.one('#box4copy').set('text', 'play');
//#content html
        Y.one('#content').setHTML('<div class="newSellfields"><div class="leftField"> <span id="newSellnameCopy" class="penIcon">NAME</span> <input class="radius2" type="text" id="newSellname" name="newSellname" value="Enter Product Name"> </div>' +
            '<div class="rightField"> <span id="newSelldescriptionCopy" class="penIcon">DESCRIPTION</span> <textarea rows="4" class="radius2" type="text" id="newSelldescriptionInput" name="newSelldescriptionName">' +
            'Enter Product Description. What is your product? What value does it provide? </textarea></div>' +
            '<div class="leftField"> <span id="newSellnameCopy" class="picIcon">IMAGE</span> <input class="radius2" type="file" id="newSellname" name="newSellname"> </div>' +
            '<div class="rightField creditField"> <span id="newP3descriptionCopy" class="creditIconSmall">BID RATE</span> <input class="radius2" type="text" id="newSellcreditInput" name="newSellcredit" value="19.99 example"></div> <div class="clear"> </div> <div class="leftField" id="quantity"> <span id="newSellnameCopy"><strong>#</strong> QUANTITY <input type="checkbox" name="quanQ" id="quanQ" value="quanQ"> </span><span id="quanInput" class="smallFont"><input class="radius2" type="text" id="newSellQuantityInput" name="newSellQuantity" value="99 bottles of beer on the wall"> <input class="radius2" type="checkbox" id="QuantityOutInput" name="QuantityOut" value="quanOut"> Stop orders at 0 quantity.</span> </div>' +
            '</div>');

        var quanQ_click_handler = function() {
            if(this.get('checked') == true){
                Y.one('#quanInput').setStyle('display','block');
            } else{
                Y.one('#quanInput').setStyle('display','none');
            }
        };

        appEl.delegate('click',quanQ_click_handler,'#quanQ');

        valSwap(Y.one('#newSellname'),Y.one('#newSellname').get('value'));
        valSwap(Y.one('#newSelldescriptionInput'),Y.one('#newSelldescriptionInput').get('text'));
        valSwap(Y.one('#newSellcreditInput'),Y.one('#newSellcreditInput').get('value'));
        valSwap(Y.one('#newSellQuantityInput'),Y.one('#newSellQuantityInput').get('value'));
    }


    var playSell_click_handler = function(){
        playSell();
    };

// click to Play Sell adInk
    function playSell(){
        Y.one('#boxtip').hide();
        Y.one('#wrapper').set('className','Sell info-sell');
//adInk logo
        Y.one('#logo').set('className','adInkLogo');
//#box1
        Y.one('.box1title').setHTML('');
        Y.one('#box1')
            .set('className','box squareFill iconSell')
            .removeAttribute('href');
        Y.one('#box1Icon')
            .set('className','editRowIcon sellIcon')
            .setHTML('<span class="blockicon">$</span>');
        Y.one('#box1copy').removeAttribute('class');
//#box2
        Y.one('.box2title').setHTML('');
        Y.one('#box2').set('className', 'box boxBorder boxoff infoSell');
        Y.one('#box2Icon').set('className', 'editRowIcon infoIcon');
//#box3
        Y.one('#box3').hide();
//#box4
        Y.one('.box4title').setHTML('');
        Y.one('#box4')
            .set('className', 'box blackBorder playSell')
            .removeAttribute('href');
        Y.one('#box4Icon')
            .set('className','editRowIcon playIcon')
            .setHTML('');
//copy
        Y.one('#box1copy').set('text', 'Sell');
        Y.one('#box2copy').set('text', 'info');
        Y.one('#box4copy').set('text', 'play');
//#content html
        Y.one('#content').setHTML('<div class="newSellfields"> <span id="newSellnameCopy" ><strong>\< \/ \></strong> CODE</span> <div class="clear"> </div> <input class="radius2" type="text" id="scriptSell" name="scriptSellname" value="\<SCRIPT\>123\<\\SCRIPT\>"> </div>');
    }


    var newBasic_click_handler = function(){
        basicInfo();
    };

// click to new adInk Sell Type
    function basicInfo(){
        Y.one('#boxtip').hide();
        Y.one('#wrapper').set('className','basic basic-Info');
//adInk logo
        Y.one('#logo').set('className','adInkLogo');
//#box1
        Y.one('#box1')
            .set('className','box squareFill iconBasic')
            .removeAttribute('href');
        Y.one('#box1Icon')
            .set('className','editRowIcon basicIcon')
            .setHTML('<span class="blockicon">b</span>');
        Y.one('#box1copy').removeAttribute('class');
//#box2
        Y.one('.box2title').setHTML('');
        Y.one('#box2')
            .set('className', 'box blackBorder infoBasic')
            .removeAttribute('href');
        Y.one('#box2Icon').set('className', 'editRowIcon infoIcon');
//#box3
        Y.one('#box3').hide();
//#box4
        Y.one('#box4').set('className', 'box boxBorder boxoff playBasic')
            .set('href','play-basic');
        Y.one('#box4Icon')
            .set('className','editRowIcon playIcon')
            .setHTML('');
//copy
        Y.one('#box1copy').set('text', '');
        Y.one('#box2copy').set('text', 'info');
        Y.one('#box4copy').set('text', 'play');
//#content html
        Y.one('#content').setHTML('<div class="newBasicfields"><div class="leftField"> <span id="newBasicNameCopy" class="penIcon">NAME</span> <input class="radius2" type="text" id="newBasicName" name="newBasicName" value="Enter adInk Name"> </div>' +
            '<div class="rightField"> <span id="basicCopy"><span id="newBasicDescriptionCopy" class="penIcon">COPY</span> <span id="basicDescShow" class="smallFont"><input type="checkbox" id="basicDescCheck" name="basicDescCheck" value="basicDescCheck" class="smallFont"> show</span> </span><textarea rows="4" class="radius2" type="text" id="newBasicDescriptionInput" name="newBasicDescriptionName">' +
            'Copywriting is the use of words to promote a person, business, opinion or idea. Although the word copy may be applied to any content... wikipedia.org/wiki/Ad_copy </textarea></div>' +
            '<div class="leftField"> <span id="basicImg"><span id="basicImgCopy" class="picIcon">IMAGE</span> <input type="checkbox" id="basicImgCheck" name="basicImgCheck" value="basicImgCheck"> </span> <input class="radius2" type="file" id="basicImgInput" name="basicImgName"> </div>' +
            '<div class="rightField creditField"> <span id="basicURL"><span id="basicURLCopy" class="netIconSmall">URL</span> <input type="checkbox" id="basicURLCheck" name="basicURLCheck" value="basicURLCheck"> </span> <input class="radius2" type="text" id="basicURLInput" name="basicURLname" value="http://www.example.com/"></div> <div class="clear"> </div> <div class="leftField" id="html"> <span id="newBasicNameCopy"><strong>\<\\\></strong> HTML <input type="checkbox" name="htmlQ" id="htmlQ" value="htmlQ"> </span><span id="htmlInput" class="smallFont"><textarea rows="4" class="radius2" type="text" id="basicHTMLinput" name="basicHTML" ><div> Your HTML Here </div></textarea>' +
            '</div>');

// Ohh no! Toggle check it broken! How so? It was fine in jQuery and then it got slightly lost in translation.
        /* function togCheck(inputTitle, checkID,inputID, txt){
         if(checkID.get('checked') == true){
         console.log('yoyo');
         inputID.hide();
         inputTitle.setHTML('<del>'+txt+'</del>');
         } else {
         inputID.show();
         inputTitle.set('text',txt);
         }
         }
         function togBox(inputTitle, checkID,inputID, txt){
         // copi.on('click', function() {
         var inputTitle_click_handler = function () {
         checkID.set('selected', checked);
         togCheck(inputTitle, inputID, checkID, txt);
         //  });
         };
         appEl.delegate('click',inputTitle_click_handler, inputTitle);
         }
         /* var basicImgCheck_click_handler = function() {
         togCheck(Y.one('#basicImgCopy'),Y.one('#basicImgCheck'), Y.one('#basicImgInput'), 'IMAGE');
         };
         togBox(Y.one('#basicImgCopy'), Y.one('#basicImgCheck'), Y.one('#basicImgInput'), 'IMAGE');
         var basicURLCheck_click_handler = function() {
         togCheck(Y.one('#basicURLCopy'),Y.one('#basicURLCheck'), Y.one('#basicURLInput'), 'URL');
         };
         togBox(Y.one('#basicURLCopy'), Y.one('#basicURLCheck'), Y.one('#basicURLInput'), 'URL');

         // appEl.delegate('click',basicImgCheck_click_handler, '#basicImgCheck');
         appEl.delegate('click',basicURLCheck_click_handler, '#basicURLCheck');      */
    }


    var playBasic_click_handler = function(){
        playBasic();
    };

// click to Play Sell adInk
    function playBasic(){
        Y.one('#boxtip').hide();
        Y.one('#wrapper').set('className','basic info-sell');
// adInk logo
        Y.one('#logo').set('className','adInkLogo');
//#box1
        Y.one('#box1')
            .set('className','box squareFill iconBasic')
            .removeAttribute('href');
        Y.one('#box1Icon')
            .set('className','editRowIcon basicIcon')
            .setHTML('<span class="blockicon">b</span>');
        Y.one('#box1copy').removeAttribute('class');
//#box2
        Y.one('.box2title').setHTML('');
        Y.one('#box2').set('className', 'box boxBorder boxoff infoBasic')
            .set('href','info-basic');
        Y.one('#box2Icon').set('className', 'editRowIcon infoIcon');
//#box3
        Y.one('#box3').hide();
//#box4
        Y.one('#box4')
            .set('className', 'box blackBorder playBasic')
            .removeAttribute('href');
        Y.one('#box4Icon')
            .set('className','editRowIcon playIcon')
            .setHTML('');
//copy
        Y.one('#box1copy').set('text', '');
        Y.one('#box2copy').set('text', 'info');
        Y.one('#box4copy').set('text', 'play');
//#conent html
        Y.one('#content').setHTML('<div class="newBasicfields"> <span id="newBasicNameCopy" ><strong>\< \/ \></strong> CODE</span> <div class="clear"> </div> <input class="radius2" type="text" id="scriptBasic" name="scriptBasicName" value="\<SCRIPT\>123\<\\SCRIPT\>"> </div>');
    }


// Welcome to the apple orchard. //
    appEl.delegate('click', newadInk_click_handler, '.newadInk');
    appEl.delegate('click', adInkDash_click_handler, '.adInkDash, .adInkLogo');

    appEl.delegate('click', newP3_click_handler, '.newP3, .P3Info');
    appEl.delegate('click', P3period_click_handler, '.P3period');
    appEl.delegate('click', P3play_click_handler, '.playP3');

    appEl.delegate('click', newBasic_click_handler, '.newBasic, .infoBasic');
    appEl.delegate('click', playBasic_click_handler, '.playBasic');

    appEl.delegate('click', newSell_click_handler, '.newSell, .infoSell');
    appEl.delegate('click', playSell_click_handler, '.playSell');

    appEl.delegate('mouseover', userdrop_mouseover_handler, '#user');
    appEl.delegate('mouseout', userdrop_mouseout_handler, '#user');
    appEl.delegate('click', settings_click_handler,'.user-setting');
// apples are now out of season. //

//YUI Closing
});