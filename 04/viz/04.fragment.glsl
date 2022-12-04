uniform float u_time;
uniform float u_speed;
uniform vec3 iResolution;

uniform vec4 pairs[1000];

varying vec2 fragCoord;

void main () {
    vec2 uv = (fragCoord-.5) * iResolution.xy/iResolution.y*2.;
    vec3 color = vec3(0.0);
    float x = fragCoord.x * iResolution.x - 100.;
    int y = int(fragCoord.y * iResolution.y);
    vec4 pair = pairs[y - 100];

    bool isFullOverlapA = pair.x >= pair.z && pair.x <= pair.w && pair.y >= pair.z && pair.y <= pair.w;
    bool isFullOverlapB = pair.z >= pair.x && pair.z <= pair.y && pair.w >= pair.x && pair.w <= pair.y;
    bool isFullOverlap = isFullOverlapA || isFullOverlapB;

    bool isOverlapA = pair.x >= pair.z && pair.x <= pair.w || pair.y >= pair.z && pair.y <= pair.w;
    bool isOverlapB = pair.z >= pair.x && pair.z <= pair.y || pair.w >= pair.x && pair.w <= pair.y;
    bool isOverlap = isOverlapA || isOverlapB;

    vec3 lineCol = isFullOverlap
        ? vec3(1., 0., 0.)
        : isOverlap
        ? vec3(1., 1., 0.)
        : vec3(1.);

    if (x >= pair.x && x <= pair.y) {
        color = mix(color, lineCol, .5);
    }
    
    if (x >= pair.z && x <= pair.w) {
        color = mix(color, lineCol, .5);
    }

    gl_FragColor = vec4(color, 1.);
}