(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22cff6"],{f62b:function(e,s,a){"use strict";a.r(s);var n=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("section",[a("h1",{attrs:{id:"introduccion"}},[e._v("Introduccion "),a("a",{staticClass:"header-anchor",attrs:{href:"#introduccion"}},[e._v("¶")])]),a("p",[e._v("Empecemos de a poco y por algo muy simple: una función que incrementa en una unidad a su argumento, la función succesor.")]),a("blockquote",[a("p",[e._v("Nota: cuando decimos función lo decimos en el sentido estricto de una computación que toma un valor y devuelve otro, sin tener ningún tipo de efecto En JavaScript, su código se ve como el siguiente:")])]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("succesor")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("x")]),e._v(") ")]),e._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" x + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v(";\n}\n")])]),a("p",[e._v("Usar esta función no tiene mucho misterio:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" i0 = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" i1 = succesor(i0);\n…etc…\n")])]),a("p",[e._v("La función succesor está escrita en lo que se conoce como estilo directo: los resultados de la misma (en este caso, su entrada más uno) se obtienen a partir de su retorno.")]),a("p",[e._v("Hasta acá nada extraño. Hagamos ahora un salto conceptual: otra forma posible de escribir este código, es que el resultado se obtenga a partir de un callback.")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("succesor")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("x, callback")]),e._v(") ")]),e._v("{\n callback(x + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v(");\n}\n")])]),a("p",[e._v("¿Y cómo la usamos?")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" i0 = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(";\nsuccesor(i0, (resultado) => {\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" i1 = resultado;\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//...etc...")]),e._v("\n});\n")])]),a("p",[e._v("¡Momento! ¿Qué fue eso? Si bien puede verse un poco perturbador al principio, este código es totalmente equivalente al anterior: cuando se aplica la función succesor, calcula su siguiente, y se lo pasa al callback, que opera con el mismo normalmente.")]),a("blockquote",[a("p",[e._v("Si te estás preguntando hacia dónde vamos y qué tiene todo esto que ver con la concurrencia, ¡danos uno rato! Prometemos que pronto todo tendrá sentido.")])]),a("p",[e._v("A este callback se lo llama continuación. Porque… ¡es lo que que se ejecuta a continuación! O en inglés: continuation. ¿Qué significa esto? Que las funciones que toman continuaciones, no solo ahora saben lo que tienen que hacer, sino también cuándo se ejecutará lo que siga. Por eso decimos que una función escrita de este forma tiene, además de la lógica de negocio, control de flujo (o simplemente llamado control).")]),a("p",[e._v("Peeeero, para que esto sea realmente posible, tenemos que tomar ciertas precauciones, y entender que al trabajar de esta forma, el resultado sólo se puede obtener dentro de la continuación. Por tanto, el siguiente es un code smell:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" i0 = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" i1;\nsuccesor(i0, (resultado) => {\n  i1 = resultado;\n});\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//..resto...")]),e._v("\n")])]),a("p",[e._v("Aquí estamos capturando el resultado de successor a través de la continuación, asumiendo que el código se ejecutará inmediatamente y que estará disponible en la línea 6.")]),a("p",[e._v("Pero si es realmente successor quien tiene control sobre cuándo y cómo se ejecuta la continuación, no podemos garantizar esto dado que no sabemos cuándo se va a ejecutar la continuación.")]),a("p",[e._v("¿Esto significa que el código anterior no funciona? No, pero tenemos que entender que estamos rompiendo el modelo de continuación, al no permitir que sea la función successor la que determine cuándo y cómo seguir. Y eso puede ser una fuente de bugs.")]),a("h3",{attrs:{id:"consecuencias"}},[e._v("Consecuencias "),a("a",{staticClass:"header-anchor",attrs:{href:"#consecuencias"}},[e._v("¶")])]),a("p",[e._v("En oposición al estilo directo, caracterizado por la obtención de resultados mediante retornos, surge así el estilo de paso de continuaciones (CPS, por sus siglas en inglés). Es decir, cuando tenemos una función que toma una continuación y efectivamente colocamos todo el código que opera con el resultado dentro de la misma, tenemos una función CPS.")]),a("p",[e._v("El CPS es especial porque es fácil introducirlo, pero imposible salir de él, al menos no sin introducir bugs y potenciales problemas en el sistema.")]),a("p",[e._v("Retomando las ideas de nuestro primer episodio, esto es una propiedad interesante: una vez impuesta la arquitectura, no tenemos opción de escapar de ella, lo que nos resta en flexibilidad, pero nos fuerza a ser consistentes.")]),a("p",[e._v("Ejemplo: si ahora queremos implementar una función que incrementa el doble de un número, usando nuestro successor CPS, estaríamos tentados a escribir esto:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("incrementarDoble")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("i")]),e._v(") ")]),e._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" i0 = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("2")]),e._v(" * i;\n  succesor(i0, "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("resultado")]),e._v(") ")]),e._v("{\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" i1 = resultado;\n   ???\n  });\n}\n")])]),a("p",[e._v("Y ahí vemos el problema: incrementarDoble debe retornar i1, ¡pero no puede hacerlo, porque no hay garantías de cuando se va a ejecutar la continuación, ni cuantas veces! Por ello, la única alternativa válida (sin basarse en los detalles de implementación de successor, claro), es convertir a incrementarDoble en CPS también:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("incrementarDoble")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("i, cont")]),e._v(") ")]),e._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" i0 = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("2")]),e._v(" * i;\n  succesor(i0, cont);\n}\n")])]),a("p",[e._v("Moraleja: una vez que introducimos CPS, su uso sólo puede extenderse.")]),a("blockquote",[a("p",[e._v("Esto no significa que no podamos tener computaciones no CPS. Por ejemplo, la multiplicación podría ser extraída como una función en estilo directo. Desarrollaremos esta idea arquitectural mejor en próximos episodios cuando ataquemos el mundo monádico.")])]),a("h3",{attrs:{id:"para-qué-cps"}},[e._v("¿Para qué CPS? "),a("a",{staticClass:"header-anchor",attrs:{href:"#para-qué-cps"}},[e._v("¶")])]),a("p",[e._v("Resulta bastante evidente que razonar sobre CPS es más complejo que en el estilo directo. Entonces, ¿por qué habríamos de adoptarlo?")]),a("p",[e._v("CPS, al otorgarle a la función no sólo capacidad de cómputo sino de control, permite hacer cosas muy poderosas. En los ejemplos anteriores no lo aprovechamos, porque la computación succesor puede ser modelada con una función con un sólo resultado posible:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("succesor")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("x, cont")]),e._v(") ")]),e._v("{\n cont(x + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v(");\n}\n")])]),a("p",[e._v("Pero sin embargo, podríamos haber aplicado a la función cont cero (1) o muchas veces (2), podríamos haber recibido múltiples continuaciones y ejecutar alguna de ellas (3), o podríamos haberlas ejecutado en otro momento (4). CPS nos permite, entones, implementar 4 tipos de computaciones: con falla, no determinísticas, con excepciones y asincrónicas.")]),a("blockquote",[a("p",[e._v("Recordar estos tipos de continuaciones, volverán en episodios futuros")])]),a("h3",{attrs:{id:"falla"}},[e._v("Falla "),a("a",{staticClass:"header-anchor",attrs:{href:"#falla"}},[e._v("¶")])]),a("p",[e._v("Con CPS podemos codificar computaciones que pueden no tener resultado (los matemáticos las llaman funciones parciales). Por ejemplo, la división es una función parcial que no tiene un resultado cuando su segundo argumento es cero, por lo que podemos definir una función inversa CPS de la siguiente forma:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("inversa")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("x, cont")]),e._v(") ")]),e._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("if")]),e._v(" (x !== "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(") {\n    cont("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v("/x);\n  }\n}\n")])]),a("p",[e._v("Si ahora aplicamos a inversa con el valor 2, tendremos como resultado 0.5. Pero si la aplicamos con 0, no tendremos resultado. Esto no es lo mismo que no devolver nada en una función en estilo directo (o devolver null): en una función CPS que puede fallar, si no hay resultado, el programa continuación NO continúa; el flujo de ejecución se detiene.")]),a("h3",{attrs:{id:"no-determinismo"}},[e._v("No determinismo. "),a("a",{staticClass:"header-anchor",attrs:{href:"#no-determinismo"}},[e._v("¶")])]),a("p",[e._v("Hay computaciones que pueden arrojar cero o más resultados, son la generalización de la función: la relación. Por ejemplo, la pregunta ¿quien es hijo de Vito Corleone? (notá el singular) tiene múltiples respuestas: Sonny, Michel, Connie, etc. Esta es la base del paradigma lógico: relaciones que pueden generar ningún resultado, uno, o varios.")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("hijoDeVito")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("cont")]),e._v(") ")]),e._v("{\n  cont("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"sonny"')]),e._v(");\n  cont("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"michel"')]),e._v(");\n  cont("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"connie"')]),e._v(");\n  cont("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"freddo"')]),e._v(");\n}\n")])]),a("p",[e._v("Se observa fácilmente que logramos las múltiples respuestas mediante la aplicación reiterada de la continuación: el mismo programa está continuando múltiples veces con argumento diferentes.")]),a("p",[e._v("CPS no nos da una restriccion sobre la cantidad de veces a las que se deba llamar la continuacion que recibe. Por lo que vamos a poder aplicar la continuacion 0 o múltiples veces.")]),a("p",[e._v("Tal vez el ejemplo de recien no fue tan convincente.... bueno tenemos el ejemplo mas basico que podemos encontrar en la documentacion de Node.js:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" http = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("require")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'http'")]),e._v(");\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" hostname = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'127.0.0.1'")]),e._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" port = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("3000")]),e._v(";\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" server = http.createServer("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("req, res")]),e._v(") =>")]),e._v(" {\n  res.statusCode = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("200")]),e._v(";\n  res.setHeader("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Content-Type'")]),e._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'text/plain'")]),e._v(");\n  res.end("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Hello World'")]),e._v(");\n});\n\nserver.listen(port, hostname, () => {\n  "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("`Server running at http://"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[e._v("${hostname}")]),e._v(":"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[e._v("${port}")]),e._v("/`")]),e._v(");\n});\n")])]),a("blockquote",[a("p",[e._v("Shamelessly taken from "),a("a",{attrs:{href:"https://nodejs.org/ca/docs/guides/getting-started-guide/"}},[e._v("here")])])]),a("p",[e._v("Este pequeño ejemplo nos muestra claramente el no determinismo, porque es un servidor que podemos levantar, y nunca vamos a saber cuantos request nos van a llegar al servidor durante el tiempo que este levantado, tal vez recibimos 28392389 requests, tal vez 0.")]),a("h3",{attrs:{id:"excepciones"}},[e._v("Excepciones "),a("a",{staticClass:"header-anchor",attrs:{href:"#excepciones"}},[e._v("¶")])]),a("p",[e._v("Todos conocemos las excepciones. Estas nos dan dos flujos de ejecución: uno de éxito y uno de fracaso, y en ambos hay resultados: el resultado normal del programa o el error en cuestión. Y esto lo podemos lograr pasando dos continaciones: la que contiene el flujo normal, y la que contiene el flujo de error.")]),a("h3",{attrs:{id:"computaciones-asincrónicas"}},[e._v("Computaciones asincrónicas. "),a("a",{staticClass:"header-anchor",attrs:{href:"#computaciones-asincrónicas"}},[e._v("¶")])]),a("p",[e._v("¡Éstas son las que más nos interesan! Operaciones que quizás no se ejecuten inmediatamente, sino en un momento posterior. Más sobre esto, en breve.")]),a("h3",{attrs:{id:"cps-y-callback-hell"}},[e._v("CPS, ¿y Callback Hell? "),a("a",{staticClass:"header-anchor",attrs:{href:"#cps-y-callback-hell"}},[e._v("¶")])]),a("p",[e._v("Un pequeño paréntesis: se suele achacar al uso de CPS la inevitable caída en el callback hell. Por ejemplo:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" cuentaLoca = "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("x, cont")]),e._v(") ")]),e._v("{ \n  siguiente(x, "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("y")]),e._v(")")]),e._v("{\n    inversa(y, "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("z")]),e._v(")")]),e._v("{\n      duplicar(z, cont);\n    })\n  })\n};\n")])]),a("p",[e._v("Como se observa, algo tan simple en estilo directo como")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e._v("duplicar(inversa(siguiente(x))) \n")])]),a("p",[e._v("se convierte en una compleja estructura de continuaciones anidadas. ¿Podríamos delegar esto de mejor forma? Si analizamos cómo queda expresada esta computación en estilo directo, podemos ver que duplicar la inversa del siguiente, a fin de cuentas, está describiendo una composición de funciones: al resultado de aplicar una función se le pasa a la entrada la otra. Obviamente, no es la misma composición de funciones que conocemos en estilo directo: es una composición CPS. Y entender esto nos permite definir una función componer, que haga justamente esto:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("componer")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("f, g")]),e._v(") ")]),e._v("{\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("x, cont")]),e._v(") ")]),e._v("{\n         g(x, "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("y")]),e._v(")")]),e._v("{\n             f(y, cont);\n         })\n     }\n }\n")])]),a("p",[e._v("y una vez que tenemos eso podemos ya utilizarla así:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" cuentaLoca = componer(duplicar, componer(inversa, siguiente))\n")])]),a("p",[e._v("Y si le damos una vuelta de tuerca más, podemos observar que estamos ante la estructura de aplicación de un fold, y definir una función pipeline que componga todas las funciones cps")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("pipeline")]),e._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("fs")]),e._v(") ")]),e._v("{\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" fs.reduce(componer);\n }\n")])]),a("p",[e._v("Con este pipeline podemos reutilizar el componer aplicandole un fold sobre un array y de esta manera que se puedan componer todas las funciones que tenemos sin caer de nuevo en el Callback Hell:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" cuentaLoca = pipeline([duplicar, inversa, siguiente]);\n")])]),a("p",[e._v("Y así vemos como eliminar el callback hell, aun con CPS, es posible. Moraleja: no es culpa del CPS, es culpa nuestra al no delegar convenientemente.")]),a("h3",{attrs:{id:"conclusiones"}},[e._v("Conclusiones "),a("a",{staticClass:"header-anchor",attrs:{href:"#conclusiones"}},[e._v("¶")])]),a("ul",[a("li",[e._v("CPS nos da gran poder, pero es difícil de manejar adecuadamente")]),a("li",[e._v("CPS nos lleva, si no tenemos cuidado al callback hell. Sin embargo, no es inherente a CPS, sino que es consecuencia de una mala delegación. Es posible resolverlo si se delega apropiadamente y aplicando los conceptos de programación funcional de orden superior y creando combinadores apropiados")]),a("li",[e._v("CPS nos permite implementar computaciones asincrónicas. NodeJS emplea CPS para soportarlas.")]),a("li",[e._v("El uso de CPS en NodeJS: pésimo manejo de errores y ausencia de abstracciones para hacerlo mas tratable. Por eso es que la comunidad centró su atención en otra forma de estructurar programas con influencias funcionales: las promesas (promises).")])])])}],o=a("2877"),t={},c=Object(o["a"])(t,n,r,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d22cff6.31a88251.js.map