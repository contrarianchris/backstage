(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{4018:function(module,exports,__webpack_require__){__webpack_require__(41),module.exports=function yaml(hljs){var LITERALS="true false yes no null",URI_CHARACTERS="[\\w#;/?:@&=+$,.~*'()[\\]]+",STRING={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[hljs.BACKSLASH_ESCAPE,{className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]}]},CONTAINER_STRING=hljs.inherit(STRING,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),TIMESTAMP={className:"number",begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"},VALUE_CONTAINER={end:",",endsWithParent:!0,excludeEnd:!0,keywords:LITERALS,relevance:0},OBJECT={begin:/\{/,end:/\}/,contains:[VALUE_CONTAINER],illegal:"\\n",relevance:0},ARRAY={begin:"\\[",end:"\\]",contains:[VALUE_CONTAINER],illegal:"\\n",relevance:0},MODES=[{className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]},{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+URI_CHARACTERS},{className:"type",begin:"!<"+URI_CHARACTERS+">"},{className:"type",begin:"!"+URI_CHARACTERS},{className:"type",begin:"!!"+URI_CHARACTERS},{className:"meta",begin:"&"+hljs.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+hljs.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},hljs.HASH_COMMENT_MODE,{beginKeywords:LITERALS,keywords:{literal:LITERALS}},TIMESTAMP,{className:"number",begin:hljs.C_NUMBER_RE+"\\b",relevance:0},OBJECT,ARRAY,STRING],VALUE_MODES=[].concat(MODES);return VALUE_MODES.pop(),VALUE_MODES.push(CONTAINER_STRING),VALUE_CONTAINER.contains=VALUE_MODES,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:MODES}}}}]);