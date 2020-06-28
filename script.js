// GAME NAME TAG
var h = document.createElement('h1');
h.innerText='SUDOKU GAME';
document.body.appendChild(h);

// TIME COUNTER TAG
var div1 = document.createElement('div');
div1.setAttribute('id','timer');
document.body.appendChild(div1);

/*  TABLE FOR 9*9 ROWS AND COLUMNS */
var table = document.createElement('table');
table.setAttribute('id','tb');
document.body.appendChild(table);
//ROW 1
var tr1 = document.createElement('tr');
table.appendChild(tr1);
//CELL-1
var td1 = document.createElement('td');
tr1.appendChild(td1);

var i1 = document.createElement('input');
i1.setAttribute('id','r1c1');
i1.setAttribute('type','number');
i1.setAttribute('min','1');
i1.setAttribute('max','9');
td1.appendChild(i1);
//CELL-2
var td2 = document.createElement('td');
tr1.appendChild(td2);

var i2 = document.createElement('input');
i2.setAttribute('id','r1c2');
i2.setAttribute('type','number');
i2.setAttribute('value','6');
i2.setAttribute('disabled','true');
td2.appendChild(i2);
//CELL-3
var td3 = document.createElement('td');
tr1.appendChild(td3);

var i3 = document.createElement('input');
i3.setAttribute('id','r1c3');
i3.setAttribute('type','number');
i3.setAttribute('min','1');
i3.setAttribute('max','9');
td3.appendChild(i3);
//CELL-4
var td4 = document.createElement('td');
tr1.appendChild(td4);

var i4 = document.createElement('input');
i4.setAttribute('id','r1c4');
i4.setAttribute('type','number');
i4.setAttribute('value','1');
i4.setAttribute('disabled','true');
td4.appendChild(i4);
//CELL-5
var td5 = document.createElement('td');
tr1.appendChild(td5);

var i5 = document.createElement('input');
i5.setAttribute('id','r1c5');
i5.setAttribute('type','number');
i4.setAttribute('min','1');
i4.setAttribute('max','9');
td5.appendChild(i5);
//CELL-6
var td6 = document.createElement('td');
tr1.appendChild(td6);

var i6 = document.createElement('input');
i6.setAttribute('id','r1c6');
i6.setAttribute('type','number');
i6.setAttribute('value','4');
i6.setAttribute('disabled','true');
td6.appendChild(i6);
//CELL-7
var td7 = document.createElement('td');
tr1.appendChild(td7);

var i7 = document.createElement('input');
i7.setAttribute('id','r1c7');
i7.setAttribute('type','number');
i7.setAttribute('min','1');
i7.setAttribute('max','9');
td7.appendChild(i7);
//CELL-8
var td8 = document.createElement('td');
tr1.appendChild(td8);

var i8= document.createElement('input');
i8.setAttribute('id','r1c8');
i8.setAttribute('type','number');
i8.setAttribute('value','5');
i8.setAttribute('disabled','true');
td8.appendChild(i8);
//CELL-9
var td9 = document.createElement('td');
tr1.appendChild(td9);

var i9 = document.createElement('input');
i9.setAttribute('id','r1c9');
i9.setAttribute('type','number');
i9.setAttribute('min','1');
i9.setAttribute('max','9');
td9.appendChild(i9);


//ROW-2
var tr2 = document.createElement('tr');
table.appendChild(tr2);

//CELL-10
var td10 = document.createElement('td');
tr2.appendChild(td10);

var i10 = document.createElement('input');
i10.setAttribute('id','r2c1');
i10.setAttribute('type','number');
i10.setAttribute('min','1');
i10.setAttribute('max','9');
td10.appendChild(i10);

//CELL-11
var td11 = document.createElement('td');
tr2.appendChild(td11);

var i11 = document.createElement('input');
i11.setAttribute('id','r2c2');
i11.setAttribute('type','number');
i11.setAttribute('min','1');
i11.setAttribute('max','9');
td11.appendChild(i11);

//CELL-12
var td12 = document.createElement('td');
tr2.appendChild(td12);

var i12 = document.createElement('input');
i12.setAttribute('id','r2c3');
i12.setAttribute('type','number');
i12.setAttribute('value','8');
i12.setAttribute('disabled','true');
td12.appendChild(i12);

//CELL-13
var td13 = document.createElement('td');
tr2.appendChild(td13);

