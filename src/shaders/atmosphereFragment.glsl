varying vec3 vertexNormal;
uniform vec3 couleurRGB;


void main() {
    
    float intensity = pow(0.2 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);
    gl_FragColor = vec4(couleurRGB, 1) * intensity;
    
}