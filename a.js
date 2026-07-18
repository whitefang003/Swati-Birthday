function initengahan(){
  kadoIn.style = "display:none";
  ket.style = "display:none";
  Content.style = "opacity:1;margin-top:0";
  bodyblur.style = "opacity:.7";
  wallpaper.style = "transform: scale(1.5);";
}

async function mulainama() {
  bodyblur.style = "opacity:0";
  wallpaper.style = "transform: scale(1);";
  fotostiker.style = "display:inline-flex;";
  setTimeout(ftmuncul, 200);
  setTimeout(kethalo, 500);
}

function ftmuncul() {
  if (ftganti == 0) { fotostiker.src = deffotostiker; }
  if (ftganti == 1) { fotostiker.src = fotostiker1.src; }
  if (ftganti == 2) { fotostiker.src = fotostiker2.src; }
  if (ftganti == 3) { fotostiker.src = fotostiker3.src; }
  if (ftganti == 4) { fotostiker.src = fotostiker4.src; }
  fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
}

function fthilang() {
  fotostiker.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";
}

function jjfoto() {
  fotostiker.style.animation = "rto .8s infinite alternate";
}

function bqmuncul() {
  bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";
  mulaiketik1();
  fungsi = 1;
}

function bqhilang() {
  wallpaper.style = "transform: scale(2);";
  bodyblur.style = "opacity:.3";
  bq.style = "position:relative;transition:all .7s ease;";
}

function kethalo() {
  new TypeIt("#halo", {
    strings: ["" + vketikhalo],
    startDelay: 50,
    speed: 40,
    waitUntilVisible: true,
    afterComplete: function () {
      halo.innerHTML = vketikhalo;
      setTimeout(bqmuncul, 200);
    },
  }).go();
}

function tombol() {
  wallpaper.style = "transform: scale(1);";
  Tombol.style = "opacity:1;transform: scale(1);";
  fungsi = 1;
}

document.getElementById("By").onclick = function() {
  if (fungsi == 1) { pertanyaan(); }
  if (fungsi == 2) { menuju(); }
}

async function menuju(){
  await swals.fire('Yay!', 'And here comes another birthday surprise for you!', 'success');
  window.location = "./love/index.html?name=" + encodeURIComponent(nama);
}

vketik1 = kalimat.innerHTML;
kalimat.innerHTML = "";
function mulaiketik1(){
  new TypeIt("#kalimat", {
    strings: ["" + vketik1],
    startDelay: 400,
    speed: 20,
    cursor: false,
    deleteSpeed: 20,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      aktiopsL();
    },
  }).go();
}

opsLclick = 0;
opsLcheck = 0;
defopsL = opsL.innerHTML;
document.getElementById("bq").onclick = function() {
  if (opsLclick == 1) {
    if (opsLcheck == 1) { setTimeout(aktipesan1, 400); }
    if (opsLcheck == 2) { mulaiketik3(); }
    if (opsLcheck == 3) { mulaiketik4(); }
    if (opsLcheck == 4) { mulaiketik5(); }
    if (opsLcheck == 5) { kethalo2(); }
    otomatis();
    opsL.style.opacity = "0";
    opsLclick = 0;
  }
}

function aktiopsL() {
  opsL.innerHTML = defopsL;
  opsL.style.opacity = ".8";
  opsLclick = 1;
  opsLcheck += 1;
}

function gantiopsL() {
  opsL.innerHTML = "[ Tap one of the birthday icons! ]";
  opsL.style.opacity = ".8";
}

function otomatis() {
  kalimat.style = "opacity:0";
  setTimeout(otolanj, 400);
}

function otolanj() {
  kalimat.style = "opacity:1";
}

function aktipesan1() {
  kalimat.innerHTML = pesan1.innerHTML;
  kolombaru.style = "position:relative;opacity:1;transform:scale(1);";
}

vketik2 = pesan2.innerHTML;
vketik3 = pesan3.innerHTML;
function aktipesan2(){
  wallpaper.style = "transform: scale(1.5);";
  kolombaru.style = "";
  kalimat.innerHTML = "";
  new TypeIt("#kalimat", {
    strings: ["" + vketik2, "" + vketik3],
    startDelay: 20,
    speed: 30,
    cursor: true,
    deleteSpeed: 30,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      kalimat.innerHTML = vketik3;
      setTimeout(aktipesan4, 700);
    },
  }).go();
}

vketik4 = pesan4.innerHTML;
pesan4.innerHTML = "";
function aktipesan4(){
  wallpaper.style = "transform: scale(1);";
  fthilang();
  ftganti = 2;
  setTimeout(ftmuncul, 300);
  new TypeIt("#pesan4", {
    strings: ["" + vketik4],
    startDelay: 1,
    speed: 52,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      pesan4.innerHTML = vketik4;
      setTimeout(aktipesan5, 700);
    },
  }).go();
}