var i13 = document.createElement('input');
i13.setAttribute('id','r2c4');
i13.setAttribute('type','number');
i13.setAttribute('value','3');
i13.setAttribute('disabled','true');
td13.appendChild(i13);

//CELL-14
var td14 = document.createElement('td');
tr2.appendChild(td14);

var i14 = document.createElement('input');
i14.setAttribute('id','r2c5');
i14.setAttribute('type','number');
i14.setAttribute('min','1');
i14.setAttribute('max','9');
td14.appendChild(i14);

//CELL-15
var td15 = document.createElement('td');
tr2.appendChild(td15);

var i15 = document.createElement('input');
i15.setAttribute('id','r2c6');
i15.setAttribute('type','number');
i15.setAttribute('value','5');
i15.setAttribute('disabled','true');
td15.appendChild(i15);

//CELL-16
var td16 = document.createElement('td');
tr2.appendChild(td16);

var i16 = document.createElement('input');
i16.setAttribute('id','r2c7');
i16.setAttribute('type','number');
i16.setAttribute('value','6');
i16.setAttribute('disabled','true');
td16.appendChild(i16);

//CELL-17
var td17 = document.createElement('td');
tr2.appendChild(td17);

var i17 = document.createElement('input');
i17.setAttribute('id','r2c8');
i17.setAttribute('type','number');
i17.setAttribute('min','1');
i17.setAttribute('max','9');
td17.appendChild(i17);

//CELL-18
var td18 = document.createElement('td');
tr2.appendChild(td18);

var i18 = document.createElement('input');
i18.setAttribute('id','r2c9');
i18.setAttribute('type','number');
i18.setAttribute('min','1');
i18.setAttribute('max','9');
td18.appendChild(i18);

//ROW-3
var tr3 = document.createElement('tr');
table.appendChild(tr3);

//CELL-19
var td19 = document.createElement('td');
tr3.appendChild(td19);

var i19 = document.createElement('input');
i19.setAttribute('id','r3c1');
i19.setAttribute('type','number');
i19.setAttribute('value','2');
i19.setAttribute('disabled','true');
td19.appendChild(i19);

//CELL-20
var td20 = document.createElement('td');
tr3.appendChild(td20);

var i20 = document.createElement('input');
i20.setAttribute('id','r3c2');
i20.setAttribute('type','number');
i20.setAttribute('min','1');
i20.setAttribute('max','9');
td20.appendChild(i20);

//CELL-21
var td21 = document.createElement('td');
tr3.appendChild(td21);

var i21 = document.createElement('input');
i21.setAttribute('id','r3c3');
i21.setAttribute('type','number');
i21.setAttribute('min','1');
i21.setAttribute('max','9');
td21.appendChild(i21);

//CELL-22
var td22 = document.createElement('td');
tr3.appendChild(td22);

var i22 = document.createElement('input');
i22.setAttribute('id','r3c4');
i22.setAttribute('type','number');
i22.setAttribute('min','1');
i22.setAttribute('max','9');
td22.appendChild(i22);

//CELL-23
var td23 = document.createElement('td');
tr3.appendChild(td23);

var i23 = document.createElement('input');
i23.setAttribute('id','r3c5');
i23.setAttribute('type','number');
i23.setAttribute('min','1');
i23.setAttribute('max','9');
td23.appendChild(i23);

//CELL-24
var td24 = document.createElement('td');
tr3.appendChild(td24);

var i24 = document.createElement('input');
i24.setAttribute('id','r3c6');
i24.setAttribute('type','number');
i24.setAttribute('min','1');
i24.setAttribute('max','9');
td24.appendChild(i24);

//CELL-25
var td25 = document.createElement('td');
tr3.appendChild(td25);

var i25 = document.createElement('input');
i25.setAttribute('id','r3c7');
i25.setAttribute('type','number');
i25.setAttribute('min','1');
i25.setAttribute('max','9');
td25.appendChild(i25);

//CELL-26
var td26 = document.createElement('td');
tr3.appendChild(td26);

var i26 = document.createElement('input');
i26.setAttribute('id','r3c8');
i26.setAttribute('type','number');
i26.setAttribute('min','1');
i26.setAttribute('max','9');
td26.appendChild(i26);

//CELL-27
var td27 = document.createElement('td');
tr3.appendChild(td27);

var i27 = document.createElement('input');
i27.setAttribute('id','r3c9');
i27.setAttribute('type','number');
i27.setAttribute('value','1');
i27.setAttribute('disabled','true');
td27.appendChild(i27);

