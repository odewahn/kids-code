(function(){this.LOLCoffee={KEYWORDS:"IF U SAY SO,IM OUTTA YR,QUOSHUNT OF,PRODUKT OF,BOTH SAEM,EITHER OF,HOW DUZ I,SMALLR OF,BIGGR OF,CHARZ OF,DIFFRINT,FOUND YR,IM IN YR,IS NOW A,LENGZ OF,BOTH OF,DIFF OF,I HAS A,KTHXBYE,ORDZ OF,VISIBLE,ALL OF,ANY OF,BUKKIT,GIMMEH,MOD OF,NERFIN,NUMBAR,NO WAI,O RLY?,OMGWTF,SMOOSH,SUM OF,WON OF,YA RLY,MEBBE,NUMBR,TROOF,UPPIN,FAIL,GTFO,INTA,MAEK,MKAY,NOOB,PUTZ,WILE,WTF?,YARN,HAI,ITZ,NOT,OIC,OMG,TIL,WIN,AN,AT,YR,!,A,R".split(","),UNARY_OPERATORS:["NOT","LENGZ OF","CHARZ OF",
"ORDZ OF"],BINARY_OPERATORS:"SUM OF,DIFF OF,PRODUKT OF,QUOSHUNT OF,MOD OF,BIGGR OF,SMALLR OF,BOTH OF,EITHER OF,WON OF,BOTH SAEM,DIFFRINT".split(","),INFINITARY_OPERATORS:["ALL OF","ANY OF","SMOOSH"],DEFAULT_VALUES:{YARN:"",NUMBR:0,NUMBAR:0,TROOF:false,NOOB:null}}}).call(this);
(function(){var e,x,j,y,w,p,t,u,s,h,a,c,g,D,m,F,q,v,i,B,A,G,C,l,H,I,J,r,K,L,M,N,O,k,n,b,d,o,P,Q={}.hasOwnProperty,z=function(a,f){function d(){this.constructor=a}for(var b in f)Q.call(f,b)&&(a[b]=f[b]);d.prototype=f.prototype;a.prototype=new d;a.__super__=f.prototype;return a};a=this.LOLCoffee.DEFAULT_VALUES;l=function(a){function f(f){this.message=f+"."}z(f,a);f.prototype.name="MachineError";return f}(Error);o=function(){function d(f,a){this.type=f;this.value=a}d.prototype.equal=function(f){var a,
d;return((a=this.type)==="float"||a==="int")&&((d=f.type)==="float"||d==="int")?this.value===f.value:this.type===f.type?this.value===f.value:false};d.prototype.cast=function(f,b){var E;b==null&&(b=false);if(f==="null")throw new l("Cannot cast to NOOB");E=null;switch(this.type){case "null":if(b){if(!(f in a))throw new l("Unknown type: "+f);E=a[f]}else{if(f!=="bool")throw new l("Cannot implicitly cast NOOB to "+f);E=false}break;case "bool":E=function(){switch(f){case "bool":return this.value;case "int":case "float":return Number(this.value);
case "string":return this.value?"WIN":"FAIL";default:throw new l("Unknown type: "+f);}}.call(this);break;case "int":E=function(){switch(f){case "bool":return this.value!==0;case "int":case "float":return this.value;case "string":return String(this.value);default:throw new l("Unknown type: "+f);}}.call(this);break;case "float":E=function(){switch(f){case "bool":return this.value!==0;case "int":return Math.floor(this.value);case "float":return this.value;case "string":return String(this.value);default:throw new l("Unknown type: "+
f);}}.call(this);break;case "string":E=function(){switch(f){case "bool":return this.value!=="";case "int":if(!/^-?\d+$/.test(this.value))throw new l("Cannot parse NUMBR from '"+this.value+"'");return parseInt(this.value,10);case "float":if(!/^-?(\d+(\.\d*)?|\.\d+)$/.test(this.value))throw new l("Cannot parse NUMBAR from '"+this.value+"'");return parseFloat(this.value);case "string":return this.value;default:throw new l("Unknown type: "+f);}}.call(this);break;default:throw new l("Unknown type: "+this.type);
}return new d(f,E)};return d}();m=function(){return function(a,f){this.name=a;this.instruction_ptr=f;this.variables={};this.stack=[]}}();i=function(){function a(){}a.prototype.exec=function(f){f.halted=true;return f.done()};return a}();G=function(){function a(f){this.label=f}a.prototype.exec=function(f){return f.instruction_ptr=f.labels[this.label]};return a}();C=function(){function a(f){this.label=f}a.prototype.exec=function(f){if(f.getStack().pop().value===false)return f.instruction_ptr=f.labels[this.label]};
return a}();c=function(){function a(f,d){this.name=f;this.label=d}a.prototype.exec=function(f){return f.functions[this.name]=f.labels[this.label]};return a}();g=function(){function a(f){this.identifier=f}a.prototype.exec=function(f){if(this.identifier==="IT")throw new l("Cannot declare the special variable IT");return f.frames.slice(-1)[0].variables[this.identifier]=new o("null",null)};return a}();w=function(){function a(f){this.identifier=f}a.prototype.exec=function(f){var a,d,b;a=f.frames[0].variables;
d=f.frames.slice(-1)[0].variables;b=f.getStack().pop();if(this.identifier in d)return d[this.identifier]=b;else if(this.identifier in a)return a[this.identifier]=b;else if(f.auto_declare)return d[this.identifier]=b;else throw new l("Assignment to undefined variable: "+this.identifier);};return a}();p=function(){function a(f){this.identifier=f}a.prototype.exec=function(f){var a,d,b;d=f.frames[0].variables;a=f.frames.slice(-1)[0].variables;if(this.identifier in a)d=a;else if(!(this.identifier in d))if(f.auto_declare)d=
a;else throw new l("Assignment to undefined variable: "+this.identifier);a=d[this.identifier];b=f.getStack().pop();f=f.getStack().pop();if(a.type!=="string")throw new l("Can only index YARNs, not "+a.type);if(b.type!=="int")throw new l("Can only index using NUMBRs, not "+b.type);if(b.value>=a.value.length)throw new l("Out of bounds: '"+a.value+"'["+b.value+"]");if(f.type!=="string"||f.value.length!==1)throw new l("Can only assign single-character YARNs to YARN indices, not "+f.value);a=a.value;f=
a.slice(0,b.value)+f.value+a.slice(b.value+1);return d[this.identifier]=new o("string",f)};return a}();B=function(){function a(){}a.prototype.exec=function(f){f.pause();return f.input()};return a}();L=function(){function a(){}a.prototype.exec=function(f){f.pause();return f.output(f.getStack().pop().value)};return a}();N=function(){function a(){}a.prototype.exec=function(f){var a;a=(a=f.syscall_result)?String(a):"";return f.getStack().push(new o("string",a))};return a}();O=function(){function a(f){this.identifier=
f}a.prototype.exec=function(f){var a,d;a=f.frames[0].variables;d=f.frames.slice(-1)[0].variables;if(this.identifier in d)a=d[this.identifier];else if(this.identifier in a)a=a[this.identifier];else throw new l("Reference to undefined variable: "+this.identifier);return f.getStack().push(a)};return a}();q=function(){function a(){}a.prototype.exec=function(a){var d,b;d=a.getStack().pop();b=a.getStack().pop();if(d.type!=="string")throw new l("Can only index YARNs, not "+d.type);if(b.type!=="int")throw new l("Can only index using NUMBRs, not "+
b.type);if(b.value>=d.value.length)throw new l("Out of bounds: '"+d.value+"'["+b.value+"]");return a.getStack().push(new o("string",d.value[b.value]))};return a}();M=function(){function a(f,d){this.type=f;this.value=d}a.prototype.exec=function(a){return a.getStack().push(new o(this.type,this.value))};return a}();s=function(){function a(f,d){this.type=f;this.explicit=d!=null?d:false}a.prototype.exec=function(a){return a.getStack().push(a.getStack().pop().cast(this.type,this.explicit))};return a}();
u=function(){function a(f,d){this.func_name=f;this.args_count=d}a.prototype.exec=function(a){var d,b,c;d=a.getStack();a.frames.push(new m(this.func_name,a.instruction_ptr));for(b=0,c=this.args_count;0<=c?b<c:b>c;0<=c?++b:--b)a.getStack().push(d.pop());return a.instruction_ptr=a.functions[this.func_name]};return a}();k=function(){function a(){}a.prototype.exec=function(a){var d,b;b=a.getStack().pop();d=a.frames.pop();a.instruction_ptr=d.instruction_ptr;return a.getStack().push(b)};return a}();x=function(){function a(f){this.args_count=
f}a.prototype.exec=function(a){var d,b,c,i,n;n=[];for(d=0,b=this.args_count;0<=b?d<b:d>b;0<=b?++d:--d)n.push(a.getStack().pop().cast("bool").value);b=true;for(c=0,i=n.length;c<i;c++)if(d=n[c],!d){b=false;break}return a.getStack().push(new o("bool",b))};return a}();y=function(){function a(f){this.args_count=f}a.prototype.exec=function(a){var d,b,c,i,n;n=[];for(d=0,b=this.args_count;0<=b?d<b:d>b;0<=b?++d:--d)n.push(a.getStack().pop().cast("bool").value);b=false;for(c=0,i=n.length;c<i;c++)if(d=n[c]){b=
true;break}return a.getStack().push(new o("bool",b))};return a}();h=function(){function a(d){this.args_count=d}a.prototype.exec=function(a){var d,b,c;c=[];for(d=0,b=this.args_count;0<=b?d<b:d>b;0<=b?++d:--d)c.push(a.getStack().pop().cast("string").value);return a.getStack().push(new o("string",c.join("")))};return a}();j=function(){function a(){}a.prototype.exec=function(a,d){var b,c,i;b=a.getStack().pop();c=a.getStack().pop();i="float"===b.type||"float"===c.type?"float":"int";b=b.cast(i).value;c=
c.cast(i).value;b=d(b,c);i==="int"&&(b=Math.floor(b));return a.getStack().push(new o(i,b))};return a}();e=function(a){function d(){return d.__super__.constructor.apply(this,arguments)}z(d,a);d.prototype.exec=function(a){return d.__super__.exec.call(this,a,function(a,d){return a+d})};return d}(j);n=function(a){function d(){return d.__super__.constructor.apply(this,arguments)}z(d,a);d.prototype.exec=function(a){return d.__super__.exec.call(this,a,function(a,d){return a-d})};return d}(j);r=function(a){function d(){return d.__super__.constructor.apply(this,
arguments)}z(d,a);d.prototype.exec=function(a){return d.__super__.exec.call(this,a,function(a,d){return a*d})};return d}(j);D=function(a){function d(){return d.__super__.constructor.apply(this,arguments)}z(d,a);d.prototype.exec=function(a){return d.__super__.exec.call(this,a,function(a,d){return a/d})};return d}(j);J=function(a){function d(){return d.__super__.constructor.apply(this,arguments)}z(d,a);d.prototype.exec=function(a){return d.__super__.exec.call(this,a,function(a,d){return a%d})};return d}(j);
H=function(a){function d(){return d.__super__.constructor.apply(this,arguments)}z(d,a);d.prototype.exec=function(a){return d.__super__.exec.call(this,a,function(a,d){return a>d?a:d})};return d}(j);I=function(a){function d(){return d.__super__.constructor.apply(this,arguments)}z(d,a);d.prototype.exec=function(a){return d.__super__.exec.call(this,a,function(a,d){return a<d?a:d})};return d}(j);t=function(){function a(){}a.prototype.exec=function(a,d){var b,c;b=a.getStack().pop().cast("bool").value;c=
a.getStack().pop().cast("bool").value;return a.getStack().push(new o("bool",d(b,c)))};return a}();j=function(a){function d(){return d.__super__.constructor.apply(this,arguments)}z(d,a);d.prototype.exec=function(a){return d.__super__.exec.call(this,a,function(a,d){return a&&d})};return d}(t);K=function(a){function d(){return d.__super__.constructor.apply(this,arguments)}z(d,a);d.prototype.exec=function(a){return d.__super__.exec.call(this,a,function(a,d){return a||d})};return d}(t);P=function(a){function d(){return d.__super__.constructor.apply(this,
arguments)}z(d,a);d.prototype.exec=function(a){return d.__super__.exec.call(this,a,function(a,d){return a^d})};return d}(t);t=function(){function a(){}a.prototype.exec=function(a){var d,b;d=a.getStack().pop();b=a.getStack().pop();return a.getStack().push(new o("bool",d.equal(b)))};return a}();d=function(){function a(){}a.prototype.exec=function(a){var d,b;d=a.getStack().pop();b=a.getStack().pop();return a.getStack().push(new o("bool",!d.equal(b)))};return a}();A=function(){function a(){}a.prototype.exec=
function(a){var d;d=a.getStack().pop().cast("bool").value;return a.getStack().push(new o("bool",!d))};return a}();v=function(){function a(){}a.prototype.exec=function(a){var d;d=a.getStack().pop();if(d.type!=="string")throw new l("Can only get length of YARNs");return a.getStack().push(new o("int",d.value.length))};return a}();F=function(){function a(){}a.prototype.exec=function(a){var d;d=a.getStack().pop();if(d.type!=="int")throw new l("Character codes must be NUMBRs, not "+d.type);d=String.fromCharCode(d.value);
return a.getStack().push(new o("string",d))};return a}();b=function(){function a(){}a.prototype.exec=function(a){var d;d=a.getStack().pop();if(d.type!=="string"||!d.value.length)throw new l("Can only take character code of non-empty "+("YARNs, not '"+d.type+"'"));return a.getStack().push(new o("int",d.value.charCodeAt(0)))};return a}();this.LOLCoffee.Machine=function(){function a(d,b,c,i,o,n){this.context=d;this.input=b;this.output=c;this.error=i;this.done=o;this.auto_declare=n;this.instructions=
this.context.instructions;this.labels=this.context.labels;this.reset();this.input=this.input||function(a){return function(){return a.resume()}}(this);this.output=this.output||function(a){return function(){return a.resume()}}(this);this.error=this.error||function(){};this.done=this.done||function(){};this.auto_declare=this.auto_declare||false}a.prototype.reset=function(){this.instruction_ptr=0;this.frames=[new m("{MAIN}",0)];this.frames[0].variables.IT=new o("null",null);this.functions={};this.halted=
true;this.blocked=false;return this.syscall_result=null};a.prototype.step=function(){if(this.blocked||this.halted||this.instruction_ptr>=this.instructions.length)throw new l("Cannot execute while blocked, halted or at end");try{return this.instructions[this.instruction_ptr++].exec(this)}catch(a){return this.error(a),this.halted=true}};a.prototype.run=function(){var a;this.halted=false;for(a=[];!this.blocked&&!this.halted;)a.push(this.step());return a};a.prototype.pause=function(){return this.blocked=
true};a.prototype.resume=function(a){a==null&&(a=null);this.syscall_result=a;this.blocked=false;if(!this.halted)return this.run()};a.prototype.getStack=function(){return this.frames[this.frames.length-1].stack};return a}();this.LOLCoffee.MachineError=l;this.LOLCoffee.Instructions={Halt:i,PushLiteral:M,DeclareFunction:c,Jump:G,DeclareVariable:g,Assign:w,AssignAtIndex:p,Return:k,Input:B,PushSyscallResult:N,Output:L,PushVariable:O,GetIndex:q,Cast:s,JumpIfZero:C,Call:u,All:x,Any:y,Concat:h,Add:e,Subtract:n,
Multiply:r,Divide:D,Modulo:J,Max:H,Min:I,And:j,Or:K,Xor:P,Equal:t,Unequal:d,Invert:A,GetLength:v,FromCharCode:F,ToCharCode:b}}).call(this);
(function(){var e,x,j,y,w,p,t,u,s,h,a,c,g,D,m,F,q,v,i,B,A,G,C,l,H,I,J,r,K,L,M,N,O={}.hasOwnProperty,k=function(a,b){function d(){this.constructor=a}for(var c in b)O.call(b,c)&&(a[c]=b[c]);d.prototype=b.prototype;a.prototype=new d;a.__super__=b.prototype;return a};i=this.LOLCoffee.Instructions;u=function(a){function b(a){this.message=a}k(b,a);b.prototype.name="CodeGenError";return b}(Error);t=function(){function a(){this.instructions=[];this.labels=[];this._break_stack=[]}a.prototype.emit=function(a){return this.instructions.push(a)};
a.prototype.newLabel=function(){this.labels.push(null);return this.labels.length-1};a.prototype.emitLabel=function(a){if(a>=this.labels.length)throw new u("Unknown label ("+a+"). Top: "+this.labels.length);return this.labels[a]=this.instructions.length};a.prototype.getBreakLabel=function(){return this._break_stack[this._break_stack.length-1]};a.prototype.popBreakLabel=function(){return this._break_stack.pop()};a.prototype.pushBreakLabel=function(a){return this._break_stack.push(a)};return a}();C=
function(){return function(){}}();I=function(a){function b(a){this.body=a}k(b,a);b.prototype.codegen=function(a){this.body.codegen(a);return a.emit(new i.Halt)};return b}(C);g=function(a){function b(a,b,c){this.name=a;this.args=b;this.body=c}k(b,a);b.prototype.codegen=function(a){var b,c,e,n,g;b=a.newLabel();c=a.newLabel();a.emit(new i.DeclareFunction(this.name,b));a.emit(new i.Jump(c));a.emitLabel(b);this.args.reverse();g=this.args;for(e=0,n=g.length;e<n;e++)b=g[e],a.emit(new i.DeclareVariable(b)),
a.emit(new i.Assign(b));this.body.codegen(a);return a.emitLabel(c)};return b}(C);r=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}k(b,a);return b}(C);J=function(a){function b(a){this.value=a}k(b,a);b.prototype.codegen=function(a){this.value.codegen(a);return a.emit(new i.Return)};return b}(r);v=function(a){function b(a){this.identifier=a}k(b,a);b.prototype.codegen=function(a){a.emit(new i.Input);a.emit(new i.PushSyscallResult);return a.emit(new i.Assign(this.identifier))};
return b}(r);H=function(a){function b(a){this.expression=a}k(b,a);b.prototype.codegen=function(a){this.expression.codegen(a);return a.emit(new i.Output)};return b}(r);h=function(a){function b(a){this.identifier=a}k(b,a);b.prototype.codegen=function(a){return a.emit(new i.DeclareVariable(this.identifier))};return b}(r);e=function(a){function b(a,b){this.identifier=a;this.value=b}k(b,a);b.prototype.codegen=function(a){this.value.codegen(a);return a.emit(new i.Assign(this.identifier))};return b}(r);
m=function(a){function b(a,b,c){this.identifier=a;this.index=b;this.value=c}k(b,a);b.prototype.codegen=function(a){this.value.codegen(a);this.index.codegen(a);return a.emit(new i.AssignAtIndex(this.identifier))};return b}(r);y=function(a){function b(){}k(b,a);b.prototype.codegen=function(a){return a.emit(new i.Jump(a.getBreakLabel()))};return b}(r);K=function(a){function b(a){this.statements=a}k(b,a);b.prototype.codegen=function(a){var b,c,i,e,g;e=this.statements;g=[];for(c=0,i=e.length;c<i;c++)b=
e[c],g.push(b.codegen(a));return g};return b}(r);s=function(a){function b(a,b){this.then_body=a;this.else_body=b}k(b,a);b.prototype.codegen=function(a){var b,c;b=a.newLabel();c=a.newLabel();a.emit(new i.PushVariable("IT"));a.emit(new i.Cast("bool"));a.emit(new i.JumpIfZero(b));this.then_body.codegen(a);a.emit(new i.Jump(c));a.emitLabel(b);this.else_body&&this.else_body.codegen(a);return a.emitLabel(c)};return b}(r);M=function(a){function b(a,b){this.cases=a;this.default_case=b}k(b,a);b.prototype.codegen=
function(a){var b,c,e,g,v,f,n,h,B;f=this.cases;for(v=0,e=f.length;v<e;v++)c=f[v],c.push(a.newLabel());this.default_case&&(g=a.newLabel());c=a.newLabel();h=this.cases;for(f=0,n=h.length;f<n;f++)b=h[f],e=b[0],v=b[2],e.codegen(a),a.emit(new i.PushVariable("IT")),a.emit(new i.Unequal),a.emit(new i.JumpIfZero(v));this.default_case&&a.emit(new i.Jump(g));a.pushBreakLabel(c);n=this.cases;for(e=0,f=n.length;e<f;e++)B=n[e],b=B[1],v=B[2],a.emitLabel(v),b.codegen(a);this.default_case&&(a.emitLabel(g),this.default_case.codegen(a));
a.popBreakLabel();return a.emitLabel(c)};return b}(r);G=function(a){function b(a,b,c){this.step=a;this.condition=b;this.body=c}k(b,a);b.prototype.codegen=function(a){var b,c;c=a.newLabel();b=a.newLabel();a.emitLabel(c);this.condition&&(this.condition.codegen(a),a.emit(new i.Cast("bool")),a.emit(new i.JumpIfZero(b)));this.body.codegen(a);this.step&&this.step.codegen(a);a.emit(new i.Jump(c));return a.emitLabel(b)};return b}(r);a=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}
k(b,a);return b}(C);w=function(a){function b(a,b){this.func_name=a;this.args=b}k(b,a);b.prototype.codegen=function(a){var b,c,e,g;g=this.args;for(c=0,e=g.length;c<e;c++)b=g[c],b.codegen(a);return a.emit(new i.Call(this.func_name,this.args.length))};return b}(a);D=function(a){function b(a){this.identifier=a}k(b,a);b.prototype.codegen=function(a){return a.emit(new i.PushVariable(this.identifier))};return b}(a);F=function(a){function b(a,b){this.base=a;this.index=b}k(b,a);b.prototype.codegen=function(a){this.index.codegen(a);
this.base.codegen(a);return a.emit(new i.GetIndex)};return b}(a);p=function(a){function b(a,b){this.expression=a;this.type=b}k(b,a);b.prototype.codegen=function(a){var b;this.expression.codegen(a);b=function(){switch(this.type){case "NOOB":return"null";case "TROOF":return"bool";case "NUMBR":return"int";case "NUMBAR":return"float";case "YARN":return"string"}}.call(this);return a.emit(new i.Cast(b,true))};return b}(a);q=function(a){function b(a,b){this.operator=a;this.operands=b}k(b,a);b.prototype.codegen=
function(a){var b,c,e,g;this.operands.reverse();g=this.operands;for(c=0,e=g.length;c<e;c++)b=g[c],b.codegen(a);b=function(){switch(this.operator){case "ALL OF":return new i.All(this.operands.length);case "ANY OF":return new i.Any(this.operands.length);case "SMOOSH":return new i.Concat(this.operands.length);default:throw new u("Unknown infinitary operator.");}}.call(this);return a.emit(b)};return b}(a);x=function(a){function b(a,b,c){this.operator=a;this.left=b;this.right=c}k(b,a);b.prototype.codegen=
function(a){var b;this.right.codegen(a);this.left.codegen(a);b=function(){switch(this.operator){case "SUM OF":return new i.Add;case "DIFF OF":return new i.Subtract;case "PRODUKT OF":return new i.Multiply;case "QUOSHUNT OF":return new i.Divide;case "MOD OF":return new i.Modulo;case "BIGGR OF":return new i.Max;case "SMALLR OF":return new i.Min;case "BOTH OF":return new i.And;case "EITHER OF":return new i.Or;case "WON OF":return new i.Xor;case "BOTH SAEM":return new i.Equal;case "DIFFRINT":return new i.Unequal;
default:throw new u("Unknown binary operator.");}}.call(this);return a.emit(b)};return b}(a);N=function(a){function b(a,b){this.operator=a;this.operand=b}k(b,a);b.prototype.codegen=function(a){var b;this.operand.codegen(a);b=function(){switch(this.operator){case "NOT":return new i.Invert;case "LENGZ OF":return new i.GetLength;case "CHARZ OF":return new i.FromCharCode;case "ORDZ OF":return new i.ToCharCode;default:throw new u("Unknown unary operator.");}}.call(this);return a.emit(b)};return b}(a);
A=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}k(b,a);return b}(a);l=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}k(b,a);b.prototype.codegen=function(a){return a.emit(new i.PushLiteral("null",null))};return b}(A);j=function(a){function b(a){this.value=a}k(b,a);b.prototype.codegen=function(a){return a.emit(new i.PushLiteral("bool",this.value))};return b}(A);B=function(a){function b(a){this.value=a}k(b,a);b.prototype.codegen=function(a){return a.emit(new i.PushLiteral("int",
this.value))};return b}(A);c=function(a){function b(a){this.value=a}k(b,a);b.prototype.codegen=function(a){return a.emit(new i.PushLiteral("float",this.value))};return b}(A);L=function(a){function b(a){this.value=a}k(b,a);b.prototype.codegen=function(a){return a.emit(new i.PushLiteral("string",this.value))};return b}(A);this.LOLCoffee.CodeGenError=u;this.LOLCoffee.CodeGenContext=t;this.LOLCoffee.AST={Node:C,Program:I,Statement:r,FunctionDefinition:g,Declaration:h,Return:J,Input:v,Output:H,Assignment:e,
IndexedAssignment:m,Break:y,Loop:G,Conditional:s,Switch:M,StatementList:K,Expression:a,IdentifierExpression:D,IndexingExpression:F,CastExpression:p,CallExpression:w,UnaryExpression:N,BinaryExpression:x,InfinitaryExpression:q,Literal:A,NullLiteral:l,BoolLiteral:j,IntLiteral:B,FloatLiteral:c,StringLiteral:L}}).call(this);
(function(){var e,x,j,y,w,p,t={}.hasOwnProperty,u=function(e,a){function c(){this.constructor=e}for(var g in a)t.call(a,g)&&(e[g]=a[g]);c.prototype=a.prototype;e.prototype=new c;e.__super__=a.prototype;return e},s=[].indexOf||function(e){for(var a=0,c=this.length;a<c;a++)if(a in this&&this[a]===e)return a;return-1};e=this.LOLCoffee.AST;j=this.LOLCoffee.DEFAULT_VALUES;p=this.LOLCoffee.UNARY_OPERATORS;x=this.LOLCoffee.BINARY_OPERATORS;y=this.LOLCoffee.INFINITARY_OPERATORS;w=function(e){function a(a,
e){this.message="Line "+a+": "+e+"."}u(a,e);a.prototype.name="ParserError";return a}(Error);this.LOLCoffee.Parser=function(){function h(a,c){this.tokens=a;this.function_arities=c!=null?c:{};this._scope_depth=0;this._in_function=false}h.prototype.parseProgram=function(){var a;if(!this.tokens.length)return new e.Program(new e.StatementList([]));if(a=this._nextIs("keyword","HAI"))this._consume(),this._nextIs("endline")||this._consume("float","1.2"),this._consume();var c;for(c=[];this.tokens.length&&
!this._nextIs("keyword","KTHXBYE");)c.push(this.parseStatement());this._nextIs("keyword","KTHXBYE")&&(a||this._error("KTHXBYE is not allowed when HAI is not used"),this._consume("keyword","KTHXBYE"),this._consume("endline"));this.tokens.length!==0&&this._error("Unexpected input after program end");return new e.Program(new e.StatementList(c))};h.prototype.parseFunctionDefinition=function(){var a,c,g;this._consume("keyword","HOW DUZ I");g=this._consume("identifier");a=this.parseFunctionArgs();this._consume("endline");
this.function_arities[g]=a.length;this._in_function=true;for(c=[];!this._nextIs("keyword","IF U SAY SO");)c.push(this.parseStatement());c.push(new e.Return(new e.IdentifierExpression("IT")));c=new e.StatementList(c);this._in_function=false;this._consume("keyword","IF U SAY SO");return new e.FunctionDefinition(g,a,c)};h.prototype.parseFunctionArgs=function(){var a;for(a=[];this._nextIs("keyword","YR");)if(this._consume(),a.push(this._consume("identifier")),this._nextIs("keyword","AN"))this._consume();
else break;return a};h.prototype.parseStatement=function(){var a;this._nextIs("keyword","IM IN YR")?a=this.parseLoopStatement():this._nextIs("keyword","O RLY?")?a=this.parseConditionalStatement():this._nextIs("keyword","WTF?")?a=this.parseSwitchStatement():this._nextIs("keyword","I HAS A")?a=this.parseDeclaration():this._nextIs("keyword","GIMMEH")?a=this.parseInputStatement():this._nextIs("keyword","VISIBLE")?a=this.parseOutputStatement():this._nextIs("keyword","PUTZ")?a=this.parseIndexedAssignment():
this._nextIs("keyword","HOW DUZ I")?(this._in_function&&this._error("Cannot define nested functions"),a=this.parseFunctionDefinition()):this._nextIs("keyword","GTFO")?(this._scope_depth>0?a=new e.Break:this._in_function?a=new e.Return(new e.NullLiteral):this._error("GTFO must be inside a loop, switch, or function"),this._consume()):this._nextIs("keyword","FOUND YR")?(this._consume(),this._in_function||this._error("FOUND YR must be inside a function"),a=new e.Return(this.parseExpression())):a=this.tokens.length>=
2&&this._nextIs("identifier")&&this.tokens[1].is("keyword","R")?this.parseAssignment():this.tokens.length>=2&&this._nextIs("identifier")&&this.tokens[1].is("keyword","IS NOW A")?this.parseCastStatement():new e.Assignment("IT",this.parseExpression());this._consume("endline");return a};h.prototype.parseInputStatement=function(){this._consume("keyword","GIMMEH");return new e.Input(this._consume("identifier"))};h.prototype.parseDeclaration=function(){var a,c,g;this._consume("keyword","I HAS A");g=this._consume("identifier");
c=new e.Declaration(g);return this._nextIs("keyword","ITZ")?(this._consume(),this._nextIs("keyword","A")?(this._consume(),a=j[this.parseType()],a=new e.Assignment(g,a)):a=new e.Assignment(g,this.parseExpression()),new e.StatementList([c,a])):c};h.prototype.parseAssignment=function(){var a;a=this._consume("identifier");this._consume("keyword","R");return new e.Assignment(a,this.parseExpression())};h.prototype.parseIndexedAssignment=function(){var a,c,g;this._consume("keyword","PUTZ");g=this.parseExpression();
this._consume("keyword","INTA");a=this._consume("identifier");this._consume("keyword","AT");c=this.parseExpression();return new e.IndexedAssignment(a,c,g)};h.prototype.parseLoopStatement=function(){var a,c,g,h,m,j,q;this._consume("keyword","IM IN YR");g=this._consume("identifier");m=j=null;this._nextIs("endline")||(!this._nextIs("keyword","UPPIN")&&!this._nextIs("keyword","NERFIN")&&!this._nextIs("identifier")&&this._error("A loop operation must follow the loop label"),m=this._consume(),this._consume("keyword",
"YR"),j=this._consume("identifier"),q=new e.IdentifierExpression(j),a=function(){switch(m){case "UPPIN":return new e.BinaryExpression("SUM OF",q,new e.IntLiteral(1));case "NERFIN":return new e.BinaryExpression("DIFF OF",q,new e.IntLiteral(1));default:return this.function_arities[m]!==1&&this._error("Loop operation must be UPPIN, NERFIN or a unary function"),new e.CallExpression(m,[q])}}.call(this),m=new e.Assignment(j,a),this._nextIs("endline")||(this._nextIs("keyword","WILE")?c=false:this._nextIs("keyword",
"TIL")?c=true:this._error("A loop variable must be followed by WILE or TIL"),this._consume(),h=this.parseExpression(),c&&(h=new e.UnaryExpression("NOT",h))));this._consume("endline");this._scope_depth++;a=function(){var a;for(a=[];!this._nextIs("keyword","IM OUTTA YR");)a.push(this.parseStatement());return a}.call(this);a=new e.StatementList(a);this._scope_depth--;this._consume("keyword","IM OUTTA YR");g!==this._consume("identifier")&&this._error("Mismatched loop label");return new e.Loop(m,h,a)};
h.prototype.parseConditionalStatement=function(){var a,c,g,h,m,j,q;this._consume("keyword","O RLY?");this._consume("endline");this._consume("keyword","YA RLY");this._consume("endline");m=function(a){return function(){return a._nextIs("keyword","MEBBE")||a._nextIs("keyword","NO WAI")||a._nextIs("keyword","OIC")}}(this);h=function(){var a;for(a=[];!m();)a.push(this.parseStatement());return a}.call(this);j=new e.StatementList(h);for(h=[];this._nextIs("keyword","MEBBE");)this._consume(),c=this.parseExpression(),
this._consume("endline"),a=function(){var a;for(a=[];!m();)a.push(this.parseStatement());return a}.call(this),h.push([c,new e.StatementList(a)]);c=[];a=null;this._nextIs("keyword","OIC")||(this._consume("keyword","NO WAI"),this._consume("endline"),(c=function(){var a;for(a=[];!this._nextIs("keyword","OIC");)a.push(this.parseStatement());return a}.call(this))&&(a=new e.StatementList(c)));for(this._consume("keyword","OIC");h.length;)q=h.pop(),c=q[0],g=q[1],c=new e.Assignment("IT",c),a=new e.Conditional(g,
a),a=new e.StatementList([c,a]);return new e.Conditional(j,a)};h.prototype.parseSwitchStatement=function(){var a,c,g,h;this._consume("keyword","WTF?");this._consume("endline");c=[];g=null;for(this._scope_depth++;!this._nextIs("keyword","OIC");)this._nextIs("keyword","OMG")?(this._consume(),a=this.tokens[0].line,h=this.parseLiteral(),h instanceof e.Literal||this._error("OMG value must be a literal",a),this._consume("endline"),a=function(){var a;for(a=[];!this._nextIs("keyword","OMG")&&!this._nextIs("keyword",
"OMGWTF")&&!this._nextIs("keyword","OIC");)a.push(this.parseStatement());return a}.call(this),c.push([h,new e.StatementList(a)])):this._nextIs("keyword","OMGWTF")?(this._consume(),this._consume("endline"),a=function(){var a;for(a=[];!this._nextIs("keyword","OIC");)a.push(this.parseStatement());return a}.call(this),g=new e.StatementList(a)):this._error("Expected OMG, OMGWTF or OIC");this._consume();this._scope_depth--;return new e.Switch(c,g)};h.prototype.parseExpression=function(){var a;return this._nextIs("keyword")?
(a=this.tokens[0].text,a==="MAEK"?this.parseCastExpression():s.call(p,a)>=0?this.parseUnaryExpression():s.call(x,a)>=0?this.parseBinaryExpression():s.call(y,a)>=0?this.parseInfinitaryExpression():a==="WIN"||a==="FAIL"||a==="NOOB"?this.parseLiteral():this._error("Invalid keyword at start of expression")):this._nextIs("identifier")?(a=this.tokens[0].text in this.function_arities?this.parseFunctionCall():new e.IdentifierExpression(this._consume()),this._nextIs("keyword","AT")?(this._consume(),new e.IndexingExpression(a,
this.parseExpression())):a):this.parseLiteral()};h.prototype.parseCastExpression=function(){var a;this._consume("keyword","MAEK");a=this.parseExpression();this._nextIs("keyword","A")&&this._consume();return new e.CastExpression(a,this.parseType())};h.prototype.parseCastStatement=function(){var a,c;c=this._consume("identifier");a=new e.IdentifierExpression(c);this._consume("keyword","IS NOW A");a=new e.CastExpression(a,this.parseType());return new e.Assignment(c,a)};h.prototype.parseType=function(){var a;
a=this._consume("keyword");a in j||this._error("Unknown type");return a};h.prototype.parseLiteral=function(){var a;return this._nextIs("string")?this._createStringLiteral(this._consume()):this._nextIs("int")?new e.IntLiteral(parseInt(this._consume(),10)):this._nextIs("float")?new e.FloatLiteral(parseFloat(this._consume())):this._nextIs("keyword")?(a=this._consume(),a==="WIN"||a==="FAIL"?new e.BoolLiteral(a==="WIN"):a==="NOOB"?new e.NullLiteral:this._error("Unexpected keyword while parsing literal",
a.line)):this._error("Could not parse literal")};h.prototype.parseFunctionCall=function(){var a;a=this._consume("identifier");a in this.function_arities||this._error("Undefined function: "+a);var c,g,h;h=[];for(c=0,g=this.function_arities[a];0<=g?c<g:c>g;0<=g?++c:--c)h.push(this.parseExpression());return new e.CallExpression(a,h)};h.prototype.parseOutputStatement=function(){this._consume("keyword","VISIBLE");var a;for(a=[];!this._nextIs("keyword","!")&&!this._nextIs("endline");)a.push(this.parseExpression());
this._nextIs("keyword","!")?this._consume():a.push(new e.StringLiteral("\n"));return new e.Output(new e.InfinitaryExpression("SMOOSH",a))};h.prototype.parseUnaryExpression=function(){var a;a=this._consume("keyword");s.call(p,a)<0&&this._error("Unknown unary operator: "+a);return new e.UnaryExpression(a,this.parseExpression())};h.prototype.parseBinaryExpression=function(){var a,c,g;c=this._consume("keyword");s.call(x,c)<0&&this._error("Unknown binary operator: "+c);a=this.parseExpression();this._nextIs("keyword",
"AN")&&this._consume();g=this.parseExpression();return new e.BinaryExpression(c,a,g)};h.prototype.parseInfinitaryExpression=function(){var a;a=this._consume("keyword");s.call(y,a)<0&&this._error("Unknown infinitary operator: "+a);var c;for(c=[];!this._nextIs("keyword","MKAY")&&!this._nextIs("endline");)this._nextIs("keyword","AN")&&this._consume(),c.push(this.parseExpression());this._nextIs("keyword","MKAY")&&this._consume();return new e.InfinitaryExpression(a,c)};h.prototype._createStringLiteral=
function(a){var c,g,h,j,p,q;/^".*"$/.test(a)||this._error("Invalid string literal: "+a);a=a.slice(1,-1);j=[];c=[];for(h=p=0,q=a.length;p<q;h=++p)if(g=a[h],g===":")switch(g=a[++h],g){case ")":c.push("\n");break;case ">":c.push("\t");break;case "o":c.push("g");break;case '"':c.push('"');break;case ":":c.push(":");break;case "(":g=a.slice(h).match(/\(([\da-fA-F]+)\)/);c.push(String.fromCharCode(parseInt(g[1],16)));break;case "{":g=a.slice(h).match(/\{([a-zA-Z]\w*)\}/);c.length&&j.push(new e.StringLiteral(c.join("")));
j.push(new e.IdentifierExpression(g[1]));c=[];break;case "[":this._error("Unicode name embedding not implemented yet: "+a)}else c.push(g);return j.length?(c.length&&j.push(new e.StringLiteral(c.join(""))),new e.InfinitaryExpression("SMOOSH",j)):new e.StringLiteral(c.join(""))};h.prototype._consume=function(a,c){var e,h;if(!(a!=null||c!=null))return this.tokens.shift().text;if(this._nextIs(a,c))return this._consume();else throw this.tokens.length===0?(h="(last)",e="(end of input)"):(h=this.tokens[0].line,
e=""+this.tokens[0].type+"("+this.tokens[0].text+")"),new w(h,"Expected: "+(c!=null?""+a+"('"+(c||"")+"')":a)+"; Got: "+e);};h.prototype._nextIs=function(a,c){return this.tokens.length&&this.tokens[0].is(a,c)};h.prototype._error=function(a,c){c?a+=", near "+this.tokens[0].type+":'"+this.tokens[0].text+"'":c=this.tokens.length?this.tokens[0].line:c="(last)";throw new w(c,a);};return h}();this.LOLCoffee.ParserError=w}).call(this);
(function(){var e,x,j,y,w,p,t,u,s,h,a,c,g,D,m={}.hasOwnProperty,F=function(a,c){function e(){this.constructor=a}for(var g in c)m.call(c,g)&&(a[g]=c[g]);e.prototype=c.prototype;a.prototype=new e;a.__super__=c.prototype;return a},q=[].indexOf||function(a){for(var c=0,e=this.length;c<e;c++)if(c in this&&this[c]===a)return c;return-1};p=this.LOLCoffee.KEYWORDS;w=/^-?\d+/;x=/^-?(\d+\.\d*|\.\d+)/;j=/^[a-zA-Z]\w*/;s=/^OBTW\b[^]*?\bTLDR\b/;e=/^BTW\b.*/;u=/^(\u2026|\.\.\.)[ \t\v]*(\r\n|\r|\n)/;h=/^(\r\n|\r|\n|,)/;
y=/^[ \t\v]+/;a=/^"(?::(?:[)>o":]|\([\dA-Fa-f]+\)|\{[A-Za-z]\w*\}|\[[^\[\]]+\])|[^":])*"/;p=function(){var a,c,e;e=[];for(a=0,c=p.length;a<c;a++)D=p[a],e.push(D.replace(/\?/g,"\\?").replace(/\s/g,"[ \\t\\v]+"));return e}();t=RegExp("^("+p.join("|")+")(?=$|\\b|\\W)");g=function(a){function c(a,e){this.message="Line "+a+": "+e+"."}F(c,a);c.prototype.name="TokenizerError";return c}(Error);c=function(){function a(c,e,h){this.line=c;this.type=e;this.text=h!=null?h:"";if(q.call(a.prototype.TYPES,e)<0)throw new g(c,
"Invalid token type: "+e);}a.prototype.is=function(a,c){return this.type===a&&(c===void 0||this.text===c)};a.prototype.TYPES="endline,keyword,identifier,int,float,string".split(",");return a}();this.LOLCoffee.Tokenizer=function(){function m(a){this.text=a;this.tokens=[];this.line=[];this.line_index=1}m.prototype.tokenize=function(){for(var c,g;this.text;){if(!(g=this.text.match(y)))if(g=this.text.match(u))h.test(this.text.slice(g[0].length))&&this._error("Cannot have an empty line after line continuation");
else if(g=this.text.match(h))this._flushLine();else if(!(g=this.text.match(e)))(g=this.text.match(s))?this.line.length&&this._error("Multiline comments must start on a new line"):(g=this.text.match(t))?this._emit("keyword",g[0].replace(/\s+/g," ")):(g=this.text.match(j))?this._emit("identifier",g[0]):(g=this.text.match(x))?this._emit("float",g[0]):(g=this.text.match(w))?this._emit("int",g[0]):(g=this.text.match(a))?this._emit("string",g[0]):(c=this.text.match(/^.*/)[0],this._error("Unrecognized sequence at: "+
c));(c=g[0].match(/\r\n|\r|\n/g))&&(this.line_index+=c.length);this.text=this.text.slice(g[0].length)}this._flushLine();return this.tokens};m.prototype._flushLine=function(){if(this.line.length)this.tokens=this.tokens.concat(this.line),this.tokens.push(new c(this.line_index,"endline"));return this.line=[]};m.prototype._emit=function(a,e){return this.line.push(new c(this.line_index,a,e))};m.prototype._error=function(a){throw new g(this.line_index,a);};return m}();this.LOLCoffee.TokenizerError=g}).call(this);
