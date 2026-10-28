// ============ AUTOEVALUACIÓN ============
const preguntas = [
  {
    q: "¿En qué año se sancionó la Ley Federal de Educación, que amplió la obligatoriedad a 10 años y dividió el sistema en EGB y Polimodal?",
    ops: ["1989", "1992", "1993", "2006"],
    r: 2,
    exp: "La Ley Federal de Educación (24.195) es de 1993. La ley 24.049 de transferencia de servicios es de 1992 y la LEN 26.206 es de 2006."
  },
  {
    q: "La ley 24.049 (1992) de transferencia de servicios educativos pasó a las provincias...",
    ops: ["solo las escuelas primarias", "las escuelas de nivel medio y superior del Estado nacional", "los institutos de formación docente únicamente", "el financiamiento, pero no las escuelas"],
    r: 1,
    exp: "La 24.049 (1992) transfirió las escuelas de enseñanza media y superior nacionales a las provincias. La primaria ya se había transferido en 1978 (dictadura, +6.000 escuelas)."
  },
  {
    q: "¿Cuál fue la causa principal que impulsó las transferencias de escuelas a las provincias (según el análisis de clase)?",
    ops: ["Democratizar la gestión escolar", "Dar autonomía provincial real", "Aliviar el déficit fiscal del presupuesto nacional", "Mejorar la calidad educativa"],
    r: 2,
    exp: "La descentralización fue impulsada principalmente por razones financieras: traspasar gastos a las provincias. No amplió la democratización ni la autonomía real."
  },
  {
    q: "¿Qué organismos internacionales ocuparon un rol protagónico en las políticas educativas de los '90, reemplazando a UNESCO/UNICEF?",
    ops: ["El Banco Mundial y el FMI", "La OIT y la OMS", "La CEPAL y el BID", "La UNESCO y la OEA"],
    r: 0,
    exp: "En los '90 el protagonismo pasó a organismos económico-financieros (Banco Mundial, FMI) que instalaron la lógica de mercado y los 'planes de desarrollo' en educación."
  },
  {
    q: "Durante la dictadura, ¿cuándo se transfirieron definitivamente las escuelas primarias a las provincias?",
    ops: ["1970, con Onganía", "1976, con el golpe", "1978, bajo Videla", "1983, ya en democracia"],
    r: 2,
    exp: "En 1978 (gobierno de facto de Videla) se transfirieron definitivamente las escuelas primarias; en 1970 Onganía había derogado la ley Láinez. Fueron más de 6.000 escuelas transferidas de manera desordenada."
  },
  {
    q: "La Marcha Blanca de 1988 fue...",
    ops: ["Una marcha estudiantil por la democratización", "El intento de unificación de salarios docentes que consolidó al gremio como actor central", "La celebración del Congreso Pedagógico", "Una protesta contra la Ley Federal"],
    r: 1,
    exp: "La Marcha Blanca del '88 buscó la unificación de salarios docentes y convirtió al sindicalismo docente en actor central de la política educativa desde entonces."
  },
  {
    q: "La Ley de Educación Nacional 26.206 (2006) estableció la obligatoriedad de...",
    ops: ["7 años", "10 años", "13 años (inicial, primaria y secundaria)", "solo la secundaria"],
    r: 2,
    exp: "La LEN extendió la obligatoriedad a 13 años, cubriendo inicial, primaria y secundaria, y definió la educación como bien público y derecho social e individual."
  },
  {
    q: "El concepto de 'subsidiariedad' en los '90 significa que...",
    ops: ["El Estado nacional asume todo el financiamiento", "El Estado se omite y deriva funciones a unidades menores (provincias, municipios, escuelas) sin recursos para asumirlas", "Las provincias subsidiarán a la Nación", "Las empresas financian la escuela pública"],
    r: 1,
    exp: "La subsidiariedad se construye por omisión: el Estado deriva el 'bien común general' a unidades menores que no tienen los recursos financieros ni organizativos, y ellas quedan cargando con la falta."
  },
  {
    q: "En el caso del FinEs en La Pampa, ¿qué ocupó el lugar de los recursos nacionales que faltaron después de 2017?",
    ops: ["Un nuevo plan nacional de terminalidad", "La autogestión de las escuelas EDJA y de los actores ministeriales con los recursos disponibles", "La inversión del gobierno provincial en nuevas sedes", "Nada: la demanda desapareció"],
    r: 1,
    exp: "Tras la suspensión de fondos (2018), las escuelas de la Modalidad de Educación de Jóvenes y Adultos (EDJA) absorbieron la demanda con recorridos adaptados y 'lo que ya hay en la escuela': sostener el sentido de la política aún sin la política y sus recursos."
  },
  {
    q: "El 'modelo La Pampa' de la EGB3 (años '90) se caracterizó por...",
    ops: ["Ciclo unificado con dirección y edificio propios, pero concentrador de matrícula (más segmentación)", "Escuelas sin edificio propio y dirección compartida", "El 7°, 8° y 9° año a cargo de profesores", "La eliminación de la concentración de matrícula"],
    r: 0,
    exp: "El 'modelo La Pampa' adoptó el formato de ciclo unificado con autonomía institucional y pedagógica, dirección independiente y edificios propios, pero concentraba matrícula de EGB1y2, lo que profundizó la segmentación. El 7° año estaba a cargo de maestros y 8°-9° de profesores."
  },
  {
    q: "¿Qué continuidades de los '90 persisten en el período post-2003, a pesar del discurso de 'recuperación del Estado'?",
    ops: ["Ninguna: hubo ruptura total", "La fragmentación del sistema, la autonomía por proyectos y la competencia por recursos", "La EGB y el Polimodal", "El aumento de la obligatoriedad a 10 años"],
    r: 1,
    exp: "Pese al discurso de ruptura, persisten estructuras de los '90: fragmentación del sistema, autonomía escolar por proyectos (PEIs), competencia por recursos y distancia entre discurso oficial y condiciones materiales."
  },
  {
    q: "En el Congreso Pedagógico del alfonsinismo...",
    ops: ["Se sancionó directamente la Ley Federal", "Se buscó repetir el gesto participativo que dio origen a la ley 1420, pero con participación desigual y actores con poder", "Se decidió la transferencia de escuelas", "Se unificaron los salarios docentes"],
    r: 1,
    exp: "El Congreso Pedagógico buscó recrear el gesto participativo de origen de la 1420, pero no pudo modificar las estructuras profundas por la desigual participación y la presencia de actores con poder."
  }
];

