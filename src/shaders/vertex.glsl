varying vec2 vertexUV;
varying vec3 vertexNormal;
uniform vec3 couleur;


void main() {
    vertexUV = uv;
    vertexNormal =  normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}