//ROW-4
var tr4 = document.createElement('tr');
table.appendChild(tr4);

//CELL-28
var td28 = document.createElement('td');
tr4.appendChild(td28);

var i28 = document.createElement('input');
i28.setAttribute('id','r4c1');
i28.setAttribute('type','number');
i28.setAttribute('value','8');
i28.setAttribute('disabled','true');
td28.appendChild(i28);

//CELL-29
var td29 = document.createElement('td');
tr4.appendChild(td29);

var i29 = document.createElement('input');
i29.setAttribute('id','r4c2');
i29.setAttribute('type','number');
i29.setAttribute('min','1');
i29.setAttribute('max','9');
td29.appendChild(i29);

//CELL-30
var td30 = document.createElement('td');
tr4.appendChild(td30);

var i30 = document.createElement('input');
i30.setAttribute('id','r4c3');
i30.setAttribute('type','number');
i30.setAttribute('min','1');
i30.setAttribute('max','9');
td30.appendChild(i30);

//CELL-31
var td31 = document.createElement('td');
tr4.appendChild(td31);

var i31 = document.createElement('input');
i31.setAttribute('id','r4c4');
i31.setAttribute('type','number');
i31.setAttribute('value','4');
i31.setAttribute('disabled','true');
td31.appendChild(i31);

//CELL-32
var td32 = document.createElement('td');
tr4.appendChild(td32);

var i32 = document.createElement('input');
i32.setAttribute('id','r4c5');
i32.setAttribute('type','number');
i32.setAttribute('min','1');
i32.setAttribute('max','9');
td32.appendChild(i32);

//CELL-33
var td33 = document.createElement('td');
tr4.appendChild(td33);

var i33 = document.createElement('input');
i33.setAttribute('id','r4c6');
i33.setAttribute('type','number');
i33.setAttribute('value','7');
i33.setAttribute('disabled','true');
td33.appendChild(i33);

//CELL-34
var td34 = document.createElement('td');
tr4.appendChild(td34);

var i34 = document.createElement('input');
i34.setAttribute('id','r4c7');
i34.setAttribute('type','number');
i34.setAttribute('min','1');
i34.setAttribute('max','9');
td34.appendChild(i34);

//CELL-35
var td35 = document.createElement('td');
tr4.appendChild(td35);

var i35 = document.createElement('input');
i35.setAttribute('id','r4c8');
i35.setAttribute('type','number');
i35.setAttribute('min','1');
i35.setAttribute('max','9');
td35.appendChild(i35);

//CELL-36
var td36 = document.createElement('td');
tr4.appendChild(td36);

var i36 = document.createElement('input');
i36.setAttribute('id','r4c9');
i36.setAttribute('type','number');
i36.setAttribute('value','6');
i36.setAttribute('disabled','true');
td36.appendChild(i36);

//ROW-5
var tr5 = document.createElement('tr');
table.appendChild(tr5);

//CELL-37
var td37 = document.createElement('td');
tr5.appendChild(td37);

var i37 = document.createElement('input');
i37.setAttribute('id','r5c1');
i37.setAttribute('type','number');
i37.setAttribute('min','1');
i37.setAttribute('max','9');
td37.appendChild(i37);

//CELL-38
var td38 = document.createElement('td');
tr5.appendChild(td38);

var i38 = document.createElement('input');
i38.setAttribute('id','r5c2');
i38.setAttribute('type','number');
i38.setAttribute('min','1');
i38.setAttribute('max','9');
td38.appendChild(i38);

//CELL-39
var td39 = document.createElement('td');
tr5.appendChild(td39);

var i39 = document.createElement('input');
i39.setAttribute('id','r5c3');
i39.setAttribute('type','number');
i39.setAttribute('value','6');
i39.setAttribute('disabled','true');
td39.appendChild(i39);

//CELL-40
var td40 = document.createElement('td');
tr5.appendChild(td40);

var i40 = document.createElement('input');
i40.setAttribute('id','r5c4');
i40.setAttribute('type','number');
i40.setAttribute('min','1');
i40.setAttribute('max','9');
td40.appendChild(i40);

//CELL-41
var td41 = document.createElement('td');
tr5.appendChild(td41);

var i41 = document.createElement('input');
i41.setAttribute('id','r5c5');
i41.setAttribute('type','number');
i41.setAttribute('min','1');
i41.setAttribute('max','9');
td41.appendChild(i41);