const contQuiz = document.getElementById('quiz-container');
const contRes = document.getElementById('quiz-result');
let respondidas = 0;
let aciertos = 0;

function armarQuiz() {
  preguntas.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-q';
    const enun = document.createElement('div');
    enun.className = 'enunciado';
    enun.textContent = (i + 1) + '. ' + p.q;
    div.appendChild(enun);
    p.ops.forEach((op, j) => {
      const btn = document.createElement('button');
      btn.textContent = op;
      btn.addEventListener('click', () => responder(div, btn, i, j));
      div.appendChild(btn);
    });
    const fb = document.createElement('div');
    fb.className = 'quiz-feedback';
    div.appendChild(fb);
    contQuiz.appendChild(div);
  });
}

function responder(div, btn, i, j) {
  const botones = div.querySelectorAll('button');
  const fb = div.querySelector('.quiz-feedback');
  botones.forEach(b => b.disabled = true);
  const correcta = preguntas[i].r;
  botones[correcta].classList.add('correcta');
  if (j === correcta) {
    aciertos++;
    fb.textContent = '✔ Correcto. ' + preguntas[i].exp;
  } else {
    btn.classList.add('incorrecta');
    fb.textContent = '✘ Incorrecto. ' + preguntas[i].exp;
  }
  respondidas++;
  if (respondidas === preguntas.length) {
    contRes.textContent = 'Resultado final: ' + aciertos + ' de ' + preguntas.length + ' correctas. ' +
      (aciertos >= preguntas.length * 0.8 ? '¡Nivel de parcial asegurado! 🎓' :
       aciertos >= preguntas.length * 0.6 ? 'Bien, pero repasá las tarjetas de los períodos.' :
       'Volvé a la línea de tiempo y a los conceptos clave antes de rendir.');
  }
}

armarQuiz();

