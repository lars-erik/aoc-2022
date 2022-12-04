varying vec2 fragCoord;
void main () {
    fragCoord = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);
}