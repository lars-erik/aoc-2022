var g = Object.defineProperty;
var O = (e, i, a) => i in e ? g(e, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[i] = a;
var t = (e, i, a) => (O(e, typeof i != "symbol" ? i + "" : i, a), a);
import { a as y, S as b, O as C, W as z, P as F, M as S, C as _, V as R, D as W, b as M } from "./parsing.8b6b88a7.js";
var A = `varying vec2 fragCoord;
void main () {
    fragCoord = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);
}`, B = `uniform float u_time;
uniform float u_speed;
uniform vec3 iResolution;
uniform float width;

uniform vec4 pairs[1000];

varying vec2 fragCoord;

void main () {
    vec2 uv = (fragCoord-.5) * iResolution.xy/iResolution.y*2.;
    vec3 color = vec3(0.0);
    float x = fragCoord.x * iResolution.x;
    int y = int(((fragCoord.y*-1. + u_time / 10.) / width) * iResolution.y);
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
}`;
const u = class {
  constructor(i, a) {
    t(this, "isFullOverlap", (i) => this.x1 >= i.x1 && this.x1 <= i.x2 && this.x2 >= i.x1 && this.x2 <= i.x2);
    t(this, "isOverlap", (i) => this.x1 >= i.x1 && this.x1 <= i.x2 || this.x2 >= i.x1 && this.x2 <= i.x2);
    this.x1 = i[0] || i, this.x2 = i[1] || a;
  }
};
let o = u;
t(o, "fromString", (i) => new u(i.split("-").map(Number)));
const v = class {
  constructor(i, a) {
    t(this, "hasFullOverlap", () => this.a.isFullOverlap(this.b) || this.b.isFullOverlap(this.a));
    t(this, "hasOverlap", () => this.a.isOverlap(this.b) || this.b.isOverlap(this.a));
    this.a = i[0] || i, this.b = i[1] || a;
  }
};
let s = v;
t(s, "fromString", (i) => new v(i.split(",").map(o.fromString)));
const j = (e) => y(e).map(s.fromString), E = `33-62,26-62
49-89,49-88
2-4,3-92
7-98,7-98
6-74,6-73
78-79,13-78
90-95,95-95
62-66,56-67
2-93,4-92
12-64,11-11
7-83,5-91
20-87,20-88
29-93,26-92
19-20,20-31
62-62,7-63
9-83,9-84
8-27,28-95
6-49,6-48
7-71,65-71
90-96,19-89
13-97,98-99
17-75,75-76
90-91,44-90
5-62,24-92
45-76,46-76
9-22,23-23
93-94,35-93
32-34,33-48
43-44,6-44
79-86,80-86
7-7,6-93
77-82,83-91
59-60,32-59
7-27,7-7
2-23,22-23
35-35,6-36
32-34,11-33
24-35,28-34
37-62,62-64
9-18,18-18
8-53,2-7
2-99,1-99
15-95,65-94
17-71,6-18
38-71,13-63
6-77,4-9
1-99,2-98
13-67,13-66
45-87,45-86
13-59,12-82
18-79,17-19
83-83,36-83
38-77,38-76
17-17,16-41
78-94,79-94
36-87,6-91
30-38,29-29
54-56,22-55
43-43,37-43
2-99,1-1
16-88,15-17
13-14,2-14
26-57,26-58
19-86,19-86
97-98,67-97
1-92,2-92
1-3,3-77
25-54,54-54
44-53,46-60
16-74,74-74
4-7,8-28
96-99,95-99
37-70,36-80
59-68,60-60
47-95,29-87
91-91,68-91
18-91,19-90
16-27,5-28
94-96,63-95
3-20,19-73
18-74,8-80
6-71,3-72
52-71,53-93
6-8,7-97
68-77,22-78
29-76,30-30
13-98,13-99
7-73,3-74
64-98,16-74
20-78,9-21
17-65,18-18
71-96,27-96
55-91,46-56
93-96,5-92
15-15,14-77
18-49,17-49
77-78,70-77
31-88,31-87
38-85,57-86
39-87,87-87
26-77,76-77
1-1,3-47
5-96,95-96
25-78,15-60
11-84,84-84
22-30,22-30
6-85,83-86
32-40,32-39
4-97,4-97
34-90,26-91
23-68,23-67
41-51,30-33
21-83,22-82
21-85,1-74
72-74,6-73
6-6,5-94
10-83,10-83
11-85,5-12
81-82,82-82
4-82,82-82
25-89,25-25
70-79,74-78
17-51,26-50
7-70,6-70
21-81,21-80
72-88,71-71
68-72,21-73
74-95,73-75
15-94,12-13
47-96,48-96
58-70,10-58
69-69,63-69
7-95,7-94
13-66,13-65
1-18,2-18
4-90,4-89
24-84,23-23
89-90,14-89
8-10,7-16
16-18,21-96
19-30,1-29
78-99,9-97
2-9,6-19
58-82,53-85
51-96,51-97
11-70,69-70
1-2,2-95
93-95,41-94
95-95,10-96
18-18,17-48
1-99,2-2
66-68,67-98
5-7,6-90
49-94,50-66
12-41,2-91
10-93,93-94
27-51,27-52
9-15,15-99
16-47,15-48
11-89,25-85
39-77,7-64
9-91,91-92
65-66,22-66
9-83,9-31
8-78,8-77
2-98,2-99
33-53,25-50
11-91,9-97
46-90,2-91
69-70,70-95
39-53,15-39
63-85,64-85
15-82,13-13
38-55,56-56
14-34,14-33
28-47,24-46
8-98,7-98
24-35,27-98
44-67,45-64
65-90,65-91
23-89,21-24
1-2,4-48
12-97,13-89
11-91,41-90
72-72,11-72
5-61,6-75
25-77,25-78
1-98,5-96
22-57,22-56
69-92,25-69
6-85,5-85
46-48,19-47
19-25,24-94
6-96,3-12
18-67,67-68
42-43,42-96
95-95,74-95
20-38,37-68
2-72,2-73
21-23,25-71
4-29,4-29
87-88,41-88
59-66,66-92
54-95,54-96
5-88,88-88
73-74,46-74
12-13,12-41
5-11,7-12
62-64,18-63
98-98,2-98
69-77,28-70
7-62,29-61
7-7,6-98
35-94,9-35
77-78,77-90
10-10,9-86
26-32,4-26
79-92,27-85
40-88,41-82
20-58,15-59
64-97,63-65
6-23,2-24
11-15,13-14
16-88,15-26
35-77,36-77
47-94,25-48
17-54,5-53
97-98,98-98
9-87,35-86
46-89,2-46
11-49,33-48
41-80,40-98
11-95,10-10
22-71,11-71
14-63,64-64
49-51,50-97
1-81,82-82
36-93,1-93
38-80,38-39
41-66,10-65
20-44,19-21
42-98,41-98
65-78,66-77
2-5,4-96
15-62,62-63
7-85,6-8
46-82,45-81
45-47,46-85
18-39,37-44
40-64,63-64
24-49,24-48
64-94,63-63
22-23,5-23
13-96,12-12
43-75,43-75
15-96,70-95
42-43,42-53
64-66,42-77
86-94,88-93
35-94,9-93
5-98,6-6
21-97,20-20
7-99,8-8
12-12,11-88
6-48,7-48
60-73,61-73
28-56,27-79
39-61,2-64
78-78,28-79
35-97,13-96
8-97,9-90
6-96,4-4
23-98,22-97
11-78,11-79
37-92,37-92
33-66,32-67
27-88,87-88
32-89,90-90
7-96,7-97
10-98,10-10
2-83,82-84
2-13,13-82
23-27,22-24
46-85,47-89
16-71,70-71
4-79,3-76
96-96,1-96
15-89,15-88
22-32,26-82
21-21,20-21
5-67,6-68
46-60,25-61
56-95,34-99
11-74,11-75
2-14,14-97
4-97,11-92
19-34,18-18
4-20,5-33
91-91,68-91
2-99,1-2
68-87,68-86
3-98,3-3
91-99,9-90
21-58,26-56
33-70,34-64
81-81,82-83
49-66,48-50
10-11,11-62
7-92,29-83
19-89,88-89
7-42,42-90
60-76,76-99
51-53,52-91
33-56,34-57
5-88,46-87
15-96,15-95
8-27,27-95
96-98,38-96
9-40,41-43
68-83,68-82
5-11,7-93
50-50,8-50
26-69,68-70
23-44,13-82
90-94,93-95
1-95,1-96
29-31,30-83
49-81,48-50
41-70,42-70
10-73,11-72
9-10,16-18
72-73,1-73
47-71,47-48
4-97,23-96
10-96,10-96
15-43,43-80
57-82,18-57
4-19,2-2
46-81,38-82
55-72,24-55
63-64,60-64
12-99,22-97
31-62,53-67
41-87,67-86
30-30,31-82
20-34,19-35
76-77,43-77
25-52,32-53
50-95,51-98
50-50,49-75
4-91,90-90
61-89,60-89
4-93,4-94
22-93,22-94
50-66,49-58
22-89,23-88
20-94,33-93
12-30,11-71
11-54,11-75
6-60,5-6
36-45,3-46
84-96,31-83
25-25,25-29
17-18,17-30
45-69,45-70
64-98,65-65
5-60,16-59
81-81,25-81
23-69,66-70
34-97,35-96
7-90,6-97
76-79,75-75
27-97,27-96
14-34,23-32
28-95,94-96
36-68,36-67
25-27,26-96
93-95,67-94
29-91,30-30
57-58,29-58
44-65,43-45
2-16,16-34
15-99,16-43
33-62,33-62
1-79,1-80
60-96,60-97
28-28,28-50
90-94,33-89
14-51,13-15
3-76,3-77
21-48,25-87
23-25,24-97
74-76,74-75
34-36,35-74
78-96,79-96
3-94,5-90
81-95,81-94
62-70,61-73
55-55,20-55
88-90,6-89
88-88,3-89
14-99,13-15
6-78,29-77
63-73,72-73
38-38,38-87
5-93,5-94
66-90,45-94
42-68,41-43
62-90,86-90
16-50,15-31
80-81,63-81
49-62,38-50
70-90,53-96
19-19,20-81
7-16,15-75
9-98,92-97
29-95,28-95
99-99,1-97
39-96,40-40
1-1,2-99
24-28,7-23
9-57,8-74
27-31,26-27
6-93,5-93
39-89,38-40
43-84,84-85
3-69,2-2
24-88,87-88
6-97,2-96
5-93,4-5
43-43,44-86
17-73,17-72
85-86,28-85
9-35,35-36
14-93,13-22
62-64,30-63
71-71,48-71
48-88,49-78
13-57,58-96
21-81,10-19
37-39,36-37
14-17,10-15
23-74,73-75
4-29,1-5
2-96,95-99
13-82,12-13
51-98,51-97
21-21,20-37
17-68,17-69
32-49,68-74
55-73,49-74
11-53,10-12
2-4,3-99
55-56,53-56
14-24,13-25
19-58,18-58
62-87,62-86
11-93,93-94
44-64,43-80
2-82,3-82
37-38,33-38
97-98,18-98
12-47,46-47
5-95,4-96
22-98,16-21
1-70,69-70
8-93,8-92
36-89,36-90
84-96,82-86
38-38,37-89
77-96,96-96
80-82,23-81
48-92,14-49
80-80,5-80
49-80,20-81
77-85,76-78
6-6,5-90
42-97,42-96
98-99,45-99
25-95,94-96
1-66,7-66
43-44,44-65
14-71,3-82
4-11,4-49
31-43,33-42
65-99,9-66
48-98,98-98
4-78,5-77
21-38,22-22
5-99,99-99
1-1,3-17
53-97,17-54
8-57,7-7
83-95,25-96
43-49,42-42
80-90,81-90
33-65,34-60
48-65,11-66
4-99,6-92
7-60,6-60
3-47,47-85
27-59,26-28
57-76,73-77
52-60,51-72
2-99,98-99
37-70,70-70
19-95,5-12
1-98,1-2
84-89,39-85
24-89,89-98
15-16,15-24
10-10,9-77
9-39,8-58
13-73,13-74
32-60,13-61
55-70,57-65
54-56,42-55
2-27,11-26
9-83,8-85
39-40,12-39
50-52,15-51
97-97,4-97
58-59,2-58
36-37,37-85
32-77,31-33
73-96,6-94
84-86,52-85
24-26,25-75
2-79,1-2
36-36,35-68
6-50,5-50
6-94,94-95
6-28,3-29
53-53,33-53
5-98,95-97
33-91,34-34
18-83,84-98
41-41,3-41
34-90,89-90
73-73,4-73
56-57,57-78
2-4,4-94
61-70,53-71
73-74,74-74
3-99,5-98
7-66,66-73
4-13,12-13
71-79,70-80
58-93,57-59
7-90,8-90
53-94,22-53
9-47,10-47
19-99,37-98
55-55,55-55
48-84,28-85
57-90,57-88
70-70,3-71
6-68,6-68
1-4,5-97
12-42,13-13
2-78,2-77
29-61,7-86
71-71,43-71
63-74,42-75
83-83,58-83
4-20,3-4
30-92,31-31
2-15,8-40
13-69,12-14
81-82,21-81
33-45,33-44
87-92,18-88
52-96,95-96
10-53,11-52
81-95,81-96
8-8,4-7
4-99,3-5
51-77,52-76
17-89,16-16
19-21,20-80
1-3,2-94
96-97,3-97
50-58,57-86
38-98,38-39
8-97,5-9
11-96,95-97
28-43,27-44
21-26,20-25
58-97,12-92
1-3,3-88
11-47,10-72
1-71,3-85
40-40,39-97
3-89,3-90
7-92,37-91
73-89,61-90
61-80,28-92
61-62,11-61
19-80,19-80
4-6,5-78
6-54,16-81
92-97,20-91
61-62,5-62
40-65,39-39
57-66,54-67
2-98,3-76
13-99,12-88
96-97,2-97
46-56,56-57
7-94,11-94
5-78,4-5
31-71,31-79
47-47,48-83
72-91,72-92
36-37,37-70
57-98,98-98
7-99,7-98
2-99,2-98
27-96,95-96
19-27,28-93
1-9,8-52
92-92,1-92
38-84,84-85
94-97,22-95
19-37,32-36
4-17,17-96
27-80,28-99
40-60,59-60
8-96,8-97
16-75,15-36
33-73,34-73
54-76,75-76
49-87,86-87
11-38,38-91
40-69,68-69
39-41,40-40
90-90,64-90
11-82,12-56
28-90,89-90
90-95,8-91
9-92,10-91
10-98,28-97
29-30,30-91
26-91,26-27
7-91,69-92
21-93,22-63
6-8,7-35
71-71,63-71
39-47,13-48
15-79,15-15
9-73,9-73
46-69,17-88
16-97,18-86
8-65,64-65
1-44,2-43
33-78,32-32
23-97,40-97
21-22,21-74
93-93,10-93
21-22,21-42
2-5,5-18
21-51,18-37
38-92,47-77
83-84,3-83
16-94,15-95
1-92,92-93
1-98,98-98
48-89,34-47
9-44,10-45
88-90,43-89
3-16,17-29
39-44,1-40
41-67,38-75
2-6,1-7
8-67,9-55
42-60,42-61
18-52,31-51
46-47,47-74
24-69,23-24
30-30,30-31
1-84,83-84
2-87,1-87
9-50,9-51
28-83,20-34
19-47,40-51
3-86,4-4
17-79,1-2
26-75,25-75
8-16,17-54
35-90,42-97
1-18,23-62
2-12,1-39
13-90,12-96
71-91,71-91
23-60,12-24
26-84,54-83
18-24,18-25
18-56,23-55
32-59,31-33
35-52,34-81
22-72,22-71
8-38,7-37
34-69,69-69
10-79,15-68
16-87,24-28
20-50,8-51
6-52,52-84
86-86,21-87
26-94,26-93
63-82,63-81
5-18,17-91
7-18,7-28
10-36,10-95
44-96,9-84
48-51,49-62
90-98,89-98
31-31,32-56
75-75,74-75
28-80,79-92
7-63,26-62
4-5,5-18
40-84,21-85
43-51,42-44
4-91,35-95
51-73,51-52
4-51,51-51
80-80,52-80
46-85,19-84
9-11,10-36
32-33,33-90
3-92,4-92
6-96,5-99
77-78,66-78
7-31,9-87
11-70,32-69
46-57,25-74
4-42,41-42
28-92,91-92
7-23,21-22
7-97,17-97
12-94,6-13
59-84,59-83
46-46,47-78
10-99,9-99
1-73,13-72
1-73,2-2
15-91,16-84
4-84,1-85
3-98,2-98
89-89,2-90
16-96,16-96
30-69,31-70
16-68,73-89
13-30,12-29
27-97,98-99
58-95,8-94
18-18,17-83
1-55,3-55
37-43,42-89
1-89,1-90
51-53,23-52
50-57,58-91
95-96,25-96
41-41,27-41
26-76,59-77
85-87,25-86
14-62,15-63
98-98,51-98
81-98,50-97
1-72,2-73
1-4,3-64
12-82,11-97
6-24,24-24
55-85,54-65
6-68,67-69
2-3,3-73
4-91,4-86
36-99,35-99
10-79,21-78
20-39,39-97
7-82,6-8
58-91,38-58
13-63,14-39
42-44,43-96
84-95,82-84
29-65,30-65
44-58,57-58
8-34,34-35
11-36,11-35
26-94,72-93
12-26,14-88
3-91,4-89
6-6,5-99
96-97,95-96
38-51,30-45
20-98,21-77
16-98,16-97
5-97,12-12
14-25,25-92
30-65,30-31
52-53,35-53
71-73,22-94
6-96,3-99
8-42,7-7
28-96,29-97
67-91,90-92
3-95,12-95
8-98,9-9
27-27,26-87
7-79,78-79
36-90,36-89
84-85,21-84
69-69,68-92
19-98,61-99
16-98,98-99
1-96,95-96
16-84,16-85
18-87,87-88
92-97,85-95
13-83,83-84
20-67,3-21
23-71,55-72
62-97,61-61
82-91,51-81
24-25,25-93
58-58,59-99
39-93,38-93
7-64,14-63
35-99,36-98
89-89,29-90
77-78,67-78
3-90,89-90
26-90,26-89
22-38,22-37
66-66,65-94
71-75,68-74
47-93,7-93
9-90,73-87
39-39,38-82
27-40,33-39
66-93,67-92
9-86,86-87
13-95,34-94
47-78,14-46
2-96,2-96
4-30,23-29
9-88,21-89
2-61,2-60
15-69,15-68
20-91,20-90
38-77,70-76
8-65,9-9
96-97,14-97
55-67,67-67
12-78,26-83
1-95,1-1
56-99,64-98
1-56,13-57
14-84,8-96
37-38,38-76
4-99,5-5
46-87,27-86
80-80,4-80
9-25,25-78
33-85,34-35
26-77,70-76
68-98,67-98
8-12,17-66
2-41,2-42
8-46,47-47
8-92,5-8
1-5,5-98
6-94,7-7
96-97,73-96
19-51,50-51
30-95,31-85
16-91,17-91
11-13,12-62
2-99,3-99
44-91,58-90
28-63,1-18
46-92,19-52
37-54,3-55
67-68,68-82
2-99,98-99
8-40,40-40
7-58,6-58
9-75,9-75
4-39,39-39
16-70,16-71
27-82,81-82
38-83,38-82
4-76,75-97
5-42,6-41
43-82,82-82
27-27,26-77
14-14,13-74
17-87,87-94
14-78,13-62
54-85,53-86
1-15,1-95
69-79,70-74
5-86,10-85
29-39,49-78
41-99,41-42
15-95,14-15
32-78,33-78
16-94,21-93
5-5,4-94
1-65,8-64
2-99,5-98
34-59,38-58
36-43,7-36
5-21,20-62
11-92,7-7
23-91,24-91
6-90,5-91
18-60,15-64
40-87,39-41
58-81,57-58
3-88,4-88
49-50,32-49
28-34,27-90
30-38,5-31
8-91,7-92
43-81,44-81
10-97,9-99
3-86,2-3
80-98,4-92
2-2,1-99
15-41,15-42
27-28,27-83
9-83,4-10
48-90,47-90
31-67,2-32
80-80,5-80
10-85,10-84
30-84,29-29
16-45,17-45
34-35,34-41
28-30,29-68
9-25,25-69
65-66,56-66
19-36,20-20
53-53,53-98
6-22,10-60
29-29,28-93
20-56,54-55
8-83,8-83
13-87,87-88
40-81,24-66
82-83,30-82
68-70,1-69
88-89,20-88
1-99,2-99
4-73,5-55
71-72,18-72
47-47,28-47
53-69,52-69
14-29,28-29
53-82,83-87
3-4,10-19
59-93,1-92
23-94,23-95
27-56,26-26
58-94,57-59
87-87,49-88
75-78,69-89
18-96,19-87
3-98,90-99
29-45,45-58
2-66,58-65
15-76,14-88
2-92,92-92
31-79,32-79
9-98,9-99
7-90,6-99
19-19,18-72
86-86,85-98
10-13,12-93
2-47,48-51
9-62,1-9
6-95,6-94
4-98,7-97
80-99,99-99
34-71,50-57
48-67,31-66
53-88,53-53
5-55,5-54
56-60,55-55
13-45,12-45
4-78,5-45
52-84,84-84
52-98,52-97
7-8,9-92
1-98,2-17
42-79,9-80
57-64,38-59
31-37,37-72
21-99,1-25`, m = j(E);
console.log(m.length);
const r = document.querySelector("#shader"), H = {
  u_time: { value: 0 },
  iResolution: { value: [r.clientWidth, r.clientHeight, 0] }
};
let n = r.clientWidth / 100 * 0.99;
console.log(n);
const d = () => m.map((e) => new R(e.a.x1 * n, e.a.x2 * n, e.b.x1 * n, e.b.x2 * n)), p = {
  vertexShader: A,
  fragmentShader: B,
  uniforms: {
    u_time: { value: 0 },
    u_speed: { value: 1 },
    width: { value: n },
    pairs: {
      value: d()
    }
  }
};
let L = { materialOptions: p }, l = {};
function h() {
  n = r.clientWidth / 100 * 0.99, p.uniforms.width.value = n, p.uniforms.pairs.value = d(), c.setSize(r.clientWidth, r.clientHeight);
}
function x() {
  requestAnimationFrame(x), l.uniforms.u_time.value = w.getElapsedTime(), l.uniforms.iResolution.value = [r.clientWidth, r.clientHeight, 0], c.render(f, k);
}
function V() {
  const e = Object.assign(
    {
      side: W
    },
    L.materialOptions
  );
  return Object.assign(e.uniforms, H), new M(e);
}
const f = new b(), k = new C(-1, 1, 1, -1, 0, 1), c = new z(), q = new F(2, 2);
l = V();
const D = new S(q, l);
f.add(D);
const w = new _();
w.start();
r.appendChild(c.domElement);
window.addEventListener("resize", h);
h();
x();