//CELL-42
var td42 = document.createElement('td');
tr5.appendChild(td42);

var i42 = document.createElement('input');
i42.setAttribute('id','r5c6');
i42.setAttribute('type','number');
i42.setAttribute('min','1');
i42.setAttribute('max','9');
td42.appendChild(i42);

//CELL-43
var td43 = document.createElement('td');
tr5.appendChild(td43);

var i43 = document.createElement('input');
i43.setAttribute('id','r5c7');
i43.setAttribute('type','number');
i43.setAttribute('value','3');
i43.setAttribute('disabled','true');
td43.appendChild(i43);

//CELL-44
var td44 = document.createElement('td');
tr5.appendChild(td44);

var i44 = document.createElement('input');
i44.setAttribute('id','r5c8');
i44.setAttribute('type','number');
i44.setAttribute('min','1');
i44.setAttribute('max','9');
td44.appendChild(i44);

//CELL-45
var td45 = document.createElement('td');
tr5.appendChild(td45);

var i45 = document.createElement('input');
i45.setAttribute('id','r5c9');
i45.setAttribute('type','number');
i45.setAttribute('min','1');
i45.setAttribute('max','9');
td45.appendChild(i45);

//ROW-6
var tr6 = document.createElement('tr');
table.appendChild(tr6);

//CELL-46
var td46 = document.createElement('td');
tr6.appendChild(td46);

var i46 = document.createElement('input');
i46.setAttribute('id','r6c1');
i46.setAttribute('type','number');
i46.setAttribute('value','7');
i46.setAttribute('disabled','true');
td46.appendChild(i46);

//CELL-47
var td47 = document.createElement('td');
tr6.appendChild(td47);

var i47 = document.createElement('input');
i47.setAttribute('id','r6c2');
i47.setAttribute('type','number');
i47.setAttribute('min','1');
i47.setAttribute('max','9');
td47.appendChild(i47);

//CELL-48
var td48 = document.createElement('td');
tr6.appendChild(td48);

var i48 = document.createElement('input');
i48.setAttribute('id','r6c3');
i48.setAttribute('type','number');
i48.setAttribute('min','1');
i48.setAttribute('max','9');
td48.appendChild(i48);

//CELL-49
var td49 = document.createElement('td');
tr6.appendChild(td49);

var i49 = document.createElement('input');
i49.setAttribute('id','r6c4');
i49.setAttribute('type','number');
i49.setAttribute('value','9');
i49.setAttribute('disabled','true');
td49.appendChild(i49);

//CELL-50
var td50 = document.createElement('td');
tr6.appendChild(td50);

var i50 = document.createElement('input');
i50.setAttribute('id','r6c5');
i50.setAttribute('type','number');
i50.setAttribute('min','1');
i50.setAttribute('max','9');
td50.appendChild(i50);

//CELL-51
var td51 = document.createElement('td');
tr6.appendChild(td51);

var i51 = document.createElement('input');
i51.setAttribute('id','r6c6');
i51.setAttribute('type','number');
i51.setAttribute('value','1');
i51.setAttribute('disabled','true');
td51.appendChild(i51);

//CELL-52
var td52 = document.createElement('td');
tr6.appendChild(td52);

var i52 = document.createElement('input');
i52.setAttribute('id','r6c7');
i52.setAttribute('type','number');
i52.setAttribute('min','1');
i52.setAttribute('max','9');
td52.appendChild(i52);

//CELL-53
var td53 = document.createElement('td');
tr6.appendChild(td53);

var i53 = document.createElement('input');
i53.setAttribute('id','r6c8');
i53.setAttribute('type','number');
i53.setAttribute('min','1');
i53.setAttribute('max','9');
td53.appendChild(i53);

//CELL-54
var td54 = document.createElement('td');
tr6.appendChild(td54);

var i54 = document.createElement('input');
i54.setAttribute('id','r6c9');
i54.setAttribute('type','number');
i54.setAttribute('value','4');
i54.setAttribute('disabled','true');
td54.appendChild(i54);

//ROW-7
var tr7 = document.createElement('tr');
table.appendChild(tr7);

//CELL-55
var td55 = document.createElement('td');
tr7.appendChild(td55);

var i55 = document.createElement('input');
i55.setAttribute('id','r7c1');
i55.setAttribute('type','number');
i55.setAttribute('value','5');
i55.setAttribute('disabled','true');
td55.appendChild(i55);