// ============ FLASHCARDS ============
const tarjetas = [
  { f: "Estado de Bienestar / Estado educador", d: "La escuela pública como mecanismo de democratización social: ley 463 de subvenciones (1871), ley 1420 (1884, primaria obligatoria, gratuita y gradual), ley Láinez (1905, escuelas nacionales en provincias → doble sistema escolar)." },
  { f: "1970 y 1978", d: "Onganía deroga la ley Láinez (1970); en 1978, bajo Videla, se transfieren definitivamente las escuelas primarias a las provincias: más de 6.000 escuelas de manera desordenada, mientras el Estado se ausenta pedagógicamente." },
  { f: "1983–1988 (alfonsinismo)", d: "Retorno a la democracia: escuela abierta, derechos restituidos. Congreso Pedagógico Nacional (participativo, con límites) y Marcha Blanca de 1988 por la unificación salarial: el gremio docente se vuelve actor central." },
  { f: "Las 'cuatro leyes' del menemismo", d: "24.049 (1992, transferencia de media y superior), Ley Federal 24.195 (1993, obligatoriedad de 10 años, EGB + Polimodal), 24.521 (1995, Educación Superior) y el régimen de formación docente / FONID. Resultado: 24 sistemas provinciales sin criterio común." },
  { f: "Subsidiariedad del Estado", d: "El Estado se omite en sus funciones y deriva el 'bien común general' a unidades menores (provincias, municipios, escuelas) sin recursos para asumirlas: la subsidiariedad se construye por omisión y quien no puede queda cargando con la falta." },
  { f: "'Ministerio sin escuelas'", d: "Tras las transferencias, el Ministerio Nacional conserva el diseño curricular, la evaluación y los programas, pero ya no administra escuelas: dirige desde afuera y descarga en las provincias el costo del servicio." },
  { f: "Recentralización neoconservadora", d: "Paradoja de los '90: se 'decentraliza' el gasto, pero la Nación centraliza el direccionamiento (currículo, formación docente, programas vinculados directo a la escuela) en clave conservadora: mercado, usuario-consumidor, competitividad." },
  { f: "Educación como servicio de consumo", d: "De derecho que el Estado garantiza a servicio que se consume: el usuario elige y compite, las escuelas se diferencian por clase social. La LEN 26.206 (2006) intenta revertirlo: educación como bien público y derecho social e individual." },
  { f: "2001: crisis terminal", d: "Desempleo, pobreza y desigualdad en su pico (diciembre de 2001, De la Rúa). Rebelión popular contra el consenso neoliberal: las críticas a la LFE ascienden porque no mejoró la calidad y aumentó la fragmentación y las desigualdades." },
  { f: "Kirchnerismo (2003–2011)", d: "Discurso de intervención del Estado y derechos sociales: Financiamiento Educativo, LEN 26.206 (obligatoriedad de 13 años), ESI 26.150, INFD, educación técnica, salarios docentes. Pero persisten la autonomía por proyectos, la competencia por recursos y la fragmentación: continuidades, no ruptura total." },
  { f: "FinEs en La Pampa (2008–2018)", d: "Plan de terminalidad para jóvenes y adultos: ~1.454 egresados en 2015 en 26 sedes. En 2018 el Ministerio Nacional suspende los fondos: 'defunción' formal, pero supervivencia adaptada vía escuelas EDJA. El derecho queda librado a la 'voluntad provincial'." },
  { f: "Garantizar ≠ certificar", d: "Los casos locales (FinEs, ESI, secundaria obligatoria) muestran sistemas que expiden certificados sin garantizar recursos, docentes y condiciones: la falta la cargan las provincias, las escuelas y los docentes." },
  { f: "'Modelo La Pampa' (EGB3)", d: "Ciclo unificado con autonomía institucional, dirección y edificio propios, pero concentrador de matrícula (segmentación). 7° año con maestros, 8°–9° con profesores, sin formación para los nuevos roles. El polimodal: carga horaria achicada y profesores descalificados." },
  { f: "Secundaria post-LEN en La Pampa", d: "Ley provincial 2511 (2009) opta 6/6. Decreto 2352 y 2745 (2009): primer año del nuevo secundario en 2010, definiendo como secundarias a ex EGB3 y ex polimodales. Cargos: Coordinador de Curso, TOyEA (1° CB), EATE (2° y 3° CB). Los roles responden más a reubicar docentes que al acompañamiento pedagógico." }
];

let idx = 0;
const contFlash = document.getElementById('flash-container');
const contCount = document.getElementById('flash-count');

function mostrarTarjeta() {
  contFlash.innerHTML = '';
  const zona = document.createElement('div');
  zona.className = 'flash-zone';
  const card = document.createElement('div');
  card.className = 'flashcard';
  const frente = document.createElement('div');
  frente.className = 'flash-cara frente';
  const h = document.createElement('h3');
  h.textContent = tarjetas[idx].f;
  const hintF = document.createElement('div');
  hintF.className = 'flash-hint';
  hintF.textContent = 'clic para ver la respuesta';
  frente.appendChild(h);
  frente.appendChild(hintF);
  const dorso = document.createElement('div');
  dorso.className = 'flash-cara dorso';
  const p = document.createElement('p');
  p.textContent = tarjetas[idx].d;
  const hintD = document.createElement('div');
  hintD.className = 'flash-hint';
  hintD.textContent = 'clic para volver';
  dorso.appendChild(p);
  dorso.appendChild(hintD);
  card.appendChild(frente);
  card.appendChild(dorso);
  card.addEventListener('click', () => card.classList.toggle('girada'));
  zona.appendChild(card);
  contFlash.appendChild(zona);
  contCount.textContent = (idx + 1) + ' / ' + tarjetas.length;
}

document.getElementById('flash-prev').addEventListener('click', () => {
  idx = (idx - 1 + tarjetas.length) % tarjetas.length;
  mostrarTarjeta();
});
document.getElementById('flash-next').addEventListener('click', () => {
  idx = (idx + 1) % tarjetas.length;
  mostrarTarjeta();
});

mostrarTarjeta();
