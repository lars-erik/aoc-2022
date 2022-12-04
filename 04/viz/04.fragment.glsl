uniform float u_time;
uniform float u_speed;
uniform vec3 iResolution;
uniform float width;

uniform vec4 pairs[1000];

varying vec2 fragCoord;

void main () {
    vec2 uv = (fragCoord-.5) * iResolution.xy/iResolution.y*2.;
    vec3 color = vec3(0.0);
    float x = fragCoord.x * iResolution.x;
    int y = int(((fragCoord.y*-1. + u_time / 10.) / 20.) * iResolution.y);
    vec4 pair = pairs[y];

    bool isFullOverlapA = pair.x >= pair.z && pair.x <= pair.w && pair.y >= pair.z && pair.y <= pair.w;
    bool isFullOverlapB = pair.z >= pair.x && pair.z <= pair.y && pair.w >= pair.x && pair.w <= pair.y;
    bool isFullOverlap = isFullOverlapA || isFullOverlapB;

    bool isOverlapA = pair.x >= pair.z && pair.x <= pair.w || pair.y >= pair.z && pair.y <= pair.w;
    bool isOverlapB = pair.z >= pair.x && pair.z <= pair.y || pair.w >= pair.x && pair.w <= pair.y;
    bool isOverlap = isOverlapA || isOverlapB;

    vec3 lineCol = isFullOverlap
        ? vec3(1., 0.02, 0.05)
        : isOverlap
        ? vec3(.99, .95, 0.35)
        : vec3(1.);

    if (y >= 0 && y < 1000 && x >= pair.x && x <= pair.y + width - 2.) {
        color = mix(color, lineCol, .5);
    }
    
    if (y >= 0 && y < 1000 && x >= pair.z && x <= pair.w + width - 2.) {
        color = mix(color, lineCol, .5);
    }

    gl_FragColor = vec4(color, 1.);
}