//CELL-56
var td56 = document.createElement('td');
tr7.appendChild(td56);

var i56 = document.createElement('input');
i56.setAttribute('id','r7c2');
i56.setAttribute('type','number');
i56.setAttribute('min','1');
i56.setAttribute('max','9');
td56.appendChild(i56);

//CELL-57
var td57 = document.createElement('td');
tr7.appendChild(td57);

var i57 = document.createElement('input');
i57.setAttribute('id','r7c3');
i57.setAttribute('type','number');
i57.setAttribute('min','1');
i57.setAttribute('max','9');
td57.appendChild(i57);

//CELL-58
var td58 = document.createElement('td');
tr7.appendChild(td58);

var i58 = document.createElement('input');
i58.setAttribute('id','r7c4');
i58.setAttribute('type','number');
i58.setAttribute('min','1');
i58.setAttribute('max','9');
td58.appendChild(i58);

//CELL-59
var td59 = document.createElement('td');
tr7.appendChild(td59);

var i59 = document.createElement('input');
i59.setAttribute('id','r7c5');
i59.setAttribute('type','number');
i59.setAttribute('min','1');
i59.setAttribute('max','9');
td59.appendChild(i59);

//CELL-60
var td60 = document.createElement('td');
tr7.appendChild(td60);

var i60 = document.createElement('input');
i60.setAttribute('id','r7c6');
i60.setAttribute('type','number');
i60.setAttribute('min','1');
i60.setAttribute('max','9');
td60.appendChild(i60);

//CELL-61
var td61 = document.createElement('td');
tr7.appendChild(td61);

var i61 = document.createElement('input');
i61.setAttribute('id','r7c7');
i61.setAttribute('type','number');
i61.setAttribute('min','1');
i61.setAttribute('max','9');
td61.appendChild(i61);

//CELL-62
var td62 = document.createElement('td');
tr7.appendChild(td62);

var i62 = document.createElement('input');
i62.setAttribute('id','r7c8');
i62.setAttribute('type','number');
i62.setAttribute('min','1');
i62.setAttribute('max','9');
td62.appendChild(i62);

//CELL-63
var td63 = document.createElement('td');
tr7.appendChild(td63);

var i63 = document.createElement('input');
i63.setAttribute('id','r7c9');
i63.setAttribute('type','number');
i63.setAttribute('value','2');
i63.setAttribute('disabled','true');
td63.appendChild(i63);

//ROW-8
var tr8 = document.createElement('tr');
table.appendChild(tr8);

//CELL-64
var td64 = document.createElement('td');
tr8.appendChild(td64);

var i64 = document.createElement('input');
i64.setAttribute('id','r8c1');
i64.setAttribute('type','number');
i64.setAttribute('min','1');
i64.setAttribute('max','9');
td64.appendChild(i64);

//CELL-65
var td65 = document.createElement('td');
tr8.appendChild(td65);

var i65 = document.createElement('input');
i65.setAttribute('id','r8c2');
i65.setAttribute('type','number');
i65.setAttribute('min','1');
i65.setAttribute('max','9');
td65.appendChild(i65);

//CELL-66
var td66 = document.createElement('td');
tr8.appendChild(td66);

var i66 = document.createElement('input');
i66.setAttribute('id','r8c3');
i66.setAttribute('type','number');
i66.setAttribute('value','7');
i66.setAttribute('disabled','true');
td66.appendChild(i66);

//CELL-67
var td67 = document.createElement('td');
tr8.appendChild(td67);

var i67 = document.createElement('input');
i67.setAttribute('id','r8c4');
i67.setAttribute('type','number');
i67.setAttribute('value','2');
i67.setAttribute('disabled','true');
td67.appendChild(i67);

//CELL-68
var td68 = document.createElement('td');
tr8.appendChild(td68);

var i68 = document.createElement('input');
i68.setAttribute('id','r8c5');
i68.setAttribute('type','number');
i68.setAttribute('min','1');
i68.setAttribute('max','9');
td68.appendChild(i68);

//CELL-69
var td69 = document.createElement('td');
tr8.appendChild(td69);

var i69 = document.createElement('input');
i69.setAttribute('id','r8c6');
i69.setAttribute('type','number');
i69.setAttribute('value','6');
i69.setAttribute('disabled','true');
td69.appendChild(i69);

//CELL-70
var td70 = document.createElement('td');
tr8.appendChild(td70);