vketik5 = pesan5.innerHTML;
pesan5.innerHTML = "";
function aktipesan5(){
  wallpaper.style = "transform: scale(1.5);";
  fthilang();
  ftganti = 3;
  setTimeout(ftmuncul, 300);
  new TypeIt("#pesan5", {
    strings: ["" + vketik5],
    startDelay: 1,
    speed: 52,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      pesan5.innerHTML = vketik5 + " 😊";
      setTimeout(aktipesan6, 700);
    },
  }).go();
}

vketik6 = pesan6.innerHTML;
pesan6.innerHTML = "";
function aktipesan6(){
  wallpaper.style = "transform: scale(1);";
  fthilang();
  ftganti = 4;
  setTimeout(ftmuncul, 300);
  new TypeIt("#pesan6", {
    strings: ["" + vketik6],
    startDelay: 1,
    speed: 52,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      pesan6.innerHTML = vketik6;
      setTimeout(tombol, 400);
    },
  }).go();
}

var slov = 0;
document.getElementById("lv1").onclick = function() { lv1.style = "opacity:0"; slov += 1; this.onclick = null; checkslov(); }
document.getElementById("lv2").onclick = function() { lv2.style = "opacity:0"; slov += 1; this.onclick = null; checkslov(); }
document.getElementById("lv3").onclick = function() { lv3.style = "opacity:0"; slov += 1; this.onclick = null; checkslov(); }
document.getElementById("lv4").onclick = function() { lv4.style = "opacity:0"; slov += 1; this.onclick = null; checkslov(); }

function checkslov() {
  if (slov == 4) {
    kolombaru.style = "position:relative;transform:scale(1)";
    fthilang();
    ftganti = 1;
    setTimeout(ftmuncul, 300);
    otomatis();
    setTimeout(aktipesan2, 400);
  }
}



















var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Initialize the GL context
var gl = canvas.getContext('webgl');
if(!gl){
  console.error("Unable to initialize WebGL.");
}

//Time
var time = 0.0;

//************** Shader sources **************

var vertexSource = `
attribute vec2 position;
void main() {
	gl_Position = vec4(position, 0.0, 1.0);
}
`;

var fragmentSource = `
precision highp float;

uniform float width;
uniform float height;
vec2 resolution = vec2(width, height);

uniform float time;

#define POINT_COUNT 8

vec2 points[POINT_COUNT];
const float speed = -0.5;
const float len = 0.25;
float intensity = 1.3;
float radius = 0.008;

//https://www.shadertoy.com/view/MlKcDD
//Signed distance to a quadratic bezier
float sdBezier(vec2 pos, vec2 A, vec2 B, vec2 C){    
	vec2 a = B - A;
	vec2 b = A - 2.0*B + C;
	vec2 c = a * 2.0;
	vec2 d = A - pos;

	float kk = 1.0 / dot(b,b);
	float kx = kk * dot(a,b);
	float ky = kk * (2.0*dot(a,a)+dot(d,b)) / 3.0;
	float kz = kk * dot(d,a);      

	float res = 0.0;

	float p = ky - kx*kx;
	float p3 = p*p*p;
	float q = kx*(2.0*kx*kx - 3.0*ky) + kz;
	float h = q*q + 4.0*p3;

	if(h >= 0.0){ 
		h = sqrt(h);
		vec2 x = (vec2(h, -h) - q) / 2.0;
		vec2 uv = sign(x)*pow(abs(x), vec2(1.0/3.0));
		float t = uv.x + uv.y - kx;
		t = clamp( t, 0.0, 1.0 );

		// 1 root
		vec2 qos = d + (c + b*t)*t;
		res = length(qos);
	}else{
		float z = sqrt(-p);
		float v = acos( q/(p*z*2.0) ) / 3.0;
		float m = cos(v);
		float n = sin(v)*1.732050808;
		vec3 t = vec3(m + m, -n - m, n - m) * z - kx;
		t = clamp( t, 0.0, 1.0 );

		// 3 roots
		vec2 qos = d + (c + b*t.x)*t.x;
		float dis = dot(qos,qos);
        
		res = dis;

		qos = d + (c + b*t.y)*t.y;
		dis = dot(qos,qos);
		res = min(res,dis);
		
		qos = d + (c + b*t.z)*t.z;
		dis = dot(qos,qos);
		res = min(res,dis);

		res = sqrt( res );
	}
    
	return res;
}


//http://mathworld.wolfram.com/HeartCurve.html
vec2 getHeartPosition(float t){
	return vec2(16.0 * sin(t) * sin(t) * sin(t),
							-(13.0 * cos(t) - 5.0 * cos(2.0*t)
							- 2.0 * cos(3.0*t) - cos(4.0*t)));
}

//https://www.shadertoy.com/view/3s3GDn
float getGlow(float dist, float radius, float intensity){
	return pow(radius/dist, intensity);
}

float getSegment(float t, vec2 pos, float offset, float scale){
	for(int i = 0; i < POINT_COUNT; i++){
		points[i] = getHeartPosition(offset + float(i)*len + fract(speed * t) * 6.28);
	}
    
	vec2 c = (points[0] + points[1]) / 2.0;
	vec2 c_prev;
	float dist = 10000.0;
    
	for(int i = 0; i < POINT_COUNT-1; i++){
		//https://tinyurl.com/y2htbwkm
		c_prev = c;
		c = (points[i] + points[i+1]) / 2.0;
		dist = min(dist, sdBezier(pos, scale * c_prev, scale * points[i], scale * c));
	}
	return max(0.0, dist);
}

void main(){
	vec2 uv = gl_FragCoord.xy/resolution.xy;
	float widthHeightRatio = resolution.x/resolution.y;
	vec2 centre = vec2(0.5, 0.5);
	vec2 pos = centre - uv;
	pos.y /= widthHeightRatio;
	//Shift upwards to centre heart
	pos.y += 0.02;
	float scale = 0.000015 * height;
	
	float t = time;
    
	//Get first segment
  float dist = getSegment(t, pos, 0.0, scale);
  float glow = getGlow(dist, radius, intensity);
  
  vec3 col = vec3(0.0);

	//White core
  col += 10.0*vec3(smoothstep(0.003, 0.001, dist));
  //Pink glow
  col += glow * vec3(1.0,0.05,0.3);
  
  //Get second segment
  dist = getSegment(t, pos, 3.4, scale);
  glow = getGlow(dist, radius, intensity);
  
  //White core
  col += 10.0*vec3(smoothstep(0.003, 0.001, dist));
  //Blue glow
  col += glow * vec3(0.1,0.4,1.0);
        
	//Tone mapping
	col = 1.0 - exp(-col);

	//Gamma
	col = pow(col, vec3(0.4545));

	//Output to screen
 	gl_FragColor = vec4(col,1.0);
}
`;

