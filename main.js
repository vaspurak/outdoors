let person = null;

if (confirm("¿ESTAS LISTO,PARA SEGUIR A EMPEZAR?")) {
  person = prompt(" ENTONCES ESCRIBE TU NOMBRE");
  alert("BIENVENIDO A OUTDOORS " + person + " !");
} else {
  alert("ADIOS!");
}
