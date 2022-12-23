(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36154627"],{"0a75":function(e,s,a){e.exports=a.p+"img/secret.4995711d.jpg"},"52f8":function(e,s,a){"use strict";a.r(s);var r=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},t=[function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("section",[r("h1",{attrs:{id:"fibers-on-ruby"}},[e._v("Fibers on Ruby "),r("a",{staticClass:"header-anchor",attrs:{href:"#fibers-on-ruby"}},[e._v("¶")])]),r("p",[e._v("Las fibras son estructuras que implementan un mecanismo de concurrencia cooperativa y liviana en Ruby. Básicamente, son un medio para crear bloques de código que se pueden pausar y reanudar, al igual que los hilos. La principal diferencia es que nunca se planifican implicitamente y que la planificación debe realizarla el programador y no la VM.")]),r("p",[e._v("O sea que en el caso de los "),r("code",{pre:!0},[e._v("threads")]),e._v(", el scheduler se encarga de la planificacion y del manejo del ciclo de vida de esta abstracción. En el caso de los "),r("code",{pre:!0},[e._v("fibers")]),e._v(", esta en nuestras manos la planificación, con lo cual en el código vamos a tener que también tener codigo en cuanto a manejo de los fibers que estamos usando, es decir vamos a tener que explícitamente manejar la planificación. Podemos armar algunas abstracciones pero no suele ser una tarea trivial.")]),r("p",[e._v("A diferencia de otros modelos de concurrencia ligeros sin stack, cada "),r("code",{pre:!0},[e._v("fiber")]),e._v(" viene con un stack. Esto permite que el fiber se pause desde llamadas de función anidadas dentro del bloque del "),r("code",{pre:!0},[e._v("Fiber")]),e._v(".")]),r("p",[e._v("Al ser un esquema colaborativo, nos da un mayor control de la ejecución, y es mas, proporcionan un control total al programador sore su ejecucion como mencionamos antes. Veamos un ejemplo de comparacion en cuanto a los tiempos..")]),r("img",{staticClass:"center",attrs:{src:a("812c")}}),r("p",[e._v("Dos threads que se ejecutan, uno se bloquea por 40ms con una llamada de IO, y después toma unos 10ms mas, el procesamiento de estos datos retornados de la llamada. Después hay un segundo thread, que necesita 50ms, de solo tiempo de CPU. El escenario es el mismo tanto con threads, como con fibers y su planificacion cooperativa.")]),r("p",[e._v("Por defecto, MRI usa un "),r("code",{pre:!0},[e._v("fair scheduler")]),e._v(" ("),r("a",{attrs:{href:"https://es.wikipedia.org/wiki/Planificador_Completamente_Justo"}},[e._v("mas aqui")]),e._v("), que significa que cada thread recibe un mismo tiempo para ejecutar, con quantums de 10ms, antes que se suspendan y que el proximo thread se ponga bajo control. Si uno de los threads esta dentro de una llamada bloquante dentro de esos 10ms, se lo debe tomar como tiempo malgastado, es tiempo en el que seguramente todos los threads estan descansando, por estar bloqueados o esperando I/O. Por el otro lado, los Fibers, al ser scheduleados explicitamente por el programador, o sea nosotros, nos da una flexibilidad a la hora de determinar cuando debemos parar la ejecucion de nuestro fiber y cuando retomarlo. Esto trae, como desventaja, que tenemos ahora un codigo mas complejo, pero a su vez nos ayudan, en que en un caso casi ideal, no necesitemos casi el uso de locks.")]),r("blockquote",[r("p",[e._v("Nota: Desde Ruby 3.0, el concepto de los "),r("code",{pre:!0},[e._v("non-blocking fibers")]),e._v(" fue introducido. Todos los fibers ya son por defecto no bloqueantes. Mas sobre esto en la seccion de Ruby 3.")])]),r("h3",{attrs:{id:"diferencias-que-vemos-entre-los-threads-y-fibers"}},[e._v("Diferencias que vemos entre los threads y fibers "),r("a",{staticClass:"header-anchor",attrs:{href:"#diferencias-que-vemos-entre-los-threads-y-fibers"}},[e._v("¶")])]),r("blockquote",[r("p",[e._v("TL;DR..")])]),r("ul",[r("li",[e._v("Los Fibers son ligeros en cuanto a la memoria que consumen y los tiempos del ciclo de vida")]),r("li",[e._v("Tenemos el control de los Fibers, de manera explicita, o sea que tenemos el control absoluto de su ciclo de vida y planificacion.")]),r("li",[e._v("Si bien con los threads tenemos al scheduler que decide cuando un thread se pausa o reanuda, en el caso de los Fibers es variable. O sea, al tener el control nosotros de la planificacion, tenemos que especificar cuando iniciar y parar la ejecucion de un Fiber.")]),r("li",[e._v("Los Fibers, son maneras de escribir bloques de codigo, que pueden ser pausados o resumidos, bastante parecidos a los threads, pero con la diferencia de la planificacion de nuestro lado.")]),r("li",[e._v("Los "),r("code",{pre:!0},[e._v("Threads")]),e._v(" se ejecutan en un segundo plano, especialmente cuando hay una interrupcion. En el caso de los Fibers, se convierten en el programa principal, cuando se ejecutan, hasta que uno los para.")])]),r("h3",{attrs:{id:"uso-y-estados-de-los-fibers"}},[e._v("Uso y estados de los Fibers "),r("a",{staticClass:"header-anchor",attrs:{href:"#uso-y-estados-de-los-fibers"}},[e._v("¶")])]),r("p",[e._v("Para invocar un fiber, basta con hacer algo como lo siguiente")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("f = Fiber.new { puts "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'blah'")]),e._v(" }\n\nf.resume \nblah\n=> nil\n")])]),r("p",[e._v("Algo interesante para mostrar es que un Fiber no se ejecuta automaticamente, luego de su creacion, sino que necesita que se llame primero a "),r("code",{pre:!0},[e._v("Fiber#resume")]),e._v(" antes. Y seguira en el estado de "),r("code",{pre:!0},[e._v("FIBER_RESUMED")]),e._v(", hasta que se pare su ejecucion o que termine de ejecutar todo el codigo que contiene en su bloque.")]),r("p",[e._v("Como se para un fiber?? por medio de "),r("code",{pre:!0},[e._v("Fiber#yield")]),e._v(". se puede ver este ejemplo en el "),r("a",{attrs:{href:"https://github.com/arquitecturas-concurrentes/ruby-fibers/tree/main/examples/fibers_1.rb"}},[e._v("fiber_1")])]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("fiber = Fiber.new "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("do")]),e._v("\n  puts "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'hola 1'")]),e._v("\n  Fiber."),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("yield")]),e._v("\n  puts "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'hola 2'")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n")])]),r("p",[e._v("en el momento que se ejecuta por primera vez "),r("code",{pre:!0},[e._v("fiber.resume")]),e._v(", solo se ejecutara el primer puts, y cuando se llame a yield, el fiber actual se para y pasa su estado a "),r("code",{pre:!0},[e._v("FIBER_SUSPENDED")]),e._v(". Solo una vez que se llame de nuevo a "),r("code",{pre:!0},[e._v("fiber.resume")]),e._v(", se ejecutara el resto del codigo. Una pregunta valida puede ser, que pasa si una vez que corre todo el codigo del bloque que contiene el fiber, se llama de nuevo a "),r("code",{pre:!0},[e._v("fiber.resume")]),e._v("??")]),r("p",[e._v("Es una buena pregunta y es que una vez que termina, pasa su estado a "),r("code",{pre:!0},[e._v("FIBER_TERMINATED")]),e._v(". Con lo cual nos va a dar un error:")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("["),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("5")]),e._v("] pry(main)> fiber.resume\n"),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v("FiberError:")]),e._v(" dead fiber called\nfrom (pry)"),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("9")]),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v(":in")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("`resume'\n")])])]),r("p",[e._v("Para siempre chequear este estado tenemos un metodo que es "),r("code",{pre:!0},[e._v("Fiber#alive?")]),e._v(", que nos devuelve un booleano, de si un fiber esta vivo o no. Sobre nuestro ejemplo anterior:")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("["),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("6")]),e._v("] pry(main)> fiber.alive?\n=> false\n")])]),r("p",[e._v("Un diagrama de transicion de los estados de un Fiber se puede ver a continuacion.")]),r("img",{staticClass:"center",attrs:{src:a("d1ba")}}),r("h4",{attrs:{id:"para-que-sirven-los-fibers"}},[e._v("Para que sirven los fibers? "),r("a",{staticClass:"header-anchor",attrs:{href:"#para-que-sirven-los-fibers"}},[e._v("¶")])]),r("p",[e._v("Este tipo de abstracciones que modelan un contexto de ejecución, no se usan normalmente, sino que es algo que en general se utiliza en una libreria, implementando otras abstracciones sobre y que usen los fibers, para manejar bien los eventos, cuando parar un fiber y reanudarlo, y despues que nuestro codigo de aplicacion use a esta libreria, sin saber los detalles y que no tenga que operar usando fibers directamente.")]),r("p",[e._v("Un ejemplo de esto, puede verse, si implementamos un "),r("code",{pre:!0},[e._v("reactor")]),e._v(", que es un "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Reactor_pattern#:~:text=The%20reactor%20design%20pattern%20is,to%20the%20associated%20request%20handlers."}},[e._v("patron de diseno")]),e._v(" que nos va a permitir manejar eventos. Hay muchas manera de implementar un reactor. Vimos hace poco que el "),r("code",{pre:!0},[e._v("event loop")]),e._v(" usa "),r("a",{attrs:{href:"https://man7.org/linux/man-pages/man2/epoll_wait.2.html"}},[e._v("epoll")]),e._v(" para saber de nuevos eventos disponibles, que le llegan a un puerto. Otra manera, aunque no tan efectiva, pero mas sencilla de lograr, puede ser mediante "),r("a",{attrs:{href:"https://man7.org/linux/man-pages/man2/select.2.html"}},[e._v("select")]),e._v(".")]),r("p",[e._v("Con "),r("code",{pre:!0},[e._v("select")]),e._v(", que esta presente en Ruby, mediante un wrapper en "),r("code",{pre:!0},[e._v("IO")]),e._v(", podemos implementar un "),r("code",{pre:!0},[e._v("reactor")]),e._v(" simple. Un ejemplo de la cátedra, que usa una implementación mas completa con "),r("code",{pre:!0},[e._v("timers")]),e._v(" y otras abstracciones se puede ver en este "),r("a",{attrs:{href:"https://github.com/arquitecturas-concurrentes/iasc-event-loop-reactor-ruby"}},[e._v("repositorio")]),e._v(".")]),r("p",[e._v("De una manera mucho mas simple, podemos tener una clase "),r("code",{pre:!0},[e._v("Reactor")]),e._v(", que tenga dos mapas para eventos de escritura o lectura.")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[r("span",{pre:!0,attrs:{class:"hljs-class"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("class")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("Reactor")])]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("def")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("initialize")])]),e._v("\n    @readable = {}\n    @writable = {}\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("#...")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n")])]),r("p",[e._v("y que tenga un ciclo de corridas en el que se esperan a que los eventos que esten encolados, la parte interesante de este codigo:")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[r("span",{pre:!0,attrs:{class:"hljs-class"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("class")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("Reactor")])]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("def")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("initialize")])]),e._v("\n    @readable = {}\n    @writable = {}\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n\n  "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("def")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("run")])]),e._v("\n    _error_events = [] "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# unused for now...")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("while")]),e._v(" @readable.any? "),r("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("||")]),e._v(" @writable.any?\n      readable, writable = IO.select(@readable.keys, @writable.keys, _error_events)\n\n      readable.each "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("do")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("|io|")]),e._v("\n        @readable[io].resume\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n\n      writable.each "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("do")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("|io|")]),e._v("\n        @writable[io].resume\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n")])]),r("p",[e._v("esta en la línea del select")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("readable, writable = IO.select(@readable.keys, @writable.keys, _error_events)\n")])]),r("p",[e._v("donde se esperan a que los eventos que tienen una llamada de IO pendiente terminen.")]),r("p",[e._v("Sobre el Reactor se pueden armar otras abstracicones, tales como un servidor de TCP")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("server = TCPServer.new("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'localhost'")]),e._v(", port)\nputs "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Listening on 127.0.0.1:'),r("span",{pre:!0,attrs:{class:"hljs-subst"}},[e._v("#{port}")]),e._v('"')]),e._v("\nreactor = Reactor.new\n")])]),r("p",[e._v("y que use en un loop la aceptación de la conexión")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("loop "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("do")]),e._v("\n  client = reactor.wait_readable(server) { server.accept } \n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# ....")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n")])]),r("p",[e._v("despues hay que esperar desde el servidor a que termine el handshake contra el cliente, por lo que eso es otra llamada, y por lo tanto otro evento...")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("reactor.wait_readable(client) { client.gets })\n")])]),r("p",[e._v("Como unimos estos eventos en el reactor? Mediante alguna abstracción, o contexto de ejecución, que pueda bueno... ejecutarlas. Aquí es donde entran los Fibers..")]),r("p",[e._v("El loop queda entonces, como")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("loop "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("do")]),e._v("\n    client = reactor.wait_readable(server) { server.accept }\n\n    Fiber.new "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("do")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("while")]),e._v(" (_buffer = reactor.wait_readable(client) { client.gets })\n        reactor.wait_writable(client)\n        client.puts("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Pong!"')]),e._v(")\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n\n      client.close\n    "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v(".resume \n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n")])]),r("p",[e._v("Despues hay que wrapear el loop en un ctx similar general, que es otro fiber y listo..")]),r("p",[e._v("El reactor toma los bloques de los eventos de io server y client como bloques que se ejecutaran como otros "),r("code",{pre:!0},[e._v("fibers")]),e._v(".")]),r("p",[e._v("El ejemplo esta en este "),r("a",{attrs:{href:"https://github.com/arquitecturas-concurrentes/ruby-fibers/tree/main/examples/socket/tcp_reactor.rb"}},[e._v("archivo")])]),r("h3",{attrs:{id:"fibers-en-ruby-30"}},[e._v("Fibers en Ruby 3.0 "),r("a",{staticClass:"header-anchor",attrs:{href:"#fibers-en-ruby-30"}},[e._v("¶")])]),r("p",[e._v("Entre otras cosas Ruby 3, introduce el concepto de "),r("code",{pre:!0},[e._v("fibers")]),e._v(" no bloqueantes. Ahora cuando hacemos un "),r("code",{pre:!0},[e._v("Fiber.new() do ... end")]),e._v(", se le puede pasar un flag booleano llamado "),r("code",{pre:!0},[e._v("blocking")]),e._v(". Por defecto el valor de este booleano es "),r("code",{pre:!0},[e._v("false")])]),r("p",[e._v("Cuando se le pasa el valor "),r("code",{pre:!0},[e._v("blocking: true")]),e._v(", el "),r("code",{pre:!0},[e._v("Fiber")]),e._v(" se va a comportar como lo hacia en Ruby 2.x.")]),r("p",[e._v("Lo interesante es cuando no se le pasa este flag o el valor es "),r("code",{pre:!0},[e._v("blocking: false")]),e._v(". Esto permite que el Fiber sea "),r("code",{pre:!0},[e._v("no bloqueante")]),e._v(".")]),r("p",[e._v("Los "),r("code",{pre:!0},[e._v("fibers no bloqueantes")]),e._v(", cuando llegan en el codigo que ejecutan, a una zona que es potencialmente bloqueante (sleep, esperar otro proceso, esperar datos de I/O, etc), en vez de congelarse y parar toda la ejecucion del thread, hace un "),r("code",{pre:!0},[e._v("yield")]),e._v(" implicito, y permite que otros fibers tomen el control. Esto si se maneja mendiante un scheduler, permite que se pueda manejar bien a que fiber se le puede dar prioridad")]),r("p",[e._v("Que es el "),r("code",{pre:!0},[e._v("scheduler")]),e._v("?? En realidad la pregunta correcta sería, como nos damos cuenta ahora con un esquema "),r("code",{pre:!0},[e._v("no bloquante")]),e._v(" cuando tenemos una respuesta con la cual nos va a surgir una nueva duda. Cómo podemos seguir con la ejecución de nuestro fiber? Esto surge porque aun tenemos que planificar a los fibers.")]),r("p",[e._v("Para poder saber y manejar cuando tenemos una respuesta, tendremos un "),r("code",{pre:!0},[e._v("scheduler")]),e._v(", y en si es una clase que simula algo similar a un "),r("code",{pre:!0},[e._v("event loop")]),e._v(". Nos va a permitir:")]),r("ul",[r("li",[e._v("Rastrear y saber el estado de los fibers, y en caso que esten realizando alguna operación "),r("code",{pre:!0},[e._v("bloqueante")]),e._v(", cual es.")]),r("li",[e._v("Permitir reanudar la ejecucion de los fibers que hicieron una operación bloqueante, y se les retorno un resultado.")])]),r("p",[e._v("Ruby por default no provee una clase "),r("code",{pre:!0},[e._v("scheduler")]),e._v(", pero si una interfaz que debe cumplir, y se espera que sea implementado por el usuario, siguiendo, como se menciono la interfaz descrita en "),r("a",{attrs:{href:"https://ruby-doc.org/core-3.0.0/Fiber/SchedulerInterface.html"}},[e._v("Fiber::SchedulerInterface")]),e._v(".")]),r("p",[e._v("Entonces para implementar un "),r("code",{pre:!0},[e._v("scheduler")]),e._v(", tenemos que implementar los siguientes metodos:")]),r("ul",[r("li",[e._v("io_wait. Se llama ante eventos del tipo "),r("code",{pre:!0},[e._v("IO#wait, IO#wait_readable, IO#wait_writeable")])]),r("li",[e._v("process_wait. Se llama ante eventos de "),r("code",{pre:!0},[e._v("Kernel#sleep, Mutex#sleep")])]),r("li",[e._v("kernel_sleep. Se llama ante eventos de "),r("code",{pre:!0},[e._v("Process::Status.wait")])]),r("li",[e._v("block. Se llama ante eventos de "),r("code",{pre:!0},[e._v("Thread#join, Mutex")])]),r("li",[e._v("unblock. Se llama cuando se desbloquea un fiber por alguno de los eventos antes mencionados")]),r("li",[e._v("close. Se llama cuando el thread donde corren los fibers recibe una señal de salida")])]),r("p",[e._v("por lo que un esqueleto de un scheduler es algo como")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[r("span",{pre:!0,attrs:{class:"hljs-class"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("class")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("Scheduler")])]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# trigger by events: IO#wait, IO#wait_readable, IO#wait_writeable")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("def")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("io_wait")]),r("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("(io, events, timeout)")])]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# trigger by events: Kernel#sleep, Mutex#sleep")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("def")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("kernel_sleep")]),r("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("(duration = "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("nil")]),e._v(")")])]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# trigger by events: Process::Status.wait")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("def")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("process_wait")]),r("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("(pid, flags)")])]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# trigger by events: Thread#join, Mutex")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("def")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("block")]),r("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("(blocker, timeout = "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("nil")]),e._v(")")])]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# trigger when a previous block called is unblock")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("def")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("unblock")]),r("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("(blocker, fiber)")])]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n  \n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# Called when current thread exits")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("def")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("close")])]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v("\n")])]),r("p",[e._v("un ejemplo de un scheduler esta en la parte de "),r("a",{attrs:{href:"https://github.com/arquitecturas-concurrentes/ruby-fibers/tree/main/examples/simple_scheduler.rb"}},[e._v("ejemplos")]),e._v(". Un poco basado en el reactor que implementamos en este "),r("a",{attrs:{href:"https://github.com/arquitecturas-concurrentes/iasc-event-loop-reactor-ruby"}},[e._v("repositorio")]),e._v(". En este repo, en "),r("a",{attrs:{href:"https://github.com/arquitecturas-concurrentes/iasc-event-loop-reactor-ruby/blob/master/src/reactor.rb#L117"}},[e._v("cada ciclo de nuestro reactor implementado")]),e._v(", hace un chequeo de "),r("a",{attrs:{href:"https://github.com/arquitecturas-concurrentes/iasc-event-loop-reactor-ruby/blob/master/src/reactor.rb#L122"}},[e._v("los eventos cada un quantum de tiempo determinado")]),e._v(".")]),r("h5",{attrs:{id:"como-usamos-nuestro-scheduler-una-vez-que-lo-tenemos"}},[e._v("Como usamos nuestro scheduler una vez que lo tenemos? "),r("a",{staticClass:"header-anchor",attrs:{href:"#como-usamos-nuestro-scheduler-una-vez-que-lo-tenemos"}},[e._v("¶")])]),r("p",[e._v("Basta con hacer algo como")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("require")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'my_scheduler'")]),e._v("\n\n\nFiber.set_scheduler(MyScheduler.new)\n")])]),r("p",[e._v("después de eso, podemos seguir usando los fibers, como antes en Ruby 2.x")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# now using a non-blocking schema through a SimpleScheduler that does not block the Fibers")]),e._v("\nFiber.new "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("do")]),e._v("\n  puts "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Fiber 1: sleep for 2s'")]),e._v("\n  sleep("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("2")]),e._v(")\n  puts "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Fiber 1: wake up'")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v(".resume\n\nFiber.new "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("do")]),e._v("\n  puts "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Fiber 2: sleep for 3s'")]),e._v("\n  sleep("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("3")]),e._v(")\n  puts "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Fiber 2: wake up'")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("end")]),e._v(".resume\n")])]),r("h3",{attrs:{id:"que-son-los-fibers-por-atras"}},[e._v("Que son los Fibers por atras?? "),r("a",{staticClass:"header-anchor",attrs:{href:"#que-son-los-fibers-por-atras"}},[e._v("¶")])]),r("p",[e._v("En realidad los Fibers, en su implementación al menos en MRI, son en suma ....")]),r("img",{staticClass:"center",attrs:{src:a("0a75")}}),r("p",[e._v("corutinas, simples corutinas.")]),r("p",[e._v("Incluso las mejoras que se introdujeron en Ruby 2.6, son en base a soluciones en C, que ayudaron a mejorar la performance de "),r("code",{pre:!0},[e._v("yield/resume")]),e._v(", en gran medida, usando "),r("code",{pre:!0},[e._v("libcoro")]),e._v(". Se pueden ver mas detalles de esto "),r("a",{attrs:{href:"https://bugs.ruby-lang.org/issues/14739"}},[e._v("aqui")]),e._v(", y una primera implementacion de esta propuesta se puede ver "),r("a",{attrs:{href:"https://github.com/ioquatix/ruby/commit/4a9c12d94aae1cf3a52ca5f026432cd03e9817bc"}},[e._v("aqui")])]),r("p",[e._v("Un ejemplo de como mejoraron los tiempos en su momento puede verse haciendo un simple benchmark, que "),r("a",{attrs:{href:"https://github.com/arquitecturas-concurrentes/ruby-fibers/tree/main/extras/fibers_benchie.rb"}},[e._v("usamos")]),e._v(" y que comparan una version < 2.6 y una en Ruby 3")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v(" Using /home/ernesto/.rvm/gems/ruby-"),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("2.5")]),e._v("."),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v("\n altair.λ"),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v(":~/utn/iasc/fibers-ruby/lib")]),e._v("$ ruby fibers_benchie.rb\n "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1220634.1484423832")]),e._v("/s\n Using /home/ernesto/.rvm/gems/ruby-"),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("3.0")]),e._v("."),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v("-preview1\n altair.λ"),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v(":~/utn/iasc/fibers-ruby/lib")]),e._v("$ ruby fibers_benchie.rb\n "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("4197152.191945104")]),e._v("/s\n")])]),r("p",[e._v("Esta es una librería de "),r("a",{attrs:{href:"http://software.schmorp.de/pkg/libcoro.html"}},[e._v("corutinas en C")]),e._v(", que tiene la implementacion de lo que seria el "),r("code",{pre:!0},[e._v('"context switch"')]),e._v(" entre fibers, que es la parte que en general se va a a estar ejecutando muy a menudo, en "),r("a",{attrs:{href:"http://cvs.schmorp.de/libcoro/coro.c?revision=1.73&view=markup#l223"}},[e._v("assembler")]),e._v(".")]),r("p",[e._v("Hoy en dia, ya no se delega el mecanismo de las corutinas en "),r("code",{pre:!0},[e._v("libcoro")]),e._v(", y se lo trata nativamente, pero con los mismos conceptos. Incluso concepto de que la parte del cambio de contexto de los "),r("code",{pre:!0},[e._v("fibers")]),e._v(" se hace, dependiendo de la arquitectura, con codigo en assembler. "),r("a",{attrs:{href:"https://github.com/ruby/ruby/blob/0ead818d81c975275238878c81f300dd404e0722/coroutine/x86/Context.S#L16"}},[e._v("Ejemplo de x86 ec")]),e._v(", este context switch se llama desde la implementacion nativa de MRI de fibers en C en esta seccion de la funcion "),r("a",{attrs:{href:"https://github.com/ruby/ruby/blob/3d32c217586a48c709b762865a8abc46f9098455/cont.c#L1376"}},[e._v("fiber_setcontext")])]),r("h2",{attrs:{id:"anexo"}},[e._v("Anexo "),r("a",{staticClass:"header-anchor",attrs:{href:"#anexo"}},[e._v("¶")])]),r("h3",{attrs:{id:"sobre-el-tamaño-del-stack-de-threads-y-fibers"}},[e._v("Sobre el tamaño del stack de Threads y Fibers "),r("a",{staticClass:"header-anchor",attrs:{href:"#sobre-el-tamaño-del-stack-de-threads-y-fibers"}},[e._v("¶")])]),r("p",[e._v("El tamaño del stack puede incluso limitar la cantidad de Threads y Fibers que podemos instanciar en una instancia de MRI.")]),r("p",[e._v("Podemos comprobar rápidamente el tamaño de la pila para un "),r("code",{pre:!0},[e._v("Thread")]),e._v(" y para las"),r("code",{pre:!0},[e._v("Fibers")]),e._v(" en ruby ​​comprobando "),r("code",{pre:!0},[e._v("RubyVM :: DEFAULT_PARAMS")]),e._v(" en la consola irb o pry:")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("pry(main)> RubyVM::DEFAULT_PARAMS\n=> {"),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v(":thread_vm_stack_size=>")]),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1048576")]),e._v(",\n "),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v(":thread_machine_stack_size=>")]),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1048576")]),e._v(",\n "),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v(":fiber_vm_stack_size=>")]),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("131072")]),e._v(",\n "),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v(":fiber_machine_stack_size=>")]),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("524288")]),e._v("}\n")])]),r("blockquote",[r("p",[e._v("Esto solo es valido para versiones de Ruby >= 2.0.0")])]),r("p",[e._v("Ahora podemos comprobar rápidamente el tamaño de la pila de los "),r("code",{pre:!0},[e._v("hilos")]),e._v(" tal como están")]),r("p",[e._v("Esto muestra claramente que el tamaño de la pila para los subprocesos en ruby ​​es solo de 1 MB, mientras que el tamaño de la pila para las fibras es de solo 512k. Podemos cambiar esto haciendo una exportación de cada una de las variables, como por ejemplo:")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-dotenv"}},[e._v("export RUBY_FIBER_VM_STACK_SIZE=2097152\nexport RUBY_THREAD_VM_STACK_SIZE=2097152\n")])]),r("p",[e._v("Esto aumentará el tamaño de la pila y las veces que podemos llamar a una pila anidada.")]),r("p",[e._v("Con stack size de 1MB")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("$ ruby stack_size.rb \nMax Stack "),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v("Level:")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("10079")]),e._v("\n")])]),r("p",[e._v("Con un stack de 2MB")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-ruby"}},[e._v("altair.λ"),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v(":~/utn/iasc/fibers-ruby/extras")]),e._v("$ ruby stack_size.rb \nMax Stack "),r("span",{pre:!0,attrs:{class:"hljs-symbol"}},[e._v("Level:")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20161")]),e._v("\n")])]),r("p",[e._v("Podemos ver que es casi linea la cantidad de veces que podemos llamar al stack con el stack size que tenemos.")]),r("blockquote",[r("p",[e._v("Esto puede variar dependiendo de la información y de los datos que guardemos en el stack.")])])])}],n=a("2877"),o={},l=Object(n["a"])(o,r,t,!1,null,null,null);s["default"]=l.exports},"812c":function(e,s,a){e.exports=a.p+"img/fiversvsthreads.04634cfb.png"},d1ba:function(e,s,a){e.exports=a.p+"img/fiber_status.9c3f958e.png"}}]);
//# sourceMappingURL=chunk-36154627.a6b93af1.js.map