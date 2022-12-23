(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fe8e0d3"],{"0799":function(e,a,s){e.exports=s.p+"img/2.3c408fb8.png"},4753:function(e,a,s){e.exports=s.p+"img/service-mesh.c04f75ea.png"},6467:function(e,a,s){e.exports=s.p+"img/1.1097a9e9.png"},a28e:function(e,a,s){e.exports=s.p+"img/control_plane.96aa0ab2.png"},a3db:function(e,a,s){e.exports=s.p+"img/3.ae7e51dc.png"},b874:function(e,a,s){e.exports=s.p+"img/service-mesh-generic-topology_social.74defb07.png"},d3c5:function(e,a,s){"use strict";s.r(a);var o=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("section",[o("h2",{attrs:{id:"introduccion"}},[e._v("Introduccion "),o("a",{staticClass:"header-anchor",attrs:{href:"#introduccion"}},[e._v("¶")])]),o("p",[e._v("Tal como lo vimos en la introduccion a distribucion, aprendimos que el tener sistemas distribuidos en cualquier dimension pueden causar casos de uso que no hubiesemos pensado antes, asi como varios problemas a resolver.")]),o("p",[e._v("Cuando estos sistemas eran simples, en general se trataba de minimizar la interaccion entre componentes remotos para que el impacto de la complejidad de los sistemas distribuidos sea minima. Y si bien en general, durante un tiempo hace un tiempo atras, si el sistema era dentro de todo simple o pequenio, solamente se trataba de evitar la distribucion aun si hubiese que duplicar logica o datos entre distintos sistemas.")]),o("p",[e._v("Obviamente no eran soluciones optimas, y hoy por hoy se trata de solucionar problemas tales como la duplicacion de codigo o de logica entre un componente o varios. Y en este nuevo mundo, cuando empezaron a verse de nuevo casos de sistemas que cada vez necesitaban escalar debido a que escalar verticalmente era demasiado costoso. Incluso estas dificultades hacian que fuese dificil de escalar (un ejemplo mencionado "),o("a",{attrs:{href:"http://highscalability.com/blog/2009/10/13/why-are-facebook-digg-and-twitter-so-hard-to-scale.html"}},[e._v("aqui")]),e._v(") Por eso varias soluciones iniciales fueron por asi decirlo ad-hoc para cada caso en un sistema en particular y de ahi fueron extrayendose nuevas soluciones cada vez mas sofisticadas. A medida que descubrimos más sobre el dominio del problema y diseñamos mejores soluciones, comenzamos a cristalizar algunas de las necesidades más comunes en patrones, bibliotecas y eventualmente plataformas.")]),o("p",[e._v("No solo se reduce esto a patrones, bibliotecas y codigo, sino tambien metodologias sobre como escalar y conceptos sobre sistemas distribuidos (mencion "),o("a",{attrs:{href:"http://highscalability.com/blog/2010/6/10/the-four-meta-secrets-of-scaling-at-facebook.html"}},[e._v("2")]),e._v(")")]),o("h2",{attrs:{id:"recapitulando-desde-microservicios"}},[e._v("Recapitulando desde microservicios "),o("a",{staticClass:"header-anchor",attrs:{href:"#recapitulando-desde-microservicios"}},[e._v("¶")])]),o("p",[e._v("Con los años, las computadoras se volvieron aún más baratas y más omnipresentes, y la pila de redes descrita anteriormente ha demostrado ser el conjunto de herramientas de facto para conectar sistemas de manera confiable. Con más nodos y conexiones estables, la industria ha jugado con varios tipos de sistemas en red, desde agentes y objetos distribuidos hasta arquitecturas orientadas a servicios compuestas de componentes más grandes pero aún muy distribuidos.")]),o("p",[e._v('En los años 90, Peter Deutsch y sus colegas ingenieros de Sun Microsystems compilaron "Las 8 falacias de la computación distribuida", en la que enumera algunas suposiciones que las personas tienden a hacer cuando trabajan con sistemas distribuidos. El punto de Peter es que estos podrían haber sido ciertos en arquitecturas de redes más primitivas o en modelos teóricos, pero no son válidos en el mundo moderno. Pueden ver un poco mas a '),o("a",{attrs:{href:"~@/mitos/"}},[e._v("aca")])]),o("p",[e._v("Incluso vimos que existen distintos problemas, tales como los que vimos hasta ahora como CAP, interleaving, netsplits, entre otras cosas. Incluso podemos mencionar otras cosas con la que deberiamos lidiar con una arquitectura distribuida:")]),o("ul",[o("li",[e._v("Provisionamiento rapido de los recursos (nuevas instancias)")]),o("li",[e._v("Monitoreo, en lo posible en tiempo real o poco delay")]),o("li",[e._v("Despliegue rapido")]),o("li",[e._v("Facil de provisionar mas almacenamiento (BBDD, disco, etc)")]),o("li",[e._v("Autenticacion")]),o("li",[e._v("Tener algun mecanismo de RPC estandarizado entre los compoenentes internos del sistema (protocols, gRPC por ej)")])]),o("p",[e._v("Entonces, aunque la pila TCP / IP y el modelo de red general desarrollado hace muchas décadas sigue siendo una herramienta poderosa para hacer que las computadoras se comuniquen entre sí, las arquitecturas más sofisticadas introdujeron otra capa de requisitos que, una vez más, deben cumplir los ingenieros que trabajan en tales arquitecturas.")]),o("p",[e._v("Hay ejemplos que podemos mencionar que se usaron para solucionar algunos problemas de resilencia y distribucion, algunos de estos son failover/takeover, circuit breaker (algunos detalles de este pueden verse "),o("a",{attrs:{href:"https://microservices.io/patterns/reliability/circuit-breaker.html"}},[e._v("aca tambien")]),e._v("), y tambien service discovery. Un ejemplo de servicios puede ser el siguiente:")]),o("img",{staticClass:"center",attrs:{src:s("6467")}}),o("p",[e._v("Entonces Service Discovery es el proceso de encontrar automáticamente qué instancias de servicio satisfacen una consulta determinada, por ejemplo un servicio llamado "),o("em",[e._v("Compras")]),e._v(" puede necesitar encontrar instancias de "),o("em",[e._v("Cotizacion de Envio")]),e._v(" con alguna con variable de entorno seteado en "),o("em",[e._v("prod")]),e._v(" por ejemplo. En ese caso se puede invocar un proceso de descubrimiento de servicio, que deberia devolver una lista de servidores adecuados.")]),o("p",[e._v("Para una estructura monolitica esto es facil, mediante un DNS, algun load balancer y algunas convenciones sobre los puertos basta. Pero en entornos mas distribuidos, esto no es tan trivial; y los servicios que anteriormente podían confiar ciegamente en sus búsquedas de DNS para encontrar dependencias ahora tienen que lidiar con cosas como el equilibrio de carga del lado del cliente, múltiples entornos diferentes.")]),o("p",[e._v("Si antes lo único que necesitaba era solo configuracion para resolver los nombres de host, ahora los servicios necesitan muchas líneas de repeticiones para lidiar con varios casos de esquina introducidos por una distribución más alta. Para esto se tiene este servicio de Service Discovery para encontrar las instancias a traves de la red que necesita un componente y las interconecta.")]),o("p",[e._v("Los circuit breakers son un patron catalogado por "),o("em",[e._v("Michael Nygard")]),e._v(" en el libro "),o("a",{attrs:{href:""}},[e._v("Release it")]),e._v(" del 2007. y lo que me gustaria mencionar aunque en ingles es la definicion de Martin Fowler en "),o("a",{attrs:{href:"https://martinfowler.com/bliki/CircuitBreaker.html"}},[e._v("3")])]),o("p",[o("cite",{attrs:{cite:"Martin Fowler"}},[e._v("The basic idea behind the circuit breaker is very simple. You wrap a protected function call in a circuit breaker object, which monitors for failures. Once the failures reach a certain threshold, the circuit breaker trips, and all further calls to the circuit breaker return with an error, without the protected call being made at all. Usually you’ll also want some kind of monitor alert if the circuit breaker trips.")])]),o("p",[e._v('Estos son patrones re simples que nos permiten tener mas confiabilidad en la interacciones entre los servicios. Sin embargo esto se empieza a complicar cuando se incrementa el mivel de distribucion. Por lo que puede pasar que tratar de "monitorear" una posible alerta en caso de que un circuit breaker se dispare, deja a veces de ser tan simple. Y una falla de un componente puede desencadenar tal vez una cascada de errores si lo tenemos todo')]),o("p",[e._v("These are great simple devices to add more reliability to interactions between your services. Nevertheless, just like everything else they tend to get much more complicated as the level of distribution increases. The likelihood of something going wrong in a system raises exponentially with distribution, so even simple things like “some kind of monitor alert if the circuit breaker trips” aren’t necessarily straightforward anymore. One failure in one component can create a cascade of effects across many clients, and clients of clients, triggering thousands of circuits to trip at the same time. Once more what used to be just a few lines of code now requires loads of boilerplate to handle situations that only exist in this new world.")]),o("p",[e._v("De hecho, los ejemplos enumerados anteriormente pueden ser tan difíciles de implementar correctamente que las bibliotecas grandes y sofisticadas como "),o("a",{attrs:{href:"https://twitter.github.io/finagle/"}},[e._v("Finagle")]),e._v(" entre otras se han hecho para evitar reescribir la misma lógica o solucion de estos ejemplos una y otra vez en distintos modulos del sistema.")]),o("p",[e._v("Entonces ahora podemos tener nuestra aplicacion de alguna manera separado de nuestra biblioteca pero aun en el mismo servicio x..")]),o("img",{staticClass:"center",attrs:{src:s("6467")}}),o("p",[e._v('Esta arquitectura de microservicios fue inicialmente utilizada por varias organizaciones que fueron pioneras de este tipo de arqutecturas como Twitter o Soundcloud. A medida que la cantidad de servicios aumento se empezo a ver de a poco las desventajas de esta solucion. La mayor limitante es que a medida que aumentan los servicios, se necesita una mayor cantidad de recursos, en terminos de ingenieros/desarrolladores para construir y de alguna manera "pegar" estas librerias en los servicios nuevos y mantenerlos tambien. Por lo que entre un 10-15% de los recursos se tienen que invertir en "pegar" y mantener estas librerias.')]),o("p",[e._v("Otra desventaja un poco viene por el lado de la libreria puede llegar a atarse al runtime y lenguajes tambien que se pueden usar en los microservicios. Porque es muy probable que estas librerias esten escritas en una plataforma en particular, por ejemplo Finagle esta escrito en Scala para la JVM, por lo que en el caso que se quiera agregar un nuevo servicio y quiere usarse esta libreria, se debe o bien ajustarse a la plataforma en la que estamos usando la libreria o usar un port o alguna libreria alternativa que nos resuelva el mismo problema.")]),o("h3",{attrs:{id:"mas-alla-de-los-microservicios"}},[e._v("Mas alla de los microservicios "),o("a",{staticClass:"header-anchor",attrs:{href:"#mas-alla-de-los-microservicios"}},[e._v("¶")])]),o("p",[e._v("De manera similar a lo que vimos en el stack de la red, sería altamente deseable extraer las características requeridas por los servicios distribuidos masivamente en una plataforma subyacente.")]),o("p",[e._v("Las empresas escriben aplicaciones y servicios sofisticados utilizando protocolos de nivel superior como HTTP sin siquiera pensar en cómo TCP controla los paquetes en su red. Esta situación es lo que necesitamos para los microservicios, donde los ingenieros que trabajan en servicios pueden centrarse en su lógica de negocios y evitar perder tiempo escribiendo su propio código de infraestructura de servicios o administrando bibliotecas y marcos en toda la flota de microservicios.")]),o("p",[e._v("Entonces nuestro diagrama vendria a quedar de esta manera..")]),o("img",{staticClass:"center",attrs:{src:s("0799")}}),o("p",[e._v("Pero esto no es tan trivial, agregar otro stack de la red involucra tambien que haya una interaccion entre la capa que antes era nuestra libreria y la superior, teniendo que ajustarlo o bien a un formato estandar sin tener que acoplarlo a la aplicacion, que haria que no fuese posible que se use a traves de varios servicios distintos.")]),o("p",[e._v("Hay una solucion alternativa que es la de implementar esto mismo pero a partir de un componente "),o("em",[e._v("proxy")]),e._v(". Por lo que un servicio no se conecta directamente con las dependencias sino que pasara todo su trafico a traves de otro modulo que agrega de manera transparente estas soluciones como el Circuit Breaker, Service Discovery, etc..")]),o("p",[e._v("Esto empezo a aparecer por primera vez con este articulo de "),o("a",{attrs:{href:"https://medium.com/airbnb-engineering/smartstack-service-discovery-in-the-cloud-4b8a080de619"}},[e._v("Airbnb")]),e._v(" en donde se describia a este servicio proxy como algo llamado "),o("em",[e._v("sidecar")]),e._v(". Un año despues Netflix hace algo muy similar pero para aplicaciones que no son basadas en la JVM, que es su implementacion de un sidecar llamado "),o("a",{attrs:{href:"https://medium.com/netflix-techblog/prana-a-sidecar-for-your-netflix-paas-based-applications-and-services-258a5790a015"}},[e._v("Prana")])]),o("img",{staticClass:"center",attrs:{src:s("a3db")}}),o("p",[e._v("Con el aumento de las arquitecturas basadas en microservicios, se siguio avanzando con esta arquitectura basada en proxies, y llegaron a aparecer en poco tiempo implementaciones de proxy que son lo suficientemente flexibles para adaptarse a distintos servicios y preferencias. Uno de los primeros fue "),o("a",{attrs:{href:"https://buoyant.io/2016/02/18/linkerd-twitter-style-operability-for-microservices/"}},[e._v("Linkerd")]),e._v(", creado por Twitter, y mas tarde por otra implementacion mas conocida hoy en dia llamado "),o("a",{attrs:{href:"https://eng.lyft.com/announcing-envoy-c-l7-proxy-and-communication-bus-92520b6c8191"}},[e._v("Envoy")])]),o("h2",{attrs:{id:"service-mesh"}},[e._v("Service Mesh "),o("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh"}},[e._v("¶")])]),o("p",[e._v("El modelo de Service Mesh consiste en que, cada uno de sus servicios tendrá un sidecar proxy complementario. Dado que los servicios se comunican entre sí solo a través del proxy de sidecar, terminamos con una implementación similar al diagrama a continuación:")]),o("img",{staticClass:"center iasc-image",attrs:{src:s("4753")}}),o("p",[e._v("Una definicion un poco mas formal lo podemos ver en lo que escribio "),o("a",{attrs:{href:"https://buoyant.io/2017/04/25/whats-a-service-mesh-and-why-do-i-need-one/"}},[o("em",[e._v("William Morgan")]),e._v(" de Buoyant en 2017")])]),o("cite",{attrs:{cite:"William Morgan"}},[e._v(" A service mesh is a dedicated infrastructure layer for handling service-to-service communication. It’s responsible for the reliable delivery of requests through the complex topology of services that comprise a modern, cloud native application. In practice, the service mesh is typically implemented as an array of lightweight network proxies that are deployed alongside application code, without the application needing to be aware. ")]),o("p",[e._v("Probablemente el aspecto más importante de su definición es que se aleja de pensar en los proxies como componentes aislados y reconoce en que la red que forman es algo valioso en sí mismo.")]),o("p",[e._v("A medida que las organizaciones trasladan sus implementaciones de microservicios a deployments más sofisticados como Kubernetes, las personas y las organizaciones han comenzado a usar las herramientas disponibles por esas plataformas para implementar esta idea de un service mesh correctamente. Se están alejando de un conjunto de servidores proxy independientes que trabajan de forma aislada a un plano de control, o sea algo centralizado.")]),o("img",{staticClass:"center iasc-image",attrs:{src:s("b874")}}),o("p",[e._v("Viendo un poco nuestro diagrama de arriba,vemos que el tráfico real del servicio todavía fluye de proxy a proxy directamente, pero el plano de control conoce cada instancia de proxy. El plano de control permite a los proxies implementar cosas como el control de acceso y la recopilación de métricas, lo que requiere cooperación..")]),o("p",[e._v("Otro diagrama un poco mas detallado de plano de control ("),o("em",[e._v("Control Plane")]),e._v(") puede verse como el siguiente:")]),o("img",{staticClass:"center iasc-image",attrs:{src:s("a28e")}}),o("p",[e._v("El proyecto que nos permite un poco utilizar el plano de control se llama "),o("a",{attrs:{href:"https://istio.io/"}},[e._v("Istio")]),e._v(" y es por el momento la herramienta mas utilizada y conocida para implementar el plano de control.")]),o("p",[e._v("Bibliografia")]),o("p",[o("a",{attrs:{href:"https://www.oreilly.com/library/view/the-enterprise-path/9781492041795/ch01.html"}},[e._v("The Enterprise Path to Service Mesh Architectures by Lee Calcote")])])])}],r=s("2877"),n={},t=Object(r["a"])(n,o,i,!1,null,null,null);a["default"]=t.exports}}]);
//# sourceMappingURL=chunk-4fe8e0d3.6da585dc.js.map