//************** Utility functions **************

window.addEventListener('resize', onWindowResize, false);

function onWindowResize(){
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
	gl.viewport(0, 0, canvas.width, canvas.height);
  gl.uniform1f(widthHandle, window.innerWidth);
  gl.uniform1f(heightHandle, window.innerHeight);
}


//Compile shader and combine with source
function compileShader(shaderSource, shaderType){
  var shader = gl.createShader(shaderType);
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
  	throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
  }
  return shader;
}

//From https://codepen.io/jlfwong/pen/GqmroZ
//Utility to complain loudly if we fail to find the attribute/uniform
function getAttribLocation(program, name) {
  var attributeLocation = gl.getAttribLocation(program, name);
  if (attributeLocation === -1) {
  	throw 'Cannot find attribute ' + name + '.';
  }
  return attributeLocation;
}

function getUniformLocation(program, name) {
  var attributeLocation = gl.getUniformLocation(program, name);
  if (attributeLocation === -1) {
  	throw 'Cannot find uniform ' + name + '.';
  }
  return attributeLocation;
}

//************** Create shaders **************

//Create vertex and fragment shaders
var vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER);
var fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER);

//Create shader programs
var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.useProgram(program);

//Set up rectangle covering entire canvas 
var vertexData = new Float32Array([
  -1.0,  1.0, 	// top left
  -1.0, -1.0, 	// bottom left
   1.0,  1.0, 	// top right
   1.0, -1.0, 	// bottom right
]);

//Create vertex buffer
var vertexDataBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

// Layout of our data in the vertex buffer
var positionHandle = getAttribLocation(program, 'position');

gl.enableVertexAttribArray(positionHandle);
gl.vertexAttribPointer(positionHandle,
  2, 				// position is a vec2 (2 values per component)
  gl.FLOAT, // each component is a float
  false, 		// don't normalize values
  2 * 4, 		// two 4 byte float components per vertex (32 bit float is 4 bytes)
  0 				// how many bytes inside the buffer to start from
  );

//Set uniform handle
var timeHandle = getUniformLocation(program, 'time');
var widthHandle = getUniformLocation(program, 'width');
var heightHandle = getUniformLocation(program, 'height');

gl.uniform1f(widthHandle, window.innerWidth);
gl.uniform1f(heightHandle, window.innerHeight);

var lastFrame = Date.now();
var thisFrame;

function draw(){
	
  //Update time
	thisFrame = Date.now();
  time += (thisFrame - lastFrame)/1000;	
	lastFrame = thisFrame;

	//Send uniforms to program
  gl.uniform1f(timeHandle, time);
  //Draw a triangle strip connecting vertices 0-4
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  requestAnimationFrame(draw);
}

draw();