var i70 = document.createElement('input');
i70.setAttribute('id','r8c7');
i70.setAttribute('type','number');
i70.setAttribute('value','9');
i70.setAttribute('disabled','true');
td70.appendChild(i70);

//CELL-71
var td71 = document.createElement('td');
tr8.appendChild(td71);

var i71 = document.createElement('input');
i71.setAttribute('id','r8c8');
i71.setAttribute('type','number');
i71.setAttribute('min','1');
i71.setAttribute('max','9');
td71.appendChild(i71);

//CELL-72
var td72 = document.createElement('td');
tr8.appendChild(td72);

var i72 = document.createElement('input');
i72.setAttribute('id','r8c9');
i72.setAttribute('type','number');
i72.setAttribute('min','1');
i72.setAttribute('max','9');
td72.appendChild(i72);

//ROW-9
var tr9 = document.createElement('tr');
table.appendChild(tr9);

//CELL-73
var td73 = document.createElement('td');
tr9.appendChild(td73);

var i73 = document.createElement('input');
i73.setAttribute('id','r9c1');
i73.setAttribute('type','number');
i73.setAttribute('min','1');
i73.setAttribute('max','9');
td73.appendChild(i73);

//CELL-74
var td74 = document.createElement('td');
tr9.appendChild(td74);

var i74 = document.createElement('input');
i74.setAttribute('id','r9c2');
i74.setAttribute('type','number');
i74.setAttribute('value','4');
i74.setAttribute('disabled','true');
td74.appendChild(i74);

//CELL-75
var td75 = document.createElement('td');
tr9.appendChild(td75);

var i75 = document.createElement('input');
i75.setAttribute('id','r9c3');
i75.setAttribute('type','number');
i75.setAttribute('min','1');
i75.setAttribute('max','9');
td75.appendChild(i75);

//CELL-76
var td76 = document.createElement('td');
tr9.appendChild(td76);

var i76 = document.createElement('input');
i76.setAttribute('id','r9c4');
i76.setAttribute('type','number');
i76.setAttribute('value','5');
i76.setAttribute('disabled','true');
td76.appendChild(i76);

//CELL-77
var td77 = document.createElement('td');
tr9.appendChild(td77);

var i77 = document.createElement('input');
i77.setAttribute('id','r9c5');
i77.setAttribute('type','number');
i77.setAttribute('min','1');
i77.setAttribute('max','9');
td77.appendChild(i77);

//CELL-78
var td78 = document.createElement('td');
tr9.appendChild(td78);

var i78 = document.createElement('input');
i78.setAttribute('id','r9c6');
i78.setAttribute('type','number');
i78.setAttribute('value','8');
i78.setAttribute('disabled','true');
td78.appendChild(i78);

//CELL-79
var td79 = document.createElement('td');
tr9.appendChild(td79);

var i79 = document.createElement('input');
i79.setAttribute('id','r9c7');
i79.setAttribute('type','number');
i79.setAttribute('min','1');
i79.setAttribute('max','9');
td79.appendChild(i79);

//CELL-80
var td80 = document.createElement('td');
tr9.appendChild(td80);

var i80 = document.createElement('input');
i80.setAttribute('id','r9c8');
i80.setAttribute('type','number');
i80.setAttribute('value','7');
i80.setAttribute('disabled','true');
td80.appendChild(i80);

//CELL-81
var td81 = document.createElement('td');
tr9.appendChild(td81);

var i81 = document.createElement('input');
i81.setAttribute('id','r9c9');
i81.setAttribute('type','number');
i81.setAttribute('min','1');
i81.setAttribute('max','9');
i81.setAttribute('maxlength','1')
td81.appendChild(i81);

//Table-2 for Buttons
var table2 = document.createElement('table1');
document.body.appendChild(table2);

//ROW-10
var tr10 = document.createElement('tr1');
table2.appendChild(tr10);

//CELL-82 RESTART BUTTON
var td82 = document.createElement('td1');
tr10.appendChild(td82);

var restart = document.createElement('button');
restart.setAttribute('onclick','document.location.reload()');
restart.setAttribute('class','myButton1');
restart.innerText='RESTART';
td82.appendChild(restart);

//CELL-83  START BUTTTON
var td83 = document.createElement('td2');
tr10.appendChild(td83);

var start = document.createElement('button');
start.setAttribute('onclick','myTimer = setInterval(counter, 1000);startAudio()');
start.setAttribute('class','myButton');
start.innerText='START';
td83.appendChild(start);